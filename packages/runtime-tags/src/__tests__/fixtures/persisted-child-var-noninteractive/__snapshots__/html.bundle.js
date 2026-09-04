// tags/kid.marko
const $template = "<button> </button>";
const $walks = " D l";
_shells({ b: "b !b0; D ;<button> </button>" });
var kid_default = _template_persisted("b", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let c = 1;
	_html(`<button>${_text_resume($scope0_id, "b", c)}</button>${_el_resume($scope0_id, "a")}`);
	const $return = c;
	_script($scope0_id, "b0");
	_patch_value($scope0_id, "b0", c, 1);
	$scope0_reason && _scope($scope0_id, { c });
	return $return;
}, 0, 0);

// template.marko
_shells({ a: /*@__PURE__*/ ((_w0, _w1) => `a;${_w0};${_w1}`)(((_w0) => `0${_w0}&D l`)($walks), ((_w0) => `${_w0}<p> </p>`)($template)) });
var template_default = _template_persisted("a", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "a", $childScope);
	let x = kid_default({});
	_var($scope0_id, "b", $childScope, "a0");
	_owned_guard(0, 0) && _patch_write($scope0_id, "d", x, 1);
	_html(`<p>${_text_resume($scope0_id, "c", x)}</p>`);
	$scope0_reason && _scope($scope0_id, { a: _existing_scope($childScope) });
}, 1, () => [kid_default]);
