// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
_shells({
	"__tests__/template.marko_2*content": "",
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell;b1;<!><!><!>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const $inputtype_scope = _peek_scope_id();
			let el = _dynamic_tag($scope1_id, "#text/0", input.type, {}, _content_resume("__tests__/template.marko_2*content", () => {
				const $scope2_id = _scope_id();
				_scope_reason();
				_html("body");
			}, $scope1_id), void 0, void 0, "__tests__/template.marko_1_el#2/var", 2, $scope0_reason, 1);
			_var($scope1_id, "#scopeOffset/1", $inputtype_scope, "__tests__/template.marko_1_el#2/var", void 0, 1);
			_scope($scope1_id, {
				el,
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id)
			}, "__tests__/template.marko", "1:2", { el: "2:18" });
			_assert_hoist(el);
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	_script($scope0_id, "__tests__/template.marko_0", $wg__input_show);
	$scope0_page ? _scope($scope0_id, { input_type: _unfilled_if($scope0_reason, 0) && input.type }, "__tests__/template.marko", 0, { input_type: ["input.type"] }) : (_filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill0", input.type, !_server_guard($scope0_reason, 1)), _client_guard($scope0_reason, 0) && _content_withhold(input.type));
}, 1);
