# Render `{"page":1}`
```html
<button>
  1
</button>
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  2
</button>
```
## Change
```
UPDATE: button::text "1" => "2"
```

# Update `{"page":2}`

# Update `{"page":5}`
```html
<button>
  5
</button>
```
## Change
```
UPDATE: button::text "2" => "5"
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  6
</button>
```
## Change
```
UPDATE: button::text "5" => "6"
```

# Update `{"page":3}`
```html
<button>
  3
</button>
```
## Change
```
UPDATE: button::text "6" => "3"
```
