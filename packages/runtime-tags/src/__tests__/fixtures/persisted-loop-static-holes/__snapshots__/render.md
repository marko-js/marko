# Render `{"show":false,"note":"a"}`
```html
<ul>
  <li>
    1:a
  </li>
  <li>
    2:a
  </li>
</ul>
<ol>
  <li>
    1
  </li>
  <li>
    2
  </li>
</ol>
```

# Update `{"show":true,"note":"b"}`
```html
<ul>
  <li>
    1:b
  </li>
  <li>
    2:b
  </li>
</ul>
<ol>
  <li>
    1
  </li>
  <li>
    2
  </li>
</ol>
<div>
  <p>
    1:b
  </p>
  <p>
    2:b
  </p>
</div>
```
## Change
```
UPDATE: ul > li:nth-of-type(1)::text@0 "1" => "1"
UPDATE: ul > li:nth-of-type(1)::text@2 "a" => "b"
UPDATE: ul > li:nth-of-type(2)::text@0 "2" => "2"
UPDATE: ul > li:nth-of-type(2)::text@2 "a" => "b"
UPDATE: ol > li:nth-of-type(1)::text "1" => "1"
UPDATE: ol > li:nth-of-type(2)::text "2" => "2"
INSERT: ol + div
INSERT: div > p
INSERT: div > p:nth-of-type(1) + p
```

# Update `{"show":true,"note":"c"}`
```html
<ul>
  <li>
    1:c
  </li>
  <li>
    2:c
  </li>
</ul>
<ol>
  <li>
    1
  </li>
  <li>
    2
  </li>
</ol>
<div>
  <p>
    1:c
  </p>
  <p>
    2:c
  </p>
</div>
```
## Change
```
UPDATE: ul > li:nth-of-type(1)::text@0 "1" => "1"
UPDATE: ul > li:nth-of-type(1)::text@2 "b" => "c"
UPDATE: ul > li:nth-of-type(2)::text@0 "2" => "2"
UPDATE: ul > li:nth-of-type(2)::text@2 "b" => "c"
UPDATE: ol > li:nth-of-type(1)::text "1" => "1"
UPDATE: ol > li:nth-of-type(2)::text "2" => "2"
UPDATE: div > p:nth-of-type(1)::text@0 "1" => "1"
UPDATE: div > p:nth-of-type(1)::text@2 "b" => "c"
UPDATE: div > p:nth-of-type(2)::text@0 "2" => "2"
UPDATE: div > p:nth-of-type(2)::text@2 "b" => "c"
```

# Update `{"show":false,"note":"d"}`
```html
<ul>
  <li>
    1:d
  </li>
  <li>
    2:d
  </li>
</ul>
<ol>
  <li>
    1
  </li>
  <li>
    2
  </li>
</ol>
```
## Change
```
UPDATE: ul > li:nth-of-type(1)::text@0 "1" => "1"
UPDATE: ul > li:nth-of-type(1)::text@2 "c" => "d"
UPDATE: ul > li:nth-of-type(2)::text@0 "2" => "2"
UPDATE: ul > li:nth-of-type(2)::text@2 "c" => "d"
UPDATE: ol > li:nth-of-type(1)::text "1" => "1"
UPDATE: ol > li:nth-of-type(2)::text "2" => "2"
REMOVE: ol + div
```

# Update `{"show":true,"note":"e"}`
```html
<ul>
  <li>
    1:e
  </li>
  <li>
    2:e
  </li>
</ul>
<ol>
  <li>
    1
  </li>
  <li>
    2
  </li>
</ol>
<div>
  <p>
    1:e
  </p>
  <p>
    2:e
  </p>
</div>
```
## Change
```
UPDATE: ul > li:nth-of-type(1)::text@0 "1" => "1"
UPDATE: ul > li:nth-of-type(1)::text@2 "d" => "e"
UPDATE: ul > li:nth-of-type(2)::text@0 "2" => "2"
UPDATE: ul > li:nth-of-type(2)::text@2 "d" => "e"
UPDATE: ol > li:nth-of-type(1)::text "1" => "1"
UPDATE: ol > li:nth-of-type(2)::text "2" => "2"
INSERT: ol + div
INSERT: div > p
INSERT: div > p:nth-of-type(1) + p
```
