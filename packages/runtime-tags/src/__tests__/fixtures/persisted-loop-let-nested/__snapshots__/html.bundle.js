// template.marko
_shells({
	a: "a; ;<ul></ul>",
	a0: "a0;D%b%;<li><!><!></li>",
	a1: "a1 !a2;D l ;<span> </span><button>note</button>"
});
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_items = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<ul>");
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		_html(`<li>${_patch_text($scope1_id, "a", item.label, $scope0_owned, 0)}${_el_resume($scope1_id, "a")}`);
		_if(() => {
			if (item.detailed) {
				const $scope2_id = _scope_id();
				let notes = 0;
				_html(`<span>${_escape(notes)}${_el_resume($scope2_id, "a")}</span><button>note</button>${_el_resume($scope2_id, "b")}`);
				_script($scope2_id, "a2");
				_patch_value($scope2_id, "a0", notes, 1);
				writeScope($scope2_id, { c: notes });
				return 0;
			}
		}, $scope1_id, "b", 1, $sg__input_items, $sg__input_items, void 0, void 0, ["a1"]);
		_html("</li>");
		writeScope($scope1_id, {});
	}, "id", $scope0_id, "a", 1, $sg__input_items, $sg__input_items, void 0, void 0, "a0");
	_html(`</ul>${_el_resume($scope0_id, "a", $sg__input_items)}`);
	$scope0_reason && writeScope($scope0_id, {});
}, 1, 0);
