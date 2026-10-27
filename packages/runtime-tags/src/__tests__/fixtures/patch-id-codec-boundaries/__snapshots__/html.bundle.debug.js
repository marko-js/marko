// tags/field.marko
const $template$1 = "<label>field</label><input>";
const $walks$1 = " b b";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/field.marko": "__tests__/tags/field.marko; b ;<label>field</label><input>" });
var field_default = _template("__tests__/tags/field.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const uid = _id("uid");
	_html(`<label${_patch_attr($scope0_id, "PatchAttr:#label/0 for", "for", uid, 0, 0)}>field</label>${_el_resume($scope0_id, "#label/0", 0)}<input${_patch_attr($scope0_id, "PatchAttr:#input/1 id", "id", uid, 0, 0)}>${_el_resume($scope0_id, "#input/1", 0)}`);
	_scope($scope0_id, {}, "__tests__/tags/field.marko", 0);
});

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1, _w2, _w3, _w4, _w5, _w6, _w7, _w8, _w9, _w10, _w11) => `<!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!>${_w0}${_w1}${_w2}${_w3}${_w4}${_w5}${_w6}${_w7}${_w8}${_w9}${_w10}${_w11}`)($template$1, $template$1, $template$1, $template$1, $template$1, $template$1, $template$1, $template$1, $template$1, $template$1, $template$1, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1, _w2, _w3, _w4, _w5, _w6, _w7, _w8, _w9, _w10, _w11) => `b%b%b%b%b%b%b%b%b%b%b%b%b%b%b%b%b%b%b%b%b%b%b%b%b%b%b%b%b%b%b%b%b%b%b%b%b%b%b%b%b%b%b%b%b%b%b%b%b%b%b%b%b%b%b%b%b%b%b%b%b%b/${_w0}&/${_w1}&/${_w2}&/${_w3}&/${_w4}&/${_w5}&/${_w6}&/${_w7}&/${_w8}&/${_w9}&/${_w10}&/${_w11}&`)($walks$1, $walks$1, $walks$1, $walks$1, $walks$1, $walks$1, $walks$1, $walks$1, $walks$1, $walks$1, $walks$1, $walks$1);
const $setup = _shell_setup([[], []], ["#childScope/61>", $setup$1], ["#childScope/62>", $setup$1], ["#childScope/63>", $setup$1], ["#childScope/64>", $setup$1], ["#childScope/65>", $setup$1], ["#childScope/66>", $setup$1], ["#childScope/67>", $setup$1], ["#childScope/68>", $setup$1], ["#childScope/69>", $setup$1], ["#childScope/70>", $setup$1], ["#childScope/71>", $setup$1], ["#childScope/72>", $setup$1]);
_shells({
	"__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0, _w1, _w2, _w3, _w4, _w5, _w6, _w7, _w8, _w9, _w10, _w11) => `b%b%b%b%b%b%b%b%b%b%b%b%b%b%b%b%b%b%b%b%b%b%b%b%b%b%b%b%b%b%b%b%b%b%b%b%b%b%b%b%b%b%b%b%b%b%b%b%b%b%b%b%b%b%b%b%b%b%b%b%b%b/${_w0}&/${_w1}&/${_w2}&/${_w3}&/${_w4}&/${_w5}&/${_w6}&/${_w7}&/${_w8}&/${_w9}&/${_w10}&/${_w11}&`)($walks$1, $walks$1, $walks$1, $walks$1, $walks$1, $walks$1, $walks$1, $walks$1, $walks$1, $walks$1, $walks$1, $walks$1)};${((_w0, _w1, _w2, _w3, _w4, _w5, _w6, _w7, _w8, _w9, _w10, _w11) => `<!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!>${_w0}${_w1}${_w2}${_w3}${_w4}${_w5}${_w6}${_w7}${_w8}${_w9}${_w10}${_w11}`)($template$1, $template$1, $template$1, $template$1, $template$1, $template$1, $template$1, $template$1, $template$1, $template$1, $template$1, $template$1)}`)(),
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell; b ;<label>key</label><input>",
	"__tests__/template.marko_2*shell": "__tests__/template.marko_2*shell; b ;<label>decl0</label><input>",
	"__tests__/template.marko_3*shell": "__tests__/template.marko_3*shell; b ;<label>decl1</label><input>",
	"__tests__/template.marko_4*shell": "__tests__/template.marko_4*shell; b ;<label>decl2</label><input>",
	"__tests__/template.marko_5*shell": "__tests__/template.marko_5*shell; b ;<label>decl3</label><input>",
	"__tests__/template.marko_6*shell": "__tests__/template.marko_6*shell; b ;<label>decl4</label><input>",
	"__tests__/template.marko_7*shell": "__tests__/template.marko_7*shell; b ;<label>decl5</label><input>",
	"__tests__/template.marko_8*shell": "__tests__/template.marko_8*shell; b ;<label>decl6</label><input>",
	"__tests__/template.marko_9*shell": "__tests__/template.marko_9*shell; b ;<label>decl7</label><input>",
	"__tests__/template.marko_10*shell": "__tests__/template.marko_10*shell; b ;<label>decl8</label><input>",
	"__tests__/template.marko_11*shell": "__tests__/template.marko_11*shell; b ;<label>decl9</label><input>",
	"__tests__/template.marko_12*shell": "__tests__/template.marko_12*shell; b ;<label>decl10</label><input>",
	"__tests__/template.marko_13*shell": "__tests__/template.marko_13*shell; b ;<label>decl11</label><input>",
	"__tests__/template.marko_14*shell": "__tests__/template.marko_14*shell; b ;<label>decl12</label><input>",
	"__tests__/template.marko_15*shell": "__tests__/template.marko_15*shell; b ;<label>decl13</label><input>",
	"__tests__/template.marko_16*shell": "__tests__/template.marko_16*shell; b ;<label>decl14</label><input>",
	"__tests__/template.marko_17*shell": "__tests__/template.marko_17*shell; b ;<label>decl15</label><input>",
	"__tests__/template.marko_18*shell": "__tests__/template.marko_18*shell; b ;<label>decl16</label><input>",
	"__tests__/template.marko_19*shell": "__tests__/template.marko_19*shell; b ;<label>decl17</label><input>",
	"__tests__/template.marko_20*shell": "__tests__/template.marko_20*shell; b ;<label>decl18</label><input>",
	"__tests__/template.marko_21*shell": "__tests__/template.marko_21*shell; b ;<label>decl19</label><input>",
	"__tests__/template.marko_22*shell": "__tests__/template.marko_22*shell; b ;<label>decl20</label><input>",
	"__tests__/template.marko_23*shell": "__tests__/template.marko_23*shell; b ;<label>decl21</label><input>",
	"__tests__/template.marko_24*shell": "__tests__/template.marko_24*shell; b ;<label>decl22</label><input>",
	"__tests__/template.marko_25*shell": "__tests__/template.marko_25*shell; b ;<label>decl23</label><input>",
	"__tests__/template.marko_26*shell": "__tests__/template.marko_26*shell; b ;<label>decl24</label><input>",
	"__tests__/template.marko_27*shell": "__tests__/template.marko_27*shell; b ;<label>decl25</label><input>",
	"__tests__/template.marko_28*shell": "__tests__/template.marko_28*shell; b ;<label>decl26</label><input>",
	"__tests__/template.marko_29*shell": "__tests__/template.marko_29*shell; b ;<label>decl27</label><input>",
	"__tests__/template.marko_30*shell": "__tests__/template.marko_30*shell; b ;<label>decl28</label><input>",
	"__tests__/template.marko_31*shell": "__tests__/template.marko_31*shell; b ;<label>decl29</label><input>",
	"__tests__/template.marko_32*shell": "__tests__/template.marko_32*shell; b ;<label>decl30</label><input>",
	"__tests__/template.marko_33*shell": "__tests__/template.marko_33*shell; b ;<label>decl31</label><input>",
	"__tests__/template.marko_34*shell": "__tests__/template.marko_34*shell; b ;<label>decl32</label><input>",
	"__tests__/template.marko_35*shell": "__tests__/template.marko_35*shell; b ;<label>decl33</label><input>",
	"__tests__/template.marko_36*shell": "__tests__/template.marko_36*shell; b ;<label>decl34</label><input>",
	"__tests__/template.marko_37*shell": "__tests__/template.marko_37*shell; b ;<label>decl35</label><input>",
	"__tests__/template.marko_38*shell": "__tests__/template.marko_38*shell; b ;<label>decl36</label><input>",
	"__tests__/template.marko_39*shell": "__tests__/template.marko_39*shell; b ;<label>decl37</label><input>",
	"__tests__/template.marko_40*shell": "__tests__/template.marko_40*shell; b ;<label>decl38</label><input>",
	"__tests__/template.marko_41*shell": "__tests__/template.marko_41*shell; b ;<label>decl39</label><input>",
	"__tests__/template.marko_42*shell": "__tests__/template.marko_42*shell; b ;<label>decl40</label><input>",
	"__tests__/template.marko_43*shell": "__tests__/template.marko_43*shell; b ;<label>decl41</label><input>",
	"__tests__/template.marko_44*shell": "__tests__/template.marko_44*shell; b ;<label>decl42</label><input>",
	"__tests__/template.marko_45*shell": "__tests__/template.marko_45*shell; b ;<label>decl43</label><input>",
	"__tests__/template.marko_46*shell": "__tests__/template.marko_46*shell; b ;<label>decl44</label><input>",
	"__tests__/template.marko_47*shell": "__tests__/template.marko_47*shell; b ;<label>decl45</label><input>",
	"__tests__/template.marko_48*shell": "__tests__/template.marko_48*shell; b ;<label>decl46</label><input>",
	"__tests__/template.marko_49*shell": "__tests__/template.marko_49*shell; b ;<label>decl47</label><input>",
	"__tests__/template.marko_50*shell": "__tests__/template.marko_50*shell; b ;<label>decl48</label><input>",
	"__tests__/template.marko_51*shell": "__tests__/template.marko_51*shell; b ;<label>decl49</label><input>",
	"__tests__/template.marko_52*shell": "__tests__/template.marko_52*shell; b ;<label>decl50</label><input>",
	"__tests__/template.marko_53*shell": "__tests__/template.marko_53*shell; b ;<label>decl51</label><input>",
	"__tests__/template.marko_54*shell": "__tests__/template.marko_54*shell; b ;<label>decl52</label><input>",
	"__tests__/template.marko_55*shell": "__tests__/template.marko_55*shell; b ;<label>decl53</label><input>",
	"__tests__/template.marko_56*shell": "__tests__/template.marko_56*shell; b ;<label>decl54</label><input>",
	"__tests__/template.marko_57*shell": "__tests__/template.marko_57*shell; b ;<label>decl55</label><input>",
	"__tests__/template.marko_58*shell": "__tests__/template.marko_58*shell; b ;<label>decl56</label><input>",
	"__tests__/template.marko_59*shell": "__tests__/template.marko_59*shell; b ;<label>decl57</label><input>",
	"__tests__/template.marko_60*shell": "__tests__/template.marko_60*shell; b ;<label>decl58</label><input>",
	"__tests__/template.marko_61*shell": "__tests__/template.marko_61*shell; b ;<label>decl59</label><input>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_for_of(input.keys, (key) => {
		const $scope1_id = _scope_id();
		const keyId = _id("keyId");
		_html(`<label${_patch_attr($scope1_id, "PatchAttr:#label/0 for", "for", keyId, 0, 0)}>key</label>${_el_resume($scope1_id, "#label/0", 0)}<input${_patch_attr($scope1_id, "PatchAttr:#input/1 id", "id", keyId, 0, 0)}>${_el_resume($scope1_id, "#input/1", 0)}`);
		_scope($scope1_id, {}, "__tests__/template.marko", "1:2");
	}, (key) => key, $scope0_id, "#text/0", 1, void 0, void 0, void 0, void 0, "__tests__/template.marko_1*shell", $scope0_reason, 0);
	_if(() => {
		if (input.show) {
			const $scope2_id = _scope_id();
			const uid = _id("uid");
			_html(`<label${_patch_attr($scope2_id, "PatchAttr:#label/0 for", "for", uid, 0, 0)}>decl0</label>${_el_resume($scope2_id, "#label/0", 0)}<input${_patch_attr($scope2_id, "PatchAttr:#input/1 id", "id", uid, 0, 0)}>${_el_resume($scope2_id, "#input/1", 0)}`);
			_scope($scope2_id, {}, "__tests__/template.marko", "2:2");
			return 0;
		}
	}, $scope0_id, "#text/1", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/template.marko_2*shell"], $scope0_reason, 1);
	_if(() => {
		if (input.show) {
			const $scope3_id = _scope_id();
			const uid = _id("uid~1");
			_html(`<label${_patch_attr($scope3_id, "PatchAttr:#label/0 for", "for", uid, 0, 0)}>decl1</label>${_el_resume($scope3_id, "#label/0", 0)}<input${_patch_attr($scope3_id, "PatchAttr:#input/1 id", "id", uid, 0, 0)}>${_el_resume($scope3_id, "#input/1", 0)}`);
			_scope($scope3_id, {}, "__tests__/template.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/2", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/template.marko_3*shell"], $scope0_reason, 1);
	_if(() => {
		if (input.show) {
			const $scope4_id = _scope_id();
			const uid = _id("uid~2");
			_html(`<label${_patch_attr($scope4_id, "PatchAttr:#label/0 for", "for", uid, 0, 0)}>decl2</label>${_el_resume($scope4_id, "#label/0", 0)}<input${_patch_attr($scope4_id, "PatchAttr:#input/1 id", "id", uid, 0, 0)}>${_el_resume($scope4_id, "#input/1", 0)}`);
			_scope($scope4_id, {}, "__tests__/template.marko", "4:2");
			return 0;
		}
	}, $scope0_id, "#text/3", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/template.marko_4*shell"], $scope0_reason, 1);
	_if(() => {
		if (input.show) {
			const $scope5_id = _scope_id();
			const uid = _id("uid~3");
			_html(`<label${_patch_attr($scope5_id, "PatchAttr:#label/0 for", "for", uid, 0, 0)}>decl3</label>${_el_resume($scope5_id, "#label/0", 0)}<input${_patch_attr($scope5_id, "PatchAttr:#input/1 id", "id", uid, 0, 0)}>${_el_resume($scope5_id, "#input/1", 0)}`);
			_scope($scope5_id, {}, "__tests__/template.marko", "5:2");
			return 0;
		}
	}, $scope0_id, "#text/4", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/template.marko_5*shell"], $scope0_reason, 1);
	_if(() => {
		if (input.show) {
			const $scope6_id = _scope_id();
			const uid = _id("uid~4");
			_html(`<label${_patch_attr($scope6_id, "PatchAttr:#label/0 for", "for", uid, 0, 0)}>decl4</label>${_el_resume($scope6_id, "#label/0", 0)}<input${_patch_attr($scope6_id, "PatchAttr:#input/1 id", "id", uid, 0, 0)}>${_el_resume($scope6_id, "#input/1", 0)}`);
			_scope($scope6_id, {}, "__tests__/template.marko", "6:2");
			return 0;
		}
	}, $scope0_id, "#text/5", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/template.marko_6*shell"], $scope0_reason, 1);
	_if(() => {
		if (input.show) {
			const $scope7_id = _scope_id();
			const uid = _id("uid~5");
			_html(`<label${_patch_attr($scope7_id, "PatchAttr:#label/0 for", "for", uid, 0, 0)}>decl5</label>${_el_resume($scope7_id, "#label/0", 0)}<input${_patch_attr($scope7_id, "PatchAttr:#input/1 id", "id", uid, 0, 0)}>${_el_resume($scope7_id, "#input/1", 0)}`);
			_scope($scope7_id, {}, "__tests__/template.marko", "7:2");
			return 0;
		}
	}, $scope0_id, "#text/6", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/template.marko_7*shell"], $scope0_reason, 1);
	_if(() => {
		if (input.show) {
			const $scope8_id = _scope_id();
			const uid = _id("uid~6");
			_html(`<label${_patch_attr($scope8_id, "PatchAttr:#label/0 for", "for", uid, 0, 0)}>decl6</label>${_el_resume($scope8_id, "#label/0", 0)}<input${_patch_attr($scope8_id, "PatchAttr:#input/1 id", "id", uid, 0, 0)}>${_el_resume($scope8_id, "#input/1", 0)}`);
			_scope($scope8_id, {}, "__tests__/template.marko", "8:2");
			return 0;
		}
	}, $scope0_id, "#text/7", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/template.marko_8*shell"], $scope0_reason, 1);
	_if(() => {
		if (input.show) {
			const $scope9_id = _scope_id();
			const uid = _id("uid~7");
			_html(`<label${_patch_attr($scope9_id, "PatchAttr:#label/0 for", "for", uid, 0, 0)}>decl7</label>${_el_resume($scope9_id, "#label/0", 0)}<input${_patch_attr($scope9_id, "PatchAttr:#input/1 id", "id", uid, 0, 0)}>${_el_resume($scope9_id, "#input/1", 0)}`);
			_scope($scope9_id, {}, "__tests__/template.marko", "9:2");
			return 0;
		}
	}, $scope0_id, "#text/8", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/template.marko_9*shell"], $scope0_reason, 1);
	_if(() => {
		if (input.show) {
			const $scope10_id = _scope_id();
			const uid = _id("uid~8");
			_html(`<label${_patch_attr($scope10_id, "PatchAttr:#label/0 for", "for", uid, 0, 0)}>decl8</label>${_el_resume($scope10_id, "#label/0", 0)}<input${_patch_attr($scope10_id, "PatchAttr:#input/1 id", "id", uid, 0, 0)}>${_el_resume($scope10_id, "#input/1", 0)}`);
			_scope($scope10_id, {}, "__tests__/template.marko", "10:2");
			return 0;
		}
	}, $scope0_id, "#text/9", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/template.marko_10*shell"], $scope0_reason, 1);
	_if(() => {
		if (input.show) {
			const $scope11_id = _scope_id();
			const uid = _id("uid~9");
			_html(`<label${_patch_attr($scope11_id, "PatchAttr:#label/0 for", "for", uid, 0, 0)}>decl9</label>${_el_resume($scope11_id, "#label/0", 0)}<input${_patch_attr($scope11_id, "PatchAttr:#input/1 id", "id", uid, 0, 0)}>${_el_resume($scope11_id, "#input/1", 0)}`);
			_scope($scope11_id, {}, "__tests__/template.marko", "11:2");
			return 0;
		}
	}, $scope0_id, "#text/10", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/template.marko_11*shell"], $scope0_reason, 1);
	_if(() => {
		if (input.show) {
			const $scope12_id = _scope_id();
			const uid = _id("uid~10");
			_html(`<label${_patch_attr($scope12_id, "PatchAttr:#label/0 for", "for", uid, 0, 0)}>decl10</label>${_el_resume($scope12_id, "#label/0", 0)}<input${_patch_attr($scope12_id, "PatchAttr:#input/1 id", "id", uid, 0, 0)}>${_el_resume($scope12_id, "#input/1", 0)}`);
			_scope($scope12_id, {}, "__tests__/template.marko", "12:2");
			return 0;
		}
	}, $scope0_id, "#text/11", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/template.marko_12*shell"], $scope0_reason, 1);
	_if(() => {
		if (input.show) {
			const $scope13_id = _scope_id();
			const uid = _id("uid~11");
			_html(`<label${_patch_attr($scope13_id, "PatchAttr:#label/0 for", "for", uid, 0, 0)}>decl11</label>${_el_resume($scope13_id, "#label/0", 0)}<input${_patch_attr($scope13_id, "PatchAttr:#input/1 id", "id", uid, 0, 0)}>${_el_resume($scope13_id, "#input/1", 0)}`);
			_scope($scope13_id, {}, "__tests__/template.marko", "13:2");
			return 0;
		}
	}, $scope0_id, "#text/12", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/template.marko_13*shell"], $scope0_reason, 1);
	_if(() => {
		if (input.show) {
			const $scope14_id = _scope_id();
			const uid = _id("uid~12");
			_html(`<label${_patch_attr($scope14_id, "PatchAttr:#label/0 for", "for", uid, 0, 0)}>decl12</label>${_el_resume($scope14_id, "#label/0", 0)}<input${_patch_attr($scope14_id, "PatchAttr:#input/1 id", "id", uid, 0, 0)}>${_el_resume($scope14_id, "#input/1", 0)}`);
			_scope($scope14_id, {}, "__tests__/template.marko", "14:2");
			return 0;
		}
	}, $scope0_id, "#text/13", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/template.marko_14*shell"], $scope0_reason, 1);
	_if(() => {
		if (input.show) {
			const $scope15_id = _scope_id();
			const uid = _id("uid~13");
			_html(`<label${_patch_attr($scope15_id, "PatchAttr:#label/0 for", "for", uid, 0, 0)}>decl13</label>${_el_resume($scope15_id, "#label/0", 0)}<input${_patch_attr($scope15_id, "PatchAttr:#input/1 id", "id", uid, 0, 0)}>${_el_resume($scope15_id, "#input/1", 0)}`);
			_scope($scope15_id, {}, "__tests__/template.marko", "15:2");
			return 0;
		}
	}, $scope0_id, "#text/14", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/template.marko_15*shell"], $scope0_reason, 1);
	_if(() => {
		if (input.show) {
			const $scope16_id = _scope_id();
			const uid = _id("uid~14");
			_html(`<label${_patch_attr($scope16_id, "PatchAttr:#label/0 for", "for", uid, 0, 0)}>decl14</label>${_el_resume($scope16_id, "#label/0", 0)}<input${_patch_attr($scope16_id, "PatchAttr:#input/1 id", "id", uid, 0, 0)}>${_el_resume($scope16_id, "#input/1", 0)}`);
			_scope($scope16_id, {}, "__tests__/template.marko", "16:2");
			return 0;
		}
	}, $scope0_id, "#text/15", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/template.marko_16*shell"], $scope0_reason, 1);
	_if(() => {
		if (input.show) {
			const $scope17_id = _scope_id();
			const uid = _id("uid~15");
			_html(`<label${_patch_attr($scope17_id, "PatchAttr:#label/0 for", "for", uid, 0, 0)}>decl15</label>${_el_resume($scope17_id, "#label/0", 0)}<input${_patch_attr($scope17_id, "PatchAttr:#input/1 id", "id", uid, 0, 0)}>${_el_resume($scope17_id, "#input/1", 0)}`);
			_scope($scope17_id, {}, "__tests__/template.marko", "17:2");
			return 0;
		}
	}, $scope0_id, "#text/16", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/template.marko_17*shell"], $scope0_reason, 1);
	_if(() => {
		if (input.show) {
			const $scope18_id = _scope_id();
			const uid = _id("uid~16");
			_html(`<label${_patch_attr($scope18_id, "PatchAttr:#label/0 for", "for", uid, 0, 0)}>decl16</label>${_el_resume($scope18_id, "#label/0", 0)}<input${_patch_attr($scope18_id, "PatchAttr:#input/1 id", "id", uid, 0, 0)}>${_el_resume($scope18_id, "#input/1", 0)}`);
			_scope($scope18_id, {}, "__tests__/template.marko", "18:2");
			return 0;
		}
	}, $scope0_id, "#text/17", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/template.marko_18*shell"], $scope0_reason, 1);
	_if(() => {
		if (input.show) {
			const $scope19_id = _scope_id();
			const uid = _id("uid~17");
			_html(`<label${_patch_attr($scope19_id, "PatchAttr:#label/0 for", "for", uid, 0, 0)}>decl17</label>${_el_resume($scope19_id, "#label/0", 0)}<input${_patch_attr($scope19_id, "PatchAttr:#input/1 id", "id", uid, 0, 0)}>${_el_resume($scope19_id, "#input/1", 0)}`);
			_scope($scope19_id, {}, "__tests__/template.marko", "19:2");
			return 0;
		}
	}, $scope0_id, "#text/18", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/template.marko_19*shell"], $scope0_reason, 1);
	_if(() => {
		if (input.show) {
			const $scope20_id = _scope_id();
			const uid = _id("uid~18");
			_html(`<label${_patch_attr($scope20_id, "PatchAttr:#label/0 for", "for", uid, 0, 0)}>decl18</label>${_el_resume($scope20_id, "#label/0", 0)}<input${_patch_attr($scope20_id, "PatchAttr:#input/1 id", "id", uid, 0, 0)}>${_el_resume($scope20_id, "#input/1", 0)}`);
			_scope($scope20_id, {}, "__tests__/template.marko", "20:2");
			return 0;
		}
	}, $scope0_id, "#text/19", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/template.marko_20*shell"], $scope0_reason, 1);
	_if(() => {
		if (input.show) {
			const $scope21_id = _scope_id();
			const uid = _id("uid~19");
			_html(`<label${_patch_attr($scope21_id, "PatchAttr:#label/0 for", "for", uid, 0, 0)}>decl19</label>${_el_resume($scope21_id, "#label/0", 0)}<input${_patch_attr($scope21_id, "PatchAttr:#input/1 id", "id", uid, 0, 0)}>${_el_resume($scope21_id, "#input/1", 0)}`);
			_scope($scope21_id, {}, "__tests__/template.marko", "21:2");
			return 0;
		}
	}, $scope0_id, "#text/20", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/template.marko_21*shell"], $scope0_reason, 1);
	_if(() => {
		if (input.show) {
			const $scope22_id = _scope_id();
			const uid = _id("uid~20");
			_html(`<label${_patch_attr($scope22_id, "PatchAttr:#label/0 for", "for", uid, 0, 0)}>decl20</label>${_el_resume($scope22_id, "#label/0", 0)}<input${_patch_attr($scope22_id, "PatchAttr:#input/1 id", "id", uid, 0, 0)}>${_el_resume($scope22_id, "#input/1", 0)}`);
			_scope($scope22_id, {}, "__tests__/template.marko", "22:2");
			return 0;
		}
	}, $scope0_id, "#text/21", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/template.marko_22*shell"], $scope0_reason, 1);
	_if(() => {
		if (input.show) {
			const $scope23_id = _scope_id();
			const uid = _id("uid~21");
			_html(`<label${_patch_attr($scope23_id, "PatchAttr:#label/0 for", "for", uid, 0, 0)}>decl21</label>${_el_resume($scope23_id, "#label/0", 0)}<input${_patch_attr($scope23_id, "PatchAttr:#input/1 id", "id", uid, 0, 0)}>${_el_resume($scope23_id, "#input/1", 0)}`);
			_scope($scope23_id, {}, "__tests__/template.marko", "23:2");
			return 0;
		}
	}, $scope0_id, "#text/22", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/template.marko_23*shell"], $scope0_reason, 1);
	_if(() => {
		if (input.show) {
			const $scope24_id = _scope_id();
			const uid = _id("uid~22");
			_html(`<label${_patch_attr($scope24_id, "PatchAttr:#label/0 for", "for", uid, 0, 0)}>decl22</label>${_el_resume($scope24_id, "#label/0", 0)}<input${_patch_attr($scope24_id, "PatchAttr:#input/1 id", "id", uid, 0, 0)}>${_el_resume($scope24_id, "#input/1", 0)}`);
			_scope($scope24_id, {}, "__tests__/template.marko", "24:2");
			return 0;
		}
	}, $scope0_id, "#text/23", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/template.marko_24*shell"], $scope0_reason, 1);
	_if(() => {
		if (input.show) {
			const $scope25_id = _scope_id();
			const uid = _id("uid~23");
			_html(`<label${_patch_attr($scope25_id, "PatchAttr:#label/0 for", "for", uid, 0, 0)}>decl23</label>${_el_resume($scope25_id, "#label/0", 0)}<input${_patch_attr($scope25_id, "PatchAttr:#input/1 id", "id", uid, 0, 0)}>${_el_resume($scope25_id, "#input/1", 0)}`);
			_scope($scope25_id, {}, "__tests__/template.marko", "25:2");
			return 0;
		}
	}, $scope0_id, "#text/24", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/template.marko_25*shell"], $scope0_reason, 1);
	_if(() => {
		if (input.show) {
			const $scope26_id = _scope_id();
			const uid = _id("uid~24");
			_html(`<label${_patch_attr($scope26_id, "PatchAttr:#label/0 for", "for", uid, 0, 0)}>decl24</label>${_el_resume($scope26_id, "#label/0", 0)}<input${_patch_attr($scope26_id, "PatchAttr:#input/1 id", "id", uid, 0, 0)}>${_el_resume($scope26_id, "#input/1", 0)}`);
			_scope($scope26_id, {}, "__tests__/template.marko", "26:2");
			return 0;
		}
	}, $scope0_id, "#text/25", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/template.marko_26*shell"], $scope0_reason, 1);
	_if(() => {
		if (input.show) {
			const $scope27_id = _scope_id();
			const uid = _id("uid~25");
			_html(`<label${_patch_attr($scope27_id, "PatchAttr:#label/0 for", "for", uid, 0, 0)}>decl25</label>${_el_resume($scope27_id, "#label/0", 0)}<input${_patch_attr($scope27_id, "PatchAttr:#input/1 id", "id", uid, 0, 0)}>${_el_resume($scope27_id, "#input/1", 0)}`);
			_scope($scope27_id, {}, "__tests__/template.marko", "27:2");
			return 0;
		}
	}, $scope0_id, "#text/26", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/template.marko_27*shell"], $scope0_reason, 1);
	_if(() => {
		if (input.show) {
			const $scope28_id = _scope_id();
			const uid = _id("uid~26");
			_html(`<label${_patch_attr($scope28_id, "PatchAttr:#label/0 for", "for", uid, 0, 0)}>decl26</label>${_el_resume($scope28_id, "#label/0", 0)}<input${_patch_attr($scope28_id, "PatchAttr:#input/1 id", "id", uid, 0, 0)}>${_el_resume($scope28_id, "#input/1", 0)}`);
			_scope($scope28_id, {}, "__tests__/template.marko", "28:2");
			return 0;
		}
	}, $scope0_id, "#text/27", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/template.marko_28*shell"], $scope0_reason, 1);
	_if(() => {
		if (input.show) {
			const $scope29_id = _scope_id();
			const uid = _id("uid~27");
			_html(`<label${_patch_attr($scope29_id, "PatchAttr:#label/0 for", "for", uid, 0, 0)}>decl27</label>${_el_resume($scope29_id, "#label/0", 0)}<input${_patch_attr($scope29_id, "PatchAttr:#input/1 id", "id", uid, 0, 0)}>${_el_resume($scope29_id, "#input/1", 0)}`);
			_scope($scope29_id, {}, "__tests__/template.marko", "29:2");
			return 0;
		}
	}, $scope0_id, "#text/28", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/template.marko_29*shell"], $scope0_reason, 1);
	_if(() => {
		if (input.show) {
			const $scope30_id = _scope_id();
			const uid = _id("uid~28");
			_html(`<label${_patch_attr($scope30_id, "PatchAttr:#label/0 for", "for", uid, 0, 0)}>decl28</label>${_el_resume($scope30_id, "#label/0", 0)}<input${_patch_attr($scope30_id, "PatchAttr:#input/1 id", "id", uid, 0, 0)}>${_el_resume($scope30_id, "#input/1", 0)}`);
			_scope($scope30_id, {}, "__tests__/template.marko", "30:2");
			return 0;
		}
	}, $scope0_id, "#text/29", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/template.marko_30*shell"], $scope0_reason, 1);
	_if(() => {
		if (input.show) {
			const $scope31_id = _scope_id();
			const uid = _id("uid~29");
			_html(`<label${_patch_attr($scope31_id, "PatchAttr:#label/0 for", "for", uid, 0, 0)}>decl29</label>${_el_resume($scope31_id, "#label/0", 0)}<input${_patch_attr($scope31_id, "PatchAttr:#input/1 id", "id", uid, 0, 0)}>${_el_resume($scope31_id, "#input/1", 0)}`);
			_scope($scope31_id, {}, "__tests__/template.marko", "31:2");
			return 0;
		}
	}, $scope0_id, "#text/30", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/template.marko_31*shell"], $scope0_reason, 1);
	_if(() => {
		if (input.show) {
			const $scope32_id = _scope_id();
			const uid = _id("uid~30");
			_html(`<label${_patch_attr($scope32_id, "PatchAttr:#label/0 for", "for", uid, 0, 0)}>decl30</label>${_el_resume($scope32_id, "#label/0", 0)}<input${_patch_attr($scope32_id, "PatchAttr:#input/1 id", "id", uid, 0, 0)}>${_el_resume($scope32_id, "#input/1", 0)}`);
			_scope($scope32_id, {}, "__tests__/template.marko", "32:2");
			return 0;
		}
	}, $scope0_id, "#text/31", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/template.marko_32*shell"], $scope0_reason, 1);
	_if(() => {
		if (input.show) {
			const $scope33_id = _scope_id();
			const uid = _id("uid~31");
			_html(`<label${_patch_attr($scope33_id, "PatchAttr:#label/0 for", "for", uid, 0, 0)}>decl31</label>${_el_resume($scope33_id, "#label/0", 0)}<input${_patch_attr($scope33_id, "PatchAttr:#input/1 id", "id", uid, 0, 0)}>${_el_resume($scope33_id, "#input/1", 0)}`);
			_scope($scope33_id, {}, "__tests__/template.marko", "33:2");
			return 0;
		}
	}, $scope0_id, "#text/32", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/template.marko_33*shell"], $scope0_reason, 1);
	_if(() => {
		if (input.show) {
			const $scope34_id = _scope_id();
			const uid = _id("uid~32");
			_html(`<label${_patch_attr($scope34_id, "PatchAttr:#label/0 for", "for", uid, 0, 0)}>decl32</label>${_el_resume($scope34_id, "#label/0", 0)}<input${_patch_attr($scope34_id, "PatchAttr:#input/1 id", "id", uid, 0, 0)}>${_el_resume($scope34_id, "#input/1", 0)}`);
			_scope($scope34_id, {}, "__tests__/template.marko", "34:2");
			return 0;
		}
	}, $scope0_id, "#text/33", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/template.marko_34*shell"], $scope0_reason, 1);
	_if(() => {
		if (input.show) {
			const $scope35_id = _scope_id();
			const uid = _id("uid~33");
			_html(`<label${_patch_attr($scope35_id, "PatchAttr:#label/0 for", "for", uid, 0, 0)}>decl33</label>${_el_resume($scope35_id, "#label/0", 0)}<input${_patch_attr($scope35_id, "PatchAttr:#input/1 id", "id", uid, 0, 0)}>${_el_resume($scope35_id, "#input/1", 0)}`);
			_scope($scope35_id, {}, "__tests__/template.marko", "35:2");
			return 0;
		}
	}, $scope0_id, "#text/34", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/template.marko_35*shell"], $scope0_reason, 1);
	_if(() => {
		if (input.show) {
			const $scope36_id = _scope_id();
			const uid = _id("uid~34");
			_html(`<label${_patch_attr($scope36_id, "PatchAttr:#label/0 for", "for", uid, 0, 0)}>decl34</label>${_el_resume($scope36_id, "#label/0", 0)}<input${_patch_attr($scope36_id, "PatchAttr:#input/1 id", "id", uid, 0, 0)}>${_el_resume($scope36_id, "#input/1", 0)}`);
			_scope($scope36_id, {}, "__tests__/template.marko", "36:2");
			return 0;
		}
	}, $scope0_id, "#text/35", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/template.marko_36*shell"], $scope0_reason, 1);
	_if(() => {
		if (input.show) {
			const $scope37_id = _scope_id();
			const uid = _id("uid~35");
			_html(`<label${_patch_attr($scope37_id, "PatchAttr:#label/0 for", "for", uid, 0, 0)}>decl35</label>${_el_resume($scope37_id, "#label/0", 0)}<input${_patch_attr($scope37_id, "PatchAttr:#input/1 id", "id", uid, 0, 0)}>${_el_resume($scope37_id, "#input/1", 0)}`);
			_scope($scope37_id, {}, "__tests__/template.marko", "37:2");
			return 0;
		}
	}, $scope0_id, "#text/36", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/template.marko_37*shell"], $scope0_reason, 1);
	_if(() => {
		if (input.show) {
			const $scope38_id = _scope_id();
			const uid = _id("uid~36");
			_html(`<label${_patch_attr($scope38_id, "PatchAttr:#label/0 for", "for", uid, 0, 0)}>decl36</label>${_el_resume($scope38_id, "#label/0", 0)}<input${_patch_attr($scope38_id, "PatchAttr:#input/1 id", "id", uid, 0, 0)}>${_el_resume($scope38_id, "#input/1", 0)}`);
			_scope($scope38_id, {}, "__tests__/template.marko", "38:2");
			return 0;
		}
	}, $scope0_id, "#text/37", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/template.marko_38*shell"], $scope0_reason, 1);
	_if(() => {
		if (input.show) {
			const $scope39_id = _scope_id();
			const uid = _id("uid~37");
			_html(`<label${_patch_attr($scope39_id, "PatchAttr:#label/0 for", "for", uid, 0, 0)}>decl37</label>${_el_resume($scope39_id, "#label/0", 0)}<input${_patch_attr($scope39_id, "PatchAttr:#input/1 id", "id", uid, 0, 0)}>${_el_resume($scope39_id, "#input/1", 0)}`);
			_scope($scope39_id, {}, "__tests__/template.marko", "39:2");
			return 0;
		}
	}, $scope0_id, "#text/38", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/template.marko_39*shell"], $scope0_reason, 1);
	_if(() => {
		if (input.show) {
			const $scope40_id = _scope_id();
			const uid = _id("uid~38");
			_html(`<label${_patch_attr($scope40_id, "PatchAttr:#label/0 for", "for", uid, 0, 0)}>decl38</label>${_el_resume($scope40_id, "#label/0", 0)}<input${_patch_attr($scope40_id, "PatchAttr:#input/1 id", "id", uid, 0, 0)}>${_el_resume($scope40_id, "#input/1", 0)}`);
			_scope($scope40_id, {}, "__tests__/template.marko", "40:2");
			return 0;
		}
	}, $scope0_id, "#text/39", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/template.marko_40*shell"], $scope0_reason, 1);
	_if(() => {
		if (input.show) {
			const $scope41_id = _scope_id();
			const uid = _id("uid~39");
			_html(`<label${_patch_attr($scope41_id, "PatchAttr:#label/0 for", "for", uid, 0, 0)}>decl39</label>${_el_resume($scope41_id, "#label/0", 0)}<input${_patch_attr($scope41_id, "PatchAttr:#input/1 id", "id", uid, 0, 0)}>${_el_resume($scope41_id, "#input/1", 0)}`);
			_scope($scope41_id, {}, "__tests__/template.marko", "41:2");
			return 0;
		}
	}, $scope0_id, "#text/40", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/template.marko_41*shell"], $scope0_reason, 1);
	_if(() => {
		if (input.show) {
			const $scope42_id = _scope_id();
			const uid = _id("uid~40");
			_html(`<label${_patch_attr($scope42_id, "PatchAttr:#label/0 for", "for", uid, 0, 0)}>decl40</label>${_el_resume($scope42_id, "#label/0", 0)}<input${_patch_attr($scope42_id, "PatchAttr:#input/1 id", "id", uid, 0, 0)}>${_el_resume($scope42_id, "#input/1", 0)}`);
			_scope($scope42_id, {}, "__tests__/template.marko", "42:2");
			return 0;
		}
	}, $scope0_id, "#text/41", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/template.marko_42*shell"], $scope0_reason, 1);
	_if(() => {
		if (input.show) {
			const $scope43_id = _scope_id();
			const uid = _id("uid~41");
			_html(`<label${_patch_attr($scope43_id, "PatchAttr:#label/0 for", "for", uid, 0, 0)}>decl41</label>${_el_resume($scope43_id, "#label/0", 0)}<input${_patch_attr($scope43_id, "PatchAttr:#input/1 id", "id", uid, 0, 0)}>${_el_resume($scope43_id, "#input/1", 0)}`);
			_scope($scope43_id, {}, "__tests__/template.marko", "43:2");
			return 0;
		}
	}, $scope0_id, "#text/42", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/template.marko_43*shell"], $scope0_reason, 1);
	_if(() => {
		if (input.show) {
			const $scope44_id = _scope_id();
			const uid = _id("uid~42");
			_html(`<label${_patch_attr($scope44_id, "PatchAttr:#label/0 for", "for", uid, 0, 0)}>decl42</label>${_el_resume($scope44_id, "#label/0", 0)}<input${_patch_attr($scope44_id, "PatchAttr:#input/1 id", "id", uid, 0, 0)}>${_el_resume($scope44_id, "#input/1", 0)}`);
			_scope($scope44_id, {}, "__tests__/template.marko", "44:2");
			return 0;
		}
	}, $scope0_id, "#text/43", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/template.marko_44*shell"], $scope0_reason, 1);
	_if(() => {
		if (input.show) {
			const $scope45_id = _scope_id();
			const uid = _id("uid~43");
			_html(`<label${_patch_attr($scope45_id, "PatchAttr:#label/0 for", "for", uid, 0, 0)}>decl43</label>${_el_resume($scope45_id, "#label/0", 0)}<input${_patch_attr($scope45_id, "PatchAttr:#input/1 id", "id", uid, 0, 0)}>${_el_resume($scope45_id, "#input/1", 0)}`);
			_scope($scope45_id, {}, "__tests__/template.marko", "45:2");
			return 0;
		}
	}, $scope0_id, "#text/44", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/template.marko_45*shell"], $scope0_reason, 1);
	_if(() => {
		if (input.show) {
			const $scope46_id = _scope_id();
			const uid = _id("uid~44");
			_html(`<label${_patch_attr($scope46_id, "PatchAttr:#label/0 for", "for", uid, 0, 0)}>decl44</label>${_el_resume($scope46_id, "#label/0", 0)}<input${_patch_attr($scope46_id, "PatchAttr:#input/1 id", "id", uid, 0, 0)}>${_el_resume($scope46_id, "#input/1", 0)}`);
			_scope($scope46_id, {}, "__tests__/template.marko", "46:2");
			return 0;
		}
	}, $scope0_id, "#text/45", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/template.marko_46*shell"], $scope0_reason, 1);
	_if(() => {
		if (input.show) {
			const $scope47_id = _scope_id();
			const uid = _id("uid~45");
			_html(`<label${_patch_attr($scope47_id, "PatchAttr:#label/0 for", "for", uid, 0, 0)}>decl45</label>${_el_resume($scope47_id, "#label/0", 0)}<input${_patch_attr($scope47_id, "PatchAttr:#input/1 id", "id", uid, 0, 0)}>${_el_resume($scope47_id, "#input/1", 0)}`);
			_scope($scope47_id, {}, "__tests__/template.marko", "47:2");
			return 0;
		}
	}, $scope0_id, "#text/46", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/template.marko_47*shell"], $scope0_reason, 1);
	_if(() => {
		if (input.show) {
			const $scope48_id = _scope_id();
			const uid = _id("uid~46");
			_html(`<label${_patch_attr($scope48_id, "PatchAttr:#label/0 for", "for", uid, 0, 0)}>decl46</label>${_el_resume($scope48_id, "#label/0", 0)}<input${_patch_attr($scope48_id, "PatchAttr:#input/1 id", "id", uid, 0, 0)}>${_el_resume($scope48_id, "#input/1", 0)}`);
			_scope($scope48_id, {}, "__tests__/template.marko", "48:2");
			return 0;
		}
	}, $scope0_id, "#text/47", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/template.marko_48*shell"], $scope0_reason, 1);
	_if(() => {
		if (input.show) {
			const $scope49_id = _scope_id();
			const uid = _id("uid~47");
			_html(`<label${_patch_attr($scope49_id, "PatchAttr:#label/0 for", "for", uid, 0, 0)}>decl47</label>${_el_resume($scope49_id, "#label/0", 0)}<input${_patch_attr($scope49_id, "PatchAttr:#input/1 id", "id", uid, 0, 0)}>${_el_resume($scope49_id, "#input/1", 0)}`);
			_scope($scope49_id, {}, "__tests__/template.marko", "49:2");
			return 0;
		}
	}, $scope0_id, "#text/48", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/template.marko_49*shell"], $scope0_reason, 1);
	_if(() => {
		if (input.show) {
			const $scope50_id = _scope_id();
			const uid = _id("uid~48");
			_html(`<label${_patch_attr($scope50_id, "PatchAttr:#label/0 for", "for", uid, 0, 0)}>decl48</label>${_el_resume($scope50_id, "#label/0", 0)}<input${_patch_attr($scope50_id, "PatchAttr:#input/1 id", "id", uid, 0, 0)}>${_el_resume($scope50_id, "#input/1", 0)}`);
			_scope($scope50_id, {}, "__tests__/template.marko", "50:2");
			return 0;
		}
	}, $scope0_id, "#text/49", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/template.marko_50*shell"], $scope0_reason, 1);
	_if(() => {
		if (input.show) {
			const $scope51_id = _scope_id();
			const uid = _id("uid~49");
			_html(`<label${_patch_attr($scope51_id, "PatchAttr:#label/0 for", "for", uid, 0, 0)}>decl49</label>${_el_resume($scope51_id, "#label/0", 0)}<input${_patch_attr($scope51_id, "PatchAttr:#input/1 id", "id", uid, 0, 0)}>${_el_resume($scope51_id, "#input/1", 0)}`);
			_scope($scope51_id, {}, "__tests__/template.marko", "51:2");
			return 0;
		}
	}, $scope0_id, "#text/50", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/template.marko_51*shell"], $scope0_reason, 1);
	_if(() => {
		if (input.show) {
			const $scope52_id = _scope_id();
			const uid = _id("uid~50");
			_html(`<label${_patch_attr($scope52_id, "PatchAttr:#label/0 for", "for", uid, 0, 0)}>decl50</label>${_el_resume($scope52_id, "#label/0", 0)}<input${_patch_attr($scope52_id, "PatchAttr:#input/1 id", "id", uid, 0, 0)}>${_el_resume($scope52_id, "#input/1", 0)}`);
			_scope($scope52_id, {}, "__tests__/template.marko", "52:2");
			return 0;
		}
	}, $scope0_id, "#text/51", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/template.marko_52*shell"], $scope0_reason, 1);
	_if(() => {
		if (input.show) {
			const $scope53_id = _scope_id();
			const uid = _id("uid~51");
			_html(`<label${_patch_attr($scope53_id, "PatchAttr:#label/0 for", "for", uid, 0, 0)}>decl51</label>${_el_resume($scope53_id, "#label/0", 0)}<input${_patch_attr($scope53_id, "PatchAttr:#input/1 id", "id", uid, 0, 0)}>${_el_resume($scope53_id, "#input/1", 0)}`);
			_scope($scope53_id, {}, "__tests__/template.marko", "53:2");
			return 0;
		}
	}, $scope0_id, "#text/52", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/template.marko_53*shell"], $scope0_reason, 1);
	_if(() => {
		if (input.show) {
			const $scope54_id = _scope_id();
			const uid = _id("uid~52");
			_html(`<label${_patch_attr($scope54_id, "PatchAttr:#label/0 for", "for", uid, 0, 0)}>decl52</label>${_el_resume($scope54_id, "#label/0", 0)}<input${_patch_attr($scope54_id, "PatchAttr:#input/1 id", "id", uid, 0, 0)}>${_el_resume($scope54_id, "#input/1", 0)}`);
			_scope($scope54_id, {}, "__tests__/template.marko", "54:2");
			return 0;
		}
	}, $scope0_id, "#text/53", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/template.marko_54*shell"], $scope0_reason, 1);
	_if(() => {
		if (input.show) {
			const $scope55_id = _scope_id();
			const uid = _id("uid~53");
			_html(`<label${_patch_attr($scope55_id, "PatchAttr:#label/0 for", "for", uid, 0, 0)}>decl53</label>${_el_resume($scope55_id, "#label/0", 0)}<input${_patch_attr($scope55_id, "PatchAttr:#input/1 id", "id", uid, 0, 0)}>${_el_resume($scope55_id, "#input/1", 0)}`);
			_scope($scope55_id, {}, "__tests__/template.marko", "55:2");
			return 0;
		}
	}, $scope0_id, "#text/54", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/template.marko_55*shell"], $scope0_reason, 1);
	_if(() => {
		if (input.show) {
			const $scope56_id = _scope_id();
			const uid = _id("uid~54");
			_html(`<label${_patch_attr($scope56_id, "PatchAttr:#label/0 for", "for", uid, 0, 0)}>decl54</label>${_el_resume($scope56_id, "#label/0", 0)}<input${_patch_attr($scope56_id, "PatchAttr:#input/1 id", "id", uid, 0, 0)}>${_el_resume($scope56_id, "#input/1", 0)}`);
			_scope($scope56_id, {}, "__tests__/template.marko", "56:2");
			return 0;
		}
	}, $scope0_id, "#text/55", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/template.marko_56*shell"], $scope0_reason, 1);
	_if(() => {
		if (input.show) {
			const $scope57_id = _scope_id();
			const uid = _id("uid~55");
			_html(`<label${_patch_attr($scope57_id, "PatchAttr:#label/0 for", "for", uid, 0, 0)}>decl55</label>${_el_resume($scope57_id, "#label/0", 0)}<input${_patch_attr($scope57_id, "PatchAttr:#input/1 id", "id", uid, 0, 0)}>${_el_resume($scope57_id, "#input/1", 0)}`);
			_scope($scope57_id, {}, "__tests__/template.marko", "57:2");
			return 0;
		}
	}, $scope0_id, "#text/56", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/template.marko_57*shell"], $scope0_reason, 1);
	_if(() => {
		if (input.show) {
			const $scope58_id = _scope_id();
			const uid = _id("uid~56");
			_html(`<label${_patch_attr($scope58_id, "PatchAttr:#label/0 for", "for", uid, 0, 0)}>decl56</label>${_el_resume($scope58_id, "#label/0", 0)}<input${_patch_attr($scope58_id, "PatchAttr:#input/1 id", "id", uid, 0, 0)}>${_el_resume($scope58_id, "#input/1", 0)}`);
			_scope($scope58_id, {}, "__tests__/template.marko", "58:2");
			return 0;
		}
	}, $scope0_id, "#text/57", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/template.marko_58*shell"], $scope0_reason, 1);
	_if(() => {
		if (input.show) {
			const $scope59_id = _scope_id();
			const uid = _id("uid~57");
			_html(`<label${_patch_attr($scope59_id, "PatchAttr:#label/0 for", "for", uid, 0, 0)}>decl57</label>${_el_resume($scope59_id, "#label/0", 0)}<input${_patch_attr($scope59_id, "PatchAttr:#input/1 id", "id", uid, 0, 0)}>${_el_resume($scope59_id, "#input/1", 0)}`);
			_scope($scope59_id, {}, "__tests__/template.marko", "59:2");
			return 0;
		}
	}, $scope0_id, "#text/58", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/template.marko_59*shell"], $scope0_reason, 1);
	_if(() => {
		if (input.show) {
			const $scope60_id = _scope_id();
			const uid = _id("uid~58");
			_html(`<label${_patch_attr($scope60_id, "PatchAttr:#label/0 for", "for", uid, 0, 0)}>decl58</label>${_el_resume($scope60_id, "#label/0", 0)}<input${_patch_attr($scope60_id, "PatchAttr:#input/1 id", "id", uid, 0, 0)}>${_el_resume($scope60_id, "#input/1", 0)}`);
			_scope($scope60_id, {}, "__tests__/template.marko", "60:2");
			return 0;
		}
	}, $scope0_id, "#text/59", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/template.marko_60*shell"], $scope0_reason, 1);
	_if(() => {
		if (input.show) {
			const $scope61_id = _scope_id();
			const uid = _id("uid~59");
			_html(`<label${_patch_attr($scope61_id, "PatchAttr:#label/0 for", "for", uid, 0, 0)}>decl59</label>${_el_resume($scope61_id, "#label/0", 0)}<input${_patch_attr($scope61_id, "PatchAttr:#input/1 id", "id", uid, 0, 0)}>${_el_resume($scope61_id, "#input/1", 0)}`);
			_scope($scope61_id, {}, "__tests__/template.marko", "61:2");
			return 0;
		}
	}, $scope0_id, "#text/60", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/template.marko_61*shell"], $scope0_reason, 1);
	const $childScope = _patch_child($scope0_id, "#childScope/61", 0);
	field_default({});
	_patch_child_end();
	const $childScope2 = _patch_child($scope0_id, "#childScope/62", 1);
	field_default({});
	_patch_child_end();
	const $childScope3 = _patch_child($scope0_id, "#childScope/63", 2);
	field_default({});
	_patch_child_end();
	const $childScope4 = _patch_child($scope0_id, "#childScope/64", 3);
	field_default({});
	_patch_child_end();
	const $childScope5 = _patch_child($scope0_id, "#childScope/65", 4);
	field_default({});
	_patch_child_end();
	const $childScope6 = _patch_child($scope0_id, "#childScope/66", 5);
	field_default({});
	_patch_child_end();
	const $childScope7 = _patch_child($scope0_id, "#childScope/67", 6);
	field_default({});
	_patch_child_end();
	const $childScope8 = _patch_child($scope0_id, "#childScope/68", 7);
	field_default({});
	_patch_child_end();
	const $childScope9 = _patch_child($scope0_id, "#childScope/69", 8);
	field_default({});
	_patch_child_end();
	const $childScope10 = _patch_child($scope0_id, "#childScope/70", 9);
	field_default({});
	_patch_child_end();
	const $childScope11 = _patch_child($scope0_id, "#childScope/71", 10);
	field_default({});
	_patch_child_end();
	const $childScope12 = _patch_child($scope0_id, "#childScope/72", 11);
	field_default({});
	_patch_child_end();
	_scope($scope0_id, {
		"#childScope/61": _existing_scope($childScope),
		"#childScope/62": _existing_scope($childScope2),
		"#childScope/63": _existing_scope($childScope3),
		"#childScope/64": _existing_scope($childScope4),
		"#childScope/65": _existing_scope($childScope5),
		"#childScope/66": _existing_scope($childScope6),
		"#childScope/67": _existing_scope($childScope7),
		"#childScope/68": _existing_scope($childScope8),
		"#childScope/69": _existing_scope($childScope9),
		"#childScope/70": _existing_scope($childScope10),
		"#childScope/71": _existing_scope($childScope11),
		"#childScope/72": _existing_scope($childScope12)
	}, "__tests__/template.marko", 0);
}, 1);
