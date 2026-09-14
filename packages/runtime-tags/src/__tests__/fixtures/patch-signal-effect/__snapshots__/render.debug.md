# Render `{"label":"one","on":true}`
```html
<div
  data-v="one:0"
/>
<button>
  +
</button>
```

# Update `{"label":"two","on":true}`
```html
<div
  data-v="two:0"
/>
<button>
  +
</button>
```
## Change
```
UPDATE: div[data-v] "one:0" => "two:0"
```

# Update
```js
document.querySelector("button").click();
```
```html
<div
  data-v="two:1"
/>
<button>
  +
</button>
```
## Change
```
UPDATE: div[data-v] "two:0" => "two:1"
UPDATE: div[data-v] "gone" => "two:1"
UPDATE: div[data-v] "gone" => "two:1"
```

# Update `{"label":"three","on":false}`
```html
<div
  data-v="three:1"
/>
<button>
  +
</button>
```
## Change
```
UPDATE: div[data-v] "two:1" => "three:1"
```

# Update
```js
document.querySelector("button").click();
```
```html
<div
  data-v="three:2"
/>
<button>
  +
</button>
```
## Change
```
UPDATE: div[data-v] "three:1" => "three:2"
UPDATE: div[data-v] "gone" => "three:2"
UPDATE: div[data-v] "gone" => "three:2"
```

# Update `{"label":"four","on":true}`
```html
<div
  data-v="four:2"
/>
<button>
  +
</button>
```
## Change
```
UPDATE: div[data-v] "three:2" => "four:2"
```
