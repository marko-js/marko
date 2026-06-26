// template.marko
const $setup__script = _script("a0", ($scope) => document.getElementById("out").textContent = [$signal($scope, 0).aborted, $signal($scope, 0).aborted].join());
