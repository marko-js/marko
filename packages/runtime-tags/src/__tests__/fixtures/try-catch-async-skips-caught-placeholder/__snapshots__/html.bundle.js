// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 5;
	_html(`<button>count ${_text_resume($scope0_id, "b", count, 2)}</button>${_el_resume($scope0_id, "a")}`);
	_try($scope0_id, "c", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_try($scope1_id, "a", () => {
			_scope_reason();
			const $scope3_id = _scope_id();
			_await($scope3_id, "a", resolveAfter("outer", 1), (outer) => {
				const $scope5_id = _scope_id();
				_try($scope5_id, "a", () => {
					_scope_reason();
					const $scope6_id = _scope_id();
					_await($scope6_id, "a", resolveAfter("inner", 3), (inner) => {
						_scope_id();
						_html(_escape(inner));
					}, 0);
				}, () => {
					_scope_reason();
					const $scope7_id = _scope_id();
					let count = 0;
					_html(`<button>placeholder ${_text_resume($scope7_id, "b", count, 2)}</button>${_el_resume($scope7_id, "a")}`);
					_script($scope7_id, "a0");
					_scope($scope7_id, { c: count });
				}, void 0, "a1");
				_html(_escape((() => {
					throw new Error("ERROR!");
				})()));
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
	_await($scope0_id, "d", resolveAfter("done", 2), (done) => {
		_scope_id();
		_html(_escape(done));
	}, 0);
	_script($scope0_id, "a4");
	_scope($scope0_id, { e: count });
}, 1);
