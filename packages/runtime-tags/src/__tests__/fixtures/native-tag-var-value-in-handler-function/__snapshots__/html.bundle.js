// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const mark = _resume(() => {
		const get = _el_read_error;
		get().textContent = "clicked";
	}, "a0", $scope0_id);
	_html(`<div></div>${_el_mark($scope0_id, "a")}<button></button>${_el_mark($scope0_id, "b")}`);
	_script($scope0_id, "a1");
	_scope($scope0_id, { c: mark });
}, 1);
