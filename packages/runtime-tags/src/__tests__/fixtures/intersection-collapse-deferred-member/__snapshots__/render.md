# Render
```html
<button>
  resolve
</button>
<span
  class="flag open is-open"
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
  class="flag resolved is-resolved"
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
UPDATE: .flag.resolved.is-resolved[class] "flag open is-open" => "flag resolved is-resolved"
UPDATE: .row.resolved[class] "row open" => "row resolved"
REMOVE: .row.resolved > form
UPDATE: .badge::text "open!" => "resolved!"
UPDATE: .state.RESOLVED[class] "state OPEN" => "state RESOLVED"
```
