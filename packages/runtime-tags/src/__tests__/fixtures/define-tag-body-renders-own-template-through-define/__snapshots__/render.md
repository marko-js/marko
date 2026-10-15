# Render
```html
<button>
  2
</button>
<button>
  1
</button>
<button>
  0
</button>
<b>
  0
</b>
<b>
  1
</b>
<b>
  2
</b>
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  2
</button>
<b>
  2
</b>
```
## Change
```
REMOVE: button + button
REMOVE: button + button
REMOVE: button + b
REMOVE: button + b
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  2
</button>
<button>
  1
</button>
<button>
  0
</button>
<b>
  0
</b>
<b>
  1
</b>
<b>
  2
</b>
```
## Change
```
INSERT: button:nth-of-type(1) + :is(button, b)
UPDATE: button:nth-of-type(2)::text " " => "1"
UPDATE: b:nth-of-type(2)::text " " => "1"
INSERT: button:nth-of-type(2) + :is(button, b)
UPDATE: button:nth-of-type(3)::text " " => "0"
UPDATE: b:nth-of-type(1)::text " " => "0"
```
