# Render `{"show":false,"user":{"name":"Ann","token":"SECRET_token"}}`

# Update `{"show":true,"user":{"name":"Ann","token":"SECRET_token"}}`
```html
<button>
  *A
</button>
<button>
  B
</button>
```
## Change
```
INSERT: button
INSERT: button:nth-of-type(1) + button
UPDATE: button:nth-of-type(1)::text@0 "" => "*"
```

# Update
```js
document.querySelector("button:last-of-type").click();
```
```html
<button>
  A
</button>
<button>
  *B
</button>
```
## Change
```
UPDATE: button:nth-of-type(1)::text "*" => ""
UPDATE: button:nth-of-type(2)::text@0 "" => "*"
```

# Update `{"show":true,"user":{"name":"Ann","token":"SECRET_token"}}`

# Update `{"show":false,"user":{"name":"Ann","token":"SECRET_token"}}`
## Change
```
REMOVE: button
REMOVE: button
```

# Update `{"show":true,"user":{"name":"Ann","token":"SECRET_token"}}`
```html
<button>
  *A
</button>
<button>
  B
</button>
```
## Change
```
INSERT: button
INSERT: button:nth-of-type(1) + button
UPDATE: button:nth-of-type(1)::text@0 "" => "*"
```
