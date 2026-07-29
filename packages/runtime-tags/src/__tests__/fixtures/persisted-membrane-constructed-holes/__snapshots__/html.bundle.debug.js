// tags/info-card.marko
var info_card_default = _template("__tests__/tags/info-card.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<h3 class=card-title>${_escape(input.title)}${_el_resume($scope0_id, "#text/0", _serialize_guard($scope0_reason, 1))}</h3><p class=card-note>${_escape(input.note)}${_el_resume($scope0_id, "#text/1", _serialize_guard($scope0_reason, 2))}</p>`);
	_serialize_guard($scope0_reason, 0) && writeScope($scope0_id, {}, "__tests__/tags/info-card.marko", 0);
});
_renderer_shells({ "__tests__/tags/info-card.marko_0_update": ["<h3 class=card-title> </h3><p class=card-note> </p>", "D lD l"] });

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_title__OR__input_note = _serialize_guard($scope0_reason, 0), $sg__input_title2__OR__input_note = _serialize_guard($scope0_reason, 1), $sg__input_show__OR__input_title__OR__input_note__OR__input_title2__OR__input_note = _serialize_guard($scope0_reason, 2), $si__input_show = _serialize_if($scope0_reason, 3);
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button class=count>clicked <!>${_escape(count)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}`);
	_if(() => input.show ? 0 : undefined, $scope0_id, "#text/2", $sg__input_show__OR__input_title__OR__input_note__OR__input_title2__OR__input_note, $sg__input_show__OR__input_title__OR__input_note__OR__input_title2__OR__input_note, _serialize_guard($scope0_reason, 3), 0, 1, "__tests__/template.marko_0/update_if_#text/2", [() => {
		const $scope1_id = _scope_id();
		_html(`<section class=arrived><button class=inner>inner</button>${_el_resume($scope1_id, "#button/0")}`);
		_set_serialize_reason({
			0: $sg__input_title__OR__input_note,
			1: _serialize_guard($scope0_reason, 4),
			2: _serialize_guard($scope0_reason, 5)
		});
		const $childScope = _peek_scope_id();
		_region(() => {
			info_card_default({
				title: input.title,
				note: input.note
			});
		}, $scope1_id, "#text/2", "__tests__/template.marko_r0");
		_set_serialize_reason({
			0: $sg__input_title2__OR__input_note,
			1: _serialize_guard($scope0_reason, 6),
			2: _serialize_guard($scope0_reason, 7)
		});
		const $childScope2 = _peek_scope_id();
		_region(() => {
			info_card_default({
				title: input.title2,
				note: input.note2
			});
		}, $scope1_id, "#text/4", "__tests__/template.marko_r1");
		_html("</section>");
		_script($scope1_id, "__tests__/template.marko_1");
		writeScope($scope1_id, {
			_: _scope_with_id($scope0_id),
			"#childScope/1": $sg__input_title__OR__input_note | _persisted_reason() && _existing_scope($childScope),
			"#childScope/3": $sg__input_title2__OR__input_note | _persisted_reason() && _existing_scope($childScope2)
		}, "__tests__/template.marko", "3:2");
	}], ["__tests__/template.marko_1_update"], "__tests__/template.marko_r2");
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		input_title: ($si__input_show || _patch_reason()) && input.title,
		input_note: ($si__input_show || _patch_reason()) && input.note,
		input_title2: ($si__input_show || _patch_reason()) && input.title2,
		input_note2: ($si__input_show || _patch_reason()) && input.note2,
		count: _seed_fill(_state_reason() && count)
	}, "__tests__/template.marko", 0, {
		input_title: ["input.title"],
		input_note: ["input.note"],
		input_title2: ["input.title2"],
		input_note2: ["input.note2"],
		count: "1:6"
	});
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"__tests__/template.marko_1_update": ["<section class=arrived><button class=inner>inner</button><!><!></section>", "D b/&%b/&%l"],
	"__tests__/template.marko_1_content": ["<section class=arrived><button class=inner>inner</button><!><!></section>", "D b/&%b/&%l"],
	"__tests__/template.marko_0_update": ["<button class=count>clicked <!></button><!><!>", " Db%l%c"],
	"__tests__/template.marko": ["<button class=count>clicked <!></button><!><!>", " Db%l%c"]
});
