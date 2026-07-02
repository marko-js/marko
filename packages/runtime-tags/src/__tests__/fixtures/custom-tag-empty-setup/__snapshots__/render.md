# Render
```html
<button>
  add
</button>
<div
  class="row"
>
  <span
    class="cell"
  >
    Widget
  </span>
  <span
    class="cell"
  >
    2
  </span>
</div>
```

# Update
```js
container.querySelector("button").click();
```
```html
<button>
  add
</button>
<div
  class="row"
>
  <span
    class="cell"
  >
    Widget
  </span>
  <span
    class="cell"
  >
    3
  </span>
</div>
```
## Change
```
UPDATE: .row > span:nth-of-type(2)::text "2" => "3"
```
