# Render
```html
<button>
  Click
</button>
<button>
  Click
</button>
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
  Click
</button>
```
## Change
```
REMOVE: button:nth-of-type(1)::text("Click")
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
```
## Change
```
REMOVE: button:nth-of-type(2)::text("Click")
INSERT: button:nth-of-type(2)::text("b")
```
