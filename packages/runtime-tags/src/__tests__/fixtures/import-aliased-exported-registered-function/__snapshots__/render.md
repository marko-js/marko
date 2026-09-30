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

# Update `click("button")`
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

# Update `click("button", 1)`
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
