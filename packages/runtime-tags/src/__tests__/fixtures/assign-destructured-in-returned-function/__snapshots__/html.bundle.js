// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let a = 0;
	let b = 0;
	let c = 0;
	let d = 0;
	_html(`<button class=show>show</button>${_el_mark($scope0_id, "a")}`);
	_if(() => {}, $scope0_id, "b", 1, 1, 0, 0, 1);
	_html(`<div>${_text_mark($scope0_id, "c", a)} ${_text_mark($scope0_id, "d", b, 2)} ${_text_mark($scope0_id, "e", c, 2)} ${_text_mark($scope0_id, "f", d, 2)}</div>`);
	_script($scope0_id, "a1");
	_scope($scope0_id, {});
}, 1);
