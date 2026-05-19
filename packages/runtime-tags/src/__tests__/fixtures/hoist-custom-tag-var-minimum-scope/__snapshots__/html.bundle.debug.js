// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $return = _resume(() => input.value, "__tests__/tags/child.marko_0/_return", $scope0_id);
	writeScope($scope0_id, { input_value: input.value }, "__tests__/tags/child.marko", 0, { input_value: ["input.value"] });
	return $return;
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $ref_getter = _hoist($scope0_id, "__tests__/template.marko_0_ref/hoist");
	_html(`<pre id=root></pre>${_el_resume($scope0_id, "#pre/0")}<pre id=outer></pre>${_el_resume($scope0_id, "#pre/1")}<pre id=inner></pre>${_el_resume($scope0_id, "#pre/2")}`);
	_for_to(2, 0, 1, (i) => {
		const $scope1_id = _scope_id();
		const $for_content__ref_getter = _hoist($scope1_id, "__tests__/template.marko_1_ref/hoist");
		_for_to(2, 0, 1, (j) => {
			const $scope2_id = _scope_id();
			const $for_content2__ref_getter = _hoist($scope2_id, "__tests__/template.marko_2_ref/hoist");
			let ref = child_default({ value: `${i},${j}` });
			_script($scope2_id, "__tests__/template.marko_2");
			writeScope($scope2_id, {
				ref,
				_: _scope_with_id($scope1_id)
			}, "__tests__/template.marko", "7:4", { ref: "9:12" });
			_assert_hoist(ref);
		}, 0, $scope1_id, "#text/0", 1, 0, 0);
		_script($scope1_id, "__tests__/template.marko_1");
		writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "5:2");
	}, 0, $scope0_id, "#text/3", 1, 0, 0);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
