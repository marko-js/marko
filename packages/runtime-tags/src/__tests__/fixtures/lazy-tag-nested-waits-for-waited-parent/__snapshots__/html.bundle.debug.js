// grand-child.marko
var grand_child_default = _template("__tests__/grand-child.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<button class=press>press</button>${_el_mark($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/grand-child.marko_0_input_onPress#3");
	_scope($scope0_id, { input_onPress: input.onPress }, "__tests__/grand-child.marko", 0, { input_onPress: ["input.onPress"] });
});

// child.marko
const $GrandChild_withLoadAssets = withLoadAssets(() => grand_child_default, "__tests__/grand-child.marko", flush, "ready:__tests__/grand-child.marko");
var child_default = _template("__tests__/child.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	$GrandChild_withLoadAssets({ onPress: _resume(function() {
		console.log("pressed");
	}, "__tests__/child.marko_0/onPress") });
});

// other.marko
var other_default = _template("__tests__/other.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("<span>other loaded</span>");
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(() => child_default, "__tests__/child.marko", flush, "ready:__tests__/child.marko", [{
	type: "on-click",
	selector: "#go"
}]);
const $Other_withLoadAssets = withLoadAssets(() => other_default, "__tests__/other.marko", flush, "ready:__tests__/other.marko", [{
	type: "on-click",
	selector: "#other"
}]);
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let show = false;
	_html(`<button class=toggle>toggle</button>${_el_mark($scope0_id, "#button/0")}<span id=go>go</span><span id=other>other</span>`);
	$Child_withLoadAssets({});
	$Other_withLoadAssets({});
	_if(() => {
		if (show) {
			const $scope1_id = _scope_id();
			$Child_withLoadAssets({});
			_scope($scope1_id, {}, "__tests__/template.marko", "10:2");
			return 0;
		}
	}, $scope0_id, "#text/5");
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
