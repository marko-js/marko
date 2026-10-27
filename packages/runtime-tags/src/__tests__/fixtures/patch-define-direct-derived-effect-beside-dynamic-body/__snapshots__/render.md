# Render `{"label":"a"}`
```html
<em>
  a!
</em>
<em>
  a!
</em>
<button>
  toggle
</button>
```

# Update `{"label":"b"}`
```html
<em>
  b!
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
UPDATE: em:nth-of-type(1)::text "a!" => "b!"
UPDATE: em:nth-of-type(2)::text "a!" => "b!"
UPDATE: body[data-label] "a!" => "b!"
UPDATE: body[data-label] "b!" => "b!"
```

# Update
```js
document.querySelector("button").click();
```
```html
<em>
  b!
</em>
<b
  label="b"
/>
<button>
  toggle
</button>
```
## Change
```
INSERT: em + b
REMOVE: b + em
UPDATE: b[label] null => "b"
```

# Update `{"label":"c"}`
```html
<em>
  c!
</em>
<b
  label="c"
/>
<button>
  toggle
</button>
```
## Change
```
UPDATE: em::text "b!" => "c!"
UPDATE: b[label] "b" => "c"
UPDATE: body[data-label] "b!" => "c!"
```

# Update
```js
document.querySelector("button").click();
```
```html
<em>
  c!
</em>
<em>
  c!
</em>
<button>
  toggle
</button>
```
## Change
```
INSERT: em:nth-of-type(1) + em
REMOVE: em:nth-of-type(2) + b
UPDATE: em:nth-of-type(2)::text " " => "c!"
UPDATE: body[data-label] "c!" => "c!"
```

# Update `{"label":"d"}`
```html
<em>
  d!
</em>
<em>
  d!
</em>
<button>
  toggle
</button>
```
## Change
```
UPDATE: em:nth-of-type(1)::text "c!" => "d!"
UPDATE: em:nth-of-type(2)::text "c!" => "d!"
UPDATE: body[data-label] "c!" => "d!"
UPDATE: body[data-label] "d!" => "d!"
```
