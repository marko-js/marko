// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko": "__tests__/template.marko;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell !;b%;<!><!><!>",
	"__tests__/template.marko_2*shell": "__tests__/template.marko_2*shell __tests__/template.marko_2_x#1:1_f#1:2/setup;D ;<p> </p>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_w = _write_if($scope0_reason, 3), $wg__input_inner = _write_guard($scope0_reason, 2), $wg__input_show = _write_guard($scope0_reason, 0), $cg__input_show = _client_guard($scope0_reason, 0), $fg__input_v = _filled_guard($scope0_reason, 1), $fg__input_inner = _filled_guard($scope0_reason, 2), $fg__input_w = _filled_guard($scope0_reason, 3), $cg__input_inner = _client_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_w__closures = new Set();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let x = input.v;
			const f = _resume((v) => v, "__tests__/template.marko_1/f");
			_if(() => {
				if (input.inner) {
					const $scope2_id = _scope_id();
					let y = f(x);
					_html(`<p>${_text_mark($scope2_id, "#text/0", y + input.w)}</p>`);
					_unfilled_if($scope0_reason, 3) && _patch_subscribe($scope2_id, "__tests__/template.marko_2_input_w#0:6/subscribe");
					_patch_render($scope2_id, "__tests__/template.marko_2_input_w#0:6_y#2/setup", _filled_guard($scope0_reason, 3) && ">>input_w");
					_subscribe($wi__input_w && $input_w__closures, _scope($scope2_id, {
						y: $wi__input_w && y,
						_: _scope_with_id($scope1_id)
					}, "__tests__/template.marko", "4:4", { y: "5:10" }), _client_guard($scope0_reason, 3) && "__tests__/template.marko_2_input_w#0:6/subscribe");
					return 0;
				}
			}, $scope1_id, "#text/0", 1, $wg__input_inner, 1, 0, 0, ["__tests__/template.marko_2*shell"], $scope0_reason, 2);
			_patch_write($scope1_id, "PatchWrite:f", f, 1);
			_client_guard($scope0_reason, 1) && _patch_render($scope1_id, "__tests__/template.marko_1_input_v#0:4/setup");
			$cg__input_inner && _patch_render($scope1_id, "__tests__/template.marko_1_input_inner#0:5/setup");
			_filled_guard($scope0_reason, 1) && _patch_fill($scope1_id, "PatchFill:__tests__/template.marko_fill0", x, 1);
			_scope($scope1_id, {
				x: _write_if($scope0_reason, 2) && x,
				f,
				_: _scope_with_id($scope0_id)
			}, "__tests__/template.marko", "1:2", {
				x: "2:8",
				f: "3:10"
			});
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	$fg__input_v && $cg__input_show && _patch_render($scope0_id, "__tests__/template.marko_1_input_v#0:4/setup", "input_v");
	$fg__input_inner && $cg__input_show && _patch_render($scope0_id, "__tests__/template.marko_1_input_inner#0:5/setup", "input_inner");
	$fg__input_w && ($cg__input_show || $cg__input_inner) && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_w#6/subscribers", "input_w");
	_scope($scope0_id, {
		input_v: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.v,
		input_inner: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 2)) && input.inner,
		input_w: input.w,
		"ClosureScopes:input_w/9": $wi__input_w && $input_w__closures
	}, "__tests__/template.marko", 0, {
		input_v: ["input.v"],
		input_inner: ["input.inner"],
		input_w: ["input.w"]
	}) || ($fg__input_v && $cg__input_show && _patch_write($scope0_id, "PatchMarkedWrite:input_v", input.v, !_server_guard($scope0_reason, 1)), $fg__input_inner && $cg__input_show && _patch_write($scope0_id, "PatchMarkedWrite:input_inner", input.inner, !_server_guard($scope0_reason, 2)), $fg__input_w && _patch_write($scope0_id, "PatchMarkedWrite:input_w", input.w, !_server_guard($scope0_reason, 3)));
}, 1);
