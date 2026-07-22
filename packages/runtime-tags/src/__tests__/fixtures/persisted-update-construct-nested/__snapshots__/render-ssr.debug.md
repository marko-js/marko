# Render `{"$global":{"persisted":true,"view":"a","topic":"sales"}}`
```html
<button
  class="count"
>
  clicked 0
</button>
<div
  class="shell"
>
  <h3
    class="page-heading"
  >
    Page
  </h3>
  <p
    class="a"
  >
    Panel A: sales report
  </p>
</div>
```

# Update
```js
document.querySelector("button.count").click();
```
```html
<button
  class="count"
>
  clicked 1
</button>
<div
  class="shell"
>
  <h3
    class="page-heading"
  >
    Page
  </h3>
  <p
    class="a"
  >
    Panel A: sales report
  </p>
</div>
```
## Change
```
UPDATE: .count::text@8 "0" => "1"
```

# Update `{"$global":{"persisted":true,"view":"b","topic":"sales"}}`
```html
<button
  class="count"
>
  clicked 1
</button>
<div
  class="shell"
>
  <h3
    class="page-heading"
  >
    Page
  </h3>
  <section
    class="b"
  >
    Panel B: sales report
  </section>
</div>
```
## Change
```
INSERT: .shell > .b
REMOVE: .page-heading + p
UPDATE: .b::text@9 "" => "sales report"
```

# Update
```js
document.querySelector("button.count").click();
```
```html
<button
  class="count"
>
  clicked 2
</button>
<div
  class="shell"
>
  <h3
    class="page-heading"
  >
    Page
  </h3>
  <section
    class="b"
  >
    Panel B: sales report
  </section>
</div>
```
## Change
```
UPDATE: .count::text@8 "1" => "2"
```

# Update `{"$global":{"persisted":true,"view":"a","topic":"growth"}}`
```html
<button
  class="count"
>
  clicked 2
</button>
<div
  class="shell"
>
  <h3
    class="page-heading"
  >
    Page
  </h3>
  <p
    class="a"
  >
    Panel A: growth report
  </p>
</div>
```
## Change
```
INSERT: section + .a
REMOVE: .page-heading + section
UPDATE: .a::text@9 "" => "growth report"
```
