# Render `{"items":["one","two"],"label":"a"}`
```html
<p>
  a one: 0
</p>
<p>
  a two: 0
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
  a one: 1
</p>
<p>
  a two: 1
</p>
<button>
  1
</button>
```
## Change
```
UPDATE: button::text "0" => "1"
UPDATE: p:nth-of-type(1)::text "a one: 0" => "a one: 1"
UPDATE: p:nth-of-type(2)::text "a two: 0" => "a two: 1"
```

# Update
```js
document.querySelector("button").click();
```
```html
<p>
  a one: 2
</p>
<p>
  a two: 2
</p>
<button>
  2
</button>
```
## Change
```
UPDATE: button::text "1" => "2"
UPDATE: p:nth-of-type(1)::text "a one: 1" => "a one: 2"
UPDATE: p:nth-of-type(2)::text "a two: 1" => "a two: 2"
```
