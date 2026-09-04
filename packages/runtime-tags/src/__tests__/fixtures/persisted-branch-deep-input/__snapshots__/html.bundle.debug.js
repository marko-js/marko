// template.marko
const $template = "<button>t</button><!><!>";
const $walks = " b%c";
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; b%;<button>t</button><!><!>" });
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let on = true;
	_html(`<button>t</button>${_el_resume($scope0_id, "#button/0")}`);
	if ($scope0_reason) _if(() => {
		if (input.opts.show && on) {
			const $scope1_id = _scope_id();
			_html("<span>shown</span>");
			_scope($scope1_id, {}, "__tests__/template.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/1", 1, 1, 1, 0, 1);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason ? _scope($scope0_id, {
		input_opts_show: input.opts?.show,
		on
	}, "__tests__/template.marko", 0, {
		input_opts_show: ["input.opts.show"],
		on: "1:6"
	}) : _owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "__tests__/template.marko0", input.opts?.show);
}, 1, 0);
