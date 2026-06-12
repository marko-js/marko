# Render `{"value":1}`

# Update
```html
<button
  id="a"
>
  1
</button>
<button
  id="b"
>
  10
</button>
```
## Change
```
INSERT: #a
INSERT: #a + #b
```

# Update
```js
container.querySelector("#a").click();
```
```html
<button
  id="a"
>
  2
</button>
<button
  id="b"
>
  10
</button>
```
## Change
```
UPDATE: #a::text "1" => "2"
```

# Update
```js
container.querySelector("#b").click();
```
```html
<button
  id="a"
>
  2
</button>
<button
  id="b"
>
  11
</button>
```
## Change
```
UPDATE: #b::text "10" => "11"
```
