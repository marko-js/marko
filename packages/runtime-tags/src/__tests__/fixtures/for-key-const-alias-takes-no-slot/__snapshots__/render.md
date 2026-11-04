# Render
```html
<button>
  0
</button>
0
<button>
  0
</button>
1
<button
  class="toggle"
/>
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  1
</button>
0
<button>
  0
</button>
1
<button
  class="toggle"
/>
```
## Change
```
UPDATE: button:nth-of-type(1)::text "0" => "1"
```

# Update
```js
document.querySelector(".toggle").click();
```
```html
<button>
  1
</button>
<button>
  0
</button>
<button
  class="toggle"
/>
```
## Change
```
REMOVE: button:nth-of-type(1) + ::text("0")
REMOVE: button:nth-of-type(2) + ::text("1")
```
