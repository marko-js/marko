// template.marko
const $template = "<main></main>";
const $walks = " b";
const $setup = [[], []];
_shells({
	"__tests__/template.marko": "__tests__/template.marko; ;<main></main>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell;D lD l%;<div> </div><div class=x> </div><!><!>",
	"__tests__/template.marko_2*shell": "__tests__/template.marko_2*shell;b%b%;<!><!><!><!>",
	"__tests__/template.marko_3*shell": "__tests__/template.marko_3*shell;D lD ;<div> </div><div class=y> </div>",
	"__tests__/template.marko_4*shell": "__tests__/template.marko_4*shell;%;<!>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_html = _client_guard($scope0_reason, 2), $wi__input_show__OR__input_html = _write_if($scope0_reason, 0), $wi__input_html = _write_if($scope0_reason, 2), $wg__input_html = _write_guard($scope0_reason, 2), $wg__input_show = _write_guard($scope0_reason, 1), $ui__input_show = _unfilled_if($scope0_reason, 1), $ui__input_html = _unfilled_if($scope0_reason, 2), $fg__input_html = _filled_guard($scope0_reason, 2), $cg__input_show = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_html__closures = new Set();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<div>${_html_mark($scope1_id, "#text/0", input.html, 1, $scope0_reason, 2)}</div><div class=x>${_html_mark($scope1_id, "#text/1", input.html, 1, $scope0_reason, 2)}</div>`);
			_if(() => {
				if (input.show > 1) {
					const $scope2_id = _scope_id();
					_if(() => {
						if (input.html) {
							const $scope3_id = _scope_id();
							_html(`<div>${_html_mark($scope3_id, "#text/0", input.html, 1, $scope0_reason, 2)}</div><div class=y>${_html_mark($scope3_id, "#text/1", input.html, 1, $scope0_reason, 2)}</div>`);
							_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope3_id, "__tests__/template.marko_3_input_html#0:4/subscribe", $cg__input_html);
							_subscribe(_unfilled_if($scope0_reason, 2) && $input_html__closures, _scope($scope3_id, {
								_: $wi__input_show__OR__input_html && _scope_with_id($scope2_id),
								"ClosureSignalIndex:input_html/6": $wi__input_html && 1
							}, "__tests__/template.marko", "6:8"), $cg__input_html && "__tests__/template.marko_3_input_html#0:4/subscribe");
							return 0;
						}
					}, $scope2_id, "#text/0", 1, $wg__input_html, 1, 0, 0, ["__tests__/template.marko_3*shell"], $scope0_reason, 2);
					_if(() => {
						if (input.html) {
							const $scope4_id = _scope_id();
							_html(_html_mark($scope4_id, "#text/0", input.html, 2, $scope0_reason, 2));
							_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope4_id, "__tests__/template.marko_4_input_html#0:4/subscribe", $cg__input_html);
							_subscribe(_unfilled_if($scope0_reason, 2) && $input_html__closures, _scope($scope4_id, {
								_: $wi__input_show__OR__input_html && _scope_with_id($scope2_id),
								"ClosureSignalIndex:input_html/6": $wi__input_html && 2
							}, "__tests__/template.marko", "10:8"), $cg__input_html && "__tests__/template.marko_4_input_html#0:4/subscribe");
							return 0;
						}
					}, $scope2_id, "#text/1", 1, $wg__input_html, 1, 0, 0, ["__tests__/template.marko_4*shell"], $scope0_reason, 2);
					_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope2_id, "__tests__/template.marko_2_input_html#0:4/subscribe", $cg__input_html);
					$wi__input_show__OR__input_html && _subscribe(_unfilled_if($scope0_reason, 2) && $input_html__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "5:6"), $cg__input_html && "__tests__/template.marko_2_input_html#0:4/subscribe", $wg__input_html);
					$wg__input_html || $wi__input_show__OR__input_html && _resume_branch($scope2_id);
					return 0;
				}
			}, $scope1_id, "#text/2", 1, $wg__input_show, 1, 0, 0, ["__tests__/template.marko_2*shell"], $scope0_reason, 1);
			$cg__input_show && _patch_render($scope1_id, "__tests__/template.marko_1_input_show#0:3/setup");
			$cg__input_html && _patch_render($scope1_id, "__tests__/template.marko_1_input_html#0:4/setup");
			_scope($scope1_id, { _: $wi__input_show__OR__input_html && _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:4");
			return 0;
		}
	}, $scope0_id, "#main/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 1);
	_html(`</main>${_el_mark($scope0_id, "#main/0", $wg__input_show)}`);
	$fg__input_html && $cg__input_show && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_html#4/subscribers", "input_html");
	$fg__input_html && $cg__input_show && _patch_render($scope0_id, "__tests__/template.marko_1_input_html#0:4/setup", "input_html");
	_scope($scope0_id, {
		input_html: ($ui__input_show || $ui__input_html) && input.html,
		"ClosureScopes:input_html/6": $wi__input_html && ($ui__input_html || $ui__input_show) && $input_html__closures
	}, "__tests__/template.marko", 0, { input_html: ["input.html"] }) || $fg__input_html && $ui__input_show && _patch_write($scope0_id, "PatchMarkedWrite:input_html", input.html, !_server_guard($scope0_reason, 2));
}, 1);
