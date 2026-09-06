// tags/widget/index.marko
const $template = "<!><!><!>";
_shells({ b: "b;b%;<!><!><!>" });
var widget_default = _template_persisted("b", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_content = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $tag = input.content;
	_patch_dynamic_tag($scope0_id, "a", $tag, 0, 0, 0, $scope0_owned, 0);
	_dynamic_tag($scope0_id, "a", $tag, {}, 0, 0, $sg__input_content, 1);
	$scope0_reason && _scope($scope0_id, {});
}, 0, 0);

// template.marko
_shells({
	a0: "a0;D ;<b> </b>",
	a: "a; ;<ul></ul>",
	a1: /*@__PURE__*/ ((_w0, _w1) => `a1;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `D/${_w0}&l`)("b%c"), /*@__PURE__*/ ((_w0) => `<li>${_w0}</li>`)($template))
});
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_items = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<ul>");
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		const $for_content__item_text__closures = /* @__PURE__ */ new Set();
		_html("<li>");
		_set_serialize_reason(0);
		const $childScope = _peek_scope_id();
		_patch_child($scope1_id, "a", $childScope);
		widget_default({ content: _content_elide("a0", () => {
			_persisted_reason();
			const $scope2_id = _scope_id();
			_html(`<b>${_patch_text($scope2_id, "a", item.text, void 0, $scope0_owned, 0)}</b>`);
			_subscribe($scope0_reason && $for_content__item_text__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }));
		}, $scope1_id) });
		_html("</li>");
		_scope($scope1_id, {
			e: $for_content__item_text__closures,
			a: _existing_scope($childScope)
		});
	}, 0, $scope0_id, "a", 1, $sg__input_items, $sg__input_items, void 0, void 0, "a1", $scope0_owned, 0);
	_html(`</ul>${_el_resume($scope0_id, "a", $sg__input_items)}`);
	$scope0_reason && _scope($scope0_id, {});
}, 1, () => [widget_default]);
