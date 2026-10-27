// template.marko
const $template = "<main><!><button>+</button></main>";
const $walks = "D%b l";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D%b ;<main><!><button>+</button></main>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_inner = _write_guard($scope0_reason, 1), $scope0_page = _page_render(), $wi__input_inner = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_inner__closures = new Set();
	let count = 0;
	let on = false;
	_html("<main>");
	if ($scope0_page) _if(() => {
		if (count > 1) {
			const $scope1_id = _scope_id();
			_html(`<h2>${_text_resume($scope1_id, "#text/0", input.outer, _write_guard($scope0_reason, 0))}</h2>`);
			if ($scope0_page) _if(() => {
				if (on) {
					const $scope2_id = _scope_id();
					_html(`<p>${_text_resume($scope2_id, "#text/0", input.inner, $wg__input_inner)}</p>`);
					_subscribe($wi__input_inner && $input_inner__closures, _scope($scope2_id, {}, "__tests__/template.marko", "6:6"), "__tests__/template.marko_2_input_inner#0:5/subscribe", $wg__input_inner);
					return 0;
				}
			}, $scope1_id, "#text/1", 1, 1, 0, 0, 1);
			_scope($scope1_id, {}, "__tests__/template.marko", "4:4");
			return 0;
		}
	}, $scope0_id, "#text/0");
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_outer: input.outer,
		input_inner: input.inner,
		count,
		on,
		"ClosureScopes:input_inner/9": $wi__input_inner && $input_inner__closures
	}, "__tests__/template.marko", 0, {
		input_outer: ["input.outer"],
		input_inner: ["input.inner"],
		count: "1:6",
		on: "2:6"
	}) || (_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.outer, !_server_guard($scope0_reason, 0)), _filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill1", input.inner, !_server_guard($scope0_reason, 1)));
}, 1);
