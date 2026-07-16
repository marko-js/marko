// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const [settings] = $global().settings;
	let count = 0;
	_html(`<button>clicked <!>${_escape(count)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}`);
	_if(() => $global().show ? 0 : 1, $scope0_id, "#text/2", _persisted_reason(), _persisted_reason(), _persisted_reason(), void 0, void 0, "__tests__/template.marko_0/update_if_#text/2", [() => {
		const $scope1_id = _scope_id();
		let pair = `${$global().info.a}-${$global().info.b}`;
		_html(`<p class=pair>${_escape(pair)}${_el_resume($scope1_id, "#text/0")}</p><button class=bump>bump</button>${_el_resume($scope1_id, "#button/1")}<p class=combo>${_escape(_hole_value($scope1_id, "PatchHole:#text/2", settings.prefix, _persisted_reason()))}${_el_resume($scope1_id, "#text/2", _persisted_reason())}:${_sep(_persisted_reason())}${_escape(_hole_value($scope1_id, "PatchHole:#text/3", $global().info.a, _persisted_reason()))}${_el_resume($scope1_id, "#text/3", _persisted_reason())}</p>`);
		_script($scope1_id, "__tests__/template.marko_1");
		writeScope($scope1_id, {
			pair: _state_reason() && pair,
			_: _persisted_reason() && _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "4:2", { pair: "7:8" });
	}, () => {
		const $scope2_id = _scope_id();
		_html("<p class=empty>hidden</p>");
		_persisted_reason() && writeScope($scope2_id, {}, "__tests__/template.marko", "14:2");
	}]);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, { count: _state_reason() && count }, "__tests__/template.marko", 0, {
		settings_prefix: ["settings.prefix", "1:9"],
		count: "2:6"
	});
	_resume_branch($scope0_id);
}, 1);
