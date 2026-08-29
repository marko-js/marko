// tags/echo/index.marko
const $template = "<em> </em>";
_shells({ b: "b;D ;<em> </em>" });
var echo_default = _template_persisted("b", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const { ...rest } = input;
	_html(`<em>${_patch_text($scope0_id, "a", rest.label, void 0, $scope0_owned, 0)}</em>`);
	$scope0_reason && _scope($scope0_id, {});
}, 0, 0);

// template.marko
_shells({ a: /*@__PURE__*/ ((_w0, _w1) => `a !a0;${_w0};${_w1}`)(((_w0) => `D/${_w0}& l`)("D l"), ((_w0) => `<main>${_w0}<button>+</button></main>`)($template)) });
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let other = 0;
	_html("<main>");
	_set_serialize_reason(6);
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "a", $childScope);
	echo_default({
		label: input.label,
		other
	});
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a0");
	$scope0_reason ? _scope($scope0_id, {
		e: input.label,
		f: other,
		a: _existing_scope($childScope)
	}) : _owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "a0", input.label);
	_resume_branch($scope0_id);
}, 1, () => [echo_default]);
