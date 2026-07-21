# Render
```html
<div>
  1|["two","three"]
</div>
<button>
  1
</button>
```

# Update
```js
document.querySelector("button").click();
```
```html
<div>
  2|["two","three"]
</div>
<button>
  2
</button>
```
## Change
```
UPDATE: div::text@0 "1" => "2"
UPDATE: button::text "1" => "2"
```
