// tags/kid.marko
var kid_default = _template("__tests__/tags/kid.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_label = _serialize_guard($scope0_reason, 1), $sg__input_open = _serialize_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_html(`<span>${_text_resume($scope0_id, "#text/0", input.label, $sg__input_label)} ${_text_resume($scope0_id, "#text/1", input.open ? "open" : "closed", $sg__input_open * 2)}</span>`);
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/kid.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let live = {
		open: false,
		label: "live"
	};
	_set_serialize_reason(42);
	const $childScope = _peek_scope_id();
	kid_default(live);
	_html(`<button class=open>open</button>${_el_resume($scope0_id, "#button/1")}<button class=read>read</button>${_el_resume($scope0_id, "#button/2")}<button class=apply>apply</button>${_el_resume($scope0_id, "#button/3")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		live,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { live: "1:6" });
}, 1);
