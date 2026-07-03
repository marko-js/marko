// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<h1>${_escape(_hole_value($scope0_id, "a", $global().title, _persisted_reason()))}${_el_resume($scope0_id, "a", _persisted_reason())}</h1><a${_attr("href", _hole_value($scope0_id, "Nhref:b", `/items/${$global().params.id}`, _persisted_reason()))}>link</a>${_el_resume($scope0_id, "b", _persisted_reason())}<button>${_escape(count)}${_el_resume($scope0_id, "d")}</button>${_el_resume($scope0_id, "c")}<section>`);
	_if(() => {
		if ($global().params.sale) {
			const $scope1_id = _scope_id();
			_html(`<em>Sale ${_sep(_persisted_reason())}${_escape(_hole_value($scope1_id, "a", $global().params.sale, _persisted_reason()))}${_el_resume($scope1_id, "a", _persisted_reason())}% off</em>`);
			_persisted_reason() && writeScope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "e", _persisted_reason(), 1, 0, "</section>", 1);
	_script($scope0_id, "a0");
	writeScope($scope0_id, { f: count });
	_resume_branch($scope0_id);
}, 1);
