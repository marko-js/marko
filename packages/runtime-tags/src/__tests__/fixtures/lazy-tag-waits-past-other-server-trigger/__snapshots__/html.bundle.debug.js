// first.marko
var first_default = _template("__tests__/first.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("<span>first loaded</span>");
});

// second.marko
var second_default = _template("__tests__/second.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button class=count>${_text_mark($scope0_id, "#text/1", count)}</button>${_el_mark($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/second.marko_0");
	_scope($scope0_id, { count }, "__tests__/second.marko", 0, { count: "1:6" });
});

// template.marko
const $First_withLoadAssets = withLoadAssets(() => first_default, "__tests__/first.marko", flush, "ready:__tests__/first.marko", [{
	type: "on-click",
	selector: "#first"
}]);
const $Second_withLoadAssets = withLoadAssets(() => second_default, "__tests__/second.marko", flush, "ready:__tests__/second.marko", [{
	type: "on-click",
	selector: "#second"
}]);
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let show = false;
	_html(`<button class=toggle>toggle</button>${_el_mark($scope0_id, "#button/0")}<span id=first>first</span><span id=second>second</span>`);
	$First_withLoadAssets({});
	$Second_withLoadAssets({});
	_if(() => {
		if (show) {
			const $scope1_id = _scope_id();
			$Second_withLoadAssets({});
			_scope($scope1_id, {}, "__tests__/template.marko", "10:2");
			return 0;
		}
	}, $scope0_id, "#text/5");
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { show }, "__tests__/template.marko", 0, { show: "4:6" });
}, 1);
