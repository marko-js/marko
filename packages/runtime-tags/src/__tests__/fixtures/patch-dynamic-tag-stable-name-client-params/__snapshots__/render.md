# Render `{"show":true,"label":"a"}`
```html
<button>
  a0
</button>
```

# Update `{"show":true,"label":"b"}`
```html
<button>
  b0
</button>
```
## Change
```
UPDATE: button::text "a0" => "b0"
```

# Update
```js
d.querySelector("button").click();
```
```html
<button>
  b1
</button>
```
## Change
```
UPDATE: button::text "b0" => "b1"
```

# Update `{"show":false,"label":"c"}`
```html
<button>
  -
</button>
```
## Change
```
UPDATE: button::text "b1" => "-"
```

# Update
```js
d.querySelector("button").click();
```
