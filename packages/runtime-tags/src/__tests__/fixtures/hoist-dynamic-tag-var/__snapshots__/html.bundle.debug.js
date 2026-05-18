// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<div></div>${_el_resume($scope0_id, "#div/0")}`);
	const $return = _resume(() => (html) => ((el) => el())(_el_read_error).innerHTML = html, "__tests__/tags/child.marko_0/_return", $scope0_id);
	writeScope($scope0_id, {}, "__tests__/tags/child.marko", 0);
	return $return;
});

// tags/thing.marko
var thing_default = _template("__tests__/tags/thing.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_script($scope0_id, "__tests__/tags/thing.marko_0_input_value");
	writeScope($scope0_id, { input_value: input.value }, "__tests__/tags/thing.marko", 0, { input_value: ["input.value"] });
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_show = _serialize_guard($scope0_reason, 0), $si__input_show = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $setHtml_getter = _hoist($scope0_id, "__tests__/template.marko_0_setHtml/hoist");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_if(() => {
				if (input.show) {
					const $scope2_id = _scope_id();
					const $Child_scope = _peek_scope_id();
					let setHtml = _dynamic_tag($scope2_id, "#text/0", 1 && child_default, {});
					_var($scope2_id, "#scopeOffset/1", $Child_scope, "__tests__/template.marko_2_setHtml/var");
					writeScope($scope2_id, { setHtml }, "__tests__/template.marko", "4:4", { setHtml: "5:20" });
					_assert_hoist(setHtml);
					return 0;
				}
			}, $scope1_id, "#text/0", 1, $sg__input_show, $sg__input_show);
			writeScope($scope1_id, { _: $si__input_show && _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $sg__input_show, $sg__input_show);
	thing_default({ value: $setHtml_getter });
	_if(() => {
		if (true) {
			const $scope3_id = _scope_id();
			const $Child_scope2 = _peek_scope_id();
			let setHtml2 = _dynamic_tag($scope3_id, "#text/0", 1 && child_default, {});
			_var($scope3_id, "#scopeOffset/1", $Child_scope2, "__tests__/template.marko_3_setHtml2/var");
			writeScope($scope3_id, { setHtml2 }, "__tests__/template.marko", "15:2", { setHtml2: "16:18" });
			_assert_hoist(setHtml2);
			return 0;
		}
	}, $scope0_id, "#text/2", 1, 0, $sg__input_show);
	_if(() => {
		if (true) {
			const $scope4_id = _scope_id();
			const $Child_scope3 = _peek_scope_id();
			let setHtml3 = _dynamic_tag($scope4_id, "#text/0", 1 && child_default, {});
			_var($scope4_id, "#scopeOffset/1", $Child_scope3, "__tests__/template.marko_4_setHtml3/var");
			writeScope($scope4_id, { setHtml3 }, "__tests__/template.marko", "24:2", { setHtml3: "25:18" });
			_assert_hoist(setHtml3);
			return 0;
		}
	}, $scope0_id, "#text/3", 1, 0, $sg__input_show);
	if (true) {
		const $scope5_id = _scope_id();
		_script($scope5_id, "__tests__/template.marko_5");
		writeScope($scope5_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "28:2");
	}
	_script($scope0_id, "__tests__/template.marko_0");
	$si__input_show && writeScope($scope0_id, { input_show: input.show }, "__tests__/template.marko", 0, { input_show: ["input.show"] });
}, 1);
