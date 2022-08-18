/** 
 * @file yfrobot
 * @brief YFROBOT's sensors Mind+ library.
 * @n This is a MindPlus graphics programming extension for YFROBOT's module.
 * 
 * @copyright    YFROBOT,2022
 * @copyright    MIT Lesser General Public License
 * 
 * @author [email](yfrobot@qq.com)
 * @date  2022-02-22
*/

enum ODMONOFF {
    //% block="LOW"
    LOW,
    //% block="HIGH"
    HIGH
}

enum OMDDIGITAL {
    //% block="LED"
    LED,
    //% block="Active Buzzer"
    BUZZERACTIVE,
    //% block="Fan"
    FAN,
    //% block="Vibration Motor"
    VIBRATIONMOTOR,
    //% block="Relay"
    RELAY
}

enum OMAANALOG {
    //% block="LED"
    LED,
    //% block="Fan"
    FAN,
    //% block="Vibration Motor"
    VIBRATIONMOTOR
}

enum TRAFFICLIGHTSTA {
    //% block="All Off"
    0,
    //% block="LED-RED ON"
    1,
    //% block="LED-YELLOW ON"
    2,
    //% block="LED-GREEN ON"
    3
}

/*************************  Output - OTP Fixed voice list  *************************/
enum OTPFixedVoiceList {
    //% blockId="OTPFVL00" block="老师"
    0x00,
    //% blockId="OTPFVL01" block="爸爸"
    0x01,
    //% blockId="OTPFVL02" block="妈妈"
    0x02,
    //% blockId="OTPFVL03" block="爷爷"
    0x03,
    //% blockId="OTPFVL04" block="奶奶"
    0x04,
    //% blockId="OTPFVL05" block="姥姥"
    0x05,
    //% blockId="OTPFVL06" block="姥爷"
    0x06,
    //% blockId="OTPFVL07" block="哥哥"
    0x07,
    //% blockId="OTPFVL08" block="姐姐"
    0x08,
    //% blockId="OTPFVL09" block="叔叔"
    0x09,
    //% blockId="OTPFVL0A" block="阿姨"
    0x0A,
    //% blockId="OTPFVL0B" block="上午"
    0x0B,
    //% blockId="OTPFVL0C" block="下午"
    0x0C,
    //% blockId="OTPFVL0D" block="晚上"
    0x0D,
    //% blockId="OTPFVL0E" block="前方"
    0x0E,
    //% blockId="OTPFVL0F" block="厘米"
    0x0F,
    //% blockId="OTPFVL10" block="新年快乐"
    0x10,
    //% blockId="OTPFVL11" block="身体健康"
    0x11,
    //% blockId="OTPFVL12" block="工作顺利"
    0x12,
    //% blockId="OTPFVL13" block="学习进步"
    0x13,
    //% blockId="OTPFVL14" block="您好"
    0x14,
    //% blockId="OTPFVL15" block="谢谢"
    0x15,
    //% blockId="OTPFVL16" block="的"
    0x16,
    //% blockId="OTPFVL17" block="祝"
    0x17,
    //% blockId="OTPFVL18" block="慢走"
    0x18,
    //% blockId="OTPFVL19" block="欢迎光临"
    0x19,
    //% blockId="OTPFVL1A" block="亲爱的""
    0x1A,
    //% blockId="OTPFVL1B" block="同学们"
    0x1B,
    //% blockId="OTPFVL1C" block="工作辛苦了"
    0x1C,
    //% blockId="OTPFVL1D" block="点"
    0x1D,
    //% blockId="OTPFVL1E" block="打开"
    0x1E,
    //% blockId="OTPFVL1F" block="关闭"
    0x1F,
    //% blockId="OTPFVL20" block="千"
    0x20,
    //% blockId="OTPFVL21" block="百"
    0x21,
    //% blockId="OTPFVL22" block="十/时"
    0x22,
    //% blockId="OTPFVL23" block="1"
    0x23,
    //% blockId="OTPFVL24" block="2"
    0x24,
    //% blockId="OTPFVL25" block="3"
    0x25,
    //% blockId="OTPFVL26" block="4"
    0x26,
    //% blockId="OTPFVL27" block="5"
    0x27,
    //% blockId="OTPFVL28" block="6"
    0x28,
    //% blockId="OTPFVL29" block="7"
    0x29,
    //% blockId="OTPFVL2A" block="8"
    0x2A,
    //% blockId="OTPFVL2B" block="9"
    0x2B,
    //% blockId="OTPFVL2C" block="0"
    0x2C,
    //% blockId="OTPFVL2D" block="当前"
    0x2D,
    //% blockId="OTPFVL2E" block="转"
    0x2E,
    //% blockId="OTPFVL2F" block="左"
    0x2F,
    //% blockId="OTPFVL30" block="右"
    0x30,
    //% blockId="OTPFVL31" block="请"
    0x31,
    //% blockId="OTPFVL32" block="已"
    0x32,
    //% blockId="OTPFVL33" block="现在"
    0x33,
    //% blockId="OTPFVL34" block="是"
    0x34,
    //% blockId="OTPFVL35" block="红灯"
    0x35,
    //% blockId="OTPFVL36" block="绿灯"
    0x36,
    //% blockId="OTPFVL37" block="黄灯"
    0x37,
    //% blockId="OTPFVL38" block="温度"
    0x38,
    //% blockId="OTPFVL39" block="湿度"
    0x39,
    //% blockId="OTPFVL3A" block="欢迎常来"
    0x3A,
    //% blockId="OTPFVL3B" block="还有"
    0x3B,
    //% blockId="OTPFVL3C" block="秒"
    0x3C,
    //% blockId="OTPFVL3D" block="分"
    0x3D,
    //% blockId="OTPFVL3E" block="变"
    0x3E,
    //% blockId="OTPFVL3F" block="等"
    0x3F,
    //% blockId="OTPFVL40" block="下一次"
    0x40,
    //% blockId="OTPFVL41" block="功能"
    0x41,
    //% blockId="OTPFVL42" block="障碍物"
    0x42,
    //% blockId="OTPFVL43" block="世界那么大，我想去看看"
    0x43,
}

