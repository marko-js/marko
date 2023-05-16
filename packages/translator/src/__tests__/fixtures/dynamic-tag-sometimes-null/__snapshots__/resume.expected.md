# Render {}
```html
<html>
  <head />
  <body>
    <!--M^1-->
    Body Content
    <!--M/0 #text/0-->
    <button />
    <!--M#0 #button/1-->
    <script>
      (M$h=[]).push((b,s,h)=&gt;({0:{x:null,"#text/0!":h={},"#text/0(":null},1:h}),[0,"packages/translator/src/__tests__/fixtures/dynamic-tag-sometimes-null/template.marko_0_x",])
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
      Body Content
    </div>
    <!--M/0 #text/0-->
    <button />
    <!--M#0 #button/1-->
    <script>
      (M$h=[]).push((b,s,h)=&gt;({0:{x:null,"#text/0!":h={},"#text/0(":null},1:h}),[0,"packages/translator/src/__tests__/fixtures/dynamic-tag-sometimes-null/template.marko_0_x",])
    </script>
  </body>
</html>
```

# Mutations
```
inserted #document/html0/body1/div0
removed #comment after #document/html0/body1/div0
removed #text after #document/html0/body1/div0
inserted #document/html0/body1/div0/#text0
```


# Render 
container.querySelector("button").click()

```html
<html>
  <head />
  <body>
    Body Content
    <!--M/0 #text/0-->
    <button />
    <!--M#0 #button/1-->
    <script>
      (M$h=[]).push((b,s,h)=&gt;({0:{x:null,"#text/0!":h={},"#text/0(":null},1:h}),[0,"packages/translator/src/__tests__/fixtures/dynamic-tag-sometimes-null/template.marko_0_x",])
    </script>
  </body>
</html>
```

# Mutations
```
inserted #document/html0/body1/#text0
removed div after #document/html0/body1/#text0
```