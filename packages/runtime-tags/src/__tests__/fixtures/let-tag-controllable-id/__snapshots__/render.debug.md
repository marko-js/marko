# Render
```html
<button>
  1|1
</button>
```

# Update
```js
container.querySelector("button").click();
```
```html
<button>
  3|3
</button>
```
## Change
```
UPDATE: button::text@0 "1" => "3"
UPDATE: button::text@2 "1" => "3"
```

# Update
```js
container.querySelector("button").click();
```
```html
<button>
  5|5
</button>
```
## Change
```
UPDATE: button::text@0 "3" => "5"
UPDATE: button::text@2 "3" => "5"
```

# Update
```js
container.querySelector("button").click();
```
```html
<button>
  7|7
</button>
```
## Change
```
UPDATE: button::text@0 "5" => "7"
UPDATE: button::text@2 "5" => "7"
```
