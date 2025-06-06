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

# zlaswp

> Perform a series of row interchanges on an input matrix.

<section class="usage">

## Usage

```javascript
var zlaswp = require( '@stdlib/lapack/base/zlaswp' );
```

#### zlaswp( N, A, LDA, k1, k2, IPIV, incx )

Performs a series of row interchanges on an input matrix `A` using pivot indices stored in `IPIV`.

<!-- eslint-disable max-len -->

```javascript
var Int32Array = require( '@stdlib/array/int32' );
var Complex128Array = require( '@stdlib/array/complex128' );

var A = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
var IPIV = new Int32Array( [ 2, 0, 1 ] );

zlaswp( 'row-major', 2, A, 2, 0, 2, IPIV, 1 );
// A => <Complex128Array>[ 5.0, 6.0, 7.0, 8.0, 1.0, 2.0, 3.0, 4.0, 9.0, 10.0, 11.0, 12.0 ]
```

The function has the following parameters:

-   **order**: storage layout.
-   **N**: number of columns in `A`.
-   **A**: input matrix stored in linear memory as a [`Complex128Array`][@stdlib/array/complex128].
-   **LDA**: stride of the first dimension of `A` (a.k.a., leading dimension of the matrix `A`).
-   **k1**: index of first row to interchange when `incx` is positive and the index of the last row to interchange when `incx` is negative.
-   **k2**: index of last row to interchange when `incx` is positive and the index of the first row to interchange when `incx` is negative.
-   **IPIV**: vector of pivot indices as an [`Int32Array`][@stdlib/array/int32]. Must contain at least `k1+(k2-k1)*abs(incx)` elements. Only the elements in positions `k1` through `k1+(k2-k1)*abs(incx)` are accessed.
-   **incx**: increment between successive values of `IPIV`. Elements from `IPIV` are accessed according to `IPIV[k1+(k-k1)*abs(incx)] = j`, thus implying that rows `k` and `j` should be interchanged. If `incx` is negative, the pivots are applied in reverse order.

The sign of the increment parameter `incx` determines the order in which pivots are applied. For example, to apply pivots in reverse order,

<!-- eslint-disable max-len -->

```javascript
var Int32Array = require( '@stdlib/array/int32' );
var Complex128Array = require( '@stdlib/array/complex128' );

var A = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
var IPIV = new Int32Array( [ 2, 0, 1 ] );

zlaswp( 'row-major', 2, A, 2, 0, 2, IPIV, -1 );
// A => <Complex128Array>[ 5.0, 6.0, 7.0, 8.0, 1.0, 2.0, 3.0, 4.0, 9.0, 10.0, 11.0, 12.0 ]
```

To perform strided access over `IPIV`, provide an `abs(incx)` value greater than one. For example, to access every other element in `IPIV`,

<!-- eslint-disable max-len -->

```javascript
var Int32Array = require( '@stdlib/array/int32' );
var Complex128Array = require( '@stdlib/array/complex128' );

var A = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
var IPIV = new Int32Array( [ 2, 999, 0, 999, 1 ] );

zlaswp( 'row-major', 2, A, 2, 0, 2, IPIV, 2 );
// A => <Complex128Array>[ 5.0, 6.0, 7.0, 8.0, 1.0, 2.0, 3.0, 4.0, 9.0, 10.0, 11.0, 12.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments, max-len -->

```javascript
var Int32Array = require( '@stdlib/array/int32' );
var Complex128Array = require( '@stdlib/array/complex128' );

