# Render
```html
<div>
  {"foo":1,"bar":2}
</div>
<button>
  1
</button>
```

# Update
```js
document.querySelector("button").click();
```
```html
<div>
  {"foo":1,"bar":3}
</div>
<button>
  2
</button>
```
## Change
```
UPDATE: div::text "{\"foo\":1,\"bar\":2}" => "{\"foo\":1,\"bar\":3}"
UPDATE: button::text "1" => "2"
```

# Update
```js
document.querySelector("button").click();
```
```html
<div>
  {"foo":1,"bar":4}
</div>
<button>
  3
</button>
```
## Change
```
UPDATE: div::text "{\"foo\":1,\"bar\":3}" => "{\"foo\":1,\"bar\":4}"
UPDATE: button::text "2" => "3"
```

# Update
```js
document.querySelector("button").click();
```
```html
<div>
  {"foo":1,"bar":5}
</div>
<button>
  4
</button>
```
## Change
```
UPDATE: div::text "{\"foo\":1,\"bar\":4}" => "{\"foo\":1,\"bar\":5}"
UPDATE: button::text "3" => "4"
```
