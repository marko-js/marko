// tags/widget/index.marko
const $template = "<!><!><!>";
var widget_default = _template_persisted("b", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_patch_dynamic_tag($scope0_id, "a", input.renderer, $scope0_owned, 0);
	_dynamic_tag$1($scope0_id, "a", input.renderer, {}, 0, 0, _source_guard($scope0_reason, 0), 1);
	$scope0_reason && writeScope($scope0_id, {});
}, 0, 0);

// template.marko
_shells({ a0: /*@__PURE__*/ ((_w0, _w1) => `a0;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `D/${_w0}&l`)("b%c"), /*@__PURE__*/ ((_w0) => `<li>${_w0}</li>`)($template)) });
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_items = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<ul>");
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		_html("<li>");
		_set_serialize_reason({ 0: _mask_group($scope0_owned, 0) });
		const $childScope = _peek_scope_id();
		_patch_child($scope1_id, "a", $childScope);
		widget_default({ renderer: item.tag });
		_html("</li>");
		writeScope($scope1_id, { a: _existing_scope($childScope) });
	}, 0, $scope0_id, "a", 1, $sg__input_items, $sg__input_items, void 0, void 0, "a0");
	_html(`</ul>${_el_resume($scope0_id, "a", $sg__input_items)}`);
	$scope0_reason && writeScope($scope0_id, {});
}, 1, () => [widget_default]);
