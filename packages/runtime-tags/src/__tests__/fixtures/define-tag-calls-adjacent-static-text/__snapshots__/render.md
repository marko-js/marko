# Render
```html
ZZ
<span>
  0
</span>
none
<button>
  inc
</button>
```

# Update
```js
document.querySelector("button").click();
```
```html
ZZ
<span>
  1
</span>
more
<button>
  inc
</button>
```
## Change
```
UPDATE: span::text "0" => "1"
INSERT: span + ::text("more")
REMOVE: ::text@2 + ::text("none")
```
