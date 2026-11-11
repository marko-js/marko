// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko": "__tests__/template.marko;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell !__tests__/template.marko_1;b%b D ;<!><!><button> </button>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_a = _write_guard($scope0_reason, 1), $cg__input_a = _client_guard($scope0_reason, 1), $wg__input_show = _write_guard($scope0_reason, 0), $fg__input_b = _filled_guard($scope0_reason, 2), $wi__input_a = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_a__closures = new Set();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let x = 1;
			let y = x;
			_if(() => {
				if (y) {
					const $scope2_id = _scope_id();
					_html(`<span>${_text_mark($scope2_id, "#text/0", input.a, $wg__input_a)}</span>`);
					$cg__input_a && _patch_render($scope2_id, "__tests__/template.marko_2_input_a#0:4/subscribe");
					_subscribe($wi__input_a && $input_a__closures, _scope($scope2_id, {}, "__tests__/template.marko", "4:4"), $cg__input_a && "__tests__/template.marko_2_input_a#0:4/subscribe", $wg__input_a);
					return 0;
				}
			}, $scope1_id, "#text/0", 1, 1, 0, 0, 1);
			_html(`<button>${_text_mark($scope1_id, "#text/2", x + input.b)}</button>${_el_mark($scope1_id, "#button/1")}`);
			_script($scope1_id, "__tests__/template.marko_1");
			_patch_render($scope1_id, "__tests__/template.marko_1_input_b#0:5_x#3/setup", _filled_guard($scope0_reason, 2) && ">input_b");
			_patch_fill($scope1_id, "PatchFill:__tests__/template.marko_1_x#3/fill", x, 1);
			_scope($scope1_id, {
				x: _write_if($scope0_reason, 2) && x,
				_: _scope_with_id($scope0_id)
			}, "__tests__/template.marko", "1:2", { x: "2:8" });
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	$fg__input_b && _client_guard($scope0_reason, 0) && _patch_render($scope0_id, "__tests__/template.marko_1_input_b#0:5/setup", "input_b");
	_scope($scope0_id, {
		input_a: input.a,
		input_b: input.b,
		"ClosureScopes:input_a/6": $wi__input_a && $input_a__closures
	}, "__tests__/template.marko", 0, {
		input_a: ["input.a"],
		input_b: ["input.b"]
	}) || (_filled_guard($scope0_reason, 1) && _patch_write($scope0_id, "PatchMarkedWrite:input_a", input.a, !_server_guard($scope0_reason, 1)) && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_a#4/subscribers", "input_a"), $fg__input_b && _patch_write($scope0_id, "PatchMarkedWrite:input_b", input.b, !_server_guard($scope0_reason, 2)));
}, 1);
