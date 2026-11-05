// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let visible = true;
	let inner = true;
	_html(`<button id=t>t</button>${_el_mark($scope0_id, "a")}<button id=i>i</button>${_el_mark($scope0_id, "b")}<span>before`);
	_show_start(visible);
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_html("<b>B</b>");
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "d", 1, 1, 0, 0, 1);
	_html("<em>end</em>");
	_show_end($scope0_id, "e", visible);
	_html("after</span>");
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		f: visible,
		g: inner
	});
}, 1);
