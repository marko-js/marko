# Render `{"show":true,"w":"1"}`
```html
<button>
  0
</button>
<p>
  1
</p>
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  1
</button>
<p>
  1
</p>
```
## Change
```
UPDATE: button::text "0" => "1"
```

# Update `{"show":true,"w":"2"}`
```html
<button>
  1
</button>
<p>
  2
</p>
```
## Change
```
UPDATE: p::text "1" => "2"
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  2
</button>
```
## Change
```
UPDATE: button::text "1" => "2"
REMOVE: button + p
```
