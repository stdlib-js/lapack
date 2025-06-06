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

import iladlc = require( './index' );


// TESTS //

// The function returns a number...
{
	const A = new Float64Array( 4 );

	iladlc( 'row-major', 2, 2, A, 2 ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a string...
{
	const A = new Float64Array( 4 );

	iladlc( 5, 2, 2, A, 2 ); // $ExpectError
	iladlc( true, 2, 2, A, 2 ); // $ExpectError
	iladlc( false, 2, 2, A, 2 ); // $ExpectError
	iladlc( null, 2, 2, A, 2 ); // $ExpectError
	iladlc( void 0, 2, 2, A, 2 ); // $ExpectError
	iladlc( [], 2, 2, A, 2 ); // $ExpectError
	iladlc( {}, 2, 2, A, 2 ); // $ExpectError
	iladlc( ( x: number ): number => x, 2, 2, A, 2 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const A = new Float64Array( 4 );

	iladlc( 'row-major', '5', 2, A, 2 ); // $ExpectError
	iladlc( 'row-major', true, 2, A, 2 ); // $ExpectError
	iladlc( 'row-major', false, 2, A, 2 ); // $ExpectError
	iladlc( 'row-major', null, 2, A, 2 ); // $ExpectError
	iladlc( 'row-major', void 0, 2, A, 2 ); // $ExpectError
	iladlc( 'row-major', [], 2, A, 2 ); // $ExpectError
	iladlc( 'row-major', {}, 2, A, 2 ); // $ExpectError
	iladlc( 'row-major', ( x: number ): number => x, 2, A, 2 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const A = new Float64Array( 4 );

	iladlc( 'row-major', 2, '5', A, 2 ); // $ExpectError
	iladlc( 'row-major', 2, true, A, 2 ); // $ExpectError
	iladlc( 'row-major', 2, false, A, 2 ); // $ExpectError
	iladlc( 'row-major', 2, null, A, 2 ); // $ExpectError
	iladlc( 'row-major', 2, void 0, A, 2 ); // $ExpectError
	iladlc( 'row-major', 2, [], A, 2 ); // $ExpectError
	iladlc( 'row-major', 2, {}, A, 2 ); // $ExpectError
	iladlc( 'row-major', 2, ( x: number ): number => x, A, 2 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a Float64Array...
{
	iladlc( 'row-major', 2, 2, '5', 2 ); // $ExpectError
	iladlc( 'row-major', 2, 2, 5, 2 ); // $ExpectError
	iladlc( 'row-major', 2, 2, true, 2 ); // $ExpectError
	iladlc( 'row-major', 2, 2, false, 2 ); // $ExpectError
	iladlc( 'row-major', 2, 2, null, 2 ); // $ExpectError
	iladlc( 'row-major', 2, 2, void 0, 2 ); // $ExpectError
	iladlc( 'row-major', 2, 2, [], 2 ); // $ExpectError
	iladlc( 'row-major', 2, 2, {}, 2 ); // $ExpectError
	iladlc( 'row-major', 2, 2, ( x: number ): number => x, 2 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a number...
{
	const A = new Float64Array( 4 );

	iladlc( 'row-major', 2, 2, A, '5' ); // $ExpectError
	iladlc( 'row-major', 2, 2, A, true ); // $ExpectError
	iladlc( 'row-major', 2, 2, A, false ); // $ExpectError
	iladlc( 'row-major', 2, 2, A, null ); // $ExpectError
	iladlc( 'row-major', 2, 2, A, void 0 ); // $ExpectError
	iladlc( 'row-major', 2, 2, A, [] ); // $ExpectError
	iladlc( 'row-major', 2, 2, A, {} ); // $ExpectError
	iladlc( 'row-major', 2, 2, A, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const A = new Float64Array( 4 );

	iladlc(); // $ExpectError
	iladlc( 'row-major' ); // $ExpectError
	iladlc( 'row-major', 2 ); // $ExpectError
	iladlc( 'row-major', 2, 2 ); // $ExpectError
	iladlc( 'row-major', 2, 2, A ); // $ExpectError
	iladlc( 'row-major', 2, 2, A, 2, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a number...
{
	const A = new Float64Array( 4 );

	iladlc.ndarray( 2, 2, A, 2, 1, 0 ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const A = new Float64Array( 4 );

	iladlc.ndarray( '5', 2, A, 2, 1, 0 ); // $ExpectError
	iladlc.ndarray( true, 2, A, 2, 1, 0 ); // $ExpectError
	iladlc.ndarray( false, 2, A, 2, 1, 0 ); // $ExpectError
	iladlc.ndarray( null, 2, A, 2, 1, 0 ); // $ExpectError
	iladlc.ndarray( void 0, 2, A, 2, 1, 0 ); // $ExpectError
	iladlc.ndarray( [], 2, A, 2, 1, 0 ); // $ExpectError
	iladlc.ndarray( {}, 2, A, 2, 1, 0 ); // $ExpectError
	iladlc.ndarray( ( x: number ): number => x, 2, A, 2, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const A = new Float64Array( 4 );

	iladlc.ndarray( 2, '5', A, 2, 1, 0 ); // $ExpectError
	iladlc.ndarray( 2, true, A, 2, 1, 0 ); // $ExpectError
	iladlc.ndarray( 2, false, A, 2, 1, 0 ); // $ExpectError
	iladlc.ndarray( 2, null, A, 2, 1, 0 ); // $ExpectError
	iladlc.ndarray( 2, void 0, A, 2, 1, 0 ); // $ExpectError
	iladlc.ndarray( 2, [], A, 2, 1, 0 ); // $ExpectError
	iladlc.ndarray( 2, {}, A, 2, 1, 0 ); // $ExpectError
	iladlc.ndarray( 2, ( x: number ): number => x, A, 2, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a Float64Array...
{
	iladlc.ndarray( 2, 2, '5', 2, 1, 0 ); // $ExpectError
	iladlc.ndarray( 2, 2, 5, 2, 1, 0 ); // $ExpectError
	iladlc.ndarray( 2, 2, true, 2, 1, 0 ); // $ExpectError
	iladlc.ndarray( 2, 2, false, 2, 1, 0 ); // $ExpectError
	iladlc.ndarray( 2, 2, null, 2, 1, 0 ); // $ExpectError
	iladlc.ndarray( 2, 2, void 0, 2, 1, 0 ); // $ExpectError
	iladlc.ndarray( 2, 2, [], 2, 1, 0 ); // $ExpectError
	iladlc.ndarray( 2, 2, {}, 2, 1, 0 ); // $ExpectError
	iladlc.ndarray( 2, 2, ( x: number ): number => x, 2, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	const A = new Float64Array( 4 );

	iladlc.ndarray( 2, 2, A, '5', 1, 0 ); // $ExpectError
	iladlc.ndarray( 2, 2, A, true, 1, 0 ); // $ExpectError
	iladlc.ndarray( 2, 2, A, false, 1, 0 ); // $ExpectError
	iladlc.ndarray( 2, 2, A, null, 1, 0 ); // $ExpectError
	iladlc.ndarray( 2, 2, A, void 0, 1, 0 ); // $ExpectError
	iladlc.ndarray( 2, 2, A, [], 1, 0 ); // $ExpectError
	iladlc.ndarray( 2, 2, A, {}, 1, 0 ); // $ExpectError
	iladlc.ndarray( 2, 2, A, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a number...
{
	const A = new Float64Array( 4 );

	iladlc.ndarray( 2, 2, A, 2, '5', 0 ); // $ExpectError
	iladlc.ndarray( 2, 2, A, 2, true, 0 ); // $ExpectError
	iladlc.ndarray( 2, 2, A, 2, false, 0 ); // $ExpectError
	iladlc.ndarray( 2, 2, A, 2, null, 0 ); // $ExpectError
	iladlc.ndarray( 2, 2, A, 2, void 0, 0 ); // $ExpectError
	iladlc.ndarray( 2, 2, A, 2, [], 0 ); // $ExpectError
	iladlc.ndarray( 2, 2, A, 2, {}, 0 ); // $ExpectError
	iladlc.ndarray( 2, 2, A, 2, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixth argument which is not a number...
{
	const A = new Float64Array( 4 );

	iladlc.ndarray( 2, 2, A, 2, 1, '5' ); // $ExpectError
	iladlc.ndarray( 2, 2, A, 2, 1, true ); // $ExpectError
	iladlc.ndarray( 2, 2, A, 2, 1, false ); // $ExpectError
	iladlc.ndarray( 2, 2, A, 2, 1, null ); // $ExpectError
	iladlc.ndarray( 2, 2, A, 2, 1, void 0 ); // $ExpectError
	iladlc.ndarray( 2, 2, A, 2, 1, [] ); // $ExpectError
	iladlc.ndarray( 2, 2, A, 2, 1, {} ); // $ExpectError
	iladlc.ndarray( 2, 2, A, 2, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const A = new Float64Array( 4 );

	iladlc.ndarray(); // $ExpectError
	iladlc.ndarray( 2 ); // $ExpectError
	iladlc.ndarray( 2, 2 ); // $ExpectError
	iladlc.ndarray( 2, 2, A ); // $ExpectError
	iladlc.ndarray( 2, 2, A, 2 ); // $ExpectError
	iladlc.ndarray( 2, 2, A, 2, 1 ); // $ExpectError
	iladlc.ndarray( 2, 2, A, 2, 1, 0, 10 ); // $ExpectError
}
