// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let mounted = undefined;
	_html("<div>");
	_if(() => {
		if (mounted) {
			const $scope1_id = _scope_id();
			_html(`AB<!>${_escape(mounted && "C")}${_el_resume($scope1_id, "#text/0")}D`);
			writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "4:3");
			return 0;
		}
	}, $scope0_id, "#div/0", 1, 1, 1, "</div>", void 0, 1);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, { mounted }, "__tests__/template.marko", 0, { mounted: "1:5" });
	_resume_branch($scope0_id);
}, 1);
