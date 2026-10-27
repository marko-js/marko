# Render `{"a":"A","x":true}`
```html
<span>
  A
</span>
<button>
  0
</button>
```

# Update
```js
document.querySelector("button").click();
```
```html
<span>
  A
</span>
<button>
  1
</button>
```
## Change
```
UPDATE: button::text "0" => "1"
```

# Update `{"a":"B","x":false}`
```html
<button>
  1
</button>
```
## Change
```
REMOVE: span
```

# Update `{"a":"C","x":true}`
```html
<span>
  C
</span>
<button>
  1
</button>
```
## Change
```
INSERT: span
```
