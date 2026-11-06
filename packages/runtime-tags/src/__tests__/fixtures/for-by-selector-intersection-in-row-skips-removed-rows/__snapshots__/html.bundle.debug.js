// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
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
		let short = false;
		_for_of(short ? g.items.slice(0, 1) : g.items, (item) => {
			const $scope2_id = _scope_id();
			_html(`<span${item.id === selected ? " class=on" : ""}>${_escape(item.id)}</span>${_el_mark($scope2_id, "#span/0")}`);
			_scope($scope2_id, { "#LoopKey": item?.id }, "__tests__/template.marko", "4:4", { "#LoopKey": ["item.id", "4:8"] });
		}, "id", $scope1_id, "#text/0", 1, 1, 0, 0, 1);
		_html(`<button>go</button>${_el_mark($scope1_id, "#button/1")}`);
		_script($scope1_id, "__tests__/template.marko_1");
		_scope($scope1_id, {
			g_items: g?.items,
			selected
		}, "__tests__/template.marko", "1:2", {
			g_items: ["g.items", "1:6"],
			selected: "2:8"
		});
	});
}, 1);
