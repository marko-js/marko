# Render `{"on":true}`
```html
<p>
  xa
  <b />
</p>
<button>
  add
</button>
```

# Update
```js
document.querySelector("button").click();
```
```html
<p>
  xa!
  <b />
</p>
<button>
  add
</button>
```
## Change
```
UPDATE: p::text@1 "a" => "a!"
```
