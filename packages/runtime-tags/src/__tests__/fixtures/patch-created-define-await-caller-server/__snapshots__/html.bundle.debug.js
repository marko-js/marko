// template.marko
const $Card_content__walks = "b%c";
const $Card_content__template = "<!><!><!>";
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content;D ;<p> </p>",
	"__tests__/template.marko": "__tests__/template.marko !;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ (() => `__tests__/template.marko_1*shell;${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Card_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Card_content__template)}`)()
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const Card = { content: _content("__tests__/template.marko_2*content", ({ promise }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $scope2_page = _page_render();
		_await($scope2_id, "#text/0", promise, (x) => {
			const $scope3_id = _scope_id();
			_html(`<p>${_patch_text($scope3_id, "#text/0", x, void 0, $scope2_reason, 0)}</p>`);
			$scope2_page && _scope($scope3_id, {}, "__tests__/template.marko", "2:4");
		}, 1, "__tests__/template.marko_3*content");
	}, $scope0_id) };
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 1) << 1);
			const $childScope = _patch_child($scope1_id, "#childScope/0");
			Card.content({ promise: input.p });
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "__tests__/template.marko_1_input_p#0:4/init");
			$scope0_page && _scope($scope1_id, {
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "6:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	$scope0_page ? _scope($scope0_id, { input_p: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.p }, "__tests__/template.marko", 0, { input_p: ["input.p"] }) : _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.p, !_server_guard($scope0_reason, 1));
}, 1);
