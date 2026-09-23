# Render
```html
<button>
  ab:2
  <span>
    2
  </span>
</button>
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  ab:2
  <span>
    2
  </span>
</button>
<button>
  cde:3
  <span>
    3
  </span>
</button>
```
## Change
```
INSERT: button:nth-of-type(1) + button
UPDATE: button:nth-of-type(2)::text@4 "" => "3"
UPDATE: button:nth-of-type(2)::text@0 "" => "cde"
INSERT: button:nth-of-type(2)::text@4 + span
UPDATE: button:nth-of-type(2) > span::text " " => "3"
```
