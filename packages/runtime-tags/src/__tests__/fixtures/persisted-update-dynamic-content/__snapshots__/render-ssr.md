# Render `{"title":"Trailhead 40L Pack","summary":"A dependable pack for long hauls.","view":"overview","specs":[],"$global":{"persisted":true}}`
```html
<h1>
  Trailhead 40L Pack
</h1>
<button
  class="count"
>
  clicked 0
</button>
<aside>
  <button
    class="toggle"
  >
    expand
  </button>
</aside>
<section>
  <p>
    Overview of Trailhead 40L Pack: A dependable pack for long hauls.
  </p>
</section>
```

# Update
```js
container.querySelector("button.count").click();
```
```html
<h1>
  Trailhead 40L Pack
</h1>
<button
  class="count"
>
  clicked 1
</button>
<aside>
  <button
    class="toggle"
  >
    expand
  </button>
</aside>
<section>
  <p>
    Overview of Trailhead 40L Pack: A dependable pack for long hauls.
  </p>
</section>
```
## Change
```
UPDATE: .count::text@8 "0" => "1"
```

# Update
```js
container.querySelector("button.toggle").click();
```
```html
<h1>
  Trailhead 40L Pack
</h1>
<button
  class="count"
>
  clicked 1
</button>
<aside>
  <button
    class="toggle"
  >
    collapse
  </button>
</aside>
<section>
  <p>
    Overview of Trailhead 40L Pack: A dependable pack for long hauls.
  </p>
</section>
```
## Change
```
UPDATE: .toggle::text "expand" => "collapse"
```

# Update `{"title":"Summit 65L Pack","summary":"","view":"specs","specs":[{"name":"volume","value":"65L"},{"name":"weight","value":"1.9kg"}],"$global":{"persisted":true}}`
```html
<h1>
  Summit 65L Pack
</h1>
<button
  class="count"
>
  clicked 1
</button>
<aside>
  <button
    class="toggle"
  >
    collapse
  </button>
</aside>
<section>
  <ul>
    <li>
      volume is 65L
    </li>
    <li>
      weight is 1.9kg
    </li>
  </ul>
</section>
```
## Change
```
UPDATE: h1::text "Trailhead 40L Pack" => "Summit 65L Pack"
INSERT: section > ul
REMOVE: section > p
```

# Update
```js
container.querySelector("button.count").click();
```
```html
<h1>
  Summit 65L Pack
</h1>
<button
  class="count"
>
  clicked 2
</button>
<aside>
  <button
    class="toggle"
  >
    collapse
  </button>
</aside>
<section>
  <ul>
    <li>
      volume is 65L
    </li>
    <li>
      weight is 1.9kg
    </li>
  </ul>
</section>
```
## Change
```
UPDATE: .count::text@8 "1" => "2"
```

# Update `{"title":"Trailhead 40L Pack","summary":"A dependable pack for long hauls.","view":"overview","specs":[],"$global":{"persisted":true}}`
```html
<h1>
  Trailhead 40L Pack
</h1>
<button
  class="count"
>
  clicked 2
</button>
<aside>
  <button
    class="toggle"
  >
    collapse
  </button>
</aside>
<section>
  <p>
    Overview of Trailhead 40L Pack: A dependable pack for long hauls.
  </p>
</section>
```
## Change
```
UPDATE: h1::text "Summit 65L Pack" => "Trailhead 40L Pack"
INSERT: section > p
REMOVE: section > ul
```

# Update
```js
container.querySelector("button.toggle").click();
```
```html
<h1>
  Trailhead 40L Pack
</h1>
<button
  class="count"
>
  clicked 2
</button>
<aside>
  <button
    class="toggle"
  >
    expand
  </button>
</aside>
<section>
  <p>
    Overview of Trailhead 40L Pack: A dependable pack for long hauls.
  </p>
</section>
```
## Change
```
UPDATE: .toggle::text "collapse" => "expand"
```
