# Render `{"title":"request title","$global":{"persisted":true}}`
```html
<button>
  clicked 0
</button>
<input
  class="client"
  data-request="request title"
  title="client title"
/>
<div
  class="client"
  data-request="request title"
  title="client title"
>
  dynamic
</div>
<div
  class="client"
  data-request="request title"
/>
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  clicked 1
</button>
<input
  class="client"
  data-request="request title"
  title="client title"
/>
<div
  class="client"
  data-request="request title"
  title="client title"
>
  dynamic
</div>
<div
  class="client"
  data-request="request title"
/>
```
## Change
```
UPDATE: button::text@8 "0" => "1"
```
