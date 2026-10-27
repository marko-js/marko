// template.marko
_shells({
	a: "a !a2;D%b ;<main><!><button>+</button></main>",
	a1: "a1 a5;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	_write_guard($scope0_reason, 1);
	const $scope0_page = _page_render(), $wi__input_title = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_title__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			if ($scope0_page) _if(() => {}, $scope1_id, "a", 1, 1, 0, 0, 1);
			$scope0_page && _scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 0), void 0, void 0, void 0, ["a1"], $scope0_reason, 0);
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a2");
	$scope0_page ? _scope($scope0_id, {
		f: input.title,
		g: count,
		h: $wi__input_title && $input_title__closures
	}) : _filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "va3", input.title, !_server_guard($scope0_reason, 1));
}, 1);
