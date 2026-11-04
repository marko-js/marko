// template.marko
const $D_content__walks = "b%c";
const $D_content__template = "<!><!><!>";
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content;b%;<!><!><!>",
	"__tests__/template.marko": "__tests__/template.marko;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": `__tests__/template.marko_1*shell #childScope/0>;${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($D_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($D_content__template)}`,
	"__tests__/template.marko_3*shell": "__tests__/template.marko_3*shell;D ;<span> </span>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_v = _client_guard($scope0_reason, 1), $wi__input_v = _write_if($scope0_reason, 1), $wg__input_show = _write_guard($scope0_reason, 0), $ui__input_show = _unfilled_if($scope0_reason, 0), $fg__input_v = _filled_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const $if_content__v__closures = new Set();
			const v = `${input.v}!`;
			const D = { content: _content("__tests__/template.marko_2*content", ({ on }) => {
				const $scope2_id = _scope_id();
				const $scope2_reason = _scope_reason(), $wg__on = _write_guard($scope2_reason, 0);
				_if(() => {
					if (on) {
						const $scope3_id = _scope_id();
						_html(`<span>${_text_mark($scope3_id, "#text/0", v, 1, $scope0_reason, 1)}</span>`);
						$cg__input_v && _patch_render($scope3_id, "__tests__/template.marko_3_v#1:1/subscribe");
						_subscribe(_unfilled_if($scope0_reason, 1) && $if_content__v__closures, _scope($scope3_id, { _: $wi__input_v && _scope_with_id($scope2_id) }, "__tests__/template.marko", "4:6"), $cg__input_v && "__tests__/template.marko_3_v#1:1/subscribe");
						return 0;
					}
				}, $scope2_id, "#text/0", 1, $wg__on, 1, 0, 0, ["__tests__/template.marko_3*shell"], $scope2_reason, 0);
				$wi__input_v && _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "3:4");
			}, $scope1_id, 0) };
			_set_scope_reason(0);
			const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
			D.content({ on: true });
			_patch_child_end();
			$cg__input_v && _patch_render($scope1_id, "__tests__/template.marko_1_input_v#0:4/setup");
			_scope($scope1_id, {
				_: $wi__input_v && _scope_with_id($scope0_id),
				"ClosureScopes:v/6": $wi__input_v && $if_content__v__closures,
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "1:2", { v: "2:10" });
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	$fg__input_v && _client_guard($scope0_reason, 0) && _patch_render($scope0_id, "__tests__/template.marko_1_input_v#0:4/setup", "input_v");
	_scope($scope0_id, { input_v: ($ui__input_show || _unfilled_if($scope0_reason, 1)) && input.v }, "__tests__/template.marko", 0, { input_v: ["input.v"] }) || $fg__input_v && $ui__input_show && _patch_write($scope0_id, "PatchMarkedWrite:input_v", input.v, !_server_guard($scope0_reason, 1));
}, 1);
