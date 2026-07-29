// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_rows = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<ul class=rows>");
	_for_of(input.rows, (row) => {
		const $scope1_id = _scope_id();
		let picks = 0;
		_html(`<li class=row><button class=pick>+<!>${_escape(picks)}${_el_resume($scope1_id, "#text/1")}</button>${_el_resume($scope1_id, "#button/0")}<span class=text>${_escape(_hole_value($scope1_id, "PatchHole:#text/2", row.text, _persisted_reason()))}${_el_resume($scope1_id, "#text/2", $sg__input_rows)}</span></li>`);
		_script($scope1_id, "__tests__/template.marko_1");
		writeScope($scope1_id, { picks: _seed_fill(_state_reason() && picks) }, "__tests__/template.marko", "2:4", { picks: "3:10" });
	}, function(row) {
		return row.id;
	}, $scope0_id, "#ul/0", $sg__input_rows, $sg__input_rows, $sg__input_rows, "</ul>", 1, "__tests__/template.marko_1_update");
	$sg__input_rows && writeScope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
_renderer_shells({
	"__tests__/template.marko_1_update": ["<li class=row><button class=pick>+<!></button><span class=text> </span></li>", "D Db%lD m"],
	"__tests__/template.marko_1_content": ["<li class=row><button class=pick>+<!></button><span class=text> </span></li>", "D Db%lD m"],
	"__tests__/template.marko_0_update": ["<ul class=rows></ul>", " b"],
	"__tests__/template.marko": ["<ul class=rows></ul>", " b"]
});
