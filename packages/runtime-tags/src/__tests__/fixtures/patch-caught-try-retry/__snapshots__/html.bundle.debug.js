// template.marko
const $template = "<main></main>";
const $walks = " b";
function check(fail) {
	if (fail) throw new Error("down");
}
const $setup = [[], []];
_shells({
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content,Unavailable",
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content,<p>Ready</p>",
	"__tests__/template.marko": "__tests__/template.marko; ;<main></main>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell;b%;<!><!><!>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_fail = _client_guard($scope0_reason, 2), $wi__input_show__OR__input_fail = _write_if($scope0_reason, 0), $wg__input_show = _write_guard($scope0_reason, 1), $ui__input_show = _unfilled_if($scope0_reason, 1), $ui__input_fail = _unfilled_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_fail__closures = new Set();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_try($scope1_id, "#text/0", () => {
				const $scope2_reason = _scope_reason();
				const $scope2_id = _scope_id();
				const ready = check(input.fail);
				_html("<p>Ready</p>");
				_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope2_id, "__tests__/template.marko_2_input_fail#0:4/subscribe", $cg__input_fail);
				$wi__input_show__OR__input_fail && _subscribe(_unfilled_if($scope0_reason, 2) && $input_fail__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "6:6"), $cg__input_fail && "__tests__/template.marko_2_input_fail#0:4/subscribe", 0);
				$wi__input_show__OR__input_fail && _resume_branch($scope2_id);
			}, void 0, () => {
				const $scope3_reason = _scope_reason();
				const $scope3_id = _scope_id();
				_html("Unavailable");
			}, 0, "__tests__/template.marko_3*content", "__tests__/template.marko_2*content", 0, 0, 1);
			$wi__input_show__OR__input_fail && _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "5:4");
			return 0;
		}
	}, $scope0_id, "#main/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 1);
	_html(`</main>${_el_mark($scope0_id, "#main/0", $wg__input_show)}`);
	_scope($scope0_id, {
		input_fail: ($ui__input_show || $ui__input_fail) && input.fail,
		"ClosureScopes:input_fail/5": _write_if($scope0_reason, 2) && ($ui__input_fail || $ui__input_show) && $input_fail__closures
	}, "__tests__/template.marko", 0, { input_fail: ["input.fail"] }) || _filled_guard($scope0_reason, 2) && $ui__input_show && _patch_write($scope0_id, "PatchMarkedWrite:input_fail", input.fail, !_server_guard($scope0_reason, 2)) && _client_guard($scope0_reason, 1) && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_fail#4/subscribers", "input_fail");
}, 1);
