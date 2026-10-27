# Render `{"deep":false,"node":{"name":"a1","secret":"SECRET_1","kid":{"name":"b1","secret":"SECRET_b1","kid":{"name":"c1","secret":"SECRET_c1"}}}}`
```html
<ul>
  <b>
    a1
  </b>
</ul>
```

# Update `{"deep":true,"node":{"name":"a2","secret":"SECRET_2","kid":{"name":"b2","secret":"SECRET_b2","kid":{"name":"c2","secret":"SECRET_c2"}}}}`
```html
<ul>
  <li>
    a2
    <ul>
      <div>
        b2
        <ul>
          <li>
            c2
          </li>
        </ul>
      </div>
    </ul>
  </li>
</ul>
```
## Change
```
INSERT: ul > li
REMOVE: ul > li + b
UPDATE: ul > li::text "" => "a2"
INSERT: ul > li::text + ul
```

# Update `{"deep":true,"node":{"name":"a3","secret":"SECRET_3","kid":{"name":"b3","secret":"SECRET_b3","kid":{"name":"c3","secret":"SECRET_c3"}}}}`
```html
<ul>
  <li>
    a3
    <ul>
      <div>
        b3
        <ul>
          <li>
            c3
          </li>
        </ul>
      </div>
    </ul>
  </li>
</ul>
```
## Change
```
UPDATE: ul > li::text "a2" => "a3"
UPDATE: ul > li > ul > div::text "b2" => "b3"
UPDATE: ul > li > ul > div > ul > li::text "c2" => "c3"
```
