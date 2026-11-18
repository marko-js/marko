// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let clicked = "";
	forOf(["a", "b"], (item, index) => {
		const $scope1_id = _scope_id();
		_html(`<button>${_escape(item)}</button>${_el_mark($scope1_id, "#button/0")}`);
		_script($scope1_id, "__tests__/template.marko_1");
		_scope($scope1_id, {
			item,
			"#LoopKey": index,
			_: _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "2:2", {
			item: "2:6",
			"#LoopKey": "2:12"
		});
	});
	_html(`<span>${_text_mark($scope0_id, "#text/1", clicked)}</span>`);
	_scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
