# Render `{"message":"hello"}`
```html
<div />
<button>
  0
</button>
```

# Update
```js
document.querySelector("button").click();
```
```html
<div>
  <span>
    hello
  </span>
</div>
<button>
  1
</button>
```
## Change
```
INSERT: div > span
UPDATE: div > span::text " " => "hello"
UPDATE: button::text "0" => "1"
```

# Update
```js
document.querySelector("button").click();
```
```html
<div>
  <span>
    hello
  </span>
</div>
<button>
  2
</button>
```
## Change
```
UPDATE: button::text "1" => "2"
```
