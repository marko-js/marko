# Render `{"flag":false,"label":"a"}`
```html
<p>
  a
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
<button>
  +
</button>
```
## Change
```
REMOVE: p
```

# Update `{"flag":true,"label":"b"}`
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
INSERT: p
UPDATE: p::text " " => "b"
```

# Update
```js
document.querySelector("button").click();
```

# Update `{"flag":false,"label":"c"}`
```html
<p>
  c
</p>
<button>
  +
</button>
```
## Change
```
UPDATE: p::text "b" => "c"
```
