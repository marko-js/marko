// template.marko
var template_default = _template("a", (input) => {
	const $sg__input_rows = _serialize_guard(_scope_reason(), 0);
	const $scope0_id = _scope_id();
	_html("<ul class=rows>");
	_for_of(input.rows, (row) => {
		const $scope1_id = _scope_id();
		let picks = 0;
		_html(`<li class=row><button class=pick>+<!>${_escape(picks)}${_el_resume($scope1_id, "b")}</button>${_el_resume($scope1_id, "a")}<span class=text>${_escape(_hole_value($scope1_id, "Qc", row.text, _persisted_reason()))}${_el_resume($scope1_id, "c", $sg__input_rows)}</span></li>`);
		_script($scope1_id, "a1");
		writeScope($scope1_id, { g: _seed_fill(_state_reason() && picks) });
	}, function(row) {
		return row.id;
	}, $scope0_id, "a", $sg__input_rows, $sg__input_rows, $sg__input_rows, "</ul>", 1, "a2");
	$sg__input_rows && writeScope($scope0_id, {});
}, 1);
_renderer_shells({
	"a2": ["<li class=row><button class=pick>+<!></button><span class=text> </span></li>", "D Db%lD m"],
	"a3": ["<li class=row><button class=pick>+<!></button><span class=text> </span></li>", "D Db%lD m"],
	"a0": ["<ul class=rows></ul>", " b"],
	"a": ["<ul class=rows></ul>", " b"]
});
