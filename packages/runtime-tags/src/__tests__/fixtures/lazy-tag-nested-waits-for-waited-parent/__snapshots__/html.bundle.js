// grand-child.marko
var grand_child_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<button class=press>press</button>${_el_mark($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	_scope($scope0_id, { d: input.onPress });
});

// child.marko
const $GrandChild_withLoadAssets = withLoadAssets(() => grand_child_default, "b", flush, "_b");
var child_default = _template("a", (input) => {
	_scope_reason();
	_scope_id();
	$GrandChild_withLoadAssets({ onPress: _resume(function() {
		console.log("pressed");
	}, "a0") });
});

// other.marko
var other_default = _template("c", (input) => {
	_scope_reason();
	_scope_id();
	_html("<span>other loaded</span>");
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(() => child_default, "a", flush, "_a", [{
	type: "on-click",
	selector: "#go"
}]);
const $Other_withLoadAssets = withLoadAssets(() => other_default, "c", flush, "_c", [{
	type: "on-click",
	selector: "#other"
}]);
var template_default = _template("d", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<button class=toggle>toggle</button>${_el_mark($scope0_id, "a")}<span id=go>go</span><span id=other>other</span>`);
	$Child_withLoadAssets({});
	$Other_withLoadAssets({});
	_if(() => {}, $scope0_id, "f");
	_script($scope0_id, "d0");
	_scope($scope0_id, {});
}, 1);
