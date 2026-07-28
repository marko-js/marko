# Render
```html
<button>
  up
</button>
<button>
  down
</button>
<div>
  Hello
</div>
```

# Update
```js
document.querySelectorAll("button")[0].click();
```
```html
<button>
  up
</button>
<button>
  down
</button>
<div>
  HELLO!
</div>
```
## Change
```
UPDATE: div::text "Hello" => "HELLO!"
```

# Update
```js
document.querySelectorAll("button")[1].click();
```
```html
<button>
  up
</button>
<button>
  down
</button>
<div>
  hello!
</div>
```
## Change
```
UPDATE: div::text "HELLO!" => "hello!"
```
