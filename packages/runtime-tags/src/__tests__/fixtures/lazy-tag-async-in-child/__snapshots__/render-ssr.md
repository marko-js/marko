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
INSERT: #before + button
INSERT: button::text("1")
INSERT: button::text@0 + ::text(":10")
INSERT: button + #after
INSERT: #after::text("after")
```

# Update
```js
container.querySelector("button").click();
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
