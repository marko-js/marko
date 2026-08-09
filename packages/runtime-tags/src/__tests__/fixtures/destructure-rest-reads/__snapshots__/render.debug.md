# Render
```html
<div>
  1|2|3|2
</div>
<div>
  2|3
</div>
<div>
  2|2
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
  4|5||1
</div>
<div>
  5|
</div>
<div>
  5|1
</div>
<button>
  update
</button>
```
## Change
```
UPDATE: div:nth-of-type(1)::text@5 "2" => "1"
UPDATE: div:nth-of-type(3)::text@2 "2" => "1"
UPDATE: div:nth-of-type(1)::text@0 "1" => "4"
UPDATE: div:nth-of-type(1)::text@2 "2" => "5"
UPDATE: div:nth-of-type(3)::text@0 "2" => "5"
UPDATE: div:nth-of-type(2)::text@0 "2" => "5"
UPDATE: div:nth-of-type(1)::text "3" => ""
UPDATE: div:nth-of-type(2)::text "3" => ""
```
