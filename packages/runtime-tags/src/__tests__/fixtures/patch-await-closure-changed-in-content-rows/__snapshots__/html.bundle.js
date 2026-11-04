// tags/wrap.marko
const $template = "<!><!><!>";
const $setup = [[], []];
_shells({ b: "b;b%;<!><!><!>" });
var wrap_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "a", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 0);
	_scope($scope0_id, {});
});

// template.marko
_shells({
	a1: "a1",
	a2: "a2 a0;D ;<p> </p>",
	a3: "a3 a0;D ;<p> </p>",
	a4: "a4;b%;<!><!><!>",
	a5: "a5 !a7;b%;<!><!><!>",
	a: "a;b%;<!><!><!>",
	a6: `a6${_shell_marker([[], []], ["a>", $setup])};${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c")};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template)}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		_set_scope_reason(0);
		const $childScope = _peek_scope_id($scope1_id, "a", 0);
		wrap_default({ content: _content("a5", () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			const $wrap_content__n__closures = /* @__PURE__ */ new Set();
			let n = 1;
			_try($scope2_id, "a", () => {
				_scope_reason();
				const $scope3_id = _scope_id();
				_await($scope3_id, "a", resolveAfter(0, 1), () => {
					const $scope4_id = _scope_id();
					_html(`<p>${_text_mark($scope4_id, "a", n)}</p>`);
					_subscribe($wrap_content__n__closures, _scope($scope4_id, {}), "a0");
				}, 1, "a2");
				_scope($scope3_id, { _: _scope_with_id($scope2_id) });
			}, () => {
				_scope_reason();
				_scope_id();
				_html("loading");
			}, void 0, "a1", void 0, "a4", 0, 0, 2);
			_script($scope2_id, "a7", 0);
			_scope($scope2_id, { c: $wrap_content__n__closures });
			_resume_branch($scope2_id);
		}, $scope1_id, 0) });
		_patch_child_end();
		_scope($scope1_id, { a: _existing_scope($childScope) });
	}, 0, $scope0_id, "a", 1, 1, 1, 0, 0, "a6", $scope0_reason, 0);
	_scope($scope0_id, {});
}, 1);
