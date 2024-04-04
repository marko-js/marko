# Write
  Hello<!M|0 #text/0 1>World<!M|0 #text/1 2><div>B<!M|0 #text/2 3></div><script>(M$h=[]).push((b,s,h,j,k)=>({0:{"#text/0(":b("packages/translator-tags/src/__tests__/fixtures/if-tag/template.marko_1_renderer"),"#text/0!":h={},"#text/1(":b("packages/translator-tags/src/__tests__/fixtures/if-tag/template.marko_2_renderer"),"#text/1!":j={},"#text/2(":b("packages/translator-tags/src/__tests__/fixtures/if-tag/template.marko_4_renderer"),"#text/2!":k={}},1:h,2:j,3:k}),[])</script>


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
      (M$h=[]).push((b,s,h,j,k)=&gt;({0:{"#text/0(":b("packages/translator-tags/src/__tests__/fixtures/if-tag/template.marko_1_renderer"),"#text/0!":h={},"#text/1(":b("packages/translator-tags/src/__tests__/fixtures/if-tag/template.marko_2_renderer"),"#text/1!":j={},"#text/2(":b("packages/translator-tags/src/__tests__/fixtures/if-tag/template.marko_4_renderer"),"#text/2!":k={}},1:h,2:j,3:k}),[])
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