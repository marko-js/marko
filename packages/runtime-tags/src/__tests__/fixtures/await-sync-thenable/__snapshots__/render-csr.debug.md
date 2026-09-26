# Render
```html
<div>
  after
</div>
<button>
  inc
</button>
```

# Update
```html
value 1
<div>
  after
</div>
<button>
  inc
</button>
```
## Change
```
INSERT: ::text("value "), ::text("1")
UPDATE: ::text@6 "" => "1"
```

# Update
```js
document.querySelector("button").click();
```

# Update
```html
value 2
<div>
  after
</div>
<button>
  inc
</button>
```
## Change
```
UPDATE: ::text@6 "1" => "2"
```
