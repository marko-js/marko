# Render
```html
<div>
  Hello!
  <button>
    Toggle
  </button>
</div>
```

# Update
```js
document.querySelector("button").click();
```
```html
<div>
  <button>
    Toggle
  </button>
</div>
```
## Change
```
UPDATE: div::text "Hello!" => ""
```

# Update
```js
document.querySelector("button").click();
```
```html
<div>
  Hello!
  <button>
    Toggle
  </button>
</div>
```
## Change
```
UPDATE: div::text "" => "Hello!"
```

# Update
```js
document.querySelector("button").click();
```
```html
<div>
  <button>
    Toggle
  </button>
</div>
```
## Change
```
UPDATE: div::text "Hello!" => ""
```
