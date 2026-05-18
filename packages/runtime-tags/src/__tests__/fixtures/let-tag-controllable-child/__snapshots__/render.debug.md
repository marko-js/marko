# Render
```html
<button>
  1|1
</button>
<button>
  1|1
</button>
<button>
  1|1
</button>
source=1
```

# Update
```js
container.querySelectorAll("button").forEach(item => item.click());
```
```html
<button>
  2|2
</button>
<button>
  2|2
</button>
<button>
  2|2
</button>
source=2
```
## Change
```
UPDATE: button:nth-of-type(1)::text@0 "1" => "2"
UPDATE: button:nth-of-type(2)::text@0 "1" => "2"
UPDATE: button:nth-of-type(3)::text@0 "1" => "2"
UPDATE: button:nth-of-type(2)::text@2 "1" => "2"
UPDATE: ::text@7 "1" => "2"
UPDATE: button:nth-of-type(1)::text@2 "1" => "2"
UPDATE: button:nth-of-type(3)::text@2 "1" => "2"
```

# Update
```js
container.querySelectorAll("button").forEach(item => item.click());
```
```html
<button>
  3|3
</button>
<button>
  3|3
</button>
<button>
  3|3
</button>
source=3
```
## Change
```
UPDATE: button:nth-of-type(1)::text@0 "2" => "3"
UPDATE: button:nth-of-type(2)::text@0 "2" => "3"
UPDATE: button:nth-of-type(3)::text@0 "2" => "3"
UPDATE: button:nth-of-type(2)::text@2 "2" => "3"
UPDATE: ::text@7 "2" => "3"
UPDATE: button:nth-of-type(1)::text@2 "2" => "3"
UPDATE: button:nth-of-type(3)::text@2 "2" => "3"
```

# Update
```js
container.querySelectorAll("button").forEach(item => item.click());
```
```html
<button>
  4|4
</button>
<button>
  4|4
</button>
<button>
  4|4
</button>
source=4
```
## Change
```
UPDATE: button:nth-of-type(1)::text@0 "3" => "4"
UPDATE: button:nth-of-type(2)::text@0 "3" => "4"
UPDATE: button:nth-of-type(3)::text@0 "3" => "4"
UPDATE: button:nth-of-type(2)::text@2 "3" => "4"
UPDATE: ::text@7 "3" => "4"
UPDATE: button:nth-of-type(1)::text@2 "3" => "4"
UPDATE: button:nth-of-type(3)::text@2 "3" => "4"
```
