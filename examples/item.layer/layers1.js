var layers1 = Pro.Motion.Stories.layers1 = Pro.Motion.Stories.layers1 || {};

layers1.story = {
    canvas:{init:{bg:"#666"}},
    frame:{setup:{aspectRatio:1}, init:{bg:"#FFF"}},
    items:[
        {
            setup:{text:["Layer", "Cropping", "Techniques"]},
            init:{font:20, style:"caps", color:"transparent", textShadow:[0,0,1,"#666"]}
        },
        {
            itemType:"layer",
            init:{crop:true, size:[20,20], corners:10, bg:"#EEE", pos:[-44,-25], shadow:true},
            scripts:[
                {action:{anim:{dur:3, ease:"bounce"}, pos:{y:25}}},
                {action:{anim:4, pos:{x:44}}},
                {action:{delay:5, anim:{dur:3, ease:"elastic"}, pos:[-44,-25]}}
            ],
            item:{
                setup:{text:["Layer", "Cropping", "Techniques"]},
                init:{font:21, style:"caps", color:"#666", pos:[44,25]},
                scripts:[
                    {action:{anim:{dur:3, ease:"bounce"}, pos:{y:-25}}},
                    {action:{anim:4,pos:{x:-44}}},
                    {action:{delay:5, anim:{dur:3, ease:"elastic"}, pos:[44,25]}}
                ]
            }
        }
    ]
};
