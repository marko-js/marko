# Render
```html
<button>
  1 
</button>
<button>
  sync
</button>
```

# Update
```js
document.querySelectorAll("button")[0].click();
await wait(30);
```
```html
<button>
  5 
</button>
<button>
  sync
</button>
```
## Change
```
UPDATE: button:nth-of-type(1)::text@0 "1" => "5"
```

# Update
```js
wait(100);
```
```html
<button>
  1 failed
</button>
<button>
  sync
</button>
```
## Change
```
UPDATE: button:nth-of-type(1)::text@0 "5" => "1"
UPDATE: button:nth-of-type(1)::text@2 "" => "failed"
```

# Update
```js
document.querySelectorAll("button")[1].click();
await wait(100);
```
```html
<button>
  1 failed now
</button>
<button>
  sync
</button>
```
## Change
```
UPDATE: button:nth-of-type(1)::text@2 "failed" => "failed now"
```
