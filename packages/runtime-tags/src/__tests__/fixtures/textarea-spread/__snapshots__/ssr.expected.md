# Write
```html
  <textarea>foo</textarea><!--M_*1 #textarea/0--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.a=[0,{input:{value:"foo"}}]),"__tests__/template.marko_0_input 1"];M._.w()</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <textarea>
      foo
    </textarea>
    <!--M_*1 #textarea/0-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.a = [0,
        {
          input:
          {
            value: "foo"
          }
        }]),
        "__tests__/template.marko_0_input 1"
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
INSERT html/body/textarea
INSERT html/body/textarea/#text
INSERT html/body/#comment
INSERT html/body/script
INSERT html/body/script/#text
```