# Render `{"title":"a"}`
```html
<button>
  toggle
</button>
<p>
  a
</p>
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  toggle
</button>
<em>
  loaded
</em>
<p>
  a
</p>
```
## Change
```
INSERT: button + em
UPDATE: em::text " " => "loaded"
```

# Update `{"title":"b"}`
```html
<button>
  toggle
</button>
<em>
  loaded
</em>
<p>
  b
</p>
```
## Change
```
UPDATE: p::text "a" => "b"
```
