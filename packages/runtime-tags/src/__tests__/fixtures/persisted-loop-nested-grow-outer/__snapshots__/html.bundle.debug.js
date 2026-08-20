// template.marko
const $template = "<!><!><button>+</button>";
const $walks = "b%b b";
_shells({
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;b%b ;<!><!><button>+</button>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell !;b%;<!><!><!>",
	"__tests__/template.marko_2*shell": "__tests__/template.marko_2*shell __tests__/template.marko_2_count#5/init __tests__/template.marko_2_row_id#4/init;D ;<p> </p>"
});
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_rows = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $count__closures = new Set();
	let count = 0;
	_for_of(input.rows, (row) => {
		const $scope1_id = _scope_id();
		_owned_guard($scope0_owned, 0) ? _patch_value($scope1_id, "__tests__/template.marko0", row?.id) : _patch_init($scope1_id, "__tests__/template.marko_1_input_rows#4/init");
		_for_of(row.cells, (cell) => {
			const $scope2_id = _scope_id();
			_html(`<p>${_escape(row.id + "@" + count)}${_el_resume($scope2_id, "#text/0")}</p>`);
			_subscribe($count__closures, writeScope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "3:4"));
		}, (cell) => cell, $scope1_id, "#text/0", 1, $sg__input_rows, $sg__input_rows, void 0, void 0, "__tests__/template.marko_2*shell");
		writeScope($scope1_id, {
			row_id: row?.id,
			_: _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "2:2", { row_id: ["row.id", "2:6"] });
	}, (row) => row.id, $scope0_id, "#text/0", 1, $sg__input_rows, $sg__input_rows, void 0, void 0, "__tests__/template.marko_1*shell");
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason && writeScope($scope0_id, {
		count,
		"ClosureScopes:count": $count__closures
	}, "__tests__/template.marko", 0, { count: "1:6" });
	_resume_branch($scope0_id);
}, 1, 0);
