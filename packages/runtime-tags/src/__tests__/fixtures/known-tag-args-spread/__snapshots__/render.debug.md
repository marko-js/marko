# Render
```html
<div>
  1|2|{}
</div>
<div>
  7|8|{}
</div>
<div>
  1|2|{}
</div>
<button>
  inc 1
</button>
```

# Update
```js
container.querySelector("button").click();
```
```html
<div>
  2|2|{}
</div>
<div>
  7|8|{}
</div>
<div>
  2|2|{}
</div>
<button>
  inc 2
</button>
```
## Change
```
UPDATE: button::text@4 "1" => "2"
UPDATE: div:nth-of-type(1)::text@0 "1" => "2"
UPDATE: div:nth-of-type(3)::text@0 "1" => "2"
```
