var layers2 = ProStyle.Stories.layers2 = ProStyle.Stories.layers2 || {};

layers2.story = {
    frame:{
        setup:{aspectRatio:1}
    },
    item:{
        itemType:"layer",
        init:{
            corners:true,
            size:[90,70],
            rot:{x:25},
            bg:"#FFF"
        },
        scripts:[
            {
                action:{anim:{dur:25, ease:"linear"}, rot:1800}
            },
            {
                actions:[
                    {delay:5, anim:7, bg:"#EEE", shadow:[0,0,1,"#094766"]},
                    {delay:8, anim:3, bg:"#FFF", shadow:false}
                ]
            }
        ],
        items:[
            {
                itemType:"image",
                setup:{
                    src:"../pro/pro-1000x829.png",
                    width:70
                },
                init: {
                    pos:{z:5}
                },
                action:{
                    anim:{dur:25, ease:"linear"},
                    rot:-1800
                }
            },
            {
                itemType:"text",
                setup:{text:"MOTION"},
                init:{font:8, pos:[0,30,21], opacity:0, color:"#FFF", textShadow:[0,0,1,"#094766"]},
                actions:[
                    {delay:6, anim:3, opacity:100},
                    {delay:11, anim:3, opacity:0}
                ],
                charAction:{
                    anim:{dur:0.7, stagger:0.1, yoyo:true, repeat:25},
                    pos:{z:40}
                }
            }
        ]
    }
};
