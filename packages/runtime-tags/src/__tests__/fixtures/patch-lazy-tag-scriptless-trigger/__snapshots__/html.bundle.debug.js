// child.marko
const $template$1 = "<p class=child> </p>";
const $walks$1 = "D l";
_shells({ "__tests__/child.marko": "__tests__/child.marko;D ;<p class=child> </p>" });
var child_default = _template_patch("__tests__/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<p class=child>${_patch_text($scope0_id, "#text/0", input.label, void 0, $scope0_reason, 0)}</p>`);
	$scope0_page && _scope($scope0_id, {}, "__tests__/child.marko", 0);
}, 0, 0);

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, "ready:__tests__/child.marko", [{
	type: "on-click",
	selector: "body"
}], 1);
const $template = "<main></main>";
const $walks = " b";
_shells({
	"__tests__/template.marko": "__tests__/template.marko; ;<main></main>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell __tests__/template.marko_1_#text#0/init;b%/&;<!><!><!>"
});
var template_default = _template_patch("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_show = _source_guard($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_serialize_reason(_mask_group($scope0_reason, 2) << 1);
			const $childScope = _peek_scope_id();
			_patch_child($scope1_id, "#childScope/1", $childScope);
			$Child_withLoadAssets({ label: input.label });
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				"#childScope/1": _existing_scope($childScope)
			}, "__tests__/template.marko", "4:4");
			return 0;
		}
	}, $scope0_id, "#main/0", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 1);
	_html(`</main>${_el_resume($scope0_id, "#main/0", $sg__input_show)}`);
	$scope0_page && _scope($scope0_id, { input_label: input.label }, "__tests__/template.marko", 0, { input_label: ["input.label"] });
}, 1, () => [$Child_withLoadAssets]);
