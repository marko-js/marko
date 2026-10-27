# Render
```html
<a
  href="/next"
>
  go 
</a>
```

# Update
```js
document.querySelector("a").click();
```
```html
<a
  href="/next"
>
  go true
</a>
```
## Change
```
UPDATE: a::text@3 "" => "true"
```

# Update
```js
pageshow(document, false);
```

# Update
```js
pageshow(document, true);
```
```html
<a
  href="/next"
>
  go 
</a>
```
## Change
```
UPDATE: a::text "true" => ""
```
