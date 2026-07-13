// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const promiseA = resolveAfter("a", 1);
	_try($scope0_id, "a", _content_resume("a7", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_await($scope1_id, "a", promiseA, (value) => {
			const $scope2_id = _scope_id();
			_html(`<div${_attr_class(value)} level=1>`);
			_try($scope2_id, "b", _content_resume("a5", () => {
				const $scope3_id = _scope_id();
				_scope_reason();
				_await($scope3_id, "a", promiseA, (value) => {
					const $scope6_id = _scope_id();
					const promiseB = resolveAfter("b", 2);
					_html(`<div${_attr_class(value)} level=2>`);
					_try($scope6_id, "b", _content_resume("a3", () => {
						const $scope7_id = _scope_id();
						_scope_reason();
						_await($scope7_id, "a", promiseB, (value) => {
							const $scope8_id = _scope_id();
							_html(`<div${_attr_class(value)} level=3>`);
							_try($scope8_id, "b", _content_resume("a1", () => {
								const $scope9_id = _scope_id();
								_scope_reason();
								_await($scope9_id, "a", promiseB, (value) => {
									_scope_id();
									_html(`<div${_attr_class(value)} level=4></div>`);
								}, 0);
								_resume_branch($scope9_id);
							}, $scope8_id), { placeholder: attrTag({ content: _content_resume("a0", () => {
								_scope_reason();
								_scope_id();
								_html("LOADING B2");
							}, $scope8_id) }) });
							_html("</div>");
						}, 0);
						_resume_branch($scope7_id);
					}, $scope6_id), { placeholder: attrTag({ content: _content_resume("a2", () => {
						_scope_reason();
						_scope_id();
						_html("LOADING B1");
					}, $scope6_id) }) });
					_html("</div>");
				}, 0);
				_resume_branch($scope3_id);
			}, $scope2_id), { placeholder: attrTag({ content: _content_resume("a4", () => {
				_scope_reason();
				_scope_id();
				_html("LOADING A2");
			}, $scope2_id) }) });
			_html("</div>");
		}, 0);
		_resume_branch($scope1_id);
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume("a6", () => {
		_scope_reason();
		_scope_id();
		_html("LOADING A1");
	}, $scope0_id) }) });
}, 1);
