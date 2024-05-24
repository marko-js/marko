# Render {}
```html
<html>
  <head />
  <body>
    <!--M[1-->
    <span
      class="A"
    >
      body content
    </span>
    <!--M]0 #text/0-->
    <button />
    <!--M*0 #button/1-->
    <script>
      (M$h=[]).push(_=&gt;(_.b={0:{tagName:"span",className:"A","#text/0!":_.a={},"#text/0(":"span"},1:_.a}),[0,"packages/translator-tags/src/__tests__/fixtures/dynamic-native-dynamic-tag/template.marko_0_tagName",])
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
    <div
      class="A"
    >
      body content
    </div>
    <!--M]0 #text/0-->
    <button />
    <!--M*0 #button/1-->
    <script>
      (M$h=[]).push(_=&gt;(_.b={0:{tagName:"span",className:"A","#text/0!":_.a={},"#text/0(":"span"},1:_.a}),[0,"packages/translator-tags/src/__tests__/fixtures/dynamic-native-dynamic-tag/template.marko_0_tagName",])
    </script>
  </body>
</html>
```

# Mutations
```
inserted #document/html0/body1/div0
removed #comment after #document/html0/body1/div0
removed span after #document/html0/body1/div0
#document/html0/body1/div0: attr(class) null => "A"
inserted #document/html0/body1/div0/#text0
```


# Render 
container.querySelector("button").click()

```html
<html>
  <head />
  <body>
    <span
      class="A"
    >
      body content
    </span>
    <!--M]0 #text/0-->
    <button />
    <!--M*0 #button/1-->
    <script>
      (M$h=[]).push(_=&gt;(_.b={0:{tagName:"span",className:"A","#text/0!":_.a={},"#text/0(":"span"},1:_.a}),[0,"packages/translator-tags/src/__tests__/fixtures/dynamic-native-dynamic-tag/template.marko_0_tagName",])
    </script>
  </body>
</html>
```

# Mutations
```
inserted #document/html0/body1/span0
removed div after #document/html0/body1/span0
#document/html0/body1/span0: attr(class) null => "A"
inserted #document/html0/body1/span0/#text0
```