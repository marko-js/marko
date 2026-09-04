// tags/badge/index.marko
const $template = "<span> </span>";
_shells({ b: "b !b1;D ;<span> </span>" });
var badge_default = _template_persisted("b", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<span>${_patch_text($scope0_id, "a", $global().brand)}</span>`);
	_global_subscribe("b0", $scope0_id);
	_script($scope0_id, "b1");
	$scope0_reason && _scope($scope0_id, {});
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
