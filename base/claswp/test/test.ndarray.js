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

/* eslint-disable max-len */

'use strict';

// MODULES //

var tape = require( 'tape' );
var isSameComplex64Array = require( '@stdlib/assert/is-same-complex64array' );
var Int32Array = require( '@stdlib/array/int32' );
var Complex64Array = require( '@stdlib/array/complex64' );
var oneTo = require( '@stdlib/array/one-to' );
var flatten = require( '@stdlib/array/base/flatten' );
var reverse = require( '@stdlib/array/base/reverse' );
var ndarray2array = require( '@stdlib/ndarray/base/to-array' );
var numel = require( '@stdlib/ndarray/base/numel' );
var shape2strides = require( '@stdlib/ndarray/base/shape2strides' );
var reinterpret = require( '@stdlib/strided/base/reinterpret-complex64' );
var claswp = require( './../lib/ndarray.js' );


// FIXTURES //

var COL_MAJOR = require( './fixtures/column_major_no_offsets.json' );
var COL_MAJOR_IPIV_STRIDE_POS = require( './fixtures/column_major_ipiv_stride_positive.json' );
var COL_MAJOR_IPIV_OFFSET = require( './fixtures/column_major_ipiv_offset.json' );
var COL_MAJOR_A_STRIDES = require( './fixtures/column_major_a_strides.json' );
var COL_MAJOR_A_OFFSET = require( './fixtures/column_major_a_offset.json' );
var COL_MAJOR_CMPLX_ACCESS = require( './fixtures/column_major_complex_access_patterns.json' );
var COL_MAJOR_REV_PIVOTS = require( './fixtures/column_major_reverse_pivots.json' );
var COL_MAJOR_REV_PIVOTS_IPIV_STRIDE = require( './fixtures/column_major_reverse_pivots_ipiv_stride.json' ); // eslint-disable-line id-length
var COL_MAJOR_REV_PIVOTS_IPIV_OFFSET = require( './fixtures/column_major_reverse_pivots_ipiv_offset.json' ); // eslint-disable-line id-length
var COL_MAJOR_K1 = require( './fixtures/column_major_k1.json' );

var ROW_MAJOR = require( './fixtures/row_major_no_offsets.json' );
var ROW_MAJOR_IPIV_STRIDE_POS = require( './fixtures/row_major_ipiv_stride_positive.json' );
var ROW_MAJOR_IPIV_OFFSET = require( './fixtures/row_major_ipiv_offset.json' );
var ROW_MAJOR_A_STRIDES = require( './fixtures/row_major_a_strides.json' );
var ROW_MAJOR_A_OFFSET = require( './fixtures/row_major_a_offset.json' );
var ROW_MAJOR_CMPLX_ACCESS = require( './fixtures/row_major_complex_access_patterns.json' );
var ROW_MAJOR_REV_PIVOTS = require( './fixtures/row_major_reverse_pivots.json' );
var ROW_MAJOR_REV_PIVOTS_IPIV_STRIDE = require( './fixtures/row_major_reverse_pivots_ipiv_stride.json' ); // eslint-disable-line id-length
var ROW_MAJOR_REV_PIVOTS_IPIV_OFFSET = require( './fixtures/row_major_reverse_pivots_ipiv_offset.json' ); // eslint-disable-line id-length
var ROW_MAJOR_K1 = require( './fixtures/row_major_k1.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof claswp, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 11', function test( t ) {
	t.strictEqual( claswp.length, 11, 'returns expected value' );
	t.end();
});

tape( 'the function performs a series of row interchanges (column-major)', function test( t ) {
	var expected;
	var IPIV;
	var data;
	var out;
	var A;

	data = COL_MAJOR;

	A = new Complex64Array( data.A );
	IPIV = new Int32Array( data.IPIV );

	expected = new Complex64Array( data.A_out );

	out = claswp( data.N, A, data.strideA1, data.strideA2, data.offsetA, data.k1, data.k2, data.incK, IPIV, data.strideIPIV, data.offsetIPIV );
	t.strictEqual( out, A, 'returns expected value' );
	t.ok( isSameComplex64Array( out, expected ), 'returns expected value' );

	t.end();
});

