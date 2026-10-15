# Render `{"b":1}`
```html
<div>
  1|2
</div>
<button>
  +
</button>
```

# Update
```js
document.querySelector("button").click();
```
```html
<div>
  2|2
</div>
<button>
  +
</button>
```
## Change
```
UPDATE: div::text@0 "1" => "2"
```
