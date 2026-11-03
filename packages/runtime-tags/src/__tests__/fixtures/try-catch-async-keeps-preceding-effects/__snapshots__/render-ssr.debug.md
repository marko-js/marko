# Render
```html
<button>
  0
</button>
loading
```

# Update
```html
<button>
  0
</button>
<button>
  0
</button>
```
## Change
```
INSERT: button:nth-of-type(2)::text("0")
REMOVE: ::text("loading")
INSERT: button:nth-of-type(1) + button
```

# Update
```html
<button>
  0
</button>
<button>
  0
</button>
ERROR!
```
## Change
```
INSERT: button:nth-of-type(2) + ::text("ERROR!")
```

# Update
```js
for (const button of document.querySelectorAll("button")) button.click();
```
```html
<button>
  1
</button>
<button>
  1
</button>
ERROR!
```
## Change
```
UPDATE: button:nth-of-type(1)::text "0" => "1"
UPDATE: button:nth-of-type(2)::text "0" => "1"
```
