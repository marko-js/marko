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
container.querySelector("button.bump").click();
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

# Update `{"$global":{"persisted":true,"params":{"pick":"toys","tag":"featured"},"serializedGlobals":{"params":true}}}`

# Update
```js
container.querySelector("button.bump").click();
```
```html
<button
  class="bump"
>
  2
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
UPDATE: .bump::text "1" => "2"
```

# Update `{"$global":{"persisted":true,"params":{"pick":"toys","tag":""},"serializedGlobals":{"params":true}}}`

# Update `{"$global":{"persisted":true,"params":{"pick":"toys","tag":""},"serializedGlobals":{"params":true}}}`
