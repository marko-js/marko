# Render `{"a":"x","b":"y"}`
```html
<span>
  a
</span>
<button
  class="mode"
>
  b
</button>
<p>
  a
</p>
```

# Update
```js
document.querySelector(".mode").click();
```
```html
<span>
  b
</span>
<button
  class="mode"
>
  b
</button>
<p>
  b
</p>
```
## Change
```
UPDATE: span::text "a" => "b"
UPDATE: p::text "a" => "b"
```
