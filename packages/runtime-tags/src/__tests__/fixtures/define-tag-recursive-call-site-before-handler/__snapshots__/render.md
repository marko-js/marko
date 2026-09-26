# Render
```html
<button>
  0
</button>
<button>
  1
</button>
<button>
  2
</button>
```

# Update
```js
for (const button of document.querySelectorAll("button")) button.click();
```
```html
<button>
  clicked 0
</button>
<button>
  clicked 1
</button>
<button>
  clicked 2
</button>
```
## Change
```
REMOVE: button:nth-of-type(1)::text("0")
INSERT: button:nth-of-type(1)::text("clicked 0")
REMOVE: button:nth-of-type(2)::text("1")
INSERT: button:nth-of-type(2)::text("clicked 1")
REMOVE: button:nth-of-type(3)::text("2")
INSERT: button:nth-of-type(3)::text("clicked 2")
```
