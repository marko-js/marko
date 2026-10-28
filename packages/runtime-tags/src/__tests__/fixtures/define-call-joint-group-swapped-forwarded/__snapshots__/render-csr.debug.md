# Render `{"flag":false,"label":"a"}`
```html
<p>
  a
</p>
<p>
  a
</p>
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
```
## Change
```
REMOVE: p
REMOVE: p
```

# Update `{"flag":true,"label":"b"}`
```html
<p>
  b
</p>
<p>
  b
</p>
<button>
  toggle
</button>
```
## Change
```
INSERT: p
INSERT: p:nth-of-type(1) + p
UPDATE: p:nth-of-type(1)::text " " => "b"
UPDATE: p:nth-of-type(2)::text " " => "b"
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
<p>
  c
</p>
<button>
  toggle
</button>
```
## Change
```
UPDATE: p:nth-of-type(1)::text "b" => "c"
UPDATE: p:nth-of-type(2)::text "b" => "c"
```
