// tags/child.marko
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<div${_attrs(input, "a", $scope0_id, "div")}>`);
	_dynamic_tag($scope0_id, "b", input.content, {}, 0, 0, _serialize_guard($scope0_reason, 0));
	_html(`</div>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	_scope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let show = false;
	_html(`<button>Toggle</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {}, $scope0_id, "b", 1, 1, 1, 0, 1);
	_script($scope0_id, "a1");
	_scope($scope0_id, { c: show });
}, 1);
