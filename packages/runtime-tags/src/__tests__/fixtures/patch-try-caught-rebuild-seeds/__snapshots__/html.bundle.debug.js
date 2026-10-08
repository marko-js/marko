// tags/counter.marko
const $template$1 = "<button> </button>";
const $walks$1 = " D l";
_shells({ "__tests__/tags/counter.marko": "__tests__/tags/counter.marko !__tests__/tags/counter.marko_0; D ;<button> </button>" });
var counter_default = _template_patch("__tests__/tags/counter.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button>${_text_resume($scope0_id, "#text/1", n)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/tags/counter.marko_0");
	_patch_value($scope0_id, "__tests__/tags/counter.marko_fill0", n, 1);
	$scope0_page && _scope($scope0_id, { n }, "__tests__/tags/counter.marko", 0, { n: "1:6" });
});

// template.marko
const $template = "<main><!></main>";
const $walks = "D%l";
const SITE = "Shop";
function throwIt() {
	throw new Error("boom");
}
_shells({
	"__tests__/template.marko_1*content": /*@__PURE__*/ (() => `__tests__/template.marko_1*content;${/*@__PURE__*/ ((_w0) => `D%c%l/${_w0}&%c`)($walks$1)};${/*@__PURE__*/ ((_w0) => `<p><!> <!></p>${_w0}<!><!>`)($template$1)}`)(),
	"__tests__/template.marko": "__tests__/template.marko;D%;<main><!></main>",
	"__tests__/template.marko_3*shell": "__tests__/template.marko_3*shell; ; "
});
var template_default = _template_patch("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_title__closures = new Set();
	const $input_fail__closures = new Set();
	_html("<main>");
	_try($scope0_id, "#text/0", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_html(`<p>${_patch_text($scope1_id, "#text/0", SITE, void 0, 0, 0)} ${_patch_text($scope1_id, "#text/1", input.title, 2, $scope0_reason, 1)}</p>`);
		const $childScope = _peek_scope_id();
		_patch_child($scope1_id, "#childScope/2", $childScope);
		counter_default({});
		_if(() => {
			if (input.fail) {
				const $scope3_id = _scope_id();
				_html(_patch_text($scope3_id, "#text/0", throwIt(), void 0, 0, 0));
				_scope($scope3_id, {}, "__tests__/template.marko", "9:6");
				return 0;
			}
		}, $scope1_id, "#text/3", 1, _source_guard($scope0_reason, 2), void 0, void 0, void 0, ["__tests__/template.marko_3*shell"], $scope0_reason, 2);
		_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "__tests__/template.marko_1_input_title#0:3/init");
		_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "__tests__/template.marko_1_input_fail#0:4/init");
		_subscribe(_unfilled_if($scope0_reason, 2) && $input_fail__closures, _subscribe(_unfilled_if($scope0_reason, 1) && $input_title__closures, _scope($scope1_id, {
			_: _scope_with_id($scope0_id),
			"#childScope/2": _existing_scope($childScope)
		}, "__tests__/template.marko", "6:4"), _client_guard($scope0_reason, 1) && "__tests__/template.marko_1_input_title#0:3/subscribe"), _client_guard($scope0_reason, 2) && "__tests__/template.marko_1_input_fail#0:4/subscribe");
	}, void 0, () => {
		const $scope2_reason = _scope_reason();
		const $scope2_id = _scope_id();
		_html("caught");
	}, void 0, "__tests__/template.marko_2*content", "__tests__/template.marko_1*content");
	_html("</main>");
	$scope0_page && _scope($scope0_id, {
		"ClosureScopes:input_title/5": _unfilled_if($scope0_reason, 1) && $input_title__closures,
		"ClosureScopes:input_fail/6": _unfilled_if($scope0_reason, 2) && $input_fail__closures
	}, "__tests__/template.marko", 0);
}, 1);
