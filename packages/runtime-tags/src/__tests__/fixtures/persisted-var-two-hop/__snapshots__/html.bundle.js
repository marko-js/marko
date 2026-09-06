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

// tags/shower/index.marko
const $template = "<em> </em>";
_shells({ c: "c;D ;<em> </em>" });
var shower_default = _template_persisted("c", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<em>${_patch_text($scope0_id, "a", input.value, void 0, $scope0_owned, 0)}</em>`);
	$scope0_reason && _scope($scope0_id, {});
}, 0, 0);

// template.marko
_shells({ a: /*@__PURE__*/ ((_w0, _w1) => `a !a1;${_w0};${_w1}`)(((_w0, _w1) => `D0${_w0}&/${_w1}& l`)("b", "D l"), ((_w0, _w1) => `<main>${_w0}${_w1}<button>+</button></main>`)($template$1, $template)) });
var template_default = _template_persisted("a", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let count = 1;
	_html("<main>");
	_set_serialize_reason(2);
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "a", $childScope);
	let double = doubler_default({ value: count });
	_var($scope0_id, "b", $childScope, "a0");
	_owned_guard(0, 0) && _patch_write($scope0_id, "f", double, 1);
	const $childScope2 = _peek_scope_id();
	if ($scope0_reason || _must_render(shower_default)) {
		_set_serialize_reason(2);
		_patch_child($scope0_id, "c", $childScope2);
		shower_default({ value: double });
	}
	_html(`<button>+</button>${_el_resume($scope0_id, "d")}</main>`);
	_script($scope0_id, "a1");
	$scope0_reason && _scope($scope0_id, {
		e: count,
		a: _existing_scope($childScope),
		c: _existing_scope($childScope2)
	});
}, 1, () => [doubler_default, shower_default]);
