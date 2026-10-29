// tags/two.marko
const $setup = [[], []];
_shells({ b: "b," });
var two_default = _template("b", (input) => {
	_scope_reason();
	_scope_id();
	return "t";
});

// template.marko
_shells({
	a: "a;b%;<!><!><!>",
	a2: /*@__PURE__*/ (() => `a2${_shell_marker(_shell_setup([["a4"], ["a0"]], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `0${_w0}&D l b`)("")};${/*@__PURE__*/ ((_w0) => `${_w0}<span> </span><button class=b>b</button>`)("")}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let b = 1;
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			let v = two_default({});
			_patch_child_end();
			_html(`<span>${_text_resume($scope1_id, "c", v + b)}</span><button class=b>b</button>${_el_resume($scope1_id, "d")}`);
			_script($scope1_id, "a0");
			_patch_write($scope1_id, "wf", v, 1);
			_patch_fill($scope1_id, "va1", b, 1);
			_scope($scope1_id, {
				e: b,
				f: v,
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a2"], $scope0_reason, 0);
	_scope($scope0_id, {});
}, 1);
