# Render `{"title":"Trailhead 40L Pack","related":[{"id":11,"name":"Rain Cover","price":24.5},{"id":12,"name":"Hip Belt","price":39}],"note":"Ships tomorrow","$global":{"persisted":true}}`
```html
<h1>
  Trailhead 40L Pack
</h1>
<button>
  clicked 0
</button>
<section>
  loading related…
</section>
<footer />
```

# Update
```html
<h1>
  Trailhead 40L Pack
</h1>
<button>
  clicked 0
</button>
<section>
  <ul>
    <li>
      Rain Cover costs 24.5
    </li>
    <li>
      Hip Belt costs 39
    </li>
  </ul>
</section>
<footer />
```
## Change
```
INSERT: section > ul > li
INSERT: section > ul > li:nth-of-type(1)::text("Rain Cover")
INSERT: section > ul > li:nth-of-type(1)::text@0 + ::text(" costs ")
INSERT: section > ul > li:nth-of-type(1)::text@10 + ::text("24.5")
INSERT: section > ul > li:nth-of-type(1) + li
INSERT: section > ul > li:nth-of-type(2)::text("Hip Belt")
INSERT: section > ul > li:nth-of-type(2)::text@0 + ::text(" costs ")
INSERT: section > ul > li:nth-of-type(2)::text@8 + ::text("39")
REMOVE: section::text("loading related…")
INSERT: section > ul
```

# Update
```html
<h1>
  Trailhead 40L Pack
</h1>
<button>
  clicked 0
</button>
<section>
  <ul>
    <li>
      Rain Cover costs 24.5
    </li>
    <li>
      Hip Belt costs 39
    </li>
  </ul>
</section>
<footer>
  <em>
    Ships tomorrow
  </em>
</footer>
```
## Change
```
INSERT: footer > em
INSERT: footer > em::text("Ships tomorrow")
```

# Update
```js
container.querySelector("button").click();
```
```html
<h1>
  Trailhead 40L Pack
</h1>
<button>
  clicked 1
</button>
<section>
  <ul>
    <li>
      Rain Cover costs 24.5
    </li>
    <li>
      Hip Belt costs 39
    </li>
  </ul>
</section>
<footer>
  <em>
    Ships tomorrow
  </em>
</footer>
```
## Change
```
UPDATE: button::text@8 "0" => "1"
```

# Update update frame 1 of 3
```html
<h1>
  Summit 65L Pack
</h1>
<button>
  clicked 1
</button>
<section>
  <ul>
    <li>
      Rain Cover costs 24.5
    </li>
    <li>
      Hip Belt costs 39
    </li>
  </ul>
</section>
<footer>
  <em>
    Ships tomorrow
  </em>
</footer>
```
## Change
```
UPDATE: h1::text "Trailhead 40L Pack" => "Summit 65L Pack"
```

# Update update frame 2 of 3
```html
<h1>
  Summit 65L Pack
</h1>
<button>
  clicked 1
</button>
<section>
  <ul>
    <li>
      Hip Belt costs 39
    </li>
    <li>
      Ice Axe Loop costs 11.5
    </li>
  </ul>
</section>
<footer>
  <em>
    Ships tomorrow
  </em>
</footer>
```
## Change
```
REMOVE: section > ul > li
INSERT: section > ul > li:nth-of-type(1) + li
```

# Update `{"title":"Summit 65L Pack","related":[{"id":12,"name":"Hip Belt","price":39},{"id":21,"name":"Ice Axe Loop","price":11.5}],"note":"Backordered","$global":{"persisted":true}}`
```html
<h1>
  Summit 65L Pack
</h1>
<button>
  clicked 1
</button>
<section>
  <ul>
    <li>
      Hip Belt costs 39
    </li>
    <li>
      Ice Axe Loop costs 11.5
    </li>
  </ul>
</section>
<footer>
  <em>
    Backordered
  </em>
</footer>
```
## Change
```
UPDATE: footer > em::text "Ships tomorrow" => "Backordered"
```

# Update
```js
container.querySelector("button").click();
```
```html
<h1>
  Summit 65L Pack
</h1>
<button>
  clicked 2
</button>
<section>
  <ul>
    <li>
      Hip Belt costs 39
    </li>
    <li>
      Ice Axe Loop costs 11.5
    </li>
  </ul>
</section>
<footer>
  <em>
    Backordered
  </em>
</footer>
```
## Change
```
UPDATE: button::text@8 "1" => "2"
```

# Update `{"title":"Trailhead 40L Pack","related":[{"id":11,"name":"Rain Cover","price":24.5},{"id":12,"name":"Hip Belt","price":39}],"note":"Ships tomorrow","$global":{"persisted":true}}`
```html
<h1>
  Trailhead 40L Pack
</h1>
<button>
  clicked 2
</button>
<section>
  <ul>
    <li>
      Rain Cover costs 24.5
    </li>
    <li>
      Hip Belt costs 39
    </li>
  </ul>
</section>
<footer>
  <em>
    Ships tomorrow
  </em>
</footer>
```
## Change
```
UPDATE: h1::text "Summit 65L Pack" => "Trailhead 40L Pack"
REMOVE: section > ul > li:nth-of-type(2) + li
INSERT: section > ul > li
UPDATE: footer > em::text "Backordered" => "Ships tomorrow"
```
