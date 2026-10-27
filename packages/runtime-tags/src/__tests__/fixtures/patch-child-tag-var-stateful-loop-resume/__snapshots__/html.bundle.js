// tags/ret.marko
const $setup$1 = [[], []];
_shells({ b: "b," });
var ret_default = _template("b", (input) => {
	_scope_reason();
	_scope_id();
	return String(input.x) + "!";
});

// tags/w.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ c: /*@__PURE__*/ (() => `c${_shell_marker($setup)};${((_w0) => `0${_w0}&Db%l`)("")};${((_w0) => `${_w0}<p>r:<!></p>`)("")}`)() });
var w_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_x = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $childScope = _patch_child($scope0_id, "a", 0, $cg__input_x && 1);
	let r = ret_default({ x: input.x });
	$cg__input_x && _var($scope0_id, "b", $childScope, "c0");
	_patch_child_end();
	_html(`<p>r:${_patch_text($scope0_id, "c", r, 2, $scope0_reason, 0)}</p>`);
	_scope($scope0_id, { a: _existing_scope($childScope) });
});

// template.marko
_shells({ a: "a !a0; D l%;<button> </button><!><!>" });
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let s = 0;
	_html(`<button>${_text_resume($scope0_id, "b", s)}</button>${_el_resume($scope0_id, "a")}`);
	_for_until(1, 0, 1, (n) => {
		const $scope1_id = _scope_id();
		_set_scope_reason(2);
		const $childScope = _patch_child($scope1_id, "a", 0);
		w_default({ x: s + n });
		_patch_child_end();
		_scope($scope1_id, { a: _existing_scope($childScope) });
	}, 0, $scope0_id, "c", 1, 1, 0, 0, 1);
	_script($scope0_id, "a0");
	_scope($scope0_id, { d: s });
}, 1);
