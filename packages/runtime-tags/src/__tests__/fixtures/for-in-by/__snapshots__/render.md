# Render
```html
<div>
  <p>
    a:1
  </p>
  <p>
    b:2
  </p>
  <button>
    Change
  </button>
</div>
```

# Update
```js
(document.querySelector("button")).click();
```
```html
<div>
  <p>
    b:2
  </p>
  <p>
    c:3
  </p>
  <button>
    Change
  </button>
</div>
```
## Change
```
REMOVE: div > p
INSERT: div > p:nth-of-type(1) + p
```
