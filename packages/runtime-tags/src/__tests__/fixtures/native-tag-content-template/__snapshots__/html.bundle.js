// tags/counter.marko
var counter_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let clicks = 0;
	_html(`<button id=counter>${_text_mark($scope0_id, "b", clicks)}</button>${_el_mark($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	_scope($scope0_id, { c: clicks });
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	const attrs = {
		"data-n": n,
		content: counter_default
	};
	_html(`<button id=outer>${_text_mark($scope0_id, "b", n)}</button>${_el_mark($scope0_id, "a")}<div`);
	_attrs_content(attrs, "c", $scope0_id, "div");
	_html(`</div>${_el_mark($scope0_id, "c")}`);
	_script($scope0_id, "a0");
	_script($scope0_id, "a1");
	_scope($scope0_id, { d: n });
}, 1);
