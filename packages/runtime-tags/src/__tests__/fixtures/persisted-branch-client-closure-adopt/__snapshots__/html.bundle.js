// template.marko
_shells({ a: "a !a0;D%b ;<main><!><button>+</button></main>" });
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $si__input_title = _source_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_title__closures = /* @__PURE__ */ new Set();
	const $open__closures = /* @__PURE__ */ new Set();
	let open = true;
	_html("<main>");
	if ($scope0_reason) _if(() => {
		{
			const $scope1_id = _scope_id();
			_html(`<b>${_text_resume($scope1_id, "a", "x:" + input.title)}</b>`);
			if ($scope0_reason) _if(() => {
				{
					const $scope2_id = _scope_id();
					_html(`<i>${_text_resume($scope2_id, "a", "y:" + input.title)}</i>`);
					if ($scope0_reason) _if(() => {
						{
							const $scope3_id = _scope_id();
							_html(`<u>${_text_resume($scope3_id, "a", "z:" + input.title)}</u>`);
							_subscribe($si__input_title && $input_title__closures, _scope($scope3_id, { Cg: 1 }));
							return 0;
						}
					}, $scope2_id, "b", 1, 1, 1, 0, 1);
					_subscribe($open__closures, _subscribe($si__input_title && $input_title__closures, _scope($scope2_id, {})));
					return 0;
				}
			}, $scope1_id, "b");
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "a");
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a0");
	$scope0_reason ? _scope($scope0_id, {
		e: input.title,
		f: open,
		g: $input_title__closures,
		h: $open__closures
	}) : _owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "a0", input.title);
	_resume_branch($scope0_id);
}, 1, 0);
