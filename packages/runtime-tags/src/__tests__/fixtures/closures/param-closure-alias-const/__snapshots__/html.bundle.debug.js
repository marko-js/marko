// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	forOf(["foo"], (foo) => {
		const $scope1_id = _scope_id();
		if (true) {
			const $scope2_id = _scope_id();
			const baz = foo;
			_html(_escape(baz));
		}
	});
}, 1);
