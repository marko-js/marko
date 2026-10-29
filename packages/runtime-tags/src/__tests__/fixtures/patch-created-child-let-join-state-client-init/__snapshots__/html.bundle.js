// tags/child.marko
const $template = "<button class=set>set</button><p> </p>";
const $walks = " bD l";
const $setup = [[], ["b0"]];
_shells({ b: "b !b0; bD ;<button class=set>set</button><p> </p>" });
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_data = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let value = input.data;
	let n = 1;
	_html(`<button class=set>set</button>${_el_resume($scope0_id, "a")}<p>${_text_resume($scope0_id, "b", value + n, 1, $cg__input_data << 1, 0, 1)}</p>`);
	_script($scope0_id, "b0");
	_patch_write($scope0_id, "wg", n, 1);
	$cg__input_data && _patch_init($scope0_id, "b1");
	_scope($scope0_id, { g: n });
});

// template.marko
_shells({
	a: "a !a1; D l%;<button class=inc> </button><!><!>",
	a0: /*@__PURE__*/ ((_w0) => `a0${_shell_marker(_shell_setup([["a3"], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${_w0}`)($template)
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button class=inc>${_text_resume($scope0_id, "b", count)}</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(2);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			child_default({ data: count });
			_patch_child_end();
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "c", 1, _write_guard($scope0_reason, 0), 1, 0, 0, ["a0"], $scope0_reason, 0);
	_script($scope0_id, "a1");
	_scope($scope0_id, { g: count });
}, 1);