enum OTPFixedVoiceList2 {
    //% blockId="OTPFVL44" block="今天"
    0x44,
    //% blockId="OTPFVL45" block="年"
    0x45,
    //% blockId="OTPFVL46" block="月"
    0x46,
    //% blockId="OTPFVL47" block="日"
    0x47,
    //% blockId="OTPFVL48" block="星期"
    0x48,
    //% blockId="OTPFVL49" block="农历"
    0x49,
    //% blockId="OTPFVL4A" block="现在时刻"
    0x4A,
    //% blockId="OTPFVL4B" block="北京时间"
    0x4B,
    //% blockId="OTPFVL4C" block="整"
    0x4C,
    //% blockId="OTPFVL4D" block="度"
    0x4D,
    //% blockId="OTPFVL4E" block="百分之"
    0x4E,
    //% blockId="OTPFVL4F" block="距离"
    0x4F,
    //% blockId="OTPFVL50" block="厘米"
    0x50,
    //% blockId="OTPFVL51" block="明天"
    0x51,
    //% blockId="OTPFVL52" block="天气"
    0x52,
    //% blockId="OTPFVL53" block="白天"
    0x53,
    //% blockId="OTPFVL54" block="夜间"
    0x54,
    //% blockId="OTPFVL55" block="晴"
    0x55,
    //% blockId="OTPFVL56" block="多云"
    0x56,
    //% blockId="OTPFVL57" block="阴"
    0x57,
    //% blockId="OTPFVL58" block="雨"
    0x58,
    //% blockId="OTPFVL59" block="雷阵"
    0x59,
    //% blockId="OTPFVL5A" block="小"
    0x5A,
    //% blockId="OTPFVL5B" block="中"
    0x5B,
    //% blockId="OTPFVL5C" block="大"
    0x5C,
    //% blockId="OTPFVL5D" block="夹"
    0x5D,
    //% blockId="OTPFVL5E" block="雪""
    0x5E,
    //% blockId="OTPFVL5F" block="雾"
    0x5F,
    //% blockId="OTPFVL60" block="霾"
    0x60,
    //% blockId="OTPFVL61" block="风"
    0x61,
    //% blockId="OTPFVL62" block="东"
    0x62,
    //% blockId="OTPFVL63" block="南"
    0x63,
    //% blockId="OTPFVL64" block="西"
    0x64,
    //% blockId="OTPFVL65" block="北"
    0x65,
    //% blockId="OTPFVL66" block="到"
    0x66,
    //% blockId="OTPFVL67" block="级"
    0x67,
    //% blockId="OTPFVL68" block="偏"
    0x68,
    //% blockId="OTPFVL69" block="方向"
    0x69,
    //% blockId="OTPFVL6A" block="空气质量"
    0x6A,
    //% blockId="OTPFVL6B" block="优"
    0x6B,
    //% blockId="OTPFVL6C" block="良"
    0x6C,
    //% blockId="OTPFVL6D" block="轻度污染"
    0x6D,
    //% blockId="OTPFVL6E" block="中度污染"
    0x6E,
    //% blockId="OTPFVL6F" block="重度污染"
    0x6F,
    //% blockId="OTPFVL70" block="上"
    0x70,
    //% blockId="OTPFVL71" block="下"
    0x71,
    //% blockId="OTPFVL72" block="接近"
    0x72,
    //% blockId="OTPFVL73" block="远离"
    0x73,
    //% blockId="OTPFVL74" block="灯"
    0x74,
    //% blockId="OTPFVL75" block="风扇"
    0x75,
    //% blockId="OTPFVL76" block="红色"
    0x76,
    //% blockId="OTPFVL77" block="绿色"
    0x77,
    //% blockId="OTPFVL78" block="蓝色"
    0x78,
    //% blockId="OTPFVL79" block="黄色"
    0x79,
    //% blockId="OTPFVL7A" block="白色"
    0x7A,
    //% blockId="OTPFVL7B" block="叮音效"
    0x7B,
    //% blockId="OTPFVL7C" block="滴滴滴"
    0x7C,
    //% blockId="OTPFVL7D" block="叮叮音效"
    0x7D,
    //% blockId="OTPFVL7E" block="叮叮音效"
    0x7E,
    //% blockId="OTPFVLF1" block="连码-头"
    0xF1,
    //% blockId="OTPFVLF3" block="连码-尾"
    0xF3,
    //% blockId="OTPFVLF4" block="连码-静音（后接时间单位10ms）"
    0xF4
}

