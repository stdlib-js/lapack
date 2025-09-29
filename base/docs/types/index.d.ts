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

import clacgv = require( './../../../base/clacgv' );
import clacpy = require( './../../../base/clacpy' );
import claset = require( './../../../base/claset' );
import claswp = require( './../../../base/claswp' );
import crot = require( './../../../base/crot' );
import dgetrans = require( './../../../base/dge-trans' );
import dgttrf = require( './../../../base/dgttrf' );
import dlacpy = require( './../../../base/dlacpy' );
import dladiv = require( './../../../base/dladiv' );
import dlamch = require( './../../../base/dlamch' );
import dlapy2 = require( './../../../base/dlapy2' );
import dlapy3 = require( './../../../base/dlapy3' );
import dlarf1f = require( './../../../base/dlarf1f' );
import dlaset = require( './../../../base/dlaset' );
import dlassq = require( './../../../base/dlassq' );
import dlaswp = require( './../../../base/dlaswp' );
import dpttrf = require( './../../../base/dpttrf' );
import iladlc = require( './../../../base/iladlc' );
import iladlr = require( './../../../base/iladlr' );
import sgetrans = require( './../../../base/sge-trans' );
import slacpy = require( './../../../base/slacpy' );
import slaswp = require( './../../../base/slaswp' );
import spttrf = require( './../../../base/spttrf' );
import zlacgv = require( './../../../base/zlacgv' );
import zlacpy = require( './../../../base/zlacpy' );
import zlaset = require( './../../../base/zlaset' );
import zlaswp = require( './../../../base/zlaswp' );
import zrot = require( './../../../base/zrot' );

