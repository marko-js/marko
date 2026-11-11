// template.marko
const $template = "<main></main>";
const $walks = " b";
function boom() {
	throw new Error("boom");
}
const $setup = [[], []];
_shells({
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content;D ;<b> </b>",
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content;D%b%;<em><!><!></em>",
	"__tests__/template.marko": "__tests__/template.marko; ;<main></main>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell;b%;<!><!><!>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $ui__input_show = _unfilled_if($scope0_reason, 1), $cg__input_message = _client_guard($scope0_reason, 2), $cg__input_boom = _client_guard($scope0_reason, 3), $wi__input_show__OR__input_message__OR__input_boom = _write_if($scope0_reason, 0), $wg__input_show = _write_guard($scope0_reason, 1), $ui__input_message = _unfilled_if($scope0_reason, 2), $ui__input_boom = _unfilled_if($scope0_reason, 3), $cg__input_show = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_message__closures = new Set();
	const $input_boom__closures = new Set();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_try($scope1_id, "#text/0", () => {
				const $scope2_reason = _scope_reason();
				const $scope2_id = _scope_id();
				_html(`<em>${_text_mark($scope2_id, "#text/0", input.message, 1, $scope0_reason, 2)}${_text_mark($scope2_id, "#text/1", input.boom ? boom() : "", 2, $scope0_reason, 3)}</em>`);
				_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope2_id, "__tests__/template.marko_2_input_message#0:4/subscribe", $cg__input_message);
				_unfilled_if($scope0_reason, 3) && _patch_subscribe($scope2_id, "__tests__/template.marko_2_input_boom#0:5/subscribe", $cg__input_boom);
				_subscribe(_unfilled_if($scope0_reason, 3) && $input_boom__closures, _subscribe(_unfilled_if($scope0_reason, 2) && $input_message__closures, _scope($scope2_id, { _: $wi__input_show__OR__input_message__OR__input_boom && _scope_with_id($scope1_id) }, "__tests__/template.marko", "6:6"), $cg__input_message && "__tests__/template.marko_2_input_message#0:4/subscribe"), $cg__input_boom && "__tests__/template.marko_2_input_boom#0:5/subscribe");
			}, void 0, (err) => {
				const $scope3_reason = _scope_reason();
				const $scope3_id = _scope_id();
				_html(`<b>${_text_mark($scope3_id, "#text/0", err.message, 1, 4, 0)}</b>`);
				_scope($scope3_id, {}, "__tests__/template.marko", "8:8");
			}, 0, "__tests__/template.marko_3*content", "__tests__/template.marko_2*content", 0, 1, 1);
			$wi__input_show__OR__input_message__OR__input_boom && _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "5:4");
			return 0;
		}
	}, $scope0_id, "#main/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 1);
	_html(`</main>${_el_mark($scope0_id, "#main/0", $wg__input_show)}`);
	_scope($scope0_id, {
		input_message: ($ui__input_show || $ui__input_message) && input.message,
		input_boom: ($ui__input_show || $ui__input_boom) && input.boom,
		"ClosureScopes:input_message/6": _write_if($scope0_reason, 2) && ($ui__input_message || $ui__input_show) && $input_message__closures,
		"ClosureScopes:input_boom/7": _write_if($scope0_reason, 3) && ($ui__input_boom || $ui__input_show) && $input_boom__closures
	}, "__tests__/template.marko", 0, {
		input_message: ["input.message"],
		input_boom: ["input.boom"]
	}) || (_filled_guard($scope0_reason, 2) && $ui__input_show && _patch_write($scope0_id, "PatchMarkedWrite:input_message", input.message, !_server_guard($scope0_reason, 2)) && $cg__input_show && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_message#4/subscribers", "input_message"), _filled_guard($scope0_reason, 3) && $ui__input_show && _patch_write($scope0_id, "PatchMarkedWrite:input_boom", input.boom, !_server_guard($scope0_reason, 3)) && $cg__input_show && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_boom#5/subscribers", "input_boom"));
}, 1);
