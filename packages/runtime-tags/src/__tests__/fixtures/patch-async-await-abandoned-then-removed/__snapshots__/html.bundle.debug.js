// template.marko
const $template = "<main><!></main>";
const $walks = "D%l";
const $setup = [[], []];
_shells({
	"__tests__/template.marko_4*content": "__tests__/template.marko_4*content;D ;<b> </b>",
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content,<i>loading</i>",
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content;b%bD ;<!><!><span> </span>",
	"__tests__/template.marko": "__tests__/template.marko;D%;<main><!></main>",
	"__tests__/template.marko_2_#text#0/await": "__tests__/template.marko_2_#text#0/await;D ;<b> </b>",
	"__tests__/template.marko_2*shell": "__tests__/template.marko_2*shell;b%;<!><!><!>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_show__OR__input_a = _write_if($scope0_reason, 0), $ui__input_show = _unfilled_if($scope0_reason, 2), $cg__input_show = _client_guard($scope0_reason, 2), $cg__input_label = _client_guard($scope0_reason, 4), $ui__input_a2 = _unfilled_if($scope0_reason, 3), $fg__input_a = _filled_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const $input_a__closures = new Set();
	const $input_show__closures = new Set();
	const $input_label__closures = new Set();
	_html("<main>");
	_try($scope0_id, "#text/0", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_if(() => {
			if (input.show) {
				const $scope2_id = _scope_id(), $ui__input_a = _unfilled_if($scope0_reason, 3);
				_await($scope2_id, "#text/0", input.a, (a) => {
					const $scope4_id = _scope_id();
					_html(`<b>${_text_mark($scope4_id, "#text/0", a, 1, $scope0_reason, 3)}</b>`);
					_scope($scope4_id, {}, "__tests__/template.marko", "4:8");
				}, 1, "__tests__/template.marko_4*content", $ui__input_a && 2);
				_unfilled_if($scope0_reason, 3) && _patch_subscribe($scope2_id, "__tests__/template.marko_2_input_a#0:4/subscribe", 1);
				$wi__input_show__OR__input_a && _subscribe($ui__input_a && $input_a__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "3:6"), _client_guard($scope0_reason, 3) && "__tests__/template.marko_2_input_a#0:4/subscribe", 0);
				$wi__input_show__OR__input_a && _resume_branch($scope2_id);
				return 0;
			}
		}, $scope1_id, "#text/0", 1, _write_guard($scope0_reason, 2), 1, 0, 0, ["__tests__/template.marko_2*shell"], $scope0_reason, 2);
		_html(`<span>${_text_mark($scope1_id, "#text/1", input.label, 1, $scope0_reason, 4)}</span>`);
		_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope1_id, "__tests__/template.marko_1_input_show#0:3/subscribe", $cg__input_show);
		_unfilled_if($scope0_reason, 4) && _patch_subscribe($scope1_id, "__tests__/template.marko_1_input_label#0:5/subscribe", $cg__input_label);
		_subscribe(_unfilled_if($scope0_reason, 4) && $input_label__closures, _subscribe(_unfilled_if($scope0_reason, 2) && $input_show__closures, _scope($scope1_id, { _: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:4"), $cg__input_show && "__tests__/template.marko_1_input_show#0:3/subscribe"), $cg__input_label && "__tests__/template.marko_1_input_label#0:5/subscribe");
	}, () => {
		const $scope3_reason = _scope_reason();
		const $scope3_id = _scope_id();
		_html("<i>loading</i>");
	}, void 0, "__tests__/template.marko_3*content", void 0, "__tests__/template.marko_1*content", 1, 0, 2);
	_html("</main>");
	$fg__input_a && $cg__input_show && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_a#4/subscribers", "input_a");
	_scope($scope0_id, {
		input_a: ($ui__input_show || $ui__input_a2) && input.a,
		"ClosureScopes:input_a/7": _write_if($scope0_reason, 3) && ($ui__input_a2 || $ui__input_show) && $input_a__closures,
		"ClosureScopes:input_show/6": _write_if($scope0_reason, 2) && $ui__input_show && $input_show__closures,
		"ClosureScopes:input_label/8": _write_if($scope0_reason, 4) && _unfilled_if($scope0_reason, 4) && $input_label__closures
	}, "__tests__/template.marko", 0, { input_a: ["input.a"] }) || $fg__input_a && $ui__input_show && _patch_write($scope0_id, "PatchMarkedWrite:input_a", input.a, !_server_guard($scope0_reason, 3));
}, 1);
