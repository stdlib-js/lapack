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

// MODULES //

var base = require( './base.js' );


// MAIN //

/**
* Performs a series of row interchanges on a matrix `A` using pivot indices stored in `IPIV`.
*
* @param {PositiveInteger} N - number of columns in `A`
* @param {Complex64Array} A - input matrix
* @param {integer} strideA1 - stride of the first dimension of `A`
* @param {integer} strideA2 - stride of the second dimension of `A`
* @param {NonNegativeInteger} offsetA - index offset for `A`
* @param {NonNegativeInteger} k1 - index of first row to interchange
* @param {NonNegativeInteger} k2 - index of last row to interchange
* @param {integer} inck - direction in which to apply pivots (-1 to apply pivots in reverse order; otherwise, apply in provided order)
* @param {Int32Array} IPIV - vector of pivot indices
* @param {integer} strideIPIV - `IPIV` stride length
* @param {NonNegativeInteger} offsetIPIV - index offset for `IPIV`
* @returns {Complex64Array} permuted matrix `A`
*
* @example
* var Int32Array = require( '@stdlib/array/int32' );
* var Complex64Array = require( '@stdlib/array/complex64' );
*
* var IPIV = new Int32Array( [ 2, 0, 1 ] );
* var A = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
*
* claswp( 2, A, 2, 1, 0, 0, 2, 1, IPIV, 1, 0 );
* // A => <Complex64Array>[ 5.0, 6.0, 7.0, 8.0, 1.0, 2.0, 3.0, 4.0, 9.0, 10.0, 11.0, 12.0 ]
*/
function claswp( N, A, strideA1, strideA2, offsetA, k1, k2, inck, IPIV, strideIPIV, offsetIPIV ) { // eslint-disable-line max-len, max-params
	var tmp;
	if ( inck < 0 ) {
		offsetIPIV += k2 * strideIPIV;
		strideIPIV *= -1;
		tmp = k1;
		k1 = k2;
		k2 = tmp;
		inck = -1;
	} else {
		offsetIPIV += k1 * strideIPIV;
		inck = 1;
	}
	return base( N, A, strideA1, strideA2, offsetA, k1, k2, inck, IPIV, strideIPIV, offsetIPIV ); // eslint-disable-line max-len
}


// EXPORTS //

module.exports = claswp;
