// template.marko
const $Show_content__walks = "D l";
const $Show_content__template = "<p> </p>";
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content __tests__/template.marko_2_x#1:1/init;D ;<p> </p>",
	"~__tests__/template.marko_2*content": "~__tests__/template.marko_2*content __tests__/template.marko_2_x#1:1/init;D ;<p> </p>",
	"__tests__/template.marko": "__tests__/template.marko !;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ (() => `__tests__/template.marko_1*shell #childScope/0>__tests__/template.marko_2_x#1:1/init;${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Show_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Show_content__template)}`)()
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_v = _client_guard($scope0_reason, 1), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const $if_content__x__closures = new Set();
			let x = input.v;
			const Show = { content: _content("__tests__/template.marko_2*content", () => {
				const $scope2_id = _scope_id();
				const $scope2_reason = _scope_reason();
				_html(`<p>${_text_resume($scope2_id, "#text/0", x)}</p>`);
				_subscribe($if_content__x__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "3:4"));
			}, $scope1_id, 1) };
			const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
			Show.content({});
			_patch_child_end();
			$cg__input_v && _patch_init($scope1_id, "__tests__/template.marko_1_input_v#0:4/init");
			!$cg__input_v && _patch_fill($scope1_id, "PatchFill:__tests__/template.marko_fill1", x, 1);
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
				"ClosureScopes:x/6": $if_content__x__closures,
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	_scope($scope0_id, { input_v: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.v }, "__tests__/template.marko", 0, { input_v: ["input.v"] }) || _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.v, !_server_guard($scope0_reason, 1));
}, 1);
