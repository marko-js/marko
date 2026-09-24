// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
_shells({
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell;b1;<!><!><!>"
});
var template_default = _template_patch("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_show = _source_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const $tag = input.type;
			const $inputtype_scope = _peek_scope_id();
			let el = _dynamic_tag($scope1_id, "#text/0", $tag, {}, _content_resume("__tests__/template.marko_2*content", () => {
				const $scope2_id = _scope_id();
				const $scope2_reason = _scope_reason();
				_html("body");
			}, $scope1_id), void 0, void 0, _patch_dynamic_tag($scope1_id, "#text/0", $tag, 0, "__tests__/template.marko_2*content", "__tests__/template.marko_1_el#2/var", $scope0_reason, 1));
			_filled_guard($scope0_reason, 1) && _patch_write($scope1_id, "el", el);
			_var($scope1_id, "#scopeOffset/1", $inputtype_scope, "__tests__/template.marko_1_el#2/var");
			_scope($scope1_id, {
				el,
				_: _scope_with_id($scope0_id)
			}, "__tests__/template.marko", "1:2", { el: "2:18" });
			_assert_hoist(el);
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	_script($scope0_id, "__tests__/template.marko_0", $sg__input_show);
	$scope0_page && _scope($scope0_id, { input_type: input.type }, "__tests__/template.marko", 0, { input_type: ["input.type"] });
}, 1, 1);
