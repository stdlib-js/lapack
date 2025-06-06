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

var tape = require( 'tape' );
var isSameComplex64Array = require( '@stdlib/assert/is-same-complex64array' );
var Complex64Array = require( '@stdlib/array/complex64' );
var clacgv = require( './../lib/ndarray.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof clacgv, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 4', function test( t ) {
	t.strictEqual( clacgv.length, 4, 'arity of 4' );
	t.end();
});

tape( 'the function conjugates elements in a strided array', function test( t ) {
	var expected;
	var cx;

	cx = new Complex64Array([
		0.3, // 1
		0.1, // 1
		0.5, // 2
		0.0, // 2
		0.0, // 3
		0.5, // 3
		0.0, // 4
		0.2, // 4
		2.0,
		3.0,
		2.0,
		3.0
	]);

	clacgv( 4, cx, 1, 0 );

	expected = new Complex64Array([
		0.3,  // 1
		-0.1, // 1
		0.5,  // 2
		-0.0, // 2
		0.0,  // 3
		-0.5, // 3
		0.0,  // 4
		-0.2, // 4
		2.0,
		3.0,
		2.0,
		3.0
	]);

	t.ok( isSameComplex64Array( cx, expected ), 'returns expected value' );
	t.end();
});

tape( 'the function supports a `cx` stride', function test( t ) {
	var expected;
	var cx;

	cx = new Complex64Array([
		0.1,  // 1
		0.1,  // 1
		3.0,
		6.0,
		-0.6, // 2
		0.1,  // 2
		4.0,
		7.0,
		0.1,  // 3
		-0.3, // 3
		7.0,
		2.0
	]);

	clacgv( 3, cx, 2, 0 );

	expected = new Complex64Array([
		0.1,   // 1
		-0.1,  // 1
		3.0,
		6.0,
		-0.6,  // 2
		-0.1,  // 2
		4.0,
		7.0,
		0.1,   // 3
		0.3,   // 3
		7.0,
		2.0
	]);

	t.ok( isSameComplex64Array( cx, expected ), 'returns expected value' );
	t.end();
});

tape( 'the function supports a negative `cx` stride', function test( t ) {
	var expected;
	var cx;

	cx = new Complex64Array([
		0.1,  // 3
		0.1,  // 3
		3.0,
		6.0,
		-0.6, // 2
		0.1,  // 2
		4.0,
		7.0,
		0.1,  // 1
		-0.3, // 1
		7.0,
		2.0
	]);

	clacgv( 3, cx, -2, 4 );

	expected = new Complex64Array([
		0.1,   // 3
		-0.1,  // 3
		3.0,
		6.0,
		-0.6,  // 2
		-0.1,  // 2
		4.0,
		7.0,
		0.1,   // 1
		0.3,   // 1
		7.0,
		2.0
	]);

	t.ok( isSameComplex64Array( cx, expected ), 'returns expected value' );
	t.end();
});

tape( 'the function supports a `cx` offset', function test( t ) {
	var expected;
	var cx;

	cx = new Complex64Array([
		0.1,
		0.1,
		3.0,
		6.0,
		-0.6,
		0.1,
		4.0,  // 1
		6.0,  // 1
		0.1,  // 2
		-0.3, // 2
		7.0,  // 3
		2.0   // 3
	]);

	clacgv( 3, cx, 1, 3 );

	expected = new Complex64Array([
		0.1,
		0.1,
		3.0,
		6.0,
		-0.6,
		0.1,
		4.0,  // 1
		-6.0, // 1
		0.1,  // 2
		0.3,  // 2
		7.0,  // 3
		-2.0  // 3
	]);

	t.ok( isSameComplex64Array( cx, expected ), 'returns expected value' );
	t.end();
});

tape( 'the function returns a reference to the input array', function test( t ) {
	var out;
	var cx;

	cx = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );

	out = clacgv( 4, cx, 1, 0 );

	t.strictEqual( out, cx, 'same reference' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns the input array unchanged', function test( t ) {
	var expected;
	var cx;

	cx = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );

	expected = new Complex64Array([
		1.0,
		2.0,
		3.0,
		4.0,
		5.0,
		6.0,
		7.0,
		8.0
	]);

	clacgv( -1, cx, 1, 0 );
	t.ok( isSameComplex64Array( cx, expected ), 'returns expected value' );

	clacgv( 0, cx, 1, 0 );
	t.ok( isSameComplex64Array( cx, expected ), 'returns expected value' );

	t.end();
});

tape( 'the function supports complex access patterns', function test( t ) {
	var expected;
	var cx;

	cx = new Complex64Array([
		0.1,
		0.1,
		3.0,
		6.0,
		-0.6,
		0.1,
		4.0, // 1
		6.0, // 1
		0.1,
		-0.3,
		7.0,
		2.0,
		2.0, // 2
		3.0  // 2
	]);

	clacgv( 2, cx, -3, 6 );

	expected = new Complex64Array([
		0.1,
		0.1,
		3.0,
		6.0,
		-0.6,
		0.1,
		4.0,  // 1
		-6.0, // 1
		0.1,
		-0.3,
		7.0,
		2.0,
		2.0,  // 2
		-3.0  // 2
	]);

	t.ok( isSameComplex64Array( cx, expected ), 'returns expected value' );

	t.end();
});
