/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","d8c4303fc6f1e5c36f3d1018fb79f1d0"],["/404/bootstrap.min.css","04aca1f4cd3ec3c05a75a879f3be75a3"],["/404/gsap.min.js","663fd753cae2b462cf8ed119c3f991ab"],["/404/script.js","322da3240076a9673646598b1a962381"],["/404/style.css","79dea8e5e73583b0e618d36811625d72"],["/about/index.html","02fd04cc7e0d0a32ee3e274cf727a5fc"],["/archives/2020/03/index.html","2b96608679da5abce201bba5d484ad29"],["/archives/2020/04/index.html","dcf07df612e8cfa5eb7002d0d1b47311"],["/archives/2020/05/index.html","5d9546f2e0d3a87570fc252ee69eb0a8"],["/archives/2020/06/index.html","127996a5a72ec013c1d99421d0c57ab6"],["/archives/2020/07/index.html","01c29fa4bc7933141a0311b2a5d51d22"],["/archives/2020/08/index.html","c1fee9a31ead6f0096e152889ad32194"],["/archives/2020/index.html","567f840e7e5ccb40f7b92b945c22cb38"],["/archives/2020/page/2/index.html","755fe20d91fda5fad7b46010b72223e5"],["/archives/2020/page/3/index.html","4d94a3d8b3ee7bd26054a9af67f2f984"],["/archives/index.html","8c008de83aa4b7ad617c75321878907d"],["/archives/page/2/index.html","c9b4970a17b0ab4c9ec81cfe702e37c9"],["/archives/page/3/index.html","62d8fe66c1e017b25526e2501d587a79"],["/atom.xml","a28f9160aae87c5dead85f063c970b54"],["/av/index.html","6be72a8d670e5b26ab39e324ffe17465"],["/categories/洪炉点雪/index.html","a407d8a5d7ece1fad54631b29f98b181"],["/categories/温澜潮生/index.html","3cd4539f74ec9bace7cf3e4a75eaa706"],["/categories/烟岚云岫/index.html","29b049239487b2336b6ebfeabd9325f5"],["/categories/烟岚云岫/page/2/index.html","c93d5fefae7f015c577239450d54eae1"],["/categories/花晨月夕/index.html","d7d59bb78ee1a6179743160adb5c35fd"],["/category/index.html","c6b01445c169fd1538c4edf0ab91c5b6"],["/css/personal.css","da0fa1e63b99de35e02e4b56672b8642"],["/css/styles.css","49c3a3349c6392b36c041badea4fd961"],["/fonts/Lobster-Regular.eot","c05650666675c69e86b8ed43561351dd"],["/fonts/Lobster-Regular.svg","59be1b83c3c5dfa30ab3499240b2532d"],["/fonts/Lobster-Regular.ttf","d967160337532ac1c64aacbe7b550c0c"],["/fonts/Lobster-Regular.woff","065de5677fd9cdf082aad8c768eea193"],["/fonts/PoiretOne-Regular.eot","1186e11c6a3b9b3a95b018d0c08ea192"],["/fonts/PoiretOne-Regular.svg","81435524d0cec21814fb9173bd64d55b"],["/fonts/PoiretOne-Regular.ttf","618e00d8e606bf2fab9d0d8f4114fda3"],["/fonts/PoiretOne-Regular.woff","a8e6e3bb2d56b9b2b40ea416c823fdea"],["/fonts/calligraffitti-regular-webfont.eot","377f81b2cd0f1bdfd702dcb2ce5cf4af"],["/fonts/calligraffitti-regular-webfont.svg","38bac1d79752e09be37574fa44c62c54"],["/fonts/calligraffitti-regular-webfont.ttf","141f8a6ead3aa42476fdda28d6a8fe8d"],["/fonts/calligraffitti-regular-webfont.woff","913682346ca4f708fe03908267ea5542"],["/fonts/calligraffitti-regular-webfont.woff2","e09aab8562932436f523c24d0dce8460"],["/fonts/fontello.eot","761a9c0e81844ab6a776c4f8f81555f4"],["/fonts/fontello.svg","9bc89fd5555f0b0a235c2ee97ae8be88"],["/fonts/fontello.ttf","f4ae7ee270ebe8220c883292aa89a699"],["/fonts/fontello.woff","3cd8973d2fcaeb4bef5ef7ba73ef307a"],["/fonts/fontello.woff2","81270df2143b8978b92d53e492bab89c"],["/game/index.html","dde105f99562df9ffd06704043d1e094"],["/images/24e3/add.png","82c50a41afda63a0d6f8f71f9c88297a"],["/images/24e3/jh.png","6eafd90cdb2ccdf043027945008273e1"],["/images/24e3/meta.png","b3b9f2e7d120e2fbbe27cb4844047930"],["/images/24e3/mxjx.png","a2d302a6c9694c316063246cd8962416"],["/images/24e3/mxyz.png","d58d241f94ba9f241e1261f5415da19f"],["/images/24e3/sypz.png","972456356bb0c21f640b68046cab0721"],["/images/24e3/txt.png","cc538097ab196d81f0c98e3ec3357101"],["/images/24e3/txxx.png","31336e67b3ffd3942b786f64658c56cc"],["/images/24e3/ym.png","3f970c4166a9557abbbed5549fc611f8"],["/images/24e3/yz.png","59868674c453e9babb99c6d746a18713"],["/images/52cf/mcs.png","60e8578cbcacac416e07cb85e8922d05"],["/images/52cf/mcs1.png","7453155b83bf9b91101649de2c8b1817"],["/images/52cf/mcs2.png","90d98c3ab8b9f3de81545be7513e21f3"],["/images/52cf/mcsjava.png","14db039feab9a11a10f23372770e78d2"],["/images/52cf/mcsp.png","80e954b9b046db3a3bdb0447c67cfded"],["/images/52cf/mcsr.png","d66667e79d0264f27aa9f1109b0694ed"],["/images/52cf/mcss.png","45a3c476dac8e91844905ca5f3cf6479"],["/images/59ce/Environment.png","f34885e1a2cd3f9f8b9ddce9e34f4622"],["/images/59ce/Registry.png","95339cfb6b47e05810cfd7e85fceee65"],["/images/59ce/Registry1.png","8a91d1ffad174543a9541cb77af466a4"],["/images/59ce/TIM截图20200709130521.png","3b7ca23833c8b5c00dbdf04aa084df76"],["/images/59ce/TIM截图20200709130820.png","47700e63d615c3d13fedc5473cbcb4ac"],["/images/59ce/restorepoint.png","5436e85ed63528d6384e17dbb714c56a"],["/images/5bb9/Google2.png","6365dc9eecb3dbdaeedd5ea9c1f7150a"],["/images/5bb9/Google3.png","435479ac5ec29e5d7fd398e2ec5a05cb"],["/images/5bb9/Google4.png","3b327ff7c4c299338cd13b48d1bf7942"],["/images/5bb9/Google5.png","9eb3be1b80d9721f2250f6bf0f321efe"],["/images/5bb9/Google6.png","fae865a1c8307f5517738a9cfe6bcf1a"],["/images/5bb9/Google7.png","cc3bb229569ab519d85fe5594e7992e7"],["/images/5bb9/Google8.png","b99e215add1e2275d3268530cb7c3bf2"],["/images/5bb9/Goole1.png","e8c58238ca04c97f623b281374d1f80e"],["/images/5bb9/Senoruiweb.png","285344f16d3def446ee21698c45d04de"],["/images/5bb9/bd1.png","48ec732f0052a5833d07aa2c93eec881"],["/images/5bb9/bd2.png","40f43358978a113263bc5556c115a34f"],["/images/5bb9/bd3.png","02f98470ea65f89f3ebdafbff99a474a"],["/images/5bb9/bd4.png","d86b7bcc6a2ec70730b4367f69e339e3"],["/images/5bb9/bd5.png","c04417a497473170559f5840e107bf6d"],["/images/5bb9/blogt.png","9c71c616eb2413fd9a99b8d58c7de774"],["/images/5bb9/cor.png","aa2f8e7ae2e691707aab0a21d289a307"],["/images/5bb9/creative.png","6603be719b4abe6f78b04f366d98afc2"],["/images/5bb9/d1.png","0a6983b267955ee8ef2e6323aa300977"],["/images/5bb9/d2.png","aa85d16a85742d7ed49246f4e5533098"],["/images/5bb9/d3.png","b141a4e48509ce2bbc4a290e39268a59"],["/images/5bb9/d4.png","52febd620fffe82d005dcd76ba8983d6"],["/images/5bb9/d5.png","eb05925754dfd9c24ac924c5f2fba7aa"],["/images/5bb9/d6.png","7baecfab3aa3eface812966c0821527a"],["/images/5bb9/d7.png","8bb36f0b834329e90df3026a477cbce2"],["/images/5bb9/denoruiweb.png","e085458f86d6e14f5a2b4b21e5e1c05e"],["/images/5bb9/dm1.png","d47d412cebff8091308d1188cb3403ac"],["/images/5bb9/dm2.png","7f4ef9d81d04a57c17b966fdcd757b3e"],["/images/5bb9/dm3.png","ef5c3f60af7f7432f6e55877998aaf2c"],["/images/5bb9/dm4.png","49a73010b77db90be723b62fa19d1913"],["/images/5bb9/dm5.png","4be9d10fd8493d4f83d05be2f92d0bc0"],["/images/5bb9/dm6.png","f99186c2af6cf10ab5fa6a3d789bd1d8"],["/images/5bb9/dm7.png","d742426e368bf24a935ac5cd6922d2bc"],["/images/5bb9/git.png","7292cff5e144dd93897dd6d246839fdf"],["/images/5bb9/gitb.png","06095e097dc4043c195778618f28bb10"],["/images/5bb9/gitrepo.png","4f7587ce093743c776be631bb92b3f4f"],["/images/5bb9/gitt.png","cddcb436cf251380b96b4b67e4266538"],["/images/5bb9/gittalk1.png","7e409d3dbd3dbef8ba8759757434848b"],["/images/5bb9/gittalk2.png","5d0a9bc9851d1e19789601fa151a95c6"],["/images/5bb9/gittalk3.png","435ac38c68ccf869c2b3b8531d6b0f80"],["/images/5bb9/gitth.png","d6b172e9dc222a56826d696bb0e74041"],["/images/5bb9/hexos.png","380fab9a700c00df0f2c5a40f056506c"],["/images/5bb9/inithexo.png","74171137c9d8d17e61b615c90ea25d29"],["/images/5bb9/nodejs.png","3e9ca478647a82a0d7b21b3b6b2256d6"],["/images/5bb9/npmi.png","5733b06556330e825faf3a023fb1d08e"],["/images/5bb9/pz1.png","30a918ee70de72b7528b9807992b96cb"],["/images/5bb9/pz2.png","7c4ac263b1b1d39485cba6dcc2d004be"],["/images/5bb9/pz3.png","1a400eb5f641bafbd2308297ab25ac49"],["/images/5bb9/pz4.png","63caa31a759f9eb9762413d32e39bebd"],["/images/5bb9/pz5.png","75f24dd87a198708deb64f7f52f528ce"],["/images/5bb9/pz6.png","d5a2700bfa663b06b18752448a3b614a"],["/images/5bb9/pz7.png","d4d1a9db967a5304117c783b1098cffb"],["/images/5bb9/repo.png","cee63d362f846f06d60cac2e96ca7428"],["/images/5bb9/shh3.png","231b21646a07d64aeb3ea15b09945d18"],["/images/5bb9/ssh1.png","f73e85674c374b03180c61fa72cf9afb"],["/images/5bb9/ssh2.png","d991a3c9a542960d31da61762e0dfabe"],["/images/5bb9/ssh4.png","7fb25b7e9cb74ec200a67e65b274eea5"],["/images/5bb9/wztj.png","644818ee6ee76aa3b40e572ca587f9cc"],["/images/6962/fvideo1.png","b535c5ae5b766f43d812bf9729a9b09b"],["/images/6962/fvideo2.png","37f2cf5bdbc039d7cb0f0455db7b1e17"],["/images/6962/fvideo3.png","8dd3584464994062462660c0bcd7f4bd"],["/images/6962/kbn.png","40943b2910752a3071c611459c0a2e5e"],["/images/7195/1.jpg","1dcfd0c89ba713ed6479d4ecec119f87"],["/images/7195/10.jpg","e5715e48c7ffcaf34b934990df3079d0"],["/images/7195/11.jpg","514de462023a7e904fa55682f4a4db8d"],["/images/7195/12.jpg","af5b47cd7f04caae362903d1095ab621"],["/images/7195/13.jpg","e9d99fd5f851283bfba3056e9e1689f3"],["/images/7195/2.jpg","22e78351c97232fb168e492fd810d35e"],["/images/7195/3.jpg","e37178af88a0cc7aeb83d9d8bac5614e"],["/images/7195/4.jpg","162cf1670fc7ea4e471ce64e7259f7b7"],["/images/7195/5.jpg","df143f45b630b14f3287971945dc48ae"],["/images/7195/6.jpg","8ea93eb3a325a2cdf75960e6e9290094"],["/images/7195/7.jpg","dddc8a3a66557c048bcfb44b80fd92da"],["/images/7195/8.jpg","10863a24c8563892b19d16ba8727002c"],["/images/7195/9.jpg","97e9122c26995a6c97a46c455ebd2bb5"],["/images/7195/Moon_phases.jpg","9960cca04633ed828453be08153b010b"],["/images/7bde/IK.png","3109516e54ec3ed9c9649eded8870dfa"],["/images/7bde/addAPP.png","f3ad34f2b85f122ba2244cca322c09cd"],["/images/7bde/adden.png","2b3fc2784bd5b826eada44736d60e3dd"],["/images/7bde/addvl.png","9631975b61f8873dfd7232102f1c6be2"],["/images/7bde/last.png","905712d347c9c6f699966c6ed7301a74"],["/images/7bde/mailmod.png","81fdae3ea7f137384f52fe540d07e6e4"],["/images/7bde/mft.png","a873ca9f583ca1bc3a0c765234917ed7"],["/images/7bde/text.png","1c380793de40cb9d15db9f66d52892f2"],["/images/7bde/texta.png","ae4b547fd50933758f36f3937002fdf3"],["/images/7bde/true.png","8e2744d1a8df85a516c6b14aba88b8d3"],["/images/7bde/webd.png","3fa3eef71373c3d1b39f9c1731884337"],["/images/7bde/wordcount.png","1992f402e28439a9eea1d6ec34ac3b92"],["/images/7bde/yunhost.png","5c7788b94b7e6edebb22849d5abde9ed"],["/images/7bde/yunhost1.png","8ebcb725c7cc14f91dc83eb3057ac1b1"],["/images/7bde/yunhost2.png","fdd81ea5409d9e2d41c378435d2bc1f4"],["/images/7bde/yunhosta.png","f5a8d49608401b3fb0ea90e6c5ec9093"],["/images/7f2f/CCNAME.png","46998fa2fd2edbb752da1c4ad07d3eb8"],["/images/7f2f/CDNpz.png","f6cfbb8728a1b89a1533197cafe7c448"],["/images/7f2f/CDNweb.png","0256ac6546c06ae64512908ef23568ed"],["/images/7f2f/Cb.png","3ae085944ca28dd08ef3ee223ecae499"],["/images/7f2f/Fullpz.png","60e2b201407eee25d585a8c26f5cc5e8"],["/images/7f2f/JXCNAME.png","496acb062f09edda3001e04bee050ef4"],["/images/7f2f/Pzweb.png","c016de6c62d6fc6fb22a4db97f03c67c"],["/images/7f2f/SLLPz.png","f18f53a7383077c164e46c4d0b709449"],["/images/7f2f/SLLsus.png","c0f443e8f113f4feef6ce548f85659ba"],["/images/7f2f/SSLbuy.png","b2c3a8294a98bcbc90d5d1652aaa39f8"],["/images/7f2f/SSLpush.png","6040edb84254ce1a1fab69f3085a9542"],["/images/7f2f/Singup.png","3cd2a1b7b4312b7d70541d5fa0f9116f"],["/images/7f2f/Todam.png","90e99b63b0dcaf4868382fbf31df619e"],["/images/7f2f/Topzcdn1.png","a0a89e266337a208fc529b6eedb6faee"],["/images/7f2f/Toweb.png","2f13e88107b159057cce4e710100378d"],["/images/7f2f/cash.png","d6af3db3396009b952f6562f75a39e58"],["/images/7f2f/flish.png","f57a124879cc646074867c20e95de91b"],["/images/7f2f/topzCDN.png","c74b4cbe830fd52a5fb63834b5f54f2c"],["/images/7f2f/upfiles.png","502082421f8934b0e49d63e56de51dfd"],["/images/7f2f/uptool.png","7bc917833315d520014c9b332e7524e3"],["/images/ae97/blog.png","48f555bccbb00dd7c13767f536682bf5"],["/images/ae97/blogg.png","691ac855f94f8f389644743e66c8b3d7"],["/images/ae97/iohttps.png","7c01f1f4857a366c0bca3486f76fffc0"],["/images/ae97/nav.png","6261fc88c2febaac70eb2c2a2c60700f"],["/images/ae97/navhttps.png","bfe15b5fee29dbe8e4ab5c92b513e424"],["/images/ae97/rblog.png","0a356bc645399c33f3330c5e597a7f82"],["/images/b7d1/ad.png","1e0cbb28343a8faa00e80510a888c53e"],["/images/b7d1/ad1.png","e306b06db26537c98de158f534aae129"],["/images/b7d1/ad3.png","9cc5e23b3ed589e2357a6fdf72511cf4"],["/images/b7d1/ad4.png","88c68566985c0d3d2569ae1a4e2b389c"],["/images/b7d1/ad5.png","e055065dd62a4d720aca6a3b19478c50"],["/images/b7d1/ad7.png","986be4ee6069c9151466dbabafe05891"],["/images/b7d1/ad8.png","3fdb70f9dc603881189bb74b7662fcac"],["/images/b7d1/ad9.png","c4e787363a74024e021d9fe45371cc81"],["/images/b7d1/extensions.png","a9b17ca0d9d7cf492032a51ad707a953"],["/images/d7e8/filish.png","73f9d2215eaecd747e63867134399948"],["/images/d7e8/filish1.png","9e80220f20cef6c3c90222e3bd53e086"],["/images/d7e8/first.png","49d2c34caf919ad8fefef8420ba84d4e"],["/images/favicon/android-chrome-192x192.png","25aa642a1b749ba3a911801da067c2c5"],["/images/favicon/apple-touch-icon-120x120.png","da96f547241abfdaaed0b352356747c2"],["/images/favicon/apple-touch-icon-152x152.png","b003e12903926eba38254d79aca3a713"],["/images/favicon/apple-touch-icon-180x180.png","33d9d118517499f0c429cb5db5501e90"],["/images/favicon/apple-touch-icon-60x60.png","9b67dc93ce29150cd9baa4a4780a67a0"],["/images/favicon/apple-touch-icon-76x76.png","7d9414bbd7c4229b39c225336f559e4f"],["/images/favicon/apple-touch-icon.png","33d9d118517499f0c429cb5db5501e90"],["/images/favicon/browserconfig.xml","b0df1d8364886483f481bc261ea8db4b"],["/images/favicon/favicon-16x16.png","7c4e855a481fa856e6526f131d44c3f6"],["/images/favicon/favicon-32x32.png","fe37f302e687b748945f39b99be2a1cf"],["/images/favicon/favicon.ico","5fb6be63ee0078a8733bc4e8f4380d60"],["/images/favicon/icon-76x76.png","7d9414bbd7c4229b39c225336f559e4f"],["/images/favicon/mstile-150x150.png","f7626e6f07f8a543eb32680baa003cc4"],["/images/favicon/safari-pinned-tab.svg","dd48b450249ece8537b5ed48408e4911"],["/images/friends/Alili.png","acdd27a6e157a2f08c2faea608451be8"],["/images/friends/AzuSemisa.webp","b51a4a0ffd88ee976e4dcc6dc82e3f9e"],["/images/friends/Hj.png","26d8573d814ebfc0570a27916fffad57"],["/images/friends/Jrsc.png","00026dfad46bd0fa6b8300841908d81d"],["/images/friends/LongYating.jpg","ac56ebd41edc4ae0b8580267a7cd3d6b"],["/images/game/Diep.png","01b34a36e4b980dfaa79f98adb8e1f49"],["/images/game/Mikutap.ico","2a45855016835374c9cff1bb05c87a8a"],["/images/game/Minecraft.ico","aa4508aa47ce656332b2687b71ae299d"],["/images/game/T-Rex.png","ac725779d5389d3a747e40fd45f6c3ad"],["/images/game/adarkroom.ico","2c38a13914b6ff9ae829bafe15c563e0"],["/images/home/Bg.png","270c5918e9336a8945917066f886c839"],["/images/home/avatar.jpg","23b9b217c76329cbc03a22b25fe1933c"],["/images/home/avatar.png","8c251e93eee51523905c9578af077609"],["/images/home/avatar.webp","0439f184c69fc016379a3b750e1b47df"],["/images/home/blog.png","3a7d0e2b480312fe5cd6cb1de8e79db3"],["/images/home/qr-alipay.png","a304f2f36ac00df85c9e6219629b8956"],["/images/home/qr-wechat.png","80f48be849d53ef07a75bf5fdbf62ef0"],["/index.html","9c1fb3c8b467d539034862e6c1b9c952"],["/js/Valine.min.js","531ab7cd59e764b01d9d465eb38b83c7"],["/js/app.js","10cb7fca7549ec8fadc0b02f8b9100b4"],["/js/bundle.js","a1c63720b533817190ceeffa4973906c"],["/js/clicklove.js","1bdb23f82e8320c28db76824c347a871"],["/js/clipboard.min.js","3e5e0fa949e0e7c5ed5fed7b4cc0ee00"],["/js/clipboard_use.js","a0066f6e7303168b9f81084e789324d2"],["/js/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/js/gsap.min.js","663fd753cae2b462cf8ed119c3f991ab"],["/js/jinrishici.js","2908509a9dcc3568f599286d64932af3"],["/js/script.js","322da3240076a9673646598b1a962381"],["/js/scroll-spy.js","9af70564ba1b4129673ff8b5dd5222ae"],["/js/util.js","2475114b20598844e76d809d0d605cfb"],["/js/zenscroll.js","1c489485e8206f96226bd3f56655c6d2"],["/link/index.html","9e6956ee4caffd25f9d1d9700f9a224b"],["/live2dw/assets/koharu.model.json","d4bd85d7e617c8545a1ee1619f5191fa"],["/live2dw/assets/koharu.physics.json","cde36abfc1348fe5434f99fc708f0c3c"],["/live2dw/assets/moc/koharu.2048/texture_00.png","495eea8d906c2b03abfe3fa9de2f2a8b"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/manifest.json","d0ae01524139c32fa6262ac226932ac6"],["/page/2/index.html","8fc5baf0415729be18fe48851fb26d74"],["/page/3/index.html","6e2bf044e7671eccb1a425b0bcca81c6"],["/posts/21a6.html","7853aedf6e194c17f24b3194e5646f92"],["/posts/24e3.html","3b9312d725031044168514ebe0423fb4"],["/posts/359e.html","18fd15136a890d57ddd0813187a9e30f"],["/posts/35aa.html","bf4399b4a5755632f177b2c001ebd53c"],["/posts/3e47.html","d33d5e254a15feab05a16c27b30fbc6b"],["/posts/478f.html","74e26c3dc9ab34abd406f2bc5c6e9873"],["/posts/52cf.html","2cd7b01d316f1488a2e4c6b807e38ca9"],["/posts/59ce.html","1b825f00bdd2813ceb212719ab90b4f1"],["/posts/5bb9.html","fa0e0f9537cd109d867ea26bb7e5daf1"],["/posts/6962.html","291b30c4cdba0c0e83c99d6425e56e3c"],["/posts/7195.html","1a447e083a637fafc6cdbf2cd4cc6406"],["/posts/7bde.html","300feeb859ac001da401f83f671ff09e"],["/posts/7f2f.html","4c168b09d12a7bd4db3b4c86d4630f27"],["/posts/88f4.html","b77577945e86a837c4025185fd7f4f1b"],["/posts/95ed.html","b941919e8ebdc5580b1b07566d723bef"],["/posts/a2b7.html","f22e3b55da9b4bf3a786943a19b593d3"],["/posts/ae97.html","df421606748775594fe1043ab40b232c"],["/posts/b7d1.html","4fd59bdfc733dbdc8ee8b90f7317db16"],["/posts/d7e8.html","abed86ccbb49b0260ef01062e95ae4c9"],["/posts/e01f.html","813fea1c57726ed1ae9efa98a5b1b82c"],["/posts/e682.html","44ce0cd5b3c214f4c7f64c0bab38c4d4"],["/posts/e722.html","70eb262d28e5d5637996172bba7eb42a"],["/qq.html","c9d44e04f24797a986506080cbf5b2dd"],["/search.json","d21deb9d352a2868f8f69913c08a124a"],["/search/index.html","3d547b4bdfc86b9b00b820f304f3c7bd"],["/sitemap.xml","6ff55acbec9cdcc7fbf9085523821ad3"],["/sw-register.js","4ba5192bd4b9a15634e2244bc1f3141f"],["/tag/index.html","06c06241595837ff8283d2407c85c889"],["/tags/AdGuard-Home/index.html","1c7a1331a5596423af89feb7ec9292e9"],["/tags/App分享/index.html","176b00d724c9c5559d087637d38a82c6"],["/tags/Docker部署Halo/index.html","3a819f1af98d19c2a8869146d0d7c013"],["/tags/Github/index.html","2ab99e0a30b6e2a4f55767cab51cb02e"],["/tags/HTTPS/index.html","679bc5de2ef37e9449b9ec457ab98082"],["/tags/Halo博客/index.html","86937c785fbb1e18a499a90bc8990072"],["/tags/Hexo博客/index.html","f4ba404383fb3cd4c0ed3f4bd7b58906"],["/tags/Hexo插件/index.html","48a96c5ff0080aa0d0856ab9095caaf4"],["/tags/Hexo文章添加视频/index.html","e47d88daf54c87a6a19829ac5ec9a218"],["/tags/Hexo源码备份/index.html","29a7128c345c9f229d9d2f08fab24e7d"],["/tags/MC服务器/index.html","3ec22fd30feaaad1fd47821889880d53"],["/tags/Minecraft/index.html","20b68e28b766df98a1a1dcc2eb044ed7"],["/tags/Typecho插件/index.html","4896b18bad4c16ba82a1fb7c29fc396a"],["/tags/Valine评论/index.html","452c02c5bb50f01fafae885e4c7bd2f4"],["/tags/Windows系统/index.html","2c221c721f2c8a7446022d2fd4c0bf0d"],["/tags/Yandex/index.html","802031bc582fa901cf1e74138151184c"],["/tags/docker安装/index.html","8bd41d60dee427997f1deafb7192d382"],["/tags/hexo博客错误/index.html","68fa2bbaa1b5e08c9f7b10c55cb083f5"],["/tags/matepad-matepadpro/index.html","cfdcfa83bbe14f3dea08ce58a40ae368"],["/tags/修改C盘User用户名/index.html","393c2db17a1ad0c85d1fe95e9d076bb5"],["/tags/十五的月亮十四圆/index.html","b07aac0c43e220a0b35eb84dc1a52377"],["/tags/华为云CDN/index.html","5c91287dc4696cb0b5b002082576c3de"],["/tags/华为云OBS/index.html","49de207e43ea34c7898b9c76d7e1dc5a"],["/tags/去广告DNS服务/index.html","5398c1fb2698e5e44da3337d9f0aa5cb"],["/tags/周二珂/index.html","8505d7ef3e0a3705ba4e8b83d87b0249"],["/tags/域名邮箱/index.html","01fda72853e6bf97999396d0d324bdfa"],["/tags/天文现象/index.html","0336560f2e2a488aac03bad65130e660"],["/tags/头像制作/index.html","351a836bbfe7e2963e16ada55e991a99"],["/tags/实用工具/index.html","e693bc52e0ae2240f48d3e59a62cb6bd"],["/tags/广告弹窗拦截/index.html","6afac8cbaa68b7e7de143de1b147e5c1"],["/tags/广告拦截规则/index.html","d1a09afd440bdbbd03bd99d3be6c1f22"],["/tags/慢慢喜欢你/index.html","bd567dd74b72a2dfed6edcfa2c124f1f"],["/tags/搭建Typecho博客/index.html","8604f153731e421bcbba39fccc520088"],["/tags/搭建静态博客/index.html","cb92022b678a231af2034dc356f184fe"],["/tags/添加看板娘/index.html","58154dbbd63b28e8d719bc9a3cb3a7ed"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });



// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache 配置转换后的 toolbox 代码.

toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdn.jsdelivr.net"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdn.bootcdn.net"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdn.bootcss.com"});





/* eslint-enable */
