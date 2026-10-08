# Render `{"show":false,"x":5}`
```html
<button>
  +
</button>
```

# Update
```js
d.querySelector("button").click();
```

# Update `{"show":true,"x":5}`
```html
<button>
  +
</button>
<p>
  t=6
</p>
```
## Change
```
INSERT: button + p
UPDATE: p::text@2 "5" => "6"
```
