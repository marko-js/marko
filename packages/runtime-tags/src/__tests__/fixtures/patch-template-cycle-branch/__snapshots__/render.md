# Render `{"show":false,"node":{"name":"a1","kid":{"name":"b1","kid":{"name":"c1"}}}}`
```html
<ul />
```

# Update `{"show":true,"node":{"name":"a2","kid":{"name":"b2","kid":{"name":"c2"}}}}`
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
```

# Update `{"show":true,"node":{"name":"a3","kid":{"name":"b3","kid":{"name":"c3"}}}}`
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
