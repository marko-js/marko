// template.marko
async function* stream(items) {
	let tick = 0;
	for (const item of items) {
		yield resolveAfter(item, ++tick);
	}
}
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_items = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let clicks = 0;
	_html("<ul>");
	_for_await(stream(input.items), (item, i) => {
		const $scope1_id = _scope_id();
		_html(`<li>${_escape(i)}: ${_sep($sg__input_items)}${_escape(item)}${_el_resume($scope1_id, "#text/1", $sg__input_items)} (<!>${_escape(clicks)}${_el_resume($scope1_id, "#text/2")})</li>`);
		writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "12:4");
	}, 0, $scope0_id, "#text/0", 1, $sg__input_items, $sg__input_items);
	_html(`</ul><button>inc</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, { clicks }, "__tests__/template.marko", 0, { clicks: "10:6" });
	_resume_branch($scope0_id);
}, 1);
