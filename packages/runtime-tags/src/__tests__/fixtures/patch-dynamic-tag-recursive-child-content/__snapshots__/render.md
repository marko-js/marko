# Render `{"deep":false,"node":{"name":"SHOWN_1","secret":"SECRET_1","kid":{"name":"SHOWN_kid1","secret":"SECRET_kid1"}}}`
```html
<ul>
  <b>
    SHOWN_1
  </b>
</ul>
```

# Update `{"deep":true,"node":{"name":"SHOWN_2","secret":"SECRET_2","kid":{"name":"SHOWN_kid2","secret":"SECRET_kid2"}}}`
```html
<ul>
  <li>
    SHOWN_2
    <ul>
      <li>
        SHOWN_kid2
      </li>
    </ul>
  </li>
</ul>
```
## Change
```
INSERT: ul > li
REMOVE: ul > li + b
UPDATE: ul > li::text "" => "SHOWN_2"
INSERT: ul > li::text + ul
```

# Update `{"deep":true,"node":{"name":"SHOWN_3","secret":"SECRET_3"}}`
```html
<ul>
  <li>
    SHOWN_3
  </li>
</ul>
```
## Change
```
UPDATE: ul > li::text "SHOWN_2" => "SHOWN_3"
REMOVE: ul > li::text + ul
```

# Update `{"deep":true,"node":{"name":"SHOWN_4","secret":"SECRET_4","kid":{"name":"SHOWN_kid4","secret":"SECRET_kid4"}}}`
```html
<ul>
  <li>
    SHOWN_4
    <ul>
      <li>
        SHOWN_kid4
      </li>
    </ul>
  </li>
</ul>
```
## Change
```
UPDATE: ul > li::text "SHOWN_3" => "SHOWN_4"
INSERT: ul > li::text + ul
```
