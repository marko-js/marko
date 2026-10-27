# Render `{"label":"a"}`
```html
<em>
  a!
</em>
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
REMOVE: em + em
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
<em>
  b!
</em>
<button>
  toggle
</button>
```
## Change
```
REMOVE: em
INSERT: em
UPDATE: em::text " " => "b!"
```

# Update `{"label":"c"}`
```html
<em>
  c!
</em>
<button>
  toggle
</button>
```
## Change
```
UPDATE: em::text "b!" => "c!"
```

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
REMOVE: em + em
UPDATE: em::text " " => "c"
```
