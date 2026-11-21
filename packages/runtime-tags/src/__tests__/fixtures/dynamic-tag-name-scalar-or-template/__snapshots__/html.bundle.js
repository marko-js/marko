// tags/child.marko
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<span>${_text_mark($scope0_id, "a", input.title, _write_guard($scope0_reason, 0))}</span>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const Tag = input.count > 3 || child_default;
	_dynamic_tag($scope0_id, "a", Tag, { title: "template" }, 0, 0, _write_guard($scope0_reason, 0));
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
}, 1);
