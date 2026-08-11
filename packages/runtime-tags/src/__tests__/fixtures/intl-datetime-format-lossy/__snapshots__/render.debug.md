# Render
```html
<button>
  1970年1月1日木曜日
</button>
```
## Console
```
ERROR "An `Intl.DateTimeFormat` does not survive serialization; it will format differently after resume:" {
  locale: 'ja',
  calendar: 'gregory',
  numberingSystem: 'latn',
  timeZone: 'UTC',
  weekday: 'long',
  year: 'numeric',
  month: 'numeric',
  day: 'numeric'
}
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  1970/1/2金曜日
</button>
```
## Change
```
UPDATE: button::text "1970年1月1日木曜日" => "1970/1/2金曜日"
```
