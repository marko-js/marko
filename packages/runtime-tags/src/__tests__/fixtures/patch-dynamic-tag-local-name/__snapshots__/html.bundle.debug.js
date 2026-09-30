// tags/alpha.marko
const $template$3 = "<i>A <!></i>";
const $walks$3 = "Db%l";
_shells({ "__tests__/tags/alpha.marko": "__tests__/tags/alpha.marko;Db%;<i>A <!></i>" });
var alpha_default = _template_patch("__tests__/tags/alpha.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	_html(`<i>A ${_patch_text($scope0_id, "#text/0", $global$1.brand, 2)}</i>`);
	_global_subscribe("__tests__/tags/alpha.marko_0_$global_brand#1/global", $scope0_id);
	$scope0_page && _scope($scope0_id, {}, "__tests__/tags/alpha.marko", 0);
}, 0, 1);

// tags/beta.marko
const $template$2 = "<b>B</b>";
const $walks$2 = "b";
_shells({ "__tests__/tags/beta.marko": "__tests__/tags/beta.marko,<b>B</b>" });
var beta_default = _template_patch("__tests__/tags/beta.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html("<b>B</b>");
}, 0, 0);

// tags/child.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
_shells({ "__tests__/tags/child.marko": "__tests__/tags/child.marko;b%;<!><!><!>" });
var child_default = _template_patch("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_value = _source_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const Tag = input.value % 2 ? alpha_default : beta_default;
	_dynamic_tag($scope0_id, "#text/0", Tag, {}, 0, 0, $sg__input_value, _patch_dynamic_tag($scope0_id, "#text/0", Tag, 0, 0, 0, $scope0_reason, 0));
	$scope0_page && _scope($scope0_id, {}, "__tests__/tags/child.marko", 0);
}, 0, 1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main><h1> </h1><button>+</button>${_w0}</main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `E l b/${_w0}&l`)("b%c");
_shells({ "__tests__/template.marko": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko !__tests__/template.marko_0;${_w0};${_w1}`)(((_w0) => `E l b/${_w0}&l`)("b%c"), ((_w0) => `<main><h1> </h1><button>+</button>${_w0}</main>`)($template$1)) });
var template_default = _template_patch("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let n = 1;
	_html(`<main><h1>${_patch_text($scope0_id, "#text/0", input.title, void 0, $scope0_reason, 0)}</h1><button>+</button>${_el_resume($scope0_id, "#button/1")}`);
	const $childScope = _peek_scope_id();
	if ($scope0_page || _must_render(child_default)) {
		_set_serialize_reason(2);
		_patch_child($scope0_id, "#childScope/2", $childScope);
		child_default({ value: n });
	}
	_html("</main>");
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_page && _scope($scope0_id, {
		n,
		"#childScope/2": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { n: "1:6" });
}, 1, () => [child_default]);
