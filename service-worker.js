/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["D:/Blog/public/404.html","751e7629bbece98331525745ccc6efff"],["D:/Blog/public/404/bootstrap.min.css","04aca1f4cd3ec3c05a75a879f3be75a3"],["D:/Blog/public/404/gsap.min.js","663fd753cae2b462cf8ed119c3f991ab"],["D:/Blog/public/404/script.js","322da3240076a9673646598b1a962381"],["D:/Blog/public/404/style.css","c222ace0d327ef88c922b0f21f33d16e"],["D:/Blog/public/about/index.html","395aed1c9408c70496e423d1f11f4752"],["D:/Blog/public/archives/2020/03/index.html","188a6d32f8ed2e48deedb05dd074c891"],["D:/Blog/public/archives/2020/04/index.html","0078c104939b6ab22f9de6d069bf84aa"],["D:/Blog/public/archives/2020/05/index.html","4ba7b8cb4eeef5bcf9566d906a6c4ffe"],["D:/Blog/public/archives/2020/06/index.html","cfc86895e8af9fcd50cbc979d34659ec"],["D:/Blog/public/archives/2020/07/index.html","a0e8a689426b785029b6bdf323e1d181"],["D:/Blog/public/archives/2020/08/index.html","395ee3ef80617353cd95be453a5450d8"],["D:/Blog/public/archives/2020/index.html","4317daa746106f8cd6b7c5d08e86cd23"],["D:/Blog/public/archives/2020/page/2/index.html","bbd620658fc8f4bb1212a5a56feadb2d"],["D:/Blog/public/archives/2020/page/3/index.html","b78fa95a59b7d7d18f4b587e09ceec07"],["D:/Blog/public/archives/index.html","49ad7890e714236b70e901ec8e36c7dd"],["D:/Blog/public/archives/page/2/index.html","9a2a56971c6f017c3059256eb5ca3c63"],["D:/Blog/public/archives/page/3/index.html","2041aba43f1300c5487169c076f64560"],["D:/Blog/public/av/index.html","36b994395964e7a1ea33803602d4f682"],["D:/Blog/public/categories/洪炉点雪/index.html","7087670d84853a2db4dc92bcb6ebb996"],["D:/Blog/public/categories/温澜潮生/index.html","4a327fa85d4541f05837e579a60c1b4d"],["D:/Blog/public/categories/烟岚云岫/index.html","524122a5369196c3df2a9d8f4cac439f"],["D:/Blog/public/categories/烟岚云岫/page/2/index.html","3442032699ebde26bde4a3077eae4112"],["D:/Blog/public/categories/花晨月夕/index.html","d9b63174906644b1ea4f26a1b93e1066"],["D:/Blog/public/category/index.html","20b5c5a58e2fe7b6b7cafbea083a1ab0"],["D:/Blog/public/css/personal.css","cc9e956358e364a0214324e7df2545f7"],["D:/Blog/public/css/styles.css","4bb3e71e42af0d30bab39c1fd6e08fee"],["D:/Blog/public/fonts/Lobster-Regular.eot","c05650666675c69e86b8ed43561351dd"],["D:/Blog/public/fonts/Lobster-Regular.svg","59be1b83c3c5dfa30ab3499240b2532d"],["D:/Blog/public/fonts/Lobster-Regular.ttf","d967160337532ac1c64aacbe7b550c0c"],["D:/Blog/public/fonts/Lobster-Regular.woff","065de5677fd9cdf082aad8c768eea193"],["D:/Blog/public/fonts/PoiretOne-Regular.eot","1186e11c6a3b9b3a95b018d0c08ea192"],["D:/Blog/public/fonts/PoiretOne-Regular.svg","81435524d0cec21814fb9173bd64d55b"],["D:/Blog/public/fonts/PoiretOne-Regular.ttf","618e00d8e606bf2fab9d0d8f4114fda3"],["D:/Blog/public/fonts/PoiretOne-Regular.woff","a8e6e3bb2d56b9b2b40ea416c823fdea"],["D:/Blog/public/fonts/calligraffitti-regular-webfont.eot","377f81b2cd0f1bdfd702dcb2ce5cf4af"],["D:/Blog/public/fonts/calligraffitti-regular-webfont.svg","38bac1d79752e09be37574fa44c62c54"],["D:/Blog/public/fonts/calligraffitti-regular-webfont.ttf","141f8a6ead3aa42476fdda28d6a8fe8d"],["D:/Blog/public/fonts/calligraffitti-regular-webfont.woff","913682346ca4f708fe03908267ea5542"],["D:/Blog/public/fonts/fontello.eot","761a9c0e81844ab6a776c4f8f81555f4"],["D:/Blog/public/fonts/fontello.svg","9bc89fd5555f0b0a235c2ee97ae8be88"],["D:/Blog/public/fonts/fontello.ttf","f4ae7ee270ebe8220c883292aa89a699"],["D:/Blog/public/fonts/fontello.woff","3cd8973d2fcaeb4bef5ef7ba73ef307a"],["D:/Blog/public/game/index.html","dde105f99562df9ffd06704043d1e094"],["D:/Blog/public/images/24e3/add.png","82c50a41afda63a0d6f8f71f9c88297a"],["D:/Blog/public/images/24e3/jh.png","6eafd90cdb2ccdf043027945008273e1"],["D:/Blog/public/images/24e3/meta.png","b3b9f2e7d120e2fbbe27cb4844047930"],["D:/Blog/public/images/24e3/mxjx.png","a2d302a6c9694c316063246cd8962416"],["D:/Blog/public/images/24e3/mxyz.png","d58d241f94ba9f241e1261f5415da19f"],["D:/Blog/public/images/24e3/sypz.png","972456356bb0c21f640b68046cab0721"],["D:/Blog/public/images/24e3/txt.png","cc538097ab196d81f0c98e3ec3357101"],["D:/Blog/public/images/24e3/txxx.png","31336e67b3ffd3942b786f64658c56cc"],["D:/Blog/public/images/24e3/ym.png","3f970c4166a9557abbbed5549fc611f8"],["D:/Blog/public/images/24e3/yz.png","59868674c453e9babb99c6d746a18713"],["D:/Blog/public/images/52cf/mcs.png","60e8578cbcacac416e07cb85e8922d05"],["D:/Blog/public/images/52cf/mcs1.png","7453155b83bf9b91101649de2c8b1817"],["D:/Blog/public/images/52cf/mcs2.png","90d98c3ab8b9f3de81545be7513e21f3"],["D:/Blog/public/images/52cf/mcsjava.png","14db039feab9a11a10f23372770e78d2"],["D:/Blog/public/images/52cf/mcsp.png","80e954b9b046db3a3bdb0447c67cfded"],["D:/Blog/public/images/52cf/mcsr.png","d66667e79d0264f27aa9f1109b0694ed"],["D:/Blog/public/images/52cf/mcss.png","45a3c476dac8e91844905ca5f3cf6479"],["D:/Blog/public/images/59ce/Environment.png","f34885e1a2cd3f9f8b9ddce9e34f4622"],["D:/Blog/public/images/59ce/Registry.png","95339cfb6b47e05810cfd7e85fceee65"],["D:/Blog/public/images/59ce/Registry1.png","8a91d1ffad174543a9541cb77af466a4"],["D:/Blog/public/images/59ce/TIM截图20200709130521.png","3b7ca23833c8b5c00dbdf04aa084df76"],["D:/Blog/public/images/59ce/TIM截图20200709130820.png","47700e63d615c3d13fedc5473cbcb4ac"],["D:/Blog/public/images/59ce/restorepoint.png","5436e85ed63528d6384e17dbb714c56a"],["D:/Blog/public/images/5bb9/Google2.png","6365dc9eecb3dbdaeedd5ea9c1f7150a"],["D:/Blog/public/images/5bb9/Google3.png","435479ac5ec29e5d7fd398e2ec5a05cb"],["D:/Blog/public/images/5bb9/Google4.png","3b327ff7c4c299338cd13b48d1bf7942"],["D:/Blog/public/images/5bb9/Google5.png","9eb3be1b80d9721f2250f6bf0f321efe"],["D:/Blog/public/images/5bb9/Google6.png","fae865a1c8307f5517738a9cfe6bcf1a"],["D:/Blog/public/images/5bb9/Google7.png","cc3bb229569ab519d85fe5594e7992e7"],["D:/Blog/public/images/5bb9/Google8.png","b99e215add1e2275d3268530cb7c3bf2"],["D:/Blog/public/images/5bb9/Goole1.png","e8c58238ca04c97f623b281374d1f80e"],["D:/Blog/public/images/5bb9/Senoruiweb.png","285344f16d3def446ee21698c45d04de"],["D:/Blog/public/images/5bb9/bd1.png","48ec732f0052a5833d07aa2c93eec881"],["D:/Blog/public/images/5bb9/bd2.png","40f43358978a113263bc5556c115a34f"],["D:/Blog/public/images/5bb9/bd3.png","02f98470ea65f89f3ebdafbff99a474a"],["D:/Blog/public/images/5bb9/bd4.png","d86b7bcc6a2ec70730b4367f69e339e3"],["D:/Blog/public/images/5bb9/bd5.png","c04417a497473170559f5840e107bf6d"],["D:/Blog/public/images/5bb9/blogt.png","9c71c616eb2413fd9a99b8d58c7de774"],["D:/Blog/public/images/5bb9/cor.png","aa2f8e7ae2e691707aab0a21d289a307"],["D:/Blog/public/images/5bb9/creative.png","6603be719b4abe6f78b04f366d98afc2"],["D:/Blog/public/images/5bb9/d1.png","0a6983b267955ee8ef2e6323aa300977"],["D:/Blog/public/images/5bb9/d2.png","aa85d16a85742d7ed49246f4e5533098"],["D:/Blog/public/images/5bb9/d3.png","b141a4e48509ce2bbc4a290e39268a59"],["D:/Blog/public/images/5bb9/d4.png","52febd620fffe82d005dcd76ba8983d6"],["D:/Blog/public/images/5bb9/d5.png","eb05925754dfd9c24ac924c5f2fba7aa"],["D:/Blog/public/images/5bb9/d6.png","7baecfab3aa3eface812966c0821527a"],["D:/Blog/public/images/5bb9/d7.png","8bb36f0b834329e90df3026a477cbce2"],["D:/Blog/public/images/5bb9/denoruiweb.png","e085458f86d6e14f5a2b4b21e5e1c05e"],["D:/Blog/public/images/5bb9/dm1.png","d47d412cebff8091308d1188cb3403ac"],["D:/Blog/public/images/5bb9/dm2.png","7f4ef9d81d04a57c17b966fdcd757b3e"],["D:/Blog/public/images/5bb9/dm3.png","ef5c3f60af7f7432f6e55877998aaf2c"],["D:/Blog/public/images/5bb9/dm4.png","49a73010b77db90be723b62fa19d1913"],["D:/Blog/public/images/5bb9/dm5.png","4be9d10fd8493d4f83d05be2f92d0bc0"],["D:/Blog/public/images/5bb9/dm6.png","f99186c2af6cf10ab5fa6a3d789bd1d8"],["D:/Blog/public/images/5bb9/dm7.png","d742426e368bf24a935ac5cd6922d2bc"],["D:/Blog/public/images/5bb9/git.png","7292cff5e144dd93897dd6d246839fdf"],["D:/Blog/public/images/5bb9/gitb.png","06095e097dc4043c195778618f28bb10"],["D:/Blog/public/images/5bb9/gitrepo.png","4f7587ce093743c776be631bb92b3f4f"],["D:/Blog/public/images/5bb9/gitt.png","cddcb436cf251380b96b4b67e4266538"],["D:/Blog/public/images/5bb9/gittalk1.png","7e409d3dbd3dbef8ba8759757434848b"],["D:/Blog/public/images/5bb9/gittalk2.png","5d0a9bc9851d1e19789601fa151a95c6"],["D:/Blog/public/images/5bb9/gittalk3.png","435ac38c68ccf869c2b3b8531d6b0f80"],["D:/Blog/public/images/5bb9/gitth.png","d6b172e9dc222a56826d696bb0e74041"],["D:/Blog/public/images/5bb9/hexos.png","380fab9a700c00df0f2c5a40f056506c"],["D:/Blog/public/images/5bb9/inithexo.png","74171137c9d8d17e61b615c90ea25d29"],["D:/Blog/public/images/5bb9/nodejs.png","3e9ca478647a82a0d7b21b3b6b2256d6"],["D:/Blog/public/images/5bb9/npmi.png","5733b06556330e825faf3a023fb1d08e"],["D:/Blog/public/images/5bb9/pz1.png","30a918ee70de72b7528b9807992b96cb"],["D:/Blog/public/images/5bb9/pz2.png","7c4ac263b1b1d39485cba6dcc2d004be"],["D:/Blog/public/images/5bb9/pz3.png","1a400eb5f641bafbd2308297ab25ac49"],["D:/Blog/public/images/5bb9/pz4.png","63caa31a759f9eb9762413d32e39bebd"],["D:/Blog/public/images/5bb9/pz5.png","75f24dd87a198708deb64f7f52f528ce"],["D:/Blog/public/images/5bb9/pz6.png","d5a2700bfa663b06b18752448a3b614a"],["D:/Blog/public/images/5bb9/pz7.png","d4d1a9db967a5304117c783b1098cffb"],["D:/Blog/public/images/5bb9/repo.png","cee63d362f846f06d60cac2e96ca7428"],["D:/Blog/public/images/5bb9/shh3.png","231b21646a07d64aeb3ea15b09945d18"],["D:/Blog/public/images/5bb9/ssh1.png","f73e85674c374b03180c61fa72cf9afb"],["D:/Blog/public/images/5bb9/ssh2.png","d991a3c9a542960d31da61762e0dfabe"],["D:/Blog/public/images/5bb9/ssh4.png","7fb25b7e9cb74ec200a67e65b274eea5"],["D:/Blog/public/images/5bb9/wztj.png","644818ee6ee76aa3b40e572ca587f9cc"],["D:/Blog/public/images/6962/fvideo1.png","b535c5ae5b766f43d812bf9729a9b09b"],["D:/Blog/public/images/6962/fvideo2.png","37f2cf5bdbc039d7cb0f0455db7b1e17"],["D:/Blog/public/images/6962/fvideo3.png","8dd3584464994062462660c0bcd7f4bd"],["D:/Blog/public/images/6962/kbn.png","40943b2910752a3071c611459c0a2e5e"],["D:/Blog/public/images/7195/1.jpg","1dcfd0c89ba713ed6479d4ecec119f87"],["D:/Blog/public/images/7195/10.jpg","e5715e48c7ffcaf34b934990df3079d0"],["D:/Blog/public/images/7195/11.jpg","514de462023a7e904fa55682f4a4db8d"],["D:/Blog/public/images/7195/12.jpg","af5b47cd7f04caae362903d1095ab621"],["D:/Blog/public/images/7195/13.jpg","e9d99fd5f851283bfba3056e9e1689f3"],["D:/Blog/public/images/7195/2.jpg","22e78351c97232fb168e492fd810d35e"],["D:/Blog/public/images/7195/3.jpg","e37178af88a0cc7aeb83d9d8bac5614e"],["D:/Blog/public/images/7195/4.jpg","162cf1670fc7ea4e471ce64e7259f7b7"],["D:/Blog/public/images/7195/5.jpg","df143f45b630b14f3287971945dc48ae"],["D:/Blog/public/images/7195/6.jpg","8ea93eb3a325a2cdf75960e6e9290094"],["D:/Blog/public/images/7195/7.jpg","dddc8a3a66557c048bcfb44b80fd92da"],["D:/Blog/public/images/7195/8.jpg","10863a24c8563892b19d16ba8727002c"],["D:/Blog/public/images/7195/9.jpg","97e9122c26995a6c97a46c455ebd2bb5"],["D:/Blog/public/images/7195/Moon_phases.jpg","9960cca04633ed828453be08153b010b"],["D:/Blog/public/images/7bde/IK.png","3109516e54ec3ed9c9649eded8870dfa"],["D:/Blog/public/images/7bde/addAPP.png","f3ad34f2b85f122ba2244cca322c09cd"],["D:/Blog/public/images/7bde/adden.png","2b3fc2784bd5b826eada44736d60e3dd"],["D:/Blog/public/images/7bde/addvl.png","9631975b61f8873dfd7232102f1c6be2"],["D:/Blog/public/images/7bde/last.png","905712d347c9c6f699966c6ed7301a74"],["D:/Blog/public/images/7bde/mailmod.png","81fdae3ea7f137384f52fe540d07e6e4"],["D:/Blog/public/images/7bde/mft.png","a873ca9f583ca1bc3a0c765234917ed7"],["D:/Blog/public/images/7bde/text.png","1c380793de40cb9d15db9f66d52892f2"],["D:/Blog/public/images/7bde/texta.png","ae4b547fd50933758f36f3937002fdf3"],["D:/Blog/public/images/7bde/true.png","8e2744d1a8df85a516c6b14aba88b8d3"],["D:/Blog/public/images/7bde/webd.png","3fa3eef71373c3d1b39f9c1731884337"],["D:/Blog/public/images/7bde/wordcount.png","1992f402e28439a9eea1d6ec34ac3b92"],["D:/Blog/public/images/7bde/yunhost.png","5c7788b94b7e6edebb22849d5abde9ed"],["D:/Blog/public/images/7bde/yunhost1.png","8ebcb725c7cc14f91dc83eb3057ac1b1"],["D:/Blog/public/images/7bde/yunhost2.png","fdd81ea5409d9e2d41c378435d2bc1f4"],["D:/Blog/public/images/7bde/yunhosta.png","f5a8d49608401b3fb0ea90e6c5ec9093"],["D:/Blog/public/images/7f2f/CCNAME.png","46998fa2fd2edbb752da1c4ad07d3eb8"],["D:/Blog/public/images/7f2f/CDNpz.png","f6cfbb8728a1b89a1533197cafe7c448"],["D:/Blog/public/images/7f2f/CDNweb.png","0256ac6546c06ae64512908ef23568ed"],["D:/Blog/public/images/7f2f/Cb.png","3ae085944ca28dd08ef3ee223ecae499"],["D:/Blog/public/images/7f2f/Fullpz.png","60e2b201407eee25d585a8c26f5cc5e8"],["D:/Blog/public/images/7f2f/JXCNAME.png","496acb062f09edda3001e04bee050ef4"],["D:/Blog/public/images/7f2f/Pzweb.png","c016de6c62d6fc6fb22a4db97f03c67c"],["D:/Blog/public/images/7f2f/SLLPz.png","f18f53a7383077c164e46c4d0b709449"],["D:/Blog/public/images/7f2f/SLLsus.png","c0f443e8f113f4feef6ce548f85659ba"],["D:/Blog/public/images/7f2f/SSLbuy.png","b2c3a8294a98bcbc90d5d1652aaa39f8"],["D:/Blog/public/images/7f2f/SSLpush.png","6040edb84254ce1a1fab69f3085a9542"],["D:/Blog/public/images/7f2f/Singup.png","3cd2a1b7b4312b7d70541d5fa0f9116f"],["D:/Blog/public/images/7f2f/Todam.png","90e99b63b0dcaf4868382fbf31df619e"],["D:/Blog/public/images/7f2f/Topzcdn1.png","a0a89e266337a208fc529b6eedb6faee"],["D:/Blog/public/images/7f2f/Toweb.png","2f13e88107b159057cce4e710100378d"],["D:/Blog/public/images/7f2f/cash.png","d6af3db3396009b952f6562f75a39e58"],["D:/Blog/public/images/7f2f/flish.png","f57a124879cc646074867c20e95de91b"],["D:/Blog/public/images/7f2f/topzCDN.png","c74b4cbe830fd52a5fb63834b5f54f2c"],["D:/Blog/public/images/7f2f/upfiles.png","502082421f8934b0e49d63e56de51dfd"],["D:/Blog/public/images/7f2f/uptool.png","7bc917833315d520014c9b332e7524e3"],["D:/Blog/public/images/a4fb/chrome-us.png","fec6ef12a0c491c5752bd7b2b48f1deb"],["D:/Blog/public/images/a4fb/ck.png","2792b07db8ee5fab388af59daf869d5c"],["D:/Blog/public/images/a4fb/edg-us.png","e5aad00ebb4b64ea456488e0cc55558e"],["D:/Blog/public/images/a4fb/huaweipad-us.jpg","e5ef8de31f53b5292b162ef08af5153f"],["D:/Blog/public/images/a4fb/huaweipad-us1.jpg","25b231c0d8adaac7582bc33e6344a97e"],["D:/Blog/public/images/a4fb/huaweipad.jpg","23225194a58e73bfe6f153f88b011f5f"],["D:/Blog/public/images/a4fb/huaweipad1.jpg","f0988e4d108b2370f94ed65fbf95f14e"],["D:/Blog/public/images/a4fb/install.png","4f40ab774e39ec65aec6e27b35565ac8"],["D:/Blog/public/images/a4fb/sc.png","b54095add9f32a91e589f495a985dc1c"],["D:/Blog/public/images/a4fb/xianz.jpg","28f55526dfc65a3cd56a2446f3e7b51b"],["D:/Blog/public/images/a4fb/xiaoguo.png","ddae14be057c6effed18d21346f81fe1"],["D:/Blog/public/images/ae97/blog.png","48f555bccbb00dd7c13767f536682bf5"],["D:/Blog/public/images/ae97/blogg.png","691ac855f94f8f389644743e66c8b3d7"],["D:/Blog/public/images/ae97/iohttps.png","7c01f1f4857a366c0bca3486f76fffc0"],["D:/Blog/public/images/ae97/nav.png","6261fc88c2febaac70eb2c2a2c60700f"],["D:/Blog/public/images/ae97/navhttps.png","bfe15b5fee29dbe8e4ab5c92b513e424"],["D:/Blog/public/images/ae97/rblog.png","0a356bc645399c33f3330c5e597a7f82"],["D:/Blog/public/images/b7d1/ad.png","1e0cbb28343a8faa00e80510a888c53e"],["D:/Blog/public/images/b7d1/ad1.png","e306b06db26537c98de158f534aae129"],["D:/Blog/public/images/b7d1/ad3.png","9cc5e23b3ed589e2357a6fdf72511cf4"],["D:/Blog/public/images/b7d1/ad4.png","88c68566985c0d3d2569ae1a4e2b389c"],["D:/Blog/public/images/b7d1/ad5.png","e055065dd62a4d720aca6a3b19478c50"],["D:/Blog/public/images/b7d1/ad7.png","986be4ee6069c9151466dbabafe05891"],["D:/Blog/public/images/b7d1/ad8.png","3fdb70f9dc603881189bb74b7662fcac"],["D:/Blog/public/images/b7d1/ad9.png","c4e787363a74024e021d9fe45371cc81"],["D:/Blog/public/images/b7d1/extensions.png","a9b17ca0d9d7cf492032a51ad707a953"],["D:/Blog/public/images/d7e8/filish.png","73f9d2215eaecd747e63867134399948"],["D:/Blog/public/images/d7e8/filish1.png","9e80220f20cef6c3c90222e3bd53e086"],["D:/Blog/public/images/d7e8/first.png","49d2c34caf919ad8fefef8420ba84d4e"],["D:/Blog/public/images/favicon/android-chrome-icon-192x192.png","25aa642a1b749ba3a911801da067c2c5"],["D:/Blog/public/images/favicon/android-chrome-icon-60x60.png","9b67dc93ce29150cd9baa4a4780a67a0"],["D:/Blog/public/images/favicon/apple-touch-icon-120x120.png","da96f547241abfdaaed0b352356747c2"],["D:/Blog/public/images/favicon/apple-touch-icon-152x152.png","b003e12903926eba38254d79aca3a713"],["D:/Blog/public/images/favicon/apple-touch-icon-180x180.png","33d9d118517499f0c429cb5db5501e90"],["D:/Blog/public/images/favicon/apple-touch-icon-60x60.png","9b67dc93ce29150cd9baa4a4780a67a0"],["D:/Blog/public/images/favicon/apple-touch-icon-76x76.png","7d9414bbd7c4229b39c225336f559e4f"],["D:/Blog/public/images/favicon/apple-touch-icon.png","33d9d118517499f0c429cb5db5501e90"],["D:/Blog/public/images/favicon/favicon-16x16.png","7c4e855a481fa856e6526f131d44c3f6"],["D:/Blog/public/images/favicon/favicon-32x32.png","fe37f302e687b748945f39b99be2a1cf"],["D:/Blog/public/images/favicon/mstile-150x150.png","f7626e6f07f8a543eb32680baa003cc4"],["D:/Blog/public/images/favicon/safari-pinned-tab.svg","dd48b450249ece8537b5ed48408e4911"],["D:/Blog/public/images/friends/Alili.png","acdd27a6e157a2f08c2faea608451be8"],["D:/Blog/public/images/friends/Hj.png","26d8573d814ebfc0570a27916fffad57"],["D:/Blog/public/images/friends/Jrsc.png","00026dfad46bd0fa6b8300841908d81d"],["D:/Blog/public/images/friends/LongYating.jpg","ac56ebd41edc4ae0b8580267a7cd3d6b"],["D:/Blog/public/images/game/Diep.png","01b34a36e4b980dfaa79f98adb8e1f49"],["D:/Blog/public/images/game/T-Rex.png","ac725779d5389d3a747e40fd45f6c3ad"],["D:/Blog/public/images/home/Bg.png","270c5918e9336a8945917066f886c839"],["D:/Blog/public/images/home/avatar.jpg","23b9b217c76329cbc03a22b25fe1933c"],["D:/Blog/public/images/home/avatar.png","8c251e93eee51523905c9578af077609"],["D:/Blog/public/images/home/blog.png","3a7d0e2b480312fe5cd6cb1de8e79db3"],["D:/Blog/public/images/home/qr-alipay.png","a304f2f36ac00df85c9e6219629b8956"],["D:/Blog/public/images/home/qr-wechat.png","80f48be849d53ef07a75bf5fdbf62ef0"],["D:/Blog/public/index.html","8820674359a6959bd14ae222ae488ded"],["D:/Blog/public/js/Valine.min.js","531ab7cd59e764b01d9d465eb38b83c7"],["D:/Blog/public/js/app.js","10cb7fca7549ec8fadc0b02f8b9100b4"],["D:/Blog/public/js/bundle.js","a1c63720b533817190ceeffa4973906c"],["D:/Blog/public/js/clicklove.js","1bdb23f82e8320c28db76824c347a871"],["D:/Blog/public/js/clipboard.min.js","3e5e0fa949e0e7c5ed5fed7b4cc0ee00"],["D:/Blog/public/js/clipboard_use.js","a0066f6e7303168b9f81084e789324d2"],["D:/Blog/public/js/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["D:/Blog/public/js/gsap.min.js","663fd753cae2b462cf8ed119c3f991ab"],["D:/Blog/public/js/jinrishici.js","2908509a9dcc3568f599286d64932af3"],["D:/Blog/public/js/script.js","322da3240076a9673646598b1a962381"],["D:/Blog/public/js/scroll-spy.js","9af70564ba1b4129673ff8b5dd5222ae"],["D:/Blog/public/js/util.js","2475114b20598844e76d809d0d605cfb"],["D:/Blog/public/js/zenscroll.js","1c489485e8206f96226bd3f56655c6d2"],["D:/Blog/public/link/index.html","00de56790d3e295a11df9d45f60980e1"],["D:/Blog/public/live2dw/assets/moc/koharu.2048/texture_00.png","495eea8d906c2b03abfe3fa9de2f2a8b"],["D:/Blog/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/Blog/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/Blog/public/page/2/index.html","7314f3ec4f4d4a7cb2e43b2d5dc80ca1"],["D:/Blog/public/page/3/index.html","7d96617a105b85ecd921942d617c97fc"],["D:/Blog/public/posts/21a6.html","e2243dfd289f79062a2c537d0f917f7d"],["D:/Blog/public/posts/24e3.html","089045f675787bf831a9032e11d4d147"],["D:/Blog/public/posts/359e.html","3ed9ac7709904db63421a373dc8b635f"],["D:/Blog/public/posts/35aa.html","91cc34422fa60447501bcda385d1d6e4"],["D:/Blog/public/posts/3e47.html","38b174223a7b2ac312a6a368432df3c7"],["D:/Blog/public/posts/478f.html","5f5b9a31aee33fa52a8b4b736d1c37b3"],["D:/Blog/public/posts/52cf.html","eff6dea259e6cadd563fca99c6b9a895"],["D:/Blog/public/posts/59ce.html","12bb649483dc26429dae58b95da67b59"],["D:/Blog/public/posts/5bb9.html","94e50967c0c169ca54ad159a989687a6"],["D:/Blog/public/posts/6962.html","3f858d95da896e652b26ee8126b3c984"],["D:/Blog/public/posts/7195.html","eb2bedb31f2d2c3ba2b66d410815e26f"],["D:/Blog/public/posts/7bde.html","928caca717199d95df77d86eead8f3eb"],["D:/Blog/public/posts/7f2f.html","914878fc44bde43cffb0661c0b137fad"],["D:/Blog/public/posts/88f4.html","ead2a491ddb94ea39b9fbe2bc1c592f1"],["D:/Blog/public/posts/95ed.html","81b4e3a762ded46c9aabdc2545d50a44"],["D:/Blog/public/posts/a2b7.html","1e494925bfa8cc79634edc339c5317f5"],["D:/Blog/public/posts/a4fb.html","8ee3a0f45d41faba8548b711dc6ee37c"],["D:/Blog/public/posts/ae97.html","62a56993c8338223d5d9a80aef70e837"],["D:/Blog/public/posts/b7d1.html","5f1ddd1cd5bf79c10e5e95bb04133702"],["D:/Blog/public/posts/d7e8.html","9e13e38ac34509bfe9a045909e2e85b3"],["D:/Blog/public/posts/e01f.html","9332de4d8b37dc619d9f3226ffb0dde7"],["D:/Blog/public/posts/e682.html","a878cf463158638f96f57d60ed39a160"],["D:/Blog/public/posts/e722.html","e82ec1f0ddaa828bf35dad2f419a3d76"],["D:/Blog/public/qq.html","c9d44e04f24797a986506080cbf5b2dd"],["D:/Blog/public/search/index.html","e1db88d93dd2edd0e1cebc7632473869"],["D:/Blog/public/tag/index.html","dc2f56aba0873e0af0133168cdf6af8f"],["D:/Blog/public/tags/AdGuard-Home/index.html","e6f3a6195178faba6609692aa4fe2aed"],["D:/Blog/public/tags/App分享/index.html","334b0ea05c91db4c461e9c64999c92c1"],["D:/Blog/public/tags/Docker部署Halo/index.html","c403b585613453352e849be89c0ae9b1"],["D:/Blog/public/tags/Github/index.html","16eb639212f6302910fc8af51fc7984d"],["D:/Blog/public/tags/HTTPS/index.html","c36e8e03daf938eae034da8a363f9afa"],["D:/Blog/public/tags/Halo博客/index.html","f62a913a5e64941623c3fc29c566222b"],["D:/Blog/public/tags/Hexo博客/index.html","0101502ab89200a4656837db62a51176"],["D:/Blog/public/tags/Hexo博客/page/2/index.html","c01719d58d9ca666349aeea8ac819d71"],["D:/Blog/public/tags/Hexo插件/index.html","28bf02f6aa8b49f37caffec7abcd77ec"],["D:/Blog/public/tags/Hexo文章添加视频/index.html","4004f73fea5e209e00d589dd3069e84b"],["D:/Blog/public/tags/Hexo源码备份/index.html","cbfe5ed5541ab795d9a89a2e94a2ae00"],["D:/Blog/public/tags/MC服务器/index.html","405a1cdf1f0f33f8f3a85165bac8b2c8"],["D:/Blog/public/tags/Minecraft/index.html","bbbe71800c88dde8c9c6c36aba6b6725"],["D:/Blog/public/tags/PWA/index.html","895fdbd0fcea3a32205939d6462d0694"],["D:/Blog/public/tags/Typecho插件/index.html","c4d803334f87329fda8f30a5b481fd3e"],["D:/Blog/public/tags/Valine评论/index.html","7fb1ec72166c135e9a977f920e09560e"],["D:/Blog/public/tags/Windows系统/index.html","ce5169df1d071b11c671c90232e0a5e0"],["D:/Blog/public/tags/Yandex/index.html","a6ba10ae91b5d78a85bb59a3771de8bb"],["D:/Blog/public/tags/docker安装/index.html","aeb9c02fadf1a4849ba0fc3e74a0c0ab"],["D:/Blog/public/tags/hexo博客错误/index.html","310a08a88685fa084780d2c381979c59"],["D:/Blog/public/tags/matepad-matepadpro/index.html","4332b78fbd808e70ce7d5c4f6714e17c"],["D:/Blog/public/tags/修改C盘User用户名/index.html","fa44549784316bb777de47489ccce87a"],["D:/Blog/public/tags/十五的月亮十四圆/index.html","89fe6dcafc4753e419e7a8dd2e80bf47"],["D:/Blog/public/tags/华为云CDN/index.html","85e87c152dc3c6bae61516bd4122484a"],["D:/Blog/public/tags/华为云OBS/index.html","8cad821ef3902c72ec14c6a7ca703901"],["D:/Blog/public/tags/去广告DNS服务/index.html","19665f17023cff1c02ff01dc0bec42bb"],["D:/Blog/public/tags/周二珂/index.html","165c824b319977f2ac78f12d68b1ddd1"],["D:/Blog/public/tags/域名邮箱/index.html","001fc37f413cb89bd1f398446a201a48"],["D:/Blog/public/tags/天文现象/index.html","06c0d17551f2ab7e057e6eab30892f0b"],["D:/Blog/public/tags/头像制作/index.html","165ca2b4cc640f55ff7bc852ca9909e5"],["D:/Blog/public/tags/实用工具/index.html","d712c0719f6567674ca8a1961e860273"],["D:/Blog/public/tags/广告弹窗拦截/index.html","21316acbf1ed7d942e9cd8f76e25e196"],["D:/Blog/public/tags/广告拦截规则/index.html","8ca76498dd0f0985fcfeb4896e5c7758"],["D:/Blog/public/tags/慢慢喜欢你/index.html","cb04260264ed6830edd6a41d0f4a5a5c"],["D:/Blog/public/tags/搭建Typecho博客/index.html","302dd7ab2a42db0ec5ff4747a1fbb548"],["D:/Blog/public/tags/搭建静态博客/index.html","46fd2d98952691a00a134f2528d62ade"],["D:/Blog/public/tags/添加看板娘/index.html","6486d781947192e7aab1a7a33b861dcd"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







