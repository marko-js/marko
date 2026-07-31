// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $n__closures = /* @__PURE__ */ new Set();
	let n = 0;
	let txt = "hi";
	let pick = "a";
	let sel = "one";
	let opened = false;
	const on = n % 2 === 0;
	const Chunk = { content: _content_resume("a8", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`chunk <!>${_escape(n)}${_el_resume($scope1_id, "a")}`);
		_subscribe($n__closures, writeScope($scope1_id, { _: _scope_with_id($scope0_id) }));
		_resume_branch($scope1_id);
	}, $scope0_id) };
	const spread = {
		"data-a": n,
		title: `t${n}`
	};
	_html(`<button>step</button>${_el_resume($scope0_id, "a")}<div${_attr("data-n", n)}${on ? " class=active" : ""}>n=<!>${_escape(n)}${_el_resume($scope0_id, "c")}</div>${_el_resume($scope0_id, "b")}<div class=${!on ? "\"base odd\"" : "base"}></div>${_el_resume($scope0_id, "d")}<div${_attr_class({
		a: on,
		b: !on
	})}></div>${_el_resume($scope0_id, "e")}<div${_attr_style(`width:${n}px`)}></div>${_el_resume($scope0_id, "f")}<div${_attr_style({ color: on ? "red" : "blue" })}></div>${_el_resume($scope0_id, "g")}<div${_attr_style({
		color: on ? "red" : "blue",
		opacity: n
	})}></div>${_el_resume($scope0_id, "h")}<script${_attr_nonce()} type=importmap>${_escape_script(`
  { "imports": { "${_to_text(n)}": "https://markojs.com" } }
`)}<\/script>${_el_resume($scope0_id, "i")}<div>${_unescaped(`<b>html ${n}</b>`)}${_el_resume($scope0_id, "j")}</div><div`);
	_attrs_content(spread, "k", $scope0_id, "div");
	_html(`</div>${_el_resume($scope0_id, "k")}<div data-fixed=x`);
	_attrs_partial_content(spread, { "data-fixed": 1 }, "l", $scope0_id, "div");
	_html(`</div>${_el_resume($scope0_id, "l")}<img${_attrs({
		src: "x.png",
		...spread
	}, "m", $scope0_id, "img")}>${_el_resume($scope0_id, "m")}<img alt=y${_attrs_partial(spread, { alt: 1 }, "n", $scope0_id, "img")}>${_el_resume($scope0_id, "n")}<div>`);
	_attr_content("o", $scope0_id, on && Chunk);
	let hidden = `h${n}`;
	_html(`</div>${_el_resume($scope0_id, "o")}<input${_attr_input_checked($scope0_id, "p", on, _resume(function(v) {
		n = n + 0;
	}, "a0", $scope0_id))} type=checkbox>${_el_resume($scope0_id, "p")}<input${_attr_input_checked($scope0_id, "q", on)} type=checkbox>${_el_resume($scope0_id, "q")}<input${_attr_input_checkedValue($scope0_id, "r", pick, _resume(function(v) {
		pick = v;
	}, "a1", $scope0_id), "a")} type=radio>${_el_resume($scope0_id, "r")}<input${_attr_input_checkedValue($scope0_id, "s", on ? "a" : "b", void 0, "b")} type=radio>${_el_resume($scope0_id, "s")}<input${_attr_input_value($scope0_id, "t", txt, _resume(function(v) {
		txt = v;
	}, "a2", $scope0_id))}>${_el_resume($scope0_id, "t")}<input${_attr_input_value($scope0_id, "u", `v${n}`)}>${_el_resume($scope0_id, "u")}<input${_attr_input_value($scope0_id, "v", `d${n}`)} type=${on ? "text" : "hidden"}>${_el_resume($scope0_id, "v")}<input${_attr_input_value($scope0_id, "w", hidden, _resume(function(v) {
		hidden = v;
	}, "a3", $scope0_id))} type=search>${_el_resume($scope0_id, "w")}`);
	_attr_select_value($scope0_id, "x", sel, _resume(function(v) {
		sel = v;
	}, "a4", $scope0_id), () => {
		_html(`<select><option${_attr_option_value("one")}>one</option><option${_attr_option_value("two")}>two</option></select>`);
	});
	_html(_el_resume($scope0_id, "x"));
	_attr_select_value($scope0_id, "y", on ? "one" : "two", void 0, () => {
		_html(`<select><option${_attr_option_value("one")}>one</option><option${_attr_option_value("two")}>two</option></select>`);
	});
	_html(`${_el_resume($scope0_id, "y")}<details${_attr_details_or_dialog_open($scope0_id, "z", opened, _resume(function(v) {
		opened = v;
	}, "a5", $scope0_id))}><summary>s</summary> body</details>${_el_resume($scope0_id, "z")}<details${_attr_details_or_dialog_open($scope0_id, "a0", on)}><summary>s2</summary> b2</details>${_el_resume($scope0_id, "a0")}<dialog${_attr_details_or_dialog_open($scope0_id, "a1", opened, _resume(function(v) {
		opened = v;
	}, "a6", $scope0_id))}>d</dialog>${_el_resume($scope0_id, "a1")}<dialog${_attr_details_or_dialog_open($scope0_id, "a2", on)}>d2</dialog>${_el_resume($scope0_id, "a2")}${_style_html(`--M_a7:${_escape_style_value(on ? "green" : "purple")};`)}${_el_resume($scope0_id, "a3")}`);
	_script($scope0_id, "a9");
	_script($scope0_id, "a7");
	writeScope($scope0_id, {
		a4: n,
		aa: Chunk,
		ae: $n__closures
	});
	_resume_branch($scope0_id);
}, 1);
