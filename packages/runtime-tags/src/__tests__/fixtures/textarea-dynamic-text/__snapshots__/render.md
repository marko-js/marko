# Render
```html
<textarea>
  before
</textarea>
<button>
  update
</button>
```

# Update
```js
document.querySelector("button").click();
```
```html
<textarea
  default-value="after"
>
  before
</textarea>
<button>
  update
</button>
```
## Change
```
REMOVE: textarea::text("before")
INSERT: textarea::text("after")
```
