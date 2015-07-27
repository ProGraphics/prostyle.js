var eases = ProStyle.Stories.eases = ProStyle.Stories.eases || {};

eases.story = {
    classes:{
        label:{ font:6, anchor:-50, origin:-50, rot:-90 }
    },
    frame:{
        padding:15,
        init:{bg:"#BADA55", corners:true}
    },
    items:[
        {   text:"linear",
            init:{pos:[-48,-35], class:"label"}
        },
        {   itemType:"image", src:"ball.gif", width:5,
            init:{pos:[-48,-32]},
            action:{anim:[4,"linear",1,0,true], pos:[-48,45]}
        },
        {   text:"bounce",
            init:{pos:[-36,-35], class:"label"}
        },
        {   itemType:"image", src:"ball.gif", width:5,
            init:{pos:[-36,-32]},
            action:{anim:[4,"bounce",1,0,true], pos:[-36,45]}
        },
        {   text:"elastic",
            init:{pos:[-24,-35], class:"label"}
        },
        {   itemType:"image", src:"ball.gif", width:5,
            init:{pos:[-24,-32]},
            action:{anim:[4,"elastic",1,0,true], pos:[-24,45]}
        },
        {   text:"back",
            init:{pos:[-12,-35], class:"label"}
        },
        {   itemType:"image", src:"ball.gif", width:5,
            init:{pos:[-12, -32]},
            action:{anim:[4,"back",1,0,true], pos:[-12,45]}
        },
        {   text:"sine",
            init:{pos:[0,-35], class:"label"}
        },
        {   itemType:"image", src:"ball.gif", width:5,
            init:{pos:[0, -32]},
            action:{anim:[4,"sine",1,0,true], pos:[0,45]}
        },
        {   text:"curve",
            init:{pos:[12,-35], class:"label"}
        },
        {   itemType:"image", src:"ball.gif", width:5,
            init:{pos:[12,-32]},
            action:{anim:[4,"curve",1,0,true], pos:[12,45]}
        },
        {   text:"expo",
            init:{pos:[24,-35], class:"label"}
        },
        {   itemType:"image", src:"ball.gif", width:5,
            init:{pos:[24,-32]},
            action:{anim:[4,"expo",1,0,true], pos:[24,45]}
        },
        {   text:"slow mo",
            init:{pos:[36,-35], class:"label"}
        },
        {   itemType:"image", src:"ball.gif", width:5,
            init:{pos:[36,-32]},
            action:{anim:[4,"slowmo less",1,0,true], pos:[36,45]}
        },
        {   text:"slow mo",
            init:{pos:[48,-35], class:"label"}
        },
        {   itemType:"image",src:"ball.gif", width:5,
            init:{pos:[48,-32]},
            action:{anim:[4,"slowmo more",1,0,true], pos:[48,45]}
        }
    ]
};
