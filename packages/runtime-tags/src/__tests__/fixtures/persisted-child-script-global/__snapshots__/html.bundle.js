// tags/badge/index.marko
const $template = "<span> </span>";
_shells({ b: "b !b0;D ;<span> </span>" });
var badge_default = _template_persisted("b", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	_html(`<span>${_patch_text($scope0_id, "a", $global$1.brand)}</span>`);
	_script($scope0_id, "b0");
	_patch_effect($scope0_id, "b0", "b");
	$scope0_reason ? _scope($scope0_id, { b: $global$1?.brand }) : _patch_write($scope0_id, "b", $global$1?.brand);
}, 0, 1);

// template.marko
_shells({ a: /*@__PURE__*/ ((_w0, _w1) => `a;${_w0};${_w1}`)(((_w0) => `D/${_w0}&l`)("D l"), ((_w0) => `<main>${_w0}</main>`)($template)) });
var template_default = _template_persisted("a", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html("<main>");
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "a", $childScope);
	badge_default({});
	_html("</main>");
	$scope0_reason && _scope($scope0_id, { a: _existing_scope($childScope) });
}, 1, () => [badge_default]);
