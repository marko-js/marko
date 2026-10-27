// template.marko
_shells({ a: "a !a1;E l ;<main><h1> </h1><textarea></textarea></main>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<main><h1>${_patch_text($scope0_id, "a", input.title, void 0, $scope0_reason, 0)}</h1><textarea>${_patch_textarea_value($scope0_id, "b", input.text, _resume(function(next) {
		document.querySelector("main").dataset.text = next;
	}, "a0"), "n2b", $scope0_reason, 1, "wEb", $scope0_reason, 1)}</textarea>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a1");
	_scope($scope0_id, {});
}, 1);