enum OTPFixedVoiceFun {
    //% blockId="OTPFVF_VolumeLevel0" block="设置音量0"
    0xE0,
    //% blockId="OTPFVF_VolumeLevel1" block="设置音量1"
    0xE1,
    //% blockId="OTPFVF_VolumeLevel2" block="设置音量2"
    0xE2,
    //% blockId="OTPFVF_VolumeLevel3" block="设置音量3"
    0xE3,
    //% blockId="OTPFVF_VolumeLevel4" block="设置音量4"
    0xE4,
    //% blockId="OTPFVF_VolumeLevel5" block="设置音量5"
    0xE5,
    //% blockId="OTPFVF_VolumeLevel6" block="设置音量6"
    0xE6,
    //% blockId="OTPFVF_VolumeLevel7" block="设置音量7"
    0xE7,
    //% blockId="OTPFVF_LOOP" block="循环播放"
    0xF2,
    //% blockId="OTPFVF_STOP" block="停止播放"
    0xFE,
    //% blockId="OTPFVF_F1" block="连码-头"
    0xF1
}


/*************************  Output - MP3 audio playback module function  *************************/
enum AudioPlaybackFunWithNum {
    //% blockId="APF_SelectPlay" block="Select Play"
    0x0B,
    //% blockId="APF_SetVolume" block="Set Volume"
    0x0C,
    //% blockId="APF_SetEQ" block="Set EQ Mode"
    0x0D,
    //% blockId="APF_SetPlayMode" block="Set Play Mode"
    0x0E,
    //% blockId="APF_SetInsertTrack" block="Set the insert track"
    0x10,
}

enum AudioPlaybackFun {
    //% blockId="APF_Play" block="Play"
    0x11,
    //% blockId="APF_Pause" block="Pause"
    0x12,
    //% blockId="APF_Stop" block="Stop"
    0x13,
    //% blockId="APF_PreviousTrack" block="Previous track"
    0x14,
    //% blockId="APF_NextTrack" block="Next track"
    0x15,
    //% blockId="APF_PreviousContents" block="Previous contents"
    0x16,
    //% blockId="APF_NextContents" block="Next contents"
    0x17,
    //% blockId="APF_RemoveNumber" block="Remove Number"
    0x0A,
    //% blockId="APF_StopInsertTrack" block="Stop Insert Track"
    0x1C,
}

