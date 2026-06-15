# Render
```html
<button>
  inc
</button>
<div>
  1|2
</div>
<div>
  2|10
</div>
```

# Update
```js
container.querySelector("button").click();
```
```html
<button>
  inc
</button>
<div>
  1|3
</div>
<div>
  3|10
</div>
```
## Change
```
UPDATE: div:nth-of-type(1)::text@2 "2" => "3"
UPDATE: div:nth-of-type(2)::text@0 "2" => "3"
```
