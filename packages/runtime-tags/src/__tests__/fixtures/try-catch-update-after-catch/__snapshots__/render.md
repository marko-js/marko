# Render
```html
<button>
  inc
</button>
<div>
  body 0
</div>
<div>
  ok
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
<div />
<div>
  inner 1 caught body 1
</div>
```
## Change
```
REMOVE: div:nth-of-type(1)::text("body 0")
INSERT: div:nth-of-type(2) > :is(::text("inner 1"), ::text(" caught "), ::text("body 1"))
REMOVE: div:nth-of-type(2)::text@15 + ::text("ok")
UPDATE: div:nth-of-type(2)::text@15 "" => "body 1"
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  inc
</button>
<div />
<div>
  outer caught from catch
</div>
```
## Change
```
INSERT: div:nth-of-type(2) > :is(::text("outer caught "), ::text("from catch"))
REMOVE: div:nth-of-type(2)::text@13 + ::text("inner 1")
REMOVE: div:nth-of-type(2)::text@13 + ::text(" caught ")
REMOVE: div:nth-of-type(2)::text@13 + ::text("body 1")
UPDATE: div:nth-of-type(2)::text@13 "" => "from catch"
```
