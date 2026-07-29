// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_name__OR__input_price = _serialize_guard($scope0_reason, 3), $sg__input_a__OR__input_name__OR__input_price = _serialize_guard($scope0_reason, 5), $sg__input_badge = _serialize_guard($scope0_reason, 8), $sg__input_a__OR__input_b = _serialize_guard($scope0_reason, 2), $sg__input_b__OR__input_badge = _serialize_guard($scope0_reason, 4);
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button class=count>clicked <!>${_escape(count)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}`);
	_if(() => input.a ? 0 : void 0, $scope0_id, "c", $sg__input_a__OR__input_name__OR__input_price, $sg__input_a__OR__input_name__OR__input_price, $sg__input_a__OR__input_b, void 0, void 0, "a0", [() => {
		const $scope1_id = _scope_id();
		let n = 0;
		const line = `${input.name}/${input.price}`;
		_html(`<button class=tap>tap <!>${_escape(n)}${_el_resume($scope1_id, "b")}</button>${_el_resume($scope1_id, "a")}<p class=info>${_escape(_hole_value($scope1_id, "Qc", line, _persisted_reason()))}${_el_resume($scope1_id, "c", $sg__input_name__OR__input_price)}</p>`);
		_script($scope1_id, "a3");
		writeScope($scope1_id, {
			d: _seed_fill(_state_reason() && n),
			_: $sg__input_name__OR__input_price && _scope_with_id($scope0_id)
		});
	}], ["a4"], "a5");
	_if(() => input.b ? 0 : void 0, $scope0_id, "d", $sg__input_b__OR__input_badge, $sg__input_b__OR__input_badge, $sg__input_a__OR__input_b, void 0, void 0, "a1", [() => {
		const $scope2_id = _scope_id();
		let m = 0;
		const tag = input.badge.toLowerCase();
		_html(`<button class=bump>bump <!>${_escape(m)}${_el_resume($scope2_id, "b")}</button>${_el_resume($scope2_id, "a")}<span class=badge>${_escape(_hole_value($scope2_id, "Qc", tag, _persisted_reason()))}${_el_resume($scope2_id, "c", $sg__input_badge)}</span>`);
		_script($scope2_id, "a6");
		writeScope($scope2_id, {
			d: _seed_fill(_state_reason() && m),
			_: $sg__input_badge && _scope_with_id($scope0_id)
		});
	}], ["a7"], "a8");
	_script($scope0_id, "a9");
	writeScope($scope0_id, {
		h: (_serialize_if($scope0_reason, 1) || _patch_reason()) && input.name,
		i: (_serialize_if($scope0_reason, 0) || _patch_reason()) && input.price,
		k: (_serialize_if($scope0_reason, 7) || _patch_reason()) && input.badge,
		l: _seed_fill(_state_reason() && count)
	});
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"a7": ["<button class=bump>bump <!></button><span class=badge> </span>", " Db%lD l"],
	"a10": ["<button class=bump>bump <!></button><span class=badge> </span>", " Db%lD l"],
	"a4": ["<button class=tap>tap <!></button><p class=info> </p>", " Db%lD l"],
	"a11": ["<button class=tap>tap <!></button><p class=info> </p>", " Db%lD l"],
	"a2": ["<button class=count>clicked <!></button><!><!><!>", " Db%l%b%c"],
	"a": ["<button class=count>clicked <!></button><!><!><!>", " Db%l%b%c"]
});
