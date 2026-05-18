# Render `{"a":2}`
```html
<button>
  Increment
</button>
2 4
```

# Update
```js
container.querySelector("button").click();
```
```html
<button>
  Increment
</button>
2 5
```
## Change
```
UPDATE: ::text@2 "4" => "5"
```

# Update `{"a":3}`
```html
<button>
  Increment
</button>
3 5
```
## Change
```
UPDATE: ::text@0 "2" => "3"
```

# Update
```js
container.querySelector("button").click();
```
```html
<button>
  Increment
</button>
3 6
```
## Change
```
UPDATE: ::text@2 "5" => "6"
```
