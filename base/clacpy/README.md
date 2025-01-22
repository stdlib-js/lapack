<!--

@license Apache-2.0

Copyright (c) 2025 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# clacpy

> Copy all or part of a matrix `A` to another matrix `B`.

<section class="usage">

## Usage

```javascript
var clacpy = require( '@stdlib/lapack/base/clacpy' );
```

#### clacpy( order, uplo, M, N, A, LDA, B, LDB )

Copies all or part of a matrix `A` to another matrix `B`.

```javascript
var Complex64Array = require( '@stdlib/array/complex64' );
var reinterpret = require( '@stdlib/strided/base/reinterpret-complex64' );

var A = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
var B = new Complex64Array( 4 );

clacpy( 'row-major', 'all', 2, 2, A, 2, B, 2 );

var viewB = reinterpret( B, 0 );
// returns <Float32Array>[ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ]
```

The function has the following parameters:

-   **order**: storage layout.
-   **uplo**: specifies whether to copy the upper or lower triangular/trapezoidal part of a matrix `A`.
-   **M**: number of rows in `A`.
-   **N**: number of columns in `A`.
-   **A**: input [`Complex64Array`][@stdlib/array/complex64].
-   **LDA**: stride of the first dimension of `A` (a.k.a., leading dimension of the matrix `A`).
-   **B**: output [`Complex64Array`][@stdlib/array/complex64].
-   **LDB**: stride of the first dimension of `B` (a.k.a., leading dimension of the matrix `B`).

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments, max-len -->

```javascript
var Complex64Array = require( '@stdlib/array/complex64' );
var reinterpret = require( '@stdlib/strided/base/reinterpret-complex64' );

// Initial arrays...
var A0 = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0 ] );
var B0 = new Complex64Array( 5 );

// Create offset views...
var A1 = new Complex64Array( A0.buffer, A0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var B1 = new Complex64Array( B0.buffer, B0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

clacpy( 'row-major', 'all', 2, 2, A1, 2, B1, 2 );

var viewB = reinterpret( B0, 0 );
// returns <Float32Array>[ 0.0, 0.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0 ]
```

#### clacpy.ndarray( uplo, M, N, A, sa1, sa2, oa, B, sb1, sb2, ob )

Copies all or part of a matrix `A` to another matrix `B` using alternative indexing semantics.

```javascript
var Complex64Array = require( '@stdlib/array/complex64' );
var reinterpret = require( '@stdlib/strided/base/reinterpret-complex64' );

var A = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
var B = new Complex64Array( 4 );

clacpy.ndarray( 'all', 2, 2, A, 2, 1, 0, B, 2, 1, 0 );

var viewB = reinterpret( B, 0 );
// returns <Float32Array>[ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ]
```

The function has the following parameters:

-   **uplo**: specifies whether to copy the upper or lower triangular/trapezoidal part of a matrix `A`.
-   **M**: number of rows in `A`.
-   **N**: number of columns in `A`.
-   **A**: input [`Complex64Array`][@stdlib/array/complex64].
-   **sa1**: stride of the first dimension of `A`.
-   **sa2**: stride of the second dimension of `A`.
-   **oa**: starting index for `A`.
-   **B**: output [`Complex64Array`][@stdlib/array/complex64].
-   **sb1**: stride of the first dimension of `B`.
-   **sb2**: stride of the second dimension of `B`.
-   **ob**: starting index for `B`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameters support indexing semantics based on starting indices. For example,

<!-- eslint-disable max-len -->

```javascript
var Complex64Array = require( '@stdlib/array/complex64' );
var reinterpret = require( '@stdlib/strided/base/reinterpret-complex64' );

var A = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0 ] );
var B = new Complex64Array( 6 );

clacpy.ndarray( 'all', 2, 2, A, 2, 1, 1, B, 2, 1, 2 );

var viewB = reinterpret( B, 0 );
// returns <Float32Array>[ 0.0, 0.0, 0.0, 0.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   `clacpy()` corresponds to the [LAPACK][lapack] routine [`clacpy`][lapack-clacpy].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var Complex64Array = require( '@stdlib/array/complex64' );
var ndarray2array = require( '@stdlib/ndarray/base/to-array' );
var uniform = require( '@stdlib/random/array/discrete-uniform' );
var numel = require( '@stdlib/ndarray/base/numel' );
var shape2strides = require( '@stdlib/ndarray/base/shape2strides' );
var clacpy = require( '@stdlib/lapack/base/clacpy' );

var shape = [ 5, 8 ];
var order = 'row-major';
var strides = shape2strides( shape, order );

var N = numel( shape );

var A = new Complex64Array( uniform( 2*N, -10, 10, {
    'dtype': 'generic'
}));
console.log( ndarray2array( A, shape, strides, 0, order ) );

var B = new Complex64Array( uniform( 2*N, -10, 10, {
    'dtype': 'generic'
}));
console.log( ndarray2array( B, shape, strides, 0, order ) );

clacpy( order, 'all', shape[ 0 ], shape[ 1 ], A, strides[ 0 ], B, strides[ 0 ] );
console.log( ndarray2array( B, shape, strides, 0, order ) );
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->

* * *

<section class="c">

## C APIs

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
TODO
```

#### TODO

TODO.

```c
TODO
```

TODO

```c
TODO
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
TODO
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[lapack]: https://www.netlib.org/lapack/explore-html/

[lapack-clacpy]: https://netlib.org/lapack/explore-html/d0/d9e/group__lacpy_ga4eb69fef93799574c785add4eeb619f3.html#ga4eb69fef93799574c785add4eeb619f3

[@stdlib/array/complex64]: https://github.com/stdlib-js/array-complex64

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

</section>

<!-- /.links -->
