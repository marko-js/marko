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
	_try($scope0_id, "#text/0", _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_await($scope1_id, "#text/0", resolveAfter("content", 1), (value) => {
			const $scope5_id = _scope_id();
			_html(_escape(value));
		}, 0);
	}, $scope0_id), {
		placeholder: attrTag({ content: _content_resume("__tests__/template.marko_2*content", () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			_await($scope2_id, "#text/0", resolveAfter("placeholder", 2), (value) => {
				const $scope3_id = _scope_id();
				_html(_escape(value));
			}, 0);
		}, $scope0_id) }),
		catch: attrTag({ content: _content_resume("__tests__/template.marko_4*content", (err) => {
			const $scope4_reason = _scope_reason(), $sg__err_message = _serialize_guard($scope4_reason, 0);
			const $scope4_id = _scope_id();
			_html(`caught ${_text_resume($scope4_id, "#text/0", err.message, $sg__err_message * 2)}`);
			$Child_withLoadAssets({});
			_serialize_if($scope4_reason, 0) && _scope($scope4_id, {}, "__tests__/template.marko", "13:4");
		}, $scope0_id) })
	});
}, 1);
