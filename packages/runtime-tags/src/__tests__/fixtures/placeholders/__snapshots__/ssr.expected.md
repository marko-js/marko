# Write
```html
  replaced<span>replaced<div></div></span><div><div>a</div>replacedHello Text &lt;a/>replacedHello HTML <span>hi</span><script>
      'Hello <b> \x3C/script>'
    </script><style>
      .test { content: 'Hello <b> \3C/style>' }
    </style></div>
```

# Render End
```html
replaced
<span>
  replaced
  <div />
</span>
<div>
  <div>
    a
  </div>
  replacedHello Text &lt;a/&gt;replacedHello HTML 
  <span>
    hi
  </span>
  <script>
    'Hello &lt;b&gt; \x3C/script&gt;'
  </script>
  <style>
    
    .test { content: 'Hello &lt;b&gt; \3C/style&gt;' }
  
  </style>
</div>
```

# Mutations
```
INSERT #document/html
INSERT #document/html/head
INSERT #document/html/body
INSERT #text
INSERT span
INSERT span/#text
INSERT span/div
INSERT div
INSERT div/div
INSERT div/div/#text
INSERT div/#text
INSERT div/span
INSERT div/span/#text
INSERT div/script
INSERT div/script/#text
INSERT div/style
INSERT div/style/#text
```