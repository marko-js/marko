# Render `{"$global":{"persisted":true,"price":"PR1CE111"}}`
```html
<button
  class="count"
>
  clicked 0
</button>
<main
  class="shell"
>
  <button
    class="tap"
  >
    tap 0
  </button>
  <p
    class="info"
  >
    PR1CE111
  </p>
</main>
```

# Update `{"$global":{"persisted":true,"price":"PR1CE111"}}`

# Update `{"$global":{"persisted":true,"price":"PR1CE111"}}`

# Update update frame 1 of 2

# Update `{"$global":{"persisted":true,"price":"PR1CE222"}}`
```html
<button
  class="count"
>
  clicked 0
</button>
<main
  class="shell"
>
  <button
    class="tap"
  >
    tap 0
  </button>
  <p
    class="info"
  >
    PR1CE222
  </p>
</main>
```
## Change
```
UPDATE: .info::text "PR1CE111" => "PR1CE222"
```

# Update
```js
assert.equal(document.querySelector("p.info").textContent, "PR1CE222");
assert.equal(
  document.querySelector("button.count").textContent,
  "clicked 0",
);
```
