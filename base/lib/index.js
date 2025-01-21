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

'use strict';

/*
* When adding modules to the namespace, ensure that they are added in alphabetical order according to module name.
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-read-only-property' );


// MAIN //

/**
* Top-level namespace.
*
* @namespace ns
*/
var ns = {};

/**
* @name clacgv
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/lapack/base/clacgv}
*/
setReadOnly( ns, 'clacgv', require( './../../base/clacgv' ) );

/**
* @name clacpy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/lapack/base/clacpy}
*/
setReadOnly( ns, 'clacpy', require( './../../base/clacpy' ) );

/**
* @name claset
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/lapack/base/claset}
*/
setReadOnly( ns, 'claset', require( './../../base/claset' ) );

/**
* @name dgetrans
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/lapack/base/dge-trans}
*/
setReadOnly( ns, 'dgetrans', require( './../../base/dge-trans' ) );

/**
* @name dlacpy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/lapack/base/dlacpy}
*/
setReadOnly( ns, 'dlacpy', require( './../../base/dlacpy' ) );

/**
* @name dlamch
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/lapack/base/dlamch}
*/
setReadOnly( ns, 'dlamch', require( './../../base/dlamch' ) );

/**
* @name dlassq
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/lapack/base/dlassq}
*/
setReadOnly( ns, 'dlassq', require( './../../base/dlassq' ) );

/**
* @name dlaswp
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/lapack/base/dlaswp}
*/
setReadOnly( ns, 'dlaswp', require( './../../base/dlaswp' ) );

/**
* @name dpttrf
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/lapack/base/dpttrf}
*/
setReadOnly( ns, 'dpttrf', require( './../../base/dpttrf' ) );

/**
* @name sgetrans
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/lapack/base/sge-trans}
*/
setReadOnly( ns, 'sgetrans', require( './../../base/sge-trans' ) );

/**
* @name slacpy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/lapack/base/slacpy}
*/
setReadOnly( ns, 'slacpy', require( './../../base/slacpy' ) );

/**
* @name slaswp
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/lapack/base/slaswp}
*/
setReadOnly( ns, 'slaswp', require( './../../base/slaswp' ) );

/**
* @name spttrf
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/lapack/base/spttrf}
*/
setReadOnly( ns, 'spttrf', require( './../../base/spttrf' ) );

/**
* @name zlacgv
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/lapack/base/zlacgv}
*/
setReadOnly( ns, 'zlacgv', require( './../../base/zlacgv' ) );

/**
* @name zlacpy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/lapack/base/zlacpy}
*/
setReadOnly( ns, 'zlacpy', require( './../../base/zlacpy' ) );

/**
* @name zlaset
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/lapack/base/zlaset}
*/
setReadOnly( ns, 'zlaset', require( './../../base/zlaset' ) );

/**
* @name zrot
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/lapack/base/zrot}
*/
setReadOnly( ns, 'zrot', require( './../../base/zrot' ) );


// EXPORTS //

module.exports = ns;
