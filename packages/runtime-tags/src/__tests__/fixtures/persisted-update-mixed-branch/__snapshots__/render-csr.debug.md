# Render `{"title":"First","$global":{"persisted":true}}`
```html
<h1>
  First
</h1>
<button>
  0
</button>
```

# Update
```js
document.querySelector("button").click();
```
```html
<h1>
  First
</h1>
<button>
  1
</button>
```
## Change
```
UPDATE: button::text "0" => "1"
```

# Update `{"title":"Second","$global":{"persisted":true}}`
```html
<h1>
  Second
</h1>
<button>
  1
</button>
```
## Change
```
UPDATE: h1::text "First" => "Second"
```

# Update `{"title":"Second","$global":{"persisted":true}}`

# Update
```js
document.querySelector("button").click();
```
```html
<h1>
  Second
</h1>
<button>
  2
</button>
```
## Change
```
UPDATE: button::text "1" => "2"
```

# Update `{"err":true,"$global":{"persisted":true}}`
```html
<h2>
  Something went wrong
</h2>
```
## Change
```
INSERT: h2
REMOVE: h2 + h1
REMOVE: h2 + button
```

# Update `{"err":true,"$global":{"persisted":true}}`

# Update `{"title":"Back","$global":{"persisted":true}}`
```html
<h1>
  Back
</h1>
<button>
  2
</button>
```
## Change
```
INSERT: h1, button
REMOVE: button + h2
UPDATE: h1::text " " => "Back"
UPDATE: button::text " " => "2"
```

# Update `{"title":"Back","$global":{"persisted":true}}`
