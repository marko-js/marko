# Render `{"alerts":[],"items":[{"id":"w1dgt","name":"W1DGT"},{"id":"g4dgt","name":"G4DGT"}],"$global":{"persisted":true}}`
```html
<button
  class="count"
>
  clicked 0
</button>
<ul
  class="alerts"
/>
<ul
  class="items"
>
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

# Update `{"alerts":[],"items":[{"id":"w1dgt","name":"W1DGT"},{"id":"g4dgt","name":"G4DGT"}],"$global":{"persisted":true}}`

# Update `{"alerts":[],"items":[{"id":"w1dgt","name":"W1DGT"},{"id":"g4dgt","name":"G4DGT"}],"$global":{"persisted":true}}`

# Update update frame 1 of 2

# Update `{"alerts":[{"id":"a0","text":"N3W-AL3RT"}],"items":[{"id":"w1dgt","name":"W1DGT"},{"id":"g4dgt","name":"G4DGT"}],"$global":{"persisted":true}}`
```html
<button
  class="count"
>
  clicked 0
</button>
<ul
  class="alerts"
>
  <li
    class="alert"
  >
    N3W-AL3RT
  </li>
</ul>
<ul
  class="items"
>
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
## Change
```
INSERT: .alerts > .alert
```

# Update
```js
assert.deepEqual(
[...document.querySelectorAll("li.alert")].map((el) => el.textContent),
["N3W-AL3RT"],
  );
  assert.deepEqual(
[...document.querySelectorAll("li.item")].map((el) => el.textContent),
["W1DGTtap 0", "G4DGTtap 0"],
  );
```

# Update
```js
document.querySelectorAll("button.tap")[0].click();
```
```html
<button
  class="count"
>
  clicked 0
</button>
<ul
  class="alerts"
>
  <li
    class="alert"
  >
    N3W-AL3RT
  </li>
</ul>
<ul
  class="items"
>
  <li
    class="item"
  >
    W1DGT
    <button
      class="tap"
    >
      tap 1
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
## Change
```
UPDATE: .items > li:nth-of-type(1) > button::text@4 "0" => "1"
```

# Update update frame 1 of 2

# Update `{"alerts":[{"id":"a0","text":"N3W-AL3RT"}],"items":[{"id":"g4dgt","name":"G4DGT"},{"id":"w1dgt","name":"W1DGT"}],"$global":{"persisted":true}}`
```html
<button
  class="count"
>
  clicked 0
</button>
<ul
  class="alerts"
>
  <li
    class="alert"
  >
    N3W-AL3RT
  </li>
</ul>
<ul
  class="items"
>
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
  <li
    class="item"
  >
    W1DGT
    <button
      class="tap"
    >
      tap 1
    </button>
  </li>
</ul>
```
## Change
```
INSERT: .alerts > .alert
REMOVE: .alert + .alert
REMOVE: .items > li:nth-of-type(2) + li
INSERT: .items > li
```

# Update
```js
assert.deepEqual(
[...document.querySelectorAll("li.item")].map((el) => el.textContent),
["G4DGTtap 0", "W1DGTtap 1"],
  );
```
