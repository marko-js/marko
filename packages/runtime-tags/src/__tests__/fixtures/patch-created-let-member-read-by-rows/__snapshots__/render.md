# Render `{"show":false,"token":"SECRET_token"}`

# Update `{"show":true,"token":"SECRET_token"}`
```html
<button>
  *1
</button>
<button>
  2
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
  1
</button>
<button>
  *2
</button>
```
## Change
```
UPDATE: button:nth-of-type(1)::text "*" => ""
UPDATE: button:nth-of-type(2)::text@0 "" => "*"
```

# Update `{"show":true,"token":"SECRET_token"}`

# Update `{"show":false,"token":"SECRET_token"}`
## Change
```
REMOVE: button
REMOVE: button
```

# Update `{"show":true,"token":"SECRET_token"}`
```html
<button>
  *1
</button>
<button>
  2
</button>
```
## Change
```
INSERT: button
INSERT: button:nth-of-type(1) + button
UPDATE: button:nth-of-type(1)::text@0 "" => "*"
```
