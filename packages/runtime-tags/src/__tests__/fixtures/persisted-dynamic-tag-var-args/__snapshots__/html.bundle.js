// counter.marko
_shells({ a: "a !a1; D ;<button> </button>" });
var counter_default = _template_persisted("a", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let n = input;
	_html(`<button>${_text_resume($scope0_id, "b", n)}</button>${_el_resume($scope0_id, "a")}`);
	const $return = n;
	_script($scope0_id, "a1");
	_patch_bind($scope0_id, "U", _resume(function(v) {
		n = v;
	}, "a0", $scope0_id) || void 0);
	_patch_value($scope0_id, "a0", n, 1);
	$scope0_reason && _scope($scope0_id, {
		e: n,
		U: _resume(function(v) {
			n = v;
		}, "a0", $scope0_id) || void 0
	});
	return $return;
}, 0, 0);

// template.marko
_shells({ b: "b;D1bD ;<main><!><p> </p></main>" });
var template_default = _template_persisted("b", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html("<main>");
	const $tag = input.on ? counter_default : null;
	const $input2 = [input.start];
	_patch_dynamic_tag($scope0_id, "a", $tag, $input2, 0, "b0", $scope0_owned, 0);
	const $inputoncounternull_scope = _peek_scope_id();
	let n = _dynamic_tag($scope0_id, "a", $tag, [...$input2], 0, 1, void 0, 1);
	_var($scope0_id, "b", $inputoncounternull_scope, "b0");
	_html(`<p>${_patch_text($scope0_id, "c", n, void 0, $scope0_owned, 0)}</p></main>`);
	$scope0_reason && _scope($scope0_id, {
		f: input.on,
		g: input.start
	});
}, 1, 1);
