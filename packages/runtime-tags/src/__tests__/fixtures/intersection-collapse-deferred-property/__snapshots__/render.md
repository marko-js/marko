# Render
```html
<button>
  go
</button>
<div
  class="row open"
>
  <span
    class="badge"
  >
    open!
  </span>
  <form
    class="derived"
  />
  <form
    class="direct"
  />
</div>
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  go
</button>
<div
  class="row resolved"
>
  <span
    class="badge"
  >
    resolved!
  </span>
</div>
```
## Change
```
REMOVE: .badge + form
UPDATE: .badge::text "open!" => "resolved!"
UPDATE: .row.resolved[class] "row open" => "row resolved"
REMOVE: .badge + form
```
