# Render `{"label":"a"}`
```html
<button>
  toggle
</button>
```

# Update `{"label":"b"}`

# Update
```js
document.querySelectorAll("button")[index].click();
```
```html
<button>
  toggle
</button>
<button>
  open
</button>
<p>
  b
</p>
```
## Change
```
INSERT: button:nth-of-type(1) + button
INSERT: button:nth-of-type(2) + p
UPDATE: p::text " " => "b"
```

# Update `{"label":"c"}`
```html
<button>
  toggle
</button>
<button>
  open
</button>
<p>
  c
</p>
```
## Change
```
UPDATE: p::text "b" => "c"
```

# Update
```js
document.querySelectorAll("button")[index].click();
```
```html
<button>
  toggle
</button>
<button>
  open
</button>
```
## Change
```
REMOVE: button:nth-of-type(2) + p
```

# Update
```js
document.querySelectorAll("button")[index].click();
```
```html
<button>
  toggle
</button>
<button>
  open
</button>
<p>
  c
</p>
```
## Change
```
INSERT: button:nth-of-type(2) + p
UPDATE: p::text " " => "c"
```

# Update `{"label":"d"}`
```html
<button>
  toggle
</button>
<button>
  open
</button>
<p>
  d
</p>
```
## Change
```
UPDATE: p::text "c" => "d"
```
