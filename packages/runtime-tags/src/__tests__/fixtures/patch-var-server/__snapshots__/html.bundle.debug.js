// tags/labeler/index.marko
const $template$1 = "<span>fmt</span>";
const $walks$1 = "b";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/labeler/index.marko": "^__tests__/tags/labeler/index.marko,<span>fmt</span>" });
var labeler_default = _template("__tests__/tags/labeler/index.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html("<span>fmt</span>");
	const $return = "[" + input.title + "]";
	return $return;
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}<p><!> <!></p><button>+</button></main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D0${_w0}&D%c%l l`)("b");
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `D0${_w0}&D%c%l l`)("b")};${((_w0) => `<main>${_w0}<p><!> <!></p><button>+</button></main>`)($template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_title = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main>");
	const $childScope = _patch_child($scope0_id, "#childScope/0", 0, $cg__input_title && 1);
	let label = labeler_default({ title: input.title });
	$cg__input_title && _var($scope0_id, "#scopeOffset/1", $childScope, "__tests__/template.marko_0_label#9/var");
	_patch_child_end();
	_html(`<p>${_text_resume($scope0_id, "#text/2", label, void 0, $scope0_reason, 0)} ${_text_resume($scope0_id, "#text/3", count, 2)}</p><button>+</button>${_el_resume($scope0_id, "#button/4")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		count,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { count: "1:6" });
}, 1);
