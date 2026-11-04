# Render `{"$global":{"flag":true,"user":{"name":"a"},"serializedGlobals":["flag","user"]}}`
```html
<button>
  toggle
</button>
<b>
  shown
</b>
```

# Update `{"$global":{"flag":false,"user":{"name":"b"},"serializedGlobals":["flag","user"]}}`
```html
<button>
  toggle
</button>
```
## Change
```
REMOVE: button + b
```

# Update
```js
document.querySelector("button").click();
```

# Update `{"$global":{"flag":true,"user":{"name":"c"},"serializedGlobals":["flag","user"]}}`

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  toggle
</button>
<b>
  shown
</b>
```
## Change
```
INSERT: button + b
```

# Update `{"$global":{"flag":false,"user":{"name":"d"},"serializedGlobals":["flag","user"]}}`
```html
<button>
  toggle
</button>
```
## Change
```
REMOVE: button + b
```