enum MVModule {
    //% blockId="MVM_MP3_AUDIO" block="MP3 Audio"
    MP3_AUDIO,
    //% blockId="MVM_VOICE_BROADCAST" block="Voice Broadcast"
    VOICE_BROADCAST
}

/*************************  Output - Voice Recorder Module *************************/
enum VRMFunction {
    //% blockId="VRM_PLAY_ONCE" block="Play Once"
    0,
    //% blockId="VRM_PLAY_LOOP" block="Play loop(Stop with power off)"
    1,
    //% blockId="VRM_SPEAKER_DISABLE" block="Speaker Disable"
    2,
    //% blockId="VRM_SPEAKER_ENABLE" block="Speaker Enable(Default)"
    3
}

//% color="#15a1e8" iconWidth=50 iconHeight=40
namespace actuator {

    //% block="set [OUTPUTMODULEDIGITAL] on [ODMPIN] output [ODMSTATE]" blockType="command"
    //% OUTPUTMODULEDIGITAL.shadow="dropdown" OUTPUTMODULEDIGITAL.options="OMDDIGITAL" OUTPUTMODULEDIGITAL.defl="OMDDIGITAL.LED"
    //% ODMPIN.shadow="dropdown" ODMPIN.options="PIN_DigitalWrite"
    //% ODMSTATE.shadow="dropdown" ODMSTATE.options="ODMONOFF" ODMSTATE.defl="HIGH"
    export function outputiDigitalModule(parameter: any, block: any) {
        let outputModule = parameter.OUTPUTMODULEDIGITAL.code;
        let outputModulePin = parameter.ODMPIN.code;
        let outputModuleState = parameter.ODMSTATE.code;
        Generator.addCode(`digitalWrite(${outputModulePin},${outputModuleState});`);
    }

