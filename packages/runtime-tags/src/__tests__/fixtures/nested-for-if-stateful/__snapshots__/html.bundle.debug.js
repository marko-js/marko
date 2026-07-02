// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let counts = [
		0,
		0,
		0
	];
	_for_of(counts, (count, i) => {
		const $scope1_id = _scope_id();
		let editing = false;
		_if(() => {
			if (editing) {
				const $scope2_id = _scope_id();
				_html(`<button>Confirm <!>${_escape(count + 1)}${_el_resume($scope2_id, "#text/1")}</button>${_el_resume($scope2_id, "#button/0")}`);
				_script($scope2_id, "__tests__/template.marko_2_count");
				writeScope($scope2_id, {}, "__tests__/template.marko", "4:4");
				return 0;
			} else {
				const $scope3_id = _scope_id();
				_html(`<button>Increment <!>${_escape(count)}${_el_resume($scope3_id, "#text/1")}</button>${_el_resume($scope3_id, "#button/0")}`);
				_script($scope3_id, "__tests__/template.marko_3");
				writeScope($scope3_id, {}, "__tests__/template.marko", "12:4");
				return 1;
			}
		}, $scope1_id, "#text/0", 1, 1, 1, 0, 1);
		writeScope($scope1_id, {
			count,
			"#LoopKey": i
		}, "__tests__/template.marko", "2:2", {
			count: "2:6",
			"#LoopKey": "2:13"
		});
	}, 0, $scope0_id, "#text/0");
	writeScope($scope0_id, { counts }, "__tests__/template.marko", 0, { counts: "1:6" });
	_resume_branch($scope0_id);
}, 1);
