// tags/counter/index.marko
const $template = "<section><p>Value <!> (spun <!>)</p><button class=spin>spin</button></section>";
const $walks = "Eb%c%l l";
_shells({ b: "b !b0;Eb%c%l ;<section><p>Value <!> (spun <!>)</p><button class=spin>spin</button></section>" });
var counter_default = _template_persisted("b", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let spins = 0;
	_html(`<section><p>Value <!>${_patch_text($scope0_id, "a", input.value, $scope0_owned, 0)}${_el_resume($scope0_id, "a")} (spun <!>${_escape(spins)}${_el_resume($scope0_id, "b")})</p><button class=spin>spin</button>${_el_resume($scope0_id, "c")}</section>`);
	_script($scope0_id, "b0");
	_patch_value($scope0_id, "b0", spins, 1);
	$scope0_reason && writeScope($scope0_id, { g: spins });
	_resume_branch($scope0_id);
}, 0, 0);

// template.marko
_shells({ a: /*@__PURE__*/ ((_w0, _w1) => `a !a0;${_w0};${_w1}`)(((_w0) => `E l/${_w0}& l`)($walks), ((_w0) => `<main><h1> </h1>${_w0}<button class=inc>+</button></main>`)($template)) });
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<main><h1>${_patch_text($scope0_id, "a", input.title, $scope0_owned, 0)}${_el_resume($scope0_id, "a")}</h1>`);
	const $childScope = _peek_scope_id();
	if ($scope0_reason || _must_render(counter_default)) {
		_set_serialize_reason(2);
		_patch_child($scope0_id, "b", $childScope);
		counter_default({ value: count });
	}
	_html(`<button class=inc>+</button>${_el_resume($scope0_id, "c")}</main>`);
	_script($scope0_id, "a0");
	$scope0_reason && writeScope($scope0_id, {
		g: count,
		b: _existing_scope($childScope)
	});
	_resume_branch($scope0_id);
}, 1, () => [counter_default]);
