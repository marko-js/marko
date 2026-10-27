# Render `{"show":true,"label":"a"}`
```html
<em>
  a 0
</em>
<button>
  0
</button>
```

# Update
```js
document.querySelector(selector).click();
```
```html
<em>
  a 1
</em>
<button>
  0
</button>
```
## Change
```
UPDATE: em::text@2 "0" => "1"
```

# Update `{"show":true,"label":"b"}`
```html
<em>
  b 1
</em>
<button>
  0
</button>
```
## Change
```
UPDATE: em::text@0 "a" => "b"
```

# Update
```js
document.querySelector(selector).click();
```
```html
<em>
  b 1
</em>
<button>
  1
</button>
```
## Change
```
UPDATE: button::text "0" => "1"
```