    //% block="set [OUTPUTMODULEANALOG] on [OAMPIN] output [OAMSTATE]" blockType="command"
    //% OUTPUTMODULEANALOG.shadow="dropdown" OUTPUTMODULEANALOG.options="OMAANALOG" OUTPUTMODULEANALOG.defl="OMAANALOG.LED"
    //% OAMPIN.shadow="dropdown" OAMPIN.options="PIN_AnalogWrite"
    //% OAMSTATE.shadow="range"   OAMSTATE.params.min=0    OAMSTATE.params.max=255    OAMSTATE.defl=200  
    export function outputAnalogModule(parameter: any, block: any) {
        let outputModule = parameter.OUTPUTMODULEANALOG.code;
        let outputModulePin = parameter.OAMPIN.code;
        let outputModuleState = parameter.OAMSTATE.code;
        if(Generator.board === 'esp32'||Generator.board === 'firebeetleesp32'||Generator.board === 'firebeetleesp32e'){//如果是ESP32系列，生成如下代码
            Generator.addCode(`analogWrite(${outputModulePin},map(${outputModuleState}, 0, 255, 0, 1023));`);
        }else{
            Generator.addCode(`analogWrite(${outputModulePin},${outputModuleState});`);
        }
    }
    // /*
    //  pwm 输出值范围不同，使用 board 参数控制板型显示的程序块
    //  1.7.2 发布版本软件，firebeetleesp32e不正常，firebeetleesp32可以正常显示，等待下一版本测试
    //  board="arduino,arduinounor3,arduinonano,mega2560,leonardo"
    //  board="microbit,esp32,firebeetleesp32,firebeetleesp32e,telloesp32" 
    //  */
    // //% board="microbit,esp32,firebeetleesp32,firebeetleesp32E,telloesp32" 
    // //% block="set [OUTPUTMODULEANALOG] on [OAMPIN] output [OAMSTATE]" blockType="command"
    // //% OUTPUTMODULEANALOG.shadow="dropdown" OUTPUTMODULEANALOG.options="OMAANALOG" OUTPUTMODULEANALOG.defl="OMAANALOG.LED"
    // //% OAMPIN.shadow="dropdown" OAMPIN.options="PIN_AnalogWrite"
    // //% OAMSTATE.shadow="range"   OAMSTATE.params.min=0    OAMSTATE.params.max=1023    OAMSTATE.defl=200  
    // export function outputAnalogModule_32(parameter: any, block: any) {
    //     let outputModule = parameter.OUTPUTMODULEANALOG.code;
    //     let outputModulePin = parameter.OAMPIN.code;
    //     let outputModuleState = parameter.OAMSTATE.code;
    //     Generator.addCode(`analogWrite(${outputModulePin},${outputModuleState});`);
    // }
    
/*
    // block="traffic light module init PIN1 [PIN1] PIN2 [PIN2]" blockType="command"
    // PIN1.shadow="dropdown" PIN1.options="PIN_DigitalWrite"
    // PIN2.shadow="dropdown" PIN2.options="PIN_DigitalWrite" PIN2.defl=PIN_DigitalWrite.menu.4
    // export function trafficLightInit(parameter: any, block: any) {
    //     let pin1 = parameter.PIN1.code;
    //     let pin2 = parameter.PIN2.code;
    //     Generator.addSetup(`pinMode${pin1}`, `pinMode(${pin1},OUTPUT);`);
    //     Generator.addSetup(`pinMode${pin2}`, `pinMode(${pin2},OUTPUT);`);
    // }
*/
    //% block="traffic light module PIN1 [PIN1] PIN2 [PIN2] [STATE]" blockType="command"
    //% PIN1.shadow="dropdown" PIN1.options="PIN_DigitalWrite"
    //% PIN2.shadow="dropdown" PIN2.options="PIN_DigitalWrite"
    //% STATE.shadow="dropdown" STATE.options="TRAFFICLIGHTSTA" PIN1STATE.defl="TRAFFICLIGHTSTA.1"
    export function trafficLight(parameter: any, block: any) {
        let trafficLightPin1 = parameter.PIN1.code;
        let trafficLightPin2 = parameter.PIN2.code;
        let trafficLightState1 = parameter.STATE.code;
        if (trafficLightState1 === `0`){
            Generator.addCode(`digitalWrite(${trafficLightPin1},LOW);`);
            Generator.addCode(`digitalWrite(${trafficLightPin2},LOW);`);
        }else if (trafficLightState1 === `1`){
            Generator.addCode(`digitalWrite(${trafficLightPin1},LOW);`);
            Generator.addCode(`digitalWrite(${trafficLightPin2},HIGH);`);
        }else if (trafficLightState1 === `2`){
            Generator.addCode(`digitalWrite(${trafficLightPin1},HIGH);`);
            Generator.addCode(`digitalWrite(${trafficLightPin2},LOW);`);
        }else if (trafficLightState1 === `3`){
            Generator.addCode(`digitalWrite(${trafficLightPin1},HIGH);`);
            Generator.addCode(`digitalWrite(${trafficLightPin2},HIGH);`);
        }
    }

    //% block="voice Broadcast module [PIN1] [ADDRESS]" blockType="command"
    //% PIN1.shadow="dropdown" PIN1.options="PIN_DigitalWrite"
    //% ADDRESS.shadow="dropdownRound" ADDRESS.options="OTPFixedVoiceList" ADDRESS.defl="OTPFixedVoiceList.0x00"
    export function voiceBroadcast(parameter: any, block: any) {
        let vbPin1 = parameter.PIN1.code;
        let vbAddress = parameter.ADDRESS.code;
        Generator.addInclude(`definevoiceBroadcastFun1`, `PROGMEM void voiceBroadcastSendData(int voicePin, int addr); // 语音播报模块函数-发送数据-无起始位\n`)
        Generator.addInclude(`definevoiceBroadcastFun2`, `PROGMEM void voiceBroadcastSendDataWithStart(int voicePin, int addr);// 语音播报模块函数-发送数据-有起始位\n`)

        Generator.addInclude(`definevoiceBroadcastFunA`, `// 语音播报模块函数-发送数据-无起始位\n`+
            `void voiceBroadcastSendData(int voicePin, int addr) {\n`+
            `  for (int i = 0; i < 8; i++) {\n`+
            `    digitalWrite(voicePin, HIGH);\n`+
            `    if (addr & 1) {\n`+
            `      delayMicroseconds(2400); // >2400us\n`+
            `      digitalWrite(voicePin, LOW);\n`+
            `      delayMicroseconds(800);  // >800us\n`+
            `    } else {\n`+
            `      delayMicroseconds(800);  // >800us\n`+
            `      digitalWrite(voicePin , LOW);\n`+
            `      delayMicroseconds(2400); // >2400us\n`+
            `    }\n`+
            `    addr >>= 1;\n`+
            `  }\n`+
            `  digitalWrite(voicePin, HIGH);\n`+
            `}`
        );
        
        Generator.addInclude(`definevoiceBroadcastFunB`, `// 语音播报模块函数-发送数据-有起始位\n`+
            `void voiceBroadcastSendDataWithStart(int voicePin, int addr) {\n`+
            `  digitalWrite(voicePin , HIGH);\n`+
            `  delay(1);           // >2ms\n`+
            `  digitalWrite(voicePin , LOW);\n`+
            `  delay(3);           // >2ms\n`+
            `  voiceBroadcastSendData(voicePin ,addr);\n`+
            `}`
        );

        Generator.addCode(`voiceBroadcastSendDataWithStart(${vbPin1},${vbAddress});`);
    }

