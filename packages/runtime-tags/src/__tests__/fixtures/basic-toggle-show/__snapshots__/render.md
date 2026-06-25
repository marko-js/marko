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
container.querySelector("button").click();
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
container.querySelector("button").click();
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
container.querySelector("button").click();
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
