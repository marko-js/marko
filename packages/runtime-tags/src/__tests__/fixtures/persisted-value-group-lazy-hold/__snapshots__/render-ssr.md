# Render `{"$global":{"persisted":true,"label":"L4BEL1"}}`
```html
<button
  class="count"
>
  clicked 0
</button>
<section
  class="panel"
>
  <button
    class="tap"
  >
    tap 0
  </button>
  <p
    class="value"
  >
    L4BEL1
  </p>
</section>
```

# Update `{"$global":{"persisted":true,"label":"L4BEL1"}}`

# Update `{"$global":{"persisted":true,"label":"L4BEL1"}}`

# Update `{"$global":{"persisted":true,"label":"L4BEL2"}}`

# Update
```html
<button
  class="count"
>
  clicked 0
</button>
<section
  class="panel"
>
  <button
    class="tap"
  >
    tap 0
  </button>
  <p
    class="value"
  >
    L4BEL2
  </p>
</section>
```
## Change
```
UPDATE: .value::text "L4BEL1" => "L4BEL2"
```

# Update
```js
assert.equal(document.querySelector("p.value").textContent, "L4BEL2");
```

# Update
```js
document.querySelector("button.tap").click();
```
```html
<button
  class="count"
>
  clicked 0
</button>
<section
  class="panel"
>
  <button
    class="tap"
  >
    tap 1
  </button>
  <p
    class="value"
  >
    L4BEL2
  </p>
</section>
```
## Change
```
UPDATE: .tap::text@4 "0" => "1"
```

# Update
```js
assert.equal(document.querySelector("button.tap").textContent, "tap 1");
```

# Update `{"$global":{"persisted":true,"label":"L4BEL2"}}`

# Update
```js
assert.equal(document.querySelector("p.value").textContent, "L4BEL2");
assert.equal(document.querySelector("button.tap").textContent, "tap 1");
```
