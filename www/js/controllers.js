angular.module('starter.controllers', [])

.controller('AppCtrl', function ($scope, $ionicModal, $timeout) {

    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});


})

.controller('homeCtrl', function ($scope, $location, $ionicSideMenuDelegate, $ionicNavBarDelegate) {

    //REMOVE MENU
    $ionicSideMenuDelegate.canDragContent(false);
    $ionicNavBarDelegate.showBar(false);

    var vid = document.getElementById("bgvid");


    $scope.gotoitems = function () {
        $location.path("app/items");
    };

    /*$scope.$on("$ionicView.enter", function (event, data) {
        // handle event
        vid.currentTime = 0;
        vid.play();
    });

    $scope.$on("$ionicView.leave", function (event, data) {
        // handle event
        vid.pause();
    });*/


})

.controller('itemsCtrl', function ($scope, $location, $stateParams, $ionicSideMenuDelegate, $interval, $ionicNavBarDelegate) {

    //REMOVE MENU
    $ionicSideMenuDelegate.canDragContent(false);
    $ionicNavBarDelegate.showBar(false);

    /*ROUTING*/
    $scope.gotohome = function () {
        //$interval.cancel(gohomeinterval);
        //$location.path("app/home");
    };

    /*GO bACK TO HOME IF UNUSED*/
    var setinterval = function () {
        //$interval.cancel(gohomeinterval);
        //gohomeinterval = null;
        //gohomeinterval = $interval($scope.gotohome, 90000);
    };
    //var gohomeinterval = $interval($scope.gotohome, 90000);


    $scope.onTouch = function () {
        console.log("touched");
        setinterval();
    };

    $scope.screentouched = function () {
        //setinterval();
    };


    /*ANGULAR DOM's*/
    var contentbox = angular.element(document.querySelector('#contentbox'));
    var contenthead = angular.element(document.querySelector('#contenthead'));
    var contentimage = angular.element(document.querySelector('#contentimage'));


    $scope.englishcontent = [{
        'id': 1,
        'image': 'img/items/01.png',
        'title': 'Powder Magazine',
        'desc': "\t Toshakhana was used as a powder magazine in its secondary phase. It is a structure designed primarily for the stable and secure storage of gunpowder. It is possible that Maharajah Ranjit Singh (1780-1839 CE) may have originally constructed the Toshakhana building, following his capture of Gobindgarh Dort from the Bhangi Misl rulers during the conquest of Amritsar in 1805. \n \n \t The Maharajah is believed to have kept treasure worth Rs.30 lakh and precious jewels as well as gold and silver in the fort treasury under guard of 2000 soldiers. The fort was also a store of arms, armaments, arsenal and food grain, as well as a manufactory of various kinds of weapons, artillery items and ammunition. It also housed the royal stables. The fort may have also housed a mint for issuing coins under the Maharajah's sovereign reign. \n \n \t Even though the Toshakhana building has had a complicated history - possibly first existing as a treasury building, but also incorporating more than one phase as a powder magazine - in its most developed form as a magazine it exhibits the full range of functional attributes that were typical of such structures as they had developed in the sphere of European fortification design by the later 18th and earlier 19th centures. Of all military edifices, there are none of greater consequence, or that require more judgement to be properly conducted than powder magazines"
}, {
        'id': 2,
        'image': 'img/items/02.png',
        'title': "Sub-floor channels for Ventilation",
        'desc': "\t Keeping the powder dry was essential for its effective long-term storage. Most magazines had ventilation systems to achieve this, and under-floor ventilation was one such feature that was used, as seen here in the Toshakhana building. This was created either in the form of a raised timber floor with space beneath or by means of other sub-floor voids. The three sub-floor channels within the Toshakhana would have provided such a function."
}, {
        'id': 3,
        'image': 'img/items/03.png',
        'title': "Openings in the walls for Ventilation",
        'desc': "\t As explored in the case of sub-floor channel identified within the chambers of Toshakhana, magazine ventilation systems was necessary in order to keep the stored gun powder dry. A common feature of most magazines was the use of ventilation slits or openings in the side walls. To prevent deliberate hostile firing, the ventilation holes were designed with a variety of protective measures, such as the double-framed shuttered openings. \n\t Copper mesh barriers were sometimes also used to prevent the insertion of light tapers (tying these to the tail of a rat was an attested method). This therefore allowed ventilation to the interior, but prevented incendiary devices from entering the vault."
}, {
        'id': 4,
        'image': 'img/items/04.png',
        'title': "Storage of gun-powder in Barrels",
        'desc': "\t There were very specific requirements for the storage of black-powder given it's high military value, it's extremely volatile in nature, and it's susceptibility to the effects of damp. In short it had to be robustly protected in terms of general security and segregation, from physical projectile attack, from firing - whether deliberate, accidental sparks, static or lighting strike - and from water ingress wheter through permeating damp or the more direct threat of rainwater. \n \t Traditional means of storing gun-powder during the period of Ranjit Singh's reign was in 'dubbhahs' or vessels made of animal hide. These were air and water tight, very elastic, and would seldom break open as do the wooden barrels with fall. Covered with casing of wicker work, they would prove a most superior vessel for holding gun-powder or transporting it from one magazine to another. However they were probably easily affected by external environmental factors, and insects like white ants. Powder barrels were probably adopted for use along European Magazine Guidelines."
}, {
        'id': 5,
        'image': 'img/items/05.png',
        'title': "Protection of gun-powder barrels",
        'desc': "\t Gun-powder barrels were usually stored on raised racks of shelving away from potentially damp floor areas and sometimes even away from the outer walls. At the Toshakhana there is certainly evidence for stacking systems around the perimeter of the interior.\n \t The timber barrels were probably bound by 4-6 copper hoops to avoid risk of sparks. The barrels needed to be air and water tight. For transportation of gunpowder several carts and camels were attatched to the magazine for conveyance of military stores. Carefully conceived rainwater systems were integral to the design of magazines. \n \t In addition to simplification of the roof drainage of the main building at Gobindgarh, as was commonly the case elsewhere, the alley surface around was also carefully channeled and inclined for rapid surface drainage."
}, {
        'id': 6,
        'image': 'img/items/06.png',
        'title': "Siting",
        'desc': "\t Magazines were typically concealed, often close to the protective cover of the inner side of a rampart, as is the case at Gobindgarh. They were often physically segregated from the main activities within the fortress. \n \t Access to the magazine was strictly regulated. Except for a single entrance (with two doors-one opening inward, the other outward-both well locked and often guarded) and potentially small shuttered windows or vents, few openings were present in the structure. \n \t For additional security, a perimeter or blast wall was constructed around the powder magazine."
}, {
        'id': 7,
        'image': 'img/items/07.png',
        'title': "Bomb Proofing",
        "desc": "\t Magazines were usually designed with protective measures against projectile (usually motar bombs) attack. New design would typically involve stout wall construction, thick vaulting to a considered section, and massive buttressing of the longer external walls.\n \t With the reuse of an existing building at Gobindgarh it was clearly felt prudent to add additional internal reinforcement to the structure in the form of the stout cross-wall, to rebuild the internal vaulting, and overlay the existing roof with additional brickwork cladding."
}, {
        'id': 8,
        'image': 'img/items/08.png',
        'title': "Lightning Conductor",
        'desc': "\t Arrangements for conducting lightning were an important consideration in prevention of accidental ignition - at Gobindgarh, a substantial copper lightning conductor strip ran down from the roof apex and affixed  to the south frontage, ran down below ground away from the footings to earth. Later magazines had more elaborate systems including towers. \n \t Additionally, metalwork fittings were generally of copper, and copper sheathing was employed as opposed to iron, as it would not spark.Those using the magazine would use particular foot wear. "
}];

    $scope.hindicontent = [{
        'id': 1,
        'image': 'img/items/01.png',
        'title': 'बारूद का गोदाम',
        'desc': "Toshakhana इसकी माध्यमिक चरण में एक पाउडर पत्रिका के रूप में इस्तेमाल किया गया था। यह एक संरचना बारूद के स्थिर और सुरक्षित भंडारण के लिए मुख्य रूप से बनाया गया है। यह संभव है कि महाराजा रणजीत सिंह (1780-1839 सीई) मूल रूप से Toshakhana इमारत का निर्माण हो सकता है, में 1805 महाराजा अमृतसर की विजय के दौरान भंगी Misl शासकों से गोबिंदगढ़ Dort की उसके पकड़े जाने के बाद रुपये मूल्य रखा खजाना माना जाता है .30 लाख और कीमती रत्नों के साथ ही सोने और 2000 सैनिकों की गार्ड के तहत किले के खजाने में चांदी। किला भी हथियार, आयुध, शस्त्रागार और खाद्यान्न की एक दुकान है, साथ ही हथियार, तोपखाने वस्तुओं और गोला बारूद के विभिन्न प्रकार के एक कारख़ाना था। यह भी शाही अस्तबल रखे। किला भी महाराजा के संप्रभु reign.Even तहत सिक्के जारी हालांकि Toshakhana इमारत एक जटिल इतिहास रहा है के लिए एक टकसाल रखे हो सकता है - posible पहले एक खजाना इमारत के रूप में विद्यमान है, लेकिन यह भी एक पाउडर पत्रिका के रूप में एक से अधिक चरण को शामिल - में अपनी एक पत्रिका के रूप में सबसे अधिक विकसित रूप में यह कार्यात्मक गुण है कि ऐसी संरचनाओं के ठेठ थे के रूप में वे बाद में 18 वीं और 19 वीं पहले centures द्वारा यूरोपीय दुर्ग डिजाइन के क्षेत्र में विकसित की थी की पूरी रेंज को दर्शाती है। सभी सैन्य इमारतें, वहाँ अधिक से अधिक परिणाम में से कोई भी कर रहे हैं, या कि ठीक पाउडर पत्रिकाओं की तुलना में आयोजित किए जाने की अधिक आवश्यकता होती है निर्णय"
}, {
        'id': 2,
        'image': 'img/items/02.png',
        'title': "वेंटिलेशन के लिए उप फर्श चैनलों",
        'desc': "पाउडर सूखा रखने इसके प्रभावी लंबी अवधि के भंडारण के लिए आवश्यक था। सबसे पत्रिकाओं इस लक्ष्य को हासिल करने के लिए वेंटिलेशन सिस्टम था, और तहत मंजिल वेंटिलेशन ऐसे ही एक विशेषता थी कि, के रूप में इस्तेमाल किया गया था Toshakhana इमारत में यहाँ देखा है, यह बनाया या तो नीचे या अन्य के माध्यम से अंतरिक्ष के साथ एक उठाया लकड़ी के फर्श के रूप में था उप फर्श रिक्तियों। Toshakhana के भीतर तीन उप फर्श चैनलों में इस तरह के एक समारोह में प्रदान किया जाएगा।"
}, {
        'id': 3,
        'image': 'img/items/03.png',
        'title': "वेंटिलेशन के लिए दीवारों में उद्घाटन",
        'desc': "के रूप में उप-फ्लोर चैनल Toshakhana के कक्षों में पहचाना के मामले में पता लगाया है, पत्रिका वेंटिलेशन सिस्टम आदेश संग्रहीत गन पाउडर सूखा रखने के लिए जरूरी हो गया था। सबसे पत्रिकाओं का एक आम सुविधा ओर दीवारों में वेंटिलेशन slits या खुलने का उपयोग किया गया। जानबूझकर शत्रुतापूर्ण गोलीबारी रोकने के लिए, वेंटीलेशन छेद ऐसे डबल फंसाया बंद के उद्घाटन के रूप में सुरक्षा उपायों की एक किस्म के साथ डिजाइन किए गए थे। तांबा जाल बाधाओं को कभी कभी भी प्रकाश tapers की प्रविष्टि (एक चूहे की पूंछ के लिए एक अभिप्रमाणित विधि इन बांधने गया था) को रोकने के लिए इस्तेमाल किया गया। यह इसलिए इंटीरियर के लिए वेंटिलेशन की अनुमति दी है, लेकिन तिजोरी में प्रवेश करने से आग लगानेवाला उपकरणों को रोका।"
}, {
        'id': 4,
        'image': 'img/items/04.png',
        'title': "बैरल में बंदूक पाउडर का भंडारण",
        'desc': "काला पाउडर के भंडारण के लिए अपने उच्च सैन्य मूल्य को देखते हुए अपने बेहद प्रकृति में उतार-चढ़ाव, और नम के प्रभाव के लिए अपनी संवेदनशीलता के लिए बहुत विशिष्ट आवश्यकताओं थे। wheter नम या वर्षा जल के अधिक सीधा खतरा permeating के माध्यम से और प्रवेश पानी से - संक्षेप में यह मजबूती के साथ सामान्य सुरक्षा और अलगाव, शारीरिक फेंकने के हमले से, फायरिंग से की दृष्टि से संरक्षित किया जा सकता था - चाहे जानबूझकर, आकस्मिक स्पार्क्स, स्थिर या प्रकाश हड़ताल । रणजीत सिंह के शासनकाल की अवधि के दौरान बंदूक पाउडर के संचय के लिए परंपरागत साधनों 'dubbhahs' या जहाजों पशु छिपाने के बने में था। ये हवा और पानी, तंग बहुत लोचदार थे, और शायद ही कभी खुले रूप में तोड़ गिरावट के साथ लकड़ी बैरल से करना होगा। विकर काम का आवरण के साथ कवर किया, वे बंदूक पाउडर पकड़े या यह एक पत्रिका से दूसरे को परिवहन के लिए एक सबसे बेहतर पोत साबित होगा। हालांकि वे शायद आसानी से बाहरी पर्यावरणीय कारकों, और सफेद चींटियों की तरह कीड़ों से प्रभावित थे। पाउडर बैरल शायद यूरोपीय पत्रिका के दिशा निर्देशों के साथ उपयोग के लिए अपनाया गया"
}, {
        'id': 5,
        'image': 'img/items/05.png',
        'title': "बंदूक पाउडर बैरल का संरक्षण",
        'desc': "गन पाउडर बैरल आमतौर पर संभावित नम मंजिल क्षेत्रों से दूर भी बाहरी दीवारों से दूर ठंडे बस्ते में डालने और कभी कभी का उठाया रैक पर संग्रहीत किया गया। Toshakhana में वहाँ निश्चित रूप से आंतरिक की परिधि के आसपास स्टैकिंग सिस्टम के लिए सबूत है। लकड़ी बैरल शायद 4-6 तांबा हुप्स से बंधे थे स्पार्क्स के जोखिम से बचने के लिए। बैरल आवश्यक हो तो हवा और पानी तंग होने के लिए। बारूद के परिवहन के लिए कई गाड़ियां और ऊंट सैन्य दुकानों के वाहन के लिए पत्रिका को attatched थे। ध्यान से कल्पना वर्षा जल प्रणालियों पत्रिकाओं के डिजाइन का अभिन्न अंग थे। गोबिंदगढ़ में मुख्य इमारत की छत जल निकासी के सरलीकरण के अलावा, जैसा कि आमतौर पर कहीं और मामला था, गली की सतह के आसपास भी ध्यान से मोड़ा और तेजी से सतह जल निकासी के लिए इच्छुक था"
}, {
        'id': 6,
        'image': 'img/items/06.png',
        'title': "जगह",
        'desc': "पत्रिका आमतौर पर, छुपा रहे थे अक्सर एक किले की दीवार के भीतर की ओर से सुरक्षा कवर के करीब है, के रूप में गोबिंदगढ़ में मामला है। वे अक्सर शारीरिक रूप से किले के भीतर मुख्य गतिविधियों से अलग कर दिया गया। पत्रिका तक पहुँच सख्ती से विनियमित किया गया था। एक एकल प्रवेश और संभावित छोटे बंद खिड़कियों या झरोखों, कुछ के उद्घाटन संरचना में उपस्थित थे (दो दरवाजे-एक उद्घाटन आवक, अन्य जावक दोनों अच्छी तरह से बंद कर दिया और अक्सर पहरा के साथ) के लिए छोड़कर। अतिरिक्त सुरक्षा के लिए, एक परिधि या विस्फोट दीवार पाउडर पत्रिका के आसपास का निर्माण किया गया था।"
}, {
        'id': 7,
        'image': 'img/items/07.png',
        'title': "बम प्रूफिंग",
        "desc": "पत्रिका आमतौर पर फेंकने के खिलाफ सुरक्षात्मक उपायों के साथ डिजाइन किए गए थे हमले (आमतौर पर बम motar)। नई डिजाइन आमतौर पर मोटा दीवार निर्माण, एक माना जाता अनुभाग के लिए मोटी मेहराब, और लंबे समय तक बाहरी दीवारों की भारी buttressing invoive जाएगा। गोबिंदगढ़ में एक मौजूदा इमारत का पुन: उपयोग के साथ यह स्पष्ट रूप से मोटा पार दीवार के रूप में संरचना करने के लिए अतिरिक्त आंतरिक सुदृढीकरण जोड़ने के लिए, आंतरिक मेहराब के पुनर्निर्माण, और अतिरिक्त brickwork आवरण के साथ मौजूदा छत मढ़ी विवेकपूर्ण महसूस किया गया।"
}, {
        'id': 8,
        'image': 'img/items/08.png',
        'title': "बिजली का चालक",
        'desc': "गोबिंदगढ़ में एक बड़ा तांबा बिजली कंडक्टर पट्टी छत शीर्ष से नीचे भागा और दक्षिण हाते से चिपका पृथ्वी को आधार से दूर जमीन के नीचे नीचे दौड़ा - बिजली के संचालन के लिए व्यवस्था की आकस्मिक प्रज्वलन की रोकथाम में एक महत्वपूर्ण विचार कर रहे थे। बाद में पत्रिकाओं टावरों सहित अधिक विस्तृत सिस्टम था। इसके अतिरिक्त, धातु फिटिंग तांबे का आम तौर पर थे, और के रूप में लोहे का विरोध करने के लिए तांबे sheathing नियुक्त किया गया था, के रूप में यह नहीं spark.Additionally, पत्रिका का उपयोग उन लोगों विशेष रूप से पैर पहनने का उपयोग होगा। "
}];

    $scope.punjabicontent = [{
        'id': 1,
        'image': 'img/items/01.png',
        'title': 'ਪਾਊਡਰ ਮੈਗਜ਼ੀਨ',
        'desc': "ਤੋਸ਼ਾਖਾਨਾ ਇਸ ਦੇ ਸੈਕੰਡਰੀ ਪੜਾਅ ਵਿੱਚ ਇੱਕ ਪਾਊਡਰ ਰਸਾਲੇ ਦੇ ਤੌਰ ਤੇ ਵਰਤਿਆ ਗਿਆ ਸੀ. ਇਹ ਇੱਕ ਬਣਤਰ ਬਾਰੂਦ ਦੀ ਸਥਿਰ ਅਤੇ ਸੁਰੱਖਿਅਤ ਸਟੋਰੇਜ਼ ਲਈ ਮੁੱਖ ਤੌਰ ਤੇ ਤਿਆਰ ਕੀਤਾ ਗਿਆ ਹੈ. ਇਹ ਸੰਭਵ ਹੈ ਕਿ ਮਹਾਰਾਜਾ ਰਣਜੀਤ ਸਿੰਘ (1780-1839 ਈ) ਮੂਲ ਤੋਸ਼ਾਖਾਨਾ ਇਮਾਰਤ ਦਾ ਨਿਰਮਾਣ ਕੀਤਾ ਹੈ, ਹੋ ਸਕਦਾ ਹੈ, ਵਿਚ 1805. ਮਹਾਰਾਜਾ ਅੰਮ੍ਰਿਤਸਰ ਦੀ ਜਿੱਤ ਦੌਰਾਨ ਭੰਗੀ ਮਿਸਲ ਦੇ ਹਾਕਮ ਤੱਕ ਗੋਬਿੰਦਗੜ੍ਹ dört ਦੇ ਉਸ ਦੇ ਕੈਪਚਰ ਹੇਠ ਕਰੋੜ ਰੁਪਏ ਰੱਖਿਆ ਖਜਾਨਾ ਹੈ ਨੂੰ ਵਿਸ਼ਵਾਸ ਕੀਤਾ ਹੈ .30 ਲੱਖ ਅਤੇ ਕੀਮਤੀ ਗਹਿਣੇ ਦੇ ਨਾਲ ਨਾਲ ਸੋਨੇ ਅਤੇ 2000 ਸਿਪਾਹੀ ਦੇ ਗਾਰਡ ਦੇ ਤਹਿਤ ਕਿਲੇ ਦੇ ਖਜ਼ਾਨੇ ਵਿੱਚ ਸਿਲਵਰ. ਕਿਲੇ ਨੂੰ ਵੀ ਹਥਿਆਰ, ਹਥਿਆਰ, ਹੱਥ ਅਤੇ ਅਨਾਜ ਦੀ ਇੱਕ ਸਟੋਰ, ਦੇ ਨਾਲ ਨਾਲ ਹਥਿਆਰ, ਤੋਪਖਾਨੇ ਇਕਾਈ ਅਤੇ ਬਾਰੂਦ ਦੇ ਵੱਖ-ਵੱਖ ਕਿਸਮ ਦੇ ਲਈ ਇੱਕ manufactory ਸੀ. ਇਸ ਵਿਚ ਇਹ ਵੀ ਸ਼ਾਹੀ ਗੰਦਗੀ ਨੂੰ ਰੱਖਿਆ. ਕਿਲੇ ਨੂੰ ਵੀ ਮਹਾਰਾਜਾ ਦੇ ਸਰਬਸ਼ਕਤੀਮਾਨ ਇੱਥੋ ਦੇ ਤਹਿਤ ਸਿੱਕੇ ਜਾਰੀ ਪਰ ਤੋਸ਼ਾਖਾਨਾ ਦੀ ਇਮਾਰਤ ਦਾ ਇੱਕ ਗੁੰਝਲਦਾਰ ਦਾ ਇਤਿਹਾਸ ਸੀ, ਕੀਤਾ ਹੈ ਲਈ ਇੱਕ ਪੁਦੀਨੇ ਸਿਥਤ ਹੈ ਹੋ ਸਕਦਾ ਹੈ - posible ਪਹਿਲੇ ਇੱਕ ਖਜ਼ਾਨਾ ਇਮਾਰਤ ਦੇ ਰੂਪ ਵਿੱਚ ਮੌਜੂਦਾ ਹੈ, ਪਰ ਇਹ ਵੀ ਇੱਕ ਪਾਊਡਰ ਮੈਗਜ਼ੀਨ ਦੇ ਤੌਰ ਤੇ ਹੋਰ ਵੱਧ ਇੱਕ ਪੜਾਅ ਸ਼ਾਮਲ - ਵਿੱਚ ਇਸ ਦੇ ਇਕ ਰਸਾਲੇ ਦੇ ਰੂਪ ਵਿੱਚ ਸਭ ਵਿਕਸਤ ਫਾਰਮ ਨੂੰ ਇਸ ਕੰਮ ਲਈ ਗੁਣ ਹੈ, ਜੋ ਕਿ ਅਜਿਹੇ ਬਣਤਰ ਦੇ ਆਮ ਸਨ ਉਹ ਬਾਅਦ ਵਿਚ 18 ਅਤੇ ਪਿਛਲੇ 19 centures ਕੇ ਯੂਰਪੀ ਦੁਰਗ ਡਿਜ਼ਾਇਨ ਦੇ ਖੇਤਰ ਵਿੱਚ ਵਿਕਸਤ ਕੀਤਾ ਸੀ ਦੀ ਪੂਰੀ ਸੀਮਾ ਹੈ, ਪ੍ਰਗਟ. ਸਾਰੇ ਫੌਜੀ ਇਮਾਰਤ ਦੇ, ਉੱਥੇ ਵੱਡਾ ਨਤੀਜਾ ਕੋਈ ਵੀ ਹਨ, ਜ, ਜੋ ਕਿ ਸਹੀ ਢੰਗ ਪਾਊਡਰ ਰਸਾਲੇ ਵੱਧ ਕਰਵਾਏ ਜਾ ਕਰਨ ਲਈ ਹੋਰ ਸਜ਼ਾ ਦੀ ਲੋੜ ਹੈ"
}, {
        'id': 2,
        'image': 'img/items/02.png',
        'title': "ਹਵਾਦਾਰੀ ਲਈ ਸਬ-ਮੰਜ਼ਿਲ ਚੈਨਲ",
        'desc': "ਪਾਊਡਰ ਖੁਸ਼ਕ ਰੱਖਣਾ ਇਸ ਦੀ ਅਸਰਦਾਰ ਲੰਬੀ ਮਿਆਦ ਸਟੋਰੇਜ਼ ਲਈ ਜ਼ਰੂਰੀ ਸੀ. ਜ਼ਿਆਦਾਤਰ ਰਸਾਲੇ ਇਸ ਨੂੰ ਪ੍ਰਾਪਤ ਕਰਨ ਲਈ ਹਵਾਦਾਰੀ ਸਿਸਟਮ ਸੀ, ਅਤੇ ਅਧੀਨ-ਮੰਜ਼ਿਲ ਹਵਾਦਾਰੀ ਇੱਕ ਅਜਿਹੇ ਗੁਣ ਨੂੰ ਸੀ, ਜੋ ਕਿ, ਵਰਤਿਆ ਗਿਆ ਸੀ ਦੇ ਰੂਪ ਵਿੱਚ ਤੋਸ਼ਾਖਾਨਾ ਇਮਾਰਤ ਵਿੱਚ ਇੱਥੇ ਹੀ ਵੇਖਿਆ ਹੈ, ਇਸ ਨੂੰ ਬਣਾਇਆ ਹੈ ਕਿਸੇ ਨਜ਼ਾਰੇ ਜ ਹੋਰ ਦੇ ਜ਼ਰੀਏ ਸਪੇਸ ਨਾਲ ਉਭਾਰਿਆ ਲੱਕੜ ਮੰਜ਼ਿਲ ਦੇ ਰੂਪ ਵਿਚ ਕੀਤਾ ਗਿਆ ਸੀ ਸਬ-ਮੰਜ਼ਿਲ voids. ਤੋਸ਼ਾਖਾਨਾ ਦੇ ਅੰਦਰ ਤਿੰਨ ਉਪ-ਮੰਜ਼ਿਲ ਚੈਨਲ ਅਜਿਹੇ ਫੰਕਸ਼ਨ ਮੁਹੱਈਆ ਹੈ ਸੀ."
}, {
        'id': 3,
        'image': 'img/items/03.png',
        'title': "ਹਵਾਦਾਰੀ ਲਈ ਕੰਧ ਵਿਚ ਮੌਕੇ",
        'desc': "ਹੋਣ ਦੇ ਨਾਤੇ ਸਬ-ਮੰਜ਼ਿਲ ਚੈਨਲ ਤੋਸ਼ਾਖਾਨਾ ਦੇ ਕਮਰੇ ਦੇ ਅੰਦਰ ਦੀ ਪਛਾਣ ਦੇ ਮਾਮਲੇ 'ਚ ਪਤਾ ਲਗਾਇਆ, ਮੈਗਜ਼ੀਨ ਹਵਾਦਾਰੀ ਸਿਸਟਮ ਕ੍ਰਮ ਨੂੰ ਸੰਭਾਲਿਆ ਬੰਦੂਕ ਪਾਊਡਰ ਖੁਸ਼ਕ ਰੱਖਣ ਲਈ ਜ਼ਰੂਰੀ ਸੀ. ਸਭ ਰਸਾਲੇ ਦੀ ਇੱਕ ਆਮ ਵਿਸ਼ੇਸ਼ਤਾ ਹੈ ਪਾਸੇ ਕੰਧ ਵਿਚ ਹਵਾਦਾਰੀ slits ਜ ਮੌਕੇ ਵਰਤਣ ਦੀ ਸੀ. ਜਾਣ-ਬੁੱਝ ਕੇ ਵਿਰੋਧੀ ਗੋਲੀਬਾਰੀ ਰੋਕਣ ਲਈ, ਹਵਾਦਾਰੀ ਲਈ ਘੁਰਨੇ ਅਜਿਹੇ ਦੋ-ਆਇਦ shuttered ਮੌਕੇ ਦੇ ਤੌਰ ਤੇ ਸੁਰੱਖਿਆ ਦੇ ਉਪਾਅ, ਦੀ ਇੱਕ ਕਿਸਮ ਦੇ ਨਾਲ ਬਣਾਇਆ ਗਿਆ ਸੀ. ਕਾਪਰ ਜਾਲ ਰੁਕਾਵਟ ਕਈ ਵਾਰ ਵੀ ਚਾਨਣ tapers ਦੇ ਵਿਚਕਾਰਲੀ (ਇੱਕ ਚੂਹਾ ਦੀ ਪੂਛ ਨੂੰ ਇੱਕ ਤਸਦੀਕ ਢੰਗ ਨੂੰ ਇਹ ਕੰਮ ਸ਼ੁਰੂ ਕੀਤਾ ਗਿਆ ਸੀ) ਨੂੰ ਰੋਕਣ ਲਈ ਵਰਤਿਆ ਗਿਆ ਸੀ. ਇਹ ਇਸ ਲਈ ਅੰਦਰੂਨੀ ਨੂੰ ਹਵਾਦਾਰੀ ਦੀ ਇਜਾਜ਼ਤ ਹੈ, ਪਰ ਵਾਲਟ ਦਾਖਲ ਤੱਕ incendiary ਜੰਤਰ ਰੋਕਿਆ."
}, {
        'id': 4,
        'image': 'img/items/04.png',
        'title': "ਬੈਰਲ ਵਿੱਚ ਬੰਦੂਕ-ਪਾਊਡਰ ਦੀ ਸਟੋਰੇਜ਼",
        'desc': "ਕਾਲਾ-ਪਾਊਡਰ ਦੀ ਸਟੋਰੇਜ਼ ਨੂੰ ਇਸ ਦੇ ਉੱਚ ਫੌਜੀ ਮੁੱਲ ਦਿੱਤਾ ਹੈ, ਇਸ ਦੇ ਬਹੁਤ ਹੀ ਕੁਦਰਤ ਵਿਚ ਅਸਥਿਰ ਹੈ, ਅਤੇ ਗਿੱਲੀ ਦੇ ਪ੍ਰਭਾਵ ਨੂੰ ਇਸ ਦੇ susceptibility ਦੇ ਲਈ ਬਹੁਤ ਹੀ ਖਾਸ ਲੋੜ ਸਨ. wheter ਗਿੱਲੀ ਜ ਰੇਨ ਦੇ ਹੋਰ ਸਿੱਧੀ ਧਮਕੀ ਰਮਿਆ ਦੁਆਰਾ ਅਤੇ ਪਾਣੀ ingress ਤੱਕ - ਸੰਖੇਪ ਵਿੱਚ ਇਸ ਨੂੰ ਬੜੀ ਬੇਬਾਕੀ ਦੇ ਜਨਰਲ ਸੁਰੱਖਿਆ ਅਤੇ ਭੇਦਭਾਵ, ਸਰੀਰਕ projectile ਹਮਲੇ ਤੱਕ, ਫਾਇਰਿੰਗ ਤੱਕ ਦੇ ਰੂਪ ਵਿੱਚ ਸੁਰੱਖਿਅਤ ਕੀਤਾ ਜਾ ਸਕਦਾ ਸੀ - ਕਿ ਕੀ-ਬੁੱਝ ਕੇ, ਦੁਰਘਟਨਾ ਸਪਾਰਕਸ, ਸਥਿਰ ਜ ਰੋਸ਼ਨੀ ਹੜਤਾਲ . ਰਣਜੀਤ ਸਿੰਘ ਦੇ ਰਾਜ ਦੀ ਮਿਆਦ ਦੇ ਦੌਰਾਨ ਬੰਦੂਕ-ਪਾਊਡਰ ਨੂੰ ਸੰਭਾਲਣ ਦੇ ਰਵਾਇਤੀ ਦਾ ਮਤਲਬ ਹੈ 'dubbhahs' ਜ ਬਾਲਟੀ ਜਾਨਵਰ ਓਹਲੇ ਦੀ ਕੀਤੀ ਸੀ. ਇਹ ਹਵਾ ਅਤੇ ਪਾਣੀ, ਤੰਗ ਬਹੁਤ ਲਚਕੀਲੇ ਸਨ ਅਤੇ ਘੱਟ ਹੀ ਖੁੱਲ੍ਹੇ ਤੋੜ ਦੇ ਤੌਰ ਤੇ ਗਿਰਾਵਟ ਦੇ ਨਾਲ ਲੱਕੜੀ ਬੈਰਲ ਕਰਨਾ ਸੀ. wicker ਕੰਮ ਦੀ ਕੇਸਿੰਗ ਨਾਲ ਛੱਤਿਆ, ਉਹ ਬੰਦੂਕ-ਪਾਊਡਰ ਰੱਖਣ ਜ ਇਸ ਨੂੰ ਇੱਕ ਰਸਾਲੇ ਤੱਕ ਕਿਸੇ ਹੋਰ ਨੂੰ ਲਿਜਾਣ ਲਈ ਇਕ ਸਭ ਵਧੀਆ ਕੰਮਾ ਸਾਬਤ ਹੋਵੇਗਾ. ਪਰ ਉਹ ਸ਼ਾਇਦ ਆਸਾਨੀ ਨਾਲ ਬਾਹਰੀ ਵਾਤਾਵਰਣ ਕਾਰਕ, ਅਤੇ ਚਿੱਟੇ ants ਵਰਗੇ ਕੀੜੇ ਨਾਲ ਪ੍ਰਭਾਵਿਤ ਹੋਏ ਸਨ. ਪਾਊਡਰ ਬੈਰਲ ਸੰਭਵ ਹੈ ਕਿ ਯੂਰਪੀ ਮੈਗਜ਼ੀਨ ਦਿਸ਼ਾ ਦੇ ਨਾਲ-ਨਾਲ ਵਰਤਣ ਲਈ ਅਪਣਾਇਆ ਗਿਆ ਸੀ"
}, {
        'id': 5,
        'image': 'img/items/05.png',
        'title': "ਬੰਦੂਕ-ਪਾਊਡਰ ਬੈਰਲ ਦੇ ਸੁਰੱਖਿਆ",
        'desc': "ਗੁਨ-ਪਾਊਡਰ ਬੈਰਲ ਆਮ ਤੌਰ 'ਤੇ ਸੰਭਾਵੀ ਗਿੱਲੀ ਮੰਜ਼ਿਲ ਖੇਤਰ ਤੱਕ ਦੂਰ ਵੀ ਬਾਹਰੀ ਕੰਧ ਦੂਰ ਸ਼ੇਲਵਿੰਗ ਅਤੇ ਕਈ ਵਾਰੀ ਦੇ ਉਭਾਰਿਆ ਅਤੇਵੈੱਸਟ' ਤੇ ਸਟੋਰ ਕੀਤਾ ਗਿਆ ਸੀ. ਤੋਸ਼ਾਖਾਨਾ 'ਤੇ ਉਥੇ ਜ਼ਰੂਰ ਅੰਦਰੂਨੀ ਦੇ ਘੇਰੇ ਦੇ ਆਲੇ-ਦੁਆਲੇ ਸਟਾਕਿੰਗ ਸਿਸਟਮ ਲਈ ਸਬੂਤ ਹੈ. ਲੱਕੜ ਬੈਰਲ ਸੰਭਵ ਹੈ ਕਿ 4-6 ਪਿੱਤਲ ਬਾਸਕਟਬਾਲ ਦੇ ਬੰਧਨ ਗਏ ਸਨ ਚਿੰਗਾਰੀ ਦੇ ਖਤਰੇ ਨੂੰ ਬਚਣ ਲਈ. ਬੈਰਲ ਦੀ ਲੋੜ ਹਵਾ ਅਤੇ ਪਾਣੀ ਤੰਗ ਹੋਣ ਲਈ. ਬਾਰੂਦ ਦੇ ਆਵਾਜਾਈ ਲਈ ਕਈ ਗੱਡੇ ਅਤੇ ਊਠ ਫੌਜੀ ਦੇ ਸਟੋਰ ਦੀ ਪਹੁੰਚਾਇਆ ਰਸਾਲੇ ਨੂੰ attatched ਗਏ ਸਨ. ਧਿਆਨ ਨਾਲ ਗਰਭਵਤੀ ਰੇਨ ਸਿਸਟਮ ਰਸਾਲੇ ਦੇ ਡਿਜ਼ਾਇਨ ਨੂੰ ਅਹਿਮ ਸਨ. ਗੋਬਿੰਦਗੜ੍ਹ 'ਤੇ ਮੁੱਖ ਇਮਾਰਤ ਦੀ ਛੱਤ ਡਰੇਨੇਜ ਦੀ ਸਰਲਤਾ ਨੂੰ ਇਸ ਦੇ ਨਾਲ, ਦੇ ਆਮ ਕਿਤੇ ਕੇਸ ਦੀ ਸੀ, ਗਲੀ ਸਤਹ ਦੇ ਆਲੇ-ਦੁਆਲੇ ਨੂੰ ਵੀ ਧਿਆਨ ਨਾਲ channeled ਅਤੇ ਤੇਜ਼ੀ ਨਾਲ ਸਤਹ ਡਰੇਨੇਜ ਲਈ ਪਛਤਾ ਰਿਹਾ ਸੀ"
}, {
        'id': 6,
        'image': 'img/items/06.png',
        'title': "ਦੀ ਜਗ੍ਹਾ",
        'desc': "ਰਸਾਲੇ ਆਮ ਤੌਰ ਤੇ, ਗੁਪਤ ਗਏ ਸਨ ਅਕਸਰ ਇੱਕ Rampart ਦੇ ਅੰਦਰੂਨੀ ਪਾਸੇ ਦੇ ਸੁਰੱਖਿਆ ਕਵਰ ਦੇ ਨੇੜੇ ਹੈ, ਦੇ ਗੋਬਿੰਦਗੜ੍ਹ 'ਤੇ ਕੇਸ ਹੈ. ਉਹ ਅਕਸਰ ਸਰੀਰਕ ਤੌਰ 'ਤੇ ਗੜ੍ਹੀ ਦੇ ਅੰਦਰ ਮੁੱਖ ਕੰਮ ਤੱਕ ਅਲੱਗ ਕੀਤਾ ਗਿਆ ਸੀ. ਰਸਾਲੇ ਦਾ ਪਹੁੰਚ ਸਖਤੀ ਨਿਯੰਤ੍ਰਿਤ ਕੀਤਾ ਗਿਆ ਸੀ. ਇੱਕ ਸਿੰਗਲ ਪ੍ਰਵੇਸ਼ ਅਤੇ ਸੰਭਾਵੀ ਛੋਟੇ shuttered ਵਿੰਡੋਜ਼ ਨੂੰ ਜ ਹਵਾਦਾਰੀ, ਕੁਝ ਮੌਕੇ ਬਣਤਰ ਵਿੱਚ ਮੌਜੂਦ ਸਨ (ਦੋ ਦਰਵਾਜ਼ੇ-ਇੱਕ ਪਹਿਲੇ ਅੰਦਰ, ਹੋਰ ਬਾਹਰੀ-ਦੋਨੋ ਦੇ ਨਾਲ ਨਾਲ ਤਾਲਾਬੰਦ ਹੈ ਅਤੇ ਅਕਸਰ ਨਿਗਰਾਨੀ ਨਾਲ) ਲਈ ਛੱਡ ਕੇ. ਵਾਧੂ ਸੁਰੱਖਿਆ ਲਈ, ਇੱਕ ਘੇਰੇ ਜ ਧਮਾਕੇ ਕੰਧ ਪਾਊਡਰ ਰਸਾਲੇ ਦੇ ਆਲੇ-ਦੁਆਲੇ ਦਾ ਨਿਰਮਾਣ ਕੀਤਾ ਗਿਆ ਸੀ."
}, {
        'id': 7,
        'image': 'img/items/07.png',
        'title': "ਬੰਬ ਤੇ ਹਵਾਲਾ",
        "desc": "ਰਸਾਲੇ ਆਮ ਤੌਰ 'ਤੇ projectile ਵਿਰੁੱਧ ਸੁਰੱਖਿਆ ਉਪਾਅ ਦੇ ਨਾਲ ਬਣਾਇਆ ਗਿਆ ਸੀ ਹਮਲੇ (ਆਮ ਤੌਰ' ਤੇ ਬੰਬ motar). ਨਿਊ ਡਿਜ਼ਾਇਨ ਖਾਸ ਤੌਰ stout ਕੰਧ ਦੀ ਉਸਾਰੀ, ਇੱਕ ਮੰਨਿਆ ਭਾਗ ਨੂੰ ਮੋਟੀ ਵੌਲਟਿੰਗ, ਅਤੇ ਹੁਣ ਬਾਹਰੀ ਕੰਧ ਦੇ ਵੱਡੇ buttressing invoive ਸੀ. ਗੋਬਿੰਦਗੜ੍ਹ 'ਤੇ ਇੱਕ ਮੌਜੂਦਾ ਇਮਾਰਤ ਦੀ ਮੁੜ ਨਾਲ ਇਸ ਨੂੰ ਸਾਫ਼-ਸਾਫ਼ stout ਅੰਤਰ-ਕੰਧ ਦੇ ਰੂਪ ਵਿੱਚ ਬਣਤਰ ਨੂੰ ਵਾਧੂ ਅੰਦਰੂਨੀ reinforcement ਨੂੰ ਸ਼ਾਮਿਲ ਕਰਨ ਲਈ, ਅੰਦਰੂਨੀ ਵੌਲਟਿੰਗ ਦੁਬਾਰਾ ਬਣਾਉਣ, ਅਤੇ ਵਾਧੂ brickwork ਜੋਨਜ਼ ਨਾਲ ਮੌਜੂਦਾ ਛੱਤ ਮਢ਼ਿਆ ਦਾ ਸਿਆਣਾ ਮਹਿਸੂਸ ਕੀਤਾ ਗਿਆ ਸੀ."
}, {
        'id': 8,
        'image': 'img/items/08.png',
        'title': "ਬਿਜਲੀ ਕੰਡਕਟਰ",
        'desc': "ਗੋਬਿੰਦਗੜ੍ਹ 'ਤੇ ਇੱਕ ਕਾਫ਼ੀ ਪਿੱਤਲ ਬਿਜਲੀ ਕੰਡਕਟਰ ਪੱਟੀ ਛੱਤ ਸੁਪਰੀਮ ਤੱਕ ਥੱਲੇ ਭੱਜ ਅਤੇ ਦੱਖਣ frontage ਨੂੰ ਲਗਾਈ ਧਰਤੀ ਨੂੰ footings ਦੂਰ ਜ਼ਮੀਨ ਹੇਠ ਥੱਲੇ ਭੱਜ - ਬਿਜਲੀ ਕਰਵਾਉਣ ਲਈ ਪ੍ਰਬੰਧ ਦੁਰਘਟਨਾ ਇਗਨਿਸ਼ਨ ਦੀ ਰੋਕਥਾਮ ਵਿੱਚ ਇੱਕ ਅਹਿਮ ਵਿਚਾਰ ਸਨ. ਬਾਅਦ ਵਿਚ ਰਸਾਲੇ ਟਾਵਰ ਵੀ ਸ਼ਾਮਲ ਹਨ ਨੂੰ ਹੋਰ ਜਿਟਲ ਸਿਸਟਮ ਸੀ. ਇਸ ਦੇ ਨਾਲ, metalwork ਫਿਟਿੰਗਸ ਪਿੱਤਲ ਦੇ ਆਮ ਤੌਰ 'ਤੇ ਸਨ, ਅਤੇ ਦੇ ਰੂਪ ਵਿੱਚ ਲੋਹੇ ਦਾ ਵਿਰੋਧ ਪਿੱਤਲ sheathing ਨੌਕਰੀ ਗਿਆ ਸੀ, ਦੇ ਰੂਪ ਵਿੱਚ ਇਸ ਨੂੰ ਨਾ spark.Additionally, ਮੈਗਜ਼ੀਨ ਵਰਤ ਜਿਹੜੇ ਖਾਸ ਪੈਰ ਵੀਅਰ ਲਈ ਵਰਤ ਹੋਵੇਗਾ. "
}];

    $scope.items = [];
    $scope.items.push($scope.englishcontent);
    $scope.items.push($scope.hindicontent);
    $scope.items.push($scope.punjabicontent);



    //CHANGE LANGUAGE
    $scope.language = 0;
    $scope.changelanguage = function (index) {
        $scope.language = index;
        $('#contentbox').mCustomScrollbar('scrollTo', '0%');
    };

    $scope.showitem = $scope.items[$scope.language][0];

    //CHANGE ITEM
    var removeanimated;
    $scope.removeanimationclass = function () {
        $('#contentbox').removeClass('animated bounceInUp');
        $('#contenthead').removeClass('animated bounceInDown');
        $interval.cancel(removeanimated);
    };

    $scope.changedesc = function (index) {

        $('#contentbox').mCustomScrollbar('scrollTo', '0%');

        $scope.itemnumber = index;

        $('#contentbox').addClass('animated bounceInUp');
        $('#contenthead').addClass('animated bounceInDown');

        contentbox.addClass('animated bounceInUp');
        contenthead.addClass('animated bounceInDown');

        removeanimated = $interval($scope.removeanimationclass, 1000, 1);
    };

    $scope.changedesc(0);

});
