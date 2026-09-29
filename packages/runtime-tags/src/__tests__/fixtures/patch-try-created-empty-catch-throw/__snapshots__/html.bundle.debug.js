// tags/counter.marko
const $template$1 = "<button> </button>";
const $walks$1 = " D l";
function fail() {
	throw new Error("boom");
}
_shells({ "__tests__/tags/counter.marko": "__tests__/tags/counter.marko !__tests__/tags/counter.marko_0; D ;<button> </button>" });
var counter_default = _template_patch("__tests__/tags/counter.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button>${_text_resume($scope0_id, "#text/1", n ? fail() : "ok")}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/tags/counter.marko_0");
	_patch_value($scope0_id, "__tests__/tags/counter.marko_fill0", n, 1);
	$scope0_page && _scope($scope0_id, { n }, "__tests__/tags/counter.marko", 0, { n: "1:6" });
}, 0, 0);

// template.marko
const $template = "<main></main>";
const $walks = " b";
_shells({
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content;D ;<em> </em>",
	"__tests__/template.marko_2_#text#0/await": "__tests__/template.marko_2_#text#0/await;D ;<em> </em>",
	"__tests__/template.marko_2*content": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko_2*content;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `b%b/${_w0}&`)($walks$1), /*@__PURE__*/ ((_w0) => `<!><!>${_w0}`)($template$1)),
	"__tests__/template.marko": "__tests__/template.marko; ;<main></main>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell;b%;<!><!><!>"
});
var template_default = _template_patch("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $sg__input_show = _source_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_promise__closures = new Set();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_try($scope1_id, "#text/0", () => {
				const $scope2_reason = _scope_reason();
				const $scope2_id = _scope_id();
				_await($scope2_id, "#text/0", input.promise, (v) => {
					const $scope3_id = _scope_id();
					_html(`<em>${_patch_text($scope3_id, "#text/0", v, void 0, $scope0_reason, 2)}</em>`);
					_scope($scope3_id, {}, "__tests__/template.marko", "4:8");
				}, 1, "__tests__/template.marko_3*content");
				const $childScope = _peek_scope_id();
				_patch_child($scope2_id, "#childScope/1", $childScope);
				counter_default({});
				_subscribe(_unfilled_if($scope0_reason, 2) && $input_promise__closures, _scope($scope2_id, {
					_: _scope_with_id($scope1_id),
					"#childScope/1": _existing_scope($childScope)
				}, "__tests__/template.marko", "3:6"), _client_guard($scope0_reason, 2) && "__tests__/template.marko_2_input_promise#0:4/subscribe");
			}, void 0, () => {}, void 0, "__tests__/template.marko_1_#text#0/catch", "__tests__/template.marko_2*content");
			$scope0_page && _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:4");
			return 0;
		}
	}, $scope0_id, "#main/0", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 1);
	_html(`</main>${_el_resume($scope0_id, "#main/0", $sg__input_show)}`);
	$scope0_page && _scope($scope0_id, {
		input_promise: _source_if($scope0_reason, 1) && input.promise,
		"ClosureScopes:input_promise/5": $input_promise__closures
	}, "__tests__/template.marko", 0, { input_promise: ["input.promise"] });
}, 1, () => [counter_default]);
