# Render
```html
<button>
  shout
</button>
<button>
  whisper
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
  shout
</button>
<button>
  whisper
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
  shout
</button>
<button>
  whisper
</button>
<div>
  hello!
</div>
```
## Change
```
UPDATE: div::text "HELLO!" => "hello!"
```
