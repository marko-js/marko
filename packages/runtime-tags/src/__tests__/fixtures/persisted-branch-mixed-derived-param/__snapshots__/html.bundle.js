// template.marko
_shells({ a: "a !a0;D%b ;<main><!><button>+</button></main>" });
var template_default = _template_persisted("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let count = 0;
	const limit = input.min + 1;
	_html("<main>");
	if ($scope0_page) _if(() => {
		if (count > limit) {
			const $scope1_id = _scope_id();
			_html("<p>over</p>");
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "a", 1, 1, 1, 0, 1);
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a0");
	$scope0_page ? _scope($scope0_id, {
		f: count,
		g: limit
	}) : _filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "a0", limit);
}, 1, 0);
