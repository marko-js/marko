# Render `{"show":true,"label":"a"}`
```html
<p>
  a
</p>
<button>
  +
</button>
```

# Update
```js
document.querySelector("button").click();
```

# Update
```js
document.querySelector("button").click();
```
```html
<p>
  a
</p>
<span>
  4
</span>
<button>
  +
</button>
```
## Change
```
INSERT: p + span
UPDATE: span::text " " => "4"
```

# Update `{"show":true,"label":"b"}`
```html
<p>
  b
</p>
<span>
  4
</span>
<button>
  +
</button>
```
## Change
```
UPDATE: p::text "a" => "b"
```

# Update
```js
document.querySelector("button").click();
```
```html
<p>
  b
</p>
<span>
  6
</span>
<button>
  +
</button>
```
## Change
```
UPDATE: span::text "4" => "6"
```

# Update `{"show":false,"label":"c"}`
```html
<button>
  +
</button>
```
## Change
```
REMOVE: p
REMOVE: span
```

# Update `{"show":true,"label":"d"}`
```html
<p>
  d
</p>
<span>
  6
</span>
<button>
  +
</button>
```
## Change
```
INSERT: p
INSERT: p + span
UPDATE: span::text " " => "6"
```
