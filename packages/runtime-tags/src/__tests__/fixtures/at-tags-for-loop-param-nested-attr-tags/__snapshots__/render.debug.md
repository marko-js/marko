# Render
```html
<div>
  <span>
    1-10;
  </span>
  <span>
    1-20;
  </span>
</div>
<button>
  Add
</button>
```

# Update
```js
document.querySelector("button").click();
```
```html
<div>
  <span>
    1-10;
  </span>
  <span>
    1-20;
  </span>
</div>
<div>
  <span>
    2-30;
  </span>
</div>
<button>
  Add
</button>
```
## Change
```
INSERT: div:nth-of-type(1) + div
UPDATE: div:nth-of-type(2) > span::text@0 "" => "2"
```
