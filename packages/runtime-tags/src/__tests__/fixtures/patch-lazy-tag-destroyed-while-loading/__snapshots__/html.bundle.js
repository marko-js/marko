// child.marko
const $template = "<button><!>:<!></button>";
const $walks = " D%c%l";
_shells({ a: "a !a0; D%c%;<button><!>:<!></button>" });
var child_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button>${_patch_text($scope0_id, "b", input.label, void 0, $scope0_reason, 0)}:${_text_resume($scope0_id, "c", count, 2)}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "a0");
	_patch_value($scope0_id, "a0", count, 1);
	$scope0_page && _scope($scope0_id, { g: count });
}, 0, 0);

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, "_a", void 0, 2);
_shells({
	b: "b;b%;<!><!><!>",
	b0: /*@__PURE__*/ ((_w0, _w1) => `b0;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `D%b/${_w0}&l`)($walks), /*@__PURE__*/ ((_w0) => `<main><!>${_w0}</main>`)($template))
});
var template_default = _template_patch("b", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_show = _source_guard($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html("<main>");
			_set_serialize_reason(_mask_group($scope0_reason, 2) << 1);
			const $childScope = _peek_scope_id();
			_patch_child($scope1_id, "b", $childScope);
			$Child_withLoadAssets({ label: input.label });
			_html("</main>");
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				b: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["b0"], $scope0_reason, 1);
	$scope0_page && _scope($scope0_id, { e: input.label });
}, 1, () => [$Child_withLoadAssets]);
