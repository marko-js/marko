// tags/counter.marko
var counter_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button>${_text_resume($scope0_id, "b", count)}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	_scope($scope0_id, { c: count });
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	counter_default({});
	_try($scope0_id, "b", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "a", resolveAfter("done", 1), (v) => {
			_scope_id();
			counter_default({});
		}, 0);
	}, () => {
		_scope_reason();
		_scope_id();
		_html("loading");
	}, void 0, "a0");
	_try($scope0_id, "c", () => {
		_scope_reason();
		const $scope4_id = _scope_id();
		_await($scope4_id, "a", rejectAfter(/* @__PURE__ */ new Error("ERROR!"), 2), (v) => {
			_scope_id();
			_html(_escape(v));
		}, 0);
	}, void 0, (err) => {
		const $scope5_reason = _scope_reason(), $wg__err_message = _write_guard($scope5_reason, 0);
		const $scope5_id = _scope_id();
		_html(_text_resume($scope5_id, "a", err.message, $wg__err_message));
		_write_if($scope5_reason, 0) && _scope($scope5_id, {});
	}, void 0, "a1");
}, 1);
