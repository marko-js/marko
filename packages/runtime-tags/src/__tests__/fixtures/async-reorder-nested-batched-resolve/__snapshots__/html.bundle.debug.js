// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const promiseA = resolveAfter("a", 1);
	_try($scope0_id, "#text/0", _content_resume("__tests__/template.marko_1_content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_await($scope1_id, "#text/0", promiseA, (value) => {
			const $scope2_id = _scope_id();
			_html(`<div${_attr_class(value)} level=1>`);
			_try($scope2_id, "#text/1", _content_resume("__tests__/template.marko_3_content", () => {
				const $scope3_id = _scope_id();
				_scope_reason();
				_await($scope3_id, "#text/0", promiseA, (value) => {
					const $scope6_id = _scope_id();
					const promiseB = resolveAfter("b", 2);
					_html(`<div${_attr_class(value)} level=2>`);
					_try($scope6_id, "#text/1", _content_resume("__tests__/template.marko_7_content", () => {
						const $scope7_id = _scope_id();
						_scope_reason();
						_await($scope7_id, "#text/0", promiseB, (value) => {
							const $scope8_id = _scope_id();
							_html(`<div${_attr_class(value)} level=3>`);
							_try($scope8_id, "#text/1", _content_resume("__tests__/template.marko_9_content", () => {
								const $scope9_id = _scope_id();
								_scope_reason();
								_await($scope9_id, "#text/0", promiseB, (value) => {
									const $scope12_id = _scope_id();
									_html(`<div${_attr_class(value)} level=4></div>`);
								}, 0);
								_resume_branch($scope9_id);
							}, $scope8_id), { placeholder: attrTag({ content: _content_resume("__tests__/template.marko_11_content", () => {
								_scope_reason();
								const $scope11_id = _scope_id();
								_html("LOADING B2");
							}, $scope8_id) }) });
							_html("</div>");
						}, 0);
						_resume_branch($scope7_id);
					}, $scope6_id), { placeholder: attrTag({ content: _content_resume("__tests__/template.marko_10_content", () => {
						_scope_reason();
						const $scope10_id = _scope_id();
						_html("LOADING B1");
					}, $scope6_id) }) });
					_html("</div>");
				}, 0);
				_resume_branch($scope3_id);
			}, $scope2_id), { placeholder: attrTag({ content: _content_resume("__tests__/template.marko_5_content", () => {
				_scope_reason();
				const $scope5_id = _scope_id();
				_html("LOADING A2");
			}, $scope2_id) }) });
			_html("</div>");
		}, 0);
		_resume_branch($scope1_id);
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume("__tests__/template.marko_4_content", () => {
		_scope_reason();
		const $scope4_id = _scope_id();
		_html("LOADING A1");
	}, $scope0_id) }) });
}, 1);
