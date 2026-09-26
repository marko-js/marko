# Render
```html
<span>
  a
</span>
<button>
  a
</button>
```

# Update
```js
document.querySelector("button").click();
```
```html
<span>
  b
</span>
<button>
  b
</button>
```
## Change
```
INSERT: span
REMOVE: span + span
UPDATE: button::text "a" => "b"
```

# Update
```js
document.querySelector("button").click();
```
```html
<span>
  a
</span>
<button>
  a
</button>
```
## Change
```
INSERT: span
REMOVE: span + span
UPDATE: button::text "b" => "a"
```
