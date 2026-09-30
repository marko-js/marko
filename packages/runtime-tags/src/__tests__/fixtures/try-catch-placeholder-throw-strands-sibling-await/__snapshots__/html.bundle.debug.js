// template.marko
const never = new Promise(() => {});
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_try($scope0_id, "#text/0", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "#text/0", resolveAfter("outer", 1), () => {
			const $scope3_id = _scope_id();
			_try($scope3_id, "#text/0", () => {
				_scope_reason();
				const $scope4_id = _scope_id();
				_await($scope4_id, "#text/0", never, () => {
					const $scope6_id = _scope_id();
					_html("never");
				}, 0);
				_await($scope4_id, "#text/1", resolveAfter("inner", 2), () => {
					const $scope7_id = _scope_id();
					_try($scope7_id, "#text/0", () => {
						_scope_reason();
						const $scope8_id = _scope_id();
						_await($scope8_id, "#text/0", resolveAfter("body", 3), () => {
							const $scope10_id = _scope_id();
							_html("body");
						}, 0);
					}, () => {
						_scope_reason();
						const $scope9_id = _scope_id();
						_html(_escape((() => {
							throw new Error("ERROR!");
						})()));
					}, void 0, "__tests__/template.marko_9*content");
				}, 0);
			}, void 0, (err) => {
				const $scope5_reason = _scope_reason(), $sg__err_message = _serialize_guard($scope5_reason, 0);
				const $scope5_id = _scope_id();
				_html(`caught ${_text_resume($scope5_id, "#text/0", err.message, $sg__err_message * 2)}`);
				_serialize_if($scope5_reason, 0) && _scope($scope5_id, {}, "__tests__/template.marko", "16:8");
			}, void 0, "__tests__/template.marko_5*content");
		}, 0);
	}, () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html("loading");
	}, void 0, "__tests__/template.marko_2*content");
}, 1);
