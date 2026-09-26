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
INSERT: div::text("client")
REMOVE: ::text("loading")
INSERT: button + :is(span, div)
UPDATE: div::text "server" => "client"
```
## Console
```
LOG "if script ran"
```
