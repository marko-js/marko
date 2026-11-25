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
REMOVE: div > strong
REMOVE: div::text(" c")
REMOVE: div::text("a ")
INSERT: div > em
```
