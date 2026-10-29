# Render `{"show":true,"label":"a"}`
```html
<p>
  a: 0
</p>
<button>
  0
</button>
```

# Update
```js
document.querySelector("button").click();
```
```html
<p>
  a: 1
</p>
<button>
  1
</button>
```
## Change
```
UPDATE: button::text "0" => "1"
UPDATE: p::text "a: 0" => "a: 1"
```

# Update
```js
document.querySelector("button").click();
```
```html
<p>
  a: 2
</p>
<button>
  2
</button>
```
## Change
```
UPDATE: button::text "1" => "2"
UPDATE: p::text "a: 1" => "a: 2"
```
