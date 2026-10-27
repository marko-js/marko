# Render
```html
<button>
  toggle
</button>
<section>
  <p>
    0
  </p>
</section>
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  toggle
</button>
<section />
```
## Change
```
REMOVE: section > p
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  toggle
</button>
<section>
  <p>
    2
  </p>
</section>
```
## Change
```
INSERT: section > p
UPDATE: section > p::text "1" => "2"
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  toggle
</button>
<section />
```
## Change
```
REMOVE: section > p
```
