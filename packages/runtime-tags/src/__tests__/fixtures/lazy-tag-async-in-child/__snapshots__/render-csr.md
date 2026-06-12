# Render `{"value":1}`
```html
<div
  id="before"
>
  before
</div>
<div
  id="after"
>
  after
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
UPDATE: button::text@2 "" => "10"
UPDATE: button::text@0 "" => "1"
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
