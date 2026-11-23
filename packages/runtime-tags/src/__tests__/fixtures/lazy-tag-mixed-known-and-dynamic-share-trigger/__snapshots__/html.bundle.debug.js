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
	let showTag = false;
	let showDynamic = false;
	_html(`<button class=show-tag>tag</button>${_el_mark($scope0_id, "#button/0")}<button class=show-dynamic>dynamic</button>${_el_mark($scope0_id, "#button/1")}<span id=go>go</span>`);
	_if(() => {
		if (showTag) {
			const $scope1_id = _scope_id();
			$Child_withLoadAssets({ label: "tag" });
			_scope($scope1_id, {}, "__tests__/template.marko", "8:2");
			return 0;
		}
	}, $scope0_id, "#text/2");
	_dynamic_tag($scope0_id, "#text/3", showDynamic ? $Child_withLoadAssets : null, { label: "dynamic" });
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
