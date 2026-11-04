// template.marko
const $D_content__walks = "b%c";
const $D_content__template = "<!><!><!>";
_shells({
	a2: "a2;b%;<!><!><!>",
	a: "a;b%;<!><!><!>",
	a3: `a3 a>;${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($D_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($D_content__template)}`,
	a1: "a1 a0;D ;<span> </span>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const $if_content__x__closures = /* @__PURE__ */ new Set();
			let x = 1;
			const D = { content: _content("a2", ({ on }) => {
				const $scope2_id = _scope_id();
				const $scope2_reason = _scope_reason(), $wg__on = _write_guard($scope2_reason, 0);
				_if(() => {
					if (on) {
						const $scope3_id = _scope_id();
						_html(`<span>${_text_mark($scope3_id, "a", x)}</span>`);
						_subscribe($if_content__x__closures, _scope($scope3_id, { _: _scope_with_id($scope2_id) }), "a0");
						return 0;
					}
				}, $scope2_id, "a", 1, $wg__on, 1, 0, 0, ["a1"], $scope2_reason, 0);
				_scope($scope2_id, { _: _scope_with_id($scope1_id) });
			}, $scope1_id, 0) };
			_set_scope_reason(0);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			D.content({ on: true });
			_patch_child_end();
			_patch_fill($scope1_id, "va4", x, 1);
			_scope($scope1_id, {
				c: $if_content__x__closures,
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a3"], $scope0_reason, 0);
	_scope($scope0_id, {});
}, 1);