    //% block="[ADDRESS]" blockType="reporter"
    //% ADDRESS.shadow="dropdown" ADDRESS.options="OTPFixedVoiceList" ADDRESS.defl="OTPFixedVoiceList.0x00"
    export function voiceBroadcastList1(parameter: any, block: any) {
        let vbAddress = parameter.ADDRESS.code;
        Generator.addCode(`${vbAddress}`);
    }

    //% block="[ADDRESS]" blockType="reporter"
    //% ADDRESS.shadow="dropdown" ADDRESS.options="OTPFixedVoiceList2" ADDRESS.defl="OTPFixedVoiceList2.0x00"
    export function voiceBroadcastList(parameter: any, block: any) {
        let vbAddress = parameter.ADDRESS.code;
        Generator.addCode(`${vbAddress}`);
    }

    //% block="voice Broadcast module [PIN1] [ADDRESS]" blockType="command"
    //% PIN1.shadow="dropdown" PIN1.options="PIN_DigitalWrite"
    //% ADDRESS.shadow="dropdownRound" ADDRESS.options="OTPFixedVoiceFun" ADDRESS.defl="OTPFixedVoiceFun.0xE0"
    export function voiceBroadcastFun(parameter: any, block: any) {
        let vbPin1 = parameter.PIN1.code;
        let vbAddress = parameter.ADDRESS.code;
        Generator.addInclude(`definevoiceBroadcastFun1`, `PROGMEM void voiceBroadcastSendData(int voicePin, int addr); // 语音播报模块函数-发送数据-无起始位\n`)
        Generator.addInclude(`definevoiceBroadcastFun2`, `PROGMEM void voiceBroadcastSendDataWithStart(int voicePin, int addr);// 语音播报模块函数-发送数据-有起始位\n`)

        Generator.addInclude(`definevoiceBroadcastFunA`, `// 语音播报模块函数-发送数据-无起始位\n`+
            `void voiceBroadcastSendData(int voicePin, int addr) {\n`+
            `  for (int i = 0; i < 8; i++) {\n`+
            `    digitalWrite(voicePin, HIGH);\n`+
            `    if (addr & 1) {\n`+
            `      delayMicroseconds(2400); // >2400us\n`+
            `      digitalWrite(voicePin, LOW);\n`+
            `      delayMicroseconds(800);  // >800us\n`+
            `    } else {\n`+
            `      delayMicroseconds(800);  // >800us\n`+
            `      digitalWrite(voicePin , LOW);\n`+
            `      delayMicroseconds(2400); // >2400us\n`+
            `    }\n`+
            `    addr >>= 1;\n`+
            `  }\n`+
            `  digitalWrite(voicePin, HIGH);\n`+
            `}`
        );
        
        Generator.addInclude(`definevoiceBroadcastFunB`, `// 语音播报模块函数-发送数据-有起始位\n`+
            `void voiceBroadcastSendDataWithStart(int voicePin, int addr) {\n`+
            `  digitalWrite(voicePin , HIGH);\n`+
            `  delay(1);           // >2ms\n`+
            `  digitalWrite(voicePin , LOW);\n`+
            `  delay(3);           // >2ms\n`+
            `  voiceBroadcastSendData(voicePin ,addr);\n`+
            `}`
        );

        Generator.addCode(`voiceBroadcastSendDataWithStart(${vbPin1},${vbAddress});`);
    }
    
