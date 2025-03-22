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

var isLayout = require( '@stdlib/blas/base/assert/is-layout' );
var format = require( '@stdlib/string/format' );
var base = require( './base.js' );


// MAIN //

/**
* Sets the off-diagonal elements and the diagonal elements of a single-precision complex floating-point matrix to specified values.
*
* @param {string} order - storage layout of `A`
* @param {string} uplo - specifies whether to set the upper or lower triangular/trapezoidal part of matrix `A`
* @param {NonNegativeInteger} M - number of rows in matrix `A`
* @param {NonNegativeInteger} N - number of columns in matrix `A`
* @param {Complex64} alpha - value assigned to off-diagonal elements
* @param {Complex64} beta - value assigned to diagonal elements
* @param {Complex64Array} A - input matrix
* @param {PositiveInteger} LDA - stride of the first dimension of `A` (a.k.a., leading dimension of the matrix `A`)
* @throws {TypeError} first argument must be a valid order
* @throws {RangeError} eighth argument must be greater than or equal to `N`
* @returns {Complex64Array} `A`
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
* var Complex64 = require( '@stdlib/complex/float32/ctor' );
* var realf = require( '@stdlib/complex/float32/real' );
* var imagf = require( '@stdlib/complex/float32/imag' );
*
* var A = new Complex64Array( 4 );
*
* var alpha = new Complex64( 1.0, 2.0 );
* var beta = new Complex64( 3.0, 4.0 );
*
* claset( 'row-major', 'all', 2, 2, alpha, beta, A, 2 );
*
* var z = A.get( 0 );
* // returns <Complex64>
*
* var re = realf( z );
* // returns 3.0
*
* var im = imagf( z );
* // returns 4.0
*
* z = A.get( 1 );
* // returns <Complex64>
*
* re = realf( z );
* // returns 1.0
*
* im = imagf( z );
* // returns 2.0
*
* z = A.get( 2 );
* // returns <Complex64>
*
* re = realf( z );
* // returns 1.0
*
* im = imagf( z );
* // returns 2.0
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
* var Complex64 = require( '@stdlib/complex/float32/ctor' );
* var realf = require( '@stdlib/complex/float32/real' );
* var imagf = require( '@stdlib/complex/float32/imag' );
*
* var A = new Complex64Array( 4 );
*
* var alpha = new Complex64( 1.0, 2.0 );
* var beta = new Complex64( 3.0, 4.0 );
*
* claset( 'row-major', 'upper', 2, 2, alpha, beta, A, 2 );
*
* var z = A.get( 0 );
* // returns <Complex64>
*
* var re = realf( z );
* // returns 3.0
*
* var im = imagf( z );
* // returns 4.0
*
* z = A.get( 1 );
* // returns <Complex64>
*
* re = realf( z );
* // returns 1.0
*
* im = imagf( z );
* // returns 2.0
*
* z = A.get( 2 );
* // returns <Complex64>
*
* re = realf( z );
* // returns 0.0
*
* im = imagf( z );
* // returns 0.0
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
* var Complex64 = require( '@stdlib/complex/float32/ctor' );
* var realf = require( '@stdlib/complex/float32/real' );
* var imagf = require( '@stdlib/complex/float32/imag' );
*
* var A = new Complex64Array( 4 );
*
* var alpha = new Complex64( 1.0, 2.0 );
* var beta = new Complex64( 3.0, 4.0 );
*
* claset( 'row-major', 'lower', 2, 2, alpha, beta, A, 2 );
*
* var z = A.get( 0 );
* // returns <Complex64>
*
* var re = realf( z );
* // returns 3.0
*
* var im = imagf( z );
* // returns 4.0
*
* z = A.get( 1 );
* // returns <Complex64>
*
* re = realf( z );
* // returns 0.0
*
* im = imagf( z );
* // returns 0.0
*
* z = A.get( 2 );
* // returns <Complex64>
*
* re = realf( z );
* // returns 1.0
*
* im = imagf( z );
* // returns 2.0
*/
function claset( order, uplo, M, N, alpha, beta, A, LDA ) {
	var sa1;
	var sa2;
	if ( !isLayout( order ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be a valid order. Value: `%s`.', order ) );
	}
	if ( order === 'column-major' ) {
		sa1 = 1;
		sa2 = LDA;
	} else { // order === 'row-major'
		if ( LDA < N ) {
			throw new RangeError( format( 'invalid argument. Eighth argument must be greater than or equal to %d. Value: `%d`.', N, LDA ) );
		}
		sa1 = LDA;
		sa2 = 1;
	}
	return base( uplo, M, N, alpha, beta, A, sa1, sa2, 0 );
}


// EXPORTS //

module.exports = claset;
