# Render
```html
<button
  id="change"
>
  change
</button>
<meta
  content="a"
  name="description"
/>
<meta
  content="fixed"
  name="static"
/>
```

# Update
```js
document.querySelector("#change").click();
```
```html
<button
  id="change"
>
  change
</button>
<meta
  content="a!"
  name="description"
/>
<meta
  content="fixed"
  name="static"
/>
```
## Change
```
UPDATE: meta:nth-of-type(1)[content] "a" => "a!"
```
