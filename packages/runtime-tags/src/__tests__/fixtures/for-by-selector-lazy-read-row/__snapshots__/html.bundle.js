// template.marko
var template_default = _template("a", (input) => {
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
		_html(`<button${_attr_class(`b${item.id}`)}>b</button>${_el_mark($scope1_id, "a")}<button${_attr_class(`w${item.id}`)}>whole</button>${_el_mark($scope1_id, "b")}`);
		_script($scope1_id, "a0");
		_script($scope1_id, "a1");
		_scope($scope1_id, {
			d: item,
			M: item?.id,
			_: _scope_with_id($scope0_id)
		});
	}, "id", $scope0_id, "a", 1, 0);
	_html(`<div class=log>${_text_mark($scope0_id, "b", log)}</div>`);
	_scope($scope0_id, {
		d: selected,
		e: log
	});
}, 1);
