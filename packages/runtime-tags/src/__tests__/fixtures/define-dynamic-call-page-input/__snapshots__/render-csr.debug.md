# Render `{"label":"a","show":false}`
```html
<button>
  toggle
</button>
```

# Update `{"label":"b","show":true}`
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
INSERT: em
UPDATE: em::text " " => "b!"
```

# Update
```js
d.querySelector("button").click();
```
```html
<em>
  b
</em>
<em>
  b!
</em>
<button>
  toggle
</button>
```
## Change
```
INSERT: em
UPDATE: em:nth-of-type(1)::text " " => "b"
```

# Update `{"label":"c","show":false}`
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
REMOVE: em + em
UPDATE: em::text "b" => "c"
```

# Update
```js
d.querySelector("button").click();
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

# Update `{"label":"d","show":true}`
```html
<em>
  d!
</em>
<button>
  toggle
</button>
```
## Change
```
INSERT: em
UPDATE: em::text " " => "d!"
```
