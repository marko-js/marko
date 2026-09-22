// template.marko
_shells({
	a0: "a0;D ;<em> </em>",
	a1: "a1;D ;<b> </b>",
	a2: "a2,<i>loading</i>",
	a3: "a3;D ;<em> </em>",
	a4: "a4;D%b%;<div><!><!></div>",
	a: "a !a8;D%b ;<main><!><button>x</button></main>",
	a5: "a5;D ;<b> </b>",
	a6: "a6;b%;<!><!><!>"
});
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $sg__input_show = _source_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_fast__closures = /* @__PURE__ */ new Set();
	const $input_show__closures = /* @__PURE__ */ new Set();
	const $input_slow__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_try($scope0_id, "a", _content_resume("a4", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html("<div>");
		_if(() => {
			if (input.show) {
				const $scope2_id = _scope_id();
				_source_if($scope0_reason, 3) && $scope0_page && _client_guard($scope0_reason, 3) && _script($scope2_id, "a7", 0);
				_await($scope2_id, "a", input.fast, (a) => {
					const $scope4_id = _scope_id();
					_html(`<b>${_patch_text($scope4_id, "a", a, void 0, $scope0_reason, 3)}</b>`);
					_scope($scope4_id, {});
				}, 1, "a1");
				$scope0_page && _scope($scope2_id, { _: _scope_with_id($scope1_id) });
				return 0;
			}
		}, $scope1_id, "a", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["a6"], $scope0_reason, 2);
		_await($scope1_id, "b", input.slow, (b) => {
			const $scope5_id = _scope_id();
			_html(`<em>${_patch_text($scope5_id, "a", b, void 0, $scope0_reason, 4)}</em>`);
			_scope($scope5_id, {});
		}, 1, "a0", 1);
		_html("</div>");
		$scope0_page && _subscribe(_unfilled_if($scope0_reason, 4) && $input_slow__closures, _subscribe(_unfilled_if($scope0_reason, 2) && $input_show__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) })));
		$sg__input_show || $scope0_page && _resume_branch($scope1_id);
	}, $scope0_id), { placeholder: attrTag({ content: _content_shell("a2", $scope0_id) }) }, 1);
	_html(`<button>x</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a8");
	$scope0_page && _scope($scope0_id, {
		f: _source_if($scope0_reason, 2) && input.fast,
		i: $input_fast__closures,
		h: $input_show__closures,
		j: $input_slow__closures
	});
}, 1, 0);
