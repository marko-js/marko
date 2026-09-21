// tags/card.marko
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_content = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<div class=card>");
	_dynamic_tag($scope0_id, "#text/0", input.content, {}, 0, 0, $sg__input_content);
	_html("</div>");
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/card.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $count__closures = new Set();
	let show = false;
	let count = 0;
	_html(`<button id=toggle>toggle</button>${_el_resume($scope0_id, "#button/0")}`);
	_dynamic_tag($scope0_id, "#text/1", show ? card_default : null, {}, _content("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<button id=inc>${_text_resume($scope1_id, "#text/1", count)}</button>${_el_resume($scope1_id, "#button/0")}`);
		_script($scope1_id, "__tests__/template.marko_1");
		_subscribe($count__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "9:4"));
	}, $scope0_id));
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		show,
		count,
		"ClosureScopes:count": $count__closures
	}, "__tests__/template.marko", 0, {
		show: "6:6",
		count: "7:6"
	});
}, 1);
