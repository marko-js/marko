// tags/kid.marko
var kid_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_label = _serialize_guard($scope0_reason, 1), $sg__input_open = _serialize_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_html(`<span>${_text_resume($scope0_id, "a", input.label, $sg__input_label)} ${_text_resume($scope0_id, "b", input.open ? "open" : "closed", $sg__input_open * 2)}</span>`);
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let live = {
		open: false,
		label: "live"
	};
	_set_serialize_reason(42);
	const $childScope = _peek_scope_id();
	kid_default(live);
	_html(`<button class=open>open</button>${_el_resume($scope0_id, "b")}<button class=read>read</button>${_el_resume($scope0_id, "c")}<button class=apply>apply</button>${_el_resume($scope0_id, "d")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		e: live,
		a: _existing_scope($childScope)
	});
}, 1);
