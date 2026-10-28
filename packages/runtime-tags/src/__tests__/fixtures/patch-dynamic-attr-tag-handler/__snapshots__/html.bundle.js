// tags/child.marko
const $template = "<div></div>";
const $setup$1 = [[], ["b3"]];
_shells({
	b: "b !b3; ;<div></div>",
	b2: "b2;b%;<!><!><!>",
	b1: "b1;b%;<!><!><!>"
});
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_button = _write_guard($scope0_reason, 0), $wi__input_button = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const { button: buttons, ...htmlInput } = input;
	_html(`<div${_attrs(htmlInput, "a", $scope0_id, "div", 0, $scope0_reason, 1)}>`);
	_for_of(buttons, (button) => {
		const $scope1_id = _scope_id();
		_if(() => {
			if (button) {
				const $scope2_id = _scope_id();
				_dynamic_tag($scope2_id, "a", button, {}, 2, 0, 0, $wg__input_button, $scope0_reason, 0);
				_client_guard($scope0_reason, 0) && _patch_init($scope2_id, "b0");
				$wi__input_button && _scope($scope2_id, { _: _scope_with_id($scope1_id) });
				return 0;
			}
		}, $scope1_id, "a", 1, $wg__input_button, 1, 0, 0, ["b1"], $scope0_reason, 0);
		$wi__input_button && _scope($scope1_id, {});
	}, 0, $scope0_id, "a", 1, 1, 1, 0, 0, "b2", $scope0_reason, 0);
	_html(`</div>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b3");
	_scope($scope0_id, {});
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({
	a0: "a0,one",
	a: /*@__PURE__*/ ((_w0) => `a${_shell_marker($setup)};${((_w0) => `/${_w0}&`)(" b")};${_w0}`)($template)
});
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(0);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	child_default({ button: attrTag({
		onClick: function() {},
		content: _content("a0", () => {
			_scope_reason();
			_scope_id();
			_html("one");
		}, $scope0_id, 1)
	}) });
	_patch_child_end();
	_scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
