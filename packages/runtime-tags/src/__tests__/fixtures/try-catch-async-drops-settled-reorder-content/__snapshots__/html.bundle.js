// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_try($scope1_id, "a", () => {
			_scope_reason();
			const $scope3_id = _scope_id();
			_await($scope3_id, "a", resolveAfter("a", 1), (a) => {
				const $scope5_id = _scope_id();
				_html(`<p>${_escape(a)}</p>`);
				_try($scope5_id, "b", () => {
					_scope_reason();
					const $scope6_id = _scope_id();
					_await($scope6_id, "a", rejectAfter(/* @__PURE__ */ new Error("ERROR!"), 1), (b) => {
						_scope_id();
						_html(_escape(b));
					}, 0);
				}, () => {
					_scope_reason();
					_scope_id();
					_html("inner loading");
				}, void 0, "a0");
				_script($scope5_id, "a1", 0);
			}, 0);
		}, void 0, (err) => {
			const $scope4_reason = _scope_reason(), $sg__err_message = _serialize_guard($scope4_reason, 0);
			const $scope4_id = _scope_id();
			_html(`caught ${_text_resume($scope4_id, "a", err.message, $sg__err_message * 2)}`);
			_serialize_if($scope4_reason, 0) && _scope($scope4_id, {});
		}, void 0, "a2");
	}, () => {
		_scope_reason();
		_scope_id();
		_html("loading");
	}, void 0, "a3");
	_await($scope0_id, "b", resolveAfter("done", 2), (done) => {
		_scope_id();
		_html(_escape(done));
	}, 0);
}, 1);
