# Render
```html
<div>
  a 
  <strong>
    b
  </strong>
   c
</div>
<button>
  set
</button>
```

# Update
```js
document.querySelector(`button`).click();
```
```html
<div>
  <em>
    c
  </em>
</div>
<button>
  set
</button>
```
## Change
```
INSERT: div > em
REMOVE: div > em + ::text("a ")
REMOVE: div > em + strong
REMOVE: div > em + ::text(" c")
```
