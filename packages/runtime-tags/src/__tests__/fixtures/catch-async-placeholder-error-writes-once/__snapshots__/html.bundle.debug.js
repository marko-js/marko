// child.marko
var child_default = _template("__tests__/child.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const promise = resolveAfter("hello", 3);
	_html("<div id=ref>0</div>");
	_script($scope0_id, "__tests__/child.marko_0_promise#0", 0);
	_scope($scope0_id, { promise }, "__tests__/child.marko", 0, { promise: "3:8" });
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, "ready:__tests__/child.marko");
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_try($scope0_id, "#text/0", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "#text/0", resolveAfter("content", 1), (value) => {
			const $scope5_id = _scope_id();
			_html(_escape(value));
		}, 0);
	}, () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_await($scope2_id, "#text/0", resolveAfter("placeholder", 2), (value) => {
			const $scope3_id = _scope_id();
			_html(_escape(value));
		}, 0);
	}, (err) => {
		const $scope4_reason = _scope_reason(), $wg__err_message = _write_guard($scope4_reason, 0);
		const $scope4_id = _scope_id();
		_html(`caught ${_text_resume($scope4_id, "#text/0", err.message, $wg__err_message * 2)}`);
		$Child_withLoadAssets({});
		_write_if($scope4_reason, 0) && _scope($scope4_id, {}, "__tests__/template.marko", "13:4");
	}, "__tests__/template.marko_2*content", "__tests__/template.marko_4*content");
}, 1);
