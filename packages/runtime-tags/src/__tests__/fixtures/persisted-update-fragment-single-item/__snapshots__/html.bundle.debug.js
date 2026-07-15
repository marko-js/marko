// data.js
const CELLS = [{ id: "only" }];

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<p>root</p><button>${_escape(count)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}`);
	_for_of($global().items, (item) => {
		const $scope1_id = _scope_id();
		_html("<article>");
		_for_of(CELLS, (cell) => {
			const $scope2_id = _scope_id();
			_html(`<span>${_escape(_hole_value($scope2_id, "PatchHole:#text/0", item.id, _persisted_reason()))}${_el_resume($scope2_id, "#text/0", _persisted_reason())}:${_sep(_persisted_reason())}${_escape(_hole_value($scope2_id, "PatchHole:#text/1", item.view, _persisted_reason()))}${_el_resume($scope2_id, "#text/1", _persisted_reason())}:${_sep(_persisted_reason())}${_escape(_hole_value($scope2_id, "PatchHole:#text/2", cell.id, _persisted_reason()))}${_el_resume($scope2_id, "#text/2", _persisted_reason())}</span>`);
			_persisted_reason() && writeScope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "8:6");
		}, "id", $scope1_id, "#article/0", _persisted_reason(), _persisted_reason(), 0, "</article>", 1);
		_persisted_reason() && writeScope($scope1_id, {}, "__tests__/template.marko", "6:2");
	}, "id", $scope0_id, "#text/2", _persisted_reason(), _persisted_reason(), _persisted_reason(), 0, 1, "__tests__/template.marko_0/update_for_#text/2");
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, { count: _state_reason() && count }, "__tests__/template.marko", 0, { count: "4:6" });
	_resume_branch($scope0_id);
}, 1);
