// template.marko
_shells({
	"__tests__/template.marko_1*shell": ",`__tests__/template.marko_1*shell;D%b%;<li><!><!></li>`",
	"__tests__/template.marko_2*shell": ",`__tests__/template.marko_2*shell !__tests__/template.marko_2;D l ;<span> </span><button>note</button>`"
});
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_items = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<ul>");
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		_html(`<li>${_patch_text($scope1_id, "#text/0", item.label, $scope0_owned, 0)}${_el_resume($scope1_id, "#text/0")}`);
		_if(() => {
			if (item.detailed) {
				const $scope2_id = _scope_id();
				let notes = 0;
				_html(`<span>${_escape(notes)}${_el_resume($scope2_id, "#text/0")}</span><button>note</button>${_el_resume($scope2_id, "#button/1")}`);
				_script($scope2_id, "__tests__/template.marko_2");
				_patch_value($scope2_id, "__tests__/template.marko0", notes, 1);
				writeScope($scope2_id, { notes }, "__tests__/template.marko", "5:8", { notes: "6:14" });
				return 0;
			}
		}, $scope1_id, "#text/1", 1, $sg__input_items, $sg__input_items, void 0, void 0, ["__tests__/template.marko_2*shell"]);
		_html("</li>");
		writeScope($scope1_id, {}, "__tests__/template.marko", "2:4");
	}, "id", $scope0_id, "#ul/0", 1, $sg__input_items, $sg__input_items, void 0, void 0, "__tests__/template.marko_1*shell");
	_html(`</ul>${_el_resume($scope0_id, "#ul/0", $sg__input_items)}`);
	$scope0_reason && writeScope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1, 0);
