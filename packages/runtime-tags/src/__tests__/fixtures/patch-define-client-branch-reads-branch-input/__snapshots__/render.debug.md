# Render `{"v":"a"}`
```html
<button>
  toggle
</button>
<span>
  a
</span>
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

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  toggle
</button>
<span>
  a
</span>
```
## Change
```
INSERT: button + span
UPDATE: span::text " " => "a"
```

# Update `{"v":"b"}`
```html
<button>
  toggle
</button>
<span>
  b
</span>
```
## Change
```
UPDATE: span::text "a" => "b"
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

# Update `{"v":"c"}`
