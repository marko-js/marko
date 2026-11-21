// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<span>${_text_mark($scope0_id, "#text/0", input.title, _write_guard($scope0_reason, 0))}</span>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/child.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const Tag = input.count > 3 || child_default;
	_dynamic_tag($scope0_id, "#text/0", Tag, { title: "template" }, 0, 0, _write_guard($scope0_reason, 0));
	_write_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
