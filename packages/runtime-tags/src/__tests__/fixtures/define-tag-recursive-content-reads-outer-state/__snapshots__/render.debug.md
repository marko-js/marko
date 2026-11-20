# Render
```html
<button>
  0
</button>
<button>
  1
</button>
```

# Update
```js
document.querySelectorAll("button")[index].click();
```
```html
<button>
  0
</button>
<button>
  1
</button>
<em>
  held off
</em>
```
## Change
```
INSERT: button:nth-of-type(2) + em
UPDATE: em::text@5 "" => "off"
```

# Update
```js
document.querySelectorAll("button")[index].click();
```
```html
<button>
  0
</button>
<button>
  1
</button>
<em>
  held on
</em>
```
## Change
```
UPDATE: em::text@5 "off" => "on"
```

# Update
```js
document.querySelectorAll("button")[index].click();
```
```html
<button>
  0
</button>
<button>
  1
</button>
```
## Change
```
REMOVE: button:nth-of-type(2) + em
```

# Update
```js
document.querySelectorAll("button")[index].click();
```
```html
<button>
  0
</button>
<button>
  1
</button>
<em>
  held on
</em>
```
## Change
```
INSERT: button:nth-of-type(2) + em
UPDATE: em::text@5 "" => "on"
```
