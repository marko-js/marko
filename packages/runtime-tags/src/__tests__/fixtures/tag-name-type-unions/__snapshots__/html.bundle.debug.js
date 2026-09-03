// tags/a/index.marko
var a_default = _template("__tests__/tags/a/index.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_label = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<div>A ${_text_resume($scope0_id, "#text/0", input.label, $sg__input_label * 2)}</div>`);
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/a/index.marko", 0);
});

// tags/b/index.marko
var b_default = _template("__tests__/tags/b/index.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_label = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<div>B ${_text_resume($scope0_id, "#text/0", input.label, $sg__input_label * 2)}</div>`);
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/b/index.marko", 0);
});

// template.marko
const localTag = a_default;
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let x = true;
	_html(`<button>toggle</button>${_el_resume($scope0_id, "#button/0")}`);
	_dynamic_tag($scope0_id, "#text/1", x ? "div" : undefined, { id: "d1" }, _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html("u");
	}, $scope0_id));
	_dynamic_tag($scope0_id, "#text/2", x ? "div" : "span", {}, _content_resume("__tests__/template.marko_2*content", () => {
		const $scope2_id = _scope_id();
		_scope_reason();
		_html("n");
	}, $scope0_id));
	_dynamic_tag($scope0_id, "#text/3", navigator, {}, _content_resume("__tests__/template.marko_3*content", () => {
		const $scope3_id = _scope_id();
		_scope_reason();
		_html("g");
	}, $scope0_id), 0, 0);
	_dynamic_tag($scope0_id, "#text/4", x ? a_default : b_default, { label: "ab" });
	_dynamic_tag($scope0_id, "#text/5", x ? "div" : a_default, { label: "ad" }, _content_resume("__tests__/template.marko_4*content", () => {
		const $scope4_id = _scope_id();
		_scope_reason();
		_html("m");
	}, $scope0_id));
	_dynamic_tag($scope0_id, "#text/6", x ? localTag : a_default, { label: "la" });
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { x }, "__tests__/template.marko", 0, { x: "4:6" });
}, 1);
