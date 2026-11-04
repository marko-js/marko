# Render `{"label":"one"}`
```html
<button>
  toggle
</button>
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  toggle
</button>
<p>
  one
</p>
```
## Change
```
INSERT: button + p
```

# Update `{"label":"two"}`
```html
<button>
  toggle
</button>
<p>
  two
</p>
```
## Change
```
UPDATE: p::text "one" => "two"
```
