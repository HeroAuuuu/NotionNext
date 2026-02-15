/**
 * 另一个落地页主题
 */
const CONFIG = {
    PROXIO_WELCOME_COVER_ENABLE: true, //是否显示页面进入的欢迎文字
    PROXIO_WELCOME_TEXT: '', // 欢迎文字，留空则不启用

    // 英雄区块导航
    PROXIO_HERO_ENABLE: true, // 开启英雄区
    PROXIO_HERO_TITLE_1: 'Astrum - 专注强大工具开发的创新团队', // 英雄区文字
    PROXIO_HERO_TITLE_2: '通过无与伦比的功能，成倍提升用户数字体验价值', // 英雄区文字
    // 英雄区两个按钮，如果TEXT留空则隐藏按钮
    PROXIO_HERO_BUTTON_1_TEXT: '开始体验', // 英雄区按钮
    PROXIO_HERO_BUTTON_1_URL:
        '/download', // 英雄区按钮
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
    PROXIO_FEATURE_1_ICON_IMG_URL: '', // 图片图标选填，默认是fas图标，如果需要图片图标可以填写图片地址，示例/avatar.pngAdd commentMore actions
    PROXIO_FEATURE_1_TITLE_1: '长期的支持维护',
    PROXIO_FEATURE_1_TEXT_1: '为软件提供长久的更新维护，直至稳定',

    PROXIO_FEATURE_2_ICON_CLASS: 'fa-solid fa-comments',
    PROXIO_FEATURE_2_ICON_IMG_URL: '', 
    PROXIO_FEATURE_2_TITLE_1: '开放的意见接纳',
    PROXIO_FEATURE_2_TEXT_1: '与每一位用户紧密合作，融合反馈意见，打造超越预期的设计',

    PROXIO_FEATURE_3_ICON_CLASS: 'fa-solid fa-search',
    PROXIO_FEATURE_3_ICON_IMG_URL: '',
    PROXIO_FEATURE_3_TITLE_1: '细节把控',
    PROXIO_FEATURE_3_TEXT_1: '精益求精雕琢每个功能，确保成品精致有效，令人过目难忘',

    PROXIO_FEATURE_BUTTON_TEXT: '了解更多', // 按钮文字
    PROXIO_FEATURE_BUTTON_URL: '/project', // 按钮跳转

    // 首页生涯区块
    PROXIO_CAREER_ENABLE: true, // 区块开关
    PROXIO_CAREER_TITLE: '进程',
    PROXIO_CAREER_TEXT:
        'Astrum 的发展进程',

    // 生涯内容卡牌 ，title是标题 ，bio是备注，text是详情
    PROXIO_CAREERS: [
        { title: 'Dawn 时期', bio: '2020-2021', text: '2020年底，Dawn 成立且开发了第一个项目 “Dawn For Coh2”，一款专为《Company of Heroes 2（英雄连2）》开发的工具，帮助玩家更方便、更快捷的安装游戏的汉化与补丁，赢得了玩家的诸多好评。次年年初 “Dawn For The Crew 2” 完成开发，一款专为《The Crew 2（飙酷车神2）》开发的辅助软件，提供了强大的功能支持。' },
        { title: 'Dawnight 时期', bio: '2021-2024', text: '黎明亦或黑暗。2021年，Dawn更名为Dawnight。在此期间，Dawnight开发了《Apex Legends》《bilibili》《Dingtalk（钉钉）》《Sons Of The Forest（森林之子）》《Together Farm（一起玩农场）》等软件与游戏的辅助工具，为用户提供了诸如用户数据分析、全自动化签到与打卡、全自动AKF、游戏存档修改器等强力功能。' },
        { title: 'Astrum 时期', bio: '2024-至今', text: '2024年，Astrum 成立并发布 “Astrum For Cloud Class”。在这一年多的时间里，我们很高兴让极域&云课堂反控工具取得了质的飞跃。其提供的强大的、独一无二的功能令我们叹为观止。此外我们还开发了PyPubg与PyATT-Win。今后，Astrum将继续专注于开发更多具有创新性的软件工具，为大家带更好的使用体验。' }
    ],

    // 首页用户测评区块
    PROXIO_TESTIMONIALS_ENABLE: true, // 测评区块开关
    PROXIO_TESTIMONIALS_TITLE: '用户反馈',
    PROXIO_TESTIMONIALS_TEXT_1: '我们的用户怎么说',
    PROXIO_TESTIMONIALS_TEXT_2:
        '无数用户选择使用Astrum，通过帮助手册、交流平台以及邮件咨询，达成了自己满意的效果',

    // 用户测评处的跳转按钮
    PROXIO_TESTIMONIALS_BUTTON_URL: '/download',
    PROXIO_TESTIMONIALS_BUTTON_TEXT: '现在开始！',

    // 这里不支持CONFIG和环境变量，需要一一修改此处代码。
    PROXIO_TESTIMONIALS_ITEMS: [
        {
            PROXIO_TESTIMONIALS_ITEM_TEXT:
                '感谢大佬的开源。开源项目的算法和大佬的解答让我学到了很多，希望大佬能开发更多的项目！！',
            PROXIO_TESTIMONIALS_ITEM_AVATAR:
                'https://pic1.imgdb.cn/item/684d911e58cb8da5c84c642c.png',
            PROXIO_TESTIMONIALS_ITEM_NICKNAME: 'IAPymodem',
            PROXIO_TESTIMONIALS_ITEM_DESCRIPTION: 'Astrum 用户',
            PROXIO_TESTIMONIALS_ITEM_URL: 'javascript:void(0);'
        },
        {
            PROXIO_TESTIMONIALS_ITEM_TEXT:
                'COH2的汉化补丁真的很好用，还附带解锁国家功能，希望COH3也能有这样好用的工具',
            PROXIO_TESTIMONIALS_ITEM_AVATAR:
                'https://pic1.imgdb.cn/item/684d91ef58cb8da5c84c648c.jpg',
            PROXIO_TESTIMONIALS_ITEM_NICKNAME: 'GuaeWRin',
            PROXIO_TESTIMONIALS_ITEM_DESCRIPTION: 'Company of Heroes 2 玩家',
            PROXIO_TESTIMONIALS_ITEM_URL: 'javascript:void(0);'
        },
        {
            PROXIO_TESTIMONIALS_ITEM_TEXT:
                '可以用，很强，但是在我电脑上用up主的识别阈值不太灵敏，我把opencv检测阈值改成0.25后效果好很多🤩',
            PROXIO_TESTIMONIALS_ITEM_AVATAR:
                '/avatar.png',
            PROXIO_TESTIMONIALS_ITEM_NICKNAME: '史玉珍_zZ',
            PROXIO_TESTIMONIALS_ITEM_DESCRIPTION: 'Pubg 玩家',
            PROXIO_TESTIMONIALS_ITEM_URL: 'javascript:void(0);'
        },
        {
            PROXIO_TESTIMONIALS_ITEM_TEXT:
                '感谢提供这么好的项目哈哈 攻击教师端极域可太强了 上课都不太赶拿来用',
            PROXIO_TESTIMONIALS_ITEM_AVATAR:
                'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd52f6766-3e32-4c3d-8529-46e1f214360f%2Ffavicon.svg?table=collection&id=7d76aad5-a2c4-4d9a-887c-c7913fae4eed&width=400',
            PROXIO_TESTIMONIALS_ITEM_NICKNAME: '匿名用户',
            PROXIO_TESTIMONIALS_ITEM_DESCRIPTION: 'Jiyu 用户',
            PROXIO_TESTIMONIALS_ITEM_URL: 'javascript:void(0);'
        },
        {
            PROXIO_TESTIMONIALS_ITEM_TEXT:
                'tc2挂机自己跑圈太爽了，直接致富，希望大佬能出个地平线5的蓝图',
            PROXIO_TESTIMONIALS_ITEM_AVATAR:
                'https://pic1.imgdb.cn/item/684d951458cb8da5c84c65fd.png',
            PROXIO_TESTIMONIALS_ITEM_NICKNAME: 'Lin',
            PROXIO_TESTIMONIALS_ITEM_DESCRIPTION: 'The Crew 2 玩家',
            PROXIO_TESTIMONIALS_ITEM_URL: 'javascript:void(0);'
        },
        {
            PROXIO_TESTIMONIALS_ITEM_TEXT: '特别推荐',
            PROXIO_TESTIMONIALS_ITEM_AVATAR:
                'https://pic1.imgdb.cn/item/68dbd084c5157e1a884ae6ea.jpg',
            PROXIO_TESTIMONIALS_ITEM_NICKNAME: '花开富贵',
            PROXIO_TESTIMONIALS_ITEM_DESCRIPTION: 'Astrum 特别邀请',
            PROXIO_TESTIMONIALS_ITEM_URL: 'javascript:void(0);'
        }
    ],

    //   FAQ 常见问题模块
    PROXIO_FAQ_ENABLE: true, // 常见问题模块开关
    PROXIO_FAQ_TITLE: '常见问题解答',
    PROXIO_FAQ_TEXT_1: '有任何问题吗？请看这里',
    PROXIO_FAQ_TEXT_2: '我们收集了常见的用户疑问',
    PROXIO_FAQS: [
        { q: 'Astrum开发的软件收费吗？', a: 'Astrum的所有软件都是免费的，您可以前往<a href="https://afdian.com/a/Astrum">https://afdian.com/a/Astrum</a>来支持我们。如果软件是您在其他渠道花钱购买的，请立即找商家退款并举报。' },
        { q: '游戏辅助工具有被封禁风险吗？', a: '几乎没有。Astrum一直非常重视软件安全与用户的游戏账号安全。得益于Astrum合法的软件功能与安全性，目前为止在Astrum所开发的所有产品中，没有任何一款产品被任何反作弊系统所检测到过。' },
        { q: '工具有使用教程吗？', a: '对于开源项目，我们有非常详细的开发文档。对于大部分闭源项目，在许多重要功能旁我们都设置了提示或说明来引导用户正确使用。' },
        { q: '如何与我们联系？', a: '最好的方法是通过我们的邮箱来与我们取得联系：support@astrumstudio.top' },
    ],

    // 关于作者区块
    PROXIO_ABOUT_ENABLE: true, // 关于作者区块区块开关
    PROXIO_ABOUT_TITLE: '关于 Astrum',
    PROXIO_ABOUT_TEXT_1: 'Astrum 前身最早成立于2020年底，致力于开发高效便捷的游戏工具，旨在提升用户的游戏体验和效率',
    PROXIO_ABOUT_TEXT_2:
        '为何不加入我们呢？',
    PROXIO_ABOUT_PHOTO_URL: 'https://pic1.imgdb.cn/item/684da23458cb8da5c84c6db5.png',
    PROXIO_ABOUT_KEY_1: '成立年限',
    PROXIO_ABOUT_VAL_1: '5年+',
    PROXIO_ABOUT_KEY_2: '用户',
    PROXIO_ABOUT_VAL_2: '1000+',
    PROXIO_ABOUT_KEY_3: '开发项目',
    PROXIO_ABOUT_VAL_3: '10+',
    PROXIO_ABOUT_KEY_4: '累积创作时长（小时）',
    PROXIO_ABOUT_VAL_4: '1000+',

    PROXIO_ABOUT_BUTTON_URL: '/download',
    PROXIO_ABOUT_BUTTON_TEXT: '立即体验',

    // 横向滚动文字
    PROXIO_BRANDS_ENABLE: true, // 滚动文字
    PROXIO_BRANDS: [
        'Company of Heroes 2',
        'The Crew 2',
        'Apex Legends',
        'Bilibili',
        'Dingtalk',
        'Sons Of The Forest',
        'Cloud Class',
        'Mythware',
        'Together Farm',
        'Arknights',
        'PUBG',
        'And more'
    ],

    PROXIO_FOOTER_SLOGAN: '通过无与伦比的功能，成倍提升用户数字体验价值',

    // 页脚三列菜单组
    // 页脚菜单
    PROXIO_FOOTER_LINKS: [
        {
            name: '产品',
            menus: [
                {
                    title: 'Astrum',
                    href: '/project'
                }
            ]
        },
        
        {
            name: '资源',
            menus: [
                { title: '技术文档', href: 'https://astrum-3.gitbook.io/main/help/helplog' },
                {
                    title: '帮助文档',
                    href: 'https://astrum-3.gitbook.io/'
                }
            ]
        },
            {
            name: '团队',
            menus: [
                {
                    title: '服务条款',
                    href: '/terms-of-use'
                },
                {
                    title: '隐私政策',
                    href: '/privacy-policy'
                }
            ]
        },
    ],

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
    PROXIO_CTA_TITLE: '与我们同行',
    PROXIO_CTA_TITLE_2: '让我们立刻启动程序',
    PROXIO_CTA_DESCRIPTION:
        '通过爱发电赞助，您能够支持我们的开发，让我们更加动力十足',
    PROXIO_CTA_BUTTON: true, // 是否显示按钮
    PROXIO_CTA_BUTTON_URL:
        'https://afdian.com/a/Astrum',
    PROXIO_CTA_BUTTON_TEXT: '赞助我们',

    PROXIO_POST_REDIRECT_ENABLE: true, // 默認開啟重定向
    PROXIO_POST_REDIRECT_URL: 'https://www.astrumstudio.top/', // 重定向域名
    PROXIO_NEWSLETTER: process.env.NEXT_PUBLIC_THEME_PROXIO_NEWSLETTER || false // 是否开启邮件订阅 请先配置mailchimp功能 https://docs.tangly1024.com/article/notion-next-mailchimp
}
export default CONFIG
