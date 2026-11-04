// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko": "__tests__/template.marko;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell !__tests__/template.marko_1; D l%;<button class=x> </button><!><!>",
	"__tests__/template.marko_2*shell": "__tests__/template.marko_2*shell __tests__/template.marko_2_x#1:3/setup!__tests__/template.marko_2; b ;<span></span><button class=y>go</button>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_outer = _write_guard($scope0_reason, 0), $fg__input_show = _filled_guard($scope0_reason, 1), $cg__input_outer = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.outer) {
			const $scope1_id = _scope_id();
			let x = 1;
			_html(`<button class=x>${_text_mark($scope1_id, "#text/1", x)}</button>${_el_mark($scope1_id, "#button/0")}`);
			_if(() => {
				if (input.show) {
					const $scope2_id = _scope_id();
					let y = x;
					_html(`<span></span>${_el_mark($scope2_id, "#span/0")}<button class=y>go</button>${_el_mark($scope2_id, "#button/1")}`);
					_script($scope2_id, "__tests__/template.marko_2");
					_script($scope2_id, "__tests__/template.marko_2_y#2");
					_scope($scope2_id, {
						y,
						_: _scope_with_id($scope1_id)
					}, "__tests__/template.marko", "4:4", { y: "5:10" });
					return 0;
				}
			}, $scope1_id, "#text/2", 1, _write_guard($scope0_reason, 1), 1, 0, 0, ["__tests__/template.marko_2*shell"], $scope0_reason, 1);
			_script($scope1_id, "__tests__/template.marko_1");
			_client_guard($scope0_reason, 1) && _patch_render($scope1_id, "__tests__/template.marko_1_input_show#0:4/setup");
			_patch_fill($scope1_id, "PatchFill:__tests__/template.marko_fill0", x, 1);
			_scope($scope1_id, {
				x,
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id)
			}, "__tests__/template.marko", "1:2", { x: "2:8" });
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_outer, 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	$fg__input_show && $cg__input_outer && _patch_render($scope0_id, "__tests__/template.marko_1_input_show#0:4/setup", "input_show");
	_scope($scope0_id, { input_show: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.show }, "__tests__/template.marko", 0, { input_show: ["input.show"] }) || $fg__input_show && $cg__input_outer && _patch_write($scope0_id, "PatchMarkedWrite:input_show", input.show, !_server_guard($scope0_reason, 1));
}, 1);
