# Render `{"label":"a"}`
```html
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
  a
</p>
<button>
  +
</button>
```
## Change
```
INSERT: p
UPDATE: p::text " " => "a"
```

# Update `{"label":"b"}`
```html
<p>
  b
</p>
<button>
  +
</button>
```
## Change
```
UPDATE: p::text "a" => "b"
```
