// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $count__closures = new Set();
	let count = 0;
	_html(`<button>inc</button>${_el_resume($scope0_id, "#button/0")}`);
	_try($scope0_id, "#text/1", _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_try($scope1_id, "#text/0", _content_resume("__tests__/template.marko_2*content", () => {
			const $scope2_id = _scope_id();
			_scope_reason();
			_try($scope2_id, "#text/0", _content_resume("__tests__/template.marko_3*content", () => {
				const $scope3_id = _scope_id();
				_scope_reason();
				_if(() => {
					if (count) {
						const $scope4_id = _scope_id();
						_await($scope4_id, "#text/0", resolveAfter(count), (y) => {
							const $scope10_id = _scope_id();
							_html(_text_resume($scope10_id, "#text/0", y));
							_scope($scope10_id, {}, "__tests__/template.marko", "11:18");
						});
						_subscribe($count__closures, _scope($scope4_id, { "ClosureSignalIndex:count": 1 }, "__tests__/template.marko", "11:8"), "__tests__/template.marko_4_count#2/subscribe", 0);
						return 0;
					}
				}, $scope3_id, "#text/0");
				_subscribe($count__closures, _scope($scope3_id, { _: _scope_with_id($scope2_id) }, "__tests__/template.marko", "9:6"), "__tests__/template.marko_3_count#2/subscribe");
			}, $scope2_id), { placeholder: attrTag({ content: _content_resume("__tests__/template.marko_8*content", () => {
				_scope_reason();
				const $scope8_id = _scope_id();
				_html("C loading ");
				_await($scope8_id, "#text/0", resolveAfter("c", 4), (x) => {
					const $scope9_id = _scope_id();
					_html(_escape(x));
				}, 0);
			}, $scope2_id) }) });
			_scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "7:4");
		}, $scope1_id), { placeholder: attrTag({ content: _content_resume("__tests__/template.marko_6*content", () => {
			_scope_reason();
			const $scope6_id = _scope_id();
			_html("B loading ");
			_await($scope6_id, "#text/0", resolveAfter("b", 8), (x) => {
				const $scope7_id = _scope_id();
				_html(_escape(x));
			}, 0);
		}, $scope1_id) }) });
		_scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "5:2");
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume("__tests__/template.marko_5*content", () => {
		_scope_reason();
		const $scope5_id = _scope_id();
		_html("A loading");
	}, $scope0_id) }) });
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		count,
		"ClosureScopes:count": $count__closures
	}, "__tests__/template.marko", 0, { count: "3:6" });
}, 1);
