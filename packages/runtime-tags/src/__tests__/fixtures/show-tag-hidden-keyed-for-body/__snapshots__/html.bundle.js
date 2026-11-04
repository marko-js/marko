// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let visible = false;
	let items = [1];
	_html(`<button id=t>t</button>${_el_mark($scope0_id, "a")}<button id=i>i</button>${_el_mark($scope0_id, "b")}<div id=c>x `);
	_show_start(visible);
	_for_of(items, (n) => {
		const $scope1_id = _scope_id();
		_html(`<b>${_escape(n)}</b>`);
		_scope($scope1_id, {});
	}, (n) => n, $scope0_id, "d", 1, 1, 0, 0, 1);
	_html("<i>tail</i>");
	_show_end($scope0_id, "e", visible);
	_html(" y</div>");
	_script($scope0_id, "a0");
	_scope($scope0_id, { f: visible });
}, 1);
