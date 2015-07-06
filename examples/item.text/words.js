var words = Pro.Motion.Stories.words = Pro.Motion.Stories.words || {};

words.story = {
    frame:{
        init:{bg:"#BADA55", corners:true}
    },
    item:{
        text:["The Quick Brown", "Fox Jumped Over", "The Lazy Dog !"],
        init:{font:{size:14, lineHeight:100}, width:90},
        lineInit:{ padding:true },
        wordInit:{origin:[0,-50], rot:{x:100}, opacity:0, bg:"orange", border:true, corners:true, padding:true},
        wordAction:{anim:{dur:6, ease:"elastic", stag:0.12}, rot:false, opacity:false}
    }
};
