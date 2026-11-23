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
REMOVE: title::text("& & & < &amp; - 1")
INSERT: title::text("& & & < &amp; - 2")
REMOVE: title::text("& & & < &amp; - 1")
INSERT: title::text("& & & < &amp; - 2")
```

# Update incremented
