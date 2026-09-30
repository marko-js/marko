// tags/probe.marko
const $template = "<button>probe</button>";
_shells({ b: "b !b0; ;<button>probe</button>" });
var probe_default = _template_patch("b", (input) => {
	_scope_reason();
	const $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let count = 5;
	const doubled = 10;
	_html(`<button>probe</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	_script($scope0_id, "b1");
	_patch_value($scope0_id, "b2", count, 1);
	$scope0_page && _scope($scope0_id, {
		b: count,
		c: doubled
	});
}, 0, 0);

// template.marko
_shells({
	a: "a;b%;<!><!><!>",
	a0: /*@__PURE__*/ ((_w0, _w1) => `a0;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `/${_w0}&`)(" b"), $template)
});
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_show = _source_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const $childScope = _peek_scope_id();
			_patch_child($scope1_id, "a", $childScope);
			probe_default({});
			_scope($scope1_id, { a: _existing_scope($childScope) });
			return 0;
		}
	}, $scope0_id, "a", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["a0"], $scope0_reason, 0);
	$scope0_page && _scope($scope0_id, {});
}, 1, () => [probe_default]);
