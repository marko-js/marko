# Render
```html
<button>
  0
</button>
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  1
</button>
<em>
  2
</em>
```
## Change
```
UPDATE: button::text "0" => "1"
INSERT: button + em
UPDATE: em::text " " => "2"
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  2
</button>
<em>
  4
</em>
```
## Change
```
UPDATE: button::text "1" => "2"
UPDATE: em::text "2" => "4"
```
