// child.marko
var child_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const promise = resolveAfter("hello", 2);
	_html("<div id=ref>0</div>");
	_script($scope0_id, "a0", 0);
	_scope($scope0_id, { a: promise });
});

// tags/counter.marko
var counter_default = _template("c", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button>${_text_resume($scope0_id, "b", count)}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "c0");
	_scope($scope0_id, { c: count });
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, flush$1, "_a");
var template_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<html><head>${_flush_head()}</head><body>`);
	counter_default({});
	_try($scope0_id, "b", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "a", resolveAfter("a", 1), (v) => {
			_scope_id();
			_html(`<span>${_escape(v)}</span>`);
		}, 0);
		$Child_withLoadAssets({});
	}, void 0, (err) => {
		const $scope2_reason = _scope_reason(), $wg__err_message = _write_guard($scope2_reason, 0);
		const $scope2_id = _scope_id();
		_html(_text_resume($scope2_id, "a", err.message, $wg__err_message));
		_write_if($scope2_reason, 0) && _scope($scope2_id, {});
	}, void 0, "b0");
	_await($scope0_id, "c", resolveAfter("b", 3), (v) => {
		_scope_id();
		_html(`<p>${_escape(v)}</p>`);
	}, 0);
	_trailers("</body></html>");
}, 1);
