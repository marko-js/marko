# Render
```html
<button>
  inc
</button>
loading
```

# Update
```html
<button>
  inc
</button>
<p>
  b 1
</p>
x
```
## Change
```
REMOVE: ::text("loading")
INSERT: button + :is(p, ::text("x"))
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  inc
</button>
<p>
  b 2
</p>
x
```
## Change
```
UPDATE: p::text@2 "1" => "2"
```
