// template.marko
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function(ev) {
	const el = ev.target;
	el.dataset.clicks = String(+(el.dataset.clicks || 0) + 1);
}));
