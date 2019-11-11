# write
  <!MC$0>xyz<!MC$0/><!MC$1>a<script>[{"markerId":0,"componentId":"component-markers-async","input":{}}]</script>
_flush_

# write
  b
_flush_

# write
  c<!MC$1/><script>[{"markerId":1,"componentId":"component-markers-async","input":{}}]</script>
_flush_

# end

# final HTML
  <!--MC$0-->
  <html>
    <head />
    <body>
      xyz
      <!--MC$0/-->
      <!--MC$1-->
      a
      <script>
        [{"markerId":0,"componentId":"component-markers-async","input":{}}]
      </script>
      bc
      <!--MC$1/-->
      <script>
        [{"markerId":1,"componentId":"component-markers-async","input":{}}]
      </script>
    </body>
  </html>
