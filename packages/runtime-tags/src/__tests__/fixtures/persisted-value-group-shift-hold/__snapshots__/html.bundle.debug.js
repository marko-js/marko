// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_alerts = _serialize_guard($scope0_reason, 1), $sg__input_items = _serialize_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button class=count>clicked <!>${_escape(count)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}<ul class=alerts>`);
	_region(() => {
		forOf(input.alerts, (alert) => {
			const $scope1_id = _scope_id();
			_html(`<li class=alert>${_escape(alert.text)}${_el_resume($scope1_id, "#text/0", $sg__input_alerts)}</li>`);
			$sg__input_alerts && writeScope($scope1_id, {}, "__tests__/template.marko", "4:4");
		});
	}, $scope0_id, "#ul/2", "__tests__/template.marko_r0");
	_html(`</ul>${_el_resume($scope0_id, "#ul/2", $sg__input_alerts)}<ul class=items>`);
	_for_of(input.items, (item) => {
		const $scope2_id = _scope_id();
		let n = 0;
		_html(`<li class=item>${_escape(_hole_value($scope2_id, "PatchHole:#text/0", item.name, _persisted_reason()))}${_el_resume($scope2_id, "#text/0", $sg__input_items)}<button class=tap>tap <!>${_escape(n)}${_el_resume($scope2_id, "#text/2")}</button>${_el_resume($scope2_id, "#button/1")}</li>`);
		_script($scope2_id, "__tests__/template.marko_2");
		writeScope($scope2_id, { n: _seed_fill(_state_reason() && n) }, "__tests__/template.marko", "9:4", { n: "10:10" });
	}, function(item) {
		return item.id;
	}, $scope0_id, "#ul/3", $sg__input_items, $sg__input_items, _serialize_guard($scope0_reason, 0), "</ul>", 1, "__tests__/template.marko_2_update");
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, { count: _seed_fill(_state_reason() && count) }, "__tests__/template.marko", 0, { count: "1:6" });
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"__tests__/template.marko_2_update": ["<li class=item> <button class=tap>tap <!></button></li>", "D b Db%m"],
	"__tests__/template.marko_2_content": ["<li class=item> <button class=tap>tap <!></button></li>", "D b Db%m"],
	"__tests__/template.marko_0_update": ["<button class=count>clicked <!></button><ul class=alerts></ul><ul class=items></ul>", " Db%l b b"],
	"__tests__/template.marko": ["<button class=count>clicked <!></button><ul class=alerts></ul><ul class=items></ul>", " Db%l b b"]
});
