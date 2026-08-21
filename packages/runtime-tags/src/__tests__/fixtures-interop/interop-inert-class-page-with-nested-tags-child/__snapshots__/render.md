# Render
```html
<div>
  <section>
    <span>
      count
    </span>
    <button
      id="counter"
    >
      0
    </button>
  </section>
</div>
```

# Update
```js
(document.querySelector("#counter")).click();
```
```html
<div>
  <section>
    <span>
      count
    </span>
    <button
      id="counter"
    >
      1
    </button>
  </section>
</div>
```
## Change
```
UPDATE: #counter::text "0" => "1"
```
