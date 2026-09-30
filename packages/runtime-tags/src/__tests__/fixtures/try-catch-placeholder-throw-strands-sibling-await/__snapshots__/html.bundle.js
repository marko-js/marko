// template.marko
const never = new Promise(() => {});
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "a", resolveAfter("outer", 1), () => {
			const $scope3_id = _scope_id();
			_try($scope3_id, "a", () => {
				_scope_reason();
				const $scope4_id = _scope_id();
				_await($scope4_id, "a", never, () => {
					_scope_id();
					_html("never");
				}, 0);
				_await($scope4_id, "b", resolveAfter("inner", 2), () => {
					const $scope7_id = _scope_id();
					_try($scope7_id, "a", () => {
						_scope_reason();
						const $scope8_id = _scope_id();
						_await($scope8_id, "a", resolveAfter("body", 3), () => {
							_scope_id();
							_html("body");
						}, 0);
					}, () => {
						_scope_reason();
						_scope_id();
						_html(_escape((() => {
							throw new Error("ERROR!");
						})()));
					}, void 0, "a0");
				}, 0);
			}, void 0, (err) => {
				const $scope5_reason = _scope_reason(), $sg__err_message = _serialize_guard($scope5_reason, 0);
				const $scope5_id = _scope_id();
				_html(`caught ${_text_resume($scope5_id, "a", err.message, $sg__err_message * 2)}`);
				_serialize_if($scope5_reason, 0) && _scope($scope5_id, {});
			}, void 0, "a1");
		}, 0);
	}, () => {
		_scope_reason();
		_scope_id();
		_html("loading");
	}, void 0, "a2");
}, 1);
