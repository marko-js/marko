# Render
```html
<div>
  1
</div>
<button>
  inc
</button>
```

# Update
```js
document.querySelector("button").click();
```
```html
<div
  show=""
>
  2
</div>
2
<button>
  inc
</button>
```
## Change
```
UPDATE: div[show] null => ""
UPDATE: div::text "1" => "2"
INSERT: div + ::text("2")
UPDATE: ::text " " => "2"
```
