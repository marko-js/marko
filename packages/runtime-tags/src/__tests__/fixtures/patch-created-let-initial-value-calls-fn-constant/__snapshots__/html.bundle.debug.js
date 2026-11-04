// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko": "__tests__/template.marko;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell !;D ;<p> </p>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0), $fg__input_w = _filled_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let x = "a";
			const f = _resume((v) => v, "__tests__/template.marko_1/f");
			let y = f(x);
			_html(`<p>${_text_mark($scope1_id, "#text/0", y + input.w)}</p>`);
			_patch_write($scope1_id, "PatchWrite:f", f, 1);
			_patch_render($scope1_id, "__tests__/template.marko_1_input_w#0:4_y#4/setup", _filled_guard($scope0_reason, 1) && ">input_w");
			_patch_fill($scope1_id, "PatchFill:__tests__/template.marko_fill0", y, 1);
			_scope($scope1_id, {
				f,
				y: _write_if($scope0_reason, 1) && y,
				_: _scope_with_id($scope0_id)
			}, "__tests__/template.marko", "1:2", {
				f: "3:10",
				y: "4:8"
			});
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	$fg__input_w && _client_guard($scope0_reason, 0) && _patch_render($scope0_id, "__tests__/template.marko_1_input_w#0:4/setup", "input_w");
	_scope($scope0_id, { input_w: input.w }, "__tests__/template.marko", 0, { input_w: ["input.w"] }) || $fg__input_w && _patch_write($scope0_id, "PatchMarkedWrite:input_w", input.w, !_server_guard($scope0_reason, 1));
}, 1);
