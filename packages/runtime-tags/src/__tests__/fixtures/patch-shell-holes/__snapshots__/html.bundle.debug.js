// template.marko
const $template = "<main><h1> </h1><!></main>";
const $walks = "E l%l";
_shells({
	"__tests__/template.marko": "__tests__/template.marko;E l%;<main><h1> </h1><!></main>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell; D ;<a> </a>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<main><h1>${_patch_text($scope0_id, "#text/0", input.title, void 0, $scope0_reason, 1)}</h1>`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<a${_patch_attr($scope1_id, "PatchAttr:#a/0 href", "href", input.href, $scope0_reason, 3)}${_patch_attr($scope1_id, "PatchAttr:#a/0 hidden", "hidden", input.hidden, $scope0_reason, 4)}>${_patch_text($scope1_id, "#text/1", input.label, void 0, $scope0_reason, 5)}</a>${_el_resume($scope1_id, "#a/0", _mask_group($scope0_reason, 3) || _mask_group($scope0_reason, 4))}`);
			_scope($scope1_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:4");
			return 0;
		}
	}, $scope0_id, "#text/1", 1, _write_guard($scope0_reason, 2), void 0, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 2);
	_html("</main>");
	$scope0_page ? _scope($scope0_id, {
		input_href: _unfilled_if($scope0_reason, 2) && input.href,
		input_hidden: _unfilled_if($scope0_reason, 2) && input.hidden,
		input_label: _unfilled_if($scope0_reason, 2) && input.label
	}, "__tests__/template.marko", 0, {
		input_href: ["input.href"],
		input_hidden: ["input.hidden"],
		input_label: ["input.label"]
	}) : (_filled_guard($scope0_reason, 3) && _client_guard($scope0_reason, 2) && _patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill0", input.href, !_server_guard($scope0_reason, 3)), _filled_guard($scope0_reason, 4) && _client_guard($scope0_reason, 2) && _patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill1", input.hidden, !_server_guard($scope0_reason, 4)), _filled_guard($scope0_reason, 5) && _client_guard($scope0_reason, 2) && _patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill2", input.label, !_server_guard($scope0_reason, 5)));
}, 1);
