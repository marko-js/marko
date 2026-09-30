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
  <p>
    Outer
  </p>
  <div>
    <p>
      Middle
    </p>
    <p>
      Inner
    </p>
  </div>
</div>
```

# Update `click("button#inner")`
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
  <p>
    Outer
  </p>
  <div>
    <p>
      Middle
    </p>
  </div>
</div>
```
## Change
```
REMOVE: div > div > p + p
REMOVE: pre::text("\nOuter mounted\nMiddle mounted\nInner mounted")
INSERT: pre::text("\nOuter mounted\nMiddle mounted\nInner mounted\nInner destroyed")
```

# Update `click("button#middle")`
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
  <p>
    Outer
  </p>
</div>
```
## Change
```
REMOVE: div > p + div
REMOVE: pre::text("\nOuter mounted\nMiddle mounted\nInner mounted\nInner destroyed")
INSERT: pre::text("\nOuter mounted\nMiddle mounted\nInner mounted\nInner destroyed\nMiddle destroyed")
```

# Update `click("button#outer")`
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

# Update `click("button#inner")`

# Update `click("button#middle")`

# Update `click("button#outer")`
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
  <p>
    Outer
  </p>
  <div>
    <p>
      Middle
    </p>
    <p>
      Inner
    </p>
  </div>
</div>
```
## Change
```
INSERT: pre + div
INSERT: div > p + div
UPDATE: div > p::text " " => "Outer"
INSERT: div > div > p:nth-of-type(1) + p
UPDATE: div > div > p:nth-of-type(1)::text " " => "Middle"
UPDATE: div > div > p:nth-of-type(2)::text " " => "Inner"
REMOVE: pre::text("\nOuter mounted\nMiddle mounted\nInner mounted\nInner destroyed\nMiddle destroyed\nOuter destroyed")
INSERT: pre::text("\nOuter mounted\nMiddle mounted\nInner mounted\nInner destroyed\nMiddle destroyed\nOuter destroyed\nOuter mounted")
REMOVE: pre::text("\nOuter mounted\nMiddle mounted\nInner mounted\nInner destroyed\nMiddle destroyed\nOuter destroyed\nOuter mounted")
INSERT: pre::text("\nOuter mounted\nMiddle mounted\nInner mounted\nInner destroyed\nMiddle destroyed\nOuter destroyed\nOuter mounted\nMiddle mounted")
REMOVE: pre::text("\nOuter mounted\nMiddle mounted\nInner mounted\nInner destroyed\nMiddle destroyed\nOuter destroyed\nOuter mounted\nMiddle mounted")
INSERT: pre::text("\nOuter mounted\nMiddle mounted\nInner mounted\nInner destroyed\nMiddle destroyed\nOuter destroyed\nOuter mounted\nMiddle mounted\nInner mounted")
```

# Update `click("button#outer")`
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
