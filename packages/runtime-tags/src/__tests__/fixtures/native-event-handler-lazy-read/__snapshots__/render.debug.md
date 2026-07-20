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

# Update
```js
document.querySelectorAll("button")[1].click();
```
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

# Update
```js
document.querySelectorAll("button")[1].click();
```
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

# Update
```js
document.querySelectorAll("button")[0].click();
```
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
