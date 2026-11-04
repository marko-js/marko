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
<span />
<button>
  1
</button>
```
## Change
```
UPDATE: span::text "A" => ""
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
UPDATE: span::text "" => "C"
```
