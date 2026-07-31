// template.marko
var template_default = _template("a", (input) => {
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
		_html(`<em>${_escape(item)}${_el_resume($scope1_id, "a")}</em><span>#<!>${_escape(item)}${_el_resume($scope1_id, "b")}</span>`);
		writeScope($scope1_id, {});
	}, (x) => x, $scope0_id, "a", void 0, void 0, void 0, 0, 2);
	_html("<h4>tail</h4>");
	_if(() => {
		{
			const $scope2_id = _scope_id();
			_html("<b>big</b><i>really</i>");
			writeScope($scope2_id, {});
			return 0;
		}
	}, $scope0_id, "b", void 0, void 0, void 0, 0, 2);
	_html(`</div><button class=rev>Reverse</button>${_el_resume($scope0_id, "c")}<button class=pop>Pop</button>${_el_resume($scope0_id, "d")}<button class=big>Big</button>${_el_resume($scope0_id, "e")}`);
	_script($scope0_id, "a0");
	writeScope($scope0_id, {
		f: items,
		g: big
	});
	_resume_branch($scope0_id);
}, 1);
