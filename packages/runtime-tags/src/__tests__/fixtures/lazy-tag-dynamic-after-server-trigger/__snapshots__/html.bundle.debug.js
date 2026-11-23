// child.marko
var child_default = _template("__tests__/child.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<span>${_text_mark($scope0_id, "#text/0", input.label, _write_guard($scope0_reason, 0))}</span>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/child.marko", 0);
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(() => child_default, "__tests__/child.marko", flush, "ready:__tests__/child.marko", [{
	type: "on-click",
	selector: "#go"
}]);
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let show = false;
	_html(`<button class=toggle>toggle</button>${_el_mark($scope0_id, "#button/0")}<span id=go>go</span>`);
	$Child_withLoadAssets({ label: "server" });
	_dynamic_tag($scope0_id, "#text/3", show ? $Child_withLoadAssets : null, { label: "dynamic" });
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { show }, "__tests__/template.marko", 0, { show: "3:6" });
}, 1);
