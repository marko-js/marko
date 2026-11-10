// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let show = false;
	_content("a0", ({ content }) => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html("<section>");
		_dynamic_tag($scope1_id, "a", content, {}, 0, 0, 0);
		_html("</section>");
	}, $scope0_id);
	_html(`<button id=toggle>toggle</button>${_el_mark($scope0_id, "a")}`);
	_if(() => {}, $scope0_id, "b", 1, 1, 0, 0, 1);
	_script($scope0_id, "a2");
	_scope($scope0_id, { c: show });
}, 1);
