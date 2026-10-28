// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko_4*content": "__tests__/template.marko_4*content;D ;<b> </b>",
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content;b%;<!><!><!>",
	"__tests__/template.marko": "__tests__/template.marko !;b%;<!><!><!>",
	"__tests__/template.marko_2_#text#0/await": "__tests__/template.marko_2_#text#0/await;D ;<b> </b>",
	"__tests__/template.marko_2*shell": "__tests__/template.marko_2*shell;b%;<!><!><!>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_p = _client_guard($scope0_reason, 3), $wg__input_show = _write_guard($scope0_reason, 2), $cg__input_show = _client_guard($scope0_reason, 2), $wi__input_show__OR__input_p = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $x__closures = new Set();
	const $input_p__closures = new Set();
	const $input_show__closures = new Set();
	let x = input.v;
	_try($scope0_id, "#text/0", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_if(() => {
			if (input.show) {
				const $scope2_id = _scope_id();
				_await($scope2_id, "#text/0", input.p, (r) => {
					const $scope4_id = _scope_id();
					_html(`<b>${_text_resume($scope4_id, "#text/0", r, 1, $scope0_reason, 3)}</b>`);
					_scope($scope4_id, {}, "__tests__/template.marko", "4:6");
				}, 1, "__tests__/template.marko_4*content", _unfilled_if($scope0_reason, 3) && 2);
				_unfilled_if($scope0_reason, 3) && _patch_init($scope2_id, $cg__input_p ? "__tests__/template.marko_2_input_p#0:5/init" : "__tests__/template.marko_2_input_p#0:5/subscribe");
				$wi__input_show__OR__input_p && _subscribe(_unfilled_if($scope0_reason, 3) && $input_p__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "3:4"), $cg__input_p && "__tests__/template.marko_2_input_p#0:5/subscribe", 0);
				return 0;
			}
		}, $scope1_id, "#text/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/template.marko_2*shell"], $scope0_reason, 2);
		_unfilled_if($scope0_reason, 2) && _patch_init($scope1_id, $cg__input_show ? "__tests__/template.marko_1_input_show#0:4/init" : "__tests__/template.marko_1_input_show#0:4/subscribe");
		$wi__input_show__OR__input_p && _subscribe(_unfilled_if($scope0_reason, 2) && $input_show__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:2"), $cg__input_show && "__tests__/template.marko_1_input_show#0:4/subscribe", $wg__input_show);
		$wg__input_show || $wi__input_show__OR__input_p && _resume_branch($scope1_id);
	}, () => {
		const $scope3_reason = _scope_reason();
		const $scope3_id = _scope_id();
		_html(`<i>${_text_resume($scope3_id, "#text/0", x)}</i>`);
		_subscribe($x__closures, _scope($scope3_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "8:4"));
	}, void 0, "__tests__/template.marko_3*content", void 0, "__tests__/template.marko_1*content", 1);
	_scope($scope0_id, {
		input_p: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 3)) && input.p,
		x,
		"ClosureScopes:x/9": $x__closures,
		"ClosureScopes:input_p/8": _write_if($scope0_reason, 3) && _unfilled_if($scope0_reason, 3) && $input_p__closures,
		"ClosureScopes:input_show/7": _write_if($scope0_reason, 2) && _unfilled_if($scope0_reason, 2) && $input_show__closures
	}, "__tests__/template.marko", 0, {
		input_p: ["input.p"],
		x: "1:6"
	}) || _filled_guard($scope0_reason, 3) && $cg__input_show && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.p, !_server_guard($scope0_reason, 3));
	_resume_branch($scope0_id);
}, 1);
