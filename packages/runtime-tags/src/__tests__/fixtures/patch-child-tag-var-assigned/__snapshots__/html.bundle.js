// tags/counter-box/index.marko
_shells({ b: "b;Db%;<span>box <!></span>" });
_client_return("b");
var counter_box_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let count = input.start;
	_html(`<span>box ${_text_resume($scope0_id, "a", count, 2)}</span>`);
	const $return = count;
	const $valueChange2 = _patch_bind($scope0_id, "dU", _resume(function(v) {
		count = v;
	}, "b0", $scope0_id) || void 0, 0, 0);
	_filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "vb1", count, 1);
	$scope0_page && _scope($scope0_id, { U: $valueChange2 });
	return $return;
});

// template.marko
_shells({ a: "a !a2;D%b ;<main><!><button class=toggle>t</button></main>" });
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let show = true;
	_html("<main>");
	if ($scope0_page) _if(() => {
		{
			const $scope1_id = _scope_id();
			_set_scope_reason(0);
			const $childScope = _peek_scope_id();
			let count = counter_box_default({ start: 1 });
			_var($scope1_id, "b", $childScope, "a0");
			_html(`<p>${_text_resume($scope1_id, "c", count)}</p><button class=reset>r</button>${_el_resume($scope1_id, "d")}`);
			_script($scope1_id, "a1");
			_scope($scope1_id, { a: _existing_scope($childScope) });
			return 0;
		}
	}, $scope0_id, "a");
	_html(`<button class=toggle>t</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a2");
	_patch_value($scope0_id, "va3", show, 1);
	$scope0_page && _scope($scope0_id, { c: show });
}, 1);
