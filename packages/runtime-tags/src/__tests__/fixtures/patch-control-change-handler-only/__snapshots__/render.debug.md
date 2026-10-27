# Render `{"label":"a"}`
```html
<p>
  a
</p>
<input />
<span>
  0
</span>
```

# Update `{"label":"b"}`
```html
<p>
  b
</p>
<input />
<span>
  0
</span>
```
## Change
```
UPDATE: p::text "a" => "b"
```

# Update
```js
const input = document.querySelector("input");
input.value = "typed";
input.dispatchEvent(new document.defaultView.Event("input"));
```
```html
<p>
  b
</p>
<input />
<span>
  5
</span>
```
## Change
```
UPDATE: span::text "0" => "5"
```
