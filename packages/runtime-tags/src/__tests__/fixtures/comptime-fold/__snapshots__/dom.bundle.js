// template.marko
const flags = { seen: false };
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	flags.seen = true;
}));
