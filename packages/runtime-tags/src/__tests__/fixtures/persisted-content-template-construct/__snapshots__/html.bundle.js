// tags/banner/index.marko
var banner_default = _template_persisted("b", (input) => {
	_persisted_reason();
	_scope_id();
	_html("<b>banner</b>");
}, 0, 0);

// tags/widget/index.marko
const $template = "<section><!></section>";
var widget_default = _template_persisted("c", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html("<section>");
	_patch_dynamic_tag($scope0_id, "a", input.content, $scope0_owned, 0);
	_dynamic_tag$1($scope0_id, "a", input.content, {}, 0, 0, _source_guard($scope0_reason, 0), 1);
	_html("</section>");
	$scope0_reason && writeScope($scope0_id, {});
}, 0, 0);

// template.marko
_shells({ a0: /*@__PURE__*/ ((_w0, _w1) => `a0;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l"), $template) });
var template_default = _template_persisted("a", (input) => {
	const $scope0_reason = _persisted_reason(), $sg__input_show = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_serialize_reason(0);
			const $childScope = _peek_scope_id();
			_patch_child($scope1_id, "a", $childScope);
			widget_default({ content: banner_default });
			writeScope($scope1_id, { a: _existing_scope($childScope) });
			return 0;
		}
	}, $scope0_id, "a", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["a0"]);
	_html(`</main>${_el_resume($scope0_id, "a", $sg__input_show)}`);
	$scope0_reason && writeScope($scope0_id, {});
}, 1, () => [widget_default]);
