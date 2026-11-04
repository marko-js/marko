// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko": "__tests__/template.marko;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell;D ;<p> </p>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 5), $ui__input_decor__OR__input_text = _unfilled_if($scope0_reason, 1), $ui__input_show__OR__input_text = _unfilled_if($scope0_reason, 2), $wi__input_show__OR__input_text = _write_if($scope0_reason, 2), $ui__input_decor__OR__input_show = _unfilled_if($scope0_reason, 0), $sg__input_decor = _server_guard($scope0_reason, 4), $fg__input_decor2 = _filled_guard($scope0_reason, 4), $fg__input_text = _filled_guard($scope0_reason, 6), $cg__input_show = _client_guard($scope0_reason, 5);
	const $scope0_id = _scope_id();
	$fg__input_decor2 && $ui__input_show__OR__input_text && _patch_write($scope0_id, "PatchMarkedWrite:input_decor", input.decor, !$sg__input_decor);
	const fmt = _bind_resume(function(text) {
		return text + input.decor.mark();
	}, "__tests__/template.marko_0/fmt", $scope0_id);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id(), $fg__input_decor = _filled_guard($scope0_reason, 4);
			_html(`<p>${_html_mark($scope1_id, "#text/0", fmt(input.text), 1, $scope0_reason, 1)}</p>`);
			_patch_render($scope1_id, "__tests__/template.marko_1_input_text#0:5_fmt#0:6/setup", ((_filled_guard($scope0_reason, 6) ? " >input_text" : "") + ($fg__input_decor ? " >fmt" : "") + ($fg__input_decor ? " >input_decor" : "")).slice(1), $scope0_reason, 1);
			_scope($scope1_id, { _: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id) }, "__tests__/template.marko", "4:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 5);
	$fg__input_text && $cg__input_show && _patch_render($scope0_id, "__tests__/template.marko_1_input_text#0:5/setup", "input_text");
	$fg__input_decor2 && $cg__input_show && _patch_render($scope0_id, "__tests__/template.marko_1_fmt#0:6/setup", "fmt input_decor");
	_scope($scope0_id, {
		input_decor: $wi__input_show__OR__input_text && ($ui__input_show__OR__input_text || $ui__input_decor__OR__input_text) && input.decor,
		input_text: _write_if($scope0_reason, 0) && ($ui__input_decor__OR__input_show || $ui__input_decor__OR__input_text) && input.text,
		fmt: $wi__input_show__OR__input_text && ($ui__input_show__OR__input_text || $ui__input_decor__OR__input_text) && fmt
	}, "__tests__/template.marko", 0, {
		input_decor: ["input.decor"],
		input_text: ["input.text"],
		fmt: "1:8"
	}) || ($fg__input_text && $ui__input_decor__OR__input_show && _patch_write($scope0_id, "PatchMarkedWrite:input_text", input.text, !_server_guard($scope0_reason, 6)), $fg__input_decor2 && $ui__input_show__OR__input_text && _patch_write($scope0_id, "PatchMarkedWrite:fmt", fmt, !$sg__input_decor));
}, 1);
