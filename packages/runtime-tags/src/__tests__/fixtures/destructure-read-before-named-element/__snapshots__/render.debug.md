# Render
```html
<div>
  2
</div>
<span>
  child
</span>
<div>
  2 1
</div>
<button>
  update
</button>
```

# Update
```js
document.querySelector("button").click();
```
```html
<div>
  5
</div>
<span>
  child
</span>
<div>
  5 2
</div>
<button>
  update
</button>
```
## Change
```
UPDATE: div:nth-of-type(2)::text@2 "1" => "2"
UPDATE: div:nth-of-type(1)::text "2" => "5"
UPDATE: div:nth-of-type(2)::text@0 "2" => "5"
```
