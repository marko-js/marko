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
  off
</em>
```
## Change
```
INSERT: em
UPDATE: em::text " " => "off"
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
  on
</em>
```
## Change
```
UPDATE: em::text "off" => "on"
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
REMOVE: em
```
