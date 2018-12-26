// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0

import regexSupplant from '../lib/regexSupplant';
const validGTLD = regexSupplant(
  RegExp(
    '(?:(?:' +
      '삼성|닷컴|닷넷|香格里拉|餐厅|食品|飞利浦|電訊盈科|集团|通販|购物|谷歌|诺基亚|联通|网络|网站|网店|网址|组织机构|移动|珠宝|点看|游戏|淡马锡|机构|書籍|时尚|新闻|' +
      '政府|政务|招聘|手表|手机|我爱你|慈善|微博|广东|工行|家電|娱乐|天主教|大拿|大众汽车|在线|嘉里大酒店|嘉里|商标|商店|商城|公益|公司|八卦|健康|信息|佛山|企业|' +
      '中文网|中信|世界|ポイント|ファッション|セール|ストア|コム|グーグル|クラウド|みんな|คอม|संगठन|नेट|कॉम|همراه|موقع|موبايلي|كوم|' +
      'كاثوليك|عرب|شبكة|بيتك|بازار|العليان|ارامكو|اتصالات|ابوظبي|קום|сайт|рус|орг|онлайн|москва|ком|' +
      'католик|дети|zuerich|zone|zippo|zip|zero|zara|zappos|yun|youtube|you|yokohama|yoga|yodobashi|' +
      'yandex|yamaxun|yahoo|yachts|xyz|xxx|xperia|xin|xihuan|xfinity|xerox|xbox|wtf|wtc|wow|world|' +
      'works|work|woodside|wolterskluwer|wme|winners|wine|windows|win|williamhill|wiki|wien|whoswho|' +
      'weir|weibo|wedding|wed|website|weber|webcam|weatherchannel|weather|watches|watch|warman|' +
      'wanggou|wang|walter|walmart|wales|vuelos|voyage|voto|voting|vote|volvo|volkswagen|vodka|' +
      'vlaanderen|vivo|viva|vistaprint|vista|vision|visa|virgin|vip|vin|villas|viking|vig|video|' +
      'viajes|vet|versicherung|vermögensberatung|vermögensberater|verisign|ventures|vegas|vanguard|' +
      'vana|vacations|ups|uol|uno|university|unicom|uconnect|ubs|ubank|tvs|tushu|tunes|tui|tube|trv|' +
      'trust|travelersinsurance|travelers|travelchannel|travel|training|trading|trade|toys|toyota|' +
      'town|tours|total|toshiba|toray|top|tools|tokyo|today|tmall|tkmaxx|tjx|tjmaxx|tirol|tires|tips|' +
      'tiffany|tienda|tickets|tiaa|theatre|theater|thd|teva|tennis|temasek|telefonica|telecity|tel|' +
      'technology|tech|team|tdk|tci|taxi|tax|tattoo|tatar|tatamotors|target|taobao|talk|taipei|tab|' +
      'systems|symantec|sydney|swiss|swiftcover|swatch|suzuki|surgery|surf|support|supply|supplies|' +
      'sucks|style|study|studio|stream|store|storage|stockholm|stcgroup|stc|statoil|statefarm|' +
      'statebank|starhub|star|staples|stada|srt|srl|spreadbetting|spot|sport|spiegel|space|soy|sony|' +
      'song|solutions|solar|sohu|software|softbank|social|soccer|sncf|smile|smart|sling|skype|sky|' +
      'skin|ski|site|singles|sina|silk|shriram|showtime|show|shouji|shopping|shop|shoes|shiksha|shia|' +
      'shell|shaw|sharp|shangrila|sfr|sexy|sex|sew|seven|ses|services|sener|select|seek|security|' +
      'secure|seat|search|scot|scor|scjohnson|science|schwarz|schule|school|scholarships|schmidt|' +
      'schaeffler|scb|sca|sbs|sbi|saxo|save|sas|sarl|sapo|sap|sanofi|sandvikcoromant|sandvik|samsung|' +
      'samsclub|salon|sale|sakura|safety|safe|saarland|ryukyu|rwe|run|ruhr|rugby|rsvp|room|rogers|' +
      'rodeo|rocks|rocher|rmit|rip|rio|ril|rightathome|ricoh|richardli|rich|rexroth|reviews|review|' +
      'restaurant|rest|republican|report|repair|rentals|rent|ren|reliance|reit|reisen|reise|rehab|' +
      'redumbrella|redstone|red|recipes|realty|realtor|realestate|read|raid|radio|racing|qvc|quest|' +
      'quebec|qpon|pwc|pub|prudential|pru|protection|property|properties|promo|progressive|prof|' +
      'productions|prod|pro|prime|press|praxi|pramerica|post|porn|politie|poker|pohl|pnc|plus|' +
      'plumbing|playstation|play|place|pizza|pioneer|pink|ping|pin|pid|pictures|pictet|pics|piaget|' +
      'physio|photos|photography|photo|phone|philips|phd|pharmacy|pfizer|pet|pccw|pay|passagens|' +
      'party|parts|partners|pars|paris|panerai|panasonic|pamperedchef|page|ovh|ott|otsuka|osaka|' +
      'origins|orientexpress|organic|org|orange|oracle|open|ooo|onyourside|online|onl|ong|one|omega|' +
      'ollo|oldnavy|olayangroup|olayan|okinawa|office|off|observer|obi|nyc|ntt|nrw|nra|nowtv|nowruz|' +
      'now|norton|northwesternmutual|nokia|nissay|nissan|ninja|nikon|nike|nico|nhk|ngo|nfl|nexus|' +
      'nextdirect|next|news|newholland|new|neustar|network|netflix|netbank|net|nec|nba|navy|natura|' +
      'nationwide|name|nagoya|nadex|nab|mutuelle|mutual|museum|mtr|mtpc|mtn|msd|movistar|movie|mov|' +
      'motorcycles|moto|moscow|mortgage|mormon|mopar|montblanc|monster|money|monash|mom|moi|moe|moda|' +
      'mobily|mobile|mobi|mma|mls|mlb|mitsubishi|mit|mint|mini|mil|microsoft|miami|metlife|merckmsd|' +
      'meo|menu|men|memorial|meme|melbourne|meet|media|med|mckinsey|mcdonalds|mcd|mba|mattel|' +
      'maserati|marshalls|marriott|markets|marketing|market|map|mango|management|man|makeup|maison|' +
      'maif|madrid|macys|luxury|luxe|lupin|lundbeck|ltda|ltd|lplfinancial|lpl|love|lotto|lotte|' +
      'london|lol|loft|locus|locker|loans|loan|llc|lixil|living|live|lipsy|link|linde|lincoln|limo|' +
      'limited|lilly|like|lighting|lifestyle|lifeinsurance|life|lidl|liaison|lgbt|lexus|lego|legal|' +
      'lefrak|leclerc|lease|lds|lawyer|law|latrobe|latino|lat|lasalle|lanxess|landrover|land|lancome|' +
      'lancia|lancaster|lamer|lamborghini|ladbrokes|lacaixa|kyoto|kuokgroup|kred|krd|kpn|kpmg|kosher|' +
      'komatsu|koeln|kiwi|kitchen|kindle|kinder|kim|kia|kfh|kerryproperties|kerrylogistics|' +
      'kerryhotels|kddi|kaufen|juniper|juegos|jprs|jpmorgan|joy|jot|joburg|jobs|jnj|jmp|jll|jlc|jio|' +
      'jewelry|jetzt|jeep|jcp|jcb|java|jaguar|iwc|iveco|itv|itau|istanbul|ist|ismaili|iselect|irish|' +
      'ipiranga|investments|intuit|international|intel|int|insure|insurance|institute|ink|ing|info|' +
      'infiniti|industries|inc|immobilien|immo|imdb|imamat|ikano|iinet|ifm|ieee|icu|ice|icbc|ibm|' +
      'hyundai|hyatt|hughes|htc|hsbc|how|house|hotmail|hotels|hoteles|hot|hosting|host|hospital|' +
      'horse|honeywell|honda|homesense|homes|homegoods|homedepot|holiday|holdings|hockey|hkt|hiv|' +
      'hitachi|hisamitsu|hiphop|hgtv|hermes|here|helsinki|help|healthcare|health|hdfcbank|hdfc|hbo|' +
      'haus|hangout|hamburg|hair|guru|guitars|guide|guge|gucci|guardian|group|grocery|gripe|green|' +
      'gratis|graphics|grainger|gov|got|gop|google|goog|goodyear|goodhands|goo|golf|goldpoint|gold|' +
      'godaddy|gmx|gmo|gmbh|gmail|globo|global|gle|glass|glade|giving|gives|gifts|gift|ggee|george|' +
      'genting|gent|gea|gdn|gbiz|garden|gap|games|game|gallup|gallo|gallery|gal|fyi|futbol|furniture|' +
      'fund|fun|fujixerox|fujitsu|ftr|frontier|frontdoor|frogans|frl|fresenius|free|fox|foundation|' +
      'forum|forsale|forex|ford|football|foodnetwork|food|foo|fly|flsmidth|flowers|florist|flir|' +
      'flights|flickr|fitness|fit|fishing|fish|firmdale|firestone|fire|financial|finance|final|film|' +
      'fido|fidelity|fiat|ferrero|ferrari|feedback|fedex|fast|fashion|farmers|farm|fans|fan|family|' +
      'faith|fairwinds|fail|fage|extraspace|express|exposed|expert|exchange|everbank|events|eus|' +
      'eurovision|etisalat|esurance|estate|esq|erni|ericsson|equipment|epson|epost|enterprises|' +
      'engineering|engineer|energy|emerck|email|education|edu|edeka|eco|eat|earth|dvr|dvag|durban|' +
      'dupont|duns|dunlop|duck|dubai|dtv|drive|download|dot|doosan|domains|dom|doha|dog|dodge|doctor|' +
      'docs|dnp|diy|dish|discover|discount|directory|direct|digital|diet|diamonds|dhl|dev|design|' +
      'desi|dentist|dental|democrat|delta|deloitte|dell|delivery|degree|deals|dealer|deal|dds|dclk|' +
      'day|datsun|dating|date|data|dance|dad|dabur|cyou|cymru|cuisinella|csc|cruises|cruise|crs|' +
      'crown|cricket|creditunion|creditcard|credit|courses|coupons|coupon|country|corsica|coop|cool|' +
      'cookingchannel|cooking|contractors|contact|consulting|construction|condos|comsec|computer|' +
      'compare|company|community|commbank|comcast|com|cologne|college|coffee|codes|coach|clubmed|' +
      'club|cloud|clothing|clinique|clinic|click|cleaning|claims|cityeats|city|citic|citi|citadel|' +
      'cisco|circle|cipriani|church|chrysler|chrome|christmas|chloe|chintai|cheap|chat|chase|charity|' +
      'channel|chanel|cfd|cfa|cern|ceo|center|ceb|cbs|cbre|cbn|cba|catholic|catering|cat|casino|cash|' +
      'caseih|case|casa|cartier|cars|careers|career|care|cards|caravan|car|capitalone|capital|' +
      'capetown|canon|cancerresearch|camp|camera|cam|calvinklein|call|cal|cafe|cab|bzh|buzz|buy|' +
      'business|builders|build|bugatti|budapest|brussels|brother|broker|broadway|bridgestone|' +
      'bradesco|box|boutique|bot|boston|bostik|bosch|boots|booking|book|boo|bond|bom|bofa|boehringer|' +
      'boats|bnpparibas|bnl|bmw|bms|blue|bloomberg|blog|blockbuster|blanco|blackfriday|black|biz|bio|' +
      'bingo|bing|bike|bid|bible|bharti|bet|bestbuy|best|berlin|bentley|beer|beauty|beats|bcn|bcg|' +
      'bbva|bbt|bbc|bayern|bauhaus|basketball|baseball|bargains|barefoot|barclays|barclaycard|' +
      'barcelona|bar|bank|band|bananarepublic|banamex|baidu|baby|azure|axa|aws|avianca|autos|auto|' +
      'author|auspost|audio|audible|audi|auction|attorney|athleta|associates|asia|asda|arte|art|arpa|' +
      'army|archi|aramco|arab|aquarelle|apple|app|apartments|aol|anz|anquan|android|analytics|' +
      'amsterdam|amica|amfam|amex|americanfamily|americanexpress|alstom|alsace|ally|allstate|' +
      'allfinanz|alipay|alibaba|alfaromeo|akdn|airtel|airforce|airbus|aigo|aig|agency|agakhan|africa|' +
      'afl|afamilycompany|aetna|aero|aeg|adult|ads|adac|actor|active|aco|accountants|accountant|' +
      'accenture|academy|abudhabi|abogado|able|abc|abbvie|abbott|abb|abarth|aarp|aaa|onion' +
      ')(?=[^0-9a-zA-Z@]|$))'
  )
);

export default validGTLD;
