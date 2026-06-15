# Render
```html
<button
  id="a"
>
  a 1
</button>
<button
  id="b"
>
  b
</button>
<button
  id="c"
>
  c
</button>
```

# Update
```js
container.querySelector(`#${id}`).click();
```
```html
<button
  id="a"
>
  a 2
</button>
<button
  id="b"
>
  b
</button>
<button
  id="c"
>
  c
</button>
```
## Change
```
UPDATE: #a::text@2 "1" => "2"
```

# Update
```js
container.querySelector(`#${id}`).click();
```

# Update
```js
container.querySelector(`#${id}`).click();
```
