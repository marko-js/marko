// page.marko
const ITEMS = ["a", "b"];
const $template = "<!><!><!>";
_shells({
	a: "a;b%;<!><!><!>",
	a0: "a0;D l%;<span> </span><!><!>",
	a1: "a1,<p>last</p>"
});
var page_default = _template_persisted("a", (input) => {
	_persisted_reason();
	const $scope0_id = _scope_id();
	_for_of(ITEMS, (m) => {
		const $scope1_id = _scope_id();
		_html(`<span>${_patch_text($scope1_id, "a", m)}</span>`);
		_if(() => {
			if (m === "b") {
				_scope_id();
				_html("<p>last</p>");
				return 0;
			}
		}, $scope1_id, "b", 1, 0, 0, void 0, void 0, ["a1"]);
		_scope($scope1_id, {});
	}, 0, $scope0_id, "a", 1, 1, 0, void 0, void 0, "a0", 0, 0);
}, 0, 0);

// template.marko
_shells({
	b: "b;b%;<!><!><!>",
	b0: /*@__PURE__*/ ((_w0, _w1) => `b0;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c"), /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template))
});
var template_default = _template_persisted("b", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_show = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const $childScope = _peek_scope_id();
			_patch_child($scope1_id, "a", $childScope);
			page_default({});
			_scope($scope1_id, { a: _existing_scope($childScope) });
			return 0;
		}
	}, $scope0_id, "a", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["b0"], $scope0_owned, 0);
	$scope0_reason && _scope($scope0_id, {});
}, 1, () => [page_default]);
