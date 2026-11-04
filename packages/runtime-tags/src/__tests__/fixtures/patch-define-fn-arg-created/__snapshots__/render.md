# Render `{"show":false,"label":"a"}`
```html
<button>
  +
</button>
```

# Update `{"show":true,"label":"b"}`
```html
<p>
  0b
</p>
<button>
  +
</button>
```
## Change
```
INSERT: p
UPDATE: p::text " " => "0b"
```

# Update
```js
document.querySelector("button").click();
```
```html
<p>
  1b
</p>
<button>
  +
</button>
```
## Change
```
UPDATE: p::text "0b" => "1b"
```

# Update `{"show":true,"label":"c"}`
```html
<p>
  1c
</p>
<button>
  +
</button>
```
## Change
```
UPDATE: p::text "1b" => "1c"
```
