# Render `{"show":false,"label":"a"}`

# Update `{"show":true,"label":"b"}`
```html
<button>
  t
</button>
<p>
  f:b
</p>
```
## Change
```
INSERT: button, p
UPDATE: p::text " " => "f:b"
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  t
</button>
```
## Change
```
REMOVE: button + p
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  t
</button>
<p>
  f:b
</p>
```
## Change
```
INSERT: button + p
UPDATE: p::text " " => "f:b"
```

# Update `{"show":true,"label":"c"}`
```html
<button>
  t
</button>
<p>
  f:c
</p>
```
## Change
```
UPDATE: p::text "f:b" => "f:c"
```
