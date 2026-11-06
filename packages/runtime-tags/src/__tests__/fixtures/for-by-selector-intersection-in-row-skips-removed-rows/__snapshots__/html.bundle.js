// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	_scope_id();
	forOf([{
		id: 1,
		items: [
			{ id: 1 },
			{ id: 2 },
			{ id: 3 }
		]
	}], (g) => {
		const $scope1_id = _scope_id();
		let selected = 1;
		_for_of(g.items, (item) => {
			const $scope2_id = _scope_id();
			_html(`<span${item.id === selected ? " class=on" : ""}>${_escape(item.id)}</span>${_el_mark($scope2_id, "a")}`);
			_scope($scope2_id, { M: item?.id });
		}, "id", $scope1_id, "a", 1, 1, 0, 0, 1);
		_html(`<button>go</button>${_el_mark($scope1_id, "b")}`);
		_script($scope1_id, "a0");
		_scope($scope1_id, {
			e: g?.items,
			f: selected
		});
	});
}, 1);
