# Write
```html
  <div>a</div><div>b</div><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.a=[0,1,{input_a:"a"}]),"__tests__/template.marko_1_input_a",2,"__tests__/template.marko_1_a",2];M._.w()</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <div>
      a
    </div>
    <div>
      b
    </div>
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.a = [0, 1,
        {
          input_a: "a"
        }]),
        "__tests__/template.marko_1_input_a",
        2,
        "__tests__/template.marko_1_a",
        2
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html
INSERT html/head
INSERT html/body
INSERT html/body/div0
INSERT html/body/div0/#text
INSERT html/body/div1
INSERT html/body/div1/#text
INSERT html/body/script
INSERT html/body/script/#text
```