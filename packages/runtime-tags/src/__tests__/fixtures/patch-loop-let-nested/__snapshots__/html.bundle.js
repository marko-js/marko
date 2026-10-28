// template.marko
_shells({
	a: "a; ;<ul></ul>",
	a3: "a3;D%b%;<li><!><!></li>",
	a2: "a2 !a0;D l ;<span> </span><button>note</button>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html("<ul>");
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		_html(`<li>${_text_resume($scope1_id, "a", item.label, 1, $scope0_reason, 0)}`);
		_if(() => {
			if (item.detailed) {
				const $scope2_id = _scope_id();
				let notes = 0;
				_html(`<span>${_text_resume($scope2_id, "a", notes)}</span><button>note</button>${_el_resume($scope2_id, "b")}`);
				_script($scope2_id, "a0");
				_patch_fill($scope2_id, "va1", notes, 1);
				_scope($scope2_id, { c: notes });
				return 0;
			}
		}, $scope1_id, "b", 1, _write_guard($scope0_reason, 0), void 0, void 0, void 0, ["a2"], $scope0_reason, 0);
		_html("</li>");
		_scope($scope1_id, {});
	}, "id", $scope0_id, "a", 1, void 0, void 0, void 0, void 0, "a3", $scope0_reason, 0);
	_html(`</ul>${_el_resume($scope0_id, "a")}`);
	_scope($scope0_id, {});
}, 1);
