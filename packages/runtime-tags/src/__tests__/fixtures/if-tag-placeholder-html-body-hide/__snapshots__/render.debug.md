# Render `{"html":"<b>1</b><i>2</i>"}`
```html
<div>
  <span>
    before
  </span>
  <b>
    1
  </b>
  <i>
    2
  </i>
  <span>
    after
  </span>
</div>
<button>
  hide
</button>
```

# Update
```js
document.querySelector("button").click();
```
```html
<div>
  <span>
    before
  </span>
  <span>
    after
  </span>
</div>
<button>
  hide
</button>
```
## Change
```
REMOVE: div > b
REMOVE: div > i
```
