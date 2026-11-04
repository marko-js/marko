# Render `{"label":"a"}`
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
<em>
  a
</em>
<button>
  toggle
</button>
```
## Change
```
INSERT: em
UPDATE: em::text " " => "a"
```

# Update `{"label":"b"}`
```html
<em>
  b
</em>
<button>
  toggle
</button>
```
## Change
```
UPDATE: em::text "a" => "b"
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
REMOVE: em
```

# Update `{"label":"c"}`

# Update
```js
document.querySelector("button").click();
```
```html
<em>
  c
</em>
<button>
  toggle
</button>
```
## Change
```
INSERT: em
UPDATE: em::text " " => "c"
```
