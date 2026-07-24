# Render
```html
<button>
  a
</button>
<button>
  b
</button>
<div>
  outer
</div>
```

# Update
```js
document.querySelectorAll("button")[0].click();
```
```html
<button>
  a
</button>
<button>
  b
</button>
<div>
  outer
</div>
```
## Change
```
REMOVE: button:nth-of-type(1)::text("a")
INSERT: button:nth-of-type(1)::text("a")
```

# Update
```js
document.querySelectorAll("button")[1].click();
```
```html
<button>
  a
</button>
<button>
  b
</button>
<div>
  outer
</div>
```
## Change
```
REMOVE: button:nth-of-type(2)::text("b")
INSERT: button:nth-of-type(2)::text("b")
```
