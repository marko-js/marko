// tags/counter.marko
const $template$1 = "<button> </button>";
const $walks$1 = " D l";
const $setup$1 = [[], ["__tests__/tags/counter.marko_0"]];
_shells({ "__tests__/tags/counter.marko": "__tests__/tags/counter.marko !__tests__/tags/counter.marko_0; D ;<button> </button>" });
var counter_default = _template("__tests__/tags/counter.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button>${_text_resume($scope0_id, "#text/1", n)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/tags/counter.marko_0");
	_patch_fill($scope0_id, "PatchFill:__tests__/tags/counter.marko_fill0", n, 1);
	$scope0_page && _scope($scope0_id, { n }, "__tests__/tags/counter.marko", 0, { n: "1:6" });
});

// template.marko
const $template = "<main></main>";
const $walks = " b";
const SITE = "Shop";
function throwIt() {
	throw new Error("boom");
}
const $setup = [[], []];
_shells({
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content",
	"__tests__/template.marko_2*content": /*@__PURE__*/ (() => `__tests__/template.marko_2*content${_shell_marker(_shell_setup([[], []], ["#childScope/2>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `D%c%l/${_w0}&%c`)($walks$1)};${/*@__PURE__*/ ((_w0) => `<p><!> <!></p>${_w0}<!><!>`)($template$1)}`)(),
	"__tests__/template.marko": "__tests__/template.marko; ;<main></main>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell;b%;<!><!><!>",
	"__tests__/template.marko_4*shell": "__tests__/template.marko_4*shell; ; "
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $cg__input_pages = _client_guard($scope0_reason, 0), $wi__input_pages = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<main>");
	_for_of(input.pages, (page) => {
		const $scope1_id = _scope_id();
		const $for_content__page_title__closures = new Set();
		const $for_content__page_fail__closures = new Set();
		_try($scope1_id, "#text/0", () => {
			const $scope2_reason = _scope_reason();
			const $scope2_id = _scope_id();
			_html(`<p>${_patch_text($scope2_id, "#text/0", SITE, void 0, 0, 0)} ${_patch_text($scope2_id, "#text/1", page.title, 2, $scope0_reason, 0)}</p>`);
			const $childScope = _patch_child($scope2_id, "#childScope/2");
			counter_default({});
			_if(() => {
				if (page.fail) {
					const $scope4_id = _scope_id();
					_html(_patch_text($scope4_id, "#text/0", throwIt(), void 0, 0, 0));
					$scope0_page && _scope($scope4_id, {}, "__tests__/template.marko", "10:8");
					return 0;
				}
			}, $scope2_id, "#text/3", 1, _write_guard($scope0_reason, 0), void 0, void 0, void 0, ["__tests__/template.marko_4*shell"], $scope0_reason, 0);
			_unfilled_if($scope0_reason, 0) && _patch_init($scope2_id, $cg__input_pages ? "__tests__/template.marko_2_page_title#1:3/init" : "__tests__/template.marko_2_page_title#1:3/subscribe");
			_unfilled_if($scope0_reason, 0) && _patch_init($scope2_id, $cg__input_pages ? "__tests__/template.marko_2_page_fail#1:4/init" : "__tests__/template.marko_2_page_fail#1:4/subscribe");
			$scope0_page && _subscribe(_unfilled_if($scope0_reason, 0) && $for_content__page_fail__closures, _subscribe(_unfilled_if($scope0_reason, 0) && $for_content__page_title__closures, _scope($scope2_id, {
				_: $wi__input_pages && _scope_with_id($scope1_id),
				"#childScope/2": _existing_scope($childScope)
			}, "__tests__/template.marko", "7:6"), $cg__input_pages && "__tests__/template.marko_2_page_title#1:3/subscribe"), $cg__input_pages && "__tests__/template.marko_2_page_fail#1:4/subscribe");
		}, void 0, () => {
			const $scope3_reason = _scope_reason();
			const $scope3_id = _scope_id();
			_html("caught");
		}, void 0, "__tests__/template.marko_3*content", "__tests__/template.marko_2*content", void 0, void 0, 1);
		$scope0_page && $wi__input_pages && _scope($scope1_id, {
			"ClosureScopes:page_title/5": _unfilled_if($scope0_reason, 0) && $for_content__page_title__closures,
			"ClosureScopes:page_fail/6": _unfilled_if($scope0_reason, 0) && $for_content__page_fail__closures
		}, "__tests__/template.marko", "6:4");
	}, "key", $scope0_id, "#main/0", 1, void 0, void 0, void 0, void 0, "__tests__/template.marko_1*shell", $scope0_reason, 0);
	_html(`</main>${_el_resume($scope0_id, "#main/0")}`);
	$scope0_page && _scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
