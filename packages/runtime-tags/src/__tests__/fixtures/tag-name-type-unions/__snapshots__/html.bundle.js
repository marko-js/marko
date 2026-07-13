// tags/a/index.marko
var a_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_label = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<div>A ${_sep($sg__input_label)}${_escape(input.label)}${_el_resume($scope0_id, "a", $sg__input_label)}</div>`);
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {});
});

// tags/b/index.marko
var b_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_label = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<div>B ${_sep($sg__input_label)}${_escape(input.label)}${_el_resume($scope0_id, "a", $sg__input_label)}</div>`);
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {});
});

// template.marko
const localTag = a_default;
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let x = true;
	_html(`<button>toggle</button>${_el_resume($scope0_id, "a")}`);
	_dynamic_tag($scope0_id, "b", "div", { id: "d1" }, _content_resume("a0", () => {
		_scope_id();
		_scope_reason();
		_html("u");
	}, $scope0_id));
	_dynamic_tag($scope0_id, "c", "div", {}, _content_resume("a1", () => {
		_scope_id();
		_scope_reason();
		_html("n");
	}, $scope0_id));
	_dynamic_tag($scope0_id, "d", navigator, {}, _content_resume("a2", () => {
		_scope_id();
		_scope_reason();
		_html("g");
	}, $scope0_id), 0, 0);
	_dynamic_tag($scope0_id, "e", a_default, { label: "ab" });
	_dynamic_tag($scope0_id, "f", "div", { label: "ad" }, _content_resume("a3", () => {
		_scope_id();
		_scope_reason();
		_html("m");
	}, $scope0_id));
	_dynamic_tag($scope0_id, "g", localTag, { label: "la" });
	_script($scope0_id, "a4");
	writeScope($scope0_id, { h: x });
	_resume_branch($scope0_id);
}, 1);
