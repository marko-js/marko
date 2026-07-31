// v:template.marko.css
var v_template_marko_default = "\n  .kitchen { color: var(--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1brender-19effect-19helpers-1btemplate-1amarko_0); }\n";

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $n__closures = new Set();
	let n = 0;
	let txt = "hi";
	let pick = "a";
	let sel = "one";
	let opened = false;
	const on = n % 2 === 0;
	const Chunk = { content: _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`chunk <!>${_escape(n)}${_el_resume($scope1_id, "#text/0")}`);
		_subscribe($n__closures, writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "7:2"));
		_resume_branch($scope1_id);
	}, $scope0_id) };
	const spread = {
		"data-a": n,
		title: `t${n}`
	};
	_html(`<button>step</button>${_el_resume($scope0_id, "#button/0")}<div${_attr("data-n", n)}${on ? " class=active" : ""}>n=<!>${_escape(n)}${_el_resume($scope0_id, "#text/2")}</div>${_el_resume($scope0_id, "#div/1")}<div class=${!on ? "\"base odd\"" : "base"}></div>${_el_resume($scope0_id, "#div/3")}<div${_attr_class({
		a: on,
		b: !on
	})}></div>${_el_resume($scope0_id, "#div/4")}<div${_attr_style(`width:${n}px`)}></div>${_el_resume($scope0_id, "#div/5")}<div${_attr_style({ color: on ? "red" : "blue" })}></div>${_el_resume($scope0_id, "#div/6")}<div${_attr_style({
		color: on ? "red" : "blue",
		opacity: n
	})}></div>${_el_resume($scope0_id, "#div/7")}<script${_attr_nonce()} type=importmap>${_escape_script(`
  { "imports": { "${_to_text(n)}": "https://markojs.com" } }
`)}<\/script>${_el_resume($scope0_id, "#script/8")}<div>${_unescaped(`<b>html ${n}</b>`)}${_el_resume($scope0_id, "#text/9")}</div><div`);
	_attrs_content(spread, "#div/10", $scope0_id, "div");
	_html(`</div>${_el_resume($scope0_id, "#div/10")}<div data-fixed=x`);
	_attrs_partial_content(spread, { "data-fixed": 1 }, "#div/11", $scope0_id, "div");
	_html(`</div>${_el_resume($scope0_id, "#div/11")}<img${_attrs({
		src: "x.png",
		...spread
	}, "#img/12", $scope0_id, "img")}>${_el_resume($scope0_id, "#img/12")}<img alt=y${_attrs_partial(spread, { alt: 1 }, "#img/13", $scope0_id, "img")}>${_el_resume($scope0_id, "#img/13")}<div>`);
	_attr_content("#div/14", $scope0_id, on && Chunk);
	let hidden = `h${n}`;
	_html(`</div>${_el_resume($scope0_id, "#div/14")}<input${_attr_input_checked($scope0_id, "#input/15", on, _resume(function(v) {
		n = n + 0;
	}, "__tests__/template.marko_0/checkedChange", $scope0_id))} type=checkbox>${_el_resume($scope0_id, "#input/15")}<input${_attr_input_checked($scope0_id, "#input/16", on)} type=checkbox>${_el_resume($scope0_id, "#input/16")}<input${_attr_input_checkedValue($scope0_id, "#input/17", pick, _resume(function(v) {
		pick = v;
	}, "__tests__/template.marko_0/checkedValueChange", $scope0_id), "a")} type=radio>${_el_resume($scope0_id, "#input/17")}<input${_attr_input_checkedValue($scope0_id, "#input/18", on ? "a" : "b", void 0, "b")} type=radio>${_el_resume($scope0_id, "#input/18")}<input${_attr_input_value($scope0_id, "#input/19", txt, _resume(function(v) {
		txt = v;
	}, "__tests__/template.marko_0/valueChange", $scope0_id))}>${_el_resume($scope0_id, "#input/19")}<input${_attr_input_value($scope0_id, "#input/20", `v${n}`)}>${_el_resume($scope0_id, "#input/20")}<input${_attr_input_value($scope0_id, "#input/21", `d${n}`)} type=${on ? "text" : "hidden"}>${_el_resume($scope0_id, "#input/21")}<input${_attr_input_value($scope0_id, "#input/22", hidden, _resume(function(v) {
		hidden = v;
	}, "__tests__/template.marko_0/valueChange2", $scope0_id))} type=search>${_el_resume($scope0_id, "#input/22")}`);
	_attr_select_value($scope0_id, "#select/23", sel, _resume(function(v) {
		sel = v;
	}, "__tests__/template.marko_0/valueChange3", $scope0_id), () => {
		_html(`<select><option${_attr_option_value("one")}>one</option><option${_attr_option_value("two")}>two</option></select>`);
	});
	_html(_el_resume($scope0_id, "#select/23"));
	_attr_select_value($scope0_id, "#select/24", on ? "one" : "two", void 0, () => {
		_html(`<select><option${_attr_option_value("one")}>one</option><option${_attr_option_value("two")}>two</option></select>`);
	});
	_html(`${_el_resume($scope0_id, "#select/24")}<details${_attr_details_or_dialog_open($scope0_id, "#details/25", opened, _resume(function(v) {
		opened = v;
	}, "__tests__/template.marko_0/openChange", $scope0_id))}><summary>s</summary> body</details>${_el_resume($scope0_id, "#details/25")}<details${_attr_details_or_dialog_open($scope0_id, "#details/26", on)}><summary>s2</summary> b2</details>${_el_resume($scope0_id, "#details/26")}<dialog${_attr_details_or_dialog_open($scope0_id, "#dialog/27", opened, _resume(function(v) {
		opened = v;
	}, "__tests__/template.marko_0/openChange2", $scope0_id))}>d</dialog>${_el_resume($scope0_id, "#dialog/27")}<dialog${_attr_details_or_dialog_open($scope0_id, "#dialog/28", on)}>d2</dialog>${_el_resume($scope0_id, "#dialog/28")}${_style_html(`--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1brender-19effect-19helpers-1btemplate-1amarko_0:${_escape_style_value(on ? "green" : "purple")};`)}${_el_resume($scope0_id, "#style/29")}`);
	_script($scope0_id, "__tests__/template.marko_0_spread#38");
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		n,
		Chunk,
		"ClosureScopes:n": $n__closures
	}, "__tests__/template.marko", 0, {
		n: "1:6",
		Chunk: "7:9",
		"EventAttributes:#div/10": ["...spread", "21:9"],
		"EventAttributes:#div/11": ["...spread", "22:9"],
		"EventAttributes:#img/12": ["...spread", "23:21"],
		"EventAttributes:#img/13": ["...spread", "24:9"],
		"ControlledHandler:#input/15": ["checkedChange", "27:35"],
		"ControlledHandler:#input/17": ["checkedValueChange", "29:49"],
		"ControlledHandler:#input/19": ["valueChange", "31:18"],
		"ControlledHandler:#input/22": ["valueChange", "35:35"],
		"ControlledHandler:#select/23": ["valueChange", "36:19"],
		"ControlledHandler:#details/25": ["openChange", "44:22"],
		"ControlledHandler:#dialog/27": ["openChange", "52:21"]
	});
	_resume_branch($scope0_id);
}, 1);
