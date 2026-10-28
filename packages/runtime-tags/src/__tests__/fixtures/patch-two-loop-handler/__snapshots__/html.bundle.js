// template.marko
_shells({
	a: "a !;D%b%;<main><!><!></main>",
	a1: "a1 !a0; D ;<button> </button>",
	a2: "a2;D ;<p> </p>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_title = _server_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_html("<main>");
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		_html(`<button>${_text_resume($scope1_id, "b", item, void 0, $scope0_reason, 0)}</button>${_el_resume($scope1_id, "a")}`);
		_script($scope1_id, "a0");
		_scope($scope1_id, { _: _scope_with_id($scope0_id) });
	}, 0, $scope0_id, "a", 1, void 0, void 0, void 0, void 0, "a1", $scope0_reason, 0);
	_for_of(input.items2, (item) => {
		const $scope2_id = _scope_id();
		_html(`<p>${_text_resume($scope2_id, "a", input.title, void 0, $scope0_reason, 1)}</p>`);
		_client_guard($scope0_reason, 1) && _patch_init($scope2_id, "a3");
		_scope($scope2_id, { _: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id) });
	}, 0, $scope0_id, "b", 1, void 0, void 0, void 0, void 0, "a2", $scope0_reason, 2);
	_html("</main>");
	_scope($scope0_id, { f: input.title }) || _filled_guard($scope0_reason, 1) && (_client_guard($scope0_reason, 2) ? _patch_fill($scope0_id, "va4", input.title, !$sg__input_title) : _patch_write($scope0_id, "wf", input.title, !$sg__input_title));
}, 1);
