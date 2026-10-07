# Render
```html
<button>
  inc
</button>
```

# Update
```js
document.querySelector("button").click();
```
```html
<span>
  2
</span>
<button>
  inc
</button>
```
## Change
```
INSERT: span
UPDATE: span::text " " => "2"
```

# Update
```js
document.querySelector("button").click();
```
```html
<span>
  3
</span>
<button>
  inc
</button>
```
## Change
```
UPDATE: span::text "2" => "3"
```
