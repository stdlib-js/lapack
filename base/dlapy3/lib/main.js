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

var abs = require( '@stdlib/math/base/special/abs' );
var dlamch = require( './../../../base/dlamch' );
var max = require( '@stdlib/math/base/special/maxn' );
var sqrt = require( '@stdlib/math/base/special/sqrt' );
var abs2 = require( '@stdlib/math/base/special/abs2' );


// MAIN //

/**
* Computes `sqrt(x^2 + y^2 + z^2)` in a manner which doesn't cause unnecessary overflow.
*
* @param {number} x - first input number
* @param {number} y - second input number
* @param {number} z - third input number
* @returns {number} `sqrt(x^2 + y^2 + z^2)`
*
* @example
* var out = dlapy3( 3.0, 4.0, 12.0 );
* // returns 13.0
*/
function dlapy3( x, y, z ) {
	var hugeval;
	var xabs;
	var yabs;
	var zabs;
	var w;

	hugeval = dlamch( 'O' );
	xabs = abs( x );
	yabs = abs( y );
	zabs = abs( z );

	w = max( xabs, yabs, zabs );

	if ( w === 0.0 || w > hugeval ) {
		return xabs + yabs + zabs;
	}
	return w * sqrt( abs2( xabs / w ) + abs2( yabs / w ) + abs2( zabs / w ) );
}


// EXPORTS //

module.exports = dlapy3;
