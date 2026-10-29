// tags/child.marko
const $template = "<span> </span><button class=b>b</button>";
const $walks = "D l b";
const $setup = [["b2"], ["b0"]];
_shells({ b: "b b2!b0;D l ;<span> </span><button class=b>b</button>" });
var child_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let a = 1;
	let b = 2;
	_html(`<span>${_text_resume($scope0_id, "a", 3)}</span><button class=b>b</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "b0");
	_patch_write($scope0_id, "wc", a, 1);
	_patch_fill($scope0_id, "vb1", b, 1);
	_scope($scope0_id, {
		c: a,
		d: b
	});
});

// template.marko
_shells({
	a: "a;b%;<!><!><!>",
	a0: /*@__PURE__*/ ((_w0) => `a0${_shell_marker(_shell_setup([[], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${_w0}`)($template)
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			child_default({});
			_patch_child_end();
			_scope($scope1_id, { a: _existing_scope($childScope) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a0"], $scope0_reason, 0);
	_scope($scope0_id, {});
}, 1);
