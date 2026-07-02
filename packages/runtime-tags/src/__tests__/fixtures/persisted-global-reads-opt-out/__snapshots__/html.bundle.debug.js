// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<h1>${_escape($global().title)}${_el_resume($scope0_id, "#text/0", _persisted_reason())}</h1><a${_attr("href", `/items/${$global().params.id}`)}>link</a>${_el_resume($scope0_id, "#a/1", _persisted_reason())}<button>${_escape(count)}${_el_resume($scope0_id, "#text/3")}</button>${_el_resume($scope0_id, "#button/2")}<section${count && $global().params.tag ? " class=hot" : ""}>`);
	_if(() => {
		if ($global().params.sale) {
			const $scope1_id = _scope_id();
			_html(`<em>Sale ${_sep(_persisted_reason())}${_escape($global().params.sale)}${_el_resume($scope1_id, "#text/0", _persisted_reason())}% off</em>`);
			_persisted_reason() && writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "6:4");
			return 0;
		}
	}, $scope0_id, "#section/4", _persisted_reason(), 1, 0, "</section>", 1);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, { count }, "__tests__/template.marko", 0, { count: "1:6" });
	_resume_branch($scope0_id);
}, 1);
