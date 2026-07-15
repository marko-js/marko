// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let mirror = $global().stock;
	_html(`<button class=take>take</button>${_el_resume($scope0_id, "#button/0")}<p class=mirror>${_escape(mirror)}${_el_resume($scope0_id, "#text/1")} in stock</p><p class=server>server says ${_sep(_persisted_reason())}${_escape(_hole_value($scope0_id, "PatchHole:#text/2", $global().stock, _persisted_reason()))}${_el_resume($scope0_id, "#text/2", _persisted_reason())}</p>`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, { mirror: _state_reason() && mirror }, "__tests__/template.marko", 0, { mirror: "6:6" });
	_resume_branch($scope0_id);
}, 1);
