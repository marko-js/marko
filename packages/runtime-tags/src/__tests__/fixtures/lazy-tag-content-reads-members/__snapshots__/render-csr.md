# Render
```html
<button>
  inc
</button>
```

# Update
```html
<button>
  inc
</button>
<section>
  2
</section>
```
## Change
```
INSERT: button + section
UPDATE: section::text " " => "2"
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  inc
</button>
<section>
  3
</section>
```
## Change
```
UPDATE: section::text "2" => "3"
```
