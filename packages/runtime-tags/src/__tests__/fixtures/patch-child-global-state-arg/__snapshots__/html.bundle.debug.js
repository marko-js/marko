// tags/label-text.marko
const $template$1 = "<p> </p>";
const $walks$1 = "D l";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/label-text.marko": "__tests__/tags/label-text.marko;D ;<p> </p>" });
var label_text_default = _template("__tests__/tags/label-text.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<p>${_patch_text($scope0_id, "#text/0", input.v, void 0, $scope0_reason, 0)}</p>`);
	$scope0_page && _scope($scope0_id, {}, "__tests__/tags/label-text.marko", 0);
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<button> </button>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}& D l`)("D l");
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `/${_w0}& D l`)("D l")};${((_w0) => `${_w0}<button> </button>`)($template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	let count = 0;
	_set_scope_reason(2);
	const $childScope = _patch_child($scope0_id, "#childScope/0");
	label_text_default({ v: count + $global$1.suffix });
	_html(`<button>${_text_resume($scope0_id, "#text/2", count)}</button>${_el_resume($scope0_id, "#button/1")}`);
	_fill_global_subscribe("__tests__/template.marko_0_count#3_$global_suffix#5", $scope0_id, 1);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_page && _scope($scope0_id, {
		count,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { count: "1:6" });
}, 1);
