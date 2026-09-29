# Render `{"tag":"div"}`
```html
<div />
<button>
  0
</button>
```

# Update `{}`
```html
<button>
  0
</button>
```
## Change
```
REMOVE: div
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  -1
</button>
```
## Change
```
UPDATE: button::text "0" => "-1"
```

# Update `{"tag":"span"}`
```html
<span />
<button>
  -1
</button>
```
## Change
```
INSERT: span
```
