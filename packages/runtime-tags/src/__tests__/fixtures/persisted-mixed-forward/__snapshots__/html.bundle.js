// tags/kid.marko
const $template = "<span> </span>";
_shells({ b: "b;D ;<span> </span>" });
var kid_default = _template_persisted("b", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<span>${_patch_text($scope0_id, "a", input.a + input.b, void 0, $scope0_owned, 0)}</span>`);
	$scope0_reason && _scope($scope0_id, {
		d: input.a,
		e: input.b
	});
}, 0, 0);

// template.marko
_shells({ a: /*@__PURE__*/ ((_w0, _w1) => `a !a0;${_w0};${_w1}`)(((_w0) => `/${_w0}& b`)("D l"), ((_w0) => `${_w0}<button>+</button>`)($template)) });
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let s = 1;
	_set_serialize_reason({
		0: 3,
		1: 1,
		2: _mask_group($scope0_owned, 0)
	});
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "a", $childScope);
	kid_default({
		a: s,
		b: input.x
	});
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a0");
	$scope0_reason ? _scope($scope0_id, {
		f: s,
		a: _existing_scope($childScope)
	}) : _owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "a0", input.x);
	_resume_branch($scope0_id);
}, 1, () => [kid_default]);
