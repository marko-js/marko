// tags/doubler/index.marko
const $template$2 = "<span>x2</span>";
const $walks$2 = "b";
_shells({ "__tests__/tags/doubler/index.marko": "^__tests__/tags/doubler/index.marko,<span>x2</span>" });
var doubler_default = _template_patch("__tests__/tags/doubler/index.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const double = input.value * 2;
	_html("<span>x2</span>");
	const $return = double;
	return $return;
});

// tags/shower/index.marko
const $template$1 = "<em> </em>";
const $walks$1 = "D l";
_shells({ "__tests__/tags/shower/index.marko": "__tests__/tags/shower/index.marko;D ;<em> </em>" });
var shower_default = _template_patch("__tests__/tags/shower/index.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<em>${_patch_text($scope0_id, "#text/0", input.value, void 0, $scope0_reason, 0)}</em>`);
	$scope0_page && _scope($scope0_id, {}, "__tests__/tags/shower/index.marko", 0);
});

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `<main>${_w0}${_w1}<button>+</button></main>`)($template$2, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `D0${_w0}&/${_w1}& l`)("b", "D l");
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko !__tests__/template.marko_0;${((_w0, _w1) => `D0${_w0}&/${_w1}& l`)("b", "D l")};${((_w0, _w1) => `<main>${_w0}${_w1}<button>+</button></main>`)($template$2, $template$1)}`)() });
var template_default = _template_patch("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let count = 1;
	_html("<main>");
	_set_scope_reason(2);
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "#childScope/0", $childScope);
	let double = doubler_default({ value: count });
	_var($scope0_id, "#scopeOffset/1", $childScope, "__tests__/template.marko_0_double#5/var");
	_set_scope_reason(2);
	const $childScope2 = _peek_scope_id();
	_patch_child($scope0_id, "#childScope/2", $childScope2);
	shower_default({ value: double });
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/3")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_patch_value($scope0_id, "__tests__/template.marko_fill0", count, 1);
	$scope0_page && _scope($scope0_id, {
		count,
		"#childScope/0": _existing_scope($childScope),
		"#childScope/2": _existing_scope($childScope2)
	}, "__tests__/template.marko", 0, { count: "1:6" });
}, 1);
