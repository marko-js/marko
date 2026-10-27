# Render
```html
<button>
  1
</button>
<button>
  source
</button>
```

# Update
```js
document.querySelectorAll("button")[0].click();
await wait(30);
document.querySelectorAll("button")[1].click();
await wait(30);
```
```html
<button>
  5
</button>
<button>
  source
</button>
```
## Change
```
UPDATE: button:nth-of-type(1)::text "1" => "5"
```

# Update
```js
wait(150);
```
```html
<button>
  2
</button>
<button>
  source
</button>
```
## Change
```
UPDATE: button:nth-of-type(1)::text "5" => "2"
```
