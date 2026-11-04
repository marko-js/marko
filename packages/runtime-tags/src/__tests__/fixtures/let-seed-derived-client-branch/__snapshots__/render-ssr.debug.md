# Render `{"v":"a","w":"1"}`
```html
<button>
  toggle
</button>
<p>
  a! 1
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
  a! 1
</p>
```
## Change
```
INSERT: button + p
UPDATE: p::text@3 "" => "1"
UPDATE: p::text@0 "" => "a!"
```
