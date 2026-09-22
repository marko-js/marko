// template.marko
_shells({
	a0: "a0;D ;<em> </em>",
	a: "a !a3;D%b ;<main><!><button>interactive</button></main>",
	a1: "a1;D ;<em> </em>",
	a2: "a2;b%;<!><!><!>"
});
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $sg__input_show = _source_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_await($scope1_id, "a", input.promise, (value) => {
				const $scope2_id = _scope_id();
				_html(`<em>${_patch_text($scope2_id, "a", value, void 0, $scope0_reason, 2)}</em>`);
				_scope($scope2_id, {});
			}, 1, "a0");
			$scope0_page && _scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["a2"], $scope0_reason, 1);
	_html(`<button>interactive</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a3");
	$scope0_page && _scope($scope0_id, { f: _source_if($scope0_reason, 1) && input.promise });
}, 1, 0);
