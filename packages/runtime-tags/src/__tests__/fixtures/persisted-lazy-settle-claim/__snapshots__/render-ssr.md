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

# Update `{"$global":{"persisted":true,"label":"L4BEL2"}}`

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

# Update `{"$global":{"persisted":true,"label":"L4BEL2"}}`

# Update
```js
assert.equal(document.querySelector("p.value").textContent, "L4BEL2");
```
