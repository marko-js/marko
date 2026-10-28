// tags/kid.marko
const $template = "<button> </button>";
const $walks = " D l";
const $setup$1 = [[], ["b0"]];
_shells({ b: "b !b0; D ;<button> </button>" });
_stateful_return("b");
var kid_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let c = 1;
	_html(`<button>${_text_resume($scope0_id, "b", c)}</button>${_el_resume($scope0_id, "a")}`);
	const $return = c;
	_script($scope0_id, "b0");
	_patch_fill($scope0_id, "vb1", c, 1);
	_scope($scope0_id, { c });
	return $return;
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `0${_w0}&D l`)($walks)};${((_w0) => `${_w0}<p> </p>`)($template)}`)() });
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $childScope = _peek_scope_id($scope0_id, "a", 0, 1);
	let x = kid_default({});
	_var($scope0_id, "b", $childScope, "a0");
	_patch_child_end();
	_html(`<p>${_text_resume($scope0_id, "c", x)}</p>`);
	_scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
