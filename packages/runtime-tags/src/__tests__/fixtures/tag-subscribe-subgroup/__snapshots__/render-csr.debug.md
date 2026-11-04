# Render `{"tally":[1,2],"type":"a","settled":10}`
```html
<span>
  12
</span>
<span>
  13
</span>
<button>
  +
</button>
```

# Update `{"tally":[1,2,3],"type":"a","settled":20}`
```html
<span>
  22
</span>
<span>
  23
</span>
<span>
  24
</span>
<button>
  +
</button>
```
## Change
```
UPDATE: span:nth-of-type(1)::text "12" => "22"
UPDATE: span:nth-of-type(2)::text "13" => "23"
INSERT: span:nth-of-type(2) + span
UPDATE: span:nth-of-type(3)::text " " => "24"
```

# Update
```js
document.querySelector("button").click();
```
```html
<span>
  23
</span>
<span>
  24
</span>
<span>
  25
</span>
<button>
  +
</button>
```
## Change
```
UPDATE: span:nth-of-type(1)::text "22" => "23"
UPDATE: span:nth-of-type(2)::text "23" => "24"
UPDATE: span:nth-of-type(3)::text "24" => "25"
```
