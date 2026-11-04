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
