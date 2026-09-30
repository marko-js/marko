// template.marko
_shells({
	a: "a;b%;<!><!><!>",
	a0: "a0 !a1; D ;<button> </button>"
});
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_show = _source_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const opts = { step: 2 };
			let n = 0;
			_html(`<button>${_text_resume($scope1_id, "b", n)}</button>${_el_resume($scope1_id, "a")}`);
			_script($scope1_id, "a1");
			_patch_write($scope1_id, "d", opts.step, 1);
			_patch_value($scope1_id, "a2", n, 1);
			_scope($scope1_id, {
				d: opts.step,
				e: n
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["a0"], $scope0_reason, 0);
	$scope0_page && _scope($scope0_id, {});
}, 1, 0);
