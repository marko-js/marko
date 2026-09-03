// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_try($scope0_id, "#text/0", _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_await($scope1_id, "#text/0", resolveAfter("outer", 1), () => {
			const $scope3_id = _scope_id();
			_try($scope3_id, "#text/0", _content_resume("__tests__/template.marko_4*content", () => {
				const $scope4_id = _scope_id();
				_scope_reason();
				_await($scope4_id, "#text/0", resolveAfter("inner", 2), (value) => {
					const $scope6_id = _scope_id();
					let n = 0;
					_html(`<button>${_escape(value)} ${_text_resume($scope6_id, "#text/2", n, 2)}</button>${_el_resume($scope6_id, "#button/0")}`);
					_script($scope6_id, "__tests__/template.marko_6");
					_scope($scope6_id, { n }, "__tests__/template.marko", "7:8", { n: "8:14" });
				});
			}, $scope3_id), { placeholder: attrTag({ content: _content_resume("__tests__/template.marko_5*content", () => {
				_scope_reason();
				const $scope5_id = _scope_id();
				_html("loading");
			}, $scope3_id) }) });
		}, 0);
	}, $scope0_id), { catch: attrTag({ content: _content_resume("__tests__/template.marko_2*content", (err) => {
		const $scope2_reason = _scope_reason(), $sg__err_message = _serialize_guard($scope2_reason, 0);
		const $scope2_id = _scope_id();
		_html(`caught ${_text_resume($scope2_id, "#text/0", err.message, $sg__err_message * 2)}`);
		_serialize_if($scope2_reason, 0) && _scope($scope2_id, {}, "__tests__/template.marko", "13:4");
	}, $scope0_id) }) });
}, 1);
