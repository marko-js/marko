// tags/plain-child.marko
const $template = "<p>t=<!></p>";
const $walks = "Db%l";
_shells({ b: "b;Db%;<p>t=<!></p>" });
var plain_child_default = _template_patch("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<p>t=${_patch_text($scope0_id, "a", input.a + input.b, 2, $scope0_reason, 0)}</p>`);
	_patch_write($scope0_id, "d", input.a, 1);
	_patch_write($scope0_id, "e", input.b, 1);
	_client_guard($scope0_reason, 0) && _patch_init($scope0_id, "b0");
	$scope0_page && _scope($scope0_id, {
		d: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && input.a,
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.b
	});
}, 0, 0);

// template.marko
_shells({
	a: "a !a1; b%;<button>+</button><!><!>",
	a0: /*@__PURE__*/ ((_w0, _w1) => `a0 a4;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks), $template)
});
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_show = _source_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let tab = 0;
	_html(`<button>+</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_serialize_reason(14 | _mask_group($scope0_reason, 1) << 5);
			const $childScope = _peek_scope_id();
			_patch_child($scope1_id, "a", $childScope);
			plain_child_default({
				a: tab,
				b: input.x
			});
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "b", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["a0"], $scope0_reason, 0);
	_script($scope0_id, "a1");
	$scope0_page ? _scope($scope0_id, {
		f: _source_if($scope0_reason, 0) && input.x,
		g: tab
	}) : _filled_guard($scope0_reason, 1) && _patch_value($scope0_id, "a2", input.x);
}, 1, () => [plain_child_default]);
