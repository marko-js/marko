// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let items = [
		1,
		2,
		3
	];
	let big = true;
	_html("<div class=host><h3>list</h3>");
	_for_of(items, (item) => {
		const $scope1_id = _scope_id();
		_html(`<em>${_escape(item)}${_el_resume($scope1_id, "#text/0")}</em><span>#<!>${_escape(item)}${_el_resume($scope1_id, "#text/1")}</span>`);
		writeScope($scope1_id, {}, "__tests__/template.marko", "6:4");
	}, (x) => x, $scope0_id, "#text/0", void 0, void 0, void 0, 0, 2);
	_html("<h4>tail</h4>");
	_if(() => {
		if (big) {
			const $scope2_id = _scope_id();
			_html("<b>big</b><i>really</i>");
			writeScope($scope2_id, {}, "__tests__/template.marko", "11:4");
			return 0;
		}
	}, $scope0_id, "#text/1", void 0, void 0, void 0, 0, 2);
	_html(`</div><button class=rev>Reverse</button>${_el_resume($scope0_id, "#button/2")}<button class=pop>Pop</button>${_el_resume($scope0_id, "#button/3")}<button class=big>Big</button>${_el_resume($scope0_id, "#button/4")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		items,
		big
	}, "__tests__/template.marko", 0, {
		items: "1:6",
		big: "2:6"
	});
	_resume_branch($scope0_id);
}, 1);
