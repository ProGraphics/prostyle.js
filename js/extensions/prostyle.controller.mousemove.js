/*!
 * VERSION: 0.19.0
 * DATE: 10-Aug-2015
 * UPDATES AND DOCS AT: https://prostyle.io/plus/
 * 
 * This file is part of ProStyle Plus, a set of premium extensions for ProStyle. It may be
 * used for free for personal projects or licensed per website domain name for commercial use.
 * 
 * @copyright - Copyright (c) 2013-2015, Pro Graphics, Inc. All rights reserved. 
 * @license - This work is subject to the terms at https://prostyle.io/plus/license/
 * @author: Gary Chamberlain, gary@pro.graphics.
 * 
 **/

/// <reference path="../../../ts/prostyle.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var ProStyle;
(function (ProStyle) {
    var Extensions;
    (function (Extensions) {
        var Controllers;
        (function (Controllers) {
            var MouseMove;
            (function (MouseMove) {
                var MouseMoveController = (function (_super) {
                    __extends(MouseMoveController, _super);
                    function MouseMoveController(startPercent, endPercent) {
                        if (startPercent === void 0) { startPercent = 0; }
                        if (endPercent === void 0) { endPercent = 100; }
                        _super.call(this, "mousemove");
                        this.startPercent = startPercent;
                        this.endPercent = endPercent;
                        this.mousemoveBound = undefined;
                        this.mouseoutBound = undefined;
                        this.canvas = undefined;
                        this.player = undefined;
                        this.startVal = 0;
                        this.endVal = 100;
                        startPercent = Math.max(Math.min(0, startPercent), 100);
                        endPercent = Math.max(Math.min(0, endPercent), 100);
                        this.startVal = this.startPercent / 100;
                        this.endVal = this.endPercent / 100;
                        this.mousemoveBound = this.mousemove.bind(this);
                        this.mouseoutBound = this.mouseout.bind(this);
                    }
                    MouseMoveController.prototype.start = function (canvas, player) {
                        this.stop();
                        this.canvas = canvas;
                        this.player = player;
                        canvas.div.addEventListener("mousemove", this.mousemoveBound);
                        canvas.div.addEventListener("mouseout", this.mouseoutBound);
                    };
                    MouseMoveController.prototype.stop = function () {
                        if (this.player !== undefined) {
                            this.canvas.div.removeEventListener("mousemove", this.mousemoveBound);
                            this.canvas.div.removeEventListener("mouseout", this.mouseoutBound);
                            this.canvas = undefined;
                            this.player = undefined;
                        }
                    };
                    MouseMoveController.prototype.mouseout = function (m) {
                        if (this.player)
                            this.player.playCurrentStep();
                    };
                    MouseMoveController.prototype.mousemove = function (m) {
                        var pos = m.clientX;
                        var w = m.currentTarget["offsetWidth"];
                        var p = pos / w * 100;
                        this.player.seek(this.posToSeek(pos / w));
                    };
                    MouseMoveController.prototype.posToSeek = function (pos) {
                        var range;
                        if (this.startVal == this.endVal) {
                            return pos < this.startVal ? 0 : 100;
                        }
                        else if (this.startVal < this.endVal) {
                            if (pos < this.startVal)
                                return 0;
                            else if (pos > this.endVal)
                                return 100;
                            else {
                                range = this.endVal - this.startVal;
                                return (pos - this.startVal) / range;
                            }
                        }
                        else {
                            if (pos > this.startVal)
                                return 0;
                            else if (pos < this.endVal)
                                return 100;
                            else {
                                range = this.startVal - this.endVal;
                                return (this.startVal - pos) / range;
                            }
                        }
                    };
                    MouseMoveController.prototype.serialize = function () {
                        return MouseMove.serialize(this);
                    };
                    return MouseMoveController;
                })(ProStyle.Controllers.Controller);
                MouseMove.MouseMoveController = MouseMoveController;
            })(MouseMove = Controllers.MouseMove || (Controllers.MouseMove = {}));
        })(Controllers = Extensions.Controllers || (Extensions.Controllers = {}));
    })(Extensions = ProStyle.Extensions || (ProStyle.Extensions = {}));
})(ProStyle || (ProStyle = {}));
/// <reference path="MouseMoveController.ts" />
var ProStyle;
(function (ProStyle) {
    var Extensions;
    (function (Extensions) {
        var Controllers;
        (function (Controllers) {
            var MouseMove;
            (function (MouseMove) {
                function deserialize(json) {
                    return new MouseMove.MouseMoveController(json.start, json.end);
                }
                MouseMove.deserialize = deserialize;
            })(MouseMove = Controllers.MouseMove || (Controllers.MouseMove = {}));
        })(Controllers = Extensions.Controllers || (Extensions.Controllers = {}));
    })(Extensions = ProStyle.Extensions || (ProStyle.Extensions = {}));
})(ProStyle || (ProStyle = {}));
/// <reference path="MouseMoveController.ts" />
var ProStyle;
(function (ProStyle) {
    var Extensions;
    (function (Extensions) {
        var Controllers;
        (function (Controllers) {
            var MouseMove;
            (function (MouseMove) {
                function serialize(controller) {
                    var json = {
                        start: controller.startPercent,
                        end: controller.endPercent
                    };
                    return json;
                }
                MouseMove.serialize = serialize;
            })(MouseMove = Controllers.MouseMove || (Controllers.MouseMove = {}));
        })(Controllers = Extensions.Controllers || (Extensions.Controllers = {}));
    })(Extensions = ProStyle.Extensions || (ProStyle.Extensions = {}));
})(ProStyle || (ProStyle = {}));
//# sourceMappingURL=prostyle.controller.mousemove.js.map