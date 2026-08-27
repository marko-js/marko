// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let items = [
		{
			id: 0,
			code: false
		},
		{
			id: 1,
			code: true
		},
		{
			id: 2,
			code: false
		}
	];
	_html("<div class=list>");
	_for_of(items, (item) => {
		const $scope1_id = _scope_id();
		_if(() => {
			if (item.code) {
				const $scope2_id = _scope_id();
				_html(`<pre>code <!>${_escape(item.id)}${_el_resume($scope2_id, "#text/0")}</pre>`);
				writeScope($scope2_id, {}, "__tests__/template.marko", "5:6");
				return 0;
			} else {
				const $scope3_id = _scope_id();
				_html(`<p>text <!>${_escape(item.id)}${_el_resume($scope3_id, "#text/0")}</p>`);
				writeScope($scope3_id, {}, "__tests__/template.marko", "8:6");
				return 1;
			}
		}, $scope1_id, "#text/0", 1, 1, 1, 0, 1);
		writeScope($scope1_id, {}, "__tests__/template.marko", "4:4");
	}, "id", $scope0_id, "#div/0", 1, 1, 1, "</div>");
	_html(`<button class=rotate>Rotate</button>${_el_resume($scope0_id, "#button/1")}<button class=toggle>Toggle</button>${_el_resume($scope0_id, "#button/2")}<button class=drop>Drop</button>${_el_resume($scope0_id, "#button/3")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, { items }, "__tests__/template.marko", 0, { items: "1:6" });
	_resume_branch($scope0_id);
}, 1);