tape( 'the function performs a series of row interchanges (column-major, k1 > 0)', function test( t ) {
	var expected;
	var IPIV;
	var data;
	var out;
	var A;

	data = COL_MAJOR_K1;

	A = new Complex64Array( data.A );
	IPIV = new Int32Array( data.IPIV );

	expected = new Complex64Array( data.A_out );

	out = claswp( data.N, A, data.strideA1, data.strideA2, data.offsetA, data.k1, data.k2, data.incK, IPIV, data.strideIPIV, data.offsetIPIV );
	t.strictEqual( out, A, 'returns expected value' );
	t.ok( isSameComplex64Array( out, expected ), 'returns expected value' );

	t.end();
});

tape( 'the function supports applying pivots in reverse order (column-major)', function test( t ) {
	var expected;
	var IPIV;
	var data;
	var out;
	var A;

	data = COL_MAJOR_REV_PIVOTS;

	A = new Complex64Array( data.A );
	IPIV = new Int32Array( data.IPIV );

	expected = new Complex64Array( data.A_out );

	out = claswp( data.N, A, data.strideA1, data.strideA2, data.offsetA, data.k1, data.k2, data.incK, IPIV, data.strideIPIV, data.offsetIPIV );
	t.strictEqual( out, A, 'returns expected value' );
	t.ok( isSameComplex64Array( out, expected ), 'returns expected value' );

	t.end();
});

tape( 'the function supports an `IPIV` stride (column-major)', function test( t ) {
	var expected;
	var IPIV;
	var data;
	var out;
	var A;

	data = COL_MAJOR_IPIV_STRIDE_POS;

	A = new Complex64Array( data.A );
	IPIV = new Int32Array( data.IPIV );

	expected = new Complex64Array( data.A_out );

	out = claswp( data.N, A, data.strideA1, data.strideA2, data.offsetA, data.k1, data.k2, data.incK, IPIV, data.strideIPIV, data.offsetIPIV );
	t.strictEqual( out, A, 'returns expected value' );
	t.ok( isSameComplex64Array( out, expected ), 'returns expected value' );

	t.end();
});

tape( 'the function supports an `IPIV` stride (reverse pivots, column-major)', function test( t ) {
	var expected;
	var IPIV;
	var data;
	var out;
	var A;

	data = COL_MAJOR_REV_PIVOTS_IPIV_STRIDE;

	A = new Complex64Array( data.A );
	IPIV = new Int32Array( data.IPIV );

	expected = new Complex64Array( data.A_out );

	out = claswp( data.N, A, data.strideA1, data.strideA2, data.offsetA, data.k1, data.k2, data.incK, IPIV, data.strideIPIV, data.offsetIPIV );
	t.strictEqual( out, A, 'returns expected value' );
	t.ok( isSameComplex64Array( out, expected ), 'returns expected value' );

	t.end();
});

tape( 'the function supports an `IPIV` offset (column-major)', function test( t ) {
	var expected;
	var IPIV;
	var data;
	var out;
	var A;

	data = COL_MAJOR_IPIV_OFFSET;

	A = new Complex64Array( data.A );
	IPIV = new Int32Array( data.IPIV );

	expected = new Complex64Array( data.A_out );

	out = claswp( data.N, A, data.strideA1, data.strideA2, data.offsetA, data.k1, data.k2, data.incK, IPIV, data.strideIPIV, data.offsetIPIV );
	t.strictEqual( out, A, 'returns expected value' );
	t.ok( isSameComplex64Array( out, expected ), 'returns expected value' );

	t.end();
});

tape( 'the function supports an `IPIV` offset (reverse pivots, column-major)', function test( t ) {
	var expected;
	var IPIV;
	var data;
	var out;
	var A;

	data = COL_MAJOR_REV_PIVOTS_IPIV_OFFSET;

	A = new Complex64Array( data.A );
	IPIV = new Int32Array( data.IPIV );

	expected = new Complex64Array( data.A_out );

	out = claswp( data.N, A, data.strideA1, data.strideA2, data.offsetA, data.k1, data.k2, data.incK, IPIV, data.strideIPIV, data.offsetIPIV );
	t.strictEqual( out, A, 'returns expected value' );
	t.ok( isSameComplex64Array( out, expected ), 'returns expected value' );

	t.end();
});

