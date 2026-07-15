# Render `{"$global":{"persisted":true,"view":"home","widget":"x","topic":"sales"}}`
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
    class="home"
  >
    welcome home
  </p>
  <span
    class="x"
  >
    Widget X: sales report
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
    class="home"
  >
    welcome home
  </p>
  <span
    class="x"
  >
    Widget X: sales report
  </span>
</section>
```
## Change
```
UPDATE: .count::text@8 "0" => "1"
```

# Update `{"$global":{"persisted":true,"persistedCrossRoute":true,"view":"dashboard","widget":"y","topic":"sales"}}`
```html
<button
  class="count"
>
  clicked 1
</button>
<section
  class="shell"
>
  <h2
    class="dash"
  >
    Dashboard
  </h2>
  <section
    class="y"
  >
    Widget Y: sales report
  </section>
</section>
```
## Change
```
INSERT: .shell > :is(.dash, .y)
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
  <h2
    class="dash"
  >
    Dashboard
  </h2>
  <section
    class="y"
  >
    Widget Y: sales report
  </section>
</section>
```
## Change
```
UPDATE: .count::text@8 "1" => "2"
```

# Update `{"$global":{"persisted":true,"persistedCrossRoute":true,"view":"home","widget":"x","topic":"growth"}}`
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
    class="home"
  >
    welcome home
  </p>
  <span
    class="x"
  >
    Widget X: growth report
  </span>
</section>
```
## Change
```
INSERT: .shell > :is(.home, .x)
REMOVE: .shell > h2
REMOVE: .shell > section
```

# Update
```js
container.querySelector("button.count").click();
```
```html
<button
  class="count"
>
  clicked 3
</button>
<section
  class="shell"
>
  <p
    class="home"
  >
    welcome home
  </p>
  <span
    class="x"
  >
    Widget X: growth report
  </span>
</section>
```
## Change
```
UPDATE: .count::text@8 "2" => "3"
```
