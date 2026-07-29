// template.marko
var template_default = _template("a", (input) => {
	const $sg__input_rows = _serialize_guard(_scope_reason(), 0);
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button class=count>clicked <!>${_escape(count)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}<ul class=rows>`);
	_for_of(input.rows, (row) => {
		const $scope1_id = _scope_id();
		let note = "";
		_html(`<li class=row><span class=label>${_escape(_hole_value($scope1_id, "Qa", row.label, _persisted_reason()))}${_el_resume($scope1_id, "a", $sg__input_rows)}</span><input${_attr_input_value($scope1_id, "b", note, _resume((_new_note) => {
			note = _new_note;
		}, "a0", $scope1_id))} class=note>${_el_resume($scope1_id, "b")}<ol class=cells>`);
		_region(() => {
			forOf(row.cells, (cell) => {
				const $scope2_id = _scope_id();
				_html(`<li class=cell>${_escape(cell.text)}${_el_resume($scope2_id, "a", $sg__input_rows)}</li>`);
				$sg__input_rows && writeScope($scope2_id, {});
			});
		}, $scope1_id, "c", "a2");
		_html(`</ol>${_el_resume($scope1_id, "c", $sg__input_rows)}</li>`);
		_script($scope1_id, "a3");
		writeScope($scope1_id, { h: _seed_fill(_state_reason() && note) });
	}, (row) => row.id, $scope0_id, "c", $sg__input_rows, $sg__input_rows, $sg__input_rows, "</ul>", 1, "a4");
	_script($scope0_id, "a5");
	writeScope($scope0_id, { g: _seed_fill(_state_reason() && count) });
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"a4": ["<li class=row><span class=label> </span><input class=note><ol class=cells></ol></li>", "E l b l"],
	"a6": ["<li class=row><span class=label> </span><input class=note><ol class=cells></ol></li>", "E l b l"],
	"a1": ["<button class=count>clicked <!></button><ul class=rows></ul>", " Db%l b"],
	"a": ["<button class=count>clicked <!></button><ul class=rows></ul>", " Db%l b"]
});
