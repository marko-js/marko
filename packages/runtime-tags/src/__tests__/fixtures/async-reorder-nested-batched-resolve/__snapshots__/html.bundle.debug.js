// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const promiseA = resolveAfter("a", 1);
	_try($scope0_id, "#text/0", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "#text/0", promiseA, (value) => {
			const $scope2_id = _scope_id();
			_html(`<div${_attr_class(value)} level=1>`);
			_try($scope2_id, "#text/1", () => {
				_scope_reason();
				const $scope3_id = _scope_id();
				_await($scope3_id, "#text/0", promiseA, (value) => {
					const $scope6_id = _scope_id();
					const promiseB = resolveAfter("b", 2);
					_html(`<div${_attr_class(value)} level=2>`);
					_try($scope6_id, "#text/1", () => {
						_scope_reason();
						const $scope7_id = _scope_id();
						_await($scope7_id, "#text/0", promiseB, (value) => {
							const $scope8_id = _scope_id();
							_html(`<div${_attr_class(value)} level=3>`);
							_try($scope8_id, "#text/1", () => {
								_scope_reason();
								const $scope9_id = _scope_id();
								_await($scope9_id, "#text/0", promiseB, (value) => {
									const $scope12_id = _scope_id();
									_html(`<div${_attr_class(value)} level=4></div>`);
								}, 0);
							}, () => {
								_scope_reason();
								const $scope11_id = _scope_id();
								_html("LOADING B2");
							}, void 0, "__tests__/template.marko_11*content");
							_html("</div>");
						}, 0);
					}, () => {
						_scope_reason();
						const $scope10_id = _scope_id();
						_html("LOADING B1");
					}, void 0, "__tests__/template.marko_10*content");
					_html("</div>");
				}, 0);
			}, () => {
				_scope_reason();
				const $scope5_id = _scope_id();
				_html("LOADING A2");
			}, void 0, "__tests__/template.marko_5*content");
			_html("</div>");
		}, 0);
	}, () => {
		_scope_reason();
		const $scope4_id = _scope_id();
		_html("LOADING A1");
	}, void 0, "__tests__/template.marko_4*content");
}, 1);
