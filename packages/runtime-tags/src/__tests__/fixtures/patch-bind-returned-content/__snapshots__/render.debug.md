# Render `{"label":"one"}`
```html
<em>
  one 0
</em>
<button>
  0
</button>
```

# Update `{"label":"two"}`
```html
<em>
  two 0
</em>
<button>
  0
</button>
```
## Change
```
INSERT: em
REMOVE: em + em
UPDATE: em::text@0 "" => "two"
UPDATE: em::text@4 "" => "0"
```

# Update
```js
document.querySelector(selector).click();
```
```html
<em>
  two 0
</em>
<button>
  1
</button>
```
## Change
```
UPDATE: button::text "0" => "1"
```

# Update
```js
document.querySelector(selector).click();
```
```html
<em>
  two 1
</em>
<button>
  1
</button>
```
## Change
```
UPDATE: em::text@4 "0" => "1"
```
