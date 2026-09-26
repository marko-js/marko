// template.marko
_shells({
	a: "a !a3;D%bD l ;<main><!><em> </em><button>s</button></main>",
	a1: "a1 a5 a6!a2; ;<input>"
});
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_show = _source_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let v = "";
	let suffix = "!";
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<input${_attr_input_value($scope1_id, "a", v, _resume(function(x) {
				v = x + suffix;
			}, "a0", $scope1_id))}>${_el_resume($scope1_id, "a")}`);
			_script($scope1_id, "a2");
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["a1"], $scope0_reason, 0);
	_html(`<em>${_text_resume($scope0_id, "b", v)}</em><button>s</button>${_el_resume($scope0_id, "c")}</main>`);
	_script($scope0_id, "a3");
	$scope0_page && _scope($scope0_id, {
		g: v,
		h: suffix
	});
}, 1, 0);