tape( 'the function supports `A` strides (column-major)', function test( t ) {
	var expected;
	var IPIV;
	var data;
	var out;
	var A;

	data = COL_MAJOR_A_STRIDES;

	A = new Complex64Array( data.A );
	IPIV = new Int32Array( data.IPIV );

	expected = new Complex64Array( data.A_out );

	out = claswp( data.N, A, data.strideA1, data.strideA2, data.offsetA, data.k1, data.k2, data.incK, IPIV, data.strideIPIV, data.offsetIPIV );
	t.strictEqual( out, A, 'returns expected value' );
	t.ok( isSameComplex64Array( out, expected ), 'returns expected value' );

	t.end();
});

tape( 'the function supports an `A` offset (column-major)', function test( t ) {
	var expected;
	var IPIV;
	var data;
	var out;
	var A;

	data = COL_MAJOR_A_OFFSET;

	A = new Complex64Array( data.A );
	IPIV = new Int32Array( data.IPIV );

	expected = new Complex64Array( data.A_out );

	out = claswp( data.N, A, data.strideA1, data.strideA2, data.offsetA, data.k1, data.k2, data.incK, IPIV, data.strideIPIV, data.offsetIPIV );
	t.strictEqual( out, A, 'returns expected value' );
	t.ok( isSameComplex64Array( out, expected ), 'returns expected value' );

	t.end();
});

tape( 'the function supports complex access patterns (column-major)', function test( t ) {
	var expected;
	var IPIV;
	var data;
	var out;
	var A;

	data = COL_MAJOR_CMPLX_ACCESS;

	A = new Complex64Array( data.A );
	IPIV = new Int32Array( data.IPIV );

	expected = new Complex64Array( data.A_out );

	out = claswp( data.N, A, data.strideA1, data.strideA2, data.offsetA, data.k1, data.k2, data.incK, IPIV, data.strideIPIV, data.offsetIPIV );
	t.strictEqual( out, A, 'returns expected value' );
	t.ok( isSameComplex64Array( out, expected ), 'returns expected value' );

	t.end();
});

tape( 'the function efficiently handles large datasets (column-major)', function test( t ) {
	var expectedMat;
	var expectedBuf;
	var expected;
	var IPIV;
	var abuf;
	var buf;
	var mat;
	var out;
	var ord;
	var sh;
	var st;
	var A;
	var o;

	ord = 'column-major';
	sh = [ 5, 1000 ];
	st = shape2strides( sh, ord );
	o = 0;

	// Define a linear buffer:
	buf = oneTo( 2 * numel( sh ), 'generic' );

	// Define an input matrix in linear storage:
	A = new Complex64Array( buf );
	abuf = reinterpret( A, 0 );

	// Convert to a nested array:
	mat = ndarray2array( abuf, [ sh[0], sh[1], 2 ], [ 2*st[0], 2*st[1], 1 ], o, ord );

	// Create an array of pivot indices:
	IPIV = new Int32Array( [ 9999, 9999, 9999, 1, 0 ] );

	// Define the expected output array:
	expectedMat = reverse( mat.slice() );
	expectedBuf = flatten( expectedMat, sh, true );
	expectedBuf = flatten( expectedBuf, [ numel( sh ), 2 ], false );
	expected = new Complex64Array( expectedBuf );

	// Interchange rows:
	out = claswp( sh[1], A, st[0], st[1], o, 3, 4, 1, IPIV, 1, 0 );

	t.strictEqual( out, A, 'returns expected value' );
	t.ok( isSameComplex64Array( out, expected ), 'returns expected value' );

	t.end();
});

