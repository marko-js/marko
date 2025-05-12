// size: 134 (min) 90 (brotli)
_$.effect("a0", ($scope) => {
  {
    const el = document.getElementById("foo");
    (el.innerHTML = "foo"),
      (_$.getAbortSignal($scope, 0).onabort = () => (el.innerHTML = ""));
  }
}),
  init();
