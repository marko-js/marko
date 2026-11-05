# Render
```html
<div>
  <p>
    x
    <b>
      0
    </b>
  </p>
</div>
<button>
  inc
</button>
```

# Update
```js
document.querySelector("button").click();
```
```html
<div>
  <p>
    x
    <b>
      1
    </b>
  </p>
</div>
<button>
  inc
</button>
```
## Change
```
UPDATE: div > p > b::text "0" => "1"
```
