// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let items = [
		{
			id: 0,
			show: true
		},
		{
			id: 1,
			show: false
		},
		{
			id: 2,
			show: true
		}
	];
	_html("<div class=list>");
	_for_of(items, (item) => {
		const $scope1_id = _scope_id();
		_if(() => {
			if (item.show) {
				const $scope2_id = _scope_id();
				_html(`<p>item <!>${_escape(item.id)}${_el_resume($scope2_id, "#text/0")}</p>`);
				writeScope($scope2_id, {}, "__tests__/template.marko", "5:4");
				return 0;
			}
		}, $scope1_id, "#text/0", 1, 1, 1, 0, 1);
		writeScope($scope1_id, { item_id: item?.id }, "__tests__/template.marko", "4:3", { item_id: ["item.id", "4:7"] });
	}, "id", $scope0_id, "#div/0", 1, 1, 1, "</div>");
	_html(`<button class=rotate>Rotate</button>${_el_resume($scope0_id, "#button/1")}<button class=toggle>Toggle</button>${_el_resume($scope0_id, "#button/2")}<button class=drop>Drop</button>${_el_resume($scope0_id, "#button/3")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, { items }, "__tests__/template.marko", 0, { items: "1:6" });
	_resume_branch($scope0_id);
}, 1);
