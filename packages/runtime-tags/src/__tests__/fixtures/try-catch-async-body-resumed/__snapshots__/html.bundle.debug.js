// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_try($scope0_id, "#text/0", _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_await($scope1_id, "#text/0", resolveAfter("ready", 1), (value) => {
			const $scope3_id = _scope_id();
			let n = 0;
			_if(() => {
				if (n) {
					const $scope4_id = _scope_id();
					const x = (() => {
						throw new Error("bang");
					})();
					_html(_escape(x));
					_scope($scope4_id, {}, "__tests__/template.marko", "6:6");
					return 0;
				}
			}, $scope3_id, "#text/0", 1, 1, 1, 0, 1);
			_html(`<button>${_escape(value)} ${_text_resume($scope3_id, "#text/3", n, 2)}</button>${_el_resume($scope3_id, "#button/1")}`);
			_script($scope3_id, "__tests__/template.marko_3");
			_scope($scope3_id, { n }, "__tests__/template.marko", "4:4", { n: "5:10" });
		});
	}, $scope0_id), { catch: attrTag({ content: _content_resume("__tests__/template.marko_2*content", (err) => {
		const $scope2_reason = _scope_reason(), $sg__err_message = _serialize_guard($scope2_reason, 0);
		const $scope2_id = _scope_id();
		_html(`caught ${_text_resume($scope2_id, "#text/0", err.message, $sg__err_message * 2)}`);
		_serialize_if($scope2_reason, 0) && _scope($scope2_id, {}, "__tests__/template.marko", "12:4");
	}, $scope0_id) }) });
}, 1);
