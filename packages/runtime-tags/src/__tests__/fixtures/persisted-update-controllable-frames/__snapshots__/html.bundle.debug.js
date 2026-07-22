// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_eta__OR__input_tick = _serialize_guard($scope0_reason, 0), $sg__input_eta = _serialize_guard($scope0_reason, 3), $sg__input_tick = _serialize_guard($scope0_reason, 4);
	const $scope0_id = _scope_id();
	const $input_eta__closures = new Set();
	const $input_tick__closures = new Set();
	let count = 0;
	_attr_select_value($scope0_id, "#select/3", _hole_value($scope0_id, "PatchAttr:value:#select/3", input.ship, _persisted_reason()), void 0, () => {
		_html(`<button class=count>clicked <!>${_escape(count)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}<input${_attr_input_value($scope0_id, "#input/2", _hole_value($scope0_id, "PatchAttr:value:#input/2", input.sku, _persisted_reason()))} class=sku>${_el_resume($scope0_id, "#input/2", _serialize_guard($scope0_reason, 1))}<select class=ship><option${_attr_option_value("ground")}>ground</option><option${_attr_option_value("air")}>air</option><option${_attr_option_value("sea")}>sea</option></select>`);
	});
	_html(_el_resume($scope0_id, "#select/3", _serialize_guard($scope0_reason, 2)));
	_try($scope0_id, "#text/4", _content_resume("__tests__/template.marko_1_content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_await($scope1_id, "#text/0", resolveAfter(input.eta, input.tick), (eta) => {
			const $scope3_id = _scope_id();
			_html(`<p class=eta>${_escape(_hole_value($scope3_id, "PatchHole:#text/0", eta, _persisted_reason()))}${_el_resume($scope3_id, "#text/0", $sg__input_eta__OR__input_tick)}</p>`);
			$sg__input_eta__OR__input_tick && writeScope($scope3_id, {}, "__tests__/template.marko", "13:4");
		}, $sg__input_eta__OR__input_tick, "__tests__/template.marko_3_update");
		$sg__input_eta__OR__input_tick && _subscribe($sg__input_tick && $input_tick__closures, _subscribe($sg__input_eta && $input_eta__closures, writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "11:2")));
		_resume_branch($scope1_id);
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume("__tests__/template.marko_2_content", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html("loading…");
	}, $scope0_id) }) }, "__tests__/template.marko_0/update_boundary_#text/4", "__tests__/template.marko_1_update");
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		input_eta: (_serialize_if($scope0_reason, 4) || _patch_reason()) && input.eta,
		input_tick: (_serialize_if($scope0_reason, 3) || _patch_reason()) && input.tick,
		count: _state_reason() && count,
		"ClosureScopes:input_eta": $sg__input_eta && $input_eta__closures,
		"ClosureScopes:input_tick": $sg__input_tick && $input_tick__closures
	}, "__tests__/template.marko", 0, {
		input_eta: ["input.eta"],
		input_tick: ["input.tick"],
		count: "3:6"
	});
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"__tests__/template.marko_3_update": ["<p class=eta> </p>", "D l"],
	"__tests__/template.marko_3_content": ["<p class=eta> </p>", "D l"],
	"__tests__/template.marko_2_update": ["loading…", "b"],
	"__tests__/template.marko_2_content": ["loading…", "b"],
	"__tests__/template.marko_1_update": ["<!><!><!>", "b%c"],
	"__tests__/template.marko_1_content": ["<!><!><!>", "b%c"],
	"__tests__/template.marko_0_update": ["<button class=count>clicked <!></button><input class=sku><select class=ship><option value=ground>ground</option><option value=air>air</option><option value=sea>sea</option></select><!><!>", " Db%l b b%c"],
	"__tests__/template.marko": ["<button class=count>clicked <!></button><input class=sku><select class=ship><option value=ground>ground</option><option value=air>air</option><option value=sea>sea</option></select><!><!>", " Db%l b b%c"]
});
