# Render {}
```html
<html>
  <head />
  <body>
    <!--M#0 0-->
    <button
      class="inc"
    />
    <!--M#0 1-->
    <button
      class="toggle"
    />
    <!--M^1-->
    The count is 
    <!--M#1 0-->
    0
    <!--M/0 2-->
    <script>
      (M$h=[]).push((b,s,h,j,k)=&gt;(k={0:h={3:j={},4:b("ifBody"),8:!0,9:0},1:j},j._=h,k),[0,"counter",])
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
    <!--M#0 0-->
    <button
      class="inc"
    />
    <!--M#0 1-->
    <button
      class="toggle"
    />
    <!--M^1-->
    The count is 
    <!--M#1 0-->
    1
    <!--M/0 2-->
    <script>
      (M$h=[]).push((b,s,h,j,k)=&gt;(k={0:h={3:j={},4:b("ifBody"),8:!0,9:0},1:j},j._=h,k),[0,"counter",])
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
    <!--M#0 0-->
    <button
      class="inc"
    />
    <!--M#0 1-->
    <button
      class="toggle"
    />
    <!--M/0 2-->
    <script>
      (M$h=[]).push((b,s,h,j,k)=&gt;(k={0:h={3:j={},4:b("ifBody"),8:!0,9:0},1:j},j._=h,k),[0,"counter",])
    </script>
  </body>
</html>
```

# Mutations
```
removed #document/html0/body1/#comment4 after #text
inserted #document/html0/body1/#comment4
removed #comment after #document/html0/body1/#comment4
removed #text after #document/html0/body1/#comment4
removed #comment after #document/html0/body1/#comment4
removed #text after #document/html0/body1/#comment4
```


# Render 
container.querySelector("button.inc").click();

```html
<html>
  <head />
  <body>
    <!--M#0 0-->
    <button
      class="inc"
    />
    <!--M#0 1-->
    <button
      class="toggle"
    />
    <!--M/0 2-->
    <script>
      (M$h=[]).push((b,s,h,j,k)=&gt;(k={0:h={3:j={},4:b("ifBody"),8:!0,9:0},1:j},j._=h,k),[0,"counter",])
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
    <!--M#0 0-->
    <button
      class="inc"
    />
    <!--M#0 1-->
    <button
      class="toggle"
    />
    The count is 2
    <script>
      (M$h=[]).push((b,s,h,j,k)=&gt;(k={0:h={3:j={},4:b("ifBody"),8:!0,9:0},1:j},j._=h,k),[0,"counter",])
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
    <!--M#0 0-->
    <button
      class="inc"
    />
    <!--M#0 1-->
    <button
      class="toggle"
    />
    The count is 3
    <script>
      (M$h=[]).push((b,s,h,j,k)=&gt;(k={0:h={3:j={},4:b("ifBody"),8:!0,9:0},1:j},j._=h,k),[0,"counter",])
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/#text5: "2" => "3"
```