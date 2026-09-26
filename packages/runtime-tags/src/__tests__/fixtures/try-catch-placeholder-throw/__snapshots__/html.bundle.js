// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_try($scope0_id, "a", _content_resume("a2", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_await($scope1_id, "a", resolveAfter("body", 1), (value) => {
			_scope_id();
			_html(_escape(value));
		}, 0);
	}, $scope0_id), {
		placeholder: attrTag({ content: _content_resume("a0", () => {
			_scope_reason();
			_scope_id();
			_html(`loading ${_escape((() => {
				throw new Error("placeholder");
			})())}`);
		}, $scope0_id) }),
		catch: attrTag({ content: _content_resume("a1", (err) => {
			const $scope3_reason = _scope_reason(), $sg__err_message = _serialize_guard($scope3_reason, 0);
			const $scope3_id = _scope_id();
			_html(`caught ${_text_resume($scope3_id, "a", err.message, $sg__err_message * 2)}`);
			_serialize_if($scope3_reason, 0) && _scope($scope3_id, {});
		}, $scope0_id) })
	});
}, 1);
