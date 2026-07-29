// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_items = _serialize_guard($scope0_reason, 2), $sg__input_tags = _serialize_guard($scope0_reason, 4);
	const $scope0_id = _scope_id();
	let showDetails = true;
	let clicks = 0;
	_html(`<h1 class=title>${_escape(_hole_value($scope0_id, "PatchHole:#text/0", input.title, _persisted_reason()))}${_el_resume($scope0_id, "#text/0", _serialize_guard($scope0_reason, 1))}</h1><button class=toggle>toggle</button>${_el_resume($scope0_id, "#button/1")}<button class=count>clicked <!>${_escape(clicks)}${_el_resume($scope0_id, "#text/3")}</button>${_el_resume($scope0_id, "#button/2")}<ul class=items>`);
	_region(() => {
		forOf(input.items, (item) => {
			const $scope2_id = _scope_id();
			_html(`<li class=item>${_escape(item.label)}${_el_resume($scope2_id, "#text/0", $sg__input_items)}</li>`);
			$sg__input_items && writeScope($scope2_id, {}, "__tests__/template.marko", "7:4");
		});
	}, $scope0_id, "#ul/4", "__tests__/template.marko_r0");
	_html(`</ul>${_el_resume($scope0_id, "#ul/4", $sg__input_items)}`);
	_if(() => {
		if (showDetails) {
			const $scope1_id = _scope_id();
			_html(`<section class=details><p class=note>${_escape(input.note)}${_el_resume($scope1_id, "#text/0", _serialize_guard($scope0_reason, 3))}</p><ol class=tags>`);
			_for_of(input.tags, (tag) => {
				const $scope3_id = _scope_id();
				_html(`<li class=tag>${_escape(tag)}${_el_resume($scope3_id, "#text/0", $sg__input_tags)}</li>`);
				$sg__input_tags && writeScope($scope3_id, {}, "__tests__/template.marko", "15:8");
			}, 0, $scope1_id, "#ol/1", $sg__input_tags, $sg__input_tags, $sg__input_tags, "</ol>", 1);
			_html("</section>");
			writeScope($scope1_id, {}, "__tests__/template.marko", "11:2");
			return 0;
		}
	}, $scope0_id, "#text/5", 1 | _persisted_reason(), 1 | _persisted_reason(), 1, 0, 1);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		input_note: input.note,
		input_tags: input.tags,
		showDetails: _seed_fill(_state_reason() && showDetails),
		clicks: _seed_fill(_state_reason() && clicks)
	}, "__tests__/template.marko", 0, {
		input_note: ["input.note"],
		input_tags: ["input.tags"],
		showDetails: "1:6",
		clicks: "2:6"
	});
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"__tests__/template.marko_0_update": ["<h1 class=title> </h1><button class=toggle>toggle</button><button class=count>clicked <!></button><ul class=items></ul><!><!>", "D l b Db%l b%c"],
	"__tests__/template.marko": ["<h1 class=title> </h1><button class=toggle>toggle</button><button class=count>clicked <!></button><ul class=items></ul><!><!>", "D l b Db%l b%c"]
});
