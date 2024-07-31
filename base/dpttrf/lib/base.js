/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

// MAIN //

/**
* Computes the `L * D * L^T` factorization of a real symmetric positive definite tridiagonal matrix `A`.
*
* @private
* @param {NonNegativeInteger} N - order of matrix `A`
* @param {Float64Array} D - the `N` diagonal elements of `A`
* @param {integer} strideD - stride length for `D`
* @param {NonNegativeInteger} offsetD - starting index of `D`
* @param {Float64Array} E - the `N-1` subdiagonal elements of `A`
* @param {integer} strideE - stride length for `E`
* @param {NonNegativeInteger} offsetE - starting index of `E`
* @returns {integer} status code
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var D = new Float64Array( [ 4.0, 5.0, 6.0 ] );
* var E = new Float64Array( [ 1.0, 2.0 ] );
*
* dpttrf( 3, D, 1, 0, E, 1, 0 );
* // D => <Float64Array>[ 4, 4.75, ~5.15789 ]
* // E => <Float64Array>[ 0.25, ~0.4210 ]
*/
function dpttrf( N, D, strideD, offsetD, E, strideE, offsetE ) {
	var id;
	var ie;
	var v;
	var i;

	if ( N === 0 ) {
		return 0;
	}
	ie = offsetE;
	id = offsetD;

	// Compute the `L * D * L^T` factorization of `A`...
	for ( i = 0; i < N-1; i++ ) {
		// If `D[k] <= 0`, then the matrix is not positive definite...
		if ( D[ id ] <= 0.0 ) {
			return i+1;
		}
		// Solve for E[k] and D[k+1]...
		v = E[ ie ];
		E[ ie ] = v / D[ id ];

		id += strideD;
		D[ id ] -= E[ ie ] * v;

		ie += strideE;
	}
	// Check `D[k]` for positive definiteness...
	if ( D[ id ] <= 0.0 ) {
		return N;
	}
	return 0;
}


// EXPORTS //

module.exports = dpttrf;