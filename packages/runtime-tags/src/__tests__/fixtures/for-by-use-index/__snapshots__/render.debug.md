# Render
```html
<div>
  <button>
    hello
  </button>
</div>
```

# Update
```js
container.querySelector("button").click();
```
```html
<div />
<div>
  0
</div>
```
## Change
```
REMOVE: div:nth-of-type(1) > button
INSERT: div:nth-of-type(1) + div
UPDATE: div:nth-of-type(2)::text " " => "0"
```
