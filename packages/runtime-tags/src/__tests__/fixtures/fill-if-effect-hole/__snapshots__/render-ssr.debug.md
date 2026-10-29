# Render `{"show":true,"label":"a"}`
```html
<h1>
  a
</h1>
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
<h1>
  a
</h1>
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
<h1>
  a
</h1>
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
