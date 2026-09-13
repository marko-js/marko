// child.marko
const $template$1 = "<p class=child> </p>";
const $walks$1 = "D l";
_shells({ "__tests__/child.marko": "__tests__/child.marko;D ;<p class=child> </p>" });
var child_default = _template_persisted("__tests__/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<p class=child>${_patch_text($scope0_id, "#text/0", input.label, void 0, $scope0_reason, 0)}</p>`);
	$scope0_page && _scope($scope0_id, {}, "__tests__/child.marko", 0);
}, 0, 0);

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, "ready:__tests__/child.marko", void 0, 1);
const $template = "<main><!></main>";
const $walks = "D%l";
_shells({ "__tests__/template.marko": "__tests__/template.marko;D%;<main><!></main>" });
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_show__OR__input_label = _source_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<main>");
	const $tag = input.show ? $Child_withLoadAssets : null;
	const $input2 = { label: input.label };
	_dynamic_tag($scope0_id, "#text/0", $tag, $input2, 0, 0, $sg__input_show__OR__input_label, _patch_dynamic_tag($scope0_id, "#text/0", $tag, $input2, 0, 0, $scope0_reason, 0));
	_html("</main>");
	$scope0_page && _scope($scope0_id, {
		input_show: _source_if($scope0_reason, 2) && input.show,
		input_label: _source_if($scope0_reason, 1) && input.label
	}, "__tests__/template.marko", 0, {
		input_show: ["input.show"],
		input_label: ["input.label"]
	});
}, 1, 1);
