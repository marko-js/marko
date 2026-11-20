# Render
```html
<button>
  t
</button>
<button>
  t
</button>
<p>
  offoff
</p>
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
<p>
  onoff
</p>
```
## Change
```
UPDATE: p::text "offoff" => "onoff"
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
<p>
  onon
</p>
```
## Change
```
UPDATE: p::text "onoff" => "onon"
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
<p>
  offon
</p>
```
## Change
```
UPDATE: p::text "onon" => "offon"
```
