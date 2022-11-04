# Write
  <body><!M#0 0><button class="inc"></button><!M#1 0><button class="toggle"></button><span><!M#0 1>0</span><!M|2 0 1></body><script>(M$h=[]).push((b,s,h,j,k)=>(k={0:h={3:j={},4:b("ifBody"),8:!0,9:0},1:j},j._=h,k),["counter",0,])</script>


# Render "End"
```html
<html>
  <head />
  <body>
    <!--M#0 0-->
    <button
      class="inc"
    />
    <!--M#1 0-->
    <button
      class="toggle"
    />
    <span>
      <!--M#0 1-->
      0
    </span>
    <!--M|2 0 1-->
    <script>
      (M$h=[]).push((b,s,h,j,k)=&gt;(k={0:h={3:j={},4:b("ifBody"),8:!0,9:0},1:j},j._=h,k),["counter",0,])
    </script>
  </body>
</html>
```

# Mutations
```
inserted #document/html0
inserted #document/html0/head0
inserted #document/html0/body1
inserted #document/html0/body1/#comment0
inserted #document/html0/body1/button1
inserted #document/html0/body1/#comment2
inserted #document/html0/body1/button3
inserted #document/html0/body1/span4
inserted #document/html0/body1/span4/#comment0
inserted #document/html0/body1/span4/#text1
inserted #document/html0/body1/#comment5
inserted #document/html0/body1/script6
inserted #document/html0/body1/script6/#text0
```


# Render "Hydrate"
```html
<html>
  <head />
  <body>
    <!--M#0 0-->
    <button
      class="inc"
    />
    <!--M#1 0-->
    <button
      class="toggle"
    />
    <span>
      <!--M#0 1-->
      0
    </span>
    <!--M|2 0 1-->
    <script>
      (M$h=[]).push((b,s,h,j,k)=&gt;(k={0:h={3:j={},4:b("ifBody"),8:!0,9:0},1:j},j._=h,k),["counter",0,])
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
    <!--M#1 0-->
    <button
      class="toggle"
    />
    <span>
      <!--M#0 1-->
      1
    </span>
    <!--M|2 0 1-->
    <script>
      (M$h=[]).push((b,s,h,j,k)=&gt;(k={0:h={3:j={},4:b("ifBody"),8:!0,9:0},1:j},j._=h,k),["counter",0,])
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/span4/#text1: "0" => "1"
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
    <!--M#1 0-->
    <button
      class="toggle"
    />
    <!--M|2 0 1-->
    <script>
      (M$h=[]).push((b,s,h,j,k)=&gt;(k={0:h={3:j={},4:b("ifBody"),8:!0,9:0},1:j},j._=h,k),["counter",0,])
    </script>
  </body>
</html>
```

# Mutations
```
removed #document/html0/body1/#comment4 after span
inserted #document/html0/body1/#comment4
removed span after #document/html0/body1/#comment4
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
    <!--M#1 0-->
    <button
      class="toggle"
    />
    <!--M|2 0 1-->
    <script>
      (M$h=[]).push((b,s,h,j,k)=&gt;(k={0:h={3:j={},4:b("ifBody"),8:!0,9:0},1:j},j._=h,k),["counter",0,])
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
    <!--M#1 0-->
    <button
      class="toggle"
    />
    <span>
      2
    </span>
    <script>
      (M$h=[]).push((b,s,h,j,k)=&gt;(k={0:h={3:j={},4:b("ifBody"),8:!0,9:0},1:j},j._=h,k),["counter",0,])
    </script>
  </body>
</html>
```

# Mutations
```
inserted #document/html0/body1/span4
removed #comment after #document/html0/body1/span4
#document/html0/body1/span4/#text0: " " => "2"
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
    <!--M#1 0-->
    <button
      class="toggle"
    />
    <span>
      3
    </span>
    <script>
      (M$h=[]).push((b,s,h,j,k)=&gt;(k={0:h={3:j={},4:b("ifBody"),8:!0,9:0},1:j},j._=h,k),["counter",0,])
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/span4/#text0: "2" => "3"
```