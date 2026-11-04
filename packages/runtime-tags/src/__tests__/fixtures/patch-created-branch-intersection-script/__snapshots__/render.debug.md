# Render `{"show":true,"prefix":"a","x":1,"suffix":"s"}`
## Console
```
LOG "inner" "a1" "s"
```

# Update `{"show":true,"prefix":"b","x":1,"suffix":"s"}`
## Console
```
LOG "inner" "b1" "s"
```

# Update `{"show":true,"prefix":"b","x":12,"suffix":"s"}`
## Console
```
LOG "inner" "b12" "s"
```

# Update `{"show":true,"prefix":"b1","x":2,"suffix":"s"}`

# Update `{"show":true,"prefix":"b1","x":2,"suffix":"t"}`
## Console
```
LOG "inner" "b12" "t"
```

# Update `{"show":false,"prefix":"c","x":3,"suffix":"u"}`

# Update `{"show":true,"prefix":"c","x":3,"suffix":"u"}`
## Console
```
LOG "inner" "c3" "u"
```

# Update `{"show":true,"prefix":"d","x":3,"suffix":"u"}`
## Console
```
LOG "inner" "d3" "u"
```
