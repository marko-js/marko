# Render `{"v":"a","w":"1"}`
```html
<button>
  add
</button>
<p>
  0:a 1
</p>
```

# Update
```js
d.querySelector("button").click();
```
```html
<button>
  add
</button>
<p>
  0:a 1
</p>
<p>
  1:a 1
</p>
```
## Change
```
INSERT: p:nth-of-type(1) + p
UPDATE: p:nth-of-type(2)::text@2 "" => "a"
UPDATE: p:nth-of-type(2)::text@4 "" => "1"
```
