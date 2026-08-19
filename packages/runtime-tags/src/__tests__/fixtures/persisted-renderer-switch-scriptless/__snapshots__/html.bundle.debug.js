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
	_patch_dynamic_tag($scope0_id, "#text/0", input.renderer, $scope0_owned, 0);
	_dynamic_tag$1($scope0_id, "#text/0", input.renderer, {}, 0, 0, _source_guard($scope0_reason, 0), 1);
	_html$1("</section>");
	$scope0_reason && writeScope($scope0_id, {}, "__tests__/tags/widget/index.marko", 0);
}, 0, 0);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}</main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}&l`)("D%l");
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html$1("<main>");
	_set_serialize_reason({ 0: _mask_group($scope0_owned, 0) });
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "#childScope/0", $childScope);
	widget_default({ renderer: input.kind === "banner" ? banner_default : input.kind });
	_html$1("</main>");
	$scope0_reason && writeScope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1, () => [widget_default]);
