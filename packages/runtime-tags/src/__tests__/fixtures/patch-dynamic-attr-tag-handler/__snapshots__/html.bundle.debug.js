// tags/child.marko
const $template$1 = "<div></div>";
const $walks$1 = " b";
const $setup$1 = [[], ["__tests__/tags/child.marko_0_htmlInput#4"]];
_shells({
	"__tests__/tags/child.marko": "__tests__/tags/child.marko !__tests__/tags/child.marko_0_htmlInput#4; ;<div></div>",
	"__tests__/tags/child.marko_1*shell": "__tests__/tags/child.marko_1*shell;b%;<!><!><!>",
	"__tests__/tags/child.marko_2*shell": "__tests__/tags/child.marko_2*shell;b%;<!><!><!>"
});
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_button = _write_guard($scope0_reason, 0), $wi__input_button = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const { button: buttons, ...htmlInput } = input;
	_html(`<div${_attrs(htmlInput, "#div/0", $scope0_id, "div", 0, $scope0_reason, 1)}>`);
	_for_of(buttons, (button) => {
		const $scope1_id = _scope_id();
		_if(() => {
			if (button) {
				const $scope2_id = _scope_id();
				_dynamic_tag($scope2_id, "#text/0", button, {}, 2, 0, 0, $wg__input_button, $scope0_reason, 0);
				_client_guard($scope0_reason, 0) && _patch_init($scope2_id, "__tests__/tags/child.marko_2_button#1:2/init");
				$wi__input_button && _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/tags/child.marko", "4:8");
				return 0;
			}
		}, $scope1_id, "#text/0", 1, $wg__input_button, 1, 0, 0, ["__tests__/tags/child.marko_2*shell"], $scope0_reason, 0);
		$wi__input_button && _scope($scope1_id, {}, "__tests__/tags/child.marko", "3:4");
	}, 0, $scope0_id, "#div/0", 1, 1, 1, 0, 0, "__tests__/tags/child.marko_1*shell", $scope0_reason, 0);
	_html(`</div>${_el_resume($scope0_id, "#div/0")}`);
	_script($scope0_id, "__tests__/tags/child.marko_0_htmlInput#4");
	_scope($scope0_id, {}, "__tests__/tags/child.marko", 0, { "EventAttributes:#div/0": ["...htmlInput", "2:9"] });
});

// template.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)(" b");
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$1]);
_shells({
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content,one",
	"~__tests__/template.marko_1*content": "~__tests__/template.marko_1*content,one",
	"__tests__/template.marko": /*@__PURE__*/ ((_w0) => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `/${_w0}&`)(" b")};${_w0}`)($template$1)
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(0);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	child_default({ button: attrTag({
		onClick: function() {},
		content: _content("__tests__/template.marko_1*content", () => {
			const $scope1_reason = _scope_reason();
			const $scope1_id = _scope_id();
			_html("one");
		}, $scope0_id, 1)
	}) });
	_patch_child_end();
	_scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
