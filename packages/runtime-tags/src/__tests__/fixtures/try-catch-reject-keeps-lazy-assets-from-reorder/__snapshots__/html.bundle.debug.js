// child.marko
var child_default = _template("__tests__/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_value = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<span>${_text_resume($scope0_id, "#text/0", input.value, $sg__input_value)}</span>`);
	_script($scope0_id, "__tests__/child.marko_0_input_value#3", $sg__input_value);
	_scope($scope0_id, { input_value: input.value }, "__tests__/child.marko", 0, { input_value: ["input.value"] });
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, "ready:__tests__/child.marko");
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_try($scope0_id, "#text/0", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "#text/0", resolveAfter("body", 1), (v) => {
			const $scope4_id = _scope_id();
			$Child_withLoadAssets({ value: v });
		}, 0);
		_await($scope1_id, "#text/1", rejectAfter(new Error("ERROR!"), 1), (v) => {
			const $scope5_id = _scope_id();
			_html(_escape(v));
		}, 0);
	}, () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html("loading");
	}, (err) => {
		const $scope3_reason = _scope_reason(), $sg__err_message = _serialize_guard($scope3_reason, 0);
		const $scope3_id = _scope_id();
		$Child_withLoadAssets({ value: "catch" });
		_html(` caught ${_text_resume($scope3_id, "#text/2", err.message, $sg__err_message * 2)}`);
		_serialize_if($scope3_reason, 0) && _scope($scope3_id, {}, "__tests__/template.marko", "10:4");
	}, "__tests__/template.marko_2*content", "__tests__/template.marko_3*content");
}, 1);
