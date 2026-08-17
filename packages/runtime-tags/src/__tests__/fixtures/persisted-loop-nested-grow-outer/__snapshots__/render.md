# Render `{"rows":[{"id":"r1","cells":["a"]}]}`
```html
<p>
  r1@0
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
  r1@1
</p>
<button>
  +
</button>
```
## Change
```
UPDATE: p::text "r1@0" => "r1@1"
```

# Update `{"rows":[{"id":"r1","cells":["a"]},{"id":"r2","cells":["c"]}]}`

## Patch rejected (navigate)
