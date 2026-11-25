# Render `{"a":"&amp;"}`
```html
<button>
  inc 1
</button>
```

# Update initial

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  inc 2
</button>
```
## Change
```
UPDATE: button::text@4 "1" => "2"
UPDATE: title::text "& & & < &amp; - 1" => "& & & < &amp; - 2"
UPDATE: title::text "& & & < &amp; - 1" => "& & & < &amp; - 2"
```

# Update incremented
