# Render
```html
<button>
  inc 0
</button>
<div>
  a 0
</div>
<span>
  b 1
</span>
<div>
  a 2
</div>
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  inc 1
</button>
<div>
  a 1
</div>
<span>
  b 2
</span>
<div>
  a 3
</div>
```
## Change
```
UPDATE: button::text@4 "0" => "1"
UPDATE: div:nth-of-type(1)::text@2 "0" => "1"
UPDATE: span::text@2 "1" => "2"
UPDATE: div:nth-of-type(2)::text@2 "2" => "3"
```
