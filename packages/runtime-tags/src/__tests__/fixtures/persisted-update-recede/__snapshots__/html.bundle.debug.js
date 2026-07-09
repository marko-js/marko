// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let clicks = 0;
	_html(`<button class=clicks>clicked <!>${_escape(clicks)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}<section>`);
	_try($scope0_id, "#text/2", _content_resume("__tests__/template.marko_1_content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_await($scope1_id, "#text/0", resolveAfter(`${$global().pid}: ${$global().rev}`, $global().tick), (detail) => {
			const $scope3_id = _scope_id();
			_html(`<p class=detail>detail ${_sep(_persisted_reason())}${_escape(_hole_value($scope3_id, "UpdateHole:#text/0", detail, _persisted_reason()))}${_el_resume($scope3_id, "#text/0", _persisted_reason())}</p>`);
			_persisted_reason() && writeScope($scope3_id, {}, "__tests__/template.marko", "10:6");
		}, _persisted_reason());
	}, $scope0_id), { placeholder: attrTag({
		by: $global().pid,
		content: _content_resume("__tests__/template.marko_2_content", () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			_html("<p class=ph>loading detail…</p>");
		}, $scope0_id)
	}) }, "__tests__/template.marko_0/update_boundary_#text/2");
	_html("</section>");
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, { clicks: _state_reason() && clicks }, "__tests__/template.marko", 0, { clicks: "3:6" });
	_resume_branch($scope0_id);
}, 1);
