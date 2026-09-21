// child.marko
const $template = "<button>go</button>";
_shells({ a: "a !a1; ;<button>go</button>" });
var child_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const handler = _resume((event) => event.target.dataset.seen = input.title, "a0", $scope0_id);
	_html(`<button${_patch_attrs({
		title: input.title,
		onClick: handler
	}, "a", $scope0_id, "button", void 0, $scope0_reason, 0)}>go</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "a1");
	$scope0_page ? _scope($scope0_id, {
		d: input.title,
		e: handler
	}) : _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "d", input.title);
}, 0, 0);

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, "_a", [{
	type: "on-click",
	selector: "body"
}], 1);
_shells({
	b: "b;b%;<!><!><!>",
	b0: /*@__PURE__*/ ((_w0, _w1) => `b0;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `D%b/${_w0}&l`)(" b"), /*@__PURE__*/ ((_w0) => `<main><!>${_w0}</main>`)($template))
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
			$Child_withLoadAssets({ title: input.title });
			_html("</main>");
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				b: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["b0"], $scope0_reason, 1);
	$scope0_page && _scope($scope0_id, { e: input.title });
}, 1, () => [$Child_withLoadAssets]);
