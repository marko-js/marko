// tags/boom/index.marko
var boom_default = _template("__tests__/tags/boom/index.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_if(() => {
		if (n) {
			const $scope1_id = _scope_id();
			const x = (() => {
				throw new Error("bang");
			})();
			_html(_escape(x));
			_scope($scope1_id, {}, "__tests__/tags/boom/index.marko", "2:2");
			return 0;
		}
	}, $scope0_id, "#text/0");
	_html(`<button>${_text_resume($scope0_id, "#text/2", n)}</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/tags/boom/index.marko_0");
	_scope($scope0_id, { n }, "__tests__/tags/boom/index.marko", 0, { n: "1:6" });
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_try($scope0_id, "#text/0", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html("<div>");
		boom_default({});
		_html("</div>");
	}, void 0, (err) => {
		const $scope2_reason = _scope_reason(), $wg__err_message = _write_guard($scope2_reason, 0);
		const $scope2_id = _scope_id();
		_html(`caught ${_text_resume($scope2_id, "#text/0", err.message, $wg__err_message * 2)}`);
		_write_if($scope2_reason, 0) && _scope($scope2_id, {}, "__tests__/template.marko", "2:4");
	}, void 0, "__tests__/template.marko_2*content");
}, 1);
