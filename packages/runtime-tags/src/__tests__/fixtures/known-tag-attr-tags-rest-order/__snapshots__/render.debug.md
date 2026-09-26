# Render
```html
<button>
  inc 1
</button>
<div>
  1:s,cond,row,other
</div>
<div>
  1:s,row,other
</div>
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  inc 2
</button>
<div>
  2:s,cond,row,other
</div>
<div>
  2:s,row,other
</div>
```
## Change
```
UPDATE: button::text@4 "1" => "2"
UPDATE: div:nth-of-type(1)::text@0 "1" => "2"
UPDATE: div:nth-of-type(2)::text@0 "1" => "2"
```
