// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko": "__tests__/template.marko !;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell;D ;<p> </p>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 5), $cg__input_show = _client_guard($scope0_reason, 5), $sg__input_decor = _server_guard($scope0_reason, 4);
	const $scope0_id = _scope_id();
	_filled_guard($scope0_reason, 4) && _unfilled_if($scope0_reason, 1) && _patch_write($scope0_id, "PatchMarkedWrite:input_decor", input.decor, !$sg__input_decor);
	const fmt = _bind_resume(function(text) {
		return text + input.decor.mark();
	}, "__tests__/template.marko_0/fmt", $scope0_id);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<p>${_patch_html($scope1_id, "#text/0", fmt(input.text), void 0, $scope0_reason, 1)}</p>`);
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "__tests__/template.marko_1_input_text#0:5_fmt#0:6/init");
			_scope($scope1_id, { _: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id) }, "__tests__/template.marko", "4:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 5);
	_scope($scope0_id, {
		input_decor: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 1)) && input.decor,
		input_text: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.text,
		fmt: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 1)) && fmt
	}, "__tests__/template.marko", 0, {
		input_decor: ["input.decor"],
		input_text: ["input.text"],
		fmt: "1:8"
	}) || (_filled_guard($scope0_reason, 6) && ($cg__input_show ? _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0/unpatched", input.text) : _client_guard($scope0_reason, 4) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.text, !_server_guard($scope0_reason, 6))), _filled_guard($scope0_reason, 4) && ($cg__input_show ? _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill1/unpatched", fmt) : _client_guard($scope0_reason, 6) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill1", fmt, !$sg__input_decor)));
}, 1);
