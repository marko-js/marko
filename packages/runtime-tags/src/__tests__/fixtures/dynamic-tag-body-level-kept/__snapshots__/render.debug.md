# Render `{"on":false,"note":"a"}`
```html
<main>
  <button
    class="inc"
  >
    1
  </button>
  <div>
    <em>
      a 1
    </em>
  </div>
</main>
```

# Update
```js
document.querySelector(".inc").click();
```
```html
<main>
  <button
    class="inc"
  >
    2
  </button>
  <div>
    <em>
      a 2
    </em>
  </div>
</main>
```
## Change
```
UPDATE: .inc::text "1" => "2"
UPDATE: main > div > em::text@2 "1" => "2"
```
