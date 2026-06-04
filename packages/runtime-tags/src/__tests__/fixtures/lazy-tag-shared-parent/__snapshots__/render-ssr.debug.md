# Render
```html
<button>
  Inc
</button>
<span>
  1
</span>
<span>
  2
</span>
```

# Update
```js
container.querySelector("button").click();
```
```html
<button>
  Inc
</button>
<span>
  2
</span>
<span>
  4
</span>
```
## Change
```
UPDATE: span:nth-of-type(1)::text "1" => "2"
UPDATE: span:nth-of-type(2)::text "2" => "4"
```
