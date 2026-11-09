// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let x = 1;
	let yChange = _resume(function(newValue) {
		x = newValue + 1;
	}, "a0", $scope0_id);
	let y = x;
	_html(`<button id=inc>${_text_mark($scope0_id, "b", x)}|${_text_mark($scope0_id, "c", y, 2)}|${_text_mark($scope0_id, "d", void 0, 2)}</button>${_el_mark($scope0_id, "a")}<button id=toggle>toggle</button>${_el_mark($scope0_id, "e")}`);
	_script($scope0_id, "a1");
	_scope($scope0_id, {
		f: x,
		g: yChange,
		i: y,
		j: yChange || void 0
	});
}, 1);
