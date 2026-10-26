// child.marko
const $template$1 = "<p class=child> </p>";
const $walks$1 = "D l";
const $setup$1 = [[], []];
_shells({ "__tests__/child.marko": "__tests__/child.marko;D ;<p class=child> </p>" });
var child_default = _template("__tests__/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<p class=child>${_patch_text($scope0_id, "#text/0", input.label, void 0, $scope0_reason, 0)}</p>`);
	$scope0_page && _scope($scope0_id, {}, "__tests__/child.marko", 0);
});

// template.marko
const $template = "<main><!></main>";
const $walks = "D%l";
const $Child_withLoadAssets = withLoadAssets(() => child_default, "__tests__/child.marko", flush, "ready:__tests__/child.marko");
const $setup = [[], []];
_shells({ "__tests__/template.marko": "__tests__/template.marko !;D%;<main><!></main>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show__OR__input_label = _write_guard($scope0_reason, 0), $cg__input_label = _client_guard($scope0_reason, 2), $cg__input_show = _client_guard($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<main>");
	_dynamic_tag($scope0_id, "#text/0", input.show ? $Child_withLoadAssets : null, { label: input.label }, 0, 0, $wg__input_show__OR__input_label, void 0, 1, $scope0_reason, 0);
	_html("</main>");
	$scope0_page ? _scope($scope0_id, {
		input_show: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.show,
		input_label: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 2)) && input.label
	}, "__tests__/template.marko", 0, {
		input_show: ["input.show"],
		input_label: ["input.label"]
	}) : (_filled_guard($scope0_reason, 1) && $cg__input_label && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.show, !_server_guard($scope0_reason, 1)), $cg__input_label && _content_withhold(input.show), _filled_guard($scope0_reason, 2) && $cg__input_show && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill1", input.label, !_server_guard($scope0_reason, 2)), $cg__input_show && _content_withhold(input.label));
}, 1);
