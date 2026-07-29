# Render `{"show":false,"$global":{"persisted":true}}`
```html
<button
  class="count"
>
  clicked 0
</button>
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
```
## Change
```
UPDATE: .count::text@8 "0" => "1"
```

# Update `{"show":true,"$global":{"persisted":true}}`
```html
<button
  class="count"
>
  clicked 1
</button>
<button
  class="tap"
>
  tap 0
</button>
<div
  class="host"
>
  <button
    class="hit"
  >
    hits 0
  </button>
</div>
<div
  class="aside"
>
  <span
    class="badge"
  >
    badge
  </span>
</div>
```
## Change
```
INSERT: .count + :is(.tap, .host, .aside)
```

# Update
```js
assert.equal(
document.querySelector("div.host button.hit")?.textContent,
"hits 0",
  );
  assert.equal(
document.querySelector("div.aside span.badge")?.textContent,
"badge",
  );
  assert.equal(document.querySelector("button.tap")?.textContent, "tap 0");
```

# Update
```js
document.querySelector(selector).click();
```
```html
<button
  class="count"
>
  clicked 1
</button>
<button
  class="tap"
>
  tap 0
</button>
<div
  class="host"
>
  <button
    class="hit"
  >
    hits 1
  </button>
</div>
<div
  class="aside"
>
  <span
    class="badge"
  >
    badge
  </span>
</div>
```
## Change
```
UPDATE: .hit::text@5 "0" => "1"
```

# Update
```js
document.querySelector(selector).click();
```
```html
<button
  class="count"
>
  clicked 1
</button>
<button
  class="tap"
>
  tap 1
</button>
<div
  class="host"
>
  <button
    class="hit"
  >
    hits 1
  </button>
</div>
<div
  class="aside"
>
  <span
    class="badge"
  >
    badge
  </span>
</div>
```
## Change
```
UPDATE: .tap::text@4 "0" => "1"
```

# Update
```js
assert.equal(
document.querySelector("div.host button.hit")?.textContent,
"hits 1",
  );
  assert.equal(document.querySelector("button.tap")?.textContent, "tap 1");
```
