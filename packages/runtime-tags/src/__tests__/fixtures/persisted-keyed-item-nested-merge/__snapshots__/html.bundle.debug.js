// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_rows = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button class=count>clicked <!>${_escape(count)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}<ul class=rows>`);
	_for_of(input.rows, (row) => {
		const $scope1_id = _scope_id();
		let note = "";
		_html(`<li class=row><span class=label>${_escape(_hole_value($scope1_id, "PatchHole:#text/0", row.label, _persisted_reason()))}${_el_resume($scope1_id, "#text/0", $sg__input_rows)}</span><input${_attr_input_value($scope1_id, "#input/1", note, _resume((_new_note) => {
			note = _new_note;
		}, "__tests__/template.marko_1/valueChange", $scope1_id))} class=note>${_el_resume($scope1_id, "#input/1")}<ol class=cells>`);
		_region(() => {
			forOf(row.cells, (cell) => {
				const $scope2_id = _scope_id();
				_html(`<li class=cell>${_escape(cell.text)}${_el_resume($scope2_id, "#text/0", $sg__input_rows)}</li>`);
				$sg__input_rows && writeScope($scope2_id, {}, "__tests__/template.marko", "10:10");
			});
		}, $scope1_id, "#ol/2", "__tests__/template.marko_r0");
		_html(`</ol>${_el_resume($scope1_id, "#ol/2", $sg__input_rows)}</li>`);
		_script($scope1_id, "__tests__/template.marko_1");
		writeScope($scope1_id, { note: _seed_fill(_state_reason() && note) }, "__tests__/template.marko", "4:4", { note: "5:10" });
	}, (row) => row.id, $scope0_id, "#ul/2", $sg__input_rows, $sg__input_rows, $sg__input_rows, "</ul>", 1, "__tests__/template.marko_1_update");
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, { count: _seed_fill(_state_reason() && count) }, "__tests__/template.marko", 0, { count: "1:6" });
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"__tests__/template.marko_1_update": ["<li class=row><span class=label> </span><input class=note><ol class=cells></ol></li>", "E l b l"],
	"__tests__/template.marko_1_content": ["<li class=row><span class=label> </span><input class=note><ol class=cells></ol></li>", "E l b l"],
	"__tests__/template.marko_0_update": ["<button class=count>clicked <!></button><ul class=rows></ul>", " Db%l b"],
	"__tests__/template.marko": ["<button class=count>clicked <!></button><ul class=rows></ul>", " Db%l b"]
});
