# Render
```html
<button>
  resolve
</button>
<span
  class="flag open open"
/>
<div
  class="row open"
>
  <span
    class="badge"
  >
    open!
  </span>
  <span
    class="state OPEN"
  />
  <form
    class="derived"
  />
</div>
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  resolve
</button>
<span
  class="flag resolved resolved"
/>
<div
  class="row resolved"
>
  <span
    class="badge"
  >
    resolved!
  </span>
  <span
    class="state RESOLVED"
  />
</div>
```
## Change
```
UPDATE: .flag.resolved[class] "flag open open" => "flag resolved resolved"
UPDATE: .badge::text "open!" => "resolved!"
UPDATE: .row.resolved[class] "row open" => "row resolved"
REMOVE: .state.RESOLVED + form
UPDATE: .state.RESOLVED[class] "state OPEN" => "state RESOLVED"
```
