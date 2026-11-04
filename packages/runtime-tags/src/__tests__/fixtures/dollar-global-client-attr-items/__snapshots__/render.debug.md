# Render `{"$global":{"on":true,"color":"red","serializedGlobals":["on","color"]}}`
```html
<b
  class="on"
  style="color:red;order:0"
>
  0
</b>
<i
  class="on"
/>
<u
  class="all"
/>
<button>
  inc
</button>
```

# Update
```js
document.querySelector("button").click();
```
```html
<b
  class="on"
  style="color:red;order:0"
>
  1
</b>
<i
  class="on set"
/>
<u
  class="all set"
/>
<button>
  inc
</button>
```
## Change
```
UPDATE: b::text "0" => "1"
UPDATE: .on.set[class] "on" => "on set"
UPDATE: .all.set[class] "all" => "all set"
```

# Update
```js
document.querySelector("button").click();
```
```html
<b
  class="on big"
  style="color:red;order:0"
>
  2
</b>
<i
  class="on set"
/>
<u
  class="all set"
/>
<button>
  inc
</button>
```
## Change
```
UPDATE: .on.big[class] "on" => "on big"
UPDATE: .on.big::text "1" => "2"
```
