// template.marko
const $PlainChild_content__walks = "Db%l";
const $PlainChild_content__template = "<p>t=<!></p>";
const $template = "<button>+</button><!><!>";
const $walks = " b%c";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; b%;<button>+</button><!><!>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ (() => `__tests__/template.marko_1*shell __tests__/template.marko_1_tab#0:6/init;${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($PlainChild_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($PlainChild_content__template)}`)()
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const PlainChild = { content: _content("__tests__/template.marko_2*content", (input) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $scope2_page = _page_render();
		_html(`<p>t=${_patch_text($scope2_id, "#text/0", input.a + input.b, 2, $scope2_reason, 0)}</p>`);
		_client_guard($scope2_reason, 0) && _patch_init($scope2_id, "__tests__/template.marko_2_input_a#3_input_b#4/init");
		$scope2_page ? _scope($scope2_id, {
			input_a: (_unfilled_if($scope2_reason, 2) || _unfilled_if($scope2_reason, 0) || _unfilled_if($scope2_reason, 1)) && input.a,
			input_b: (_unfilled_if($scope2_reason, 1) || _unfilled_if($scope2_reason, 0) || _unfilled_if($scope2_reason, 2)) && input.b
		}, "__tests__/template.marko", "1:2", {
			input_a: ["input.a", "1:20"],
			input_b: ["input.b", "1:20"]
		}) : (_filled_guard($scope2_reason, 1) && _client_guard($scope2_reason, 2) && _patch_fill($scope2_id, "PatchFill:__tests__/template.marko_fill1", input.a, !_server_guard($scope2_reason, 1)), _filled_guard($scope2_reason, 2) && _client_guard($scope2_reason, 1) && _patch_fill($scope2_id, "PatchFill:__tests__/template.marko_fill2", input.b, !_server_guard($scope2_reason, 2)));
	}, $scope0_id) };
	let tab = 0;
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/0")}`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(14 | _mask_group($scope0_reason, 1) << 5);
			const $childScope = _patch_child($scope1_id, "#childScope/0");
			PlainChild.content({
				a: tab,
				b: input.x
			});
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "__tests__/template.marko_1_input_x#0:5/init");
			$scope0_page && _scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "6:2");
			return 0;
		}
	}, $scope0_id, "#text/1", 1, _write_guard($scope0_reason, 0), void 0, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_page ? _scope($scope0_id, {
		input_x: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.x,
		tab
	}, "__tests__/template.marko", 0, {
		input_x: ["input.x"],
		tab: "4:6"
	}) : _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.x, !_server_guard($scope0_reason, 1));
}, 1);
