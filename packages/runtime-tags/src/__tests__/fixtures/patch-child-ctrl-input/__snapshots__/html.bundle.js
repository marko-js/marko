// tags/field/index.marko
_shells({ b: "b !b0; bD ;<input><em> </em>" });
var field_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<input${_patch_input_value($scope0_id, "a", input.value, input.valueChange, "n2a", $scope0_reason, 0, "dEa", $scope0_reason, 0)}>${_el_resume($scope0_id, "a")}<em>${_patch_text($scope0_id, "b", input.value, void 0, $scope0_reason, 1)}</em>`);
	_script($scope0_id, "b0");
	_patch_write($scope0_id, "we", input.value, !(_filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 2)));
	_patch_write($scope0_id, "wf", input.valueChange, !(_filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1)));
	_patch_join_init($scope0_id, "b1", $scope0_reason, 0);
	$scope0_page && _scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && input.value,
		f: _unfilled_if($scope0_reason, 0) && input.valueChange
	});
});

// template.marko
_shells({ a: "a !a1;D%bD l ;<main><!><p> </p><button>+</button></main>" });
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let text = "hi";
	let open = true;
	_html("<main>");
	if ($scope0_page) _if(() => {
		{
			const $scope1_id = _scope_id();
			_set_scope_reason(10 | ($scope0_page ? 0 : 0) << 5);
			const $childScope = _peek_scope_id();
			field_default({
				value: text,
				valueChange: _resume((_new_text) => {
					text = _new_text;
				}, "a0", $scope1_id)
			});
			_scope($scope1_id, { a: _existing_scope($childScope) });
			return 0;
		}
	}, $scope0_id, "a");
	_html(`<p>${_text_resume($scope0_id, "b", text)}</p><button>+</button>${_el_resume($scope0_id, "c")}</main>`);
	_script($scope0_id, "a1");
	_patch_value($scope0_id, "va2", text, 1);
	_patch_value($scope0_id, "va3", open, 1);
	$scope0_page && _scope($scope0_id, {
		d: text,
		e: open
	});
}, 1);
