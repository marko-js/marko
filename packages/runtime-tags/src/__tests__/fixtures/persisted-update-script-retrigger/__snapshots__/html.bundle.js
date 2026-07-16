// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let mirror = $global().stock;
	_html(`<button class=take>take</button>${_el_resume($scope0_id, "a")}<p class=mirror>${_escape(mirror)}${_el_resume($scope0_id, "b")} in stock</p><p class=server>server says ${_sep(_persisted_reason())}${_escape(_hole_value($scope0_id, "Qc", $global().stock, _persisted_reason()))}${_el_resume($scope0_id, "c", _persisted_reason())}</p>`);
	_script($scope0_id, "a1");
	writeScope($scope0_id, { d: _state_reason() && mirror });
	_resume_branch($scope0_id);
}, 1);
