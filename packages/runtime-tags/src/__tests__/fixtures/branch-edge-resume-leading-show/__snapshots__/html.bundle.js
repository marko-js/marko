// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let outer = true;
	let shown = true;
	_html("<div class=host>");
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_show_start(shown);
			_html("<b>hi</b>");
			_show_end($scope1_id, "b", shown, 1, 1, 0, 1);
			_html("<span class=tail>tail</span>");
			writeScope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "a");
	_html(`<span class=sib>sib</span></div><button class=show>Show</button>${_el_resume($scope0_id, "b")}<button class=outer>Outer</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a0");
	writeScope($scope0_id, {
		d: outer,
		e: shown
	});
	_resume_branch($scope0_id);
}, 1);
