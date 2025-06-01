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

# zlacgv

> Conjugate each element in a double-precision complex floating-point vector.

<section class="usage">

## Usage

```javascript
var zlacgv = require( '@stdlib/lapack/base/zlacgv' );
```

#### zlacgv( N, zx, strideZX )

Conjugates each element in a double-precision complex floating-point vector.

```javascript
var Complex128Array = require( '@stdlib/array/complex128' );
var real = require( '@stdlib/complex/float64/real' );
var imag = require( '@stdlib/complex/float64/imag' );

var zx = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0 ] );

zlacgv( 2, zx, 1 );

var z = zx.get( 0 );
// returns <Complex128>

var re = real( z );
// returns 1.0

var im = imag( z );
// returns -2.0
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **zx**: input [`Complex128Array`][@stdlib/array/complex128].
-   **strideZX**: stride length for `zx`.

The `N` and stride parameters determine which elements in `zx` are conjugated. For example, to conjugate every other element in `zx`,

```javascript
var Complex128Array = require( '@stdlib/array/complex128' );
var real = require( '@stdlib/complex/float64/real' );
var imag = require( '@stdlib/complex/float64/imag' );

var zx = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );

zlacgv( 2, zx, 2 );

var z = zx.get( 0 );
// returns <Complex128>

var re = real( z );
// returns 1.0

var im = imag( z );
// returns -2.0
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Complex128Array = require( '@stdlib/array/complex128' );
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var real = require( '@stdlib/complex/float64/real' );
var imag = require( '@stdlib/complex/float64/imag' );

// Initial array:
var zx0 = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );

// Create an offset view:
var zx1 = new Complex128Array( zx0.buffer, zx0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

// Conjugate every element in `zx1`:
zlacgv( 3, zx1, 1 );

var z = zx0.get( 1 );
// returns <Complex128>

var re = real( z );
// returns 3.0

var im = imag( z );
// returns -4.0
```

#### zlacgv.ndarray( N, zx, strideZX, offsetZX )

Conjugates each element in a double-precision floating-point vector using alternative indexing semantics.

```javascript
var Complex128Array = require( '@stdlib/array/complex128' );
var real = require( '@stdlib/complex/float64/real' );
var imag = require( '@stdlib/complex/float64/imag' );

var zx = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );

zlacgv.ndarray( 3, zx, 1, 0 );

var z = zx.get( 0 );
// returns <Complex128>

var re = real( z );
// returns 1.0

var im = imag( z );
// returns -2.0
```

The function has the following additional parameters:

-   **offsetZX**: starting index for `zx`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameter supports indexing semantics based on a starting index. For example, to conjugate every other element in the input strided array starting from the second element,

```javascript
var Complex128Array = require( '@stdlib/array/complex128' );
var real = require( '@stdlib/complex/float64/real' );
var imag = require( '@stdlib/complex/float64/imag' );

var zx = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );

zlacgv.ndarray( 2, zx, 2, 1 );

var z = zx.get( 3 );
// returns <Complex128>

var re = real( z );
// returns 7.0

var im = imag( z );
// returns -8.0
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions return `zx` unchanged.
-   `zlacgv()` corresponds to the [LAPACK][lapack] BLAS-like level 1 routine [`zlacgv`][zlacgv].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' );
var filledarrayBy = require( '@stdlib/array/filled-by' );
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var zlacgv = require( '@stdlib/lapack/base/zlacgv' );

function rand() {
    return new Complex128( discreteUniform( 0, 10 ), discreteUniform( -5, 5 ) );
}

var zx = filledarrayBy( 10, 'complex128', rand );
console.log( zx.toString() );

// Conjugate elements:
zlacgv( zx.length, zx, 1 );
console.log( zx.get( zx.length-1 ).toString() );
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

[zlacgv]: https://www.netlib.org/lapack/explore-html/d9/d50/group__lacgv_gae42087fcabd33130fcbac2aff031de8b.html#gae42087fcabd33130fcbac2aff031de8b

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[@stdlib/array/complex128]: https://github.com/stdlib-js/array-complex128

</section>

<!-- /.links -->
