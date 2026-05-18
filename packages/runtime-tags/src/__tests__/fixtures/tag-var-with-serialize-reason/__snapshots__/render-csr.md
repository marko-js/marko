# Render
```html
<button>
  1
</button>
<span />
```

# Update
```js
container.querySelector("button").click();
```
```html
<button>
  2
</button>
<span />
```
## Change
```
UPDATE: button::text "1" => "2"
```

# Update
```js
container.querySelector("button").click();
```
```html
<button>
  3
</button>
<span />
```
## Change
```
UPDATE: button::text "2" => "3"
```

# Update
```js
container.querySelector("button").click();
```
```html
<button>
  4
</button>
<span />
```
## Change
```
UPDATE: button::text "3" => "4"
```
