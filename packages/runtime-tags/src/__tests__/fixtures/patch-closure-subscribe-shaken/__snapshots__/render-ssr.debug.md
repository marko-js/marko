# Render `{"$global":{"data":{"player":{"items":[{"id":"a","parts":["x","y"]},{"id":"b","parts":["y"]}],"owned":["b"],"bank":{"x":0,"y":1},"rate":1}},"serializedGlobals":["data"]}}`
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
<span
  class="short"
>
  y 1
</span>
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  1
</button>
<button>
  drop
</button>
<span
  class="short"
>
  x 0
</span>
<span
  class=""
>
  y 1
</span>
```
## Change
```
UPDATE: button:nth-of-type(1)::text "0" => "1"
UPDATE: span:nth-of-type(2)[class] "short" => ""
```
