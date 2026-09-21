// template.marko
_shells({
	a1: "a1; D ;<button> </button>",
	a2: "a2;D ;<em> </em>",
	a3: "a3;D ;<em> </em>",
	a4: "a4; D ;<button> </button>",
	a: "a;D%b%;<main><!><!></main>"
});
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html("<main>");
	_await($scope0_id, "a", input.first, (first) => {
		const $scope1_id = _scope_id();
		_html(`<em>${_patch_text($scope1_id, "a", first, void 0, $scope0_reason, 0)}</em>`);
		_scope($scope1_id, {});
	}, 1, "a3", 1);
	_await($scope0_id, "b", input.second, (second) => {
		const $scope2_id = _scope_id();
		_filled_guard($scope0_reason, 1) && _patch_write($scope2_id, "d", second);
		const handler = _resume((event) => event.target.dataset.seen = second, "a0", $scope2_id);
		_html(`<button${_patch_attrs({
			title: second,
			onClick: handler
		}, "a", $scope2_id, "button", void 0, $scope0_reason, 1)}>${_patch_text($scope2_id, "b", second, void 0, $scope0_reason, 1)}</button>${_el_resume($scope2_id, "a")}`);
		_script($scope2_id, "a5");
		_scope($scope2_id, {
			d: second,
			e: handler
		});
	}, 1, "a4", 1);
	_html("</main>");
}, 1, 0);
