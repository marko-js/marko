# Render `{"product":{"name":"Trailhead 40L Pack","slug":"trailhead-40","featured":true,"sale":{"percent":20}},"related":[{"id":11,"name":"Rain Cover","price":24.5},{"id":12,"name":"Hip Belt","price":39},{"id":13,"name":"Dry Sack","price":14.25}],"$global":{"persisted":true}}`
```html
<h1>
  Trailhead 40L Pack
</h1>
<a
  href="/products/trailhead-40/specs"
>
  specs
</a>
<button>
  Show
</button>
<section>
  <em>
    Save 20%
  </em>
</section>
<ul>
  <li>
    <span
      class="price"
      title="$24.50"
    >
      $24.50
    </span>
     Rain Cover
  </li>
  <li>
    <span
      class="price"
      title="$39.00"
    >
      $39.00
    </span>
     Hip Belt
  </li>
  <li>
    <span
      class="price"
      title="$14.25"
    >
      $14.25
    </span>
     Dry Sack
  </li>
</ul>
```

# Update
```js
document.querySelector("button").click();
```
```html
<h1>
  Trailhead 40L Pack
</h1>
<a
  href="/products/trailhead-40/specs"
>
  specs
</a>
<button>
  Hide
</button>
<section
  class="spotlight"
>
  <em>
    Save 20%
  </em>
</section>
<ul>
  <li>
    <span
      class="price"
      title="$24.50"
    >
      $24.50
    </span>
     Rain Cover
  </li>
  <li>
    <span
      class="price"
      title="$39.00"
    >
      $39.00
    </span>
     Hip Belt
  </li>
  <li>
    <span
      class="price"
      title="$14.25"
    >
      $14.25
    </span>
     Dry Sack
  </li>
</ul>
```
## Change
```
UPDATE: button::text "Show" => "Hide"
UPDATE: .spotlight[class] null => "spotlight"
```

# Update `{"product":{"name":"Summit 65L Pack","slug":"summit-65","featured":false,"sale":null},"related":[{"id":12,"name":"Hip Belt","price":39},{"id":21,"name":"Ice Axe Loop","price":11.5},{"id":13,"name":"Dry Sack","price":14.25}],"$global":{"persisted":true}}`
```html
<h1>
  Summit 65L Pack
</h1>
<a
  href="/products/summit-65/specs"
>
  specs
</a>
<button>
  Hide
</button>
<section />
<ul>
  <li>
    <span
      class="price"
      title="$39.00"
    >
      $39.00
    </span>
     Hip Belt
  </li>
  <li>
    <span
      class="price"
      title="$11.50"
    >
      $11.50
    </span>
     Ice Axe Loop
  </li>
  <li>
    <span
      class="price"
      title="$14.25"
    >
      $14.25
    </span>
     Dry Sack
  </li>
</ul>
```
## Change
```
UPDATE: h1::text "Trailhead 40L Pack" => "Summit 65L Pack"
UPDATE: a[href] "/products/trailhead-40/specs" => "/products/summit-65/specs"
REMOVE: section > em
REMOVE: ul > li
INSERT: ul > li:nth-of-type(1) + li
UPDATE: section[class] "spotlight" => null
```

# Update
```js
document.querySelector("button").click();
```
```html
<h1>
  Summit 65L Pack
</h1>
<a
  href="/products/summit-65/specs"
>
  specs
</a>
<button>
  Show
</button>
<section />
<ul>
  <li>
    <span
      class="price"
      title="$39.00"
    >
      $39.00
    </span>
     Hip Belt
  </li>
  <li>
    <span
      class="price"
      title="$11.50"
    >
      $11.50
    </span>
     Ice Axe Loop
  </li>
  <li>
    <span
      class="price"
      title="$14.25"
    >
      $14.25
    </span>
     Dry Sack
  </li>
</ul>
```
## Change
```
UPDATE: button::text "Hide" => "Show"
```

# Update `{"product":{"name":"Trailhead 40L Pack","slug":"trailhead-40","featured":true,"sale":{"percent":20}},"related":[{"id":11,"name":"Rain Cover","price":24.5},{"id":12,"name":"Hip Belt","price":39},{"id":13,"name":"Dry Sack","price":14.25}],"$global":{"persisted":true}}`
```html
<h1>
  Trailhead 40L Pack
</h1>
<a
  href="/products/trailhead-40/specs"
>
  specs
</a>
<button>
  Show
</button>
<em>
  Save 20%
</em>
<section />
<ul>
  <li>
    <span
      class="price"
      title="$24.50"
    >
      $24.50
    </span>
     Rain Cover
  </li>
  <li>
    <span
      class="price"
      title="$39.00"
    >
      $39.00
    </span>
     Hip Belt
  </li>
  <li>
    <span
      class="price"
      title="$14.25"
    >
      $14.25
    </span>
     Dry Sack
  </li>
</ul>
```
## Change
```
UPDATE: h1::text "Summit 65L Pack" => "Trailhead 40L Pack"
UPDATE: a[href] "/products/summit-65/specs" => "/products/trailhead-40/specs"
INSERT: button + em
UPDATE: em::text@5 "" => "20"
REMOVE: ul > li:nth-of-type(2) + li
INSERT: ul > li
```
