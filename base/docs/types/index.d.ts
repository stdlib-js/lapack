/*
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

// TypeScript Version: 4.1

/* eslint-disable max-lines */

import dlacpy = require( './../../../base/dlacpy' );
import dlassq = require( './../../../base/dlassq' );
import dlaswp = require( './../../../base/dlaswp' );
import dpttrf = require( './../../../base/dpttrf' );
import slacpy = require( './../../../base/slacpy' );
import spttrf = require( './../../../base/spttrf' );

/**
* Interface describing the `base` namespace.
*/
interface Namespace {
	/**
	* Copies all or part of a matrix `A` to another matrix `B`.
	*
	* @param order - storage layout of `A` and `B`
	* @param uplo - specifies whether to copy the upper or lower triangular/trapezoidal part of matrix `A`
	* @param M - number of rows in matrix `A`
	* @param N - number of columns in matrix `A`
	* @param A - input matrix
	* @param LDA - stride of the first dimension of `A` (a.k.a., leading dimension of the matrix `A`)
	* @param B - output matrix
	* @param LDB - stride of the first dimension of `B` (a.k.a., leading dimension of the matrix `B`)
	* @returns `B`
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	* var B = new Float64Array( 4 );
	*
	* ns.dlacpy( 'row-major', 'all', 2, 2, A, 2, B, 2 );
	* // B => <Float64Array>[ 1.0, 2.0, 3.0, 4.0 ]
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	* var B = new Float64Array( 6 );
	*
	* ns.dlacpy.ndarray( 'all', 2, 2, A, 2, 1, 1, B, 2, 1, 2 );
	* // B => <Float64Array>[ 0.0, 0.0, 2.0, 3.0, 4.0, 5.0 ]
	*/
	dlacpy: typeof dlacpy;

	/**
	* Returns an updated sum of squares represented in scaled form.
	*
	* @param N - number of indexed elements
	* @param X - input array
	* @param strideX - stride length for `X`
	* @param scale - scaling factor
	* @param sumsq - basic sum of squares from which output is factored out
	* @returns output array
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var X = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	*
	* var out = ns.dlassq( 4, X, 1, 1.0, 0.0, out );
	* // returns <Float64Array>[ 1.0, 30.0 ]
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var X = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	* var out = new Float64Array( [ 0.0, 0.0 ] );
	*
	* ns.dlassq.ndarray( 4, X, 1, 0, 1.0, 0.0, out, 1, 0 );
	* // out => <Float64Array>[ 1.0, 30.0 ]
	*/
	dlassq: typeof dlassq;

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
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var IPIV = new Int32Array( [ 2, 0, 1 ] );
	* var A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] ); // => [ [ 1.0, 2.0 ], [ 3.0, 4.0 ], [ 5.0, 6.0 ] ]
	*
	* ns.dlaswp( 'row-major', 2, A, 2, 0, 2, IPIV, 1 );
	* // A => <Float64Array>[ 3.0, 4.0, 1.0, 2.0, 5.0, 6.0 ]
	*
	* @example
	* var Int32Array = require( '@stdlib/array/int32' );
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var IPIV = new Int32Array( [ 2, 0, 1 ] );
	* var A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] ); // => [ [ 1.0, 2.0 ], [ 3.0, 4.0 ], [ 5.0, 6.0 ] ]
	*
	* ns.dlaswp.ndarray( 2, A, 2, 1, 0, 0, 2, 1, IPIV, 1, 0 );
	* // A => <Float64Array>[ 3.0, 4.0, 1.0, 2.0, 5.0, 6.0 ]
	*/
	dlaswp: typeof dlaswp;

	/**
	* Computes the `L * D * L^T` factorization of a real symmetric positive definite tridiagonal matrix `A`.
	*
	* @param N - order of matrix `A`
	* @param D - the `N` diagonal elements of `A`
	* @param E - the `N-1` subdiagonal elements of `A`
	* @returns status code
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var D = new Float64Array( [ 4.0, 5.0, 6.0 ] );
	* var E = new Float64Array( [ 1.0, 2.0 ] );
	*
	* ns.dpttrf( 3, D, E );
	* // D => <Float64Array>[ 4, 4.75, ~5.15789 ]
	* // E => <Float64Array>[ 0.25, ~0.4210 ]
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var D = new Float64Array( [ 4.0, 5.0, 6.0 ] );
	* var E = new Float64Array( [ 1.0, 2.0 ] );
	*
	* ns.dpttrf.ndarray( 3, D, 1, 0, E, 1, 0 );
	* // D => <Float64Array>[ 4, 4.75, ~5.15789 ]
	* // E => <Float64Array>[ 0.25, ~0.4210 ]
	*/
	dpttrf: typeof dpttrf;

	/**
	* Copies all or part of a matrix `A` to another matrix `B`.
	*
	* @param order - storage layout of `A` and `B`
	* @param uplo - specifies whether to copy the upper or lower triangular/trapezoidal part of matrix `A`
	* @param M - number of rows in matrix `A`
	* @param N - number of columns in matrix `A`
	* @param A - input matrix
	* @param LDA - stride of the first dimension of `A` (a.k.a., leading dimension of the matrix `A`)
	* @param B - output matrix
	* @param LDB - stride of the first dimension of `B` (a.k.a., leading dimension of the matrix `B`)
	* @returns `B`
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var A = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	* var B = new Float32Array( 4 );
	*
	* ns.slacpy( 'row-major', 'all', 2, 2, A, 2, B, 2 );
	* // B => <Float32Array>[ 1.0, 2.0, 3.0, 4.0 ]
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var A = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	* var B = new Float32Array( 6 );
	*
	* ns.slacpy.ndarray( 'all', 2, 2, A, 2, 1, 1, B, 2, 1, 2 );
	* // B => <Float32Array>[ 0.0, 0.0, 2.0, 3.0, 4.0, 5.0 ]
	*/
	slacpy: typeof slacpy;

	/**
	* Computes the `L * D * L^T` factorization of a real symmetric positive definite tridiagonal matrix `A`.
	*
	* @param N - order of matrix `A`
	* @param D - the `N` diagonal elements of `A`
	* @param E - the `N-1` subdiagonal elements of `A`
	* @returns status code
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var D = new Float32Array( [ 4.0, 5.0, 6.0 ] );
	* var E = new Float32Array( [ 1.0, 2.0 ] );
	*
	* ns.spttrf( 3, D, E );
	* // D => <Float32Array>[ 4, 4.75, ~5.15789 ]
	* // E => <Float32Array>[ 0.25, ~0.4210 ]
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var D = new Float32Array( [ 4.0, 5.0, 6.0 ] );
	* var E = new Float32Array( [ 1.0, 2.0 ] );
	*
	* ns.spttrf.ndarray( 3, D, 1, 0, E, 1, 0 );
	* // D => <Float32Array>[ 4, 4.75, ~5.15789 ]
	* // E => <Float32Array>[ 0.25, ~0.4210 ]
	*/
	spttrf: typeof spttrf;
}

/**
* Base (i.e., lower-level) LAPACK routines.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;
