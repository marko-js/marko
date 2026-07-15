# Render `{"$global":{"persisted":true,"view":"a","topic":"sales"}}`
```html
<button
  class="count"
>
  clicked 0
</button>
<section
  class="shell"
>
  <p
    class="a"
  >
    Panel A: sales report
  </p>
  <span
    class="a2"
  >
    alpha detail
  </span>
</section>
```

# Update
```js
container.querySelector("button.count").click();
```
```html
<button
  class="count"
>
  clicked 1
</button>
<section
  class="shell"
>
  <p
    class="a"
  >
    Panel A: sales report
  </p>
  <span
    class="a2"
  >
    alpha detail
  </span>
</section>
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
<section
  class="shell"
>
  <section
    class="b"
  >
    Panel B: sales report
  </section>
  <span
    class="b2"
  >
    beta detail
  </span>
</section>
```
## Change
```
INSERT: .shell > :is(.b, .b2)
REMOVE: .shell > p
REMOVE: .shell > span
```

# Update
```js
container.querySelector("button.count").click();
```
```html
<button
  class="count"
>
  clicked 2
</button>
<section
  class="shell"
>
  <section
    class="b"
  >
    Panel B: sales report
  </section>
  <span
    class="b2"
  >
    beta detail
  </span>
</section>
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
<section
  class="shell"
>
  <p
    class="a"
  >
    Panel A: growth report
  </p>
  <span
    class="a2"
  >
    alpha detail
  </span>
</section>
```
## Change
```
INSERT: .shell > :is(.a, .a2)
REMOVE: .shell > section
REMOVE: .shell > span
```
