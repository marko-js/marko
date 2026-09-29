// child.marko
var child_default = _template("__tests__/child.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("<span id=child>child</span>");
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, "ready:__tests__/child.marko");
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_try($scope0_id, "#text/0", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_try($scope1_id, "#text/0", () => {
			_scope_reason();
			const $scope3_id = _scope_id();
			$Child_withLoadAssets({});
		}, void 0, (err) => {
			const $scope4_reason = _scope_reason(), $sg__err_message = _serialize_guard($scope4_reason, 0);
			const $scope4_id = _scope_id();
			_html(`caught: ${_text_resume($scope4_id, "#text/0", err.message, $sg__err_message * 2)}`);
			_serialize_if($scope4_reason, 0) && _scope($scope4_id, {}, "__tests__/template.marko", "7:6");
		}, void 0, "__tests__/template.marko_4*content");
	}, () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html("loading outer...");
	}, void 0, "__tests__/template.marko_2*content");
}, 1);
