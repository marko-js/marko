// tags/g-badge/index.marko
const $template = "<p><!> <!></p>";
const $walks = "D%c%l";
const $setup$1 = [[], []];
_shells({ b: "b;D%c%;<p><!> <!></p>" });
var g_badge_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	_html(`<p>${_text_resume($scope0_id, "a", input.value, void 0, $scope0_reason, 0)} ${_text_resume($scope0_id, "b", $global$1.flag, 2, 4, 0)}</p>`);
	_fill_global_subscribe("b0", $scope0_id);
	_scope($scope0_id, {});
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["a>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `D/${_w0}& l`)($walks)};${((_w0) => `<main>${_w0}<button>+</button></main>`)($template)}`)() });
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main>");
	_set_scope_reason(2);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	g_badge_default({ value: count });
	_patch_child_end();
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		c: count,
		a: _existing_scope($childScope)
	});
}, 1);
