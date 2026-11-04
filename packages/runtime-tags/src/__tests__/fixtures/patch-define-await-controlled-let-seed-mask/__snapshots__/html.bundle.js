// template.marko
const $S_content__walks = "b%c";
const $S_content__template = "<!><!><!>";
_shells({
	a2: "a2 !;D ;<span> </span>",
	a: "a;b%;<!><!><!>",
	a3: `a3 a7;${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($S_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($S_content__template)}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let p = resolveAfter("x", 1);
	const S = { content: _content("a4", ({ promise }) => {
		const $scope2_id = _scope_id();
		_scope_reason();
		_await($scope2_id, "a", promise, (x) => {
			const $scope3_id = _scope_id();
			let c = x;
			_html(`<span>${_text_mark($scope3_id, "a", c)}</span>`);
			_patch_fill($scope3_id, "va1", c, 1, 2, 0);
			_scope($scope3_id, {});
		}, 1, "a2", 2);
	}, $scope0_id) };
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(2);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			S.content({ promise: p });
			_patch_child_end();
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a3"], $scope0_reason, 0);
	_scope($scope0_id, { e: _write_if($scope0_reason, 0) && p });
}, 1);
