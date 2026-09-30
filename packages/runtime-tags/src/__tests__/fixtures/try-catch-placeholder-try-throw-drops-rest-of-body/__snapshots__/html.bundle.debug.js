// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_try($scope0_id, "#text/0", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "#text/0", resolveAfter("b", 1), (b) => {
			const $scope3_id = _scope_id();
			_try($scope3_id, "#text/0", () => {
				_scope_reason();
				const $scope4_id = _scope_id();
				_html(_escape((() => {
					throw new Error("ERROR!");
				})()));
			}, () => {
				_scope_reason();
				const $scope5_id = _scope_id();
				_html("loading");
			}, void 0, "__tests__/template.marko_5*content");
			_html("<p>dead</p>");
		}, 0);
	}, void 0, (err) => {
		const $scope2_reason = _scope_reason(), $sg__err_message = _serialize_guard($scope2_reason, 0);
		const $scope2_id = _scope_id();
		_html(`caught ${_text_resume($scope2_id, "#text/0", err.message, $sg__err_message * 2)}`);
		_serialize_if($scope2_reason, 0) && _scope($scope2_id, {}, "__tests__/template.marko", "11:4");
	}, void 0, "__tests__/template.marko_2*content");
	_await($scope0_id, "#text/1", resolveAfter("d", 2), (d) => {
		const $scope6_id = _scope_id();
		_html(`<p>${_escape(d)}</p>`);
	}, 0);
}, 1);
