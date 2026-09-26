// child.marko
var child_default = _template("__tests__/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_content = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<section>");
	_dynamic_tag($scope0_id, "#text/0", input.content, {}, 0, 0, $sg__input_content);
	_html("</section>");
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/child.marko", 0);
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, "ready:__tests__/child.marko");
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $show__closures = new Set();
	let show = true;
	_html(`<button>toggle</button>${_el_resume($scope0_id, "#button/0")}`);
	$Child_withLoadAssets({ content: _content("__tests__/template.marko_1*content", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_if(() => {
			if (show) {
				const $scope2_id = _scope_id();
				_html("shown");
				_scope($scope2_id, {}, "__tests__/template.marko", "6:4");
				return 0;
			}
		}, $scope1_id, "#text/0");
		_subscribe($show__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "5:2"), "__tests__/template.marko_1_show#3/subscribe");
	}, $scope0_id) });
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		show,
		"ClosureScopes:show/4": $show__closures
	}, "__tests__/template.marko", 0, { show: "3:6" });
}, 1);
