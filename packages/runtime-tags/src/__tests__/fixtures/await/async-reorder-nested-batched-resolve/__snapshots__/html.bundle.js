// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const promiseA = resolveAfter("a", 1);
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "a", promiseA, (value) => {
			const $scope2_id = _scope_id();
			_html(`<div${_attr_class(value)} level=1>`);
			_try($scope2_id, "b", () => {
				_scope_reason();
				const $scope3_id = _scope_id();
				_await($scope3_id, "a", promiseA, (value) => {
					const $scope6_id = _scope_id();
					const promiseB = resolveAfter("b", 2);
					_html(`<div${_attr_class(value)} level=2>`);
					_try($scope6_id, "b", () => {
						_scope_reason();
						const $scope7_id = _scope_id();
						_await($scope7_id, "a", promiseB, (value) => {
							const $scope8_id = _scope_id();
							_html(`<div${_attr_class(value)} level=3>`);
							_try($scope8_id, "b", () => {
								_scope_reason();
								const $scope9_id = _scope_id();
								_await($scope9_id, "a", promiseB, (value) => {
									_scope_id();
									_html(`<div${_attr_class(value)} level=4></div>`);
								}, 0);
							}, () => {
								_scope_reason();
								_scope_id();
								_html("LOADING B2");
							}, void 0, "a0");
							_html("</div>");
						}, 0);
					}, () => {
						_scope_reason();
						_scope_id();
						_html("LOADING B1");
					}, void 0, "a1");
					_html("</div>");
				}, 0);
			}, () => {
				_scope_reason();
				_scope_id();
				_html("LOADING A2");
			}, void 0, "a2");
			_html("</div>");
		}, 0);
	}, () => {
		_scope_reason();
		_scope_id();
		_html("LOADING A1");
	}, void 0, "a3");
}, 1);
