# Render

# Update

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
INSERT: div:nth-of-type(1)::text("Resolved A: A Value")
INSERT: ::text + div
INSERT: div:nth-of-type(2)::text("Resolved C: C Value")
INSERT: div:nth-of-type(2) + button
INSERT: button::text("Before")
INSERT: div:nth-of-type(1) + ::text("Rejected B")
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
