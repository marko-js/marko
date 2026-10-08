# Render `{"x":"a"}`
```html
<em>
  a
</em>
<button>
  +
</button>
```

# Update `{"x":"b"}`
```html
<em>
  b
</em>
<button>
  +
</button>
```
## Change
```
UPDATE: em::text "a" => "b"
```

# Update
```js
document.querySelector("button").click();
```

# Update `{"x":"c"}`
```html
<em>
  c
</em>
<button>
  +
</button>
```
## Change
```
UPDATE: em::text "b" => "c"
```
