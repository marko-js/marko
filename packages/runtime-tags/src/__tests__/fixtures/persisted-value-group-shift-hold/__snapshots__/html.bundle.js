// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_alerts = _serialize_guard($scope0_reason, 1), $sg__input_items = _serialize_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button class=count>clicked <!>${_escape(count)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}<ul class=alerts>`);
	_region(() => {
		forOf(input.alerts, (alert) => {
			const $scope1_id = _scope_id();
			_html(`<li class=alert>${_escape(alert.text)}${_el_resume($scope1_id, "a", $sg__input_alerts)}</li>`);
			$sg__input_alerts && writeScope($scope1_id, {});
		});
	}, $scope0_id, "c", "a1");
	_html(`</ul>${_el_resume($scope0_id, "c", $sg__input_alerts)}<ul class=items>`);
	_for_of(input.items, (item) => {
		const $scope2_id = _scope_id();
		let n = 0;
		_html(`<li class=item>${_escape(_hole_value($scope2_id, "Qa", item.name, _persisted_reason()))}${_el_resume($scope2_id, "a", $sg__input_items)}<button class=tap>tap <!>${_escape(n)}${_el_resume($scope2_id, "c")}</button>${_el_resume($scope2_id, "b")}</li>`);
		_script($scope2_id, "a2");
		writeScope($scope2_id, { g: _seed_fill(_state_reason() && n) });
	}, function(item) {
		return item.id;
	}, $scope0_id, "d", $sg__input_items, $sg__input_items, _serialize_guard($scope0_reason, 0), "</ul>", 1, "a3");
	_script($scope0_id, "a4");
	writeScope($scope0_id, { i: _seed_fill(_state_reason() && count) });
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"a3": ["<li class=item> <button class=tap>tap <!></button></li>", "D b Db%m"],
	"a5": ["<li class=item> <button class=tap>tap <!></button></li>", "D b Db%m"],
	"a0": ["<button class=count>clicked <!></button><ul class=alerts></ul><ul class=items></ul>", " Db%l b b"],
	"a": ["<button class=count>clicked <!></button><ul class=alerts></ul><ul class=items></ul>", " Db%l b b"]
});
