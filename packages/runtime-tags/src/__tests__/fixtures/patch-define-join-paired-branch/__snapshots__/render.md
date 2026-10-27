# Render `{"show":true,"x":"a"}`
```html
<p>
  0:a
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
<p>
  1:a
</p>
<button>
  +
</button>
```
## Change
```
UPDATE: p::text "0:a" => "1:a"
```

# Update `{"show":true,"x":"b"}`
```html
<p>
  1:b
</p>
<button>
  +
</button>
```
## Change
```
UPDATE: p::text "1:a" => "1:b"
```
