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
REMOVE: div
REMOVE: div
REMOVE: div
UPDATE: button::text "collapse" => "expand"
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
INSERT: div:nth-of-type(1), div:nth-of-type(2), div:nth-of-type(3)
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
REMOVE: div
REMOVE: div
REMOVE: div
UPDATE: button::text "collapse" => "expand"
```
