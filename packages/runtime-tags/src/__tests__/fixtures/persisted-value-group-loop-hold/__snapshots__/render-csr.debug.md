# Render `{"items":[{"id":"k0","name":"W1DGT"},{"id":"k1","name":"G4DGT"}],"$global":{"persisted":true}}`
```html
<button
  class="count"
>
  clicked 0
</button>
<ul>
  <li
    class="item"
  >
    W1DGT
    <button
      class="tap"
    >
      tap 0
    </button>
  </li>
  <li
    class="item"
  >
    G4DGT
    <button
      class="tap"
    >
      tap 0
    </button>
  </li>
</ul>
```

# Update `{"items":[{"id":"k0","name":"W1DGT"},{"id":"k1","name":"G4DGT"}],"$global":{"persisted":true}}`

# Update `{"items":[{"id":"k0","name":"W1DGT"},{"id":"k1","name":"G4DGT"}],"$global":{"persisted":true}}`

# Update
```js
const names = [...document.querySelectorAll("li.item")].map(
(li) => li.textContent,
  );
  assert.deepEqual(names, ["W1DGTtap 0", "G4DGTtap 0"], "after seed");
```

# Update `{"items":[{"id":"k0","name":"W1DGT"},{"id":"k1","name":"G4DGT"}],"$global":{"persisted":true}}`

# Update `{"items":[{"id":"k0","name":"W1DGT"},{"id":"k1","name":"G4DGT"}],"$global":{"persisted":true}}`

# Update
```js
const names = [...document.querySelectorAll("li.item")].map(
(li) => li.textContent,
  );
  assert.deepEqual(names, ["W1DGTtap 0", "G4DGTtap 0"], "after hold");
```

# Update `{"items":[{"id":"k0","name":"W1DGT"},{"id":"k1","name":"CH4NG"}],"$global":{"persisted":true}}`
```html
<button
  class="count"
>
  clicked 0
</button>
<ul>
  <li
    class="item"
  >
    W1DGT
    <button
      class="tap"
    >
      tap 0
    </button>
  </li>
  <li
    class="item"
  >
    CH4NG
    <button
      class="tap"
    >
      tap 0
    </button>
  </li>
</ul>
```
## Change
```
UPDATE: ul > li:nth-of-type(2)::text "G4DGT" => "CH4NG"
```

# Update `{"items":[{"id":"k0","name":"W1DGT"},{"id":"k1","name":"CH4NG"}],"$global":{"persisted":true}}`

# Update
```js
const names = [...document.querySelectorAll("li.item")].map(
(li) => li.textContent,
  );
  assert.deepEqual(names, ["W1DGTtap 0", "CH4NGtap 0"]);
```
