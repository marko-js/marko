// tags/card/index.marko
_shells({ b: "b;D ;<em> </em>" });
var card_default = _template_persisted("b", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<em>${_patch_text($scope0_id, "a", input.fn("x"), void 0, $scope0_owned, 0)}</em>`);
	$scope0_reason && _scope($scope0_id, {});
}, 0, 0);

// template.marko
_shells({ a: "a !a1;D%b ;<main><!><button>t</button></main>" });
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const [fmt] = [_resume((s) => s + ":" + input.title, "a0", $scope0_id)];
	let show = true;
	_html("<main>");
	if ($scope0_reason) _if(() => {
		{
			const $scope1_id = _scope_id();
			_set_serialize_reason(1);
			const $childScope = _peek_scope_id();
			card_default({ fn: fmt });
			_scope($scope1_id, { a: _existing_scope($childScope) });
			return 0;
		}
	}, $scope0_id, "a", 1, 1, 1, 0, 1);
	_html(`<button>t</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a1");
	$scope0_reason ? _scope($scope0_id, {
		e: input.title,
		g: fmt,
		h: show
	}) : (_owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "a0", fmt), _owned_guard($scope0_owned, 0) && _patch_write($scope0_id, "e", input.title));
	_resume_branch($scope0_id);
}, 1, () => [card_default]);
