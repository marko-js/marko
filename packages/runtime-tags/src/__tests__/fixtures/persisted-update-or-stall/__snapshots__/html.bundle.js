// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const [settings] = $global().settings;
	let count = 0;
	_html(`<button>clicked <!>${_escape(count)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {
		if ($global().show) {
			const $scope1_id = _scope_id();
			let pair = `${$global().info.a}-${$global().info.b}`;
			_html(`<p class=pair>${_escape(pair)}${_el_resume($scope1_id, "a")}</p><button class=bump>bump</button>${_el_resume($scope1_id, "b")}<p class=combo>${_escape(_hole_value($scope1_id, "c", settings.prefix, _persisted_reason()))}${_el_resume($scope1_id, "c", _persisted_reason())}:${_sep(_persisted_reason())}${_escape(_hole_value($scope1_id, "d", $global().info.a, _persisted_reason()))}${_el_resume($scope1_id, "d", _persisted_reason())}</p>`);
			_script($scope1_id, "a4");
			writeScope($scope1_id, {
				e: _state_reason() && pair,
				_: _persisted_reason() && _scope_with_id($scope0_id)
			});
			return 0;
		} else {
			const $scope2_id = _scope_id();
			_html("<p class=empty>hidden</p>");
			_persisted_reason() && writeScope($scope2_id, {});
			return 1;
		}
	}, $scope0_id, "c", _persisted_reason(), _persisted_reason(), _persisted_reason());
	_script($scope0_id, "a5");
	writeScope($scope0_id, { g: _state_reason() && count });
	_resume_branch($scope0_id);
}, 1);
