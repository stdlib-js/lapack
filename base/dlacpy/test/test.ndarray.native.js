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

/* eslint-disable max-len */

'use strict';

// MODULES //

var resolve = require( 'path' ).resolve;
var tape = require( 'tape' );
var Float64Array = require( '@stdlib/array/float64' );
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var dlacpy = tryRequire( resolve( __dirname, './../lib/ndarray.native.js' ) );
var opts = {
	'skip': ( dlacpy instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof dlacpy, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 11', opts, function test( t ) {
	t.strictEqual( dlacpy.length, 11, 'returns expected value' );
	t.end();
});

tape( 'the function copies all of a matrix `A` to another matrix `B` (row-major)', opts, function test( t ) {
	var expected;
	var out;
	var A;
	var B;

	A = new Float64Array( [ 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0 ] );
	B = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	expected = new Float64Array( [ 0.0, 0.0, 0.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0 ] );

	out = dlacpy( 'all', 2, 3, A, 3, 1, 1, B, 3, 1, 3 );
	t.strictEqual( out, B, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	A = new Float64Array( [ 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0 ] );
	B = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	expected = new Float64Array( [ 0.0, 0.0, 0.0, 16.0, 15.0, 14.0, 13.0, 12.0, 11.0 ] );

	out = dlacpy( 'all', 2, 3, A, -3, -1, 6, B, 3, 1, 3 );
	t.strictEqual( out, B, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	A = new Float64Array( [ 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0 ] );
	B = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	expected = new Float64Array( [ 0.0, 0.0, 0.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0 ] );

	out = dlacpy( 'all', 3, 2, A, 2, 1, 1, B, 2, 1, 3 );
	t.strictEqual( out, B, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function copies part of a matrix `A` to another matrix `B` (row-major, upper)', opts, function test( t ) {
	var expected;
	var out;
	var A;
	var B;

	A = new Float64Array( [ 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0 ] );
	B = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	expected = new Float64Array( [ 0.0, 0.0, 0.0, 11.0, 12.0, 13.0, 0.0, 15.0, 16.0 ] );

	out = dlacpy( 'upper', 2, 3, A, 3, 1, 1, B, 3, 1, 3 );
	t.strictEqual( out, B, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	A = new Float64Array( [ 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0 ] );
	B = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	expected = new Float64Array( [ 0.0, 0.0, 0.0, 13.0, 12.0, 11.0, 0.0, 15.0, 14.0 ] );

	out = dlacpy( 'upper', 2, 3, A, 3, -1, 3, B, 3, 1, 3 );
	t.strictEqual( out, B, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	A = new Float64Array( [ 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0 ] );
	B = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	expected = new Float64Array( [ 0.0, 0.0, 0.0, 11.0, 12.0, 0.0, 14.0, 0.0, 0.0 ] );

	out = dlacpy( 'upper', 3, 2, A, 2, 1, 1, B, 2, 1, 3 );
	t.strictEqual( out, B, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function copies part of a matrix `A` to another matrix `B` (row-major, lower)', opts, function test( t ) {
	var expected;
	var out;
	var A;
	var B;

	A = new Float64Array( [ 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0 ] );
	B = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	expected = new Float64Array( [ 0.0, 0.0, 0.0, 11.0, 0.0, 0.0, 14.0, 15.0, 0.0 ] );

	out = dlacpy( 'lower', 2, 3, A, 3, 1, 1, B, 3, 1, 3 );
	t.strictEqual( out, B, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	A = new Float64Array( [ 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0 ] );
	B = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	expected = new Float64Array( [ 0.0, 0.0, 0.0, 14.0, 0.0, 0.0, 11.0, 12.0, 0.0 ] );

	out = dlacpy( 'lower', 2, 3, A, -3, 1, 4, B, 3, 1, 3 );
	t.strictEqual( out, B, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	A = new Float64Array( [ 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0 ] );
	B = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	expected = new Float64Array( [ 0.0, 0.0, 0.0, 11.0, 0.0, 13.0, 14.0, 15.0, 16.0 ] );

	out = dlacpy( 'lower', 3, 2, A, 2, 1, 1, B, 2, 1, 3 );
	t.strictEqual( out, B, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function copies all of a matrix `A` to another matrix `B` (column-major)', opts, function test( t ) {
	var expected;
	var out;
	var A;
	var B;

	A = new Float64Array( [ 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0 ] );
	B = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	expected = new Float64Array( [ 0.0, 0.0, 0.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0 ] );

	out = dlacpy( 'all', 2, 3, A, 1, 2, 1, B, 1, 2, 3 );
	t.strictEqual( out, B, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	A = new Float64Array( [ 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0 ] );
	B = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	expected = new Float64Array( [ 0.0, 0.0, 0.0, 16.0, 15.0, 14.0, 13.0, 12.0, 11.0 ] );

	out = dlacpy( 'all', 2, 3, A, 1, 2, 1, B, -1, -2, 8 );
	t.strictEqual( out, B, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	A = new Float64Array( [ 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0 ] );
	B = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	expected = new Float64Array( [ 0.0, 0.0, 0.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0 ] );

	out = dlacpy( 'all', 3, 2, A, 1, 3, 1, B, 1, 3, 3 );
	t.strictEqual( out, B, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function copies part of a matrix `A` to another matrix `B` (column-major, upper)', opts, function test( t ) {
	var expected;
	var out;
	var A;
	var B;

	A = new Float64Array( [ 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0 ] );
	B = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	expected = new Float64Array( [ 0.0, 0.0, 0.0, 11.0, 0.0, 13.0, 14.0, 15.0, 16.0 ] );

	out = dlacpy( 'upper', 2, 3, A, 1, 2, 1, B, 1, 2, 3 );
	t.strictEqual( out, B, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	A = new Float64Array( [ 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0 ] );
	B = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	expected = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 11.0, 14.0, 13.0, 16.0, 15.0 ] );

	out = dlacpy( 'upper', 2, 3, A, 1, 2, 1, B, -1, 2, 4 );
	t.strictEqual( out, B, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	A = new Float64Array( [ 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0 ] );
	B = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	expected = new Float64Array( [ 0.0, 0.0, 0.0, 11.0, 0.0, 0.0, 14.0, 15.0, 0.0 ] );

	out = dlacpy( 'upper', 3, 2, A, 1, 3, 1, B, 1, 3, 3 );
	t.strictEqual( out, B, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function copies part of a matrix `A` to another matrix `B` (column-major, lower)', opts, function test( t ) {
	var expected;
	var out;
	var A;
	var B;

	A = new Float64Array( [ 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0 ] );
	B = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	expected = new Float64Array( [ 0.0, 0.0, 0.0, 11.0, 12.0, 0.0, 14.0, 0.0, 0.0 ] );

	out = dlacpy( 'lower', 2, 3, A, 1, 2, 1, B, 1, 2, 3 );
	t.strictEqual( out, B, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	A = new Float64Array( [ 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0 ] );
	B = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	expected = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 14.0, 11.0, 12.0 ] );

	out = dlacpy( 'lower', 2, 3, A, 1, 2, 1, B, 1, -2, 7 );
	t.strictEqual( out, B, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	A = new Float64Array( [ 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0 ] );
	B = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	expected = new Float64Array( [ 0.0, 0.0, 0.0, 11.0, 12.0, 13.0, 0.0, 15.0, 16.0 ] );

	out = dlacpy( 'lower', 3, 2, A, 1, 3, 1, B, 1, 3, 3 );
	t.strictEqual( out, B, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function copies all of a matrix `A` to another matrix `B` (column-major, lower, complex access patterns)', opts, function test( t ) {
	var out;
	var A;
	var B;

	/* eslint-disable array-element-newline, no-multi-spaces */

	A = new Float64Array([
		999, 999, 999, 999, 999, 999,
		999,   1, 999,   2, 999,   3,
		999,   0, 999,   4, 999,   5,
		999,   0, 999,   0, 999,   6,
		999, 999, 999, 999, 999, 999
	]);
	B = new Float64Array([
		999, 999, 999, 999, 999, 999,
		999, 999, 999, 999, 999, 999,
		999, 999, 999, 999, 999, 999,
		999, 999, 999, 999, 999, 999,
		999, 999, 999, 999, 999, 999
	]);

	/* eslint-enable array-element-newline, no-multi-spaces */

	out = dlacpy( 'all', 3, 3, A, 2, 6, 7, B, 2, 6, 7 );
	t.strictEqual( out, B, 'returns expected value' );
	t.deepEqual( out, A, 'returns expected value' );

	t.end();
});
