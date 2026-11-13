// template.marko
const $template = "<button>toggle</button><!><!>";
const $walks = " b%c";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; b%;<button>toggle</button><!><!>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $h__closures = new Set();
	const $global$1 = $global();
	let open = true;
	const h = $global$1.label + "!";
	_html(`<button>toggle</button>${_el_mark($scope0_id, "#button/0")}`);
	const A = { content: _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $scope1_page = _page_render();
		_html(`<p>${_text_mark($scope1_id, "#text/0", h, $scope1_page)}</p>`);
		_subscribe($h__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "4:2"), "__tests__/template.marko_1_h#0:3/subscribe", $scope1_page);
		$scope1_page || _resume_branch($scope1_id);
	}, $scope0_id) };
	_dynamic_tag($scope0_id, "#text/1", open ? A : null, {});
	_fill_global_subscribe("__tests__/template.marko_0_$global_label#6", $scope0_id);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		open,
		h,
		A,
		"ClosureScopes:h/6": $h__closures
	}, "__tests__/template.marko", 0, {
		open: "1:6",
		h: "3:8",
		A: "4:9"
	}) || _patch_write($scope0_id, "PatchMarkedWrite:h", h) && _patch_subscribers($scope0_id, "__tests__/template.marko_0_h#3/subscribers", "h");
}, 1);
