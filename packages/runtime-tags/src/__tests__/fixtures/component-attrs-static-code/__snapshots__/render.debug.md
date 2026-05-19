# Render
```html
<button>
  $0.00
</button>
<button>
  $0.00
</button>
```

# Update
```js
container.querySelectorAll("button").forEach(button => button.click());
```
```html
<button>
  $1.00
</button>
<button>
  $1.00
</button>
```
## Change
```
UPDATE: button:nth-of-type(1)::text "$0.00" => "$1.00"
UPDATE: button:nth-of-type(2)::text "$0.00" => "$1.00"
```
