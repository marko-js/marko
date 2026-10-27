// tags/card/index.marko
const $template$1 = "<section><h2> </h2><!></section>";
const $walks$1 = "E l%l";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/card/index.marko": "__tests__/tags/card/index.marko;E l%;<section><h2> </h2><!></section>" });
var card_default = _template("__tests__/tags/card/index.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<section><h2>${_patch_text($scope0_id, "#text/0", input.title, void 0, $scope0_reason, 0)}</h2>`);
	_dynamic_tag($scope0_id, "#text/1", input.content, {}, 0, 0, _write_guard($scope0_reason, 1), void 0, 2, $scope0_reason, 1);
	_html("</section>");
	$scope0_page && _scope($scope0_id, {}, "__tests__/tags/card/index.marko", 0);
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}<!></main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}&%l`)($walks$1);
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$1]);
_shells({
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content;D ;<i> </i>",
	"__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `D/${_w0}&%l`)($walks$1)};${((_w0) => `<main>${_w0}<!></main>`)($template$1)}`)(),
	"__tests__/template.marko_2*shell": /*@__PURE__*/ ((_w0) => `__tests__/template.marko_2*shell${_shell_marker(_shell_setup([[], []], ["#childScope/0>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1)};${_w0}`)($template$1)
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	_html("<main>");
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
	const $childScope = _patch_child($scope0_id, "#childScope/0");
	card_default({
		title: input.title,
		content: _content("__tests__/template.marko_1*content", () => {
			const $scope1_reason = _scope_reason(), $scope1_page = _page_render();
			const $scope1_id = _scope_id();
			_html(`<em>${_patch_text($scope1_id, "#text/0", $global$1.brand)}</em>`);
			_fill_global_subscribe("__tests__/template.marko_1_$global_brand#0:7", $scope1_id);
			$scope1_page && _scope($scope1_id, {}, "__tests__/template.marko", "2:4");
		}, $scope0_id)
	});
	_if(() => {
		if (input.show) {
			const $scope2_id = _scope_id();
			_set_scope_reason(0);
			const $childScope2 = _patch_child($scope2_id, "#childScope/0");
			card_default({
				title: "x",
				content: _content_elide("__tests__/template.marko_3*content", () => {
					const $scope3_reason = _scope_reason(), $scope3_page = _page_render();
					const $scope3_id = _scope_id();
					_html(`<i>${_patch_text($scope3_id, "#text/0", $global$1.brand)}</i>`);
					_fill_global_subscribe("__tests__/template.marko_3_$global_brand#0:7", $scope3_id);
					$scope3_page && _scope($scope3_id, {}, "__tests__/template.marko", "6:6");
				}, $scope2_id)
			});
			$scope0_page && _scope($scope2_id, { "#childScope/0": _existing_scope($childScope2) }, "__tests__/template.marko", "5:4");
			return 0;
		}
	}, $scope0_id, "#text/1", 1, _write_guard($scope0_reason, 1), void 0, void 0, void 0, ["__tests__/template.marko_2*shell"], $scope0_reason, 1);
	_html("</main>");
	$scope0_page && _scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
