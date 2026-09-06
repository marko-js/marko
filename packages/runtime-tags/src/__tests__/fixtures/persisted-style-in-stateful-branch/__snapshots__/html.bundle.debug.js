// v:template.marko.css
var v_template_marko_default = ".x { color: var(--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bpersisted-19style-19in-19stateful-19branch-1btemplate-1amarko_0); }";

// template.marko
const $template = "<!><!><button>toggle</button>";
const $walks = "b%b b";
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;b%b ;<!><!><button>toggle</button>" });
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let s = true;
	if ($scope0_reason) _if(() => {
		if (s) {
			const $scope1_id = _scope_id();
			_html(`${_style_html(`--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bpersisted-19style-19in-19stateful-19branch-1btemplate-1amarko_0:${_escape_style_value(input.color)};`)}${_el_resume($scope1_id, "#style/0", _source_guard($scope0_reason, 1))}<b class=x>${_text_resume($scope1_id, "#text/1", input.x)}</b>`);
			_scope($scope1_id, {}, "__tests__/template.marko", "2:2");
			return 0;
		}
	}, $scope0_id, "#text/0");
	_html(`<button>toggle</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason ? _scope($scope0_id, {
		input_color: input.color,
		input_x: input.x,
		s
	}, "__tests__/template.marko", 0, {
		input_color: ["input.color"],
		input_x: ["input.x"],
		s: "1:6"
	}) : (_owned_guard($scope0_owned, 1) && _patch_value($scope0_id, "__tests__/template.marko0", input.color), _owned_guard($scope0_owned, 2) && _patch_value($scope0_id, "__tests__/template.marko1", input.x));
}, 1, 0);
