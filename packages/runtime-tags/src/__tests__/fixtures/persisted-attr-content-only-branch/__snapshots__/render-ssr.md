# Render `{"show":false,"$global":{"persisted":true}}`
```html
<button
  class="count"
>
  clicked 0
</button>
```

# Update `{"show":true,"$global":{"persisted":true}}`
```html
<button
  class="count"
>
  clicked 0
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
```
## Change
```
INSERT: .count + .host
```

# Update
```js
assert.equal(hits(document), "hits 0");
```

# Update
```js
document.querySelector("button.hit").click();
```
```html
<button
  class="count"
>
  clicked 0
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
```
## Change
```
UPDATE: .hit::text@5 "0" => "1"
```

# Update
```js
assert.equal(hits(document), "hits 1");
```
