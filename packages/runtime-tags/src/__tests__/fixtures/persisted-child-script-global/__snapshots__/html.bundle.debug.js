// tags/badge/index.marko
const $template$1 = "<span> </span>";
const $walks$1 = "D l";
_shells({ "__tests__/tags/badge/index.marko": "__tests__/tags/badge/index.marko !__tests__/tags/badge/index.marko_0_$global_brand#1;D ;<span> </span>" });
var badge_default = _template_persisted("__tests__/tags/badge/index.marko", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	_html(`<span>${_patch_text($scope0_id, "#text/0", $global$1.brand)}</span>`);
	_script($scope0_id, "__tests__/tags/badge/index.marko_0_$global_brand#1");
	_patch_effect($scope0_id, "__tests__/tags/badge/index.marko_0_$global_brand#1", "$global_brand");
	$scope0_reason ? _scope($scope0_id, { $global_brand: $global$1?.brand }, "__tests__/tags/badge/index.marko", 0, { $global_brand: ["$global.brand"] }) : _patch_write($scope0_id, "$global_brand", $global$1?.brand);
}, 0, 1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}</main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}&l`)("D l");
_shells({ "__tests__/template.marko": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko;${_w0};${_w1}`)(((_w0) => `D/${_w0}&l`)("D l"), ((_w0) => `<main>${_w0}</main>`)($template$1)) });
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html("<main>");
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "#childScope/0", $childScope);
	badge_default({});
	_html("</main>");
	$scope0_reason && _scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1, () => [badge_default]);
