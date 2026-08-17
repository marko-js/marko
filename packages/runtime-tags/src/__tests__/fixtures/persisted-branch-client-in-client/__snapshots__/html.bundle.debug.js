// template.marko
const $template = "<main><!><button>+</button></main>";
const $walks = "D%b l";
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const $input_inner__closures = new Set();
	let count = 0;
	let on = false;
	_html("<main>");
	if ($scope0_reason) _if(() => {
		if (count > 1) {
			const $scope1_id = _scope_id();
			_html(`<h2>${_escape(input.outer)}${_el_resume($scope1_id, "#text/0")}</h2>`);
			if ($scope0_reason) _if(() => {
				if (on) {
					const $scope2_id = _scope_id();
					_html(`<p>${_escape(input.inner)}${_el_resume($scope2_id, "#text/0")}</p>`);
					_subscribe(_source_if($scope0_reason, 1) && $input_inner__closures, writeScope($scope2_id, {}, "__tests__/template.marko", "6:6"));
					return 0;
				}
			}, $scope1_id, "#text/1", 1, 1, 1, 0, 1);
			writeScope($scope1_id, {}, "__tests__/template.marko", "4:4");
			return 0;
		}
	}, $scope0_id, "#text/0");
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason ? writeScope($scope0_id, {
		input_outer: input.outer,
		input_inner: input.inner,
		count,
		on,
		"ClosureScopes:input_inner": $input_inner__closures
	}, "__tests__/template.marko", 0, {
		input_outer: ["input.outer"],
		input_inner: ["input.inner"],
		count: "1:6",
		on: "2:6"
	}) : (_owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "__tests__/template.marko0", input.outer), _owned_guard($scope0_owned, 1) && _patch_value($scope0_id, "__tests__/template.marko1", input.inner));
	_resume_branch($scope0_id);
}, 1, 0);
