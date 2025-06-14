/**
 * 另一个落地页主题
 */
const CONFIG = {
    PROXIO_WELCOME_COVER_ENABLE: true, //是否显示页面进入的欢迎文字
    PROXIO_WELCOME_TEXT: '', // 欢迎文字，留空则不启用

    // 英雄区块导航
    PROXIO_HERO_ENABLE: true, // 开启英雄区
    PROXIO_HERO_TITLE_1: 'Astrum - 专注强大工具开发的创新团队	', // 英雄区文字
    PROXIO_HERO_TITLE_2: '通过无与伦比的功能，成倍提升用户数字体验价值	', // 英雄区文字
    // 英雄区两个按钮，如果TEXT留空则隐藏按钮
    PROXIO_HERO_BUTTON_1_TEXT: '开始体验', // 英雄区按钮
    PROXIO_HERO_BUTTON_1_URL:
        'https://docs.tangly1024.com/article/vercel-deploy-notion-next', // 英雄区按钮
    PROXIO_HERO_BUTTON_2_TEXT: '在Github上关注', // 英雄区按钮
    PROXIO_HERO_BUTTON_2_URL: 'https://github.com/tangly1024/NotionNext', // 英雄区按钮
    PROXIO_HERO_BUTTON_2_ICON: '/images/starter/github.svg', // 英雄区按钮2的图标，不需要则留空

    // 英雄区配图，如需隐藏，改为空值即可 ''
    PROXIO_HERO_BANNER_IMAGE: '', // hero区背景，默认是获取Notion背景，如需另外配置图片可以填写在这里
    PROXIO_HERO_BANNER_IFRAME_URL: 'https://my.spline.design/spacetexttransition-exYfu0UrkZbLXX0FcrVoAkgs/', // hero背景区内嵌背景网页 ，可以配置一个网页地址，例如动画网页https://my.spline.design/untitled-b0c6e886227646c34afc82cdc6de4ca2/


    // 文章区块
    PROXIO_BLOG_ENABLE: true, // 首页博文区块开关
    PROXIO_BLOG_TITLE: '作品',
    PROXIO_BLOG_COUNT: 2, // 首页博文区块展示前4篇文章
    PROXIO_BLOG_TEXT_1: 'Astrum的最新动态',

    // 区块默认内容显示文章的summary文本，但也支持用自定义图片或logo德国替换掉占位显示内容
    PROXIO_BLOG_PLACEHOLDER_IMG_URL_1: 'https://pic1.imgdb.cn/item/684d81f058cb8da5c84c5a22.png', // 填写要替换成的图片，支持图床或直接上传到项目中，示例  /images/feature-1.webp
    PROXIO_BLOG_PLACEHOLDER_IMG_URL_2: 'https://pic1.imgdb.cn/item/684d81f058cb8da5c84c5a22.png',
    PROXIO_BLOG_PLACEHOLDER_IMG_URL_3: '',
    PROXIO_BLOG_PLACEHOLDER_IMG_URL_4: '',


    PROXIO_ANNOUNCEMENT_ENABLE: true, //公告文字区块

    // 特性区块
    PROXIO_FEATURE_ENABLE: true, // 特性区块开关
    PROXIO_FEATURE_TITLE: '我们的优势',
    PROXIO_FEATURE_TEXT_1: 'Astrum为用户带来更强劲的选择',
    PROXIO_FEATURE_TEXT_2:
        '独一无二的强大功能，日新月异的更新迭代，层出不穷的新奇创意',

    // 特性1
    PROXIO_FEATURE_1_ICON_CLASS: 'fa-solid fa-stopwatch', // fas图标
    PROXIO_FEATURE_1_ICON_IMG_URL: '', // 图片图标选填，默认是fas图标，如果需要图片图标可以填写图片地址，示例/avatar.png
    PROXIO_FEATURE_1_TITLE_1: '长期的支持维护',
    PROXIO_FEATURE_1_TEXT_1: '为软件提供长久的更新维护，直至稳定',

    PROXIO_FEATURE_2_ICON_CLASS: 'fa-solid fa-comments',
    PROXIO_FEATURE_2_ICON_IMG_URL: '', 
    PROXIO_FEATURE_2_TITLE_1: '开放的意见接纳',
    PROXIO_FEATURE_2_TEXT_1: '与每一位用户紧密合作，融合反馈意见，打造超越预期的设计',

    PROXIO_FEATURE_3_ICON_CLASS: 'fa-solid fa-search',
    PROXIO_FEATURE_2_ICON_IMG_URL: '',
    PROXIO_FEATURE_3_TITLE_1: '细节把控',
    PROXIO_FEATURE_3_TEXT_1: '精益求精雕琢每个功能，确保成品精致有效，令人过目难忘',

    PROXIO_FEATURE_BUTTON_TEXT: '了解更多', // 按钮文字
    PROXIO_FEATURE_BUTTON_URL: 'https://github.com/tangly1024/NotionNext', // 按钮跳转

    // 首页生涯区块
    PROXIO_CAREER_ENABLE: true, // 区块开关
    PROXIO_CAREER_TITLE: '进程',
    PROXIO_CAREER_TEXT:
        'Astrum的发展进程',

    // 生涯内容卡牌 ，title是标题 ，bio是备注，text是详情
    PROXIO_CAREERS: [
        { title: 'Dawn 时期', bio: '2020-2021', text: '2020年底，Dawn 成立且开发了第一个项目 “Dawn For Coh2”，一款专为《Company of Heroes 2（英雄连2）》开发的工具，帮助玩家更方便、更快捷的安装游戏的汉化与补丁，赢得了玩家的诸多好评。次年年初 “Dawn For The Crew” 完成开发，一款专为《The Crew 2（飙酷车神2）》开发的辅助软件，提供了强大的功能支持。' },
        { title: 'Dawnight 时期', bio: '2021-2024', text: '黎明亦或黑暗。2021年，Dawn更名为Dawnight。在此期间，Dawnight开发了《Apex Legends》《bilibili》《Dingtalk（钉钉）》《Sons Of The Forest（森林之子）》《Together Farm（一起玩农场）》等软件与游戏的辅助工具，为用户提供了诸如用户数据分析、全自动化签到与打卡、全自动AKF、游戏存档修改器等强力功能。' },
        { title: 'Astrum 时期', bio: '2024-至今', text: '2024年，Astrum 成立并发布 “Astrum For Cloud Class”。在这一年多的时间里，我们很高兴让极域&云课堂反控工具取得了质的飞跃。其提供的强大的、独一无二的功能令我们叹为观止。此外还开发了PyPubg与PyATT-Win。今后，Astrum将继续专注于开发更多具有创新性的软件工具，为大家带更好的使用体验。' }
    ],

    // 首页用户测评区块
    PROXIO_TESTIMONIALS_ENABLE: true, // 测评区块开关
    PROXIO_TESTIMONIALS_TITLE: '用户反馈',
    PROXIO_TESTIMONIALS_TEXT_1: '我们的用户怎么说',
    PROXIO_TESTIMONIALS_TEXT_2:
        '无数用户选择使用Astrum，通过帮助手册、交流平台以及邮件咨询，达成了自己满意的效果',

    // 用户测评处的跳转按钮
    PROXIO_TESTIMONIALS_BUTTON_URL: '/about',
    PROXIO_TESTIMONIALS_BUTTON_TEXT: '现在开始！',

    // 这里不支持CONFIG和环境变量，需要一一修改此处代码。
    PROXIO_TESTIMONIALS_ITEMS: [
        {
            PROXIO_TESTIMONIALS_ITEM_TEXT:
                '感谢大佬的开源。开源项目的算法和大佬的解答让我学到了很多，希望大佬能开发更多的项目！！',
            PROXIO_TESTIMONIALS_ITEM_AVATAR:
                'https://i1.hdslb.com/bfs/face/b718d2ededa4faeaeb4aef3db39f88a22069e082.jpg@128w_128h_1c_1s.webp',
            PROXIO_TESTIMONIALS_ITEM_NICKNAME: 'IAPymodem',
            PROXIO_TESTIMONIALS_ITEM_DESCRIPTION: 'Astrum用户',
            PROXIO_TESTIMONIALS_ITEM_URL: ''
        },
        {
            PROXIO_TESTIMONIALS_ITEM_TEXT:
                '很喜欢这个主题，本代码小白用三天台风假期搭建出来了，还根据大佬的教程弄了自定义域名，十分感谢，已请喝咖啡~',
            PROXIO_TESTIMONIALS_ITEM_AVATAR:
                'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F0d33d169-f932-41ff-ac6b-88a923c08e02%2F%25E5%25A4%25B4%25E5%2583%258F.jfif?table=collection&id=7787658d-d5c0-4f34-8e32-60c523dfaba3&width=400',
            PROXIO_TESTIMONIALS_ITEM_NICKNAME: 'Asenkits',
            PROXIO_TESTIMONIALS_ITEM_DESCRIPTION: '阿森的百宝袋 站长',
            PROXIO_TESTIMONIALS_ITEM_URL: 'https://asenkits.top/'
        },
        {
            PROXIO_TESTIMONIALS_ITEM_TEXT:
                '呜呜呜，经过一个下午的努力，终于把博客部署好啦，非常感谢Tangly1024大佬的框架和教程，这是我有生之年用过的最好用的博客框架┭┮﹏┭┮。从今之后，我就可以在自己的博客里bb啦，( •̀ ω •́ )y ',
            PROXIO_TESTIMONIALS_ITEM_AVATAR:
                '/avatar.png',
            PROXIO_TESTIMONIALS_ITEM_NICKNAME: 'DWIND',
            PROXIO_TESTIMONIALS_ITEM_DESCRIPTION: '且听风吟 站长',
            PROXIO_TESTIMONIALS_ITEM_URL: 'https://www.dwind.top/'
        },
        {
            PROXIO_TESTIMONIALS_ITEM_TEXT:
                '感谢提供这么好的项目哈哈 之前一直不知道怎么部署(别的项目好难好复杂)这个相对非常简单 新手非常友好哦',
            PROXIO_TESTIMONIALS_ITEM_AVATAR:
                'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd52f6766-3e32-4c3d-8529-46e1f214360f%2Ffavicon.svg?table=collection&id=7d76aad5-a2c4-4d9a-887c-c7913fae4eed&width=400',
            PROXIO_TESTIMONIALS_ITEM_NICKNAME: '迪升disheng ',
            PROXIO_TESTIMONIALS_ITEM_DESCRIPTION: 'AI资源分享 Blog',
            PROXIO_TESTIMONIALS_ITEM_URL: 'https://blog.disheng.org/'
        },
        {
            PROXIO_TESTIMONIALS_ITEM_TEXT:
                '灰常感谢大佬的博客项目，能将博客和notion结合起来，这一直是我挺期待的博客模式。',
            PROXIO_TESTIMONIALS_ITEM_AVATAR:
                '/avatar.png',
            PROXIO_TESTIMONIALS_ITEM_NICKNAME: 'AnJhon',
            PROXIO_TESTIMONIALS_ITEM_DESCRIPTION: 'Anjhon`s Blog 站长',
            PROXIO_TESTIMONIALS_ITEM_URL: 'https://www.anjhon.top'
        },
        {
            PROXIO_TESTIMONIALS_ITEM_TEXT: '用好久了，太感谢了',
            PROXIO_TESTIMONIALS_ITEM_AVATAR:
                '/avatar.png',
            PROXIO_TESTIMONIALS_ITEM_NICKNAME: 'LUCEN',
            PROXIO_TESTIMONIALS_ITEM_DESCRIPTION: 'LUCEN考验辅导 站长',
            PROXIO_TESTIMONIALS_ITEM_URL: 'https://www.lucenczz.top/'
        }
    ],

    //   FAQ 常见问题模块
    PROXIO_FAQ_ENABLE: true, // 常见问题模块开关
    PROXIO_FAQ_TITLE: '常见问题解答',
    PROXIO_FAQ_TEXT_1: '有任何问题吗？请看这里',
    PROXIO_FAQ_TEXT_2: '我们收集了常见的用户疑问',
    PROXIO_FAQS: [
        { q: 'NotionNext有帮助文档吗？', a: 'NotionNext提供了<a href="https://docs.tangly1024.com/about" className="underline">帮助文档</a>，操作<a href="https://www.bilibili.com/video/BV1fM4y1L7Qi/" className="underline">演示视频</a>，以及<a href="https://docs.tangly1024.com/article/chat-community" className="underline">交流社群</a>来协助您完成网站的搭建部署' },
        { q: '部署后要如何编写文章？', a: '您可以在Notion中之间添加或修改类型为Post的页面，内容将被实时同步在站点中，详情参考<a className="underline" href="https://docs.tangly1024.com/article/start-to-write">《帮助文档》</a>' },
        { q: '站点部署失败，更新失败？', a: '通常是配置修改错误导致，请检查配置或者重试操作步骤，或者通过Vercel后台的Deployments中找到错误日志，并向网友求助' },
        { q: '文章没有实时同步？', a: '先检查Notion_Page_ID是否正确配置，其次由于博客的每个页面都有独立缓存，刷新网页后即可解决' },
    ],

    // 关于作者区块
    PROXIO_ABOUT_ENABLE: true, // 关于作者区块区块开关
    PROXIO_ABOUT_TITLE: '关于作者',
    PROXIO_ABOUT_TEXT_1: 'I am an Architect Turned Into a Product Designer',
    PROXIO_ABOUT_TEXT_2:
        'With a background in architecture, I now apply my expertise to product design, blending aesthetics, functionality, and innovation. My goal is to create modern, user-focused designs that bring your vision to life.',
    PROXIO_ABOUT_PHOTO_URL: '/avatar.png',
    PROXIO_ABOUT_KEY_1: '经验年限',
    PROXIO_ABOUT_VAL_1: '10年+',
    PROXIO_ABOUT_KEY_2: '客户',
    PROXIO_ABOUT_VAL_2: '1000+',
    PROXIO_ABOUT_KEY_3: '交付项目',
    PROXIO_ABOUT_VAL_3: '5000+',
    PROXIO_ABOUT_KEY_4: '累积创作时长（小时）',
    PROXIO_ABOUT_VAL_4: '10000+',

    PROXIO_ABOUT_BUTTON_URL: '/about',
    PROXIO_ABOUT_BUTTON_TEXT: '关于我',

    // 横向滚动文字
    PROXIO_BRANDS_ENABLE: true, // 滚动文字
    PROXIO_BRANDS: [
        'Web Design',
        'Logo Design',
        'Mobile App Design',
        'Product Design'
    ],

    PROXIO_FOOTER_SLOGAN: '我们通过技术为品牌和公司创造数字体验。',

    // 页脚三列菜单组
    // 页脚菜单
    PROXIO_FOOTER_LINKS: [
        {
            name: '友情链接',
            menus: [
                {
                    title: 'Tangly的学习笔记',
                    href: 'https://blog.tangly1024.com'
                },
                {
                    title: 'NotionNext',
                    href: 'https://www.tangly1024.com'
                }
            ]
        },
        {
            name: '开发者',
            menus: [
                { title: 'Github', href: 'https://github.com/tangly1024/NotionNext' },
                {
                    title: '开发帮助',
                    href: 'https://docs.tangly1024.com/article/how-to-develop-with-notion-next'
                },
                {
                    title: '功能反馈',
                    href: 'https://github.com/tangly1024/NotionNext/issues/new/choose'
                },
                {
                    title: '技术讨论',
                    href: 'https://github.com/tangly1024/NotionNext/discussions'
                },
                {
                    title: '关于作者',
                    href: 'https://blog.tangly1024.com/about'
                }
            ]
        }],

    PROXIO_FOOTER_BLOG_LATEST_TITLE: '最新文章',

    PROXIO_FOOTER_PRIVACY_POLICY_TEXT: '隐私政策',
    PROXIO_FOOTER_PRIVACY_POLICY_URL: '/privacy-policy',

    PROXIO_FOOTER_PRIVACY_LEGAL_NOTICE_TEXT: '法律声明',
    PROXIO_FOOTER_PRIVACY_LEGAL_NOTICE_URL: '/legacy-notice',

    PROXIO_FOOTER_PRIVACY_TERMS_OF_SERVICE_TEXT: '服务协议',
    PROXIO_FOOTER_PRIVACY_TERMS_OF_SERVICE_URL: '/terms-of-use',

    // 404页面的提示语
    PROXIO_404_TITLE: '我们似乎找不到您要找的页面。',
    PROXIO_404_TEXT: '抱歉！您要查找的页面不存在。可能已经移动或删除。',
    PROXIO_404_BACK: '回到主页',

    // 页面底部的行动呼吁模块
    PROXIO_CTA_ENABLE: true,
    PROXIO_CTA_TITLE: '与我建立联系',
    PROXIO_CTA_TITLE_2: '让我们立刻启动您的项目',
    PROXIO_CTA_DESCRIPTION:
        '访问NotionNext的操作文档，我们提供了详细的教程，帮助你即刻搭建站点',
    PROXIO_CTA_BUTTON: true, // 是否显示按钮
    PROXIO_CTA_BUTTON_URL:
        '/about',
    PROXIO_CTA_BUTTON_TEXT: '联系我',

    PROXIO_POST_REDIRECT_ENABLE: true, // 默認開啟重定向
    PROXIO_POST_REDIRECT_URL: 'https://blog.tangly1024.com', // 重定向域名
    PROXIO_NEWSLETTER: process.env.NEXT_PUBLIC_THEME_PROXIO_NEWSLETTER || false // 是否开启邮件订阅 请先配置mailchimp功能 https://docs.tangly1024.com/article/notion-next-mailchimp
}
export default CONFIG
