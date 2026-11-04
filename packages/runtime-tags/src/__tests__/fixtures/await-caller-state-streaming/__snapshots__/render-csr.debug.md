# Render `{"label":"a","promise":{"value":2}}`
```html
<button
  class="swap"
>
  swap
</button>
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
  a:client
</p>
```
## Change
```
INSERT: .swap + p
UPDATE: p::text@2 "" => "client"
UPDATE: p::text@0 "" => "a"
```

# Update `{"label":"b","promise":{"value":2}}`
```html
<button
  class="swap"
>
  swap
</button>
<p>
  b:client
</p>
```
## Change
```
UPDATE: p::text@0 "a" => "b"
```

# Update
```js
assert.match(document.querySelector("p").textContent, /:client$/);
```
