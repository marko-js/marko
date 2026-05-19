# Render
```html
<button
  id="outer"
>
  Toggle Outer
</button>
<button
  id="middle"
>
  Toggle Middle
</button>
<button
  id="inner"
>
  Toggle Inner
</button>
<pre>
  
Outer mounted
Middle mounted
Inner mounted
</pre>
<div>
  <div>
    Outer a
  </div>
  <span>
    Outer a
  </span>
  <p>
    Outer a
  </p>
  <div>
    <div>
      Middle a
    </div>
    <span>
      Middle a
    </span>
    <p>
      Middle a
    </p>
    <div>
      Inner a
    </div>
    <span>
      Inner a
    </span>
    <p>
      Inner a
    </p>
  </div>
</div>
```

# Update
```js
container.querySelector("button#inner").click();
```
```html
<button
  id="outer"
>
  Toggle Outer
</button>
<button
  id="middle"
>
  Toggle Middle
</button>
<button
  id="inner"
>
  Toggle Inner
</button>
<pre>
  
Outer mounted
Middle mounted
Inner mounted
Inner destroyed
</pre>
<div>
  <div>
    Outer a
  </div>
  <span>
    Outer a
  </span>
  <p>
    Outer a
  </p>
  <div>
    <div>
      Middle a
    </div>
    <span>
      Middle a
    </span>
    <p>
      Middle a
    </p>
  </div>
</div>
```
## Change
```
REMOVE: div > div:nth-of-type(2) > p + div
REMOVE: div > div:nth-of-type(2) > p + span
REMOVE: div > div:nth-of-type(2) > p + p
REMOVE: pre::text("\nOuter mounted\nMiddle mounted\nInner mounted")
INSERT: pre::text("\nOuter mounted\nMiddle mounted\nInner mounted\nInner destroyed")
```

# Update
```js
container.querySelector("button#middle").click();
```
```html
<button
  id="outer"
>
  Toggle Outer
</button>
<button
  id="middle"
>
  Toggle Middle
</button>
<button
  id="inner"
>
  Toggle Inner
</button>
<pre>
  
Outer mounted
Middle mounted
Inner mounted
Inner destroyed
Middle destroyed
</pre>
<div>
  <div>
    Outer a
  </div>
  <span>
    Outer a
  </span>
  <p>
    Outer a
  </p>
</div>
```
## Change
```
REMOVE: div > p + div
REMOVE: pre::text("\nOuter mounted\nMiddle mounted\nInner mounted\nInner destroyed")
INSERT: pre::text("\nOuter mounted\nMiddle mounted\nInner mounted\nInner destroyed\nMiddle destroyed")
```

# Update
```js
container.querySelector("button#outer").click();
```
```html
<button
  id="outer"
>
  Toggle Outer
</button>
<button
  id="middle"
>
  Toggle Middle
</button>
<button
  id="inner"
>
  Toggle Inner
</button>
<pre>
  
Outer mounted
Middle mounted
Inner mounted
Inner destroyed
Middle destroyed
Outer destroyed
</pre>
```
## Change
```
REMOVE: pre + div
REMOVE: pre::text("\nOuter mounted\nMiddle mounted\nInner mounted\nInner destroyed\nMiddle destroyed")
INSERT: pre::text("\nOuter mounted\nMiddle mounted\nInner mounted\nInner destroyed\nMiddle destroyed\nOuter destroyed")
```

# Update
```js
container.querySelector("button#inner").click();
```
```html
<button
  id="outer"
>
  Toggle Outer
</button>
<button
  id="middle"
>
  Toggle Middle
</button>
<button
  id="inner"
>
  Toggle Inner
</button>
<pre>
  
Outer mounted
Middle mounted
Inner mounted
Inner destroyed
Middle destroyed
Outer destroyed
</pre>
```

# Update
```js
container.querySelector("button#middle").click();
```
```html
<button
  id="outer"
>
  Toggle Outer
</button>
<button
  id="middle"
>
  Toggle Middle
</button>
<button
  id="inner"
>
  Toggle Inner
</button>
<pre>
  
Outer mounted
Middle mounted
Inner mounted
Inner destroyed
Middle destroyed
Outer destroyed
</pre>
```

