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
var PINF = require( '@stdlib/constants/float64/pinf' );
var EPS = require( '@stdlib/constants/float64/eps' );
var abs = require( '@stdlib/math/base/special/abs' );
var sqrt = require( '@stdlib/math/base/special/sqrt' );
var pow = require( '@stdlib/math/base/special/pow' );
var isPositiveZero = require( '@stdlib/math/base/assert/is-positive-zero' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var dlapy2 = require( './../lib' );


// FIXTURES //

var data = require( './fixtures/julia/data.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof dlapy2, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `+0` if both arguments are `+-0`', function test( t ) {
	var h;

	h = dlapy2( +0.0, +0.0 );
	t.strictEqual( isPositiveZero( h ), true, 'returns expected value' );

	h = dlapy2( -0.0, +0.0 );
	t.strictEqual( isPositiveZero( h ), true, 'returns expected value' );

	h = dlapy2( +0.0, -0.0 );
	t.strictEqual( isPositiveZero( h ), true, 'returns expected value' );

	h = dlapy2( -0.0, -0.0 );
	t.strictEqual( isPositiveZero( h ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns `NaN` if either argument is `NaN`', function test( t ) {
	var h;

	h = dlapy2( NaN, 0.0 );
	t.strictEqual( isnan( h ), true, 'returns expected value' );

	h = dlapy2( 0.0, NaN );
	t.strictEqual( isnan( h ), true, 'returns expected value' );

	h = dlapy2( NaN, NaN );
	t.strictEqual( isnan( h ), true, 'returns expected value' );

	t.end();
});

tape( 'the function computes the hypotenuse', function test( t ) {
	var expected;
	var delta;
	var tol;
	var h;
	var x;
	var y;
	var i;

	x = data.x;
	y = data.y;
	expected = data.expected;

	for ( i = 0; i < x.length; i++ ) {
		h = dlapy2( x[ i ], y[ i ] );
		if ( h === expected[ i ] ) {
			t.ok( true, 'x: '+x[i]+'. y: '+y[i]+'. h: '+h+'. Expected: '+expected[i]+'.' );
		} else {
			delta = abs( h - expected[ i ] );
			tol = 1.5 * EPS * abs( expected[ i ] );
			t.strictEqual( delta <= tol, true, 'within tolerance. x: '+x[i]+'. y: '+y[i]+'. h: '+h+'. Expected: '+expected[i]+'. Delta: '+delta+'. Tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function computes the hypotenuse (canonical inputs)', function test( t ) {
	var h;

	h = dlapy2( 3.0, 4.0 );
	t.strictEqual( h, 5.0, 'returns expected value' );

	h = dlapy2( 6.0, 8.0 );
	t.strictEqual( h, 10.0, 'returns expected value' );

	h = dlapy2( 5.0, 12.0 );
	t.strictEqual( h, 13.0, 'returns expected value' );

	t.end();
});

tape( 'the function avoids overflow', function test( t ) {
	var h;

	h = sqrt( pow( 1.0e308, 2 ) + pow( 1.0e308, 2 ) );
	t.strictEqual( h, PINF, 'returns expected value' );

	h = dlapy2( 1.0e308, 1.0e308 );
	t.strictEqual( h, 1.4142135623730951e308, 'returns expected value' );

	t.end();
});

tape( 'the function avoids underflow', function test( t ) {
	var h;

	h = sqrt( pow( 1.0e-200, 2 ) + pow( 1e-200, 2 ) );
	t.strictEqual( h, 0.0, 'returns expected value' );

	h = dlapy2( 1.0e-200, 1.0e-200 );
	t.strictEqual( h, 1.414213562373095e-200, 'returns expected value' );

	t.end();
});
