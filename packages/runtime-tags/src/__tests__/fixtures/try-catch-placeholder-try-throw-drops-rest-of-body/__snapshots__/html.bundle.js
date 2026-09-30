// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "a", resolveAfter("b", 1), (b) => {
			const $scope3_id = _scope_id();
			_try($scope3_id, "a", () => {
				_scope_reason();
				_scope_id();
				_html(_escape((() => {
					throw new Error("ERROR!");
				})()));
			}, () => {
				_scope_reason();
				_scope_id();
				_html("loading");
			}, void 0, "a0");
			_html("<p>dead</p>");
		}, 0);
	}, void 0, (err) => {
		const $scope2_reason = _scope_reason(), $sg__err_message = _serialize_guard($scope2_reason, 0);
		const $scope2_id = _scope_id();
		_html(`caught ${_text_resume($scope2_id, "a", err.message, $sg__err_message * 2)}`);
		_serialize_if($scope2_reason, 0) && _scope($scope2_id, {});
	}, void 0, "a1");
	_await($scope0_id, "b", resolveAfter("d", 2), (d) => {
		_scope_id();
		_html(`<p>${_escape(d)}</p>`);
	}, 0);
}, 1);
