# Render `{"v":"a","items":["x"]}`
```html
<button>
  toggle
</button>
<span>
  xa!
</span>
```

# Update `{"v":"b","items":["x","y"]}`
```html
<button>
  toggle
</button>
<span>
  xb!
</span>
<span>
  yb!
</span>
```
## Change
```
UPDATE: span:nth-of-type(1)::text "xa!" => "xb!"
INSERT: span:nth-of-type(1) + span
UPDATE: span:nth-of-type(2)::text " " => "yb!"
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
REMOVE: button + span
REMOVE: button + span
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  toggle
</button>
<span>
  xb!
</span>
<span>
  yb!
</span>
```
## Change
```
INSERT: button + span
INSERT: span:nth-of-type(1) + span
UPDATE: span:nth-of-type(1)::text " " => "xb!"
UPDATE: span:nth-of-type(2)::text " " => "yb!"
```

# Update `{"v":"c","items":["y"]}`
```html
<button>
  toggle
</button>
<span>
  yc!
</span>
```
## Change
```
REMOVE: span + span
UPDATE: span::text "xb!" => "yc!"
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
REMOVE: button + span
```
