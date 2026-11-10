# Render

# Update
```html
<section>
  <button>
    count:0
  </button>
</section>
```
## Change
```
INSERT: section
```
## Console
```
LOG "grand-child"
```

# Update
```js
document.querySelector("button").click();
```
```html
<section>
  <button>
    count:1
  </button>
</section>
```
## Change
```
UPDATE: section > button::text@6 "0" => "1"
```
