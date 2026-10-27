// template.marko
_shells({
	a0: "a0",
	a1: "a1;D%c%;<em><!>.<!></em>",
	a2: "a2;D%c%;<em><!>.<!></em>",
	a3: "a3;b%;<!><!><!>",
	a: "a !a8;D%b ;<main><!><button>interactive</button></main>",
	a4: "a4; ;<section></section>",
	a5: "a5;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_groups = _client_guard($scope0_reason, 0), $wi__input_groups = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<main>");
	_for_of(input.groups, (group) => {
		const $scope1_id = _scope_id();
		_html("<section>");
		_for_of(group.items, (item) => {
			const $scope2_id = _scope_id();
			const $for_content2__item_promise__closures = /* @__PURE__ */ new Set();
			_try($scope2_id, "a", () => {
				_scope_reason();
				const $scope3_id = _scope_id();
				_await($scope3_id, "a", item.promise, (v) => {
					const $scope4_id = _scope_id();
					_html(`<em>${_patch_text($scope4_id, "a", group.id, void 0, $scope0_reason, 0)}.${_patch_text($scope4_id, "b", v, 2, $scope0_reason, 0)}</em>`);
					_scope($scope4_id, {});
				}, 1, "a1");
				_unfilled_if($scope0_reason, 0) && _patch_init($scope3_id, $cg__input_groups ? "a6" : "a7");
				$wi__input_groups && _subscribe(_unfilled_if($scope0_reason, 0) && $for_content2__item_promise__closures, _scope($scope3_id, { _: _scope_with_id($scope2_id) }), $cg__input_groups && "a7", 0);
				$wi__input_groups && _resume_branch($scope3_id);
			}, void 0, (err) => {
				_scope_reason();
				const $scope5_id = _scope_id();
				_html(`<b>${_patch_text($scope5_id, "a", err.message)}</b>`);
				_scope($scope5_id, {});
			}, void 0, "a0", "a3", void 0, 1, 1);
			$wi__input_groups && _scope($scope2_id, {
				_: _scope_with_id($scope1_id),
				g: _unfilled_if($scope0_reason, 0) && $for_content2__item_promise__closures
			});
		}, 0, $scope1_id, "a", 1, void 0, void 0, void 0, void 0, "a5", $scope0_reason, 0);
		_html(`</section>${_el_resume($scope1_id, "a")}`);
		_scope($scope1_id, {});
	}, "id", $scope0_id, "a", 1, void 0, void 0, void 0, void 0, "a4", $scope0_reason, 0);
	_html(`<button>interactive</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a8");
	_scope($scope0_id, {});
}, 1);