    //% block="voice Broadcast module [PIN1] Concatenated playback [ADDRESS]" blockType="command"
    //% PIN1.shadow="dropdown" PIN1.options="PIN_DigitalWrite"
    //% ADDRESS.shadow="dropdownRound" ADDRESS.options="OTPFixedVoiceList2" ADDRESS.defl="OTPFixedVoiceList2.0xF3"
    export function voiceBroadcastFunConcatenated(parameter: any, block: any) {
        let vbPin1 = parameter.PIN1.code;
        let vbAddress = parameter.ADDRESS.code;
        Generator.addInclude(`definevoiceBroadcastFun1`, `PROGMEM void voiceBroadcastSendData(int voicePin, int addr); // 语音播报模块函数-发送数据-无起始位\n`)

        Generator.addInclude(`definevoiceBroadcastFunA`, `// 语音播报模块函数-发送数据-无起始位\n`+
            `void voiceBroadcastSendData(int voicePin, int addr) {\n`+
            `  for (int i = 0; i < 8; i++) {\n`+
            `    digitalWrite(voicePin, HIGH);\n`+
            `    if (addr & 1) {\n`+
            `      delayMicroseconds(2400); // >2400us\n`+
            `      digitalWrite(voicePin, LOW);\n`+
            `      delayMicroseconds(800);  // >800us\n`+
            `    } else {\n`+
            `      delayMicroseconds(800);  // >800us\n`+
            `      digitalWrite(voicePin , LOW);\n`+
            `      delayMicroseconds(2400); // >2400us\n`+
            `    }\n`+
            `    addr >>= 1;\n`+
            `  }\n`+
            `  digitalWrite(voicePin, HIGH);\n`+
            `}`
        );

        Generator.addCode(`voiceBroadcastSendData(${vbPin1},${vbAddress});`);
    }
    
    //% block="audio playback module [PIN1] [FUN] [ADDRESS]" blockType="command"
    //% PIN1.shadow="dropdown" PIN1.options="PIN_DigitalWrite"
    //% FUN.shadow="dropdown" FUN.options="AudioPlaybackFunWithNum" FUN.defl="AudioPlaybackFunWithNum.0x0B"
    //% ADDRESS.shadow="number"
    export function audioPlaybackModuleFunSet(parameter: any, block: any) {
        let apPin1 = parameter.PIN1.code;
        let apFun = parameter.FUN.code;
        let apAddress = parameter.ADDRESS.code;
        Generator.addInclude(`defineaudioPlaybackFun1`, `PROGMEM void audioPlaybackSendData(int mp3Pin, int addr); // MP3音频播放模块函数-发送数据\n`)
        Generator.addInclude(`defineaudioPlaybackFun2`, `PROGMEM void audioPlaybackFun(int mp3Pin, int fun, int addr);// MP3音频播放模块函数-功能设置\n`)
        
        Generator.addInclude(`defineaudioPlaybackFunA`, `// MP3音频播放模块函数-发送数据\n`+
            `void audioPlaybackSendData(int mp3Pin, int addr) {\n`+
            `  digitalWrite(mp3Pin , HIGH);\n`+
            `  delay(2);           // >2ms\n`+
            `  digitalWrite(mp3Pin , LOW);\n`+
            `  delay(3);           // >2ms\n`+
            `  for (int i = 0; i < 8; i++) {\n`+
            `    digitalWrite(mp3Pin, HIGH);\n`+
            `    if (addr & 1) {\n`+
            `      delayMicroseconds(2400); // >2400us\n`+
            `      digitalWrite(mp3Pin, LOW);\n`+
            `      delayMicroseconds(800);  // >800us\n`+
            `    } else {\n`+
            `      delayMicroseconds(800);  // >800us\n`+
            `      digitalWrite(mp3Pin , LOW);\n`+
            `      delayMicroseconds(2400); // >2400us\n`+
            `    }\n`+
            `    addr >>= 1;\n`+
            `  }\n`+
            `  digitalWrite(mp3Pin, HIGH);\n`+
            `}`
        );

        Generator.addInclude(`defineaudioPlaybackFunB`, `// MP3音频播放模块函数-功能设置\n`+
            `void audioPlaybackFun(int mp3Pin, int fun, int addr) {\n`+
            `  int addrnumArray[5] = {0};\n`+
            `  int addrnumArraySize = 0;\n`+
            `  while (addr > 0) { // 数字转换数据\n`+
            `    addrnumArray[addrnumArraySize] = (addr % 10);\n`+
            `    addr = int(addr / 10);\n`+
            `    addrnumArraySize++;\n`+
            `  }\n`+
            `  for (int k = addrnumArraySize - 1; k >= 0; k--) { // 倒序发送数字指令\n`+
            `    audioPlaybackSendData(mp3Pin, addrnumArray[k]);\n`+
            `  }\n`+
            `  audioPlaybackSendData(mp3Pin, fun); // 发送功能指令\n`+
            `}`
        );

        Generator.addCode(`audioPlaybackFun(${apPin1},${apFun},${apAddress});`);
    }

