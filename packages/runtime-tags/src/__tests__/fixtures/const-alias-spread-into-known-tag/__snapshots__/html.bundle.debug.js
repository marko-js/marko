// tags/child/index.marko
var child_default = _template("__tests__/tags/child/index.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<div${_attr_class(input.class)}>${_text_mark($scope0_id, "#text/1", input.value, _write_guard($scope0_reason, 2))}</div>${_el_mark($scope0_id, "#div/0", _write_guard($scope0_reason, 1))}`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/child/index.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	child_default({
		class: "c",
		value: "d"
	});
}, 1);
