# Render {}
```html
<html>
  <head />
  <body>
    <!--M_[1-->
    <div>
      Child 1 has 
      <!---->
      3
      <!--M_*1 #text/0-->
    </div>
    <!--M_]0 #text/0-->
    <button />
    <!--M_*0 #button/1-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.b={0:{tagName:_._["packages/translator-tags/src/__tests__/fixtures/dynamic-tag-custom-tags/components/child1.marko"],val:3,"#text/0!":_.a={},"#text/0(":_._["packages/translator-tags/src/__tests__/fixtures/dynamic-tag-custom-tags/components/child1.marko"]},1:_.a}),0,"packages/translator-tags/src/__tests__/fixtures/dynamic-tag-custom-tags/template.marko_0_tagName",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
removed #document/html0/body1/#comment0 before #document/html0
inserted #document/html0/body1/#comment0
```


# Render 
container.querySelector("button").click()

```html
<html>
  <head />
  <body>
    <div>
      Child 2 has 3
    </div>
    <!--M_]0 #text/0-->
    <button />
    <!--M_*0 #button/1-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.b={0:{tagName:_._["packages/translator-tags/src/__tests__/fixtures/dynamic-tag-custom-tags/components/child1.marko"],val:3,"#text/0!":_.a={},"#text/0(":_._["packages/translator-tags/src/__tests__/fixtures/dynamic-tag-custom-tags/components/child1.marko"]},1:_.a}),0,"packages/translator-tags/src/__tests__/fixtures/dynamic-tag-custom-tags/template.marko_0_tagName",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
inserted #document/html0/body1/div0
removed #comment after #document/html0/body1/div0
removed div after #document/html0/body1/div0
#document/html0/body1/div0/#text1: "" => "3"
```


# Render 
container.querySelector("button").click()

```html
<html>
  <head />
  <body>
    <div>
      Child 1 has 3
    </div>
    <!--M_]0 #text/0-->
    <button />
    <!--M_*0 #button/1-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.b={0:{tagName:_._["packages/translator-tags/src/__tests__/fixtures/dynamic-tag-custom-tags/components/child1.marko"],val:3,"#text/0!":_.a={},"#text/0(":_._["packages/translator-tags/src/__tests__/fixtures/dynamic-tag-custom-tags/components/child1.marko"]},1:_.a}),0,"packages/translator-tags/src/__tests__/fixtures/dynamic-tag-custom-tags/template.marko_0_tagName",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
inserted #document/html0/body1/div0
removed div after #document/html0/body1/div0
#document/html0/body1/div0/#text1: "" => "3"
```