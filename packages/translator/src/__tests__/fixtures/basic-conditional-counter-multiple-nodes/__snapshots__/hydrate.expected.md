# Render {}
```html
<html>
  <head />
  <body>
    <button
      class="inc"
    />
    <!--M#0 #button/0-->
    <button
      class="toggle"
    />
    <!--M#0 #button/1-->
    <!--M^1-->
    The count is 
    <!---->
    0
    <!--M#1 #text/0-->
    <!--M/0 #text/2-->
    <script>
      (M$h=[]).push((b,s,h,j,k)=&gt;(k={0:h={show:!0,count:0,"#text/2!":j={},"#text/2(":b("packages/translator/src/__tests__/fixtures/basic-conditional-counter-multiple-nodes/template.marko_1_renderer")},1:j},j._=h,k),[0,"packages/translator/src/__tests__/fixtures/basic-conditional-counter-multiple-nodes/template.marko_0_show",0,"packages/translator/src/__tests__/fixtures/basic-conditional-counter-multiple-nodes/template.marko_0_count",])
    </script>
  </body>
</html>
```

# Mutations
```

```


# Render 
container.querySelector("button.inc").click();

```html
<html>
  <head />
  <body>
    <button
      class="inc"
    />
    <!--M#0 #button/0-->
    <button
      class="toggle"
    />
    <!--M#0 #button/1-->
    <!--M^1-->
    The count is 
    <!---->
    1
    <!--M#1 #text/0-->
    <!--M/0 #text/2-->
    <script>
      (M$h=[]).push((b,s,h,j,k)=&gt;(k={0:h={show:!0,count:0,"#text/2!":j={},"#text/2(":b("packages/translator/src/__tests__/fixtures/basic-conditional-counter-multiple-nodes/template.marko_1_renderer")},1:j},j._=h,k),[0,"packages/translator/src/__tests__/fixtures/basic-conditional-counter-multiple-nodes/template.marko_0_show",0,"packages/translator/src/__tests__/fixtures/basic-conditional-counter-multiple-nodes/template.marko_0_count",])
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/#text7: "0" => "1"
```


# Render 
container.querySelector("button.toggle").click();

```html
<html>
  <head />
  <body>
    <button
      class="inc"
    />
    <!--M#0 #button/0-->
    <button
      class="toggle"
    />
    <!--M#0 #button/1-->
    <!--M/0 #text/2-->
    <script>
      (M$h=[]).push((b,s,h,j,k)=&gt;(k={0:h={show:!0,count:0,"#text/2!":j={},"#text/2(":b("packages/translator/src/__tests__/fixtures/basic-conditional-counter-multiple-nodes/template.marko_1_renderer")},1:j},j._=h,k),[0,"packages/translator/src/__tests__/fixtures/basic-conditional-counter-multiple-nodes/template.marko_0_show",0,"packages/translator/src/__tests__/fixtures/basic-conditional-counter-multiple-nodes/template.marko_0_count",])
    </script>
  </body>
</html>
```

# Mutations
```
removed #document/html0/body1/#comment4 after #comment
inserted #document/html0/body1/#comment4
removed #comment after #document/html0/body1/#comment4
removed #text after #document/html0/body1/#comment4
removed #comment after #document/html0/body1/#comment4
removed #text after #document/html0/body1/#comment4
removed #comment after #document/html0/body1/#comment4
```


# Render 
container.querySelector("button.inc").click();

```html
<html>
  <head />
  <body>
    <button
      class="inc"
    />
    <!--M#0 #button/0-->
    <button
      class="toggle"
    />
    <!--M#0 #button/1-->
    <!--M/0 #text/2-->
    <script>
      (M$h=[]).push((b,s,h,j,k)=&gt;(k={0:h={show:!0,count:0,"#text/2!":j={},"#text/2(":b("packages/translator/src/__tests__/fixtures/basic-conditional-counter-multiple-nodes/template.marko_1_renderer")},1:j},j._=h,k),[0,"packages/translator/src/__tests__/fixtures/basic-conditional-counter-multiple-nodes/template.marko_0_show",0,"packages/translator/src/__tests__/fixtures/basic-conditional-counter-multiple-nodes/template.marko_0_count",])
    </script>
  </body>
</html>
```

# Mutations
```

```


# Render 
container.querySelector("button.toggle").click();

```html
<html>
  <head />
  <body>
    <button
      class="inc"
    />
    <!--M#0 #button/0-->
    <button
      class="toggle"
    />
    <!--M#0 #button/1-->
    The count is 2
    <script>
      (M$h=[]).push((b,s,h,j,k)=&gt;(k={0:h={show:!0,count:0,"#text/2!":j={},"#text/2(":b("packages/translator/src/__tests__/fixtures/basic-conditional-counter-multiple-nodes/template.marko_1_renderer")},1:j},j._=h,k),[0,"packages/translator/src/__tests__/fixtures/basic-conditional-counter-multiple-nodes/template.marko_0_show",0,"packages/translator/src/__tests__/fixtures/basic-conditional-counter-multiple-nodes/template.marko_0_count",])
    </script>
  </body>
</html>
```

# Mutations
```
inserted #document/html0/body1/#text4
inserted #document/html0/body1/#text5
removed #comment after #document/html0/body1/#text5
#document/html0/body1/#text5: "" => "2"
```


# Render 
container.querySelector("button.inc").click();

```html
<html>
  <head />
  <body>
    <button
      class="inc"
    />
    <!--M#0 #button/0-->
    <button
      class="toggle"
    />
    <!--M#0 #button/1-->
    The count is 3
    <script>
      (M$h=[]).push((b,s,h,j,k)=&gt;(k={0:h={show:!0,count:0,"#text/2!":j={},"#text/2(":b("packages/translator/src/__tests__/fixtures/basic-conditional-counter-multiple-nodes/template.marko_1_renderer")},1:j},j._=h,k),[0,"packages/translator/src/__tests__/fixtures/basic-conditional-counter-multiple-nodes/template.marko_0_show",0,"packages/translator/src/__tests__/fixtures/basic-conditional-counter-multiple-nodes/template.marko_0_count",])
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/#text5: "2" => "3"
```