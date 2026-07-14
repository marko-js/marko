# Render `{"$global":{"persisted":true,"show":false,"info":{"a":"x","b":"y"},"settings":[{"prefix":"P"}],"serializedGlobals":{"show":true,"info":true,"settings":true}}}`
```html
<button>
  clicked 0
</button>
<p
  class="empty"
>
  hidden
</p>
```

# Update
```js
container.querySelector("button:not(.bump)").click();
```
```html
<button>
  clicked 1
</button>
<p
  class="empty"
>
  hidden
</p>
```
## Change
```
UPDATE: button::text@8 "0" => "1"
```

# Update `{"$global":{"persisted":true,"show":true,"info":{"a":"n","b":"m"},"settings":[{"prefix":"Q"}],"serializedGlobals":{"show":true,"info":true,"settings":true}}}`
```html
<button>
  clicked 1
</button>
<p
  class="pair"
>
  n-m
</p>
<button
  class="bump"
>
  bump
</button>
<p
  class="combo"
>
  Q:n
</p>
```
## Change
```
INSERT: .pair, .bump, .combo
REMOVE: button:nth-of-type(1) + p
```

# Update
```js
container.querySelector("button.bump").click();
```
```html
<button>
  clicked 1
</button>
<p
  class="pair"
>
  undefined!
</p>
<button
  class="bump"
>
  bump
</button>
<p
  class="combo"
>
  Q:n
</p>
```
## Change
```
UPDATE: .pair::text "n-m" => "undefined!"
```

# Update
```js
container.querySelector("button:not(.bump)").click();
```
```html
<button>
  clicked 2
</button>
<p
  class="pair"
>
  undefined!
</p>
<button
  class="bump"
>
  bump
</button>
<p
  class="combo"
>
  Q:n
</p>
```
## Change
```
UPDATE: button:nth-of-type(1)::text@8 "1" => "2"
```
