// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<div></div>${_el_resume($scope0_id, "#div/0")}`);
	const $return = _resume(() => (html) => ((el) => el())(_el_read_error).innerHTML = html, "__tests__/tags/child.marko_0/_return", $scope0_id);
	writeScope($scope0_id, {}, "__tests__/tags/child.marko", 0);
	return $return;
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $setHtml3_getter = _hoist($scope0_id, "__tests__/template.marko_0_setHtml3/hoist");
	_for_to(5, 0, 1, () => {
		const $scope1_id = _scope_id();
		let setHtml = child_default({});
		writeScope($scope1_id, { setHtml }, "__tests__/template.marko", "1:2", { setHtml: "2:10" });
		_assert_hoist(setHtml);
	}, 0, $scope0_id, "#text/0", 1, 0, 0, 0, 1);
	let to = 3;
	_html("<hr>");
	_for_to(to, 0, 1, () => {
		const $scope2_id = _scope_id();
		let setHtml2 = child_default({});
		writeScope($scope2_id, { setHtml2 }, "__tests__/template.marko", "12:2", { setHtml2: "13:10" });
		_assert_hoist(setHtml2);
	}, 0, $scope0_id, "#text/1", 1, 0, 0, 0, 1);
	_html("<hr>");
	_for_to(3, 0, 1, (i) => {
		const $scope3_id = _scope_id();
		_html("<ul>");
		_for_to(3, 0, 1, (j) => {
			const $scope4_id = _scope_id();
			let setHtml3 = child_default({});
			writeScope($scope4_id, { setHtml3 }, "__tests__/template.marko", "24:4", { setHtml3: "25:12" });
			_assert_hoist(setHtml3);
		}, 0, $scope3_id, "#ul/0", 1, 0, 0, 0, 1);
		_html("</ul>");
		writeScope($scope3_id, {}, "__tests__/template.marko", "22:2");
	}, 0, $scope0_id, "#text/2", 1, 0, 0, 0, 1);
	_script($scope0_id, "__tests__/template.marko_0");
	_resume_branch($scope0_id);
}, 1);
