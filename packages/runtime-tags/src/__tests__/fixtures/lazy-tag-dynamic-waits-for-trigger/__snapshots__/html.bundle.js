// child.marko
var child_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button class=counter>${_text_mark($scope0_id, "b", count)}</button>${_el_mark($scope0_id, "a")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, { c: count });
});

// template.marko
withLoadAssets(() => child_default, "a", flush, "_a", [{
	type: "on-click",
	selector: "#go"
}]);
var template_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let show = false;
	_html(`<button class=toggle>toggle</button>${_el_mark($scope0_id, "a")}<span id=go>go</span>`);
	_dynamic_tag($scope0_id, "b", null, {});
	_script($scope0_id, "b0");
	_scope($scope0_id, { c: show });
}, 1);
