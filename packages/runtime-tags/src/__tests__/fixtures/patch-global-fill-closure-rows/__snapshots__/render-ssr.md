# Render `{"$global":{"data":{"player":{"owned":["b"],"bank":{"x":0,"y":1},"rate":1}},"serializedGlobals":["data"]}}`
```html
<button>
  0
</button>
<button>
  drop
</button>
<span
  class="short"
>
  x 0
</span>
<em>
  2
</em>
<span
  class="short"
>
  y 1
</span>
<em>
  2
</em>
```

# Update `{"$global":{"data":{"player":{"owned":["b"],"bank":{"x":0,"y":1},"rate":3}},"serializedGlobals":["data"]}}`
```html
<button>
  0
</button>
<button>
  drop
</button>
<span
  class="short"
>
  x 0
</span>
<em>
  6
</em>
<span
  class="short"
>
  y 1
</span>
<em>
  6
</em>
```
## Change
```
UPDATE: em:nth-of-type(1)::text "2" => "6"
UPDATE: em:nth-of-type(2)::text "2" => "6"
```
