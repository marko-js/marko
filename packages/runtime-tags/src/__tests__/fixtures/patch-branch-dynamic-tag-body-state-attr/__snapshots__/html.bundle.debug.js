// template.marko
const $template = "<!><!><button>+</button>";
const $walks = "b%b b";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content __tests__/template.marko_2_count#0:6/init",
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;b%b ;<!><!><button>+</button>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell;b%;<!><!><!>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_tag = _write_guard($scope0_reason, 1), $scope0_page = _page_render(), $cg__input_show = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $count__closures = new Set();
	let count = 0;
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "#text/0", input.tag, {}, _content_resume("__tests__/template.marko_2*content", () => {
				const $scope2_id = _scope_id();
				const $scope2_reason = _scope_reason(), $scope2_page = _page_render();
				_html(`<span${_attr("data-n", count)}>x</span>${_el_resume($scope2_id, "#span/0")}`);
				$scope2_page && _subscribe($count__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "3:6"));
			}, $scope1_id), 0, $wg__input_tag, void 0, 2, $scope0_reason, 1);
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "__tests__/template.marko_1_input_tag#0:5/init");
			$scope0_page && _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, _write_guard($scope0_reason, 0), void 0, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_page ? _scope($scope0_id, {
		input_tag: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.tag,
		count,
		"ClosureScopes:count/8": $count__closures
	}, "__tests__/template.marko", 0, {
		input_tag: ["input.tag"],
		count: "1:6"
	}) : (_filled_guard($scope0_reason, 1) && $cg__input_show && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.tag, !_server_guard($scope0_reason, 1)), $cg__input_show && _content_withhold(input.tag));
}, 1);
