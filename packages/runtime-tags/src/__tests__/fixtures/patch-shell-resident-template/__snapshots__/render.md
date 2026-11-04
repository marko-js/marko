# Render `{"which":true,"label":"a"}`
```html
<b>
  a
</b>
<button>
  toggle
</button>
```

# Update `{"which":false,"label":"b"}`
```html
<i>
  b
</i>
<button>
  toggle
</button>
```
## Change
```
INSERT: i
REMOVE: i + b
UPDATE: i::text " " => "b"
```

# Update `{"which":false,"label":"c"}`
```html
<i>
  c
</i>
<button>
  toggle
</button>
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
<i>
  c
</i>
<button>
  toggle
</button>
<i>
  c
</i>
```
## Change
```
INSERT: button + i
UPDATE: i:nth-of-type(2)::text " " => "c"
```

# Update
```js
assert.equal(document.querySelectorAll("i").length, 2);
```
