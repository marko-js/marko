# Render {}
```html
<html>
  <head />
  <body>
    <button
      class="inc"
    />
    <!--M#0 0-->
    <button
      class="toggle"
    />
    <!--M#0 1-->
    <span>
      0
      <!--M#1 0-->
    </span>
    <!--M|0 2 1-->
    <script>
      (M$h=[]).push((b,s,h,j,k)=&gt;(k={0:h={8:!0,9:0,"2!":j={},"2(":b("ifBody")},1:j},j._=h,k),[0,"counter",])
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
    <!--M#0 0-->
    <button
      class="toggle"
    />
    <!--M#0 1-->
    <span>
      1
      <!--M#1 0-->
    </span>
    <!--M|0 2 1-->
    <script>
      (M$h=[]).push((b,s,h,j,k)=&gt;(k={0:h={8:!0,9:0,"2!":j={},"2(":b("ifBody")},1:j},j._=h,k),[0,"counter",])
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/span4/#text0: "0" => "1"
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
    <!--M#0 0-->
    <button
      class="toggle"
    />
    <!--M#0 1-->
    <!--M|0 2 1-->
    <script>
      (M$h=[]).push((b,s,h,j,k)=&gt;(k={0:h={8:!0,9:0,"2!":j={},"2(":b("ifBody")},1:j},j._=h,k),[0,"counter",])
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
    <button
      class="inc"
    />
    <!--M#0 0-->
    <button
      class="toggle"
    />
    <!--M#0 1-->
    <!--M|0 2 1-->
    <script>
      (M$h=[]).push((b,s,h,j,k)=&gt;(k={0:h={8:!0,9:0,"2!":j={},"2(":b("ifBody")},1:j},j._=h,k),[0,"counter",])
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
    <!--M#0 0-->
    <button
      class="toggle"
    />
    <!--M#0 1-->
    <span>
      2
    </span>
    <script>
      (M$h=[]).push((b,s,h,j,k)=&gt;(k={0:h={8:!0,9:0,"2!":j={},"2(":b("ifBody")},1:j},j._=h,k),[0,"counter",])
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
    <button
      class="inc"
    />
    <!--M#0 0-->
    <button
      class="toggle"
    />
    <!--M#0 1-->
    <span>
      3
    </span>
    <script>
      (M$h=[]).push((b,s,h,j,k)=&gt;(k={0:h={8:!0,9:0,"2!":j={},"2(":b("ifBody")},1:j},j._=h,k),[0,"counter",])
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/span4/#text0: "2" => "3"
```