// tags/panel/index.marko
const $template = "<!><!><!>";
_shells({
	b: "b !;b%;<!><!><!>",
	b0: "b0;b%;<!><!><!>"
});
var panel_default = _template_persisted("b", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_body = _source_guard($scope0_reason, 2), $scope0_page = _page_render(), $sg__input_open = _source_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.open) {
			const $scope1_id = _scope_id();
			const $tag = input.body;
			_dynamic_tag($scope1_id, "a", $tag, {}, 0, 0, $sg__input_body, _patch_dynamic_tag($scope1_id, "a", $tag, 0, 0, 0, $scope0_reason, 2));
			$scope0_page && _scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $sg__input_open, $sg__input_open, void 0, void 0, ["b0"], $scope0_reason, 1);
	$scope0_page ? _scope($scope0_id, { e: input.body }) : _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_value($scope0_id, "b0", input.body);
}, 0, 0);

// template.marko
_shells({ a: /*@__PURE__*/ ((_w0, _w1) => `a !a1;${_w0};${_w1}`)(((_w0) => `D/${_w0}& l`)("b%c"), ((_w0) => `<main>${_w0}<button>+</button></main>`)($template)) });
var template_default = _template_persisted("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_title__closures = /* @__PURE__ */ new Set();
	let count = 0;
	const extra = { content: _content_resume("a0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<em>${_patch_text($scope1_id, "a", input.title, void 0, $scope0_reason, 0)}</em>`);
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_title__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }));
	}, $scope0_id) };
	_html("<main>");
	const $childScope = _peek_scope_id();
	if ($scope0_page || _must_render(panel_default)) {
		_set_serialize_reason(10);
		_patch_child($scope0_id, "a", $childScope);
		panel_default({
			body: extra,
			open: true
		});
	}
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a1");
	$scope0_page ? _scope($scope0_id, {
		e: input.title,
		f: count,
		h: $input_title__closures,
		a: _existing_scope($childScope)
	}) : _filled_guard($scope0_reason, 0) && _content_withheld("a0") && _patch_value($scope0_id, "a0", input.title);
}, 1, () => [panel_default]);
