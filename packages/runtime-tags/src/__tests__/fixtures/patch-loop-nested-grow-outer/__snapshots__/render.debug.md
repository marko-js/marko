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
```html
<p>
  r1@1
</p>
<p>
  r2@1
</p>
<button>
  +
</button>
```
## Change
```
INSERT: p:nth-of-type(1) + p
UPDATE: p:nth-of-type(2)::text " " => "r2@1"
```
