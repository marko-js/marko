# Render `{"$global":{"persisted":true,"a":"A1PHA1","b":"B3TA1"}}`
```html
<button
  class="count"
>
  clicked 0
</button>
<section
  class="sheet sheet--wide sheet--persisted"
>
  <button
    class="tap"
  >
    tap 0
  </button>
  <p
    class="value"
  >
    A1PHA1
  </p>
</section>
<section
  class="sheet sheet--wide sheet--persisted"
>
  <button
    class="tap"
  >
    tap 0
  </button>
  <p
    class="value"
  >
    B3TA1
  </p>
</section>
```

# Update `{"$global":{"persisted":true,"a":"A1PHA1","b":"B3TA1"}}`

# Update `{"$global":{"persisted":true,"a":"A1PHA1","b":"B3TA1"}}`

# Update
```js
document.querySelectorAll("button.tap")[1].click();
```
```html
<button
  class="count"
>
  clicked 0
</button>
<section
  class="sheet sheet--wide sheet--persisted"
>
  <button
    class="tap"
  >
    tap 0
  </button>
  <p
    class="value"
  >
    A1PHA1
  </p>
</section>
<section
  class="sheet sheet--wide sheet--persisted"
>
  <button
    class="tap"
  >
    tap 1
  </button>
  <p
    class="value"
  >
    B3TA1
  </p>
</section>
```
## Change
```
UPDATE: section:nth-of-type(2) > button::text@4 "0" => "1"
```

# Update update frame 1 of 2

# Update `{"$global":{"persisted":true,"a":"A1PHA2","b":"B3TA1"}}`
```html
<button
  class="count"
>
  clicked 0
</button>
<section
  class="sheet sheet--wide sheet--persisted"
>
  <button
    class="tap"
  >
    tap 0
  </button>
  <p
    class="value"
  >
    A1PHA2
  </p>
</section>
<section
  class="sheet sheet--wide sheet--persisted"
>
  <button
    class="tap"
  >
    tap 1
  </button>
  <p
    class="value"
  >
    B3TA1
  </p>
</section>
```
## Change
```
UPDATE: section:nth-of-type(1) > p::text "A1PHA1" => "A1PHA2"
```

# Update
```js
assert.deepEqual(values(document), ["A1PHA2", "B3TA1"]);
const taps = [...document.querySelectorAll("button.tap")].map(
  (el) => el.textContent,
);
assert.deepEqual(taps, ["tap 0", "tap 1"]);
```
