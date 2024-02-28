# Render {}
```html
<html>
  <head />
  <body>
    <button
      class="inc"
    >
      1
      <!--M*1 #text/1-->
    </button>
    <!--M*1 #button/0-->
    <div>
      1
      <!--M*0 #text/1-->
    </div>
    <script>
      (M$h=[]).push((b,s,h,j,k)=&gt;(k={0:h={"#childScope/0":j={x:1}},1:j},j["/"]=b("packages/translator-tags/src/__tests__/fixtures/custom-tag-var/template.marko_0_data",h),k),[1,"packages/translator-tags/src/__tests__/fixtures/custom-tag-var/components/child.marko_0_x",])
    </script>
  </body>
</html>
```

# Mutations
```

```


# Render 
container.querySelector("button.inc").click()

```html
<html>
  <head />
  <body>
    <button
      class="inc"
    >
      2
      <!--M*1 #text/1-->
    </button>
    <!--M*1 #button/0-->
    <div>
      2
      <!--M*0 #text/1-->
    </div>
    <script>
      (M$h=[]).push((b,s,h,j,k)=&gt;(k={0:h={"#childScope/0":j={x:1}},1:j},j["/"]=b("packages/translator-tags/src/__tests__/fixtures/custom-tag-var/template.marko_0_data",h),k),[1,"packages/translator-tags/src/__tests__/fixtures/custom-tag-var/components/child.marko_0_x",])
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/button0/#text0: "1" => "2"
#document/html0/body1/div2/#text0: "1" => "2"
```


# Render 
container.querySelector("button.inc").click()

```html
<html>
  <head />
  <body>
    <button
      class="inc"
    >
      3
      <!--M*1 #text/1-->
    </button>
    <!--M*1 #button/0-->
    <div>
      3
      <!--M*0 #text/1-->
    </div>
    <script>
      (M$h=[]).push((b,s,h,j,k)=&gt;(k={0:h={"#childScope/0":j={x:1}},1:j},j["/"]=b("packages/translator-tags/src/__tests__/fixtures/custom-tag-var/template.marko_0_data",h),k),[1,"packages/translator-tags/src/__tests__/fixtures/custom-tag-var/components/child.marko_0_x",])
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/button0/#text0: "2" => "3"
#document/html0/body1/div2/#text0: "2" => "3"
```


# Render 
container.querySelector("button.inc").click()

```html
<html>
  <head />
  <body>
    <button
      class="inc"
    >
      4
      <!--M*1 #text/1-->
    </button>
    <!--M*1 #button/0-->
    <div>
      4
      <!--M*0 #text/1-->
    </div>
    <script>
      (M$h=[]).push((b,s,h,j,k)=&gt;(k={0:h={"#childScope/0":j={x:1}},1:j},j["/"]=b("packages/translator-tags/src/__tests__/fixtures/custom-tag-var/template.marko_0_data",h),k),[1,"packages/translator-tags/src/__tests__/fixtures/custom-tag-var/components/child.marko_0_x",])
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/button0/#text0: "3" => "4"
#document/html0/body1/div2/#text0: "3" => "4"
```