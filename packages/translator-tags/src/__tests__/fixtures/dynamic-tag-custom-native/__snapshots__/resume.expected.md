# Render {}
```html
<html>
  <head />
  <body>
    <button />
    <!--M*0 #button/0-->
    <!--M[1-->
    <div>
      Id is 
      <!---->
      dynamic
      <!--M*1 #text/0-->
    </div>
    <!--M]0 #text/1-->
    <script>
      (M$h=[]).push(_=&gt;(_.b={0:{tagName:_._["packages/translator-tags/src/__tests__/fixtures/dynamic-tag-custom-native/components/child.marko"],"#text/1!":_.a={},"#text/1(":_._["packages/translator-tags/src/__tests__/fixtures/dynamic-tag-custom-native/components/child.marko"]},1:_.a}),[0,"packages/translator-tags/src/__tests__/fixtures/dynamic-tag-custom-native/template.marko_0_tagName",])
    </script>
  </body>
</html>
```

# Mutations
```

```


# Render 
container.querySelector("button").click()

```html
<html>
  <head />
  <body>
    <button />
    <!--M*0 #button/0-->
    <div
      id="dynamic"
    />
    <!--M]0 #text/1-->
    <script>
      (M$h=[]).push(_=&gt;(_.b={0:{tagName:_._["packages/translator-tags/src/__tests__/fixtures/dynamic-tag-custom-native/components/child.marko"],"#text/1!":_.a={},"#text/1(":_._["packages/translator-tags/src/__tests__/fixtures/dynamic-tag-custom-native/components/child.marko"]},1:_.a}),[0,"packages/translator-tags/src/__tests__/fixtures/dynamic-tag-custom-native/template.marko_0_tagName",])
    </script>
  </body>
</html>
```

# Mutations
```
inserted #document/html0/body1/div2
removed #comment after #document/html0/body1/div2
removed div after #document/html0/body1/div2
#document/html0/body1/div2: attr(id) null => "dynamic"
```


# Render 
container.querySelector("button").click()

```html
<html>
  <head />
  <body>
    <button />
    <!--M*0 #button/0-->
    <div>
      Id is dynamic
    </div>
    <!--M]0 #text/1-->
    <script>
      (M$h=[]).push(_=&gt;(_.b={0:{tagName:_._["packages/translator-tags/src/__tests__/fixtures/dynamic-tag-custom-native/components/child.marko"],"#text/1!":_.a={},"#text/1(":_._["packages/translator-tags/src/__tests__/fixtures/dynamic-tag-custom-native/components/child.marko"]},1:_.a}),[0,"packages/translator-tags/src/__tests__/fixtures/dynamic-tag-custom-native/template.marko_0_tagName",])
    </script>
  </body>
</html>
```

# Mutations
```
inserted #document/html0/body1/div2
removed div after #document/html0/body1/div2
#document/html0/body1/div2/#text1: "" => "dynamic"
```