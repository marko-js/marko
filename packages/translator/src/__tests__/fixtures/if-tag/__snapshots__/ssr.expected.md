# Write
  Hello<!M|0 #text/0 1>World<!M|0 #text/1 2><div>B<!M|0 #text/2 3></div><script>(M$h=[]).push((b,s,h,j,k,m)=>(m={0:h={"#text/0!":j={},"#text/0(":b("packages/translator/src/__tests__/fixtures/if-tag/template.marko_1_renderer"),"#text/1!":k={},"#text/1(":b("packages/translator/src/__tests__/fixtures/if-tag/template.marko_2_renderer"),"#text/2!":{},"#text/2(":b("packages/translator/src/__tests__/fixtures/if-tag/template.marko_4_renderer")},1:j,2:k,3:{_:h}},j._=k._=h,m),[])</script>


# Render "End"
```html
<html>
  <head />
  <body>
    Hello
    <!--M|0 #text/0 1-->
    World
    <!--M|0 #text/1 2-->
    <div>
      B
      <!--M|0 #text/2 3-->
    </div>
    <script>
      (M$h=[]).push((b,s,h,j,k,m)=&gt;(m={0:h={"#text/0!":j={},"#text/0(":b("packages/translator/src/__tests__/fixtures/if-tag/template.marko_1_renderer"),"#text/1!":k={},"#text/1(":b("packages/translator/src/__tests__/fixtures/if-tag/template.marko_2_renderer"),"#text/2!":{},"#text/2(":b("packages/translator/src/__tests__/fixtures/if-tag/template.marko_4_renderer")},1:j,2:k,3:{_:h}},j._=k._=h,m),[])
    </script>
  </body>
</html>
```

# Mutations
```
inserted #document/html0
inserted #document/html0/head0
inserted #document/html0/body1
inserted #document/html0/body1/#text0
inserted #document/html0/body1/#comment1
inserted #document/html0/body1/#text2
inserted #document/html0/body1/#comment3
inserted #document/html0/body1/div4
inserted #document/html0/body1/div4/#text0
inserted #document/html0/body1/div4/#comment1
inserted #document/html0/body1/script5
inserted #document/html0/body1/script5/#text0
```