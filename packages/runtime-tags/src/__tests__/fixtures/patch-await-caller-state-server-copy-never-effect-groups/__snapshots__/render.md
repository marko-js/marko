# Render `{"label":"a","promise":{}}`
```html
<button
  class="swap"
>
  swap
</button>
<p>
  a
</p>
```

# Update `{"label":"b","promise":{}}`

# Update
```js
const text = document.querySelector("p").textContent;
assert.equal(document.body.dataset.v, text);
```

# Update
```js
document.querySelector("button.swap").click();
```
```html
<button
  class="swap"
>
  swap
</button>
<p>
  swapped
</p>
```
## Change
```
UPDATE: p::text "a" => "swapped"
UPDATE: body[data-v] "a" => "swapped"
```

# Update
```js
const text = document.querySelector("p").textContent;
assert.equal(document.body.dataset.v, text);
```
