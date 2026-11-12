// tags/counter.marko
var counter_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button${_attr_class(input.class)}>${_text_mark($scope0_id, "b", count)}</button>${_el_mark($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	_scope($scope0_id, { f: count });
});

// template.marko
const $Counter_withLoadAssets = withLoadAssets(() => counter_default, "b", flush$1, "_b");
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let clicks = 0;
	_html(`<html lang=en><head><title>x</title>${_flush_head()}</head><body><main><p>${_text_mark($scope0_id, "a", clicks)}</p>`);
	_await($scope0_id, "b", resolveAfter("a", 1), (v) => {
		const $scope1_id = _scope_id();
		_html(`<button${_attr_class(v)}>${_escape(v)}</button>${_el_mark($scope1_id, "a")}`);
		$Counter_withLoadAssets({ class: "lazy-a" });
		_script($scope1_id, "a0");
		_scope($scope1_id, {});
	});
	_await($scope0_id, "c", resolveAfter("b", 2), (v) => {
		const $scope2_id = _scope_id();
		_html(`<button${_attr_class(v)}>${_escape(v)}</button>${_el_mark($scope2_id, "a")}`);
		$Counter_withLoadAssets({ class: "lazy-b" });
		_script($scope2_id, "a1");
		_scope($scope2_id, {});
	});
	_html("</main>"), _trailers("</body></html>");
	_scope($scope0_id, { d: clicks });
}, 1);
