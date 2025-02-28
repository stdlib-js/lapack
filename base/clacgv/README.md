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

# clacgv

> Conjugate each element in a single-precision complex floating-point vector.

<section class="usage">

## Usage

```javascript
var clacgv = require( '@stdlib/lapack/base/clacgv' );
```

#### clacgv( N, cx, strideCX )

Conjugates each element in a single-precision complex floating-point vector.

```javascript
var Complex64Array = require( '@stdlib/array/complex64' );
var realf = require( '@stdlib/complex/float32/real' );
var imagf = require( '@stdlib/complex/float32/imag' );

var cx = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0 ] );

clacgv( 2, cx, 1 );

var z = cx.get( 0 );
// returns <Complex64>

var re = realf( z );
// returns 1.0

var im = imagf( z );
// returns -2.0
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **cx**: input [`Complex64Array`][@stdlib/array/complex64].
-   **strideCX**: stride length for `cx`.

The `N` and stride parameters determine which elements in `cx` are conjugated. For example, to conjugate every other element in `cx`,

```javascript
var Complex64Array = require( '@stdlib/array/complex64' );
var realf = require( '@stdlib/complex/float32/real' );
var imagf = require( '@stdlib/complex/float32/imag' );

var cx = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );

clacgv( 2, cx, 2 );

var z = cx.get( 0 );
// returns <Complex64>

var re = realf( z );
// returns 1.0

var im = imagf( z );
// returns -2.0
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Complex64Array = require( '@stdlib/array/complex64' );
var Complex64 = require( '@stdlib/complex/float32/ctor' );
var realf = require( '@stdlib/complex/float32/real' );
var imagf = require( '@stdlib/complex/float32/imag' );

// Initial array:
var cx0 = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );

// Create an offset view:
var cx1 = new Complex64Array( cx0.buffer, cx0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

// Conjugate every element in `cx1`:
clacgv( 3, cx1, 1 );

var z = cx0.get( 1 );
// returns <Complex64>

var re = realf( z );
// returns 3.0

var im = imagf( z );
// returns -4.0
```

#### clacgv.ndarray( N, cx, strideCX, offsetCX )

Conjugates each element in a single-precision floating-point vector using alternative indexing semantics.

```javascript
var Complex64Array = require( '@stdlib/array/complex64' );
var realf = require( '@stdlib/complex/float32/real' );
var imagf = require( '@stdlib/complex/float32/imag' );

var cx = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );

clacgv.ndarray( 3, cx, 1, 0 );

var z = cx.get( 0 );
// returns <Complex64>

var re = realf( z );
// returns 1.0

var im = imagf( z );
// returns -2.0
```

The function has the following additional parameters:

-   **offsetCX**: starting index for `cx`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameter supports indexing semantics based on a starting index. For example, to conjugate every other element in the input strided array starting from the second element,

```javascript
var Complex64Array = require( '@stdlib/array/complex64' );
var realf = require( '@stdlib/complex/float32/real' );
var imagf = require( '@stdlib/complex/float32/imag' );

var cx = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );

clacgv.ndarray( 2, cx, 2, 1 );

var z = cx.get( 3 );
// returns <Complex64>

var re = realf( z );
// returns 7.0

var im = imagf( z );
// returns -8.0
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions return `cx` unchanged.
-   `clacgv()` corresponds to the [LAPACK][lapack] BLAS-like level 1 routine [`clacgv`][clacgv].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' );
var filledarrayBy = require( '@stdlib/array/filled-by' );
var Complex64 = require( '@stdlib/complex/float32/ctor' );
var clacgv = require( '@stdlib/lapack/base/clacgv' );

function rand() {
    return new Complex64( discreteUniform( 0, 10 ), discreteUniform( -5, 5 ) );
}

var cx = filledarrayBy( 10, 'complex64', rand );
console.log( cx.toString() );

// Conjugate elements:
clacgv( cx.length, cx, 1 );
console.log( cx.get( cx.length-1 ).toString() );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[lapack]: https://www.netlib.org/lapack

[clacgv]: https://www.netlib.org/lapack/explore-html/d9/d50/group__lacgv_ga689d8db6749fa9b193ff8520bfd6b2e9.html#ga689d8db6749fa9b193ff8520bfd6b2e9

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[@stdlib/array/complex64]: https://github.com/stdlib-js/array-complex64

</section>

<!-- /.links -->
