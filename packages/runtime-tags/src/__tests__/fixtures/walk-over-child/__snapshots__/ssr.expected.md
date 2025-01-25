# Write
```html
  <section><span>Hello</span></section><div>0<!--M_*0 #text/1--></div><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.b={0:{"#childScope/0":_.a={}},1:_.a}),0]</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <section>
      <span>
        Hello
      </span>
    </section>
    <div>
      0
      <!--M_*0 #text/1-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.b={0:{"#childScope/0":_.a={}},1:_.a}),0]
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html
INSERT html/head
INSERT html/body
INSERT html/body/section
INSERT html/body/section/span
INSERT html/body/section/span/#text
INSERT html/body/div
INSERT html/body/div/#text
INSERT html/body/div/#comment
INSERT html/body/script
INSERT html/body/script/#text
```