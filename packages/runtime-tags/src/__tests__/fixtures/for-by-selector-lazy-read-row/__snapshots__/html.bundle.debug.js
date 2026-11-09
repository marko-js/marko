// template.marko
function track(name, value) {
	console.log("eval " + name);
	return value;
}
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let items = [
		{
			id: 1,
			name: "a"
		},
		{
			id: 2,
			name: "b"
		},
		{
			id: 3,
			name: "c"
		},
		{
			id: 4,
			name: "d"
		}
	];
	let selected = 1;
	let log = "";
	_for_of(items, (item) => {
		const $scope1_id = _scope_id();
		_html(`<button${_attr_class(`b${item.id}`)}>b</button>${_el_mark($scope1_id, "#button/0")}<button${_attr_class(`w${item.id}`)}>whole</button>${_el_mark($scope1_id, "#button/1")}`);
		_script($scope1_id, "__tests__/template.marko_1");
		_script($scope1_id, "__tests__/template.marko_1_selected#0:3");
		_scope($scope1_id, {
			item,
			"#LoopKey": item?.id,
			_: _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "10:2", {
			item: "10:6",
			"#LoopKey": ["item.id", "10:6"]
		});
	}, "id", $scope0_id, "#text/0", 1, 0);
	_html(`<div class=log>${_text_mark($scope0_id, "#text/1", log)}</div>`);
	_scope($scope0_id, {
		selected,
		log
	}, "__tests__/template.marko", 0, {
		selected: "8:6",
		log: "9:6"
	});
}, 1);
