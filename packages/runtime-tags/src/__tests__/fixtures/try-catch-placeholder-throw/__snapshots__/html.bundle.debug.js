// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_try($scope0_id, "#text/0", _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_await($scope1_id, "#text/0", resolveAfter("body", 1), (value) => {
			const $scope4_id = _scope_id();
			_html(_escape(value));
		}, 0);
	}, $scope0_id), {
		placeholder: attrTag({ content: _content_resume("__tests__/template.marko_2*content", () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			_html(`loading ${_escape((() => {
				throw new Error("placeholder");
			})())}`);
		}, $scope0_id) }),
		catch: attrTag({ content: _content_resume("__tests__/template.marko_3*content", (err) => {
			const $scope3_reason = _scope_reason(), $sg__err_message = _serialize_guard($scope3_reason, 0);
			const $scope3_id = _scope_id();
			_html(`caught ${_text_resume($scope3_id, "#text/0", err.message, $sg__err_message * 2)}`);
			_serialize_if($scope3_reason, 0) && _scope($scope3_id, {}, "__tests__/template.marko", "7:4");
		}, $scope0_id) })
	});
}, 1);
