// tags/counter.marko
var counter_default = _template("__tests__/tags/counter.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button${_attr_class(input.class)}>${_text_mark($scope0_id, "#text/1", count)}</button>${_el_mark($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/tags/counter.marko_0");
	_scope($scope0_id, { count }, "__tests__/tags/counter.marko", 0, { count: "1:6" });
});

// template.marko
const $Counter_withLoadAssets = withLoadAssets(() => counter_default, "__tests__/tags/counter.marko", flush$1, "ready:__tests__/tags/counter.marko");
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let clicks = 0;
	_html(`<html lang=en><head><title>x</title>${_flush_head()}</head><body><main><p>${_text_mark($scope0_id, "#text/0", clicks)}</p>`);
	_await($scope0_id, "#text/1", resolveAfter("a", 1), (v) => {
		const $scope1_id = _scope_id();
		_html(`<button${_attr_class(v)}>${_escape(v)}</button>${_el_mark($scope1_id, "#button/0")}`);
		$Counter_withLoadAssets({ class: "lazy-a" });
		_script($scope1_id, "__tests__/template.marko_1");
		_scope($scope1_id, {}, "__tests__/template.marko", "9:8");
	});
	_await($scope0_id, "#text/2", resolveAfter("b", 2), (v) => {
		const $scope2_id = _scope_id();
		_html(`<button${_attr_class(v)}>${_escape(v)}</button>${_el_mark($scope2_id, "#button/0")}`);
		$Counter_withLoadAssets({ class: "lazy-b" });
		_script($scope2_id, "__tests__/template.marko_2");
		_scope($scope2_id, {}, "__tests__/template.marko", "13:8");
	});
	_html("</main>"), _trailers("</body></html>");
	_scope($scope0_id, { clicks }, "__tests__/template.marko", 0, { clicks: "3:6" });
}, 1);
