# Render `{"show":false,"open":true,"label":"a"}`
```html
<em>
  a!
</em>
<span>
  2
</span>
<button>
  toggle
</button>
```

# Update `{"show":true,"open":true,"label":"b"}`
```html
<em>
  x
</em>
<span>
  2
</span>
<em>
  b!
</em>
<span>
  2
</span>
<button>
  toggle
</button>
```
## Change
```
INSERT: span
UPDATE: em:nth-of-type(2)::text "a!" => "b!"
UPDATE: span:nth-of-type(1)::text " " => "2"
INSERT: em
```

# Update
```js
document.querySelector("button").click();
```
```html
<em>
  x
</em>
<span>
  2
</span>
<button>
  toggle
</button>
```
## Change
```
REMOVE: span + em
REMOVE: span + span
```

# Update `{"show":true,"open":true,"label":"c"}`

# Update `{"show":false,"open":true,"label":"d"}`
```html
<button>
  toggle
</button>
```
## Change
```
REMOVE: em
REMOVE: span
```

# Update `{"show":true,"open":true,"label":"e"}`
```html
<em>
  x
</em>
<span>
  2
</span>
<button>
  toggle
</button>
```
## Change
```
INSERT: span
UPDATE: span::text " " => "2"
INSERT: em
```
