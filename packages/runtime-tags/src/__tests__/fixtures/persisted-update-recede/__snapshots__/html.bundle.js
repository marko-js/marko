// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let clicks = 0;
	_html(`<button class=clicks>clicked <!>${_escape(clicks)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}<section>`);
	_try($scope0_id, "c", _content_resume("a1", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_await($scope1_id, "a", resolveAfter(`${$global().pid}: ${$global().rev}`, $global().tick), (detail) => {
			const $scope3_id = _scope_id();
			_html(`<p class=detail>detail ${_sep(_persisted_reason())}${_escape(_hole_value($scope3_id, "Qa", detail, _persisted_reason()))}${_el_resume($scope3_id, "a", _persisted_reason())}</p>`);
			_persisted_reason() && writeScope($scope3_id, {});
		}, _persisted_reason());
	}, $scope0_id), { placeholder: attrTag({
		by: $global().pid,
		content: _content_resume("a0", () => {
			_scope_reason();
			_scope_id();
			_html("<p class=ph>loading detail…</p>");
		}, $scope0_id)
	}) }, "a2");
	_html("</section>");
	_script($scope0_id, "a3");
	writeScope($scope0_id, { d: _state_reason() && clicks });
	_resume_branch($scope0_id);
}, 1);
