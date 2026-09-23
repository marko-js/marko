# Render
```html
<button>
  One 0
</button>
<button>
  Two
</button>
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  One 1
</button>
<button>
  Two
</button>
```
## Change
```
UPDATE: button:nth-of-type(1)::text@4 "0" => "1"
```
