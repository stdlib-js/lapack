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

/**
* LAPACK routine to calculate `sqrt(x^2 + y^2)` in a manner which doesn't cause unnecessary overflow.
*
* @param x - first input number
* @param y - second input number
* @returns `sqrt(x^2 + y^2)`
*
* @example
* var h = dlapy2( -5.0, 12.0 );
* // returns 13.0
*
* @example
* var h = dlapy2( -0.0, -0.0 );
* // returns 0.0
*/
declare function dlapy2( x: number, y: number ): number;


// EXPORTS //

export = dlapy2;