/**
* Interface describing the `base` namespace.
*/
interface Namespace {
	/**
	* Conjugates each element in a single-precision complex floating-point vector.
	*
	* @param N - number of indexed elements
	* @param cx - input array
	* @param strideCX - `cx` stride length
	* @returns input array
	*
	* @example
	* var Complex64Array = require( '@stdlib/array/complex64' );
	* var realf = require( '@stdlib/complex/float32/real' );
	* var imagf = require( '@stdlib/complex/float32/imag' );
	*
	* var cx = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	*
	* ns.clacgv( 3, cx, 1 );
	*
	* var z = cx.get( 1 );
	* // returns <Complex64>
	*
	* var re = realf( z );
	* // returns 3.0
	*
	* var im = imagf( z );
	* // returns -4.0
	*
	* @example
	* var Complex64Array = require( '@stdlib/array/complex64' );
	* var realf = require( '@stdlib/complex/float32/real' );
	* var imagf = require( '@stdlib/complex/float32/imag' );
	*
	* var cx = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	*
	* ns.clacgv.ndarray( 2, cx, 1, 1 );
	*
	* var z = cx.get( 1 );
	* // returns <Complex64>
	*
	* var re = realf( z );
	* // returns 3.0
	*
	* var im = imagf( z );
	* // returns -4.0
	*/
	clacgv: typeof clacgv;

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
	* var Complex64Array = require( '@stdlib/array/complex64' );
	* var realf = require( '@stdlib/complex/float32/real' );
	* var imagf = require( '@stdlib/complex/float32/imag' );
	*
	* var A = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	* var B = new Complex64Array( 4 );
	*
	* ns.clacpy( 'row-major', 'all', 2, 2, A, 2, B, 2 );
	*
	* var z = B.get( 0 );
	* // returns <Complex64>
	*
	* var v = realf( z );
	* // returns 1.0
	*
	* v = imagf( z );
	* // returns 2.0
	*
	* @example
	* var Complex64Array = require( '@stdlib/array/complex64' );
	* var realf = require( '@stdlib/complex/float32/real' );
	* var imagf = require( '@stdlib/complex/float32/imag' );
	*
	* var A = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0 ] );
	* var B = new Complex64Array( 12 );
	*
	* ns.clacpy.ndarray( 'all', 2, 2, A, 2, 1, 1, B, 2, 1, 2 );
	*
	* var z = B.get( 2 );
	* // returns <Complex64>
	*
	* var v = realf( z );
	* // returns 3.0
	*
	* v = imagf( z );
	* // returns 4.0
	*/
	clacpy: typeof clacpy;

	/**
	* Sets the off-diagonal elements and the diagonal elements of a single-precision complex floating-point matrix to specified values.
	*
	* @param order - storage layout of `A`
	* @param uplo - specifies whether to set the upper or lower triangular/trapezoidal part of matrix `A`
	* @param M - number of rows in matrix `A`
	* @param N - number of columns in matrix `A`
	* @param alpha - value assigned to off-diagonal elements
	* @param beta - value assigned to diagonal elements
	* @param A - input matrix
	* @param LDA - stride of the first dimension of `A` (a.k.a., leading dimension of the matrix `A`)
	* @returns `A`
	*
	* @example
	* var Complex64Array = require( '@stdlib/array/complex64' );
	*
	* var A = new Complex64Array( 4 );
	*
	* var alpha = new Complex64( 1.0, 2.0 );
	* var beta = new Complex64( 3.0, 4.0 );
	*
	* ns.claset( 'row-major', 'all', 2, 2, alpha, beta, A, 2 );
	* // A => <Complex64Array>[ 1.0, 2.0, 3.0, 4.0, 3.0, 4.0, 1.0, 2.0 ]
	*
	* @example
	* var Complex64Array = require( '@stdlib/array/complex64' );
	*
	* var A = new Complex64Array( 5 );
	*
	* var alpha = new Complex64( 1.0, 2.0 );
	* var beta = new Complex64( 3.0, 4.0 );
	*
	* ns.claset.ndarray( 'all', 2, 2, A, 2, 1, 1 );
	* // A => <Complex64Array>[ 0.0, 0.0, 1.0, 2.0, 3.0, 4.0, 3.0, 4.0, 1.0, 2.0 ]
	*/
	claset: typeof claset;

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
	* ns.claswp( 'row-major', 2, A, 2, 0, 2, IPIV, 1 );
	* // A => <Complex64Array>[ 5.0, 6.0, 7.0, 8.0, 1.0, 2.0, 3.0, 4.0, 9.0, 10.0, 11.0, 12.0 ]
	*
	* @example
	* var Int32Array = require( '@stdlib/array/int32' );
	* var Complex64Array = require( '@stdlib/array/complex64' );
	*
	* var IPIV = new Int32Array( [ 2, 0, 1 ] );
	* var A = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
	*
	* ns.claswp.ndarray( 2, A, 2, 1, 0, 0, 2, 1, IPIV, 1, 0 );
	* // A => <Complex64Array>[ 5.0, 6.0, 7.0, 8.0, 1.0, 2.0, 3.0, 4.0, 9.0, 10.0, 11.0, 12.0 ]
	*/
	claswp: typeof claswp;

	/**
	* Applies a plane rotation with real cosine and complex sine.
	*
	* @param N - number of indexed elements
	* @param cx - first input array
	* @param strideCX - `cx` stride length
	* @param cy - second input array
	* @param strideCY - `cy` stride length
	* @param c - cosine of the angle of rotation
	* @param s - sine of the angle of rotation
	* @returns `cy`
	*
	* @example
	* var Complex64Array = require( '@stdlib/array/complex64' );
	* var Complex64 = require( '@stdlib/complex/float32' );
	* var realf = require( '@stdlib/complex/float32/real' );
	* var imagf = require( '@stdlib/complex/float32/imag' );
	*
	* var cx = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	* var cy = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	* var s = new Complex64( 0.3, 0.4 );
	*
	* ns.crot( 2, cx, 2, cy, 1, 0.8, s );
	*
	* var z = cy.get( 0 );
	* // returns <Complex64>
	*
	* var re = realf( z );
	* // returns ~-1.1
	*
	* var im = imagf( z );
	* // returns ~-0.2
	*
	* z = cx.get( 0 );
	* // returns <Complex64>
	*
	* re = realf( z );
	* // returns ~0.8
	*
	* im = imagf( z );
	* // returns ~1.6
	*
	* @example
	* var Complex64Array = require( '@stdlib/array/complex64' );
	* var Complex64 = require( '@stdlib/complex/float32' );
	* var realf = require( '@stdlib/complex/float32/real' );
	* var imagf = require( '@stdlib/complex/float32/imag' );
	*
	* var cx = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	* var cy = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	* var s = new Complex64( 0.3, 0.4 );
	*
	* ns.crot.ndarray( 2, cx, 2, 0, cy, 1, 0, 0.8, s );
	*
	* var z = cy.get( 0 );
	* // returns <Complex64>
	*
	* var re = realf( z );
	* // returns ~-1.1
	*
	* var im = imagf( z );
	* // returns ~-0.2
	*
	* z = cx.get( 0 );
	* // returns <Complex64>
	*
	* re = realf( z );
	* // returns ~0.8
	*
	* im = imagf( z );
	* // returns ~1.6
	*/
	crot: typeof crot;

	/**
	* Converts a matrix from row-major layout to column-major layout or vice versa.
	*
	* @param order - storage layout
	* @param M - number of rows in matrix `A`
	* @param N - number of columns in matrix `A`
	* @param A - input matrix
	* @param LDA - stride of the first dimension of `A` (a.k.a., leading dimension of the matrix `A`)
	* @param out - output matrix
	* @param LDO - stride of the first dimension of `out` (a.k.a., leading dimension of the matrix `out`)
	* @returns `out`
	*
	* @example
	* var Float64Array = require( `@stdlib/array/float64` );
	*
	* var A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	* var out = new Float64Array( 6 );
	*
	* out = ns.dgetrans( 'row-major', 2, 3, A, 3, out, 2 );
	* // returns <Float64Array>[ 1.0, 4.0, 2.0, 5.0, 3.0, 6.0 ]
	*
	* @example
	* var Float64Array = require( `@stdlib/array/float64` );
	*
	* var A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	* var out = new Float64Array( 6 );
	*
	* out = ns.dgetrans.ndarray( 2, 3, A, 3, 1, 0, out, 2, 1, 0 );
	* // returns <Float64Array>[ 1.0, 4.0, 2.0, 5.0, 3.0, 6.0 ]
	*/
	dgetrans: typeof dgetrans;

	/**
	* LAPACK routine to compute an `LU` factorization of a real tridiagonal matrix `A` using elimination with partial pivoting and row interchanges.
	*
	* ## Notes
	*
	* -   `DL` should have `N-1` indexed elements and is overwritten by the multipliers that define the matrix `L` from the `LU` factorization of `A`.
	* -   `D` should have `N` indexed elements and is overwritten by the diagonal elements of the upper triangular matrix `U` from the `LU` factorization of `A`.
	* -   `DU` should have `N-1` indexed elements and is overwritten by the elements of the first super-diagonal of `U`.
	* -   `DU2` should have `N-2` indexed elements and is overwritten by the elements of the second super-diagonal of `U`.
	* -   For `0 <= i < n`, row `i` of the matrix is interchanged with row `IPIV(i)`. `IPIV(i)` will always be either `i` or `i+1`. `IPIV(i) = i` indicates a row interchange was not required.
	*
	* @param N - number of rows/columns in `A`
	* @param DL - the first sub diagonal of `A`
	* @param D - the diagonal of `A`
	* @param DU - the first super-diagonal of `A`
	* @param DU2 - the second super-diagonal of `U`
	* @param IPIV - vector of pivot indices
	* @returns status code
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	* var Int32Array = require( '@stdlib/array/int32' );
	*
	* var DL = new Float64Array( [ 1.0, 1.0 ] );
	* var D = new Float64Array( [ 2.0, 3.0, 1.0 ] );
	* var DU = new Float64Array( [ 1.0, 1.0 ] );
	* var DU2 = new Float64Array( [ 0.0 ] );
	* var IPIV = new Int32Array( [ 0, 0, 0 ] );
	*
	* ns.dgttrf( 3, DL, D, DU, DU2, IPIV );
	* // DL => <Float64Array>[ 0.5, 0.4 ]
	* // D => <Float64Array>[ 2.0, 2.5, 0.6 ]
	* // DU => <Float64Array>[ 1.0, 1.0 ]
	* // DU2 => <Float64Array>[ 0.0 ]
	* // IPIV => <Int32Array>[ 0, 1, 2 ]
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	* var Int32Array = require( '@stdlib/array/int32' );
	*
	* var DL = new Float64Array( [ 1.0, 1.0 ] );
	* var D = new Float64Array( [ 2.0, 3.0, 1.0 ] );
	* var DU = new Float64Array( [ 1.0, 1.0 ] );
	* var DU2 = new Float64Array( [ 0.0 ] );
	* var IPIV = new Int32Array( [ 0, 0, 0 ] );
	*
	* ns.dgttrf.ndarray( 3, DL, 1, 0, D, 1, 0, DU, 1, 0, DU2, 1, 0, IPIV, 1, 0 );
	* // DL => <Float64Array>[ 0.5, 0.4 ]
	* // D => <Float64Array>[ 2.0, 2.5, 0.6 ]
	* // DU => <Float64Array>[ 1.0, 1.0 ]
	* // DU2 => <Float64Array>[ 0.0 ]
	* // IPIV => <Int32Array>[ 0, 1, 2 ]
	*/
	dgttrf: typeof dgttrf;

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
	* Divides two double-precision complex floating-point numbers in real arithmetic.
	*
	* @param a - real component of numerator
	* @param b - imaginary component of numerator
	* @param c - real component of denominator
	* @param d - imaginary component of denominator
	* @param P - array containing a single element which is overwritten by the real part of the quotient
	* @param Q - array containing a single element which is overwritten by the imaginary part of the quotient
	* @returns void
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var P = new Float64Array( 1 );
	* var Q = new Float64Array( 1 );
	*
	* ns.dladiv( -13.0, -1.0, -2.0, 1.0, P, Q );
	* // P => <Float64Array>[ 5.0 ]
	* // Q => <Float64Array>[ 3.0 ]
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var P = new Float64Array( 1 );
	* var Q = new Float64Array( 1 );
	*
	* ns.dladiv.ndarray( -13.0, -1.0, -2.0, 1.0, P, 0, Q, 0 );
	* // P => <Float64Array>[ 5.0 ]
	* // Q => <Float64Array>[ 3.0 ]
	*/
	dladiv: typeof dladiv;

	/**
	* Determines double-precision floating-point machine parameters.
	*
	* ## Notes
	*
	* -   The `cmach` parameter is a string which specifies the double-precision machine parameter to be returned. The function recognizes the following characters:
	*
	*     -   `'E'`/`'e'`: (eps) relative machine precision.
	*     -   `'S'`/`'s'`: (sfmin) safe minimum such that `1/sfmin` does not overflow.
	*     -   `'B'`/`'b'`: (base) base of the machine (also known as the floating-point radix).
	*     -   `'P'`/`'p'`: (prec) `eps*base`.
	*     -   `'N'`/`'n'`: (t) number of (base) digits in the mantissa.
	*     -   `'R'`/`'r'`: (rnd) `1.0` when rounding occurs in addition and `0.0` otherwise.
	*     -   `'M'`/`'m'`: (emin) minimum exponent before (gradual) underflow.
	*     -   `'U'`/`'u'`: (rmin) underflow threshold.
	*     -   `'L'`/`'l'`: (emax) largest exponent before overflow.
	*     -   `'O'`/`'o'`: (rmax) overflow threshold.
	*
	* @param cmach - specifies the value to be returned
	* @returns machine parameter
	*
	* @example
	* var out = ns.dlamch( 'E' );
	* // returns ~1.1102230246251565E-016
	*
	* out = ns.dlamch( 'S' );
	* // returns ~2.2250738585072014E-308
	*
	* out = ns.dlamch( 'B' );
	* // returns 2.0
	*/
	dlamch: typeof dlamch;

	/**
	* LAPACK routine to calculate `sqrt(x^2 + y^2)` in a manner which doesn't cause unnecessary overflow.
	*
	* @param x - first input number
	* @param y - second input number
	* @returns `sqrt(x^2 + y^2)`
	*
	* @example
	* var h = ns.dlapy2( -5.0, 12.0 );
	* // returns 13.0
	*
	* @example
	* var h = ns.dlapy2( -0.0, -0.0 );
	* // returns 0.0
	*/
	dlapy2: typeof dlapy2;

	/**
	* LAPACK routine to calculate `sqrt(x^2 + y^2 + z^2)` in a manner which doesn't cause unnecessary overflow.
	*
	* @param x - first input number
	* @param y - second input number
	* @param z - third input number
	* @returns `sqrt(x^2 + y^2 + z^2)`
	*
	* @example
	* var h = ns.dlapy3( 3.0, 4.0, 12.0 );
	* // returns 13.0
	*
	* @example
	* var h = ns.dlapy3( -0.0, -0.0, 0.0 );
	* // returns 0.0
	*/
	dlapy3: typeof dlapy3;

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
	* @param order - storage layout
	* @param side - specifies the side of multiplication with `C`
	* @param M - number of rows in `C`
	* @param N - number of columns in `C`
	* @param V - the vector `v`
	* @param strideV - stride length for `V`
	* @param tau - scalar constant
	* @param C - input matrix
	* @param ldc - stride of the first dimension of `C` (a.k.a., leading dimension of the matrix `C`)
	* @param work - workspace array
	* @returns `C * H` or `H * C`
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var C = new Float64Array( [ 1.0, 5.0, 9.0, 2.0, 6.0, 10.0, 3.0, 7.0, 11.0, 4.0, 8.0, 12.0 ] );
	* var V = new Float64Array( [ 0.5, 0.5, 0.5, 0.5 ] );
	* var work = new Float64Array( 3 );
	*
	* ns.dlarf1f( 'row-major', 'left', 4, 3, V, 1, 1.0, C, 3, work );
	* // returns <Float64Array>[ -4.5, -10.5, -16.5, -0.75, -1.75, -2.75, 0.25, -0.75, -1.75, 1.25,  0.25, -0.75 ]
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var C = new Float64Array( [ 1.0, 5.0, 9.0, 2.0, 6.0, 10.0, 3.0, 7.0, 11.0, 4.0, 8.0, 12.0 ] );
	* var V = new Float64Array( [ 0.5, 0.5, 0.5, 0.5 ] );
	* var work = new Float64Array( 3 );
	*
	* ns.dlarf1f.ndarray( 'left', 4, 3, V, 1, 0, 1.0, C, 3, 1, 0, work, 1, 0 );
	* // returns <Float64Array>[ -4.5, -10.5, -16.5, -0.75, -1.75, -2.75, 0.25, -0.75, -1.75, 1.25,  0.25, -0.75 ]
	*/
	dlarf1f: typeof dlarf1f;

	/**
	* Sets the off-diagonal elements and the diagonal elements of a double-precision floating-point matrix to specified values.
	*
	* @param order - storage layout of `A`
	* @param uplo - specifies whether to set the upper or lower triangular/trapezoidal part of matrix `A`
	* @param M - number of rows in matrix `A`
	* @param N - number of columns in matrix `A`
	* @param alpha - value assigned to off-diagonal elements
	* @param beta - value assigned to diagonal elements
	* @param A - input matrix
	* @param LDA - stride of the first dimension of `A` (a.k.a., leading dimension of the matrix `A`)
	* @returns `A`
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var A = new Float64Array( 4 );
	*
	* ns.dlaset( 'row-major', 'all', 2, 2, 2.0, 1.0, A, 2 );
	* // A => <Float64Array>[ 1.0, 2.0, 2.0, 1.0 ]
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var A = new Float64Array( 4 );
	*
	* ns.dlaset.ndarray( 'all', 2, 2, 2.0, 1.0, A, 2, 1, 0 );
	* // A => <Float64Array>[ 1.0, 2.0, 2.0, 1.0 ]
	*/
	dlaset: typeof dlaset;

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
	* Returns the index of the last non-zero column in a matrix `A`.
	*
	* ## Notes
	*
	* -   If provided an empty matrix or a matrix containing only zeros, the function returns `-1` (i.e., an invalid index).
	*
	* @param order - storage layout
	* @param M - number of rows in `A`
	* @param N - number of columns in `A`
	* @param A - input matrix
	* @param LDA - stride of the first dimension of `A` (a.k.a., leading dimension of the matrix `A`)
	* @returns index of the last non-zero column
	*
	* @example
	* var Float64array = require( '@stdlib/array/float64' );
	*
	* var A = new Float64array( [ 1.0, 2.0, 0.0, 3.0, 4.0, 0.0 ] ); // => [ [ 1.0, 2.0, 0,0 ], [ 3.0, 4.0, 0.0 ] ]
	*
	* var out = ns.iladlc( 'row-major', 2, 3, A, 3 );
	* // returns 1
	*
	* @example
	* var Float64array = require( '@stdlib/array/float64' );
	*
	* var A = new Float64array( [ 1.0, 2.0, 0.0, 3.0, 4.0, 0.0 ] ); // => [ [ 1.0, 2.0, 0,0 ], [ 3.0, 4.0, 0.0 ] ]
	*
	* var out = ns.iladlc.ndarray( 2, 3, A, 3, 1, 0 );
	* // returns 1
	*/
	iladlc: typeof iladlc;

	/**
	* Returns the index of the last non-zero row in a matrix `A`.
	*
	* ## Notes
	*
	* -   If provided an empty matrix or a matrix containing only zeros, the function returns `-1` (i.e., an invalid index).
	*
	* @param order - storage layout
	* @param M - number of rows in `A`
	* @param N - number of columns in `A`
	* @param A - input matrix
	* @param LDA - stride of the first dimension of `A` (a.k.a., leading dimension of the matrix `A`)
	* @returns index of the last non-zero row
	*
	* @example
	* var Float64array = require( '@stdlib/array/float64' );
	*
	* var A = new Float64array( [ 1.0, 2.0, 3.0, 4.0, 0.0, 0.0 ] ); // => [ [ 1.0, 2.0 ], [ 3.0, 4.0 ], [ 0.0, 0.0 ] ]
	*
	* var out = ns.iladlr( 'row-major', 3, 2, A, 2 );
	* // returns 1
	*
	* @example
	* var Float64array = require( '@stdlib/array/float64' );
	*
	* var A = new Float64array( [ 1.0, 2.0, 3.0, 4.0, 0.0, 0.0 ] ); // => [ [ 1.0, 2.0 ], [ 3.0, 4.0 ], [ 0.0, 0.0 ] ]
	*
	* var out = ns.iladlr.ndarray( 3, 2, A, 2, 1, 0 );
	* // returns 1
	*/
	iladlr: typeof iladlr;

	/**
	* Converts a matrix from row-major layout to column-major layout or vice versa.
	*
	* @param order - storage layout
	* @param M - number of rows in matrix `A`
	* @param N - number of columns in matrix `A`
	* @param A - input matrix
	* @param LDA - stride of the first dimension of `A` (a.k.a., leading dimension of the matrix `A`)
	* @param out - output matrix
	* @param LDO - stride of the first dimension of `out` (a.k.a., leading dimension of the matrix `out`)
	* @returns `out`
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var A = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	* var out = new Float32Array( 6 );
	*
	* out = ns.sgetrans( 'row-major', 2, 3, A, 3, out, 2 );
	* // returns <Float32Array>[ 1.0, 4.0, 2.0, 5.0, 3.0, 6.0 ]
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var A = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	* var out = new Float32Array( 6 );
	*
	* out = ns.sgetrans.ndarray( 2, 3, A, 3, 1, 0, out, 2, 1, 0 );
	* // returns <Float32Array>[ 1.0, 4.0, 2.0, 5.0, 3.0, 6.0 ]
	*/
	sgetrans: typeof sgetrans;

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
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var IPIV = new Int32Array( [ 2, 0, 1 ] );
	* var A = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] ); // => [ [ 1.0, 2.0 ], [ 3.0, 4.0 ], [ 5.0, 6.0 ] ]
	*
	* ns.slaswp( 'row-major', 2, A, 2, 0, 2, IPIV, 1 );
	* // A => <Float32Array>[ 3.0, 4.0, 1.0, 2.0, 5.0, 6.0 ]
	*
	* @example
	* var Int32Array = require( '@stdlib/array/int32' );
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var IPIV = new Int32Array( [ 2, 0, 1 ] );
	* var A = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] ); // => [ [ 1.0, 2.0 ], [ 3.0, 4.0 ], [ 5.0, 6.0 ] ]
	*
	* ns.slaswp.ndarray( 2, A, 2, 1, 0, 0, 2, 1, IPIV, 1, 0 );
	* // A => <Float32Array>[ 3.0, 4.0, 1.0, 2.0, 5.0, 6.0 ]
	*/
	slaswp: typeof slaswp;

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

	/**
	* Conjugates each element in a double-precision complex floating-point vector.
	*
	* @param N - number of indexed elements
	* @param zx - input array
	* @param strideZX - `zx` stride length
	* @returns input array
	*
	* @example
	* var Complex128Array = require( '@stdlib/array/complex128' );
	* var real = require( '@stdlib/complex/float64/real' );
	* var imag = require( '@stdlib/complex/float64/imag' );
	*
	* var zx = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	*
	* ns.zlacgv( 3, zx, 1 );
	*
	* var z = zx.get( 1 );
	* // returns <Complex128>
	*
	* var re = real( z );
	* // returns 3.0
	*
	* var im = imag( z );
	* // returns -4.0
	*
	* @example
	* var Complex128Array = require( '@stdlib/array/complex128' );
	* var real = require( '@stdlib/complex/float64/real' );
	* var imag = require( '@stdlib/complex/float64/imag' );
	*
	* var zx = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	*
	* ns.zlacgv.ndarray( 2, zx, 1, 1 );
	*
	* var z = zx.get( 1 );
	* // returns <Complex128>
	*
	* var re = real( z );
	* // returns 3.0
	*
	* var im = imag( z );
	* // returns -4.0
	*/
	zlacgv: typeof zlacgv;

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
	* var Complex128Array = require( '@stdlib/array/complex128' );
	* var real = require( '@stdlib/complex/float64/real' );
	* var imag = require( '@stdlib/complex/float64/imag' );
	*
	* var A = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	* var B = new Complex128Array( 4 );
	*
	* ns.zlacpy( 'row-major', 'all', 2, 2, A, 2, B, 2 );
	*
	* var z = B.get( 0 );
	* // returns <Complex128>
	*
	* var v = real( z );
	* // returns 1.0
	*
	* v = imag( z );
	* // returns 2.0
	*
	* @example
	* var Complex128Array = require( '@stdlib/array/complex128' );
	* var real = require( '@stdlib/complex/float64/real' );
	* var imag = require( '@stdlib/complex/float64/imag' );
	*
	* var A = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0 ] );
	* var B = new Complex128Array( 12 );
	*
	* ns.zlacpy.ndarray( 'all', 2, 2, A, 2, 1, 1, B, 2, 1, 2 );
	*
	* var z = B.get( 2 );
	* // returns <Complex128>
	*
	* var v = real( z );
	* // returns 3.0
	*
	* v = imag( z );
	* // returns 4.0
	*/
	zlacpy: typeof zlacpy;

	/**
	* Sets the off-diagonal elements and the diagonal elements of a double-precision complex floating-point matrix to specified values.
	*
	* @param order - storage layout of `A`
	* @param uplo - specifies whether to set the upper or lower triangular/trapezoidal part of matrix `A`
	* @param M - number of rows in matrix `A`
	* @param N - number of columns in matrix `A`
	* @param alpha - value assigned to off-diagonal elements
	* @param beta - value assigned to diagonal elements
	* @param A - input matrix
	* @param LDA - stride of the first dimension of `A` (a.k.a., leading dimension of the matrix `A`)
	* @returns `A`
	*
	* @example
	* var Complex128Array = require( '@stdlib/array/complex128' );
	*
	* var A = new Complex128Array( 4 );
	*
	* var alpha = new Complex128( 1.0, 2.0 );
	* var beta = new Complex128( 3.0, 4.0 );
	*
	* ns.zlaset( 'row-major', 'all', 2, 2, alpha, beta, A, 2 );
	* // A => <Complex128Array>[ 1.0, 2.0, 3.0, 4.0, 3.0, 4.0, 1.0, 2.0 ]
	*
	* @example
	* var Complex128Array = require( '@stdlib/array/complex128' );
	*
	* var A = new Complex128Array( 5 );
	*
	* var alpha = new Complex128( 1.0, 2.0 );
	* var beta = new Complex128( 3.0, 4.0 );
	*
	* ns.zlaset.ndarray( 'all', 2, 2, A, 2, 1, 1 );
	* // A => <Complex128Array>[ 0.0, 0.0, 1.0, 2.0, 3.0, 4.0, 3.0, 4.0, 1.0, 2.0 ]
	*/
	zlaset: typeof zlaset;

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
	* var Complex128Array = require( '@stdlib/array/complex128' );
	*
	* var IPIV = new Int32Array( [ 2, 0, 1 ] );
	* var A = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
	*
	* ns.zlaswp( 'row-major', 2, A, 2, 0, 2, IPIV, 1 );
	* // A => <Complex128Array>[ 5.0, 6.0, 7.0, 8.0, 1.0, 2.0, 3.0, 4.0, 9.0, 10.0, 11.0, 12.0 ]
	*
	* @example
	* var Int32Array = require( '@stdlib/array/int32' );
	* var Complex128Array = require( '@stdlib/array/complex128' );
	*
	* var IPIV = new Int32Array( [ 2, 0, 1 ] );
	* var A = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
	*
	* ns.zlaswp.ndarray( 2, A, 2, 1, 0, 0, 2, 1, IPIV, 1, 0 );
	* // A => <Complex128Array>[ 5.0, 6.0, 7.0, 8.0, 1.0, 2.0, 3.0, 4.0, 9.0, 10.0, 11.0, 12.0 ]
	*/
	zlaswp: typeof zlaswp;

	/**
	* Applies a plane rotation with real cosine and complex sine.
	*
	* @param N - number of indexed elements
	* @param zx - first input array
	* @param strideX - `zx` stride length
	* @param zy - second input array
	* @param strideY - `zy` stride length
	* @param c - cosine of the angle of rotation
	* @param s - sine of the angle of rotation
	* @returns `zy`
	*
	* @example
	* var Complex128Array = require( '@stdlib/array/complex128' );
	* var Complex128 = require( '@stdlib/complex/float64' );
	* var real = require( '@stdlib/complex/float64/real' );
	* var imag = require( '@stdlib/complex/float64/imag' );
	*
	* var zx = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	* var zy = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	* var s = new Complex128( 0.3, 0.4 );
	*
	* ns.zrot( 2, zx, 2, zy, 1, 0.8, s );
	*
	* var z = zy.get( 0 );
	* // returns <Complex128>
	*
	* var re = real( z );
	* // returns ~-1.1
	*
	* var im = imag( z );
	* // returns ~-0.2
	*
	* z = zx.get( 0 );
	* // returns <Complex128>
	*
	* re = real( z );
	* // returns ~0.8
	*
	* im = imag( z );
	* // returns ~1.6
	*
	* @example
	* var Complex128Array = require( '@stdlib/array/complex128' );
	* var Complex128 = require( '@stdlib/complex/float64' );
	* var real = require( '@stdlib/complex/float64/real' );
	* var imag = require( '@stdlib/complex/float64/imag' );
	*
	* var zx = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	* var zy = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	* var s = new Complex128( 0.3, 0.4 );
	*
	* ns.zrot.ndarray( 2, zx, 2, 0, zy, 1, 0, 0.8, s );
	*
	* var z = zy.get( 0 );
	* // returns <Complex128>
	*
	* var re = real( z );
	* // returns ~-1.1
	*
	* var im = imag( z );
	* // returns ~-0.2
	*
	* z = zx.get( 0 );
	* // returns <Complex128>
	*
	* re = real( z );
	* // returns ~0.8
	*
	* im = imag( z );
	* // returns ~1.6
	*/
	zrot: typeof zrot;
}

/**
* Base (i.e., lower-level) LAPACK routines.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;
