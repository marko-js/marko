// tags/probe.marko
const $count__script = _script("b0", ($scope) => document.body.dataset.count = String($scope.a + 1));
const $count = _fill_let("b1", 0, $count__script);
