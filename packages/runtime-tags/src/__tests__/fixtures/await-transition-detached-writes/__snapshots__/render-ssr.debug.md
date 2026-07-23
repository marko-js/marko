# Render
```html
<button>
  inc
</button>
<b>
  outside 0
</b>
<div />
```

# Update
```js
document.querySelector("button").click();
```

# Update
```js
document.querySelector("button").click();
```

# Update
```html
<button>
  inc
</button>
<b>
  outside 0
</b>
<div>
  <span>
    #0
  </span>
  <p>
    R0
  </p>
</div>
```
## Change
```
INSERT: div > span
INSERT: div > span::text("#")
INSERT: div > span::text@0 + ::text("0")
INSERT: div > span + p
INSERT: div > p::text("R0")
```
