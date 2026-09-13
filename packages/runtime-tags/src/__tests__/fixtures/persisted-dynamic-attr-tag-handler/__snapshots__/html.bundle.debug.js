// tags/child.marko
const $template$1 = "<div></div>";
const $walks$1 = " b";
_shells({
	"__tests__/tags/child.marko": "__tests__/tags/child.marko !__tests__/tags/child.marko_0_htmlInput#4; ;<div></div>",
	"__tests__/tags/child.marko_1*shell": "__tests__/tags/child.marko_1*shell;b%;<!><!><!>",
	"__tests__/tags/child.marko_2*shell": "__tests__/tags/child.marko_2*shell;b%;<!><!><!>"
});
var child_default = _template_persisted("__tests__/tags/child.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_button = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const { button: buttons, ...htmlInput } = input;
	_html(`<div${_patch_attrs(htmlInput, "#div/0", $scope0_id, "div", void 0, $scope0_owned, 1)}>`);
	_for_of(buttons, (button) => {
		const $scope1_id = _scope_id();
		_if(() => {
			if (button) {
				const $scope2_id = _scope_id();
				_dynamic_tag($scope2_id, "#text/0", button, {}, 0, 0, $sg__input_button, _patch_dynamic_tag($scope2_id, "#text/0", button, 0, 0, 0, $scope0_owned, 0));
				$scope0_reason && _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/tags/child.marko", "4:8");
				return 0;
			}
		}, $scope1_id, "#text/0", 1, $sg__input_button, $sg__input_button, void 0, void 0, ["__tests__/tags/child.marko_2*shell"], $scope0_owned, 0);
		$scope0_reason && _scope($scope1_id, { button: _source_if($scope0_reason, 0) && button }, "__tests__/tags/child.marko", "3:4", { button: "3:8" });
	}, 0, $scope0_id, "#div/0", 1, 1, $sg__input_button, void 0, void 0, "__tests__/tags/child.marko_1*shell", $scope0_owned, 0);
	_html(`</div>${_el_resume($scope0_id, "#div/0")}`);
	_script($scope0_id, "__tests__/tags/child.marko_0_htmlInput#4");
	$scope0_reason && _scope($scope0_id, {}, "__tests__/tags/child.marko", 0, { "EventAttributes:#div/0": ["...htmlInput", "2:9"] });
}, 0, () => [button]);

// template.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)(" b");
_shells({
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content,one",
	"__tests__/template.marko": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko;${_w0};${_w1}`)(((_w0) => `/${_w0}&`)(" b"), $template$1)
});
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_set_serialize_reason(0);
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "#childScope/0", $childScope);
	child_default({ button: attrTag({
		onClick: function() {},
		content: _content_elide("__tests__/template.marko_1*content", () => {
			const $scope1_reason = _persisted_reason();
			const $scope1_id = _scope_id();
			_html("one");
		}, $scope0_id)
	}) });
	$scope0_reason && _scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1, () => [child_default]);
