# Render
```html
<button>
  t
</button>
<button>
  t
</button>
```

# Update
```js
document.querySelectorAll("button")[index].click();
```
```html
<button>
  t
</button>
<button>
  t
</button>
<em>
  off
</em>
```
## Change
```
INSERT: button:nth-of-type(2) + em
UPDATE: em::text " " => "off"
```

# Update
```js
document.querySelectorAll("button")[index].click();
```
```html
<button>
  t
</button>
<button>
  t
</button>
```
## Change
```
REMOVE: button:nth-of-type(2) + em
```
