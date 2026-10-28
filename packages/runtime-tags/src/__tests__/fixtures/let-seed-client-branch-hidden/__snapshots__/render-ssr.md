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

# Update
```js
d.querySelector("button").click();
```
```html
<button>
  toggle
</button>
<p>
  a
</p>
```
## Change
```
INSERT: button + p
UPDATE: p::text " " => "a"
```
