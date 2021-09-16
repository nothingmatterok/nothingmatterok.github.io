window.skins=window.skins||{};
                var __extends = this && this.__extends|| function (d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = window.generateEUI||{};
                generateEUI.paths = generateEUI.paths||{};
                generateEUI.styles = undefined;
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml","StartPanel":"resource/eui_skins/StartPanelSkin.exml","MainUI":"resource/eui_skins/MainUISkin.exml","L1MainUI":"resource/eui_skins/L1/L1MainUISkin.exml","L2MainUI":"resource/eui_skins/L2/L2MainUISkin.exml","L1BattleSceneUI":"resource/eui_skins/L1/L1BattleSceneUISkin.exml","L1CharPortr":"resource/eui_skins/L1/L1CharPortrSkin.exml","L1TouchLabel":"resource/eui_skins/L1/L1TouchLabelSkin.exml","L1BattleInfo":"resource/eui_skins/L1/L1CharBattleInfoSkin.exml"};generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
	__extends(ButtonSkin, _super);
	function ButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","iconDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.iconDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
	}
	var _proto = ButtonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	return ButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/CheckBoxSkin.exml'] = window.skins.CheckBoxSkin = (function (_super) {
	__extends(CheckBoxSkin, _super);
	function CheckBoxSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_disabled_png")
				])
		];
	}
	var _proto = CheckBoxSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "checkbox_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return CheckBoxSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HScrollBarSkin.exml'] = window.skins.HScrollBarSkin = (function (_super) {
	__extends(HScrollBarSkin, _super);
	function HScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = HScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 8;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.verticalCenter = 0;
		t.width = 30;
		return t;
	};
	return HScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HSliderSkin.exml'] = window.skins.HSliderSkin = (function (_super) {
	__extends(HSliderSkin, _super);
	function HSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = HSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.height = 6;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_sb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.source = "thumb_png";
		t.verticalCenter = 0;
		return t;
	};
	return HSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ItemRendererSkin.exml'] = window.skins.ItemRendererSkin = (function (_super) {
	__extends(ItemRendererSkin, _super);
	function ItemRendererSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this.labelDisplay,"text");
	}
	var _proto = ItemRendererSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.fontFamily = "Tahoma";
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	return ItemRendererSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/L1/L1BattleSceneUISkin.exml'] = window.L1BattleSceneUISkin = (function (_super) {
	__extends(L1BattleSceneUISkin, _super);
	function L1BattleSceneUISkin() {
		_super.call(this);
		this.skinParts = ["backButton","battleStartButton","nextLevelButton","portImageGroup","portScroller","mainStoryLevelName","charBattleInfo"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this.backButton_i(),this.battleStartButton_i(),this.nextLevelButton_i(),this.portScroller_i(),this.mainStoryLevelName_i(),this.charBattleInfo_i()];
	}
	var _proto = L1BattleSceneUISkin.prototype;

	_proto.backButton_i = function () {
		var t = new eui.Button();
		this.backButton = t;
		t.label = "返回";
		t.left = 30;
		t.top = 30;
		return t;
	};
	_proto.battleStartButton_i = function () {
		var t = new eui.Button();
		this.battleStartButton = t;
		t.bottom = 173;
		t.height = 100;
		t.label = "开始战斗";
		t.right = 19;
		return t;
	};
	_proto.nextLevelButton_i = function () {
		var t = new eui.Button();
		this.nextLevelButton = t;
		t.bottom = 173;
		t.height = 100;
		t.label = "Next";
		t.right = 19;
		t.visible = false;
		t.x = 531;
		t.y = 873;
		return t;
	};
	_proto.portScroller_i = function () {
		var t = new eui.Scroller();
		this.portScroller = t;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.height = 140;
		t.left = 0;
		t.percentWidth = 100;
		t.viewport = this.portImageGroup_i();
		return t;
	};
	_proto.portImageGroup_i = function () {
		var t = new eui.Group();
		this.portImageGroup = t;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.mainStoryLevelName_i = function () {
		var t = new eui.Label();
		this.mainStoryLevelName = t;
		t.horizontalCenter = 0;
		t.text = "x关";
		t.top = 100;
		return t;
	};
	_proto.charBattleInfo_i = function () {
		var t = new L1BattleInfo();
		this.charBattleInfo = t;
		t.percentHeight = 100;
		t.visible = false;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return L1BattleSceneUISkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/L1/L1CharBattleInfoSkin.exml'] = window.L1CharBattleInfoSkin = (function (_super) {
	__extends(L1CharBattleInfoSkin, _super);
	function L1CharBattleInfoSkin() {
		_super.call(this);
		this.skinParts = ["bgRect","charNameLabel","atkNumLabel","defNumLabel","critPLabel","critRLabel","dodgeLabel","rangeLabel","buffScrollerGroup","buffScroller","skillScrollerGroup","skillScroller","hpRateRect","angerRateRect","maxHpLabel","descrLabel","descrGroup"];
		
		this.height = 800;
		this.width = 500;
		this.elementsContent = [this.bgRect_i(),this._Group14_i(),this.descrGroup_i()];
	}
	var _proto = L1CharBattleInfoSkin.prototype;

	_proto.bgRect_i = function () {
		var t = new eui.Rect();
		this.bgRect = t;
		t.fillAlpha = 0.2;
		t.fillColor = 0xFFFFFF;
		t.percentHeight = 100;
		t.visible = true;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group14_i = function () {
		var t = new eui.Group();
		t.height = 550;
		t.horizontalCenter = 0;
		t.top = 100;
		t.width = 400;
		t.elementsContent = [this._Rect1_i(),this._Rect2_i(),this._Rect3_i(),this._Label1_i(),this._Label2_i(),this._Group1_i(),this._Group2_i(),this._Group3_i(),this._Group4_i(),this._Group5_i(),this._Group6_i(),this._Group7_i(),this._Group8_i(),this._Group9_i(),this._Group10_i(),this._Group11_i(),this._Group12_i(),this._Group13_i(),this.buffScroller_i(),this.skillScroller_i(),this.hpRateRect_i(),this.angerRateRect_i(),this.maxHpLabel_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.5;
		t.fillAlpha = 1;
		t.percentHeight = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.4;
		t.bottom = 180;
		t.fillAlpha = 0.5;
		t.height = 120;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.percentWidth = 90;
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.4;
		t.bottom = 30;
		t.fillAlpha = 0.5;
		t.height = 120;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.percentWidth = 90;
		t.x = 30;
		t.y = 360;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bottom = 105;
		t.left = -20;
		t.rotation = 340;
		t.size = 45;
		t.text = "SKILLS";
		t.textColor = 0xFF8C00;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.bottom = 245;
		t.left = -20;
		t.rotation = 340;
		t.size = 45;
		t.text = "STATUS";
		t.textColor = 0xFF8C00;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 61;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.percentWidth = 100;
		t.x = 0;
		t.y = -312.99;
		t.elementsContent = [this._Rect4_i(),this.charNameLabel_i()];
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 0;
		t.ellipseWidth = 0;
		t.fillAlpha = 0.5;
		t.fillColor = 0x696969;
		t.percentHeight = 100;
		t.visible = true;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.charNameLabel_i = function () {
		var t = new eui.Label();
		this.charNameLabel = t;
		t.horizontalCenter = 0;
		t.size = 30;
		t.text = "四字角色";
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 80;
		t.x = 20;
		t.y = 80;
		t.elementsContent = [this._Rect5_i(),this._Label3_i()];
		return t;
	};
	_proto._Rect5_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0xFF8C00;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "攻击";
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 80;
		t.x = 110;
		t.y = 80;
		t.elementsContent = [this._Rect6_i(),this.atkNumLabel_i()];
		return t;
	};
	_proto._Rect6_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0xFF8C00;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.atkNumLabel_i = function () {
		var t = new eui.Label();
		this.atkNumLabel = t;
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "120";
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 80;
		t.x = 220;
		t.y = 80;
		t.elementsContent = [this._Rect7_i(),this._Label4_i()];
		return t;
	};
	_proto._Rect7_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0xFF8C00;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "防御";
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 80;
		t.x = 310;
		t.y = 80;
		t.elementsContent = [this._Rect8_i(),this.defNumLabel_i()];
		return t;
	};
	_proto._Rect8_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0xFF8C00;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.defNumLabel_i = function () {
		var t = new eui.Label();
		this.defNumLabel = t;
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "120";
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 80;
		t.x = 20.207;
		t.y = 131;
		t.elementsContent = [this._Rect9_i(),this._Label5_i()];
		return t;
	};
	_proto._Rect9_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0xFF8C00;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "暴击";
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 80;
		t.x = 110.207;
		t.y = 131;
		t.elementsContent = [this._Rect10_i(),this.critPLabel_i()];
		return t;
	};
	_proto._Rect10_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0xFF8C00;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.critPLabel_i = function () {
		var t = new eui.Label();
		this.critPLabel = t;
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "120";
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 80;
		t.x = 220.207;
		t.y = 131;
		t.elementsContent = [this._Rect11_i(),this._Label6_i()];
		return t;
	};
	_proto._Rect11_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0xFF8C00;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "爆伤";
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 80;
		t.x = 310.207;
		t.y = 131;
		t.elementsContent = [this._Rect12_i(),this.critRLabel_i()];
		return t;
	};
	_proto._Rect12_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0xFF8C00;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.critRLabel_i = function () {
		var t = new eui.Label();
		this.critRLabel = t;
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "120";
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group10_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 80;
		t.x = 20.211;
		t.y = 178;
		t.elementsContent = [this._Rect13_i(),this._Label7_i()];
		return t;
	};
	_proto._Rect13_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0xFF8C00;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "闪避";
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group11_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 80;
		t.x = 110.211;
		t.y = 178;
		t.elementsContent = [this._Rect14_i(),this.dodgeLabel_i()];
		return t;
	};
	_proto._Rect14_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0xFF8C00;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.dodgeLabel_i = function () {
		var t = new eui.Label();
		this.dodgeLabel = t;
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "120";
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group12_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 80;
		t.x = 220.211;
		t.y = 178;
		t.elementsContent = [this._Rect15_i(),this._Label8_i()];
		return t;
	};
	_proto._Rect15_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0xFF8C00;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "射程";
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group13_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 80;
		t.x = 310.211;
		t.y = 178;
		t.elementsContent = [this._Rect16_i(),this.rangeLabel_i()];
		return t;
	};
	_proto._Rect16_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0xFF8C00;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.rangeLabel_i = function () {
		var t = new eui.Label();
		this.rangeLabel = t;
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "120";
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		return t;
	};
	_proto.buffScroller_i = function () {
		var t = new eui.Scroller();
		this.buffScroller = t;
		t.bottom = 180;
		t.height = 120;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.percentWidth = 90;
		t.x = -402;
		t.y = -72.99999999999997;
		t.viewport = this.buffScrollerGroup_i();
		return t;
	};
	_proto.buffScrollerGroup_i = function () {
		var t = new eui.Group();
		this.buffScrollerGroup = t;
		return t;
	};
	_proto.skillScroller_i = function () {
		var t = new eui.Scroller();
		this.skillScroller = t;
		t.bottom = 30;
		t.height = 120;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.percentWidth = 90;
		t.x = -402.9999999999999;
		t.y = 107.00000000000001;
		t.viewport = this.skillScrollerGroup_i();
		return t;
	};
	_proto.skillScrollerGroup_i = function () {
		var t = new eui.Group();
		this.skillScrollerGroup = t;
		t.x = 1;
		t.y = 22;
		return t;
	};
	_proto.hpRateRect_i = function () {
		var t = new eui.Rect();
		this.hpRateRect = t;
		t.fillColor = 0x32CD32;
		t.height = 5;
		t.percentWidth = 38;
		t.x = 0;
		t.y = 60;
		return t;
	};
	_proto.angerRateRect_i = function () {
		var t = new eui.Rect();
		this.angerRateRect = t;
		t.bottom = 0;
		t.fillColor = 0xFF8C00;
		t.height = 5;
		t.percentWidth = 0;
		t.x = 0;
		return t;
	};
	_proto.maxHpLabel_i = function () {
		var t = new eui.Label();
		this.maxHpLabel = t;
		t.right = 0;
		t.size = 25;
		t.text = "2000";
		t.y = 36;
		return t;
	};
	_proto.descrGroup_i = function () {
		var t = new eui.Group();
		this.descrGroup = t;
		t.height = 100;
		t.horizontalCenter = 0;
		t.visible = false;
		t.width = 400;
		t.y = 660;
		t.elementsContent = [this._Rect17_i(),this.descrLabel_i()];
		return t;
	};
	_proto._Rect17_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.5;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.descrLabel_i = function () {
		var t = new eui.Label();
		this.descrLabel = t;
		t.left = 10;
		t.right = 10;
		t.size = 20;
		t.text = "Label";
		t.top = 5;
		return t;
	};
	return L1CharBattleInfoSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/L1/L1CharPortrSkin.exml'] = window.L1CharPortrSkin = (function (_super) {
	__extends(L1CharPortrSkin, _super);
	function L1CharPortrSkin() {
		_super.call(this);
		this.skinParts = ["angerNumCircle","hpBg","hpNumCircle","portMask","portImage","rotationPoint","rotationCircle","dizzLabel","slientLabel","contentGroup"];
		
		this.height = 100;
		this.width = 100;
		this.elementsContent = [this._Group2_i()];
	}
	var _proto = L1CharPortrSkin.prototype;

	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 100;
		t.width = 100;
		t.x = -50;
		t.y = -50;
		t.elementsContent = [this.contentGroup_i()];
		return t;
	};
	_proto.contentGroup_i = function () {
		var t = new eui.Group();
		this.contentGroup = t;
		t.height = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 100;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.angerNumCircle_i(),this.hpBg_i(),this.hpNumCircle_i(),this.portMask_i(),this.portImage_i(),this._Group1_i(),this.dizzLabel_i(),this.slientLabel_i()];
		return t;
	};
	_proto.angerNumCircle_i = function () {
		var t = new eui.Rect();
		this.angerNumCircle = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 100;
		t.ellipseWidth = 100;
		t.fillColor = 0xFF8C00;
		t.height = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.strokeColor = 0xFF8C00;
		t.touchEnabled = false;
		t.width = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.hpBg_i = function () {
		var t = new eui.Rect();
		this.hpBg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 90;
		t.ellipseWidth = 90;
		t.fillColor = 0x696969;
		t.height = 90;
		t.scaleX = 1;
		t.scaleY = 1;
		t.strokeColor = 0xFF8C00;
		t.touchEnabled = false;
		t.width = 90;
		t.x = 5;
		t.y = 5;
		return t;
	};
	_proto.hpNumCircle_i = function () {
		var t = new eui.Rect();
		this.hpNumCircle = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 90;
		t.ellipseWidth = 90;
		t.fillColor = 0x8B0000;
		t.height = 90;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchEnabled = false;
		t.width = 90;
		t.x = 5;
		t.y = 5;
		return t;
	};
	_proto.portMask_i = function () {
		var t = new eui.Rect();
		this.portMask = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 120;
		t.ellipseWidth = 120;
		t.fillColor = 0xB1B1B1;
		t.height = 80;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchEnabled = false;
		t.width = 80;
		t.x = 10;
		t.y = 10;
		return t;
	};
	_proto.portImage_i = function () {
		var t = new eui.Image();
		this.portImage = t;
		t.fillMode = "scale";
		t.height = 120;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchEnabled = false;
		t.visible = true;
		t.width = 120;
		t.x = -10;
		t.y = -10;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 100;
		t.visible = true;
		t.width = 100;
		t.x = 50;
		t.y = 50;
		t.elementsContent = [this.rotationCircle_i()];
		return t;
	};
	_proto.rotationCircle_i = function () {
		var t = new eui.Group();
		this.rotationCircle = t;
		t.height = 50;
		t.rotation = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchEnabled = false;
		t.width = 50;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.rotationPoint_i()];
		return t;
	};
	_proto.rotationPoint_i = function () {
		var t = new eui.Rect();
		this.rotationPoint = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 8;
		t.ellipseWidth = 8;
		t.fillColor = 0xFF4500;
		t.height = 8;
		t.right = -9;
		t.scaleX = 1;
		t.scaleY = 1;
		t.strokeColor = 0xFF8C00;
		t.top = -4;
		t.touchEnabled = false;
		t.width = 8;
		return t;
	};
	_proto.dizzLabel_i = function () {
		var t = new eui.Label();
		this.dizzLabel = t;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "眩晕";
		t.textColor = 0xFF0000;
		t.verticalCenter = -19;
		t.visible = false;
		return t;
	};
	_proto.slientLabel_i = function () {
		var t = new eui.Label();
		this.slientLabel = t;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "沉默";
		t.textColor = 0xFF0000;
		t.verticalCenter = 6;
		t.visible = false;
		t.x = 30;
		t.y = 45;
		return t;
	};
	return L1CharPortrSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/L1/L1MainUISkin.exml'] = window.L1MainUISkin = (function (_super) {
	__extends(L1MainUISkin, _super);
	function L1MainUISkin() {
		_super.call(this);
		this.skinParts = ["mainStoryButton","roughlikeButton","backButton"];
		
		this.height = 300;
		this.width = 400;
		this.elementsContent = [this._Group1_i(),this.backButton_i()];
	}
	var _proto = L1MainUISkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.mainStoryButton_i(),this.roughlikeButton_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 50;
		t.horizontalAlign = "center";
		t.paddingBottom = 100;
		t.paddingLeft = 100;
		t.paddingRight = 100;
		t.paddingTop = 100;
		t.verticalAlign = "top";
		return t;
	};
	_proto.mainStoryButton_i = function () {
		var t = new eui.Button();
		this.mainStoryButton = t;
		t.anchorOffsetY = 0;
		t.height = 200;
		t.label = "主线";
		t.left = 80;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 150;
		t.width = 200;
		t.x = 350;
		t.y = 99.99999999999999;
		return t;
	};
	_proto.roughlikeButton_i = function () {
		var t = new eui.Button();
		this.roughlikeButton = t;
		t.height = 200;
		t.label = "肉鸽";
		t.left = 220;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 150;
		t.width = 200;
		t.x = 219.99999999999997;
		t.y = 150;
		return t;
	};
	_proto.backButton_i = function () {
		var t = new eui.Button();
		this.backButton = t;
		t.label = "返回";
		t.left = 30;
		t.top = 30;
		return t;
	};
	return L1MainUISkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/L1/L1TouchLabelSkin.exml'] = window.L1TouchLabelSkin = (function (_super) {
	__extends(L1TouchLabelSkin, _super);
	function L1TouchLabelSkin() {
		_super.call(this);
		this.skinParts = ["cdRect","nameLabel","buffTierLabel","skillPreStateLabel","skillCDLabel"];
		
		this.height = 100;
		this.width = 200;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = L1TouchLabelSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.elementsContent = [this._Rect1_i(),this.cdRect_i(),this.nameLabel_i(),this.buffTierLabel_i(),this.skillPreStateLabel_i(),this.skillCDLabel_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 30;
		t.ellipseWidth = 30;
		t.fillColor = 0xD2B48C;
		t.percentHeight = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.cdRect_i = function () {
		var t = new eui.Rect();
		this.cdRect = t;
		t.bottom = 0;
		t.ellipseHeight = 30;
		t.ellipseWidth = 30;
		t.fillAlpha = 0.5;
		t.fillColor = 0x696969;
		t.percentHeight = 100;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.strokeAlpha = 1;
		t.visible = true;
		t.width = 0;
		return t;
	};
	_proto.nameLabel_i = function () {
		var t = new eui.Label();
		this.nameLabel = t;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "Label";
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		return t;
	};
	_proto.buffTierLabel_i = function () {
		var t = new eui.Label();
		this.buffTierLabel = t;
		t.bottom = 5;
		t.right = 5;
		t.size = 20;
		t.text = "x3";
		t.visible = false;
		return t;
	};
	_proto.skillPreStateLabel_i = function () {
		var t = new eui.Label();
		this.skillPreStateLabel = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "等待释放";
		t.textColor = 0x8B0000;
		t.top = 5;
		t.visible = false;
		return t;
	};
	_proto.skillCDLabel_i = function () {
		var t = new eui.Label();
		this.skillCDLabel = t;
		t.bottom = 5;
		t.height = 20;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "xx/10s";
		t.visible = false;
		t.x = 70;
		return t;
	};
	return L1TouchLabelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/L2/L2MainUISkin.exml'] = window.L2MainUISkin = (function (_super) {
	__extends(L2MainUISkin, _super);
	function L2MainUISkin() {
		_super.call(this);
		this.skinParts = ["backButton","continueButton","timePointLabel","roundLabel","timeBarGroup","selectBarGroup","energyBarGroup"];
		
		this.height = 300;
		this.width = 400;
		this.elementsContent = [this.backButton_i(),this.continueButton_i(),this._Label1_i(),this.timePointLabel_i(),this._Label2_i(),this.roundLabel_i(),this._Label3_i(),this.timeBarGroup_i(),this.selectBarGroup_i(),this.energyBarGroup_i()];
	}
	var _proto = L2MainUISkin.prototype;

	_proto.backButton_i = function () {
		var t = new eui.Button();
		this.backButton = t;
		t.label = "返回";
		t.left = 30;
		t.top = 30;
		return t;
	};
	_proto.continueButton_i = function () {
		var t = new eui.Button();
		this.continueButton = t;
		t.label = "继续";
		t.right = 200;
		t.visible = false;
		t.y = 30;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.left = 160;
		t.text = "时点：";
		t.top = 40;
		return t;
	};
	_proto.timePointLabel_i = function () {
		var t = new eui.Label();
		this.timePointLabel = t;
		t.left = 250;
		t.text = "时点";
		t.top = 40;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.right = 120;
		t.text = "第";
		t.top = 40;
		t.x = 340;
		return t;
	};
	_proto.roundLabel_i = function () {
		var t = new eui.Label();
		this.roundLabel = t;
		t.right = 85;
		t.text = "5";
		t.top = 40;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.right = 10;
		t.text = "回合";
		t.y = 40;
		return t;
	};
	_proto.timeBarGroup_i = function () {
		var t = new eui.Group();
		this.timeBarGroup = t;
		t.height = 10;
		t.left = 40;
		t.right = 40;
		t.top = 110;
		t.elementsContent = [this._Rect1_i(),this._Label4_i(),this._Label5_i(),this._Label6_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.height = 2;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = -5;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.right = -10;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 15;
		t.text = "100";
		t.top = -20;
		t.x = 339;
		t.y = -15;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.left = -5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 15;
		t.text = "0";
		t.top = -20;
		t.width = 9;
		t.x = -15;
		t.y = -15;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 15;
		t.text = "50";
		t.top = -20;
		t.width = 18;
		t.x = 161;
		t.y = -15;
		return t;
	};
	_proto.selectBarGroup_i = function () {
		var t = new eui.Group();
		this.selectBarGroup = t;
		t.height = 10;
		t.left = 40;
		t.right = 40;
		t.top = 100;
		t.x = 50;
		t.y = 120;
		return t;
	};
	_proto.energyBarGroup_i = function () {
		var t = new eui.Group();
		this.energyBarGroup = t;
		t.height = 2;
		t.left = 100;
		t.right = 30;
		t.top = 180;
		t.elementsContent = [this._Label7_i()];
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.left = -60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 18;
		t.text = "能量：";
		t.verticalCenter = 0;
		t.width = 80;
		t.x = -25;
		return t;
	};
	return L2MainUISkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/MainUISkin.exml'] = window.MainUISkin = (function (_super) {
	__extends(MainUISkin, _super);
	function MainUISkin() {
		_super.call(this);
		this.skinParts = ["l1StartButton","l2StartButton"];
		
		this.height = 300;
		this.width = 400;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = MainUISkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.l1StartButton_i(),this.l2StartButton_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 50;
		t.horizontalAlign = "center";
		t.paddingBottom = 100;
		t.paddingLeft = 100;
		t.paddingRight = 100;
		t.paddingTop = 100;
		t.verticalAlign = "top";
		return t;
	};
	_proto.l1StartButton_i = function () {
		var t = new eui.Button();
		this.l1StartButton = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 200;
		t.label = "词林绮谈";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 200;
		t.x = 42;
		t.y = 100;
		return t;
	};
	_proto.l2StartButton_i = function () {
		var t = new eui.Button();
		this.l2StartButton = t;
		t.anchorOffsetY = 0;
		t.height = 200;
		t.label = "FSC";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 200;
		t.x = 167;
		t.y = 122;
		return t;
	};
	return MainUISkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PanelSkin.exml'] = window.skins.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	function PanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","closeButton"];
		
		this.minHeight = 230;
		this.minWidth = 450;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this.closeButton_i()];
	}
	var _proto = PanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(2,2,12,12);
		t.source = "border_png";
		t.top = 0;
		return t;
	};
	_proto.moveArea_i = function () {
		var t = new eui.Group();
		this.moveArea = t;
		t.height = 45;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image2_i(),this.titleDisplay_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "header_png";
		t.top = 0;
		return t;
	};
	_proto.titleDisplay_i = function () {
		var t = new eui.Label();
		this.titleDisplay = t;
		t.fontFamily = "Tahoma";
		t.left = 15;
		t.right = 5;
		t.size = 20;
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		t.wordWrap = false;
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.bottom = 5;
		t.horizontalCenter = 0;
		t.label = "close";
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ProgressBarSkin.exml'] = window.skins.ProgressBarSkin = (function (_super) {
	__extends(ProgressBarSkin, _super);
	function ProgressBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb","labelDisplay"];
		
		this.minHeight = 18;
		this.minWidth = 30;
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this.labelDisplay_i()];
	}
	var _proto = ProgressBarSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_pb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.percentHeight = 100;
		t.source = "thumb_pb_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 15;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return ProgressBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/RadioButtonSkin.exml'] = window.skins.RadioButtonSkin = (function (_super) {
	__extends(RadioButtonSkin, _super);
	function RadioButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_disabled_png")
				])
		];
	}
	var _proto = RadioButtonSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "radiobutton_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return RadioButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ScrollerSkin.exml'] = window.skins.ScrollerSkin = (function (_super) {
	__extends(ScrollerSkin, _super);
	function ScrollerSkin() {
		_super.call(this);
		this.skinParts = ["horizontalScrollBar","verticalScrollBar"];
		
		this.minHeight = 20;
		this.minWidth = 20;
		this.elementsContent = [this.horizontalScrollBar_i(),this.verticalScrollBar_i()];
	}
	var _proto = ScrollerSkin.prototype;

	_proto.horizontalScrollBar_i = function () {
		var t = new eui.HScrollBar();
		this.horizontalScrollBar = t;
		t.bottom = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.verticalScrollBar_i = function () {
		var t = new eui.VScrollBar();
		this.verticalScrollBar = t;
		t.percentHeight = 100;
		t.right = 0;
		return t;
	};
	return ScrollerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/StartPanelSkin.exml'] = window.StartPanelSkin = (function (_super) {
	__extends(StartPanelSkin, _super);
	function StartPanelSkin() {
		_super.call(this);
		this.skinParts = ["labelAnim","pswdTextInput","confirmButton","label","debugButton","clearLocalButton"];
		
		this.height = 300;
		this.width = 400;
		this.labelAnim_i();
		this.elementsContent = [this.pswdTextInput_i(),this.confirmButton_i(),this.label_i(),this.debugButton_i(),this.clearLocalButton_i()];
		
		eui.Binding.$bindProperties(this, ["label"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [1],[],this._Object1,"alpha");
		eui.Binding.$bindProperties(this, [0.3],[],this._Object2,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object3,"alpha");
	}
	var _proto = StartPanelSkin.prototype;

	_proto.labelAnim_i = function () {
		var t = new egret.tween.TweenGroup();
		this.labelAnim = t;
		t.items = [this._TweenItem1_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.paths = [this._Set1_i(),this._To1_i(),this._To2_i()];
		return t;
	};
	_proto._Set1_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object1_i();
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		this._Object1 = t;
		return t;
	};
	_proto._To1_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.ease = "quadIn";
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto._To2_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.ease = "quadIn";
		t.props = this._Object3_i();
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		this._Object3 = t;
		return t;
	};
	_proto.pswdTextInput_i = function () {
		var t = new eui.TextInput();
		this.pswdTextInput = t;
		t.height = 70;
		t.horizontalCenter = 0;
		t.verticalCenter = -100;
		t.width = 400;
		return t;
	};
	_proto.confirmButton_i = function () {
		var t = new eui.Button();
		this.confirmButton = t;
		t.height = 80;
		t.horizontalCenter = 120;
		t.label = "确认";
		t.verticalCenter = 25;
		t.width = 160;
		return t;
	};
	_proto.label_i = function () {
		var t = new eui.Label();
		this.label = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 122;
		t.text = "请输入密码";
		t.textColor = 0xFF7F50;
		t.verticalCenter = -181;
		return t;
	};
	_proto.debugButton_i = function () {
		var t = new eui.Button();
		this.debugButton = t;
		t.bottom = 0;
		t.height = 200;
		t.label = "测试button";
		t.right = 0;
		t.visible = false;
		t.width = 200;
		return t;
	};
	_proto.clearLocalButton_i = function () {
		var t = new eui.Button();
		this.clearLocalButton = t;
		t.label = "清除缓存";
		t.right = 20;
		t.top = 20;
		return t;
	};
	return StartPanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/TextInputSkin.exml'] = window.skins.TextInputSkin = (function (_super) {
	__extends(TextInputSkin, _super);
	function TextInputSkin() {
		_super.call(this);
		this.skinParts = ["textDisplay","promptDisplay"];
		
		this.minHeight = 40;
		this.minWidth = 300;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this.textDisplay_i()];
		this.promptDisplay_i();
		
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("textDisplay","textColor",0xff0000)
				])
			,
			new eui.State ("normalWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
			,
			new eui.State ("disabledWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
		];
	}
	var _proto = TextInputSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.textDisplay_i = function () {
		var t = new eui.EditableText();
		this.textDisplay = t;
		t.height = 24;
		t.left = "10";
		t.right = "10";
		t.size = 20;
		t.textColor = 0x000000;
		t.verticalCenter = "0";
		t.percentWidth = 100;
		return t;
	};
	_proto.promptDisplay_i = function () {
		var t = new eui.Label();
		this.promptDisplay = t;
		t.height = 24;
		t.left = 10;
		t.right = 10;
		t.size = 20;
		t.textColor = 0xa9a9a9;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return TextInputSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ToggleSwitchSkin.exml'] = window.skins.ToggleSwitchSkin = (function (_super) {
	__extends(ToggleSwitchSkin, _super);
	function ToggleSwitchSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i(),this._Image2_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
		];
	}
	var _proto = ToggleSwitchSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "on_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = -18;
		t.source = "handle_png";
		t.verticalCenter = 0;
		return t;
	};
	return ToggleSwitchSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VScrollBarSkin.exml'] = window.skins.VScrollBarSkin = (function (_super) {
	__extends(VScrollBarSkin, _super);
	function VScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 20;
		this.minWidth = 8;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = VScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 30;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.width = 8;
		return t;
	};
	return VScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VSliderSkin.exml'] = window.skins.VSliderSkin = (function (_super) {
	__extends(VSliderSkin, _super);
	function VSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 30;
		this.minWidth = 25;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = VSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_png";
		t.width = 7;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.horizontalCenter = 0;
		t.source = "thumb_png";
		return t;
	};
	return VSliderSkin;
})(eui.Skin);