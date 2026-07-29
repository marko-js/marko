# Render `{"$global":{"persisted":true,"view":"tools","start":3}}`
```html
<button
  class="count"
>
  clicked 0
</button>
<section
  class="shell"
>
  <button
    class="tap"
  >
    tap 3
  </button>
  <p
    class="readout"
  >
    6 of 10
  </p>
  <span
    class="unit"
  >
    widgets
  </span>
  <button
    class="raise"
  >
    raise
  </button>
</section>
```

# Update
```js
assert.equal(document.querySelector("p.readout")?.textContent, readout);
assert.equal(
  document.querySelector("button.count").textContent,
  `clicked ${count}`,
);
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
<section
  class="shell"
>
  <button
    class="tap"
  >
    tap 3
  </button>
  <p
    class="readout"
  >
    6 of 10
  </p>
  <span
    class="unit"
  >
    widgets
  </span>
  <button
    class="raise"
  >
    raise
  </button>
</section>
```
## Change
```
UPDATE: .count::text@8 "0" => "1"
```

# Update `{"$global":{"persisted":true,"view":"about","start":3}}`
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
    class="about"
  >
    elsewhere
  </p>
</section>
```
## Change
```
INSERT: .shell > .about
REMOVE: .shell > button
REMOVE: .shell > p
REMOVE: .shell > span
REMOVE: .shell > button
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
<section
  class="shell"
>
  <p
    class="about"
  >
    elsewhere
  </p>
</section>
```
## Change
```
UPDATE: .count::text@8 "1" => "2"
```

# Update update frame 1 of 2

# Update `{"$global":{"persisted":true,"view":"tools","start":4}}`
```html
<button
  class="count"
>
  clicked 2
</button>
<section
  class="shell"
>
  <button
    class="tap"
  >
    tap 4
  </button>
  <p
    class="readout"
  >
    8 of 10
  </p>
  <span
    class="unit"
  >
    widgets
  </span>
  <button
    class="raise"
  >
    raise
  </button>
</section>
```
## Change
```
INSERT: p + :is(.tap, .readout, .unit, .raise)
REMOVE: .shell > p
UPDATE: .readout::text@0 "" => "8"
UPDATE: .unit::text " " => "widgets"
```

# Update
```js
assert.equal(document.querySelector("p.readout")?.textContent, readout);
assert.equal(
  document.querySelector("button.count").textContent,
  `clicked ${count}`,
);
```

# Update
```js
assert.equal(document.querySelector("span.unit")?.textContent, "widgets");
```

# Update
```js
document.querySelector(selector).click();
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
  <button
    class="tap"
  >
    tap 5
  </button>
  <p
    class="readout"
  >
    10 of 10
  </p>
  <span
    class="unit"
  >
    widgets
  </span>
  <button
    class="raise"
  >
    raise
  </button>
</section>
```
## Change
```
UPDATE: .tap::text@4 "4" => "5"
UPDATE: .readout::text@0 "8" => "10"
```

# Update
```js
assert.equal(document.querySelector("p.readout")?.textContent, readout);
assert.equal(
  document.querySelector("button.count").textContent,
  `clicked ${count}`,
);
```

# Update
```js
document.querySelector(selector).click();
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
  <button
    class="tap"
  >
    tap 5
  </button>
  <p
    class="readout"
  >
    10 of 15
  </p>
  <span
    class="unit"
  >
    widgets
  </span>
  <button
    class="raise"
  >
    raise
  </button>
</section>
```
## Change
```
UPDATE: .readout::text@6 "10" => "15"
```

# Update
```js
assert.equal(document.querySelector("p.readout")?.textContent, readout);
assert.equal(
  document.querySelector("button.count").textContent,
  `clicked ${count}`,
);
```
