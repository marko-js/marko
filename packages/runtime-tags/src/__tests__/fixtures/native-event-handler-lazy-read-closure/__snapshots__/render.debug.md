# Render
```html
<button>
  pick 1
</button>
<button>
  pick 2
</button>
<button>
  pick 3
</button>
<button>
  inc
</button>
<div
  class="total"
>
  0
</div>
<div
  class="seen"
/>
```

# Update
```js
c.querySelectorAll("button")[3].click();
```
```html
<button>
  pick 1
</button>
<button>
  pick 2
</button>
<button>
  pick 3
</button>
<button>
  inc
</button>
<div
  class="total"
>
  1
</div>
<div
  class="seen"
/>
```
## Change
```
UPDATE: .total::text "0" => "1"
```

# Update
```js
c.querySelectorAll("button")[3].click();
```
```html
<button>
  pick 1
</button>
<button>
  pick 2
</button>
<button>
  pick 3
</button>
<button>
  inc
</button>
<div
  class="total"
>
  2
</div>
<div
  class="seen"
/>
```
## Change
```
UPDATE: .total::text "1" => "2"
```

# Update
```js
c.querySelectorAll("button")[1].click();
```
```html
<button>
  pick 1
</button>
<button>
  pick 2
</button>
<button>
  pick 3
</button>
<button>
  inc
</button>
<div
  class="total"
>
  2
</div>
<div
  class="seen"
>
  (2:2)
</div>
```
## Change
```
UPDATE: .seen::text "" => "(2:2)"
```
