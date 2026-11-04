# Render `{"b":false,"items":[{"id":"s","note":"SECRET_s"},{"id":"m","note":"SECRET_m"}]}`

# Update `{"b":true,"items":[{"id":"s","note":"SECRET_s"},{"id":"m","note":"SECRET_m"}]}`
```html
<button>
  s
</button>
<button>
  m
</button>
```
## Change
```
INSERT: button
INSERT: button:nth-of-type(1) + button
```

# Update
```js
document.querySelector("button:last-of-type").click();
```
```html
<button>
  s
</button>
<button
  class="on"
>
  m
</button>
```
## Change
```
UPDATE: .on[class] null => "on"
```

# Update `{"b":true,"items":[{"id":"s","note":"SECRET_s"},{"id":"m","note":"SECRET_m"}]}`
