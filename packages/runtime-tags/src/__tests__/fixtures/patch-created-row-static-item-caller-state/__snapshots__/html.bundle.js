// tags/rows.marko
const $template = "<!><!><!>";
const $setup = [[], []];
_shells({
	b: "b;b%;<!><!><!>",
	b1: "b1;D ;<em> </em>"
});
var rows_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_for_of([1, 2], (x) => {
		const $scope1_id = _scope_id();
		_html(`<em>${_text_resume($scope1_id, "a", input.label + x, void 0, $scope0_reason, 0)}</em>`);
		$cg__input_label && _patch_write($scope1_id, "wc", x, 1);
		$cg__input_label && _patch_init($scope1_id, "b0");
		_scope($scope1_id, {
			c: _unfilled_if($scope0_reason, 0) && x,
			_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id)
		});
	}, 0, $scope0_id, "a", 1, void 0, void 0, void 0, void 0, "b1", 0, 0);
	_scope($scope0_id, {});
});

// template.marko
_shells({
	a: "a !a1;b%b ;<!><!><button class=l>l</button>",
	a0: /*@__PURE__*/ (() => `a0${_shell_marker(_shell_setup([["a3"], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c")};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let l = "a";
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(2);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			rows_default({ label: l });
			_patch_child_end();
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 0), void 0, void 0, void 0, ["a0"], $scope0_reason, 0);
	_html(`<button class=l>l</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a1");
	_scope($scope0_id, { f: l });
}, 1);
