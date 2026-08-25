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
