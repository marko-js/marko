// template.marko
_shells({
	a0: "a0",
	a1: "a1;D%c%;<em><!>.<!></em>",
	a2: "a2;D%c%;<em><!>.<!></em>",
	a3: "a3;b%;<!><!><!>",
	a: "a !a7;D%b ;<main><!><button>interactive</button></main>",
	a4: "a4; ;<section></section>",
	a5: "a5;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_groups = _write_if($scope0_reason, 0);
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
				const $scope3_id = _scope_id(), $ui__input_groups = _unfilled_if($scope0_reason, 0);
				_await($scope3_id, "a", item.promise, (v) => {
					const $scope4_id = _scope_id();
					_html(`<em>${_text_mark($scope4_id, "a", group.id, 1, $scope0_reason, 0)}.${_text_mark($scope4_id, "b", v, 2, $scope0_reason, 0)}</em>`);
					_scope($scope4_id, {});
				}, 1, "a1", $ui__input_groups && 3);
				_unfilled_if($scope0_reason, 0) && _patch_subscribe($scope3_id, "a6", 1);
				$wi__input_groups && _subscribe($ui__input_groups && $for_content2__item_promise__closures, _scope($scope3_id, { _: _scope_with_id($scope2_id) }), _client_guard($scope0_reason, 0) && "a6", 0);
				$wi__input_groups && _resume_branch($scope3_id);
			}, void 0, (err) => {
				_scope_reason();
				const $scope5_id = _scope_id();
				_html(`<b>${_text_mark($scope5_id, "a", err.message, 1, 4, 0)}</b>`);
				_scope($scope5_id, {});
			}, 0, "a0", "a3", 0, 1);
			$wi__input_groups && _scope($scope2_id, {
				_: _scope_with_id($scope1_id),
				e: _unfilled_if($scope0_reason, 0) && $for_content2__item_promise__closures
			});
		}, 0, $scope1_id, "a", 1, 1, 1, 0, 0, "a5", $scope0_reason, 0);
		_html(`</section>${_el_mark($scope1_id, "a")}`);
		_scope($scope1_id, {});
	}, "id", $scope0_id, "a", 1, 1, 1, 0, 0, "a4", $scope0_reason, 0);
	_html(`<button>interactive</button>${_el_mark($scope0_id, "b")}</main>`);
	_script($scope0_id, "a7");
	_scope($scope0_id, {});
}, 1);
