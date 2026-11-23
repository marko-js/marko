// child.marko
var child_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<span>${_text_mark($scope0_id, "a", input.label, _write_guard($scope0_reason, 0))}</span>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// template.marko
withLoadAssets(() => child_default, "a", flush, "_a", [{
	type: "on-click",
	selector: "#go"
}]);
var template_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<button class=show-tag>tag</button>${_el_mark($scope0_id, "a")}<button class=show-dynamic>dynamic</button>${_el_mark($scope0_id, "b")}<span id=go>go</span>`);
	_if(() => {}, $scope0_id, "c");
	_dynamic_tag($scope0_id, "d", null, { label: "dynamic" });
	_script($scope0_id, "b0");
	_scope($scope0_id, {});
}, 1);
