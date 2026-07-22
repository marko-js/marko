# Render `{"$global":{"persisted":true,"params":{"pick":"home","tag":""},"serializedGlobals":{"params":true}}}`
```html
<button
  class="bump"
>
  0
</button>
<span
  class="active"
>
  home
</span>
<span>
  tools
</span>
<span>
  toys
</span>
<em>
  pick:home
</em>
```

# Update
```js
document.querySelector("button.bump").click();
```
```html
<button
  class="bump"
>
  1
</button>
<span
  class="active"
>
  home
</span>
<span>
  tools
</span>
<span>
  toys
</span>
<em>
  pick:home
</em>
```
## Change
```
UPDATE: .bump::text "0" => "1"
```

# Update `{"$global":{"persisted":true,"params":{"pick":"toys","tag":"featured"},"serializedGlobals":{"params":true}}}`
```html
<button
  class="bump"
>
  1
</button>
<span>
  home
</span>
<span>
  tools
</span>
<span
  class="active"
>
  toys
</span>
<em
  class="hot"
>
  pick:toys
</em>
```
## Change
```
INSERT: .bump + :is(span, span, .active)
REMOVE: .active + .active
REMOVE: .active + span
REMOVE: .active + span
UPDATE: .hot::text@5 "home" => "toys"
UPDATE: .hot[class] null => "hot"
```

# Update
```js
document.querySelector("button.bump").click();
```
```html
<button
  class="bump"
>
  2
</button>
<span>
  home
</span>
<span>
  tools
</span>
<span
  class="active"
>
  toys
</span>
<em
  class="hot"
>
  pick:toys
</em>
```
## Change
```
UPDATE: .bump::text "1" => "2"
```

# Update `{"$global":{"persisted":true,"params":{"pick":"toys","tag":""},"serializedGlobals":{"params":true}}}`
```html
<button
  class="bump"
>
  2
</button>
<span>
  home
</span>
<span>
  tools
</span>
<span
  class="active"
>
  toys
</span>
<em>
  pick:toys
</em>
```
## Change
```
INSERT: .bump + :is(span, span, .active)
REMOVE: .active + span
REMOVE: .active + span
REMOVE: .active + .active
UPDATE: em[class] "hot" => null
```
