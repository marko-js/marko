// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 5;
	_html(`<button>count ${_text_resume($scope0_id, "#text/1", count, 2)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_try($scope0_id, "#text/2", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_try($scope1_id, "#text/0", () => {
			_scope_reason();
			const $scope3_id = _scope_id();
			_await($scope3_id, "#text/0", resolveAfter("outer", 1), (outer) => {
				const $scope5_id = _scope_id();
				_try($scope5_id, "#text/0", () => {
					_scope_reason();
					const $scope6_id = _scope_id();
					_await($scope6_id, "#text/0", resolveAfter("inner", 3), (inner) => {
						const $scope8_id = _scope_id();
						_html(_escape(inner));
					}, 0);
				}, () => {
					_scope_reason();
					const $scope7_id = _scope_id();
					let count = 0;
					_html(`<button>placeholder ${_text_resume($scope7_id, "#text/1", count, 2)}</button>${_el_resume($scope7_id, "#button/0")}`);
					_script($scope7_id, "__tests__/template.marko_7");
					_scope($scope7_id, { count }, "__tests__/template.marko", "10:10", { count: "11:16" });
				}, void 0, "__tests__/template.marko_7*content");
				_html(_escape((() => {
					throw new Error("ERROR!");
				})()));
			}, 0);
		}, void 0, (err) => {
			const $scope4_reason = _scope_reason(), $wg__err_message = _write_guard($scope4_reason, 0);
			const $scope4_id = _scope_id();
			_html(`caught ${_text_resume($scope4_id, "#text/0", err.message, $wg__err_message * 2)}`);
			_write_if($scope4_reason, 0) && _scope($scope4_id, {}, "__tests__/template.marko", "18:6");
		}, void 0, "__tests__/template.marko_4*content");
	}, () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html("loading");
	}, void 0, "__tests__/template.marko_2*content");
	_await($scope0_id, "#text/3", resolveAfter("done", 2), (done) => {
		const $scope9_id = _scope_id();
		_html(_escape(done));
	}, 0);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { count }, "__tests__/template.marko", 0, { count: "3:6" });
}, 1);
