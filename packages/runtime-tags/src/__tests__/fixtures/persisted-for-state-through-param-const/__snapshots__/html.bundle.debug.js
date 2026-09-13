// template.marko
const $template = "<button>load</button><!><!>";
const $walks = " b%c";
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; b%;<button>load</button><!><!>" });
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let sessions = null;
	const ws = input.workspace;
	const shown = ws ? sessions ?? ws.sessions : [];
	_html(`<button>load</button>${_el_resume($scope0_id, "#button/0")}`);
	if ($scope0_reason) _for_of(input.active ? shown : shown.slice(0, 1), (s) => {
		const $scope1_id = _scope_id();
		_html(`<div>${_text_resume($scope1_id, "#text/0", s.id)}</div>`);
		_scope($scope1_id, {}, "__tests__/template.marko", "5:2");
	}, "id", $scope0_id, "#text/1", 1, 1, 1, 0, 1);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason ? _scope($scope0_id, {
		input_active: input.active,
		sessions: _source_if($scope0_reason, 0) && sessions,
		ws,
		shown: _source_if($scope0_reason, 1) && shown
	}, "__tests__/template.marko", 0, {
		input_active: ["input.active"],
		sessions: "1:6",
		ws: "2:8",
		shown: "3:8"
	}) : (_filled_guard($scope0_owned, 1) && _patch_value($scope0_id, "__tests__/template.marko0", input.active), _filled_guard($scope0_owned, 0) && _patch_value($scope0_id, "__tests__/template.marko1", ws));
}, 1, 0);
