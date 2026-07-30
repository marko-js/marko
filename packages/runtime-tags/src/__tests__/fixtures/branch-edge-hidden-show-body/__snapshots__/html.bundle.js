// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let outer = true;
	let shown = true;
	let items = [1];
	_html("<div class=host>");
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_show_start(shown, 1);
			_for_of(items, (item) => {
				const $scope2_id = _scope_id();
				_html(`<b>${_escape(item)}${_el_resume($scope2_id, "a")}</b>`);
				writeScope($scope2_id, {});
			}, 0, $scope1_id, "b", 1, 1, 1, 0, 1);
			_show_end($scope1_id, "d", shown);
			writeScope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "a", 1, 1, 1, "</div>");
	_html(`<button class=outer>Outer</button>${_el_resume($scope0_id, "b")}<button class=show>Show</button>${_el_resume($scope0_id, "c")}<button class=items>Items</button>${_el_resume($scope0_id, "d")}`);
	_script($scope0_id, "a0");
	_script($scope0_id, "a1");
	writeScope($scope0_id, {
		e: outer,
		f: shown,
		g: items,
		h: items?.length
	});
	_resume_branch($scope0_id);
}, 1);
