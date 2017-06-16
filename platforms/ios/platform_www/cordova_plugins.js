cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-device/www/device.js",
        "id": "cordova-plugin-device.device",
        "pluginId": "cordova-plugin-device",
        "clobbers": [
            "device"
        ]
    },
    {
        "file": "plugins/jaeger.Html5Video/www/Html5Video.js",
        "id": "jaeger.Html5Video.Html5Video",
        "pluginId": "jaeger.Html5Video",
        "clobbers": [
            "plugins.html5Video"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.speech.speechrecognition/www/SpeechRecognition.js",
        "id": "org.apache.cordova.speech.speechrecognition.SpeechRecognition",
        "pluginId": "org.apache.cordova.speech.speechrecognition",
        "clobbers": [
            "SpeechRecognition"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.speech.speechrecognition/www/SpeechRecognitionError.js",
        "id": "org.apache.cordova.speech.speechrecognition.SpeechRecognitionError",
        "pluginId": "org.apache.cordova.speech.speechrecognition",
        "clobbers": [
            "SpeechRecognitionError"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.speech.speechrecognition/www/SpeechRecognitionAlternative.js",
        "id": "org.apache.cordova.speech.speechrecognition.SpeechRecognitionAlternative",
        "pluginId": "org.apache.cordova.speech.speechrecognition",
        "clobbers": [
            "SpeechRecognitionAlternative"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.speech.speechrecognition/www/SpeechRecognitionResult.js",
        "id": "org.apache.cordova.speech.speechrecognition.SpeechRecognitionResult",
        "pluginId": "org.apache.cordova.speech.speechrecognition",
        "clobbers": [
            "SpeechRecognitionResult"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.speech.speechrecognition/www/SpeechRecognitionResultList.js",
        "id": "org.apache.cordova.speech.speechrecognition.SpeechRecognitionResultList",
        "pluginId": "org.apache.cordova.speech.speechrecognition",
        "clobbers": [
            "SpeechRecognitionResultList"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.speech.speechrecognition/www/SpeechRecognitionEvent.js",
        "id": "org.apache.cordova.speech.speechrecognition.SpeechRecognitionEvent",
        "pluginId": "org.apache.cordova.speech.speechrecognition",
        "clobbers": [
            "SpeechRecognitionEvent"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.speech.speechrecognition/www/SpeechGrammar.js",
        "id": "org.apache.cordova.speech.speechrecognition.SpeechGrammar",
        "pluginId": "org.apache.cordova.speech.speechrecognition",
        "clobbers": [
            "SpeechGrammar"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.speech.speechrecognition/www/SpeechGrammarList.js",
        "id": "org.apache.cordova.speech.speechrecognition.SpeechGrammarList",
        "pluginId": "org.apache.cordova.speech.speechrecognition",
        "clobbers": [
            "SpeechGrammarList"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-device": "1.1.3",
    "jaeger.Html5Video": "1.2.2",
    "cordova-plugin-compat": "1.1.0",
    "org.apache.cordova.speech.speechrecognition": "0.1.2"
}
// BOTTOM OF METADATA
});