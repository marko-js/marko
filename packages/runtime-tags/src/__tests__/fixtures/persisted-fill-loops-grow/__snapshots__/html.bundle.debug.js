// template.marko
const $template = "<main><!><button>+</button></main>";
const $walks = "D%b l";
_shells({
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell;b%;<!><!><!>",
	"__tests__/template.marko_2*shell": "__tests__/template.marko_2*shell __tests__/template.marko_2_input_suffix#5/init __tests__/template.marko_2_count#6/init;D ;<p> </p>"
});
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_rows = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_suffix__closures = new Set();
	const $count__closures = new Set();
	let count = 0;
	_html("<main>");
	_for_of(input.rows, (row) => {
		const $scope1_id = _scope_id();
		_for_of(row.cells, (cell) => {
			const $scope2_id = _scope_id();
			_owned_guard($scope0_owned, 0) ? _patch_value($scope2_id, "__tests__/template.marko1", cell) : _patch_init($scope2_id, "__tests__/template.marko_2_input_rows#4/init");
			_html(`<p>${_escape(cell + ":" + input.suffix + "@" + count)}${_el_resume($scope2_id, "#text/0")}</p>`);
			_subscribe($count__closures, _subscribe(_source_if($scope0_reason, 1) && $input_suffix__closures, writeScope($scope2_id, {
				cell,
				_: _scope_with_id($scope1_id)
			}, "__tests__/template.marko", "4:6", { cell: "4:10" })));
		}, (cell) => cell, $scope1_id, "#text/0", 1, $sg__input_rows, $sg__input_rows, void 0, void 0, "__tests__/template.marko_2*shell");
		writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:4");
	}, (row) => row.id, $scope0_id, "#text/0", 1, $sg__input_rows, $sg__input_rows, void 0, void 0, "__tests__/template.marko_1*shell");
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason ? writeScope($scope0_id, {
		input_suffix: input.suffix,
		count,
		"ClosureScopes:input_suffix": $input_suffix__closures,
		"ClosureScopes:count": $count__closures
	}, "__tests__/template.marko", 0, {
		input_suffix: ["input.suffix"],
		count: "1:6"
	}) : _owned_guard($scope0_owned, 1) && _patch_value($scope0_id, "__tests__/template.marko0", input.suffix);
	_resume_branch($scope0_id);
}, 1, 0);
