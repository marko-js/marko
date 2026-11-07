// tags/counter.marko
var counter_default = _template("__tests__/tags/counter.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let clicks = 0;
	_html(`<button id=counter>${_text_mark($scope0_id, "#text/1", clicks)}</button>${_el_mark($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/tags/counter.marko_0");
	_scope($scope0_id, { clicks }, "__tests__/tags/counter.marko", 0, { clicks: "1:6" });
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	const attrs = {
		"data-n": n,
		content: counter_default
	};
	_html(`<button id=outer>${_text_mark($scope0_id, "#text/1", n)}</button>${_el_mark($scope0_id, "#button/0")}<div`);
	_attrs_content(attrs, "#div/2", $scope0_id, "div");
	_html(`</div>${_el_mark($scope0_id, "#div/2")}`);
	_script($scope0_id, "__tests__/template.marko_0_attrs#4");
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { n }, "__tests__/template.marko", 0, {
		n: "3:6",
		"EventAttributes:#div/2": ["...attrs", "6:9"]
	});
}, 1);
