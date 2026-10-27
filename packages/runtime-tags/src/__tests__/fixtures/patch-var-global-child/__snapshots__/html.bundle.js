// tags/greet/index.marko
const $template = "<span> </span>";
const $setup$1 = [[], []];
_shells({ b: "b;D ;<span> </span>" });
var greet_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	const double = input.n * 2;
	_html(`<span>${_patch_text($scope0_id, "a", $global$1.locale)}</span>`);
	const $return = double;
	_fill_global_subscribe("b0", $scope0_id);
	_scope($scope0_id, {});
	return $return;
});

// template.marko
const $setup = _shell_setup([[], ["a1"]], ["a>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `D0${_w0}&D l l`)("D l")};${((_w0) => `<main>${_w0}<p> </p><button>+</button></main>`)($template)}`)() });
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 1;
	_html("<main>");
	const $childScope = _patch_child($scope0_id, "a", 0, 1);
	let d = greet_default({ n: count });
	_var($scope0_id, "b", $childScope, "a0");
	_patch_child_end();
	_html(`<p>${_text_resume($scope0_id, "c", d)}</p><button>+</button>${_el_resume($scope0_id, "d")}</main>`);
	_script($scope0_id, "a1");
	_scope($scope0_id, {
		e: count,
		a: _existing_scope($childScope)
	});
}, 1);
