# Render `{"a":"a","b":"b","c":1}`
## Console
```
LOG "a" "a1"
LOG "b" "b1"
```

# Update `{"a":"A","b":"b","c":1}`
## Console
```
LOG "a" "A1"
```

# Update `{"a":"A","b":"B","c":1}`
## Console
```
LOG "b" "B1"
```

# Update `{"a":"A","b":"B","c":2}`
## Console
```
LOG "b" "B2"
LOG "a" "A2"
```
