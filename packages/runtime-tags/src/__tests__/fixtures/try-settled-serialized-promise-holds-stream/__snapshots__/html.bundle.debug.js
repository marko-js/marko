// child.marko
var child_default = _template("__tests__/child.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const promise = resolveAfter("hello", 2);
	_html("<div id=ref>0</div>");
	_script($scope0_id, "__tests__/child.marko_0_promise#0", 0);
	_scope($scope0_id, { promise }, "__tests__/child.marko", 0, { promise: "3:8" });
});

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
const $Child_withLoadAssets = withLoadAssets(child_default, "ready:__tests__/child.marko");
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<html><head>${_flush_head()}</head><body>`);
	counter_default({});
	_try($scope0_id, "#text/1", _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_await($scope1_id, "#text/0", resolveAfter("a", 1), (v) => {
			const $scope3_id = _scope_id();
			_html(`<span>${_escape(v)}</span>`);
		}, 0);
		$Child_withLoadAssets({});
	}, $scope0_id), { catch: attrTag({ content: _content_resume("__tests__/template.marko_2*content", (err) => {
		const $scope2_reason = _scope_reason(), $sg__err_message = _serialize_guard($scope2_reason, 0);
		const $scope2_id = _scope_id();
		_html(_text_resume($scope2_id, "#text/0", err.message, $sg__err_message));
		_serialize_if($scope2_reason, 0) && _scope($scope2_id, {}, "__tests__/template.marko", "13:8");
	}, $scope0_id) }) });
	_await($scope0_id, "#text/2", resolveAfter("b", 3), (v) => {
		const $scope4_id = _scope_id();
		_html(`<p>${_escape(v)}</p>`);
	}, 0);
	_trailers("</body></html>");
}, 1);