// Initial arrays...
var A0 = new Complex128Array( [ 0.0, 0.0, 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
var IPIV0 = new Int32Array( [ 0, 2, 0, 1 ] );

// Create offset views...
var A1 = new Complex128Array( A0.buffer, A0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var IPIV1 = new Int32Array( IPIV0.buffer, IPIV0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

zlaswp( 'row-major', 2, A1, 2, 0, 2, IPIV1, 1 );
// A0 => <Complex128Array>[ 0.0, 0.0, 5.0, 6.0, 7.0, 8.0, 1.0, 2.0, 3.0, 4.0, 9.0, 10.0, 11.0, 12.0 ]
```

#### zlaswp.ndarray( N, A, sa1, sa2, oa, k1, k2, inck, IPIV, si, oi )

Performs a series of row interchanges on the matrix `A` using pivot indices stored in `IPIV` and alternative indexing semantics.

<!-- eslint-disable max-len -->

```javascript
var Int32Array = require( '@stdlib/array/int32' );
var Complex128Array = require( '@stdlib/array/complex128' );

var A = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
var IPIV = new Int32Array( [ 2, 0, 1 ] );

zlaswp.ndarray( 2, A, 2, 1, 0, 0, 2, 1, IPIV, 1, 0 );
// A => <Complex128Array>[ 5.0, 6.0, 7.0, 8.0, 1.0, 2.0, 3.0, 4.0, 9.0, 10.0, 11.0, 12.0 ]
```

The function has the following additional parameters:

-   **N**: number of columns in `A`.
-   **A**: input matrix stored in linear memory as a [`Complex128Array`][@stdlib/array/complex128].
-   **sa1**: stride of the first dimension of `A`.
-   **sa2**: stride of the second dimension of `A`.
-   **oa**: starting index for `A`.
-   **k1**: index of first row to interchange when `inck` is positive and the index of the last row to interchange when `inck` is negative.
-   **k2**: index of last row to interchange when `inck` is positive and the index of the first row to interchange when `inck` is negative.
-   **inck**: direction in which to apply pivots (-1 to apply pivots in reverse order; otherwise, apply in provided order).
-   **IPIV**: vector of pivot indices as an [`Int32Array`][@stdlib/array/int32].
-   **si**: index increment for `IPIV`.
-   **oi**: starting index for `IPIV`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameters support indexing semantics based on starting indices. For example,

<!-- eslint-disable max-len -->

```javascript
var Int32Array = require( '@stdlib/array/int32' );
var Complex128Array = require( '@stdlib/array/complex128' );

var A = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
var IPIV = new Int32Array( [ 0, 0, 2, 0, 1 ] );

zlaswp.ndarray( 2, A, 2, 1, 2, 0, 2, 1, IPIV, 1, 2 );
// A => <Complex128Array>[ 0.0, 0.0, 0.0, 0.0, 5.0, 6.0, 7.0, 8.0, 1.0, 2.0, 3.0, 4.0, 9.0, 10.0, 11.0, 12.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Both functions access `k2-k1+1` elements from `IPIV`.
-   While `zlaswp` conflates the order in which pivots are applied with the order in which elements in `IPIV` are accessed, the `ndarray` method delineates control of those behaviors with separate parameters `inck` and `si`.
-   `zlaswp()` corresponds to the [LAPACK][LAPACK] function [`zlaswp`][lapack-zlaswp].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint-disable max-len -->

<!-- eslint no-undef: "error" -->

```javascript
var Complex128Array = require( '@stdlib/array/complex128' );
var Int32Array = require( '@stdlib/array/int32' );
var ndarray2array = require( '@stdlib/ndarray/base/to-array' );
var zlaswp = require( '@stdlib/lapack/base/zlaswp' );

// Specify matrix meta data:
var shape = [ 4, 2 ];
var strides = [ 1, 4 ];
var offset = 0;
var order = 'column-major';

// Create a matrix stored in linear memory:
var A = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0 ] );
console.log( ndarray2array( A, shape, strides, offset, order ) );

// Define a vector of pivot indices:
var IPIV = new Int32Array( [ 2, 0, 3, 1 ] );

// Interchange rows:
zlaswp( order, shape[ 1 ], A, strides[ 1 ], 0, shape[ 0 ]-1, IPIV, 1 );
console.log( ndarray2array( A, shape, strides, offset, order ) );
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

[lapack-zlaswp]: https://www.netlib.org/lapack/explore-html/d1/d7e/group__laswp_ga6c7f83bff7887543bcb6c019e06e131d.html

[@stdlib/array/complex128]: https://github.com/stdlib-js/array-complex128

[@stdlib/array/int32]: https://github.com/stdlib-js/array-int32

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

</section>

<!-- /.links -->
