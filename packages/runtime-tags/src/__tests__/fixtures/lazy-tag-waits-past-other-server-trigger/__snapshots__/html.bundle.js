// first.marko
var first_default = _template("a", (input) => {
	_scope_reason();
	_scope_id();
	_html("<span>first loaded</span>");
});

// second.marko
var second_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button class=count>${_text_mark($scope0_id, "b", count)}</button>${_el_mark($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	_scope($scope0_id, { c: count });
});

// template.marko
const $First_withLoadAssets = withLoadAssets(() => first_default, "a", flush, "_a", [{
	type: "on-click",
	selector: "#first"
}]);
const $Second_withLoadAssets = withLoadAssets(() => second_default, "b", flush, "_b", [{
	type: "on-click",
	selector: "#second"
}]);
var template_default = _template("c", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let show = false;
	_html(`<button class=toggle>toggle</button>${_el_mark($scope0_id, "a")}<span id=first>first</span><span id=second>second</span>`);
	$First_withLoadAssets({});
	$Second_withLoadAssets({});
	_if(() => {}, $scope0_id, "f");
	_script($scope0_id, "c0");
	_scope($scope0_id, { g: show });
}, 1);
