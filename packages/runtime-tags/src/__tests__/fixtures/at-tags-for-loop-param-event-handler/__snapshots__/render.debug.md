# Render
```html
<button>
  Click a
</button>
<button>
  Click b
</button>
<div />
```

# Update
```js
document.querySelectorAll("button")[0].click();
```
```html
<button>
  Click a
</button>
<button>
  Click b
</button>
<div>
  a
</div>
```
## Change
```
UPDATE: div::text "" => "a"
```

# Update
```js
document.querySelectorAll("button")[1].click();
```
```html
<button>
  Click a
</button>
<button>
  Click b
</button>
<div>
  ab
</div>
```
## Change
```
UPDATE: div::text "a" => "ab"
```
