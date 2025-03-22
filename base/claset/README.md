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

# claset

> Set the off-diagonal elements and the diagonal elements of a single-precision complex floating-point matrix to specified values.

<section class="usage">

## Usage

```javascript
var claset = require( '@stdlib/lapack/base/claset' );
```

#### claset( order, uplo, M, N, alpha, beta, A, LDA )

Sets the off-diagonal elements and the diagonal elements of a single-precision complex floating-point matrix to specified values.

```javascript
var Complex64Array = require( '@stdlib/array/complex64' );
var Complex64 = require( '@stdlib/complex/float32/ctor' );
var realf = require( '@stdlib/complex/float32/real' );
var imagf = require( '@stdlib/complex/float32/imag' );

var A = new Complex64Array( 4 );

var alpha = new Complex64( 1.0, 2.0 );
var beta = new Complex64( 3.0, 4.0 );

claset( 'row-major', 'all', 2, 2, alpha, beta, A, 2 );

var z = A.get( 0 );
// returns <Complex64>

var re = realf( z );
// returns 3.0

var im = imagf( z );
// returns 4.0

z = A.get( 1 );
// returns <Complex64>

re = realf( z );
// returns 1.0

im = imagf( z );
// returns 2.0
```

The function has the following parameters:

-   **order**: storage layout.
-   **uplo**: specifies whether to set the upper or lower triangular/trapezoidal part of a matrix `A`.
-   **M**: number of rows in `A`.
-   **N**: number of columns in `A`.
-   **alpha**: value assigned to off-diagonal elements.
-   **beta**: value assigned to diagonal elements.
-   **A**: input [`Complex64Array`][@stdlib/array/complex64].
-   **LDA**: stride of the first dimension of `A` (a.k.a., leading dimension of the matrix `A`).

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Complex64Array = require( '@stdlib/array/complex64' );
var Complex64 = require( '@stdlib/complex/float32/ctor' );
var realf = require( '@stdlib/complex/float32/real' );
var imagf = require( '@stdlib/complex/float32/imag' );

// Initial array:
var A0 = new Complex64Array( 5 );

// Create offset view:
var A1 = new Complex64Array( A0.buffer, A0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

var alpha = new Complex64( 1.0, 2.0 );
var beta = new Complex64( 3.0, 4.0 );

claset( 'row-major', 'all', 2, 2, alpha, beta, A1, 2 );

var z = A0.get( 1 );
// returns <Complex64>

var re = realf( z );
// returns 3.0

var im = imagf( z );
// returns 4.0
```

#### claset.ndarray( uplo, M, N, alpha, beta, A, sa1, sa2, oa )

Sets the off-diagonal elements and the diagonal elements of a single-precision complex floating-point matrix to specified values using alternative indexing semantics.

```javascript
var Complex64Array = require( '@stdlib/array/complex64' );
var Complex64 = require( '@stdlib/complex/float32/ctor' );
var realf = require( '@stdlib/complex/float32/real' );
var imagf = require( '@stdlib/complex/float32/imag' );

var A = new Complex64Array( 4 );

var alpha = new Complex64( 1.0, 2.0 );
var beta = new Complex64( 3.0, 4.0 );

claset.ndarray( 'all', 2, 2, alpha, beta, A, 2, 1, 0 );

var z = A.get( 0 );
// returns <Complex64>

var re = realf( z );
// returns 3.0

var im = imagf( z );
// returns 4.0

z = A.get( 1 );
// returns <Complex64>

re = realf( z );
// returns 1.0

im = imagf( z );
// returns 2.0
```

The function has the following parameters:

-   **uplo**: specifies whether to set the upper or lower triangular/trapezoidal part of a matrix `A`.
-   **M**: number of rows in `A`.
-   **N**: number of columns in `A`.
-   **alpha**: value assigned to off-diagonal elements.
-   **beta**: value assigned to diagonal elements.
-   **A**: input [`Complex64Array`][@stdlib/array/complex64].
-   **sa1**: stride of the first dimension of `A`.
-   **sa2**: stride of the second dimension of `A`.
-   **oa**: starting index for `A`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameter supports indexing semantics based on a starting index. For example,

```javascript
var Complex64Array = require( '@stdlib/array/complex64' );
var Complex64 = require( '@stdlib/complex/float32/ctor' );
var realf = require( '@stdlib/complex/float32/real' );
var imagf = require( '@stdlib/complex/float32/imag' );

var A = new Complex64Array( 5 );

var alpha = new Complex64( 1.0, 2.0 );
var beta = new Complex64( 3.0, 4.0 );

claset.ndarray( 'all', 2, 2, alpha, beta, A, 2, 1, 1 );

var z = A.get( 0 );
// returns <Complex64>

var re = realf( z );
// returns 0.0

var im = imagf( z );
// returns 0.0

z = A.get( 1 );
// returns <Complex64>

re = realf( z );
// returns 3.0

im = imagf( z );
// returns 4.0
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   `claset()` corresponds to the [LAPACK][lapack] routine [`claset`][lapack-claset].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var Complex64Array = require( '@stdlib/array/complex64' );
var Complex64 = require( '@stdlib/complex/float32/ctor' );
var ndarray2array = require( '@stdlib/ndarray/base/to-array' );
var numel = require( '@stdlib/ndarray/base/numel' );
var shape2strides = require( '@stdlib/ndarray/base/shape2strides' );
var claset = require( '@stdlib/lapack/base/claset' );

var shape = [ 5, 8 ];
var order = 'row-major';
var strides = shape2strides( shape, order );

var N = numel( shape );

var A = new Complex64Array( N );
console.log( ndarray2array( A, shape, strides, 0, order ) );

var alpha = new Complex64( 1.0, 2.0 );
var beta = new Complex64( 3.0, 4.0 );

claset( order, 'all', shape[ 0 ], shape[ 1 ], alpha, beta, A, strides[ 0 ] );
console.log( ndarray2array( A, shape, strides, 0, order ) );
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

[lapack-claset]: https://www.netlib.org/lapack/explore-html/d0/de5/group__laset_ga7149b3d5cf0e2b410d4664110a43139f.html#ga7149b3d5cf0e2b410d4664110a43139f

[@stdlib/array/complex64]: https://github.com/stdlib-js/array-complex64

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

</section>

<!-- /.links -->
