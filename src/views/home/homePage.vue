<template>
    <div>
        <aside-nav :asideNames="contentList" @selectItem="selectItem"></aside-nav>
        <content-list :contentList="contentList" :curSelect="curSelect"></content-list>
    </div>
</template>

<script>
    import asideNav from "@/components/layout/asideNav";
    import contentList from "@/components/layout/contentList";

    export default {
        name: "homePage",
        components: {contentList, asideNav},
        methods: {
            selectItem: function (val) {
                this.curSelect = val;
            }
        },
        mounted() {

        },
        data: function () {
            return {//这块数据应该放到各组件中自己获取 因为还没搭建后台，所以暂时放父组件里
                curSelect: 1,
                contentList: [{
                    "name": "父亲写的散文诗",
                    "id": 0,
                    "content": [{
                        "content": "2006夏天。我拿着中考成绩单，狂奔向还在田边插秧的父母。告诉他们我考上重点高中了，父亲把秧苗一扔。走，回家吃饭去。[流泪][流泪][流泪]",
                        "like": 595946,
                        "username": "千里的小故事",
                        "sname": "父亲写的散文诗"
                    }, {
                        "content": "“我自问这辈子没做过坏事，为什么要被生活勒住喉咙。”爸爸在日记里写到。",
                        "like": 537617,
                        "username": "Park-",
                        "sname": "父亲写的散文诗"
                    }, {
                        "content": "我的父亲没有散文诗，他的手上全是茧",
                        "like": 340252,
                        "username": "山川追河",
                        "sname": "父亲写的散文诗"
                    }, {
                        "content": "明天是父亲节 恐怕是我生命中的最后一个父亲节了 父亲肺腺癌晚期 怕是.... 此时此刻 我远在2000多公里的大学图书馆里 想念着父亲 还有15天 才能回去 父亲 加油！女儿一直都在！",
                        "like": 291321,
                        "username": "cherry0310",
                        "sname": "父亲写的散文诗"
                    }, {
                        "content": "昨天和一位长辈聊天  他说 我女儿也许随时都可以放下我  可我只有到死的那一天才能放下她。她永远不会明白我有多爱她",
                        "like": 241622,
                        "username": "大脸妹x",
                        "sname": "父亲写的散文诗"
                    }, {
                        "content": "高考那天父亲去世了，幸好老师把我稳定下来了考完了最后一科，现在才会在大学里看到了更宽阔的世界。明天就父亲节了，想您了",
                        "like": 189933,
                        "username": "言茶-",
                        "sname": "父亲写的散文诗"
                    }, {
                        "content": "写写删删，始终不知道怎么措词好，我的父亲其实很平凡，什么都给不了我，却又什么都给了我",
                        "like": 176348,
                        "username": "Nice自意識",
                        "sname": "父亲写的散文诗"
                    }, {
                        "content": "2010年中考，分数下来后，爸爸双手叉腰站在门口，路过的邻居问我的成绩，爸爸特傲娇的说700多分。其实那年全县700多的有800人，我不觉得自己有多棒，反倒是爸爸，一直都以我为荣。对不起，很久不曾让你引以为傲了。",
                        "like": 135703,
                        "username": "fantasyhi",
                        "sname": "父亲写的散文诗"
                    }, {
                        "content": "二十年前。\n“爸爸，这是什么呀”\n“爸爸，他为什么会这样”\n“爸爸，你看这个，怎么回事啊”\n“爸爸，你连电视都会修啊”\n\n二十年后。\n“儿子，你玩的这是什么”\n“儿子，你帮我看看怎么不动了”\n“儿子，这个为什么一闪一闪的”\n“儿子，你连电脑都会修啊”",
                        "like": 121000,
                        "username": "嘘安静zh",
                        "sname": "父亲写的散文诗"
                    }, {
                        "content": "2016年六月十七日在图书馆复习司考的第91天听到这首歌哭了。不止是父亲，母亲，以及带我长大的伯娘，想到他们，心里最柔软的部分就不受控制。伯娘患了严重的病，每天都在医院，爸爸最近也住院了，有时候真的是怕，怕那些我们无能为力无可奈何的事。",
                        "like": 95392,
                        "username": "淡花幽雨",
                        "sname": "父亲写的散文诗"
                    }, {
                        "content": "我这两天中考 ，我父亲是个养虾的，为了我安心考试，坐了4个小时的车，把两塘虾置于不顾，我真的不想让他失望，走出考场那一刻，我的语文作文就是我真想拥抱他，我出来的时候真的想抱住他宽厚的背，然后告诉他:你儿子可以，别担心，可是却没有迈开步子，我却连我爱你都难以启齿",
                        "like": 82678,
                        "username": "风起若殇",
                        "sname": "父亲写的散文诗"
                    }, {
                        "content": "十一岁父亲就癌症去世了，我家在湖南，老爸知道自己的时间不多了，把我一个人送到了河南塔沟武校学武术，在那边挨打挨骂，第一年回来就瘦了几十斤。我问我爸为什么要送我去学武术，他说以后没人保护你了，你要学着自己保护自己，保护妈妈。现在将近十年过去了，我有了自己的武馆。21岁",
                        "like": 72530,
                        "username": "一夜燃尽在灯火阑珊-",
                        "sname": "父亲写的散文诗"
                    }, {
                        "content": "犹记得当年考了全乡第一名，老爸问我要啥奖励！我毫不犹豫的回答想吃泡面，最后拿着2块钱买了包1块五的康师傅，加五毛钱的火腿肠！这是我一生最穷的回忆，却穷的很开心！",
                        "like": 64152,
                        "username": "如果再见不要红着眼",
                        "sname": "父亲写的散文诗"
                    }, {
                        "content": "中年以后的男人\n时常会觉得孤独\n因为他一睁开眼睛\n周围都是要依靠他的人\n却没有他可以依靠的人\n――张爱玲",
                        "like": 64014,
                        "username": "精彩的简单_",
                        "sname": "父亲写的散文诗"
                    }, {
                        "content": "父亲才写了几句话，字里行间却充满一生为家庭为孩子默默付出的辛酸。许飞唱得让人想哭，父母不容易，好好爱他们。",
                        "like": 48719,
                        "username": "Grink",
                        "sname": "父亲写的散文诗"
                    }]
                }, {
                    "name": "【钢琴】离骚（Cover 易烊千玺）",
                    "id": 1,
                    "content": [{
                        "content": "饮一句离骚别愁，醉一世报国春秋，奈何长路漫漫上下难求，哀民生几多忧，唱一句离骚别愁，叹一生知己难留，心之所善无悔 终化作灰，此梦若颠沛，留给后人玩味。",
                        "like": 328,
                        "username": "拾坞_",
                        "sname": "【钢琴】离骚（Cover 易烊千玺）"
                    }, {
                        "content": "昼夜的钢琴总会使人安静下来",
                        "like": 201,
                        "username": "星星能掉完吗",
                        "sname": "【钢琴】离骚（Cover 易烊千玺）"
                    }, {
                        "content": "虽然大佬曾经说过，表白会显得手黑，但还是忍不住要表白玺子哥，表白主上[爱心]希望千玺能出越来越多的单曲，希望主上越来越好，然后被更多的人知道有个弹钢琴棒唱歌也很棒的人他叫昼夜[爱心]",
                        "like": 184,
                        "username": "阿易先森x",
                        "sname": "【钢琴】离骚（Cover 易烊千玺）"
                    }, {
                        "content": "日与月 夏与冬 更迭难休，草与木 盛与衰 问美人依旧，流言四起的风，撩拨君臣异梦，问天可否为明心而见证，浊与清 美与陋 颠倒众生，芷与兰 蕙与荃 难吐芳馨，何故逆流而上，何为孤芳自赏，无人知晓故乡变他乡，乱世而不群，谁可解君意，云游而远去，心却系故里。",
                        "like": 128,
                        "username": "拾坞_",
                        "sname": "【钢琴】离骚（Cover 易烊千玺）"
                    }, {
                        "content": "饮一句离骚别愁，醉一世报国春秋，奈何长路漫漫上下难求，哀民生几多忧，唱一句离骚别愁，叹一生知己难留，心之所善无悔 终化作灰，此梦若颠沛，留给后人玩味，浊与清 美与陋 颠倒众生，芷与兰 蕙与荃 难吐芳馨，何故逆流而上，何为孤芳自赏，无人知晓故乡变他乡。",
                        "like": 99,
                        "username": "拾坞_",
                        "sname": "【钢琴】离骚（Cover 易烊千玺）"
                    }, {
                        "content": "乱世而不群，谁可解君意，云游而远去，心却系故里，饮一句离骚别愁，醉一世报国春秋，奈何长路漫漫上下难求，哀民生几多忧，唱一句离骚别愁，叹一生知己难留，心之所善无悔 终化作灰，此梦若颠沛，留给后人玩味，路漫漫其修远兮，吾将上下求索，长太息以掩涕兮。",
                        "like": 86,
                        "username": "拾坞_",
                        "sname": "【钢琴】离骚（Cover 易烊千玺）"
                    }, {
                        "content": "易烊千玺[亲亲]",
                        "like": 56,
                        "username": "小王子烊烊的先知大人",
                        "sname": "【钢琴】离骚（Cover 易烊千玺）"
                    }, {
                        "content": "易 烊 千 玺",
                        "like": 12,
                        "username": "海綿宝宝喜歡我",
                        "sname": "【钢琴】离骚（Cover 易烊千玺）"
                    }, {
                        "content": "他们说 如果你喜欢一个男孩子 就给他拍一张天空的照片 因为 晓看天色暮看云 行也思君坐也思君.",
                        "like": 10,
                        "username": "收集賬號已註銷_",
                        "sname": "【钢琴】离骚（Cover 易烊千玺）"
                    }]
                }, {
                    "name": "New Beginnings",
                    "id": 2,
                    "content": [{
                        "content": "bìe冲动，好好听，不急哈",
                        "like": 825,
                        "username": "我說還是妳說",
                        "sname": "New Beginnings"
                    }, {
                        "content": "就像在海边度假 浪花在歌唱 海鸥在飞翔 看着潮来潮往 好像人生也没有什么非做不可的事情",
                        "like": 562,
                        "username": "赤赤大王",
                        "sname": "New Beginnings"
                    }, {
                        "content": "祝福我吧，明天我也要追寻大海！人生第一次去大海！和我的朋友！20年了，我的梦终归是朋友陪伴而不是亲人助圆。[流泪]海陵岛，我来了！",
                        "like": 322,
                        "username": "_我有一个钢琴梦",
                        "sname": "New Beginnings"
                    }, {
                        "content": "虽说我从小在海边长大，我的家在平湖市的一个小鱼湾它的名字很美——白沙湾，那里的人很质朴，那里的的人靠着出海打鱼为生，不知何时起从外围有了化工厂，人们也不在靠着出海打鱼过日子，依赖的大海被围了起来或许已经有十年之久了吧，而今，那个美丽的白沙湾也已不复从前——至即将消失的白沙湾",
                        "like": 231,
                        "username": "秋以过冬",
                        "sname": "New Beginnings"
                    }, {
                        "content": "其实，人最向往的就是这样，聆听大自然的交集百感，感受自然美的感官，心无旁骛，生活的城市里，有多少人能没有杂念，干干净净的活着，朋友有多少能理解自己那敏感的心境，我喜欢大海，干净又透明，可我知道，没人见过你的眼镜，与心，抬走走下去吧，自己           ―致最向往的地方与人性",
                        "like": 181,
                        "username": "At加藤达老湿-",
                        "sname": "New Beginnings"
                    }, {
                        "content": "     当你想念一个人的时候，尽情去想念吧，也许有一天，你再也不会如此想念他了。到了那一天，你会想念曾经那么想念一个人的滋味。当你爱一个人的时候，尽情去爱吧，也让他知道你是如此爱他。也许有一天，当你长大了，受过太多的伤，失望太多，思虑也多了，你再也不会那么炽烈地爱一个人。送我首推吧",
                        "like": 136,
                        "username": "思绪开了光",
                        "sname": "New Beginnings"
                    }, {
                        "content": "小时候经常跟爸爸出海，见过风平浪静的大海，见过波涛汹涌的大海。但是，我最喜欢的还是我爸爸眼中的大海，曾经以海为生的他，曾经对潮涨潮退无所不知的他还是离开了。也许，天堂的海也很迷人呢",
                        "like": 112,
                        "username": "竹野c",
                        "sname": "New Beginnings"
                    }, {
                        "content": "我没有这么多感情，只是一个想找地方躲避舍友的打鼾[心碎]",
                        "like": 77,
                        "username": "白川千夏",
                        "sname": "New Beginnings"
                    }]
                }, {
                    "name": "Je te veux",
                    "id": 3,
                    "content": [{
                        "content": "法国作曲家艾瑞克·萨蒂所作的《我需要你》，这首曲子一开始的旋律就让人感觉到绵绵情意在空气中漂流！我了解你的苦衷我亲爱的，我接受你的誓言，让我做你的爱人。网易另有一欢快版本，搜索“萨提 我渴望你”即可。",
                        "like": 430,
                        "username": "庄子的鱼儿",
                        "sname": "Je te veux"
                    }, {
                        "content": "四重奏过来哒～雀模仿老爷爷扶眼镜超级可爱啊！！！[爱心][爱心][爱心]",
                        "like": 272,
                        "username": "鵺臾",
                        "sname": "Je te veux"
                    }, {
                        "content": "高数考了10分 冷静 要冷静",
                        "like": 241,
                        "username": "wrzdtc",
                        "sname": "Je te veux"
                    }, {
                        "content": "韩剧《虽然30但仍17》里面女主角给男主角推荐的。希望他俩早日相认。",
                        "like": 238,
                        "username": "KarlieWsy",
                        "sname": "Je te veux"
                    }, {
                        "content": "超虐心的第八集[心碎]至于我的喜欢  就随处飘荡吧  倒着躺着 在不经意的时候想起你  喜欢到会忘了喜欢你。",
                        "like": 128,
                        "username": "帐号已注销",
                        "sname": "Je te veux"
                    }, {
                        "content": "奶酪陷阱里四手连谈",
                        "like": 113,
                        "username": "Stay9002",
                        "sname": "Je te veux"
                    }, {
                        "content": "虽然30但仍17\n有多少人是被这部剧安利过来的[可爱]",
                        "like": 98,
                        "username": "cherryleeco",
                        "sname": "Je te veux"
                    }, {
                        "content": "虽然30但是17     原来这就是传说中的 家具音乐[大笑]",
                        "like": 92,
                        "username": "根号1111",
                        "sname": "Je te veux"
                    }, {
                        "content": "爱而不得的曲子",
                        "like": 90,
                        "username": "飞天侠_",
                        "sname": "Je te veux"
                    }, {
                        "content": "“我之所以Je te veux, 是因为Je t'aime. ”",
                        "like": 72,
                        "username": "温柔的棘",
                        "sname": "Je te veux"
                    }, {
                        "content": "一片叶子 没有任何响声 落在肩膀上 我身上的宇宙 将手放了上去 很轻",
                        "like": 56,
                        "username": "一只阿卡",
                        "sname": "Je te veux"
                    }, {
                        "content": "从丁海寅的半之半来的~",
                        "like": 34,
                        "username": "了不得的小怪物",
                        "sname": "Je te veux"
                    }, {
                        "content": "：我只要她一半的一半。",
                        "like": 26,
                        "username": "Dare_哗哗向上飞的鸟",
                        "sname": "Je te veux"
                    }, {
                        "content": "半之半",
                        "like": 16,
                        "username": "PetitSieboldii",
                        "sname": "Je te veux"
                    }, {
                        "content": "我看快了 还以为你说高考数学10分[大哭]",
                        "like": 14,
                        "username": "Auspicious_Orange",
                        "sname": "Je te veux"
                    }]
                }, {
                    "name": "Jingle Bell Rock",
                    "id": 4,
                    "content": [{
                        "content": "看了评论才知道2018高考还有173天，可是我的高考已经过去了923天，只是刚刚才想起。",
                        "like": 4270,
                        "username": "IMq_waydown",
                        "sname": "Jingle Bell Rock"
                    }, {
                        "content": "谁是佛系歌单进来的？不是啥考试考研背景音乐进来的。",
                        "like": 2184,
                        "username": "刘拎拎拎",
                        "sname": "Jingle Bell Rock"
                    }, {
                        "content": "总是不太敢看关于高中的影视剧，害怕伤感，也担心大学匆匆结束，还有926天...希望能达到理想的高度吧。",
                        "like": 691,
                        "username": "walmus宸",
                        "sname": "Jingle Bell Rock"
                    }, {
                        "content": "在清香肆溢的清晨\n\n在艳阳高照的午后\n\n在落日余晖的黄昏\n\n在月明星稀的夜晚",
                        "like": 594,
                        "username": "明月铺满窗台",
                        "sname": "Jingle Bell Rock"
                    }, {
                        "content": "乾坤未定，你我皆是黑马。\n\n——致2019所有考生",
                        "like": 152,
                        "username": "亿吨榆榆榆",
                        "sname": "Jingle Bell Rock"
                    }, {
                        "content": "“你喜歡我扎馬尾還是披頭髮”\n“我不喜歡你”",
                        "like": 133,
                        "username": "民國騎士",
                        "sname": "Jingle Bell Rock"
                    }, {
                        "content": "距离2019年高考还有165天",
                        "like": 65,
                        "username": "月慧说她种个月亮吧",
                        "sname": "Jingle Bell Rock"
                    }, {
                        "content": "我是日推耶",
                        "like": 40,
                        "username": "苍苍QAQ",
                        "sname": "Jingle Bell Rock"
                    }, {
                        "content": "“你喜欢我扎马尾还是披头发”​\n“​我喜欢你任何样子”[憨笑]",
                        "like": 34,
                        "username": "曲依云鬓",
                        "sname": "Jingle Bell Rock"
                    }, {
                        "content": "好听！💖💟💕💓💗💘💝💞",
                        "like": 29,
                        "username": "若水若愚若愚若水",
                        "sname": "Jingle Bell Rock"
                    }, {
                        "content": "我猜Muji里面就喜欢放这种歌[呆]",
                        "like": 22,
                        "username": "今天吃chocolatechips吃到撑",
                        "sname": "Jingle Bell Rock"
                    }, {
                        "content": "现在是15:30，已经玩了一天的手机了，静下心来好好做点作业吧，虽然期末考考差了，但也要积极面对，偷了这么多天的懒，那就偶尔勤奋一下吧",
                        "like": 20,
                        "username": "MaveRick--M",
                        "sname": "Jingle Bell Rock"
                    }, {
                        "content": "三岛由纪夫曾说：“人将同等强度的爱意保持一分钟以上是不可能的。”\n是的，我只会越来越爱你，有增无减。",
                        "like": 16,
                        "username": "周周周心云",
                        "sname": "Jingle Bell Rock"
                    }, {
                        "content": "若乾坤已定，便扭转乾坤。",
                        "like": 15,
                        "username": "-Lisianthus-",
                        "sname": "Jingle Bell Rock"
                    }, {"content": "来自私人FM", "like": 13, "username": "雪国榛子", "sname": "Jingle Bell Rock"}]
                }, {
                    "name": "风",
                    "id": 5,
                    "content": [{
                        "content": "暗恋是风，喜欢是海啸，爱是海。可人，是孤岛。",
                        "like": 10869,
                        "username": "港岛美煤",
                        "sname": "风"
                    }, {
                        "content": "鲸鱼马戏团陪我度过了高三的很多很多夜晚 现在还能想起来那个时候熬夜做文综 困得不行就听歌 想起来还是会难过 鲸鱼马戏团的歌听的人不多 就像自己的宝贝一样小心翼翼的珍藏着",
                        "like": 5853,
                        "username": "格兰芬多三年级在读",
                        "sname": "风"
                    }, {
                        "content": "我要考重大!!还有一年!!我不信我不能进步个三百名!!!!!!!我要加油!!!!!!我要让所有爱我的人以我为傲!!!!!!!!!!",
                        "like": 3872,
                        "username": "小杜030",
                        "sname": "风"
                    }, {
                        "content": "那会刚上大学，有个很喜欢的女孩，我俩每天都聊天到很晚，每次她实在困得不行了就给我分享一首歌，让我听着睡觉。那天她给我分享了这首，那晚我没有睡着，脑子里全是她。",
                        "like": 3112,
                        "username": "倒也不至于",
                        "sname": "风"
                    }, {
                        "content": "上一次看到你进步的排名，又看到我离你好远的分数，眼泪直接冲出来了，在快1点时打开灯背起了政治，那样真的太难过了，我不希望我们分开后在你越来越好的同时我变得越来越不像人。",
                        "like": 1875,
                        "username": "小陆争渡",
                        "sname": "风"
                    }, {
                        "content": "一种很微妙的感觉，把这首歌刚好收藏在歌单［我听见有风］，男孩唱这句的时候像风儿缱绻越过山岗，这个曲子是融进大海和慵懒的波浪一起拍打石峭，感受到了和男孩一样的心境，就像被一阵温柔的细风吹过。",
                        "like": 1492,
                        "username": "霍格沃茨什么时候给我寄录取通知",
                        "sname": "风"
                    }, {
                        "content": "“那些口無遮攔的傷害是真的，\n那些後知後覺的深愛也是真的。”",
                        "like": 1308,
                        "username": "Palpitate丨1996",
                        "sname": "风"
                    }, {
                        "content": "原来有那么多喜欢O叔又喜欢网易云的单身狗",
                        "like": 981,
                        "username": "大白不知道白不白",
                        "sname": "风"
                    }, {
                        "content": "这样一想，那人不是被爱包围着",
                        "like": 788,
                        "username": "鱼摆摆烧之神",
                        "sname": "风"
                    }, {
                        "content": "风、海浪、黑夜、星星、一闪一闪的绿色浮标、宁静少年回头微微一笑🌌远源，下次滑雪去吗？",
                        "like": 784,
                        "username": "凉风拂过",
                        "sname": "风"
                    }, {
                        "content": "可孤岛上微风习习，拂过繁枝茂叶；偶尔有海啸掠过，依旧地处大海中央。",
                        "like": 591,
                        "username": "香草果冻酱",
                        "sname": "风"
                    }, {
                        "content": "从百词斩过来，终究是找到了这首单纯的静心的曲子，2017，平凡的一年，改变的一年，再见。",
                        "like": 508,
                        "username": "somefuns",
                        "sname": "风"
                    }, {
                        "content": "海浪拍打着岸边的礁石，肆意地喧嚣着往事。海风调皮地撩拨着男孩的发梢，男孩望着美丽的大海陷入了沉思，漫天星辰，不禁为你动了情💚#很王很丸圆#🎣",
                        "like": 420,
                        "username": "樱花宙斯xBouquet丶",
                        "sname": "风"
                    }, {
                        "content": "最后一下他好像同时钓起了所有人的心🌊",
                        "like": 405,
                        "username": "bbwzstkalb_",
                        "sname": "风"
                    }, {"content": "你们没有发现吗，今天的日期正反读都是今天。2018.10.2", "like": 392, "username": "人间蜜橘", "sname": "风"}]
                }, {
                    "name": "少年の梦",
                    "id": 6,
                    "content": [{
                        "content": "小时候，我爸总跟我说，少玩一点，等你不忙于学习了，想玩什么玩什么。可我现在长大了，不想看动画片了，不想玩小霸王了，不想看肥皂剧了。再也回不去了，记忆里，有一个春天的下午，一只大风筝一直在天上飞，手里握着的线，是少年锦时。",
                        "like": 9558,
                        "username": "帐号已注销",
                        "sname": "少年の梦"
                    }, {
                        "content": "高中午睡后的自然醒 散落的试卷 摇曳的风扇 潦草的板书 微开的门 我的梦",
                        "like": 5203,
                        "username": "你是天然色",
                        "sname": "少年の梦"
                    }, {
                        "content": "手贱点开评论，瞬间感觉不好了。非但没助眠，反而听的心里越来越压抑，眼睛越来越酸。满眼都是高中午后操场上的阳光和她随风的长发。虽然现在已为人爸，她已成妈，时间流逝的让我害怕，希望我们年到花甲，还能一起听歌说话回忆少时的青春年华。",
                        "like": 3505,
                        "username": "杨某某和许小懒",
                        "sname": "少年の梦"
                    }, {
                        "content": "“我终将遗忘梦境中的那些路径,山峦与田野,遗忘那些永远不能实现的梦。”",
                        "like": 2622,
                        "username": "ZetaEstelle",
                        "sname": "少年の梦"
                    }, {
                        "content": "醉了[亲亲][亲亲]大学生活一团糟，找了无数个理由，却没有让自己变好。",
                        "like": 2437,
                        "username": "hahahana",
                        "sname": "少年の梦"
                    }, {
                        "content": "。。。评论都是满分作文啊，我好慌",
                        "like": 1981,
                        "username": "少年时飞逝而过",
                        "sname": "少年の梦"
                    }, {
                        "content": "明天我的生日，我去拿研究生录取书。",
                        "like": 1959,
                        "username": "帐号已注销",
                        "sname": "少年の梦"
                    }, {
                        "content": "会不会在异乡的这些年只是一个梦境，醒来时我正坐在高中柳树下的长椅发呆。而他们看到我一个人都会疑惑地问起你。似乎在大家的眼里,  我们一直都该在一起。",
                        "like": 1822,
                        "username": "燕居者",
                        "sname": "少年の梦"
                    }, {
                        "content": "终于明白这首《少年の梦》的意义：少年的梦，敏感而又易碎；说不出口，或许才最美好。远远地望见，安静的思念。这或许就是我，最留恋的时刻。少年的梦，请你静静聆听。",
                        "like": 1341,
                        "username": "-Liyann1994-",
                        "sname": "少年の梦"
                    }, {
                        "content": "现在，我放下手中的笔，停住脑中的不住思考，带上耳机，我在听，听一个人的梦，听一时的寂静，听晚风的声音，今年六月，我的梦会如期而至的吧。晚安，好梦。",
                        "like": 1245,
                        "username": "星野雪奈",
                        "sname": "少年の梦"
                    }, {
                        "content": "与年龄无关,与记忆有染,童年时光里的瘦小脸庞,被岁月无情的加上一笔后,你可曾记得那时年幼的梦想?——《少年的梦》这是当年初入大学那会儿在ST里听到的清新吉他纯乐,依旧还记得流行的云,奇迹之山,以及少年的梦曾经是治愈我的音乐良药!!感谢岸部真明带来如此动人的吉他独奏曲![亲亲]",
                        "like": 929,
                        "username": "小如年",
                        "sname": "少年の梦"
                    }, {
                        "content": "弹吉他快5年了，超级喜欢这首曲子，而我一直没有勇气去练这首曲子，因为她非常喜欢这首歌，以前怕技术太烂弹来她嘲笑我，我那幼小的自尊心害怕被受到伤害，而现在她已经结婚了，现在想去练这首曲子，又怕想起难过，或许就像她一样根本不属于我，这首歌我也不会再去练了，难过时听听。看看评论，就够了",
                        "like": 802,
                        "username": "印花短袖",
                        "sname": "少年の梦"
                    }, {
                        "content": "看过无数的经典，却依然过不好自己的人生；读过无数的励志故事，却仍然无法实现自己年少时候的梦想",
                        "like": 796,
                        "username": "潇夜_",
                        "sname": "少年の梦"
                    }, {
                        "content": "看了一个小故事，讲的是少年爱情，男孩执著，女孩成熟理智，男孩喜欢女孩，女孩并不讨厌男孩，把他当作交心朋友，喜欢听一样的音乐看一样的书，他们叫它，心灵的共振。故事的最后，女孩还是留下了男孩一个人，远走他乡。相爱已精疲力尽，相守便听天由命，大概如此。至于少年的梦，醒了才敢讲给别人听。",
                        "like": 778,
                        "username": "林中宇轩",
                        "sname": "少年の梦"
                    }, {
                        "content": "给我一个温暖的雨季，我比你想象中的更经不起淋漓。别总告诉我那些你的过去、毕竟我的未来还在那里。我想谢谢你的关心，我也抱歉我的嘴硬。春虽近，也却还是有风凛冽。南北虽远，岁月无情  妈妈我爱你  ",
                        "like": 627,
                        "username": "天黑捉迷藏",
                        "sname": "少年の梦"
                    }]
                }, {
                    "name": "伝えたい気持ち",
                    "id": 7,
                    "content": [{
                        "content": "“上帝，请你一定要保佑他。保佑他不管遇到什么困难，都能战胜，都不被挫败。保佑他哪怕哭过多少次，摔倒过多少次，仍有站起来的顽强。保佑他所遇见的人，都是内心温暖的人。”",
                        "like": 4242,
                        "username": "gulublue",
                        "sname": "伝えたい気持ち"
                    }, {
                        "content": "长大之后听纯净的音乐好像是种讽刺",
                        "like": 2113,
                        "username": "裂化渣油",
                        "sname": "伝えたい気持ち"
                    }, {
                        "content": "删除永远比下载容易，为什么忘记要比记住难。",
                        "like": 1807,
                        "username": "独与失",
                        "sname": "伝えたい気持ち"
                    }, {
                        "content": "自己乐于挥霍的时间，并不是挥霍",
                        "like": 1149,
                        "username": "给你一个orange",
                        "sname": "伝えたい気持ち"
                    }, {
                        "content": "暗恋的女孩儿啊，你要加油。唯有自己更优秀才有资格站在他身边。早点睡吧，明天的地球还要靠你拯救呢，晚安我的女孩儿[爱心]",
                        "like": 882,
                        "username": "网络不好请稍后",
                        "sname": "伝えたい気持ち"
                    }, {
                        "content": "记得抑郁症最严重的时候，就是靠着轻音乐和家人的陪伴才撑下去的…今天的日推里又出现了类似的轻音乐，虽然心里还是会很难受，但我更多的是感谢自己挺了过来…三年的时间，一个人在外求学，每个星期都是自己去医院挂号咨询，按时吃药，积极治疗。上月拿到自己的检查结果时差点哭出来，终于是轻度抑郁了",
                        "like": 827,
                        "username": "丿心愿丶",
                        "sname": "伝えたい気持ち"
                    }, {
                        "content": "经历了这么多之后已无法静心再看一部番了",
                        "like": 709,
                        "username": "有栖零儿",
                        "sname": "伝えたい気持ち"
                    }, {
                        "content": "“和他相遇一定是命中注定，如果不是的话，我就不再相信命运了.”",
                        "like": 587,
                        "username": "尼古拉_拉斯托尔古耶夫",
                        "sname": "伝えたい気持ち"
                    }, {
                        "content": "高考结束 毕业的我们\n发现学习才是最有趣的事情\n虽然终于想睡到什么时候就起床\n但生物钟告诉我 昨天的我经历了高考\n班上暗恋的那个男生\n也没有勇气对他说出\n因为毕业的我们\n终究会各奔东西\n2018.06.09",
                        "like": 496,
                        "username": "Vicky侯子",
                        "sname": "伝えたい気持ち"
                    }, {
                        "content": "听着音乐，去码关于**的故事。偶尔也会上网查阅资料。在他人看来，好像除了对闲暇时间的浪费，并无其他作用。其实我想说的是，这种事对于我来说，拥有的价值绝非他人所见之象。对于他人的能否理解，我觉得并不重要。只要对于自己有着不同的意义之事，那便是最重要的事，就应该毫不犹豫地去做。",
                        "like": 468,
                        "username": "芈雪瑶",
                        "sname": "伝えたい気持ち"
                    }, {
                        "content": "我们的存在",
                        "like": 308,
                        "username": "蓝色星球z",
                        "sname": "伝えたい気持ち"
                    }, {
                        "content": "能让人全身心慢下来的曲子",
                        "like": 233,
                        "username": "温庭筠你在哪儿",
                        "sname": "伝えたい気持ち"
                    }, {
                        "content": "如果有什么病毒，删除是可以做到比下载难得，忘不掉，是你中了毒。",
                        "like": 198,
                        "username": "清初--",
                        "sname": "伝えたい気持ち"
                    }, {
                        "content": "拜托 让我姥爷不要有事",
                        "like": 168,
                        "username": "帐号已注销",
                        "sname": "伝えたい気持ち"
                    }, {
                        "content": "我想要得抑郁症 就不会怕死了啊 可能会有人说我虚伪 我知道 也怕过 我什么都不如别人 学习不好 人际关系也不好 长相也不好看 还是死肥宅 这样的我 活着还有什么意义呢  可能是我养的小仓鼠还没到他的吱星吧\n曾经追过的人有了情侣空间 羡慕啊\n曾经我也想一了百了，现在也是。",
                        "like": 163,
                        "username": "那天就快要死了",
                        "sname": "伝えたい気持ち"
                    }]
                }, {
                    "name": "I saw you smile today. I almost forgot that you faded away",
                    "id": 8,
                    "content": [{
                        "content": "可以翻译成——音容犹在，物是人非",
                        "like": 20948,
                        "username": "Air-Ivy",
                        "sname": "I saw you smile today. I almost forgot that you faded away"
                    }, {
                        "content": "我今天看到你的笑容，我差点忘了我已经失去你了。（渣翻",
                        "like": 9722,
                        "username": "乐松",
                        "sname": "I saw you smile today. I almost forgot that you faded away"
                    }, {
                        "content": "我死的时候希望你能来看我，因为和你每次见面我都会有心跳的感觉。",
                        "like": 8009,
                        "username": "帐号已注销",
                        "sname": "I saw you smile today. I almost forgot that you faded away"
                    }, {
                        "content": "《东邪西毒》里有段台词：“以前我认为那句话很重要，因为我相信有些事说出来就是一生一世。现在想想，说不说也没有什么区别。有些事情是会变的。”现在感动自己肺腑的那些话，在他看来无关痛痒，在未来的自己看来，也是笑话。",
                        "like": 5516,
                        "username": "_Julien_",
                        "sname": "I saw you smile today. I almost forgot that you faded away"
                    }, {
                        "content": "我要怎么和你解释 在我毫不犹豫爱你时 恐惧同样 无边无际",
                        "like": 5156,
                        "username": "帐号已注销",
                        "sname": "I saw you smile today. I almost forgot that you faded away"
                    }, {
                        "content": "躺在床上，睡不着觉，突然想到高中生活，今天已经结束了[流泪]",
                        "like": 4133,
                        "username": "VON-VON",
                        "sname": "I saw you smile today. I almost forgot that you faded away"
                    }, {
                        "content": "已经凌晨四点多了……今天回了奶奶家看看养我十六年的老人，他们已经快走不了路了……小时候……爷爷骑着单车送我上学放学……每次回到家奶奶啊都会做好我喜欢吃的土豆丝……每次奶奶都会四五点起床做早饭叫我起床已经十六年了，不管什么季节，什么天气，而我即将离开这里，去开始新的生活。",
                        "like": 3725,
                        "username": "开杜甫的高达",
                        "sname": "I saw you smile today. I almost forgot that you faded away"
                    }, {
                        "content": "突然感觉自己很自私，从小到大我没有为照顾我的人做好任何事，今天走出了奶奶家外面还下着小雨，为走到了十字路口回头发现奶奶在雨里望着我，向着我挥手，大声说等我回来还做我喜欢吃的土豆丝…………",
                        "like": 3674,
                        "username": "开杜甫的高达",
                        "sname": "I saw you smile today. I almost forgot that you faded away"
                    }, {
                        "content": "从来不敢对任何人说自己累，因为从来不会有依靠，坐在床头静静的发呆听歌，也许才是我最好的发泄方式吧！没有歇斯底里，没有痛不欲生，就这样静静的看着墙壁，往向远方，飘向远方",
                        "like": 3499,
                        "username": "睡在屋梁上的貓",
                        "sname": "I saw you smile today. I almost forgot that you faded away"
                    }, {
                        "content": "“陪你弹钢琴的女孩死了，阳光从缝隙里照进来，成为黑暗里的一缕光亮。光束照到键盘上，像她的手指。”",
                        "like": 3141,
                        "username": "约亨开着小破车",
                        "sname": "I saw you smile today. I almost forgot that you faded away"
                    }, {
                        "content": "笑靥犹在畔，伸手却消散。",
                        "like": 2419,
                        "username": "挽夜风",
                        "sname": "I saw you smile today. I almost forgot that you faded away"
                    }, {
                        "content": "一个人坐到满天星宿，说：我们回去\n一棵草怔了很久\n在若有若无的风里\n扭动了一下",
                        "like": 2296,
                        "username": "该帐号不存在-勿扰",
                        "sname": "I saw you smile today. I almost forgot that you faded away"
                    }, {
                        "content": "今天5月30日，离高考还有8天，平时一直都是嘻嘻哈哈的她很认真问了我想去的地方，但我没有答，也没有资本答，关于我们，可能更多的是分叉路口…很感谢你出现在我生命里，也很恨你在这平白无味的日子让我有所挂念[大笑]但愿我们永远不等于空集",
                        "like": 1424,
                        "username": "Oooooooooooz",
                        "sname": "I saw you smile today. I almost forgot that you faded away"
                    }, {
                        "content": "      有时候我真的想和你\n      掏心掏肺的讲些什么\n      可每次话到嘴边就猛然顿悟\n      我什么身份我讲个屁啊 ​​​",
                        "like": 1392,
                        "username": "泡面的碗还没有洗",
                        "sname": "I saw you smile today. I almost forgot that you faded away"
                    }, {
                        "content": "找不到人说想来还是网易云的人最暖吧，新学校，我竞选主持成功了，越来越多的流言蜚语，说不就写了几篇作文发杂志吗装什么逼。不就跟老师关系好选个主持而已有什么了不起诸如此类。心里很难受以前的我很内向不敢表现自己现在我敢了，可我还是感觉我什么都没得到[心碎]陌生人给我点温暖好不好",
                        "like": 1379,
                        "username": "冬_厌",
                        "sname": "I saw you smile today. I almost forgot that you faded away"
                    }]
                }],

            }
        },

    }
</script>

<style module>

</style>