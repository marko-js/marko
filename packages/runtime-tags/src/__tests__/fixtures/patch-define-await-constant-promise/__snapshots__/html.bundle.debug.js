// template.marko
const $D_content__walks = "b%c";
const $D_content__template = "<!><!><!>";
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!><!>`)($D_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&%c`)($D_content__walks);
const p = Promise.resolve("x");
const $setup = [[], []];
_shells({
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content;D ;<span> </span>",
	"__tests__/template.marko": `__tests__/template.marko;${((_w0) => `b/${_w0}&%c`)($D_content__walks)};${((_w0) => `<!>${_w0}<!><!>`)($D_content__template)}`,
	"__tests__/template.marko_2*shell": `__tests__/template.marko_2*shell;${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($D_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($D_content__template)}`
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const D = { content: _content("__tests__/template.marko_1*content", ({ promise }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_await($scope1_id, "#text/0", promise, (v) => {
			const $scope3_id = _scope_id();
			_html(`<span>${_text_mark($scope3_id, "#text/0", v, 1, $scope1_reason, 0)}</span>`);
			_scope($scope3_id, {}, "__tests__/template.marko", "3:4");
		}, 1, "__tests__/template.marko_3*content");
	}, $scope0_id) };
	_set_scope_reason(0);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	D.content({ promise: p });
	_patch_child_end();
	_if(() => {
		if (input.show) {
			const $scope2_id = _scope_id();
			_set_scope_reason(0);
			const $childScope2 = _peek_scope_id($scope2_id, "#childScope/0", 1);
			D.content({ promise: p });
			_patch_child_end();
			_scope($scope2_id, { "#childScope/0": _existing_scope($childScope2) }, "__tests__/template.marko", "6:2");
			return 0;
		}
	}, $scope0_id, "#text/1", 1, $wg__input_show, 1, 0, 0, ["__tests__/template.marko_2*shell"], $scope0_reason, 0);
	_scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
