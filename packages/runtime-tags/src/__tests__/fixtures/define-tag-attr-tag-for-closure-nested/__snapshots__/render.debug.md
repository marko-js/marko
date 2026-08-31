# Render
```html
<button>
  collapse
</button>
<div>
  person: alice
</div>
<div>
  person: bob
</div>
<div>
  person: carol
</div>
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  expand
</button>
```
## Change
```
UPDATE: button::text "collapse" => "expand"
REMOVE: button + div
REMOVE: button + div
REMOVE: button + div
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  collapse
</button>
<div>
  person: alice
</div>
<div>
  person: bob
</div>
<div>
  person: carol
</div>
```
## Change
```
UPDATE: button::text "expand" => "collapse"
INSERT: button + div
INSERT: div:nth-of-type(1) + div
INSERT: div:nth-of-type(2) + div
INSERT: div:nth-of-type(1) > :is(::text("person: "), ::text("alice"))
UPDATE: div:nth-of-type(1)::text@8 "" => "alice"
INSERT: div:nth-of-type(2) > :is(::text("person: "), ::text("bob"))
UPDATE: div:nth-of-type(2)::text@8 "" => "bob"
INSERT: div:nth-of-type(3) > :is(::text("person: "), ::text("carol"))
UPDATE: div:nth-of-type(3)::text@8 "" => "carol"
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  expand
</button>
```
## Change
```
UPDATE: button::text "collapse" => "expand"
REMOVE: button + div
REMOVE: button + div
REMOVE: button + div
```
