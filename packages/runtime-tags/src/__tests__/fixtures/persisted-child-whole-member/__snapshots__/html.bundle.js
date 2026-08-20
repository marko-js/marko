// tags/duo/index.marko
const $template = "<h2> </h2><p> </p>";
const $walks = "D lD l";
_shells({ b: "b;D lD ;<h2> </h2><p> </p>" });
var duo_default = _template_persisted("b", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<h2>${_patch_text($scope0_id, "a", input.label, $scope0_owned, 1)}${_el_resume($scope0_id, "a")}</h2><p>${_patch_text($scope0_id, "b", JSON.stringify(input), $scope0_owned, 0)}${_el_resume($scope0_id, "b")}</p>`);
	$scope0_reason && writeScope($scope0_id, {});
}, 0, 0);

// template.marko
_shells({ a: /*@__PURE__*/ ((_w0, _w1) => `a !a0;${_w0};${_w1}`)(((_w0) => `D/${_w0}& l`)($walks), ((_w0) => `<main>${_w0}<button>+</button></main>`)($template)) });
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main>");
	_set_serialize_reason(30);
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "a", $childScope);
	duo_default({
		label: input.title,
		value: count
	});
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a0");
	$scope0_reason ? writeScope($scope0_id, {
		e: input.title,
		f: count,
		a: _existing_scope($childScope)
	}) : _owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "a0", input.title);
	_resume_branch($scope0_id);
}, 1, () => [duo_default]);
