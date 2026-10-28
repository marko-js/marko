// tags/alpha.marko
const $template$3 = "<i>A <!></i>";
const $walks$3 = "Db%l";
const $setup$3 = [[], []];
_shells({ "__tests__/tags/alpha.marko": "__tests__/tags/alpha.marko;Db%;<i>A <!></i>" });
var alpha_default = _template("__tests__/tags/alpha.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	_html(`<i>A ${_text_resume($scope0_id, "#text/0", $global$1.brand, 2, 4, 0)}</i>`);
	_fill_global_subscribe("__tests__/tags/alpha.marko_0_$global_brand#4", $scope0_id);
	_scope($scope0_id, {}, "__tests__/tags/alpha.marko", 0);
});

// tags/beta.marko
const $template$2 = "<b>B</b>";
const $walks$2 = "b";
const $setup$2 = [[], []];
_shells({ "__tests__/tags/beta.marko": "__tests__/tags/beta.marko,<b>B</b>" });
var beta_default = _template("__tests__/tags/beta.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html("<b>B</b>");
});

// tags/child.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/child.marko": "__tests__/tags/child.marko;b%;<!><!><!>" });
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_value = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const Tag = input.value % 2 ? alpha_default : beta_default;
	_dynamic_tag($scope0_id, "#text/0", Tag, {}, 2, 0, 0, $wg__input_value, $scope0_reason, 0);
	_scope($scope0_id, {}, "__tests__/tags/child.marko", 0);
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main><h1> </h1><button>+</button>${_w0}</main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `E l b/${_w0}&l`)("b%c");
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/2>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `E l b/${_w0}&l`)("b%c")};${((_w0) => `<main><h1> </h1><button>+</button>${_w0}</main>`)($template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = 1;
	_html(`<main><h1>${_text_resume($scope0_id, "#text/0", input.title, void 0, $scope0_reason, 0)}</h1><button>+</button>${_el_resume($scope0_id, "#button/1")}`);
	_set_scope_reason(2);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/2", 0);
	child_default({ value: n });
	_patch_child_end();
	_html("</main>");
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		n,
		"#childScope/2": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { n: "1:6" });
}, 1);
