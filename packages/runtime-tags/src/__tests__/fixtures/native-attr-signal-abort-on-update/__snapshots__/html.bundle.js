// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_if(() => {}, $scope0_id, "a");
	_html(`<button id=inc>${_text_mark($scope0_id, "c", count)}</button>${_el_mark($scope0_id, "b")}<button id=hide></button>${_el_mark($scope0_id, "d")}`);
	_script($scope0_id, "a1");
	_scope($scope0_id, {
		g: input.attrs,
		h: count
	});
}, 1);
