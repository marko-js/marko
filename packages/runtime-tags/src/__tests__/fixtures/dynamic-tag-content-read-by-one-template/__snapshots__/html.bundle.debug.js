// tags/a.marko
var a_default = _template("__tests__/tags/a.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_x = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<div>A ${_text_resume($scope0_id, "#text/0", input.x, $sg__input_x * 2)}</div>`);
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/a.marko", 0);
});

// tags/b.marko
var b_default = _template("__tests__/tags/b.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_content = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<span>B ");
	_dynamic_tag($scope0_id, "#text/0", input.content, {}, 0, 0, $sg__input_content);
	_html("</span>");
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/b.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let useB = true;
	_dynamic_tag($scope0_id, "#text/0", useB ? b_default : a_default, { x: 1 }, _content("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html("Hello");
	}, $scope0_id));
	_html(`<button></button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { useB }, "__tests__/template.marko", 0, { useB: "4:6" });
}, 1);
