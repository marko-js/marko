# Render `{"value":1}`
```html
<div
  id="before"
>
  before
</div>
```

# Update
```html
<div
  id="before"
>
  before
</div>
<button>
  1:10
</button>
<div
  id="after"
>
  after
</div>
```
## Change
```
INSERT: button
INSERT: button::text("1")
INSERT: button::text(":10")
INSERT: #after
INSERT: #after::text("after")
```

# Update
```js
document.querySelector("button").click();
```
```html
<div
  id="before"
>
  before
</div>
<button>
  2:10
</button>
<div
  id="after"
>
  after
</div>
```
## Change
```
UPDATE: button::text@0 "1" => "2"
```
