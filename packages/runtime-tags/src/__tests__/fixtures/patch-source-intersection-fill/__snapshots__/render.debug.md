# Render `{"item":{"price":10}}`
```html
<p>
  11
</p>
<p>
  10
</p>
<button>
  +
</button>
```

# Update `{"item":{"price":20}}`
```html
<p>
  22
</p>
<p>
  20
</p>
<button>
  +
</button>
```
## Change
```
UPDATE: p:nth-of-type(1)::text "11" => "22"
UPDATE: p:nth-of-type(2)::text "10" => "20"
```

# Update
```js
document.querySelector("button").click();
```
```html
<p>
  22
</p>
<p>
  40
</p>
<button>
  +
</button>
```
## Change
```
UPDATE: p:nth-of-type(2)::text "20" => "40"
```
