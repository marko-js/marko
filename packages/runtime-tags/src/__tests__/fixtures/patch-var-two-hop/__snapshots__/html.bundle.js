// tags/doubler/index.marko
const $template$1 = "<span>x2</span>";
const $setup$2 = [[], []];
_shells({ b: "b,<span>x2</span>" });
var doubler_default = _template("b", (input) => {
	_scope_reason();
	_scope_id();
	const double = input.value * 2;
	_html("<span>x2</span>");
	return double;
});

// tags/shower/index.marko
const $template = "<em> </em>";
const $setup$1 = [[], []];
_shells({ c: "c;D ;<em> </em>" });
var shower_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<em>${_text_resume($scope0_id, "a", input.value, void 0, $scope0_reason, 0)}</em>`);
	_scope($scope0_id, {});
});

// template.marko
const $setup = _shell_setup([[], ["a1"]], ["a>", $setup$2], ["c>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0, _w1) => `D0${_w0}&/${_w1}& l`)("b", "D l")};${((_w0, _w1) => `<main>${_w0}${_w1}<button>+</button></main>`)($template$1, $template)}`)() });
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 1;
	_html("<main>");
	const $childScope = _patch_child($scope0_id, "a", 0, 1);
	let double = doubler_default({ value: count });
	_var($scope0_id, "b", $childScope, "a0");
	_patch_child_end();
	_set_scope_reason(2);
	const $childScope2 = _patch_child($scope0_id, "c", 1);
	shower_default({ value: double });
	_patch_child_end();
	_html(`<button>+</button>${_el_resume($scope0_id, "d")}</main>`);
	_script($scope0_id, "a1");
	_scope($scope0_id, {
		e: count,
		a: _existing_scope($childScope),
		c: _existing_scope($childScope2)
	});
}, 1);
