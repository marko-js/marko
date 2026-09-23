# Render
```html
<button>
  inc
</button>
<div>
  caught render: sync
</div>
<div>
  clicks 0
</div>
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  inc
</button>
<div>
  caught render: sync
</div>
<div>
  caught update 1: click
</div>
```
## Change
```
INSERT: div:nth-of-type(2) > :is(::text("caught "), ::text("update 1"), ::text(": "), ::text("click"))
REMOVE: div:nth-of-type(2)::text@17 + ::text("clicks ")
REMOVE: div:nth-of-type(2)::text@17 + ::text("0")
UPDATE: div:nth-of-type(2)::text@17 "" => "click"
```