tape( 'the function performs a series of row interchanges (row-major)', function test( t ) {
	var expected;
	var IPIV;
	var data;
	var out;
	var A;

	data = ROW_MAJOR;

	A = new Complex64Array( data.A );
	IPIV = new Int32Array( data.IPIV );

	expected = new Complex64Array( data.A_out );

	out = claswp( data.N, A, data.strideA1, data.strideA2, data.offsetA, data.k1, data.k2, data.incK, IPIV, data.strideIPIV, data.offsetIPIV );
	t.strictEqual( out, A, 'returns expected value' );
	t.ok( isSameComplex64Array( out, expected ), 'returns expected value' );

	t.end();
});

tape( 'the function performs a series of row interchanges (row-major, k1 > 0)', function test( t ) {
	var expected;
	var IPIV;
	var data;
	var out;
	var A;

	data = ROW_MAJOR_K1;

	A = new Complex64Array( data.A );
	IPIV = new Int32Array( data.IPIV );

	expected = new Complex64Array( data.A_out );

	out = claswp( data.N, A, data.strideA1, data.strideA2, data.offsetA, data.k1, data.k2, data.incK, IPIV, data.strideIPIV, data.offsetIPIV );
	t.strictEqual( out, A, 'returns expected value' );
	t.ok( isSameComplex64Array( out, expected ), 'returns expected value' );

	t.end();
});

tape( 'the function supports applying pivots in reverse order (row-major)', function test( t ) {
	var expected;
	var IPIV;
	var data;
	var out;
	var A;

	data = ROW_MAJOR_REV_PIVOTS;

	A = new Complex64Array( data.A );
	IPIV = new Int32Array( data.IPIV );

	expected = new Complex64Array( data.A_out );

	out = claswp( data.N, A, data.strideA1, data.strideA2, data.offsetA, data.k1, data.k2, data.incK, IPIV, data.strideIPIV, data.offsetIPIV );
	t.strictEqual( out, A, 'returns expected value' );
	t.ok( isSameComplex64Array( out, expected ), 'returns expected value' );

	t.end();
});

tape( 'the function supports an `IPIV` stride (row-major)', function test( t ) {
	var expected;
	var IPIV;
	var data;
	var out;
	var A;

	data = ROW_MAJOR_IPIV_STRIDE_POS;

	A = new Complex64Array( data.A );
	IPIV = new Int32Array( data.IPIV );

	expected = new Complex64Array( data.A_out );

	out = claswp( data.N, A, data.strideA1, data.strideA2, data.offsetA, data.k1, data.k2, data.incK, IPIV, data.strideIPIV, data.offsetIPIV );
	t.strictEqual( out, A, 'returns expected value' );
	t.ok( isSameComplex64Array( out, expected ), 'returns expected value' );

	t.end();
});

tape( 'the function supports an `IPIV` stride (reverse pivots, row-major)', function test( t ) {
	var expected;
	var IPIV;
	var data;
	var out;
	var A;

	data = ROW_MAJOR_REV_PIVOTS_IPIV_STRIDE;

	A = new Complex64Array( data.A );
	IPIV = new Int32Array( data.IPIV );

	expected = new Complex64Array( data.A_out );

	out = claswp( data.N, A, data.strideA1, data.strideA2, data.offsetA, data.k1, data.k2, data.incK, IPIV, data.strideIPIV, data.offsetIPIV );
	t.strictEqual( out, A, 'returns expected value' );
	t.ok( isSameComplex64Array( out, expected ), 'returns expected value' );

	t.end();
});

tape( 'the function supports an `IPIV` offset (row-major)', function test( t ) {
	var expected;
	var IPIV;
	var data;
	var out;
	var A;

	data = ROW_MAJOR_IPIV_OFFSET;

	A = new Complex64Array( data.A );
	IPIV = new Int32Array( data.IPIV );

	expected = new Complex64Array( data.A_out );

	out = claswp( data.N, A, data.strideA1, data.strideA2, data.offsetA, data.k1, data.k2, data.incK, IPIV, data.strideIPIV, data.offsetIPIV );
	t.strictEqual( out, A, 'returns expected value' );
	t.ok( isSameComplex64Array( out, expected ), 'returns expected value' );

	t.end();
});

