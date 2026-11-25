# Render
```html
<button>
  show
</button>
loading
```

# Update
```js
document.querySelector("button").click();
```

# Update
```html
<button>
  show
</button>
<span>
  shown
</span>
<div>
  client
</div>
```
## Change
```
REMOVE: ::text("loading")
INSERT: span, div
INSERT: div::text("client")
UPDATE: div::text "server" => "client"
```
## Console
```
LOG "if script ran"
```
