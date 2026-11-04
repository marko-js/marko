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
	"__tests__/template.marko_3*shell": "__tests__/template.marko_3*shell __tests__/template.marko_3_x#1:1/subscribe;D ;<span> </span>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const $if_content__x__closures = new Set();
			let x = 1;
			const D = { content: _content("__tests__/template.marko_2*content", ({ on }) => {
				const $scope2_id = _scope_id();
				const $scope2_reason = _scope_reason(), $wg__on = _write_guard($scope2_reason, 0);
				_if(() => {
					if (on) {
						const $scope3_id = _scope_id();
						_html(`<span>${_text_mark($scope3_id, "#text/0", x)}</span>`);
						_subscribe($if_content__x__closures, _scope($scope3_id, { _: _scope_with_id($scope2_id) }, "__tests__/template.marko", "4:6"), "__tests__/template.marko_3_x#1:1/subscribe");
						return 0;
					}
				}, $scope2_id, "#text/0", 1, $wg__on, 1, 0, 0, ["__tests__/template.marko_3*shell"], $scope2_reason, 0);
				_scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "3:4");
			}, $scope1_id, 0) };
			_set_scope_reason(0);
			const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
			D.content({ on: true });
			_patch_child_end();
			_patch_fill($scope1_id, "PatchFill:__tests__/template.marko_1_x#1/fill", x, 1);
			_scope($scope1_id, {
				"ClosureScopes:x/2": $if_content__x__closures,
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "1:2", { x: "2:8" });
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	_scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
