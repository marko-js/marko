// template.marko
const $template = "<main></main>";
const $walks = " b";
const $setup = [[], []];
_shells({
	"__tests__/template.marko": "__tests__/template.marko; ;<main></main>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell;D ;<b> </b>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0), $ui__input_show = _unfilled_if($scope0_reason, 0), $fg__input_label = _filled_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<b>${_text_mark($scope1_id, "#text/0", input.label, 1, $scope0_reason, 1)}</b>`);
			_client_guard($scope0_reason, 1) && _patch_render($scope1_id, "__tests__/template.marko_1_input_label#0:4/setup");
			_scope($scope1_id, { _: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:4");
			return 0;
		}
	}, $scope0_id, "#main/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	_html(`</main>${_el_mark($scope0_id, "#main/0", $wg__input_show)}`);
	$fg__input_label && _client_guard($scope0_reason, 0) && _patch_render($scope0_id, "__tests__/template.marko_1_input_label#0:4/setup", "input_label");
	_scope($scope0_id, { input_label: _write_if($scope0_reason, 0) && ($ui__input_show || _unfilled_if($scope0_reason, 1)) && input.label }, "__tests__/template.marko", 0, { input_label: ["input.label"] }) || $fg__input_label && $ui__input_show && _patch_write($scope0_id, "PatchMarkedWrite:input_label", input.label, !_server_guard($scope0_reason, 1));
}, 1);
