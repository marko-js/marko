# Render
```html
<span
  a="2"
>
  1
</span>
<button>
  Change
</button>
```

# Update
```js
document.querySelector("button").click();
```
```html
<span
  a="4"
>
  3
</span>
<button>
  Change
</button>
```
## Change
```
UPDATE: span::text "1" => "3"
UPDATE: span[a] "2" => "4"
```
