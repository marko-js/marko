# Render
```html
<button>
  0,0
</button>
```

# Update
```js
container.querySelector("button").click();
```
```html
<button>
  0,1
</button>
```
## Change
```
UPDATE: button::text "0,0" => "0,1"
```

# Update
```js
container.querySelector("button").click();
```
```html
<button>
  1,2
</button>
```
## Change
```
UPDATE: button::text "0,1" => "1,2"
```

# Update
```js
container.querySelector("button").click();
```
```html
<button>
  2,3
</button>
```
## Change
```
UPDATE: button::text "1,2" => "2,3"
```
