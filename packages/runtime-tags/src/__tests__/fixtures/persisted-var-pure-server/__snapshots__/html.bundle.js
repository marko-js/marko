// tags/doubler/index.marko
const $template$1 = "<span>x2</span>";
_shells({ b: "b,<span>x2</span>" });
var doubler_default = _template_persisted("b", (input) => {
	_persisted_reason();
	_scope_id();
	const double = input.value * 2;
	_html("<span>x2</span>");
	return double;
}, 0, 0);

// tags/labeler/index.marko
const $template = "<span>fmt</span>";
_shells({ c: "c,<span>fmt</span>" });
var labeler_default = _template_persisted("c", (input) => {
	_persisted_reason();
	_scope_id();
	_html("<span>fmt</span>");
	return "[" + input.title + "]";
}, 0, 0);

// template.marko
_shells({ a: /*@__PURE__*/ ((_w0, _w1) => `a;${_w0};${_w1}`)(((_w0, _w1) => `D0${_w0}&/${_w1}&l`)("b", "b"), ((_w0, _w1) => `<main>${_w0}${_w1}</main>`)($template$1, $template)) });
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html("<main>");
	_set_serialize_reason({ 0: _mask_group($scope0_owned, 0) });
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "a", $childScope);
	let double = doubler_default({ value: input.n });
	_set_serialize_reason({ 0: _mask_group($scope0_owned, 0) });
	const $childScope2 = _peek_scope_id();
	_patch_child($scope0_id, "c", $childScope2);
	labeler_default({ title: double });
	_html("</main>");
	$scope0_reason && _scope($scope0_id, {
		a: _existing_scope($childScope),
		c: _existing_scope($childScope2)
	});
}, 1, () => [doubler_default, labeler_default]);
