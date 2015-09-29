/*!
 * VERSION: 1.2.0
 * DATE: 29-Sep-2015
 * UPDATES AND DOCS AT: https://prostyle.io/plus/
 * 
 * This file is part of ProStyle Plus, a set of premium extensions for ProStyle.
 * 
 * @copyright - Copyright (c) 2013-2015, Pro Graphics, Inc. All rights reserved. 
 * @license - This work is subject to the terms at https://prostyle.io/plus/
 * @author: Gary Chamberlain, gary@pro.graphics.
 * 
 **/

var ProStyle;
(function (ProStyle) {
    var Cursors;
    (function (Cursors) {
        Cursors.back_24x24 = "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAVSwAAFUsBs3yoNwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAMRSURBVEiJtZbPS1xXFMc/575RM1VHQpEylCwqqa3IQJpxISlugmCF4iYL/QtiKSQ0BPpK7TowbksWClGoSEYhiJtYV11MUg1IFrUuRBDbWmwSJBpjxx/z7sli7jWDyGRCzIELj/vj+/2ec9673yeqyvuMGICIBEAVUA3U+HkgAg6AfeAQiPSYIhERwI8AMG7JAha3/wzwXRAEzwAFNAiCF8Ad4FOgEYg7AFFVf86DVgN1QCtwBbgAfAjUiqoiIgljzHpzc3NdT0+PiAi5XI65uTlV1V7gD+ApsAsUnAhxaquBBuAnEflGVQ0wBQwAz72SRkDDMFQfo6Oj6oC+B9qBZEkWXnU9cNkYswxob2+vdnZ2qjFmH+gEPvP1qirTpwRQ6wAD158aN/+jiPxaX19/PpvNks1mSafTWGurgY+AhG+mOQnZRY0Dr3IjBnwuIrdV9WJXV5eOjIxIMpk8SdgZDyxlCEyJ6jrgW2PMb/F4/IuhoSFmZmZOAseJisVOWjkWAcW37BMR+UFVv2xvb9exsTFpamoqd84AUq40pUouG2PuxmKxS5lMhlwu9ybwo6gkg6+Bc62trTo+Pi6pVKoiYB+VZHAuDEMWFhbeGrxSgneKSgieZDIZ2tradHFx8b0QPADuLy0t7afTaQYHB7HWnirBLvDQWnurUCgsh2FIR0eHrq6unirBU+BPVR0Afpmfny+kUikdHh4+FYIDYBv4D1gDRq21N/P5/Fp/fz/d3d1sbGy8E0EE7AEvKGbyN/C7ql4D7s3OzkYtLS06MTFx/JwF1H9o5XzTUvSAfeCl25sH/gd+VtVHOzs7N/r6+pJTU1Nsbm5ijClYaw+Agiewxpjd6enpD1T1yHBERFV125XpsGR4G80Du9baFeDq5OTkV6oqwGOX8Z53tEbgWhAE16MoagAIgmAviqJHFG1zBfgL2HLgULwE/Q17lqJpNQNNwDqwDPxzZJluw8cUnSvhQF4CT4B/KW+ZcUeUcM/qzj73JTpw6gB23CbhdXO33HMEqPuzUBFRV6rSHnl3PAT2XgGbYEB3V/699wAAAABJRU5ErkJggg==)";
        Cursors.play_20x28 = "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAYCAQAAABQQhX9AAABiklEQVQoz42TPWhTYRiFn/vd2+anP5qGtkikSLGEYEJEHJpSwYC2g2CGtmAGBxGkEVESEWm3DA4WJ12yFwTXtiAdutoOVaeAowpxFSTQUtLvOBjQa27S8q4P5+W87zmI0w0CjwjDxDjLICE8DE4wGHV2zBfeMcMFRhmkH7cTRTCDMvKs2+QlWSYYIdKpi+Ah+qi6chaZOkVSnGOYkF8XwRP0WZJVTUPWtFgnxyRxovT91UVQ+QNK0g8tCZkGj0mT4AxhPBycDlCSNpU4xrLNDaba5gwOgqd+UGqqLGPdX7wgywQxwniBoCTt67JFzicWSTLGQFdQaumVItYc8YY04z1ASfqq63IsJZKnA59z5eTVLTa40wNsm/nGax4w12V1U2UZuQdsscI95rqY2VTCIuqs8YgFZgPP037hT97yjLvc9B+84gvFMbtUWabA9P8vrPwTswY1yhTJB4ViHmXkyT3kPavc5xZXg2N23tkz3/lAlRKLXOse3Dgp8hS4Tb53FaKMcZFLpHqV6zcTCrtuAskQ/wAAAABJRU5ErkJggg==)";
        Cursors.pause_21x24 = "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAYCAYAAAAVibZIAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAASogAAEqIBzWOC0wAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAGsSURBVDiN7ZWxahRRFIa/c3LPmsQoLCjJRFbFxgewEWTBKk3KvICQal9gG99gCxvbrXYfwcbOUvAlNCw6WMUxQc3ObG6KOddMFpyAaLc/XGYu893/Hs7AfyTGyL9WABCRNX/vAAas+fdzoATmQOV7XWLV2cVv1ivdMLN3qloCEYgisgghfAaeARlw043um9mRiCwSq6qlmb0HHgN3g9/SL8vy+Wg0otfrATCfz3UwGOxUVXUIvPYqfwAvzOzeeDzWTqcDwGw2C8Ph8CmwD7xNlR4AMc/z2FSWZRXwBtgDHgF3gFGWZWWTy/M8etWvgH7qR+rhsgTYALaAG97D8AcW5zaTqbaA6ceoXyItbABCMmsDZWldJ2mr8K+1Ml2Zrkz/h2nbTIlL6zrFFGO/AKbTaTOkKYoCro6SCJwVRSGTyYRGSNPwqVJI75rZB1WtuBwn5yGEb8BLrob0kxBCLiLpkqiqCzP7CAyAvsQYEZEu9Rx66M8t6pj7CXwFjoAv1ONkE9gFHgDb1CEegVMgBz4l03XgFtAFblOnvFBPxxPgGPjue3Om62cstcWZ4wuzhaHs/zLlmAAAAABJRU5ErkJggg==)";
        Cursors.next_37x24 = "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAYCAYAAAB9ejRwAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAW9AAAFvQBCBMfJAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAR7SURBVEiJzZdNaFRXGIaf70yimXSSqrF/UqylpS0FCdXFtFUItgotbrKyC0VUqgQpSrvsrivBTUHRnRKpFA0E1DS0pQFbGFoSat1I26QKsVOTSUwy6UxqjJm5bxf33HAzOvlx075wuLO475nne78z55wxSfzfVANgZgY4oDY2AMpACZj1nwNVVBHz1gAr/NP592cX8laTiz1rgVbgd+BrYA/wNLAaeAJYCdSYmfMgEZB57zvAAPAd8GHMm3qUd0F5+FqgEfg+kUgEDQ0NASCgB9gOvAo8CzT4L0h4GBfzXnHOqbGxMfJmgPeB14Dn/DtzXklUGxHUSuAp59zE1q1bNTY2pl27dgmQcy4PfAq8AbwArAGShG2q8d61Zja0efNmTUxMaPfu3ZG3CHwGbAI2AE1AvS/EVYOLoJLAOudcvqWlRZEuXLigVatWRZV/C7wLvAI841NL+tauM7PhdDo95+3s7FRTU1Pk/QF4z6f2UOLVoOqB5yuhJGloaEg7d+6MKr8LfAw0A+uBtb76DWaWi0NJ0sjIiFpbW5eS+LzU4lDrHwUV6cyZM0qlUgEQAJeBFl/5i8DrZjZSCRXp3Llziq3TRyW+Ip7akqEkaXBwUNu2bRMgM7sDfAS8CbxtZqPVoCQpm81qx44dkXcU+CSW+Gqgzqdmy4KSpCAIdOLECdXV1QVmVgY6gQ/MbGwhqMh76tQpJZPJysRf9kshbOdyoSL19/crnU7PpWZm04tBRbp586a2bNkST3yPb2cTUPfYUJJUKpV07NgxmZkALRVKksrlso4fP65EIhEAvwFv+VY2RDv6fyLnHISbcA3h5loHJGoed8KBgQH27t1Lb28vZjZhZinCX9GiunXrFvv27SOTyWBm48CX82CXCyOJkydP0tzcTF9fn4CfJX0BzCzFe/r0aTZu3KhMJiPgmqTPCc/bAnAfKC8rqdu3b7N//36uXr2KmU1K6vITzhDeBKoqm81y4MABenp6MLMp4ArwCzAM3AHGgX+A2SVDnT17lqNHj2pqagrguqSvgByQJ7zeVIVqb2/nyJEjKhaLBtyQdBn4y/tHgLvAJHAPKC0KNTw8zMGDB+nu7sY5F1V43U82Shi7I9x35imXy3Ho0CG6urpwzk0D3UCf9+a8Pw8UgemouAWhLl68SFtbmyYnJw24EQRBZYV5wtYlCY+QOXV0dNDW1qZ8Pm9AfxAEl4A/vTcHjAF/+3Si9geSFIcKAMrlMuPj4xw+fJiOjo7FKrznYQSoVCpVemeAb4CfYoWMAhOxdGb9d0t+0zRJmFmS8PzpTCQS6fr6enz/fyU8CrKxSeMVlnzrngTanXPbU6kUhULBgD+AS8Cg90XeScIF/cD7H7omR0kFnvh8uVx+qVgs5oEfgWs+kbt+VFYI4en+ADgfBMGmQqEw4VPt9QCjVbzleDpxRUnVEq6LNYR36zWEG+GMTyXvn/MqJNyNE967OuZd6b2FCu9MtXSqJfXATxL4Z5TAdGzCeRX6/wDlmFc+jYR/954f9xdLJ65/AQvRzjZ9X0BiAAAAAElFTkSuQmCC)";
        Cursors.seek_36x12 = "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAMCAMAAAA9Ie/xAAAApVBMVEX///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA3Nzc4ODhISEhPT09QUFBgYGB4eHizs7O/v7/g4ODk5OT4+Pj6+vr///+KeuFaAAAAKHRSTlMABQgMDxARExYbISQmLzE4O0JFS1pfZGh3g4iKi5DC1dja3ePo9Pb5CC6TmQAAAIpJREFUGNONT8sKwkAQS7KzhVY86P//owexYOtOPNhDC66Y00AyeQB/gADOl6nLz7c7EKCuY99kKtnWAGPAqXQ07VEDDlAFZVm8ozRquwoUzgAJwHn4T+1ai/qIfkDk5qR6iNtXJBkAUq3WTnEYQMB+DY9+WrNdoGJFV7Mua7aA/cxZ5JcBtp1OvwEAqjJOoPY7bwAAAABJRU5ErkJggg==)";
    })(Cursors = ProStyle.Cursors || (ProStyle.Cursors = {}));
})(ProStyle || (ProStyle = {}));
/// <reference path="../../../ts/prostyle.d.ts" />
/// <reference path="../Cursors.ts" />
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
            var Tap;
            (function (Tap) {
                var TapController = (function (_super) {
                    __extends(TapController, _super);
                    function TapController(playbuttonSizes, rowSizes, cursors) {
                        if (playbuttonSizes === void 0) { playbuttonSizes = [25, 50, 25]; }
                        if (rowSizes === void 0) { rowSizes = [75, 25]; }
                        if (cursors === void 0) { cursors = true; }
                        _super.call(this, "tap");
                        this.playbuttonSizes = playbuttonSizes;
                        this.rowSizes = rowSizes;
                        this.cursors = cursors;
                        this.backDiv = undefined;
                        this.playDiv = undefined;
                        this.nextDiv = undefined;
                        this.seekDiv = undefined;
                        this.backBound = undefined;
                        this.playBound = undefined;
                        this.nextBound = undefined;
                        this.seekBound = undefined;
                        this.stateChangedBound = undefined;
                        this.canvas = undefined;
                        this.player = undefined;
                        this.bwr = 0.25;
                        this.pwr = 0.50;
                        this.nwr = 0.25;
                        this.phr = 0.75;
                        this.shr = 0.25;
                        if (playbuttonSizes instanceof Array && playbuttonSizes.length > 2) {
                            playbuttonSizes[0] = Math.abs(playbuttonSizes[0]);
                            playbuttonSizes[1] = Math.abs(playbuttonSizes[1]);
                            playbuttonSizes[2] = Math.abs(playbuttonSizes[2]);
                            var total = playbuttonSizes[0] + playbuttonSizes[1] + playbuttonSizes[2];
                            if (total > 0) {
                                this.bwr = playbuttonSizes[0] / total;
                                this.pwr = playbuttonSizes[1] / total;
                                this.nwr = playbuttonSizes[2] / total;
                            }
                        }
                        if (rowSizes instanceof Array && rowSizes.length > 1) {
                            rowSizes[0] = Math.abs(rowSizes[0]);
                            rowSizes[1] = Math.abs(rowSizes[1]);
                            var total = rowSizes[0] + rowSizes[1];
                            if (total > 0) {
                                this.phr = rowSizes[0] / total;
                                this.shr = rowSizes[1] / total;
                            }
                        }
                        this.backBound = this.back.bind(this);
                        this.playBound = this.play.bind(this);
                        this.nextBound = this.next.bind(this);
                        this.seekBound = this.seek.bind(this);
                        this.stateChangedBound = this.stateChanged.bind(this);
                    }
                    TapController.prototype.start = function (canvas, player) {
                        this.stop();
                        this.canvas = canvas;
                        this.player = player;
                        this.backDiv = ProStyle.Util.createChildDivElement(this.canvas.frame.div, "tap-back");
                        this.playDiv = ProStyle.Util.createChildDivElement(this.canvas.frame.div, "tap-play");
                        this.nextDiv = ProStyle.Util.createChildDivElement(this.canvas.frame.div, "tap-next");
                        this.seekDiv = ProStyle.Util.createChildDivElement(this.canvas.frame.div, "tap-seek");
                        this.player.stateChanged.on(this.stateChangedBound);
                        this.resize();
                        this.backDiv.addEventListener("click", this.backBound);
                        this.playDiv.addEventListener("click", this.playBound);
                        this.nextDiv.addEventListener("click", this.nextBound);
                        this.seekDiv.addEventListener("click", this.seekBound);
                        if (this.cursors) {
                            this.backDiv.style.cursor = ProStyle.Cursors.back_24x24 + ",w-resize";
                            this.playDiv.style.cursor = ProStyle.Cursors.play_20x28 + ",pointer";
                            this.nextDiv.style.cursor = ProStyle.Cursors.next_37x24 + ",e-resize";
                            this.seekDiv.style.cursor = ProStyle.Cursors.seek_36x12 + ",ew-resize";
                        }
                        this.backDiv.style.position =
                            this.playDiv.style.position =
                                this.nextDiv.style.position =
                                    this.seekDiv.style.position = "absolute";
                    };
                    TapController.prototype.stop = function () {
                        if (this.player !== undefined) {
                            this.backDiv.removeEventListener("click", this.backBound);
                            this.playDiv.removeEventListener("click", this.playBound);
                            this.nextDiv.removeEventListener("click", this.nextBound);
                            this.seekDiv.removeEventListener("click", this.seekBound);
                            this.player.stateChanged.off(this.stateChangedBound);
                            this.backDiv.parentElement.removeChild(this.backDiv);
                            this.playDiv.parentElement.removeChild(this.playDiv);
                            this.nextDiv.parentElement.removeChild(this.nextDiv);
                            this.seekDiv.parentElement.removeChild(this.seekDiv);
                            this.canvas = undefined;
                            this.player = undefined;
                        }
                    };
                    TapController.prototype.mouseout = function (m) {
                        if (this.player)
                            this.player.playCurrentStep();
                    };
                    TapController.prototype.back = function (m) {
                        this.player.backStep(true);
                    };
                    TapController.prototype.play = function (m) {
                        this.player.togglePlay();
                    };
                    TapController.prototype.next = function (m) {
                        this.player.playNextStep(true);
                    };
                    TapController.prototype.seek = function (m) {
                        var rect = ProStyle.Util.getOffset(m.currentTarget);
                        var pos = m.pageX - rect.left;
                        var w = m.target["offsetWidth"];
                        this.player.seek(pos / w, true);
                    };
                    TapController.prototype.stateChanged = function (paused) {
                        if (this.cursors) {
                            if (paused) {
                                this.playDiv.style.cursor = ProStyle.Cursors.play_20x28 + ",pointer";
                            }
                            else {
                                this.playDiv.style.cursor = ProStyle.Cursors.pause_21x24 + ",pointer";
                            }
                        }
                    };
                    TapController.prototype.resize = function () {
                        var cw = this.canvas.frame.div.offsetWidth;
                        var ch = this.canvas.frame.div.offsetHeight;
                        var bw = cw * this.bwr;
                        var pw = cw * this.pwr;
                        var nw = cw * this.nwr;
                        var ph = ch * this.phr;
                        var sh = ch * this.shr;
                        this.backDiv.style.left = "0px";
                        this.backDiv.style.top = "0px";
                        this.backDiv.style.width = bw + "px";
                        this.backDiv.style.height = ph + "px";
                        this.playDiv.style.left = bw + "px";
                        this.playDiv.style.top = "0px";
                        this.playDiv.style.width = pw + "px";
                        this.playDiv.style.height = ph + "px";
                        this.nextDiv.style.left = (bw + pw) + "px";
                        this.nextDiv.style.top = "0px";
                        this.nextDiv.style.width = nw + "px";
                        this.nextDiv.style.height = ph + "px";
                        this.seekDiv.style.left = "0px";
                        this.seekDiv.style.top = ph + "px";
                        this.seekDiv.style.width = cw + "px";
                        this.seekDiv.style.height = sh + "px";
                    };
                    TapController.prototype.serialize = function () {
                        return Tap.serialize(this);
                    };
                    return TapController;
                })(ProStyle.Controllers.Controller);
                Tap.TapController = TapController;
            })(Tap = Controllers.Tap || (Controllers.Tap = {}));
        })(Controllers = Extensions.Controllers || (Extensions.Controllers = {}));
    })(Extensions = ProStyle.Extensions || (ProStyle.Extensions = {}));
})(ProStyle || (ProStyle = {}));
var ProStyle;
(function (ProStyle) {
    var Extensions;
    (function (Extensions) {
        var bs = 28;
        var bx2 = 1 << bs;
        var bm = bx2 - 1;
        var bx = bx2 >> 1;
        var bd = bs >> 1;
        var bdm = (1 << bd) - 1;
        var log2 = Math.log(2);
        var a;
        var b;
        function badd(a, b) {
            var al = a.length, bl = b.length;
            if (al < bl)
                return badd(b, a);
            var c = 0, r = [], n = 0;
            for (; n < bl; n++) {
                c += a[n] + b[n];
                r[n] = c & bm;
                c >>>= bs;
            }
            for (; n < al; n++) {
                c += a[n];
                r[n] = c & bm;
                c >>>= bs;
            }
            if (c)
                r[n] = c;
            return r;
        }
        function beq(a, b) {
            if (a.length != b.length)
                return 0;
            for (var n = a.length - 1; n >= 0; n--)
                if (a[n] != b[n])
                    return 0;
            return 1;
        }
        function bsub(a, b) {
            var al = a.length, bl = b.length, c = 0, r = [];
            if (bl > al) {
                return [];
            }
            if (bl == al) {
                if (b[bl - 1] > a[bl - 1])
                    return [];
                if (bl == 1)
                    return [a[0] - b[0]];
            }
            for (var n = 0; n < bl; n++) {
                c += a[n] - b[n];
                r[n] = c & bm;
                c >>= bs;
            }
            for (; n < al; n++) {
                c += a[n];
                r[n] = c & bm;
                c >>= bs;
            }
            if (c) {
                return [];
            }
            if (r[n - 1])
                return r;
            while (n > 1 && r[n - 1] == 0)
                n--;
            return r.slice(0, n);
        }
        function bmul(a, b) {
            b = b.concat([0]);
            var al = a.length, bl = b.length, r = [], n, nn, aa, c, m;
            var g, gg, h, hh, ghhb;
            for (n = al + bl; n >= 0; n--)
                r[n] = 0;
            for (n = 0; n < al; n++) {
                if (aa = a[n]) {
                    c = 0;
                    hh = aa >> bd;
                    h = aa & bdm;
                    m = n;
                    for (nn = 0; nn < bl; nn++, m++) {
                        g = b[nn];
                        gg = g >> bd;
                        g = g & bdm;
                        var ghh = g * hh + h * gg;
                        ghhb = ghh >> bd;
                        ghh &= bdm;
                        c += r[m] + h * g + (ghh << bd);
                        r[m] = c & bm;
                        c = (c >> bs) + gg * hh + ghhb;
                    }
                }
            }
            n = r.length;
            if (r[n - 1])
                return r;
            while (n > 1 && r[n - 1] == 0)
                n--;
            return r.slice(0, n);
        }
        function blshift(a, b) {
            var n, c = 0, r = [];
            for (n = 0; n < a.length; n++) {
                c |= (a[n] << b);
                r[n] = c & bm;
                c >>= bs;
            }
            if (c)
                r[n] = c;
            return r;
        }
        function brshift(a) {
            var c = 0, n, cc, r = [];
            for (n = a.length - 1; n >= 0; n--) {
                cc = a[n];
                c <<= bs;
                r[n] = (cc | c) >> 1;
                c = cc & 1;
            }
            while (r.length > 1 && r[r.length - 1] == 0) {
                r = r.slice(0, -1);
            }
            this.a = r;
            this.c = c;
            return this;
        }
        function zeros(n) { var r = []; while (n-- > 0)
            r[n] = 0; return r; }
        function toppart(x, start, len) {
            var n = 0;
            while (start >= 0 && len-- > 0)
                n = n * bx2 + x[start--];
            return n;
        }
        function bdiv(x, y) {
            var n = x.length - 1, t = y.length - 1, nmt = n - t;
            if (n < t || n == t && (x[n] < y[n] || n > 0 && x[n] == y[n] && x[n - 1] < y[n - 1])) {
                this.q = [0];
                this.mod = x;
                return this;
            }
            if (n == t && toppart(x, t, 2) / toppart(y, t, 2) < 4) {
                var q = 0, xx;
                for (;;) {
                    xx = bsub(x, y);
                    if (xx.length == 0)
                        break;
                    x = xx;
                    q++;
                }
                this.q = [q];
                this.mod = x;
                return this;
            }
            var shift, shift2;
            shift2 = Math.floor(Math.log(y[t]) / log2) + 1;
            shift = bs - shift2;
            if (shift) {
                x = x.concat();
                y = y.concat();
                for (i = t; i > 0; i--)
                    y[i] = ((y[i] << shift) & bm) | (y[i - 1] >> shift2);
                y[0] = (y[0] << shift) & bm;
                if (x[n] & ((bm << shift2) & bm)) {
                    x[++n] = 0;
                    nmt++;
                }
                for (i = n; i > 0; i--)
                    x[i] = ((x[i] << shift) & bm) | (x[i - 1] >> shift2);
                x[0] = (x[0] << shift) & bm;
            }
            var i, j, x2, y2, q = zeros(nmt + 1);
            y2 = zeros(nmt).concat(y);
            for (;;) {
                x2 = bsub(x, y2);
                if (x2.length == 0)
                    break;
                q[nmt]++;
                x = x2;
            }
            var yt = y[t], top = toppart(y, t, 2);
            for (i = n; i > t; i--) {
                var m = i - t - 1;
                if (i >= x.length)
                    q[m] = 1;
                else if (x[i] == yt)
                    q[m] = bm;
                else
                    q[m] = Math.floor(toppart(x, i, 2) / yt);
                var topx = toppart(x, i, 3);
                while (q[m] * top > topx)
                    q[m]--;
                y2 = y2.slice(1);
                x2 = bsub(x, bmul([q[m]], y2));
                if (x2.length == 0) {
                    q[m]--;
                    x2 = bsub(x, bmul([q[m]], y2));
                }
                x = x2;
            }
            if (shift) {
                for (i = 0; i < x.length - 1; i++)
                    x[i] = (x[i] >> shift) | ((x[i + 1] << shift2) & bm);
                x[x.length - 1] >>= shift;
            }
            while (q.length > 1 && q[q.length - 1] == 0)
                q = q.slice(0, q.length - 1);
            while (x.length > 1 && x[x.length - 1] == 0)
                x = x.slice(0, x.length - 1);
            this.mod = x;
            this.q = q;
            return this;
        }
        function bmod(p, m) {
            if (m.length == 1) {
                if (p.length == 1)
                    return [p[0] % m[0]];
                if (m[0] < bdm)
                    return [simplemod(p, m[0])];
            }
            var r = bdiv(p, m);
            return r.mod;
        }
        function simplemod(i, m) {
            if (m > bdm)
                return bmod(i, [m]);
            var c = 0, v;
            for (var n = i.length - 1; n >= 0; n--) {
                v = i[n];
                c = ((v >> bd) + (c << bd)) % m;
                c = ((v & bdm) + (c << bd)) % m;
            }
            return c;
        }
        function bmodexp(xx, y, m) {
            var r = [1], n, an, a, x = xx.concat();
            var mu = [];
            n = m.length * 2;
            mu[n--] = 1;
            for (; n >= 0; n--)
                mu[n] = 0;
            mu = bdiv(mu, m).q;
            for (n = 0; n < y.length; n++) {
                for (a = 1, an = 0; an < bs; an++, a <<= 1) {
                    if (y[n] & a)
                        r = bmod2(bmul(r, x), m, mu);
                    x = bmod2(bmul(x, x), m, mu);
                }
            }
            return r;
        }
        function bmod2(x, m, mu) {
            var xl = x.length - (m.length << 1);
            if (xl > 0) {
                return bmod2(x.slice(0, xl).concat(bmod2(x.slice(xl), m, mu)), m, mu);
            }
            var ml1 = m.length + 1, ml2 = m.length - 1, rr;
            var q3 = bmul(x.slice(ml2), mu).slice(ml1);
            var r1 = x.slice(0, ml1);
            var r2 = bmul(q3, m).slice(0, ml1);
            var r = bsub(r1, r2);
            if (r.length == 0) {
                r1[ml1] = 1;
                r = bsub(r1, r2);
            }
            for (var n = 0;; n++) {
                rr = bsub(r, m);
                if (rr.length == 0)
                    break;
                r = rr;
                if (n >= 3)
                    return bmod2(r, m, mu);
            }
            return r;
        }
        function sub2(a, b) {
            var r = bsub(a, b);
            if (r.length == 0) {
                this.a = bsub(b, a);
                this.sign = 1;
            }
            else {
                this.a = r;
                this.sign = 0;
            }
            return this;
        }
        function signedsub(a, b) {
            if (a.sign) {
                if (b.sign) {
                    return sub2(b, a);
                }
                else {
                    this.a = badd(a, b);
                    this.sign = 1;
                }
            }
            else {
                if (b.sign) {
                    this.a = badd(a, b);
                    this.sign = 0;
                }
                else {
                    return sub2(a, b);
                }
            }
            return this;
        }
        function modinverse(x, n) {
            var y = n.concat(), t, r, bq, a = [1], b = [0], ts;
            a.sign = 0;
            b.sign = 0;
            while (y.length > 1 || y[0]) {
                t = y.concat();
                r = bdiv(x, y);
                y = r.mod;
                var q = r.q;
                x = t;
                t = b.concat();
                ts = b.sign;
                bq = bmul(b, q);
                bq.sign = b.sign;
                r = signedsub(a, bq);
                b = r.a;
                b.sign = r.sign;
                a = t;
                a.sign = ts;
            }
            if (beq(x, [1]) == 0)
                return [0];
            if (a.sign) {
                a = bsub(n, a);
            }
            return a;
        }
        function crt_RSA(m, d, p, q) {
            var xp = bmodexp(bmod(m, p), bmod(d, bsub(p, [1])), p);
            var xq = bmodexp(bmod(m, q), bmod(d, bsub(q, [1])), q);
            var t = bsub(xq, xp);
            if (t.length == 0) {
                t = bsub(xp, xq);
                t = bmod(bmul(t, modinverse(p, q)), q);
                t = bsub(q, t);
            }
            else {
                t = bmod(bmul(t, modinverse(p, q)), q);
            }
            return badd(bmul(t, p), xp);
        }
        function t2b(s) {
            var bits = s.length * 8, bn = 1, r = [0], rn = 0, sn = 0, sb = 1;
            var c = s.charCodeAt(0);
            for (var n = 0; n < bits; n++) {
                if (bn > bm) {
                    bn = 1;
                    r[++rn] = 0;
                }
                if (c & sb)
                    r[rn] |= bn;
                bn <<= 1;
                if ((sb <<= 1) > 255) {
                    sb = 1;
                    c = s.charCodeAt(++sn);
                }
            }
            return r;
        }
        function b2t(b) {
            var bits = b.length * bs, bn = 1, bc = 0, r = [0], rb = 1, rn = 0;
            for (var n = 0; n < bits; n++) {
                if (b[bc] & bn)
                    r[rn] |= rb;
                if ((rb <<= 1) > 255) {
                    rb = 1;
                    r[++rn] = 0;
                }
                if ((bn <<= 1) > bm) {
                    bn = 1;
                    bc++;
                }
            }
            while (r[rn] == 0) {
                rn--;
            }
            var rr = '';
            for (var n = 0; n <= rn; n++)
                rr += String.fromCharCode(r[n]);
            return rr;
        }
        var b64s = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_-';
        function textToBase64(t) {
            var r = '';
            var m = 0;
            var a = 0;
            var tl = t.length - 1;
            var c;
            for (var n = 0; n <= tl; n++) {
                c = t.charCodeAt(n);
                r += b64s.charAt((c << m | a) & 63);
                a = c >> (6 - m);
                m += 2;
                if (m == 6 || n == tl) {
                    r += b64s.charAt(a);
                    if ((n % 45) == 44) {
                        r += "\n";
                    }
                    m = 0;
                    a = 0;
                }
            }
            return r;
        }
        function base64ToText(t) {
            var r = '';
            var m = 0;
            var a = 0;
            var c;
            for (var n = 0; n < t.length; n++) {
                c = b64s.indexOf(t.charAt(n));
                if (c >= 0) {
                    if (m) {
                        r += String.fromCharCode((c << (8 - m)) & 255 | a);
                    }
                    a = c >> m;
                    m += 2;
                    if (m == 8) {
                        m = 0;
                    }
                }
            }
            return r;
        }
        function rc4(key, text) {
            var i, x, y, t, x2, kl = key.length;
            var s = [];
            for (i = 0; i < 256; i++)
                s[i] = i;
            y = 0;
            for (var j = 0; j < 2; j++) {
                for (x = 0; x < 256; x++) {
                    y = (key.charCodeAt(x % kl) + s[x] + y) % 256;
                    t = s[x];
                    s[x] = s[y];
                    s[y] = t;
                }
            }
            var z = "";
            for (x = 0; x < text.length; x++) {
                x2 = x & 255;
                y = (s[x2] + y) & 255;
                t = s[x2];
                s[x2] = s[y];
                s[y] = t;
                z += String.fromCharCode((text.charCodeAt(x) ^ s[(s[x2] + s[y]) % 256]));
            }
            return z;
        }
        function ror(a, n) { n &= 7; return n ? ((a >> n) | ((a << (8 - n)) & 255)) : a; }
        function hash(s, l) {
            var sl = s.length, r = [], rr = '', v = 1, lr = 4;
            for (var n = 0; n < l; n++)
                r[n] = (v = ((v * v * 5081 + n) & 255));
            while (sl--) {
                lr = r[sl % l] ^= ror(s.charCodeAt(sl), lr) ^ r[r[(sl * 5081) % l] % l];
            }
            for (var n = 0; n < l; n++)
                rr += String.fromCharCode(r[n] ^
                    ror(r[r[(n * 171) % l] % l], r[n]));
            return rr;
        }
        function rsaDecode(key, text) {
            text = base64ToText(text);
            var sessionKeyLength = text.charCodeAt(0);
            var sessionKeyEncryptedText = text.substr(1, sessionKeyLength);
            text = text.substr(sessionKeyLength + 1);
            var sessionKeyEncrypted = t2b(sessionKeyEncryptedText);
            var sessionkey = crt_RSA(sessionKeyEncrypted, key[0], key[1], key[2]);
            sessionkey = b2t(sessionkey);
            text = rc4(sessionkey, text);
            return text;
        }
        function c() {
            if (ProStyle["pl"])
                return;
            var hn = window.location.hostname.trim().toLowerCase();
            if (hn === '' || hn === 'localhost' || hn === '127.0.0.1')
                return;
            ProStyle["hn"] = hn;
            var plk = ProStyle["plusLicense"];
            if (plk === undefined) {
                ProStyle["pl"] = 2;
            }
            else {
                var k = [[239800443, 61606552, 84], [201280845, 11], [166507101, 13]];
                var pld = rsaDecode(k, plk);
                ProStyle["pld"] = pld;
                ProStyle["pl"] = pld === hn ? 1 : 3;
            }
        }
        Extensions.c = c;
    })(Extensions = ProStyle.Extensions || (ProStyle.Extensions = {}));
})(ProStyle || (ProStyle = {}));
/// <reference path="TapController.ts" />
/// <reference path="../../l.ts" />
var ProStyle;
(function (ProStyle) {
    var Extensions;
    (function (Extensions) {
        var Controllers;
        (function (Controllers) {
            var Tap;
            (function (Tap) {
                function deserialize(json) {
                    Extensions.c();
                    return new Tap.TapController(json.playbuttonSizes, json.rowSizes, json.cursors);
                }
                Tap.deserialize = deserialize;
            })(Tap = Controllers.Tap || (Controllers.Tap = {}));
        })(Controllers = Extensions.Controllers || (Extensions.Controllers = {}));
    })(Extensions = ProStyle.Extensions || (ProStyle.Extensions = {}));
})(ProStyle || (ProStyle = {}));
/// <reference path="TapController.ts" />
var ProStyle;
(function (ProStyle) {
    var Extensions;
    (function (Extensions) {
        var Controllers;
        (function (Controllers) {
            var Tap;
            (function (Tap) {
                function serialize(controller) {
                    var json = {
                        playbuttonSizes: controller.playbuttonSizes,
                        rowSizes: controller.rowSizes,
                        cursors: controller.cursors
                    };
                    return json;
                }
                Tap.serialize = serialize;
            })(Tap = Controllers.Tap || (Controllers.Tap = {}));
        })(Controllers = Extensions.Controllers || (Extensions.Controllers = {}));
    })(Extensions = ProStyle.Extensions || (ProStyle.Extensions = {}));
})(ProStyle || (ProStyle = {}));
//# sourceMappingURL=prostyle.controller.tap.js.map