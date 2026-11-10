# Render

# Update
```html
<button>
  0
</button>
<button>
  0
</button>
<button>
  0
</button>
```
## Change
```
INSERT: button
INSERT: button:nth-of-type(1) + button
INSERT: button:nth-of-type(2) + button
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
<button>
  1
</button>
```
## Change
```
UPDATE: button:nth-of-type(1)::text "0" => "1"
UPDATE: button:nth-of-type(2)::text "0" => "1"
UPDATE: button:nth-of-type(3)::text "0" => "1"
```
