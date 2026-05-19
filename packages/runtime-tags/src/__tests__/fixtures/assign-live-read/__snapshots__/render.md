# Render
```html
<button>
  0
</button>
<button />
```

# Update
```js
container.querySelector("button").click();
```
```html
<button>
  2
</button>
<button />
```
## Change
```
UPDATE: button:nth-of-type(1)::text "0" => "2"
```

# Update
```js
container.querySelector("button").click();
```
```html
<button>
  4
</button>
<button />
```
## Change
```
UPDATE: button:nth-of-type(1)::text "2" => "4"
```

# Update
```js
container.querySelector("button").click();
```
```html
<button>
  6
</button>
<button />
```
## Change
```
UPDATE: button:nth-of-type(1)::text "4" => "6"
```
