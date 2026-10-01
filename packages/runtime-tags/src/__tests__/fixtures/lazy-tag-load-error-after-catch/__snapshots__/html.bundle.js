// child.marko
var child_default = _template("a", (input) => {
	_scope_reason();
	_scope_id();
	_html("<span>child</span>");
});

// template.marko
withLoadAssets(child_default, "_a", [{
	type: "on-click",
	selector: "#load"
}]);
var template_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $show__closures = /* @__PURE__ */ new Set();
	_html(`<button id=toggle>toggle</button>${_el_resume($scope0_id, "a")}<button id=load>load</button>`);
	_try($scope0_id, "b", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_if(() => {}, $scope1_id, "a");
		_subscribe($show__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "b0");
	}, () => {
		_scope_reason();
		_scope_id();
		_html("loading");
	}, (err) => {
		const $scope3_reason = _scope_reason(), $wg__err_message = _write_guard($scope3_reason, 0);
		const $scope3_id = _scope_id();
		_html(`caught: ${_text_resume($scope3_id, "a", err.message, $wg__err_message * 2)}`);
		_write_if($scope3_reason, 0) && _scope($scope3_id, {});
	}, "b1", "b2");
	_script($scope0_id, "b3");
	_scope($scope0_id, { d: $show__closures });
}, 1);
