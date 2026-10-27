# Render `{"label":"a"}`
```html
<button>
  read
</button>
<p />
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  read
</button>
<p>
  a:a
</p>
```
## Change
```
UPDATE: p::text "" => "a:a"
```
