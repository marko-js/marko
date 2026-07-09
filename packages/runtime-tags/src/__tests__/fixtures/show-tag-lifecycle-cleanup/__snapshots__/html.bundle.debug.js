// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let show = true;
	let mounts = 0;
	_html("<div id=ref></div>");
	_show_branch(() => {
		const $scope1_id = _scope_id();
		let count = 0;
		_html(`<button id=inc>count <!>${_escape(count)}${_el_resume($scope1_id, "#text/1")}</button>${_el_resume($scope1_id, "#button/0")}`);
		_script($scope1_id, "__tests__/template.marko_1");
		_script($scope1_id, "__tests__/template.marko_1_mounts_count");
		writeScope($scope1_id, {
			count,
			_: _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "4:2", { count: "5:8" });
	}, $scope0_id, "#text/0", show, void 0, void 0, 0, 1);
	_html(`<button id=toggle>Toggle</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		show,
		mounts
	}, "__tests__/template.marko", 0, {
		show: "1:6",
		mounts: "2:6"
	});
	_resume_branch($scope0_id);
}, 1);
