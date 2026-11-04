// template.marko
_shells({
	a1: "a1 a0 a7;D ;<span> </span>",
	a: "a;b%;<!><!><!>",
	a2: "a2 a0 a7;D ;<span> </span>",
	a3: "a3 !a4; b%;<button>set</button><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const $if_content__count__closures = /* @__PURE__ */ new Set();
			let count = 1;
			_html(`<button>set</button>${_el_mark($scope1_id, "a")}`);
			_await($scope1_id, "b", resolveAfter(1, 1), (value) => {
				const $scope2_id = _scope_id();
				_html(`<span>${_text_mark($scope2_id, "a", count + value)}</span>`);
				_patch_write($scope2_id, "wc", value, 1);
				_subscribe($if_content__count__closures, _scope($scope2_id, { c: value }), "a0");
			}, 1, "a1");
			_script($scope1_id, "a4");
			_patch_fill($scope1_id, "va5", count, 1);
			_scope($scope1_id, { d: $if_content__count__closures });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a3"], $scope0_reason, 0);
	_scope($scope0_id, {});
}, 1);
