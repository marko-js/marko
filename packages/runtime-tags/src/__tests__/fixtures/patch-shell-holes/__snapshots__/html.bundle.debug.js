// template.marko
const $template = "<main><h1> </h1><!></main>";
const $walks = "E l%l";
const $setup = [[], []];
_shells({
	"__tests__/template.marko": "__tests__/template.marko;E l%;<main><h1> </h1><!></main>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell; D ;<a> </a>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_show = _client_guard($scope0_reason, 2), $fg__input_href = _filled_guard($scope0_reason, 3), $fg__input_hidden = _filled_guard($scope0_reason, 4), $fg__input_label = _filled_guard($scope0_reason, 5);
	const $scope0_id = _scope_id();
	_html(`<main><h1>${_text_mark($scope0_id, "#text/0", input.title, 1, $scope0_reason, 1)}</h1>`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<a${_attr("href", input.href, $scope1_id, "PatchAttr:#a/0 href", $scope0_reason, 3)}${_attr("hidden", input.hidden, $scope1_id, "PatchAttr:#a/0 hidden", $scope0_reason, 4)}>${_text_mark($scope1_id, "#text/1", input.label, 1, $scope0_reason, 5)}</a>${_el_mark($scope1_id, "#a/0", _updates_from($scope0_reason, 3) || _updates_from($scope0_reason, 4))}`);
			_client_guard($scope0_reason, 3) && _patch_render($scope1_id, "__tests__/template.marko_1_input_href#0:6/setup");
			_client_guard($scope0_reason, 4) && _patch_render($scope1_id, "__tests__/template.marko_1_input_hidden#0:7/setup");
			_client_guard($scope0_reason, 5) && _patch_render($scope1_id, "__tests__/template.marko_1_input_label#0:8/setup");
			_scope($scope1_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:4");
			return 0;
		}
	}, $scope0_id, "#text/1", 1, _write_guard($scope0_reason, 2), 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 2);
	_html("</main>");
	$fg__input_href && $cg__input_show && _patch_render($scope0_id, "__tests__/template.marko_1_input_href#0:6/setup", "input_href");
	$fg__input_hidden && $cg__input_show && _patch_render($scope0_id, "__tests__/template.marko_1_input_hidden#0:7/setup", "input_hidden");
	$fg__input_label && $cg__input_show && _patch_render($scope0_id, "__tests__/template.marko_1_input_label#0:8/setup", "input_label");
	_scope($scope0_id, {
		input_href: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 3)) && input.href,
		input_hidden: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 4)) && input.hidden,
		input_label: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 5)) && input.label
	}, "__tests__/template.marko", 0, {
		input_href: ["input.href"],
		input_hidden: ["input.hidden"],
		input_label: ["input.label"]
	}) || ($fg__input_href && $cg__input_show && _patch_write($scope0_id, "PatchMarkedWrite:input_href", input.href, !_server_guard($scope0_reason, 3)), $fg__input_hidden && $cg__input_show && _patch_write($scope0_id, "PatchMarkedWrite:input_hidden", input.hidden, !_server_guard($scope0_reason, 4)), $fg__input_label && $cg__input_show && _patch_write($scope0_id, "PatchMarkedWrite:input_label", input.label, !_server_guard($scope0_reason, 5)));
}, 1);
