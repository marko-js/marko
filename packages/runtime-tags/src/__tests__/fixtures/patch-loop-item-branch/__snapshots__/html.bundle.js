// template.marko
_shells({
	a: "a; ;<ul></ul>",
	a1: "a1;D%b%;<li><!><!></li>",
	a2: "a2; ;<ul></ul>",
	a0: "a0;D ;<li> </li>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html("<ul>");
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		_html(`<li>${_text_resume($scope1_id, "a", item.id, void 0, $scope0_reason, 0)}`);
		_if(() => {
			if (item.children.length) {
				const $scope2_id = _scope_id();
				_html("<ul>");
				_for_of(item.children, (child) => {
					const $scope3_id = _scope_id();
					_html(`<li>${_text_resume($scope3_id, "a", child, void 0, $scope0_reason, 0)}</li>`);
					_scope($scope3_id, {});
				}, 0, $scope2_id, "a", 1, void 0, void 0, void 0, void 0, "a0", $scope0_reason, 0);
				_html(`</ul>${_el_resume($scope2_id, "a")}`);
				_client_guard($scope0_reason, 0) && _patch_init($scope2_id, "a3");
				_scope($scope2_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope1_id) });
				return 0;
			}
		}, $scope1_id, "b", 1, _write_guard($scope0_reason, 0), void 0, void 0, void 0, ["a2"], $scope0_reason, 0);
		_html("</li>");
		_scope($scope1_id, {});
	}, "id", $scope0_id, "a", 1, void 0, void 0, void 0, void 0, "a1", $scope0_reason, 0);
	_html(`</ul>${_el_resume($scope0_id, "a")}`);
	_scope($scope0_id, {});
}, 1);