    //% block="audio playback module [PIN1] [ADDRESS]" blockType="command"
    //% PIN1.shadow="dropdown" PIN1.options="PIN_DigitalWrite"
    //% ADDRESS.shadow="dropdownRound" ADDRESS.options="AudioPlaybackFun" ADDRESS.defl="AudioPlaybackFun.0x11"
    export function audioPlaybackModuleFun(parameter: any, block: any) {
        let apPin1 = parameter.PIN1.code;
        let apAddress = parameter.ADDRESS.code;
        Generator.addInclude(`defineaudioPlaybackFun1`, `PROGMEM void audioPlaybackSendData(int mp3Pin, int addr); // MP3音频播放模块函数-发送数据\n`)
        
        Generator.addInclude(`defineaudioPlaybackFunA`, `// MP3音频播放模块函数-发送数据\n`+
            `void audioPlaybackSendData(int mp3Pin, int addr) {\n`+
            `  digitalWrite(mp3Pin , HIGH);\n`+
            `  delay(2);           // >2ms\n`+
            `  digitalWrite(mp3Pin , LOW);\n`+
            `  delay(3);           // >2ms\n`+
            `  for (int i = 0; i < 8; i++) {\n`+
            `    digitalWrite(mp3Pin, HIGH);\n`+
            `    if (addr & 1) {\n`+
            `      delayMicroseconds(2400); // >2400us\n`+
            `      digitalWrite(mp3Pin, LOW);\n`+
            `      delayMicroseconds(800);  // >800us\n`+
            `    } else {\n`+
            `      delayMicroseconds(800);  // >800us\n`+
            `      digitalWrite(mp3Pin , LOW);\n`+
            `      delayMicroseconds(2400); // >2400us\n`+
            `    }\n`+
            `    addr >>= 1;\n`+
            `  }\n`+
            `  digitalWrite(mp3Pin, HIGH);\n`+
            `}`
        );

        Generator.addCode(`audioPlaybackSendData(${apPin1},${apAddress});`);
    }
    
    //% block="voice recorder module [PIN1] [ADDRESS]" blockType="command"
    //% PIN1.shadow="dropdown" PIN1.options="PIN_DigitalWrite"
    //% ADDRESS.shadow="dropdown" ADDRESS.options="VRMFunction" ADDRESS.defl="VRMFunction.0"
    export function voiceRecorderModuleeFun(parameter: any, block: any) {
        let apPin1 = parameter.PIN1.code;
        let apAddress = parameter.ADDRESS.code;        
        Generator.addInclude(`definevoiceRecorderFunA`, `// 录放模块函数\n`+
            `void voiceRecorderSendData(int vrPin, int addr) {\n`+
            `  if(addr == 0){\n`+
            `    digitalWrite(vrPin, LOW);\n`+
            `    delayMicroseconds(2);\n`+
            `    digitalWrite(vrPin, HIGH);\n`+
            `    delay(50);\n`+
            `    digitalWrite(vrPin, LOW);\n`+
            `  }else if(addr == 1){\n`+
            `    digitalWrite(vrPin, LOW);\n`+
            `    delayMicroseconds(2);\n`+
            `    digitalWrite(vrPin, HIGH);\n`+
            `    delay(2050);\n`+
            `    digitalWrite(vrPin, LOW);\n`+
            `  }else if(addr == 2){\n`+
            `    digitalWrite(vrPin, HIGH);\n`+
            `  }else if(addr == 3){\n`+
            `    digitalWrite(vrPin, LOW);\n`+
            `  }\n`+
            `}`
        );

        Generator.addCode(`voiceRecorderSendData(${apPin1},${apAddress});`);
    }
}
