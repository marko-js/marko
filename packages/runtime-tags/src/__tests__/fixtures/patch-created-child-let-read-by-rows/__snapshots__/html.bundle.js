// tags/picker.marko
const $template = "<!><!><!>";
const $setup = [[], []];
_shells({
	b: "b !;b%;<!><!><!>",
	b1: "b1 b4!b0; D%b%;<button><!><!></button>"
});
var picker_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let sel = 1;
	_for_of([1, 2], (item) => {
		const $scope1_id = _scope_id();
		_html(`<button>${_text_mark($scope1_id, "b", item === sel ? "*" : "")}${_text_mark($scope1_id, "c", item, 2, 0, 0)}</button>${_el_mark($scope1_id, "a")}`);
		_script($scope1_id, "b0");
		_patch_write($scope1_id, "we", item, 1);
		_scope($scope1_id, {
			e: item,
			_: _scope_with_id($scope0_id)
		});
	}, 0, $scope0_id, "a", 1, 1, 1, 0, 0, "b1", 0, 0);
	_patch_fill($scope0_id, "vb2", sel, 1);
	_scope($scope0_id, {});
});

// template.marko
_shells({
	a: "a;b%;<!><!><!>",
	a0: `a0${_shell_marker([[], []], ["a>", $setup])};${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c")};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template)}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			picker_default({});
			_patch_child_end();
			_scope($scope1_id, { a: _existing_scope($childScope) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a0"], $scope0_reason, 0);
	_scope($scope0_id, {});
}, 1);