# Update
```js
container.querySelector("button#outer").click();
```
```html
<button
  id="outer"
>
  Toggle Outer
</button>
<button
  id="middle"
>
  Toggle Middle
</button>
<button
  id="inner"
>
  Toggle Inner
</button>
<pre>
  
Outer mounted
Middle mounted
Inner mounted
Inner destroyed
Middle destroyed
Outer destroyed
Outer mounted
Middle mounted
Inner mounted
</pre>
<div>
  <div>
    Outer a
  </div>
  <span>
    Outer a
  </span>
  <p>
    Outer a
  </p>
  <div>
    <div>
      Middle a
    </div>
    <span>
      Middle a
    </span>
    <p>
      Middle a
    </p>
    <div>
      Inner a
    </div>
    <span>
      Inner a
    </span>
    <p>
      Inner a
    </p>
  </div>
</div>
```
## Change
```
INSERT: pre + div
INSERT: div > p + div
UPDATE: div > div:nth-of-type(1)::text@0 "" => "Outer"
UPDATE: div > span::text@0 "" => "Outer"
UPDATE: div > p::text@0 "" => "Outer"
INSERT: div > div:nth-of-type(2) > p:nth-of-type(1) + :is(div, span, p)
UPDATE: div > div:nth-of-type(2) > div:nth-of-type(1)::text@0 "" => "Middle"
UPDATE: div > div:nth-of-type(2) > span:nth-of-type(1)::text@0 "" => "Middle"
UPDATE: div > div:nth-of-type(2) > p:nth-of-type(1)::text@0 "" => "Middle"
UPDATE: div > div:nth-of-type(2) > div:nth-of-type(2)::text@0 "" => "Inner"
UPDATE: div > div:nth-of-type(2) > span:nth-of-type(2)::text@0 "" => "Inner"
UPDATE: div > div:nth-of-type(2) > p:nth-of-type(2)::text@0 "" => "Inner"
REMOVE: pre::text("\nOuter mounted\nMiddle mounted\nInner mounted\nInner destroyed\nMiddle destroyed\nOuter destroyed")
INSERT: pre::text("\nOuter mounted\nMiddle mounted\nInner mounted\nInner destroyed\nMiddle destroyed\nOuter destroyed\nOuter mounted")
REMOVE: pre::text("\nOuter mounted\nMiddle mounted\nInner mounted\nInner destroyed\nMiddle destroyed\nOuter destroyed\nOuter mounted")
INSERT: pre::text("\nOuter mounted\nMiddle mounted\nInner mounted\nInner destroyed\nMiddle destroyed\nOuter destroyed\nOuter mounted\nMiddle mounted")
REMOVE: pre::text("\nOuter mounted\nMiddle mounted\nInner mounted\nInner destroyed\nMiddle destroyed\nOuter destroyed\nOuter mounted\nMiddle mounted")
INSERT: pre::text("\nOuter mounted\nMiddle mounted\nInner mounted\nInner destroyed\nMiddle destroyed\nOuter destroyed\nOuter mounted\nMiddle mounted\nInner mounted")
```

# Update
```js
container.querySelector("button#outer").click();
```
```html
<button
  id="outer"
>
  Toggle Outer
</button>
<button
  id="middle"
>
  Toggle Middle
</button>
<button
  id="inner"
>
  Toggle Inner
</button>
<pre>
  
Outer mounted
Middle mounted
Inner mounted
Inner destroyed
Middle destroyed
Outer destroyed
Outer mounted
Middle mounted
Inner mounted
Inner destroyed
Middle destroyed
Outer destroyed
</pre>
```
## Change
```
REMOVE: pre + div
REMOVE: pre::text("\nOuter mounted\nMiddle mounted\nInner mounted\nInner destroyed\nMiddle destroyed\nOuter destroyed\nOuter mounted\nMiddle mounted\nInner mounted")
INSERT: pre::text("\nOuter mounted\nMiddle mounted\nInner mounted\nInner destroyed\nMiddle destroyed\nOuter destroyed\nOuter mounted\nMiddle mounted\nInner mounted\nInner destroyed")
REMOVE: pre::text("\nOuter mounted\nMiddle mounted\nInner mounted\nInner destroyed\nMiddle destroyed\nOuter destroyed\nOuter mounted\nMiddle mounted\nInner mounted\nInner destroyed")
INSERT: pre::text("\nOuter mounted\nMiddle mounted\nInner mounted\nInner destroyed\nMiddle destroyed\nOuter destroyed\nOuter mounted\nMiddle mounted\nInner mounted\nInner destroyed\nMiddle destroyed")
REMOVE: pre::text("\nOuter mounted\nMiddle mounted\nInner mounted\nInner destroyed\nMiddle destroyed\nOuter destroyed\nOuter mounted\nMiddle mounted\nInner mounted\nInner destroyed\nMiddle destroyed")
INSERT: pre::text("\nOuter mounted\nMiddle mounted\nInner mounted\nInner destroyed\nMiddle destroyed\nOuter destroyed\nOuter mounted\nMiddle mounted\nInner mounted\nInner destroyed\nMiddle destroyed\nOuter destroyed")
```
