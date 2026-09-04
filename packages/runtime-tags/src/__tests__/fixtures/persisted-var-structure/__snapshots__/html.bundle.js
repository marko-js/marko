// tags/doubler/index.marko
const $template = "<span>x2</span>";
_shells({ b: "b,<span>x2</span>" });
var doubler_default = _template_persisted("b", (input) => {
	_persisted_reason();
	_scope_id();
	const double = input.value * 2;
	_html("<span>x2</span>");
	return double;
}, 0, 0);

// template.marko
_shells({ a: /*@__PURE__*/ ((_w0, _w1) => `a !a1;${_w0};${_w1}`)(((_w0) => `D0${_w0}&%b l`)("b"), ((_w0) => `<main>${_w0}<!><button>+</button></main>`)($template)) });
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
	if ($scope0_reason) _if(() => {
		if (double > 2) {
			const $scope1_id = _scope_id();
			_html("<p>big</p>");
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "c", 1, 1, 1, 0, 1);
	_html(`<button>+</button>${_el_resume($scope0_id, "d")}</main>`);
	_script($scope0_id, "a1");
	$scope0_reason && _scope($scope0_id, {
		e: count,
		a: _existing_scope($childScope)
	});
}, 1, () => [doubler_default]);
