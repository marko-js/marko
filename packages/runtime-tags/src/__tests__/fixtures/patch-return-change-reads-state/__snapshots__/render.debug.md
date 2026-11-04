# Render `{"v":"a"}`
```html
<span>
  a
</span>
<p>
  a
</p>
<button>
  +
</button>
```

# Update `{"v":"b"}`

# Update
```js
assert.equal(document.querySelector("p").textContent, text);
```

# Update
```js
document.querySelector("button").click();
```
```html
<span>
  a!
</span>
<p>
  a!
</p>
<button>
  +
</button>
```
## Change
```
UPDATE: p::text "a" => "a!"
UPDATE: span::text "a" => "a!"
```

# Update
```js
assert.equal(document.querySelector("p").textContent, text);
```
