# Render
```html
<div>
  <span>
    1:0
  </span>
  <span>
    2:0
  </span>
  <span>
    3:0
  </span>
</div>
<button
  id="both"
>
  both
</button>
<button
  id="count"
>
  count
</button>
```

# Update
```js
// count and items change in the same batch: reorder + insert + remove
container.querySelector("#both").click();
```
```html
<div>
  <span>
    4:1
  </span>
  <span>
    2:1
  </span>
  <span>
    1:1
  </span>
</div>
<button
  id="both"
>
  both
</button>
<button
  id="count"
>
  count
</button>
```
## Change
```
REMOVE: div > span:nth-of-type(2) + span
REMOVE: div > span:nth-of-type(3) + span
INSERT: div > span
INSERT: div > span
UPDATE: div > span:nth-of-type(3)::text@2 "0" => "1"
UPDATE: div > span:nth-of-type(2)::text@2 "0" => "1"
UPDATE: div > span:nth-of-type(1)::text@2 "" => "1"
```

# Update
```js
container.querySelector("#count").click();
```
```html
<div>
  <span>
    4:2
  </span>
  <span>
    2:2
  </span>
  <span>
    1:2
  </span>
</div>
<button
  id="both"
>
  both
</button>
<button
  id="count"
>
  count
</button>
```
## Change
```
UPDATE: div > span:nth-of-type(1)::text@2 "1" => "2"
UPDATE: div > span:nth-of-type(2)::text@2 "1" => "2"
UPDATE: div > span:nth-of-type(3)::text@2 "1" => "2"
```
