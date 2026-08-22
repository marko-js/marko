// tags/tabs/index.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
_shells({
	"__tests__/tags/tabs/index.marko": "__tests__/tags/tabs/index.marko;b%;<!><!><!>",
	"__tests__/tags/tabs/index.marko_1*shell": "__tests__/tags/tabs/index.marko_1*shell;Db%;<div>a <!></div>",
	"__tests__/tags/tabs/index.marko_2*shell": "__tests__/tags/tabs/index.marko_2*shell,<span>b</span>"
});
var tabs_default = _template_persisted("__tests__/tags/tabs/index.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_tab = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.tab) {
			const $scope1_id = _scope_id();
			_html(`<div>a <!>${_patch_text($scope1_id, "#text/0", input.tab.on, $scope0_owned, 1)}${_el_resume($scope1_id, "#text/0")}</div>`);
			writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/tabs/index.marko", "1:2");
			return 0;
		} else {
			const $scope2_id = _scope_id();
			_html("<span>b</span>");
			$scope0_reason && writeScope($scope2_id, {}, "__tests__/tags/tabs/index.marko", "4:2");
			return 1;
		}
	}, $scope0_id, "#text/0", 1, $sg__input_tab, $sg__input_tab, void 0, void 0, ["__tests__/tags/tabs/index.marko_1*shell", "__tests__/tags/tabs/index.marko_2*shell"]);
	$scope0_reason && writeScope($scope0_id, { input_tab_on: input.tab?.on }, "__tests__/tags/tabs/index.marko", 0, { input_tab_on: ["input.tab.on"] });
}, 0, 0);

// template.marko
const $template = "<main><!><button class=flip>f</button><button class=toggle>t</button></main>";
const $walks = "D%b b l";
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D%b b ;<main><!><button class=flip>f</button><button class=toggle>t</button></main>" });
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let show = true;
	let on = false;
	_html("<main>");
	if ($scope0_reason) _if(() => {
		if (show) {
			const $scope1_id = _scope_id();
			_set_serialize_reason(1);
			const $childScope = _peek_scope_id();
			tabs_default({ tab: attrTag({ on }) });
			writeScope($scope1_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", "4:4");
			return 0;
		}
	}, $scope0_id, "#text/0");
	_html(`<button class=flip>f</button>${_el_resume($scope0_id, "#button/1")}<button class=toggle>t</button>${_el_resume($scope0_id, "#button/2")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason && writeScope($scope0_id, {
		show,
		on
	}, "__tests__/template.marko", 0, {
		show: "1:6",
		on: "2:6"
	});
	_resume_branch($scope0_id);
}, 1, () => [tabs_default]);
