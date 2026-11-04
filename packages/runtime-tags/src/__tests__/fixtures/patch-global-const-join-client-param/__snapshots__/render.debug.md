# Render `{"$global":{"flag":true,"user":{"name":"a"},"serializedGlobals":["flag","user"]}}`
```html
<button>
  toggle
</button>
<b>
  shown
</b>
<p>
  on
</p>
```

# Update `{"$global":{"flag":false,"user":{"name":"b"},"serializedGlobals":["flag","user"]}}`
```html
<button>
  toggle
</button>
<p>
  off
</p>
```
## Change
```
UPDATE: p::text "on" => "off"
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
<p>
  on
</p>
```
## Change
```
UPDATE: p::text "off" => "on"
INSERT: button + b
```

# Update `{"$global":{"flag":false,"user":{"name":"d"},"serializedGlobals":["flag","user"]}}`
```html
<button>
  toggle
</button>
<p>
  off
</p>
```
## Change
```
UPDATE: p::text "on" => "off"
REMOVE: button + b
```
