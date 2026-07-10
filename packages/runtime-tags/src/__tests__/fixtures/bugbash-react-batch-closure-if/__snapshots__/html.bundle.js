// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let show = true;
	let count = 0;
	_html("<div id=a>");
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_html(`<span>a:<!>${_escape(count)}${_el_resume($scope1_id, "a")}</span>`);
			writeScope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "a", 1, 1, 1, "</div>", 1);
	_html("<div id=b>");
	_if(() => {}, $scope0_id, "b", 1, 1, 1, "</div>", 1);
	_html(`<button id=both>both</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a0");
	writeScope($scope0_id, {
		d: show,
		e: count
	});
	_resume_branch($scope0_id);
}, 1);
