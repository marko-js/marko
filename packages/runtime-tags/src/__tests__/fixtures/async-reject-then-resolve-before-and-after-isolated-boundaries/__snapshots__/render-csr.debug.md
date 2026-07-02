# Render

# Update
```html
Rejected B
```
## Change
```
INSERT: ::text("Rejected B")
```

# Update
```html
<div>
  Resolved A: A Value
</div>
Rejected B
<div>
  Resolved C: C Value
</div>
<button>
  Before
</button>
```
## Change
```
INSERT: div
INSERT: ::text + :is(div, button)
UPDATE: div:nth-of-type(1)::text@12 "" => "A Value"
UPDATE: div:nth-of-type(2)::text@12 "" => "C Value"
```

# Update
```js
container.querySelector("button").click();
```
```html
<div>
  Resolved A: A Value
</div>
Rejected B
<div>
  Resolved C: C Value
</div>
<button>
  After
</button>
```
## Change
```
REMOVE: button::text("Before")
INSERT: button::text("After")
```
