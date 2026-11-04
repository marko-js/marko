# Render `{"label":"a"}`
```html
<em>
  {"label":"a"}
</em>
<em>
  {"label":"a"}
</em>
<button>
  toggle
</button>
```

# Update `{"label":"b"}`
```html
<em>
  {"label":"b"}
</em>
<em>
  {"label":"b"}
</em>
<button>
  toggle
</button>
```
## Change
```
UPDATE: em:nth-of-type(1)::text "{\"label\":\"a\"}" => "{\"label\":\"b\"}"
UPDATE: em:nth-of-type(2)::text "{\"label\":\"a\"}" => "{\"label\":\"b\"}"
```

# Update
```js
document.querySelector("button").click();
```
```html
<em>
  {"label":"b"}
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
  {"label":"c"}
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
UPDATE: em::text "{\"label\":\"b\"}" => "{\"label\":\"c\"}"
UPDATE: b[label] "b" => "c"
```

# Update
```js
document.querySelector("button").click();
```
```html
<em>
  {"label":"c"}
</em>
<em>
  {"label":"c"}
</em>
<button>
  toggle
</button>
```
## Change
```
INSERT: em:nth-of-type(1) + em
REMOVE: em:nth-of-type(2) + b
UPDATE: em:nth-of-type(2)::text " " => "{\"label\":\"c\"}"
```

# Update `{"label":"d"}`
```html
<em>
  {"label":"d"}
</em>
<em>
  {"label":"d"}
</em>
<button>
  toggle
</button>
```
## Change
```
UPDATE: em:nth-of-type(1)::text "{\"label\":\"c\"}" => "{\"label\":\"d\"}"
UPDATE: em:nth-of-type(2)::text "{\"label\":\"c\"}" => "{\"label\":\"d\"}"
```
