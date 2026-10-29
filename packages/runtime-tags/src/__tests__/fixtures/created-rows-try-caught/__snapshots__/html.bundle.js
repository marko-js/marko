// tags/thrower.marko
var thrower_default = _template("c", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "a", (() => {
		throw new Error("probe");
	})(), {}, 0, 0, 0);
});

// tags/outer.marko
var outer_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let rows = [1];
	_html(`<button>x</button>${_el_resume($scope0_id, "a")}`);
	_for_of(rows, (entry) => {
		const $scope1_id = _scope_id();
		_try($scope1_id, "a", () => {
			_scope_reason();
			_scope_id();
			thrower_default({});
		}, void 0, () => {
			_scope_reason();
			_scope_id();
			_html("error");
		}, void 0, "b0");
		_scope($scope1_id, {});
	}, 0, $scope0_id, "b");
	_script($scope0_id, "b1");
	_scope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0), $wi__input_show = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<h1>Rows whose try catches</h1>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			outer_default({});
			$wi__input_show && _scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "a", $wg__input_show, $wg__input_show);
	$wi__input_show && _scope($scope0_id, {});
}, 1);
