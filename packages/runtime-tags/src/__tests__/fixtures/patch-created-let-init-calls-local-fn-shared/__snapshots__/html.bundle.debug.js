// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko": "__tests__/template.marko !;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell __tests__/template.marko_1_input_w#0:5_y#5/init;D lD ;<p> </p><span> </span>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_v = _client_guard($scope0_reason, 1), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let x = input.v;
			const f = _resume((v) => v, "__tests__/template.marko_1/f");
			let y = f(x);
			_html(`<p>${_text_resume($scope1_id, "#text/0", y + input.w)}</p><span>${_text_resume($scope1_id, "#text/1", f(x), 1, $cg__input_v << 1, 0)}</span>`);
			$cg__input_v && _patch_init($scope1_id, "__tests__/template.marko_1_input_v#0:4/init");
			$cg__input_v && (_patch_write($scope1_id, "PatchWrite:f", f, 1), _patch_init($scope1_id, "__tests__/template.marko_1_x#2_f#3/init"));
			!$cg__input_v && _patch_fill($scope1_id, "PatchFill:__tests__/template.marko_fill2", y, 1);
			_scope($scope1_id, {
				f,
				y: _write_if($scope0_reason, 2) && y,
				_: _scope_with_id($scope0_id)
			}, "__tests__/template.marko", "1:2", {
				f: "3:10",
				y: "4:8"
			});
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	_scope($scope0_id, {
		input_v: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.v,
		input_w: input.w
	}, "__tests__/template.marko", 0, {
		input_v: ["input.v"],
		input_w: ["input.w"]
	}) || (_filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.v, !_server_guard($scope0_reason, 1)), _filled_guard($scope0_reason, 2) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill1", input.w, !_server_guard($scope0_reason, 2)));
}, 1);
