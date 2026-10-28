# Render `{"v":"a"}`
```html
<button>
  toggle
</button>
<p>
  a
</p>
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
REMOVE: button + p
```

# Update `{"v":"b"}`

# Update
```js
d.querySelector("button").click();
```
```html
<button>
  toggle
</button>
<p>
  b
</p>
```
## Change
```
INSERT: button + p
UPDATE: p::text " " => "b"
```

# Update `{"v":"c"}`
