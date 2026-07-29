// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_name__OR__input_price = _serialize_guard($scope0_reason, 3), $sg__input_a__OR__input_name__OR__input_price = _serialize_guard($scope0_reason, 5), $sg__input_badge = _serialize_guard($scope0_reason, 8), $sg__input_a__OR__input_b = _serialize_guard($scope0_reason, 2), $sg__input_b__OR__input_badge = _serialize_guard($scope0_reason, 4);
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button class=count>clicked <!>${_escape(count)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}`);
	_if(() => input.a ? 0 : undefined, $scope0_id, "#text/2", $sg__input_a__OR__input_name__OR__input_price, $sg__input_a__OR__input_name__OR__input_price, $sg__input_a__OR__input_b, void 0, void 0, "__tests__/template.marko_0/update_if_#text/2", [() => {
		const $scope1_id = _scope_id();
		let n = 0;
		const line = `${input.name}/${input.price}`;
		_html(`<button class=tap>tap <!>${_escape(n)}${_el_resume($scope1_id, "#text/1")}</button>${_el_resume($scope1_id, "#button/0")}<p class=info>${_escape(_hole_value($scope1_id, "PatchHole:#text/2", line, _persisted_reason()))}${_el_resume($scope1_id, "#text/2", $sg__input_name__OR__input_price)}</p>`);
		_script($scope1_id, "__tests__/template.marko_1");
		writeScope($scope1_id, {
			n: _seed_fill(_state_reason() && n),
			_: $sg__input_name__OR__input_price && _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "3:2", { n: "4:8" });
	}], ["__tests__/template.marko_1_update"], "__tests__/template.marko_r0");
	_if(() => input.b ? 0 : undefined, $scope0_id, "#text/3", $sg__input_b__OR__input_badge, $sg__input_b__OR__input_badge, $sg__input_a__OR__input_b, void 0, void 0, "__tests__/template.marko_0/update_if_#text/3", [() => {
		const $scope2_id = _scope_id();
		let m = 0;
		const tag = input.badge.toLowerCase();
		_html(`<button class=bump>bump <!>${_escape(m)}${_el_resume($scope2_id, "#text/1")}</button>${_el_resume($scope2_id, "#button/0")}<span class=badge>${_escape(_hole_value($scope2_id, "PatchHole:#text/2", tag, _persisted_reason()))}${_el_resume($scope2_id, "#text/2", $sg__input_badge)}</span>`);
		_script($scope2_id, "__tests__/template.marko_2");
		writeScope($scope2_id, {
			m: _seed_fill(_state_reason() && m),
			_: $sg__input_badge && _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "9:2", { m: "10:8" });
	}], ["__tests__/template.marko_2_update"], "__tests__/template.marko_r1");
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		input_name: (_serialize_if($scope0_reason, 1) || _patch_reason()) && input.name,
		input_price: (_serialize_if($scope0_reason, 0) || _patch_reason()) && input.price,
		input_badge: (_serialize_if($scope0_reason, 7) || _patch_reason()) && input.badge,
		count: _seed_fill(_state_reason() && count)
	}, "__tests__/template.marko", 0, {
		input_name: ["input.name"],
		input_price: ["input.price"],
		input_badge: ["input.badge"],
		count: "1:6"
	});
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"__tests__/template.marko_2_update": ["<button class=bump>bump <!></button><span class=badge> </span>", " Db%lD l"],
	"__tests__/template.marko_2_content": ["<button class=bump>bump <!></button><span class=badge> </span>", " Db%lD l"],
	"__tests__/template.marko_1_update": ["<button class=tap>tap <!></button><p class=info> </p>", " Db%lD l"],
	"__tests__/template.marko_1_content": ["<button class=tap>tap <!></button><p class=info> </p>", " Db%lD l"],
	"__tests__/template.marko_0_update": ["<button class=count>clicked <!></button><!><!><!>", " Db%l%b%c"],
	"__tests__/template.marko": ["<button class=count>clicked <!></button><!><!><!>", " Db%l%b%c"]
});