tape( 'the function supports an `IPIV` offset (reverse pivots, row-major)', function test( t ) {
	var expected;
	var IPIV;
	var data;
	var out;
	var A;

	data = ROW_MAJOR_REV_PIVOTS_IPIV_OFFSET;

	A = new Complex64Array( data.A );
	IPIV = new Int32Array( data.IPIV );

	expected = new Complex64Array( data.A_out );

	out = claswp( data.N, A, data.strideA1, data.strideA2, data.offsetA, data.k1, data.k2, data.incK, IPIV, data.strideIPIV, data.offsetIPIV );
	t.strictEqual( out, A, 'returns expected value' );
	t.ok( isSameComplex64Array( out, expected ), 'returns expected value' );

	t.end();
});

tape( 'the function supports `A` strides (row-major)', function test( t ) {
	var expected;
	var IPIV;
	var data;
	var out;
	var A;

	data = ROW_MAJOR_A_STRIDES;

	A = new Complex64Array( data.A );
	IPIV = new Int32Array( data.IPIV );

	expected = new Complex64Array( data.A_out );

	out = claswp( data.N, A, data.strideA1, data.strideA2, data.offsetA, data.k1, data.k2, data.incK, IPIV, data.strideIPIV, data.offsetIPIV );
	t.strictEqual( out, A, 'returns expected value' );
	t.ok( isSameComplex64Array( out, expected ), 'returns expected value' );

	t.end();
});

tape( 'the function supports an `A` offset (row-major)', function test( t ) {
	var expected;
	var IPIV;
	var data;
	var out;
	var A;

	data = ROW_MAJOR_A_OFFSET;

	A = new Complex64Array( data.A );
	IPIV = new Int32Array( data.IPIV );

	expected = new Complex64Array( data.A_out );

	out = claswp( data.N, A, data.strideA1, data.strideA2, data.offsetA, data.k1, data.k2, data.incK, IPIV, data.strideIPIV, data.offsetIPIV );
	t.strictEqual( out, A, 'returns expected value' );
	t.ok( isSameComplex64Array( out, expected ), 'returns expected value' );

	t.end();
});

tape( 'the function supports complex access patterns (row-major)', function test( t ) {
	var expected;
	var IPIV;
	var data;
	var out;
	var A;

	data = ROW_MAJOR_CMPLX_ACCESS;

	A = new Complex64Array( data.A );
	IPIV = new Int32Array( data.IPIV );

	expected = new Complex64Array( data.A_out );

	out = claswp( data.N, A, data.strideA1, data.strideA2, data.offsetA, data.k1, data.k2, data.incK, IPIV, data.strideIPIV, data.offsetIPIV );
	t.strictEqual( out, A, 'returns expected value' );
	t.ok( isSameComplex64Array( out, expected ), 'returns expected value' );

	t.end();
});

tape( 'the function efficiently handles large datasets (row-major)', function test( t ) {
	var expectedBuf;
	var expectedMat;
	var expected;
	var IPIV;
	var abuf;
	var buf;
	var mat;
	var out;
	var ord;
	var sh;
	var st;
	var A;
	var o;

	ord = 'row-major';
	sh = [ 5, 1000 ];
	st = shape2strides( sh, ord );
	o = 0;

	// Define a linear buffer:
	buf = oneTo( 2 * numel( sh ), 'generic' );

	// Define an input matrix in linear storage:
	A = new Complex64Array( buf );
	abuf = reinterpret( A, 0 );

	// Convert to a nested array:
	mat = ndarray2array( abuf, [ sh[0], sh[1], 2 ], [ 2*st[0], 2*st[1], 1 ], o, ord );

	// Create an array of pivot indices:
	IPIV = new Int32Array( [ 9999, 9999, 9999, 1, 0 ] );

	// Define the expected output array:
	expectedMat = reverse( mat.slice() );
	expectedBuf = flatten( expectedMat, sh, false );
	expectedBuf = flatten( expectedBuf, [ numel( sh ), 2 ], false );
	expected = new Complex64Array( expectedBuf );

	// Interchange rows:
	out = claswp( sh[1], A, st[0], st[1], o, 3, 4, 1, IPIV, 1, 0 );

	t.strictEqual( out, A, 'returns expected value' );
	t.ok( isSameComplex64Array( out, expected ), 'returns expected value' );

	t.end();
});
