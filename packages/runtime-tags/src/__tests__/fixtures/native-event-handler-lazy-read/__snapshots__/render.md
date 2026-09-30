# Render
```html
<button>
  show
</button>
<button>
  append
</button>
<div
  class="message"
>
  hello
</div>
<div
  class="log"
/>
```

# Update `click("button", 1)`
```html
<button>
  show
</button>
<button>
  append
</button>
<div
  class="message"
>
  hello!
</div>
<div
  class="log"
/>
```
## Change
```
UPDATE: .message::text "hello" => "hello!"
```

# Update `click("button", 1)`
```html
<button>
  show
</button>
<button>
  append
</button>
<div
  class="message"
>
  hello!!
</div>
<div
  class="log"
/>
```
## Change
```
UPDATE: .message::text "hello!" => "hello!!"
```

# Update `click("button")`
```html
<button>
  show
</button>
<button>
  append
</button>
<div
  class="message"
>
  hello!!
</div>
<div
  class="log"
>
  [hello!!]
</div>
```
## Change
```
UPDATE: .log::text "" => "[hello!!]"
```
