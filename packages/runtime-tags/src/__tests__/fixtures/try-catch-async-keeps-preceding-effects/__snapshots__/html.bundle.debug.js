// tags/counter.marko
var counter_default = _template("__tests__/tags/counter.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button>${_text_resume($scope0_id, "#text/1", count)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/tags/counter.marko_0");
	_scope($scope0_id, { count }, "__tests__/tags/counter.marko", 0, { count: "1:6" });
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	counter_default({});
	_try($scope0_id, "#text/1", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "#text/0", resolveAfter("done", 1), (v) => {
			const $scope3_id = _scope_id();
			counter_default({});
		}, 0);
	}, () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html("loading");
	}, void 0, "__tests__/template.marko_2*content");
	_try($scope0_id, "#text/2", () => {
		_scope_reason();
		const $scope4_id = _scope_id();
		_await($scope4_id, "#text/0", rejectAfter(new Error("ERROR!"), 2), (v) => {
			const $scope6_id = _scope_id();
			_html(_escape(v));
		}, 0);
	}, void 0, (err) => {
		const $scope5_reason = _scope_reason(), $wg__err_message = _write_guard($scope5_reason, 0);
		const $scope5_id = _scope_id();
		_html(_text_resume($scope5_id, "#text/0", err.message, $wg__err_message));
		_write_if($scope5_reason, 0) && _scope($scope5_id, {}, "__tests__/template.marko", "14:4");
	}, void 0, "__tests__/template.marko_5*content");
}, 1);
