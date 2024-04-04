# Render {}
```html
<html>
  <head />
  <body>
    <button>
      <!--M[2-->
      0
      <!--M*2 #text/0-->
      <!--M]1 #text/1-->
    </button>
    <!--M*1 #button/0-->
    <script>
      (M$h=[]).push((b,s,h,j,k,m)=&gt;(m={0:h={clickCount:0,"#childScope/0":j={"#text/1!":k={}}},1:j,2:k},j.onClick=b("packages/translator-tags/src/__tests__/fixtures/basic-component-renderBody/template.marko_0/onClick",h),k._=h,m),[2,"packages/translator-tags/src/__tests__/fixtures/basic-component-renderBody/template.marko_1_clickCount/subscriber",1,"packages/translator-tags/src/__tests__/fixtures/basic-component-renderBody/components/my-button.marko_0_onClick",])
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
    <button>
      1
      <!--M]1 #text/1-->
    </button>
    <!--M*1 #button/0-->
    <script>
      (M$h=[]).push((b,s,h,j,k,m)=&gt;(m={0:h={clickCount:0,"#childScope/0":j={"#text/1!":k={}}},1:j,2:k},j.onClick=b("packages/translator-tags/src/__tests__/fixtures/basic-component-renderBody/template.marko_0/onClick",h),k._=h,m),[2,"packages/translator-tags/src/__tests__/fixtures/basic-component-renderBody/template.marko_1_clickCount/subscriber",1,"packages/translator-tags/src/__tests__/fixtures/basic-component-renderBody/components/my-button.marko_0_onClick",])
    </script>
  </body>
</html>
```

# Mutations
```
inserted #document/html0/body1/button0/#text0
removed #comment after #document/html0/body1/button0/#text0
removed #text after #document/html0/body1/button0/#text0
removed #comment after #document/html0/body1/button0/#text0
#document/html0/body1/button0/#text0: " " => "1"
```


# Render 
container.querySelector("button").click()

```html
<html>
  <head />
  <body>
    <button>
      2
      <!--M]1 #text/1-->
    </button>
    <!--M*1 #button/0-->
    <script>
      (M$h=[]).push((b,s,h,j,k,m)=&gt;(m={0:h={clickCount:0,"#childScope/0":j={"#text/1!":k={}}},1:j,2:k},j.onClick=b("packages/translator-tags/src/__tests__/fixtures/basic-component-renderBody/template.marko_0/onClick",h),k._=h,m),[2,"packages/translator-tags/src/__tests__/fixtures/basic-component-renderBody/template.marko_1_clickCount/subscriber",1,"packages/translator-tags/src/__tests__/fixtures/basic-component-renderBody/components/my-button.marko_0_onClick",])
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/button0/#text0: "1" => "2"
```


# Render 
container.querySelector("button").click()

```html
<html>
  <head />
  <body>
    <button>
      3
      <!--M]1 #text/1-->
    </button>
    <!--M*1 #button/0-->
    <script>
      (M$h=[]).push((b,s,h,j,k,m)=&gt;(m={0:h={clickCount:0,"#childScope/0":j={"#text/1!":k={}}},1:j,2:k},j.onClick=b("packages/translator-tags/src/__tests__/fixtures/basic-component-renderBody/template.marko_0/onClick",h),k._=h,m),[2,"packages/translator-tags/src/__tests__/fixtures/basic-component-renderBody/template.marko_1_clickCount/subscriber",1,"packages/translator-tags/src/__tests__/fixtures/basic-component-renderBody/components/my-button.marko_0_onClick",])
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/button0/#text0: "2" => "3"
```