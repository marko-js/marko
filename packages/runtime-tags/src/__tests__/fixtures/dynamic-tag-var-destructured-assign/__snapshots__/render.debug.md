# Render `{"a":true}`
```html
<span>
  a:1
</span>
<button>
  1
</button>
```

# Update
```js
document.querySelector("button").click();
```
```html
<span>
  a:2
</span>
<button>
  2
</button>
```
## Change
```
UPDATE: button::text "1" => "2"
UPDATE: span::text@2 "1" => "2"
```

# Update
```js
document.querySelector("button").click();
```
```html
<span>
  a:3
</span>
<button>
  3
</button>
```
## Change
```
UPDATE: button::text "2" => "3"
UPDATE: span::text@2 "2" => "3"
```
