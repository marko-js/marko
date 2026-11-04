# Render
```html
<button>
  0
</button>
```

# Update
```js
container.querySelector("button").click();
```
```html
<button>
  1
</button>
```
## Change
```
UPDATE: button::text "0" => "1"
```

# Update `{"show":true}`
```html
<button>
  1
</button>
<span>
  11
</span>
```
## Change
```
INSERT: button + span
UPDATE: span::text " " => "11"
```
