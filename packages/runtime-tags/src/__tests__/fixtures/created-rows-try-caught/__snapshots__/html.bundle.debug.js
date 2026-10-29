// tags/thrower.marko
var thrower_default = _template("__tests__/tags/thrower.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "#text/0", (() => {
		throw new Error("probe");
	})(), {}, 0, 0, 0);
});

// tags/outer.marko
var outer_default = _template("__tests__/tags/outer.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let rows = [1];
	_html(`<button>x</button>${_el_resume($scope0_id, "#button/0")}`);
	_for_of(rows, (entry) => {
		const $scope1_id = _scope_id();
		_try($scope1_id, "#text/0", () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			thrower_default({});
		}, void 0, () => {
			_scope_reason();
			const $scope3_id = _scope_id();
			_html("error");
		}, void 0, "__tests__/tags/outer.marko_3*content");
		_scope($scope1_id, {}, "__tests__/tags/outer.marko", "3:2");
	}, 0, $scope0_id, "#text/1");
	_script($scope0_id, "__tests__/tags/outer.marko_0");
	_scope($scope0_id, {}, "__tests__/tags/outer.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0), $wi__input_show = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<h1>Rows whose try catches</h1>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			outer_default({});
			$wi__input_show && _scope($scope1_id, {}, "__tests__/template.marko", "2:2");
			return 0;
		}
	}, $scope0_id, "#text/0", $wg__input_show, $wg__input_show);
	$wi__input_show && _scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
