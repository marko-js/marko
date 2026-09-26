// template.marko
_shells({
	a0: "a0;D%c%;<em><!>.<!></em>",
	a1: "a1;D%c%;<em><!>.<!></em>",
	a2: "a2;b%;<!><!><!>",
	a: "a !a7;D%b ;<main><!><button>interactive</button></main>",
	a3: "a3; ;<section></section>",
	a4: "a4;b%;<!><!><!>"
});
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $sg__input_groups = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<main>");
	_for_of(input.groups, (group) => {
		const $scope1_id = _scope_id();
		_html("<section>");
		_for_of(group.items, (item) => {
			const $scope2_id = _scope_id();
			const $for_content2__item_promise__closures = /* @__PURE__ */ new Set();
			_try($scope2_id, "a", _content_resume("a2", () => {
				const $scope3_id = _scope_id();
				_scope_reason();
				_await($scope3_id, "a", item.promise, (v) => {
					const $scope4_id = _scope_id();
					_html(`<em>${_patch_text($scope4_id, "a", group.id, void 0, $scope0_reason, 0)}.${_patch_text($scope4_id, "b", v, 2, $scope0_reason, 0)}</em>`);
					_scope($scope4_id, { _: _scope_with_id($scope3_id) });
				}, 1, "a0");
				$scope0_page && _subscribe(_unfilled_if($scope0_reason, 0) && $for_content2__item_promise__closures, _scope($scope3_id, { _: _scope_with_id($scope2_id) }), _client_guard($scope0_reason, 0) && "a6", 0);
				$scope0_page && _resume_branch($scope3_id);
			}, $scope2_id), { catch: attrTag({ content: _content_resume("a5", (err) => {
				const $scope5_reason = _scope_reason(), $sg__err_message = _source_guard($scope5_reason, 0);
				const $scope5_id = _scope_id();
				_html(`<b>${_text_resume($scope5_id, "a", err.message, $sg__err_message)}</b>`);
				_source_if($scope5_reason, 0) && _scope($scope5_id, {});
			}, $scope2_id) }) });
			$scope0_page && _scope($scope2_id, {
				_: _scope_with_id($scope1_id),
				e: $for_content2__item_promise__closures
			});
		}, 0, $scope1_id, "a", 1, 1, $sg__input_groups, void 0, void 0, "a4", $scope0_reason, 0);
		_html(`</section>${_el_resume($scope1_id, "a")}`);
		_scope($scope1_id, {});
	}, "id", $scope0_id, "a", 1, 1, $sg__input_groups, void 0, void 0, "a3", $scope0_reason, 0);
	_html(`<button>interactive</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a7");
	$scope0_page && _scope($scope0_id, {});
}, 1, 0);
