// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko": "__tests__/template.marko;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell,"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 4), $ui__input_prefix__OR__input_x = _unfilled_if($scope0_reason, 2), $ui__input_show__OR__input_x = _unfilled_if($scope0_reason, 1), $ui__input_show__OR__input_prefix = _unfilled_if($scope0_reason, 0), $fg__input_prefix = _filled_guard($scope0_reason, 5), $fg__input_x = _filled_guard($scope0_reason, 6), $cg__input_show = _client_guard($scope0_reason, 4), $fg__input_suffix2 = _filled_guard($scope0_reason, 7);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id(), $fg__input_prefix__OR__input_x = _filled_guard($scope0_reason, 2), $fg__input_suffix = _filled_guard($scope0_reason, 7);
			const inner = input.prefix + input.x;
			$fg__input_prefix__OR__input_x && _patch_write($scope1_id, "PatchMarkedWrite:inner", inner, !_server_guard($scope0_reason, 2));
			_patch_render($scope1_id, "__tests__/template.marko_1_input_prefix#0:4_input_x#0:5/setup", [_filled_guard($scope0_reason, 5) && ">input_prefix", _filled_guard($scope0_reason, 6) && ">input_x"], $scope0_reason, 2);
			_script($scope1_id, "__tests__/template.marko_1_input_suffix#0:6_inner#1", 0, ($fg__input_suffix || $fg__input_prefix__OR__input_x) && (_client_guard($scope0_reason, 7) || _client_guard($scope0_reason, 2) ? 2 : 1), [$fg__input_suffix && ">input_suffix", $fg__input_prefix__OR__input_x && "inner"], "__tests__/template.marko_1_input_suffix#0:6_inner#1/setup", $scope0_reason, 3);
			_scope($scope1_id, {
				inner,
				_: _scope_with_id($scope0_id)
			}, "__tests__/template.marko", "1:2", { inner: "2:10" });
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 4);
	$fg__input_prefix && $cg__input_show && _patch_render($scope0_id, "__tests__/template.marko_1_input_prefix#0:4/setup", "input_prefix");
	$fg__input_x && $cg__input_show && _patch_render($scope0_id, "__tests__/template.marko_1_input_x#0:5/setup", "input_x");
	$fg__input_suffix2 && $cg__input_show && _patch_render($scope0_id, "__tests__/template.marko_1_input_suffix#0:6/setup", "input_suffix");
	_scope($scope0_id, {
		input_prefix: ($ui__input_show__OR__input_x || $ui__input_prefix__OR__input_x) && input.prefix,
		input_x: ($ui__input_show__OR__input_prefix || $ui__input_prefix__OR__input_x) && input.x,
		input_suffix: input.suffix
	}, "__tests__/template.marko", 0, {
		input_prefix: ["input.prefix"],
		input_x: ["input.x"],
		input_suffix: ["input.suffix"]
	}) || ($fg__input_prefix && $ui__input_show__OR__input_x && _patch_write($scope0_id, "PatchMarkedWrite:input_prefix", input.prefix, !_server_guard($scope0_reason, 5)), $fg__input_x && $ui__input_show__OR__input_prefix && _patch_write($scope0_id, "PatchMarkedWrite:input_x", input.x, !_server_guard($scope0_reason, 6)), $fg__input_suffix2 && _patch_write($scope0_id, "PatchMarkedWrite:input_suffix", input.suffix, !_server_guard($scope0_reason, 7)));
}, 1);
