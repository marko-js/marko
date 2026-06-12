# Render
```html
<button>
  Inc
</button>
<span>
  0
</span>
```
## Console
```
LOG "loaded"
```

# Update
```js
container.querySelector("button").click();
```
```html
<button>
  Inc
</button>
<span>
  1
</span>
```
## Change
```
UPDATE: span::text "0" => "1"
```

# Update
```js
container.querySelector("button").click();
```
```html
<button>
  Inc
</button>
<span>
  2
</span>
```
## Change
```
UPDATE: span::text "1" => "2"
```

# Update
```js
container.querySelector("button").click();
```
```html
<button>
  Inc
</button>
<span>
  3
</span>
```
## Change
```
UPDATE: span::text "2" => "3"
```
