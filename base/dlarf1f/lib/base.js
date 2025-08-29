/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

/* eslint-disable max-len */

// MODULES //

var iladlc = require( './../../../base/iladlc' ).ndarray;
var iladlr = require( './../../../base/iladlr' ).ndarray;
var dgemv = require( '@stdlib/blas/base/dgemv' ).ndarray;
var dger = require( '@stdlib/blas/base/dger' ).ndarray;
var daxpy = require( '@stdlib/blas/base/daxpy' ).ndarray;
var dscal = require( '@stdlib/blas/base/dscal' ).ndarray;


// FUNCTIONS //

/**
* Tests whether an operation should be applied to the left side.
*
* @private
* @param {string} side - operation side
* @returns {boolean} boolean indicating if an operation should be applied to the left side
*/
function isLeftSide( side ) {
	return side === 'left';
}


// MAIN //

/**
* Applies a real elementary reflector `H = I - tau * v * v^T` to a real M by N matrix `C`.
*
* ## Notes
*
* -   If `side = 'left'`,
*
*     -   `work` should have `N` indexed elements.
*     -   `V` should have `1 + (M-1) * abs(strideV)` indexed elements.
*     -   `C` is overwritten by `H * C`.
*
* -   If `side = 'right'`,
*
*     -   `work` should have `M` indexed elements.
*     -   `V` should have `1 + (N-1) * abs(strideV)` indexed elements.
*     -   `C` is overwritten by `C * H`.
*
* @private
* @param {string} side - specifies the side of multiplication with `C`
* @param {NonNegativeInteger} M - number of rows in `C`
* @param {NonNegativeInteger} N - number of columns in `C`
* @param {Float64Array} V - the vector `v`
* @param {integer} strideV - stride length for `V`
* @param {NonNegativeInteger} offsetV - starting index for `V`
* @param {number} tau - scalar constant
* @param {Float64Array} C - input matrix
* @param {integer} strideC1 - stride of the first dimension of `C`
* @param {integer} strideC2 - stride of the second dimension of `C`
* @param {NonNegativeInteger} offsetC - starting index for `C`
* @param {Float64Array} work - workspace array
* @param {integer} strideWork - stride length for `work`
* @param {NonNegativeInteger} offsetWork - starting index for `work`
* @returns {Float64Array} `C * H` or `H * C`
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var C = new Float64Array( [ 1.0, 5.0, 9.0, 2.0, 6.0, 10.0, 3.0, 7.0, 11.0, 4.0, 8.0, 12.0 ] );
* var V = new Float64Array( [ 0.5, 0.5, 0.5, 0.5 ] );
* var work = new Float64Array( 3 );
*
* var out = dlarf1f( 'left', 4, 3, V, 1, 0, 1.0, C, 3, 1, 0, work, 1, 0 );
* // returns <Float64Array>[ -4.5, -10.5, -16.5, -0.75, -1.75, -2.75, 0.25, -0.75, -1.75, 1.25,  0.25, -0.75 ]
*/
function dlarf1f( side, M, N, V, strideV, offsetV, tau, C, strideC1, strideC2, offsetC, work, strideWork, offsetWork ) { // eslint-disable-line max-params
	var lastv;
	var lastc;
	var i;

	if ( tau === 0.0 ) {
		return C;
	}
	lastc = 0;
	if ( isLeftSide( side ) ) {
		lastv = M;
	} else {
		lastv = N;
	}
	// Initialize `i` to point to the last element in `V`:
	i = offsetV + ( ( lastv-1 ) * strideV );

	// Move `i` to the last non-zero element in `V`, where we assume that V[0] = 1, and it is not stored, so we shouldn't access it...
	while ( lastv > 0 && V[ i ] === 0.0 ) {
		lastv -= 1;
		i -= strideV;
	}
	if ( isLeftSide( side ) ) {
		// Scan for the last non-zero column in `C`:
		lastc = iladlc( lastv + 1, N, C, strideC1, strideC2, offsetC ) + 1; // adjust by `+1` to account for the difference between zero-based and one-based indexing
	} else {
		// Scan for the last non-zero row in `C`:
		lastc = iladlr( M, lastv + 1, C, strideC1, strideC2, offsetC ) + 1; // // adjust by `+1` to account for the difference between zero-based and one-based indexing
	}
	// Return `C` unchanged if all elements in `C` are zero...
	if ( lastc === 0 ) {
		return C;
	}
	if ( isLeftSide( side ) ) {
		// Form: H*C

		// If `lastv = 1`, this means `V = 1`, so we just need to compute `C = H*C = (1-tau)*C`...
		if ( lastv === 0 ) {
			// C[0,0:lastc] = (1-tau)*C[0,0:lastc]
			dscal( lastc, 1.0-tau, C, strideC2, offsetC ); // scale the first row
		} else {
			// work[0:lastc,0] = C[0:lastv,0:lastc]^T * V[0:lastv,0]

			// work[0:lastc,0] = C[1:lastv,0:lastc]^T * V[1:lastv,0]
			dgemv( 'transpose', lastv-1, lastc, 1.0, C, strideC1, strideC2, offsetC+strideC1, V, strideV, offsetV+strideV, 0.0, work, strideWork, offsetWork );

			// work[0:lastc,0] += C[0,0:lastc]^T * V[0,0] = C[0,0:lastc]^T
			daxpy( lastc, 1.0, C, strideC2, offsetC, work, strideWork, offsetWork ); // operates on the first row of C

			// C[0:lastv,0:lastc] = C[...] - ( tau * V[0:lastv,0] * work[0:lastc,0]^T)

			// C[0,0:lastc] = C[...] - ( tau * V[0,0] * work[0:lastc,0]^^T ) = C[...] - ( tau * work[0:lastc,0]^T )
			daxpy( lastc, -tau, work, strideWork, offsetWork, C, strideC2, offsetC ); // operates on the first row of C

			// C[1:lastv,0:lastc] = C[...] - ( tau * V[1:lastv,0] * work[0:lastc,0]^T )
			dger( lastv-1, lastc, -tau, V, strideV, offsetV+strideV, work, strideWork, offsetWork, C, strideC1, strideC2, offsetC+strideC1 );
		}
		return C;
	}
	// side === 'right'

	// Form: C*H

	// If `N = 1`, then `V = 1`, so we just need to compute `C = CH = C*(1-tau)`...
	if ( lastv === 0 ) {
		// C[0:lastc,0] = ( 1-tau ) * C[0:lastc,0]
		dscal( lastc, 1.0-tau, C, strideC1, offsetC ); // scale the first column
		return C;
	}
	// work[0:lastc,0] = ( 1-tau ) * C[0:lastc,0]

	// work[0:lastc,0] = C[0:lastc,1:lastv] * V[1:lastv,0]
	dgemv( 'no-transpose', lastc, lastv-1, 1.0, C, strideC1, strideC2, offsetC+strideC2, V, strideV, offsetV+strideV, 0.0, work, strideWork, offsetWork );

	// work[0:lastc,0] += C[0:lastc,0] * V[0,0] = C[0:lastc,0]
	daxpy( lastc, 1.0, C, strideC1, offsetC, work, strideWork, offsetWork ); // operates on the first column of C

	// C[0:lastc,0:lastv] = C[...] - ( tau * work[0:lastc,0] * V[0:lastv,0]^T )

	// C[0:lastc,0] = C[...] - ( tau * work[0:lastc,0] * V[0,0]^T ) = C[...] - ( tau * work[0:lastc,0] )
	daxpy( lastc, -tau, work, strideWork, offsetWork, C, strideC1, offsetC ); // operates on the first column of C

	// C[0:lastc,1:lastv] = C[...] - ( tau * work[0:lastc,0] * V[1:lastv]^T )
	dger( lastc, lastv-1, -tau, work, strideWork, offsetWork, V, strideV, offsetV+strideV, C, strideC1, strideC2, offsetC+strideC2 );

	return C;
}


// EXPORTS //

module.exports = dlarf1f;
