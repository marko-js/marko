// size: 132 (min) 87 (brotli)
(_$.effect("a0", ($scope) => {
  {
    const el = document.getElementById("foo");
    ((el.innerHTML = "foo"),
      (_$.getAbortSignal($scope, 0).onabort = () => (el.innerHTML = "")));
  }
}),
  init());
