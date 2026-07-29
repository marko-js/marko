// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_items = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let opens = 0;
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		_html(`<article class=item><button class=open>${_escape(_hole_value($scope1_id, "PatchHole:#text/1", item.title, _persisted_reason()))}${_el_resume($scope1_id, "#text/1", $sg__input_items | _persisted_reason())}</button>${_el_resume($scope1_id, "#button/0")}`);
		_if(() => item.badge ? 0 : undefined, $scope1_id, "#text/2", $sg__input_items | _persisted_reason(), $sg__input_items | _persisted_reason(), $sg__input_items | _persisted_reason(), 0, 1, "__tests__/template.marko_1/update_if_#text/2", [() => {
			const $scope2_id = _scope_id();
			_html(`<span class=badge>${_escape(item.badge)}${_el_resume($scope2_id, "#text/0", $sg__input_items | _persisted_reason())}</span>`);
			$sg__input_items | _persisted_reason() && writeScope($scope2_id, { _: $sg__input_items && _scope_with_id($scope1_id) }, "__tests__/template.marko", "5:6");
		}], [0], "__tests__/template.marko_r0");
		_html("</article>");
		_script($scope1_id, "__tests__/template.marko_1");
		writeScope($scope1_id, {
			item_badge: (_serialize_if($scope0_reason, 0) || _patch_reason()) && item?.badge,
			_: _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "2:2", { item_badge: ["item.badge", "2:6"] });
	}, function(item) {
		return item.id;
	}, $scope0_id, "#text/0", $sg__input_items, $sg__input_items, $sg__input_items, 0, 1, "__tests__/template.marko_1_update");
	_html(`<p class=opens>${_escape(opens)}${_el_resume($scope0_id, "#text/1")} opened</p>`);
	writeScope($scope0_id, { opens: _seed_fill(_state_reason() && opens) }, "__tests__/template.marko", 0, { opens: "1:6" });
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"__tests__/template.marko_1_update": ["<article class=item><button class=open> </button><!></article>", "D D l%l"],
	"__tests__/template.marko_1_content": ["<article class=item><button class=open> </button><!></article>", "D D l%l"],
	"__tests__/template.marko_0_update": ["<!><!><p class=opens><!> opened</p>", "b%bD%l"],
	"__tests__/template.marko": ["<!><!><p class=opens><!> opened</p>", "b%bD%l"]
});
