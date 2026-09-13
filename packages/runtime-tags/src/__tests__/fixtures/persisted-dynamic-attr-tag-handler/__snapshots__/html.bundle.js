// tags/child.marko
const $template = "<div></div>";
_shells({
	b: "b !b2; ;<div></div>",
	b0: "b0;b%;<!><!><!>",
	b1: "b1;b%;<!><!><!>"
});
var child_default = _template_persisted("b", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_button = _source_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const { button: buttons, ...htmlInput } = input;
	_html(`<div${_patch_attrs(htmlInput, "a", $scope0_id, "div", void 0, $scope0_reason, 1)}>`);
	_for_of(buttons, (button) => {
		const $scope1_id = _scope_id();
		_if(() => {
			if (button) {
				const $scope2_id = _scope_id();
				_dynamic_tag($scope2_id, "a", button, {}, 0, 0, $sg__input_button, _patch_dynamic_tag($scope2_id, "a", button, 0, 0, 0, $scope0_reason, 0));
				$scope0_page && _scope($scope2_id, { _: _scope_with_id($scope1_id) });
				return 0;
			}
		}, $scope1_id, "a", 1, $sg__input_button, $sg__input_button, void 0, void 0, ["b1"], $scope0_reason, 0);
		$scope0_page && _scope($scope1_id, { c: _source_if($scope0_reason, 0) && button });
	}, 0, $scope0_id, "a", 1, 1, $sg__input_button, void 0, void 0, "b0", $scope0_reason, 0);
	_html(`</div>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b2");
	$scope0_page && _scope($scope0_id, {});
}, 0, () => [button]);

// template.marko
_shells({
	a0: "a0,one",
	a: /*@__PURE__*/ ((_w0, _w1) => `a;${_w0};${_w1}`)(((_w0) => `/${_w0}&`)(" b"), $template)
});
var template_default = _template_persisted("a", (input) => {
	_scope_reason();
	const $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_set_serialize_reason(0);
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "a", $childScope);
	child_default({ button: attrTag({
		onClick: function() {},
		content: _content_elide("a0", () => {
			_scope_reason();
			_scope_id();
			_html("one");
		}, $scope0_id)
	}) });
	$scope0_page && _scope($scope0_id, { a: _existing_scope($childScope) });
}, 1, () => [child_default]);
