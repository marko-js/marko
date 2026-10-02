# Render
```html
<span>
  a
</span>
<button />
```

# Update
```js
document.querySelector("button").click();
```
```html
<span>
  b
</span>
<span>
  c
</span>
<button />
```
## Change
```
UPDATE: span:nth-of-type(1)::text "a" => "b"
INSERT: span:nth-of-type(1) + span
```
