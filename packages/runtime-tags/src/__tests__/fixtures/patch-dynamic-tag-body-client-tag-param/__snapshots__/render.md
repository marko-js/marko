# Render `{"note":"a"}`
```html
<button>
  swap
</button>
<b>
  a
</b>
```

# Update `{"note":"b"}`
```html
<button>
  swap
</button>
<b>
  b
</b>
```
## Change
```
UPDATE: b::text "a" => "b"
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  swap
</button>
<i>
  b
</i>
```
## Change
```
INSERT: button + i
REMOVE: i + b
UPDATE: i::text " " => "b"
```

# Update `{"note":"c"}`
```html
<button>
  swap
</button>
<i>
  c
</i>
```
## Change
```
UPDATE: i::text "b" => "c"
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  swap
</button>
<b>
  c
</b>
```
## Change
```
INSERT: button + b
REMOVE: b + i
UPDATE: b::text " " => "c"
```
