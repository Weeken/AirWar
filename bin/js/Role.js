var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * 角色类
 */
var Role = (function (_super) {
    __extends(Role, _super);
    function Role() {
        _super.call(this);
        //初始化
        this.init();
    }
    Role.prototype.init = function () {
        //缓存飞行动作
        Laya.Animation.createFrames(["war/hero_fly1.png", "war/hero_fly2.png"], "hero_fly");
        //缓存击中爆炸动作
        Laya.Animation.createFrames(["war/hero_down1.png", "war/hero_down2.png", "war/hero_down3.png", "war/hero_down4.png"], "hero_down");
        //创建一个动画作为飞机的身体
        this.body = new Laya.Animation();
        //把机体添加到容器内
        this.addChild(this.body);
        //测试其他状态
        this.playAction("hero_down");
    };
    Role.prototype.playAction = function (action) {
        //根据类型播放动画
        this.body.play(0, true, action);
        //获取动画大小区域
        var bound = this.body.getBounds();
        //设置机身剧中
        this.body.pos(-bound.width / 2, -bound.height / 2);
    };
    return Role;
}(Laya.Sprite));
//# sourceMappingURL=Role.js.map