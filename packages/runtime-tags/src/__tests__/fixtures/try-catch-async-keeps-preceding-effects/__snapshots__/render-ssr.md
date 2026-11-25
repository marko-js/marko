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
REMOVE: ::text("loading")
INSERT: button:nth-of-type(2)
INSERT: button:nth-of-type(2)::text("0")
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
INSERT: ::text("ERROR!")
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
