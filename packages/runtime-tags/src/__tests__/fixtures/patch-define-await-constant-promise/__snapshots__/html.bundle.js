// template.marko
const $D_content__walks = "b%c";
const $D_content__template = "<!><!><!>";
const p = Promise.resolve("x");
_shells({
	a0: "a0;D ;<span> </span>",
	a: `a;${((_w0) => `b/${_w0}&%c`)($D_content__walks)};${((_w0) => `<!>${_w0}<!><!>`)($D_content__template)}`,
	a1: `a1;${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($D_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($D_content__template)}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const D = { content: _content("a2", ({ promise }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_await($scope1_id, "a", promise, (v) => {
			const $scope3_id = _scope_id();
			_html(`<span>${_text_mark($scope3_id, "a", v, 1, $scope1_reason, 0)}</span>`);
			_scope($scope3_id, {});
		}, 1, "a0");
	}, $scope0_id) };
	_set_scope_reason(0);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	D.content({ promise: p });
	_patch_child_end();
	_if(() => {
		if (input.show) {
			const $scope2_id = _scope_id();
			_set_scope_reason(0);
			const $childScope2 = _peek_scope_id($scope2_id, "a", 1);
			D.content({ promise: p });
			_patch_child_end();
			_scope($scope2_id, { a: _existing_scope($childScope2) });
			return 0;
		}
	}, $scope0_id, "b", 1, $wg__input_show, 1, 0, 0, ["a1"], $scope0_reason, 0);
	_scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
