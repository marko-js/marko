// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let visible = false;
	let items = [1];
	_html(`<button id=t>t</button>${_el_mark($scope0_id, "#button/0")}<button id=i>i</button>${_el_mark($scope0_id, "#button/1")}<div id=c>x `);
	_show_start(visible);
	_for_of(items, (n) => {
		const $scope1_id = _scope_id();
		_html(`<b>${_escape(n)}</b>`);
		_scope($scope1_id, {}, "__tests__/template.marko", "5:30");
	}, (n) => n, $scope0_id, "#text/3", 1, 1, 0, 0, 1);
	_html("<i>tail</i>");
	_show_end($scope0_id, "#text/4", visible);
	_html(" y</div>");
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { visible }, "__tests__/template.marko", 0, { visible: "1:6" });
}, 1);
