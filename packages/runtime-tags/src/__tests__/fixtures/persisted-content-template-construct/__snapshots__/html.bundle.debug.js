// tags/banner/index.marko
const $template$2 = "<b>banner</b>";
const $walks$2 = "b";
var banner_default = _template_persisted("__tests__/tags/banner/index.marko", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html$1("<b>banner</b>");
}, 0, 0);

// tags/widget/index.marko
const $template$1 = "<section><!></section>";
const $walks$1 = "D%l";
var widget_default = _template_persisted("__tests__/tags/widget/index.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html$1("<section>");
	_patch_dynamic_tag($scope0_id, "#text/0", input.content, $scope0_owned, 0);
	_dynamic_tag$1($scope0_id, "#text/0", input.content, {}, 0, 0, _source_guard($scope0_reason, 0), 1);
	_html$1("</section>");
	$scope0_reason && writeScope($scope0_id, {}, "__tests__/tags/widget/index.marko", 0);
}, 0, 0);

// template.marko
const $template = "<main></main>";
const $walks = " b";
_shells({ "__tests__/template.marko_1*shell": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko_1*shell;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l"), $template$1) });
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_reason = _persisted_reason(), $sg__input_show = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html$1("<main>");
	_if$1(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_serialize_reason(0);
			const $childScope = _peek_scope_id();
			_patch_child($scope1_id, "#childScope/0", $childScope);
			widget_default({ content: banner_default });
			writeScope($scope1_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", "3:4");
			return 0;
		}
	}, $scope0_id, "#main/0", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["__tests__/template.marko_1*shell"]);
	_html$1(`</main>${_el_resume($scope0_id, "#main/0", $sg__input_show)}`);
	$scope0_reason && writeScope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1, () => [widget_default]);
