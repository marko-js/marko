// template.marko
const $Panel_content__walks = "b";
const $Panel_content__template = "<em>panel</em>";
_shells({
	a: "a !a2;b%b%b ;<!><!><!><button>toggle</button>",
	a1: /*@__PURE__*/ (() => `a1;${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Panel_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Panel_content__template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let open = false;
	const Panel = { content: _content_resume("a0", () => {
		_scope_id();
		_scope_reason();
		_html("<em>panel</em>");
	}, $scope0_id) };
	_if(() => {
		if (input.show) {
			const $scope2_id = _scope_id();
			const $childScope = _peek_scope_id($scope2_id, "a", 0);
			Panel.content({});
			_patch_child_end();
			_scope($scope2_id, { a: _existing_scope($childScope) });
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 0), void 0, void 0, void 0, ["a1"], $scope0_reason, 0);
	_dynamic_tag($scope0_id, "b", "div", {}, 8);
	_html(`<button>toggle</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a2");
	_scope($scope0_id, {
		g: open,
		h: Panel
	});
}, 1);
