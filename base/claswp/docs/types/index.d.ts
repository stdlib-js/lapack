/*
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

// TypeScript Version: 4.1

/// <reference types="@stdlib/types"/>

import { Layout } from '@stdlib/types/blas';
import { Complex64Array } from '@stdlib/types/array';

/**
* Interface describing `claswp`.
*/
interface Routine {
	/**
	* Performs a series of row interchanges on a matrix `A` using pivot indices stored in `IPIV`.
	*
	* @param order - storage layout
	* @param N - number of columns in `A`
	* @param A - input matrix
	* @param LDA - stride of the first dimension of `A` (a.k.a., leading dimension of the matrix `A`)
	* @param k1 - index of first row to interchange
	* @param k2 - index of last row to interchange
	* @param IPIV - vector of pivot indices
	* @param incx - increment between successive values of `IPIV`
	* @returns permuted matrix `A`
	*
	* @example
	* var Int32Array = require( '@stdlib/array/int32' );
	* var Complex64Array = require( '@stdlib/array/complex64' );
	*
	* var IPIV = new Int32Array( [ 2, 0, 1 ] );
	* var A = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
	*
	* claswp( 'row-major', 2, A, 2, 0, 2, IPIV, 1 );
	* // A => <Complex64Array>[ 5.0, 6.0, 7.0, 8.0, 1.0, 2.0, 3.0, 4.0, 9.0, 10.0, 11.0, 12.0 ]
	*/
	( order: Layout, N: number, A: Complex64Array, LDA: number, k1: number, k2: number, IPIV: Int32Array, incx: number ): Complex64Array;

	/**
	* Performs a series of row interchanges on a matrix `A` using pivot indices stored in `IPIV` and alternative indexing semantics.
	*
	* @param N - number of columns in `A`
	* @param A - input matrix
	* @param strideA1 - stride of the first dimension of `A`
	* @param strideA2 - stride of the second dimension of `A`
	* @param offsetA - index offset for `A`
	* @param k1 - index of first row to interchange
	* @param k2 - index of last row to interchange
	* @param inck - direction in which to apply pivots (-1 to apply pivots in reverse order; otherwise, apply in provided order)
	* @param IPIV - vector of pivot indices
	* @param strideIPIV - `IPIV` stride length
	* @param offsetIPIV - index offset for `IPIV`
	* @returns permuted matrix `A`
	*
	* @example
	* var Int32Array = require( '@stdlib/array/int32' );
	* var Complex64Array = require( '@stdlib/array/complex64' );
	*
	* var IPIV = new Int32Array( [ 2, 0, 1 ] );
	* var A = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
	*
	* claswp.ndarray( 2, A, 2, 1, 0, 0, 2, 1, IPIV, 1, 0 );
	* // A => <Complex64Array>[ 5.0, 6.0, 7.0, 8.0, 1.0, 2.0, 3.0, 4.0, 9.0, 10.0, 11.0, 12.0 ]
	*/
	ndarray( N: number, A: Complex64Array, strideA1: number, strideA2: number, offsetA: number, k1: number, k2: number, inck: number, IPIV: Int32Array, strideIPIV: number, offsetIPIV: number ): Complex64Array;
}

/**
* Performs a series of row interchanges on a matrix `A` using pivot indices stored in `IPIV`.
*
* @param order - storage layout
* @param N - number of columns in `A`
* @param A - input matrix
* @param LDA - stride of the first dimension of `A` (a.k.a., leading dimension of the matrix `A`)
* @param k1 - index of first row to interchange
* @param k2 - index of last row to interchange
* @param IPIV - vector of pivot indices
* @param incx - increment between successive values of `IPIV`
* @returns permuted matrix `A`
*
* @example
* var Int32Array = require( '@stdlib/array/int32' );
* var Complex64Array = require( '@stdlib/array/complex64' );
*
* var IPIV = new Int32Array( [ 2, 0, 1 ] );
* var A = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
*
* claswp( 'row-major', 2, A, 2, 0, 2, IPIV, 1 );
* // A => <Complex64Array>[ 5.0, 6.0, 7.0, 8.0, 1.0, 2.0, 3.0, 4.0, 9.0, 10.0, 11.0, 12.0 ]
*
* @example
* var Int32Array = require( '@stdlib/array/int32' );
* var Complex64Array = require( '@stdlib/array/complex64' );
*
* var IPIV = new Int32Array( [ 2, 0, 1 ] );
* var A = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
*
* claswp.ndarray( 2, A, 2, 1, 0, 0, 2, 1, IPIV, 1, 0 );
* // A => <Complex64Array>[ 5.0, 6.0, 7.0, 8.0, 1.0, 2.0, 3.0, 4.0, 9.0, 10.0, 11.0, 12.0 ]
*/
declare var claswp: Routine;


// EXPORTS //

export = claswp;
