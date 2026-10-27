// template.marko
_shells({ a: "a !a0;b%b ;<!><!><button>+</button>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	_write_guard($scope0_reason, 0);
	const $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let count = 0;
	const label = input.label;
	if ($scope0_page) _if(() => {}, $scope0_id, "a", 1, 1, 0, 0, 1);
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		f: count,
		g: label
	}) || _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va1", label, !_server_guard($scope0_reason, 0));
}, 1);
