// tags/row.marko
const $template = "<li><!><!></li>";
const $walks = "D%b%l";
const $setup = [[], []];
_shells({ b: "b;D%b%;<li><!><!></li>" });
var row_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<li>${_text_resume($scope0_id, "a", input.item.name, 1, $scope0_reason, 0)}${_text_resume($scope0_id, "b", input.item.hot ? " 🔥" : "", 2, $scope0_reason, 1)}</li>`);
	_scope($scope0_id, {});
});

// template.marko
_shells({
	a: "a !a1; b D ;<ul></ul><button> </button>",
	a0: /*@__PURE__*/ ((_w0) => `a0${_shell_marker(_shell_setup([[], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${_w0}`)($template)
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<ul>");
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 0) << 3);
		const $childScope = _peek_scope_id($scope1_id, "a", 0);
		row_default({ item });
		_patch_child_end();
		_scope($scope1_id, { a: _existing_scope($childScope) });
	}, (item) => item.id, $scope0_id, "a", 1, 1, 1, 0, 0, "a0", $scope0_reason, 0);
	_html(`</ul>${_el_resume($scope0_id, "a")}<button>${_text_resume($scope0_id, "c", count)}</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a1");
	_scope($scope0_id, { g: count });
}, 1);
