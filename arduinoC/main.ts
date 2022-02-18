enum SIZE {
    //% block="29*29"
    1,
    //% block="58*58"
    2
}

enum LINE {
    //% block="1"
    1,
    //% block="2"
    2,
    //% block="3"
    3,
    //% block="4"
    4
}

enum BTN {
    //% block="A"
    A,
    //% block="B"
    B,
    //% block="A+B"
    AB
}

enum KAIGUAN {
    //% block="开"
    HIGH,
    //% block="关"
    LOW
}

enum ODMONOFF {
    //% block="OFF"
    LOW,
    //% block="ON"
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

enum OTPADDRESS {
    //% block="ADDRESS00"
    0x00,
    //% block="ADDRESS01"
    0x01
}

//% color="#4d9721" iconWidth=50 iconHeight=40
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
        Generator.addCode(`analogWrite(${outputModulePin},${outputModuleState});`);
    }
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
    //% block="traffic light module PIN1 [PIN1] [PIN1STATE] PIN2 [PIN2] [PIN2STATE]" blockType="command"
    //% PIN1.shadow="dropdown" PIN1.options="PIN_DigitalWrite"
    //% PIN2.shadow="dropdown" PIN2.options="PIN_DigitalWrite"
    //% PIN1STATE.shadow="dropdown" PIN1STATE.options="ODMONOFF" PIN1STATE.defl="ODMONOFF.LOW"
    //% PIN2STATE.shadow="dropdown" PIN2STATE.options="ODMONOFF" PIN2STATE.defl="ODMONOFF.LOW"
    export function trafficLight(parameter: any, block: any) {
        let trafficLightPin1 = parameter.PIN1.code;
        let trafficLightPin2 = parameter.PIN2.code;
        let trafficLightState1 = parameter.PIN1STATE.code;
        let trafficLightState2 = parameter.PIN2STATE.code;
        Generator.addCode(`digitalWrite(${trafficLightPin1},${trafficLightState1});`);
        Generator.addCode(`digitalWrite(${trafficLightPin2},${trafficLightState2});`);
    }

    //% block="voice Broadcast module [PIN1] [PIN1STATE]" blockType="command"
    //% PIN1.shadow="dropdown" PIN1.options="PIN_DigitalWrite"
    //% PIN1STATE.shadow="dropdownRound" PIN1STATE.options="OTPADDRESS" PIN1STATE.defl="OTPADDRESS.00"
    export function voiceBroadcast(parameter: any, block: any) {
        let trafficLightPin1 = parameter.PIN1.code;
        let trafficLightState1 = parameter.PIN1STATE.code;
        // Generator.addInclude("definevoiceBroadcastFun1", `PROGMEM void voiceBroadcastSendData(int voicePin, int addr); // 语音播报模块函数-发送数据-无起始位\n`)
        // Generator.addInclude("definevoiceBroadcastFun2", `PROGMEM void voiceBroadcastSendDataWithStart(int voicePin, int addr);// 语音播报模块函数-发送数据-有起始位\n`)

        Generator.addInclude("includeMotorDriver", `#include \"MotorDriver.h\"`);
        Generator.addInclude("defineMotorDriver", `#define MOTORTYPE YF_IIC_TB`);
        Generator.addInclude("defineMotorDriver111", `uint8_t SerialDebug = 1;`);

        Generator.addInclude("includeA", `// 语音播报模块函数-发送数据-2无起始位\n`+
            `1void voiceBroadcastSendDataWithStart(int voicePin, int addr) {\n`+
            `  digitalWrite(voicePin, LOW);\n`+
            `  delay(30);           // >2ms\n`+
            `  voiceBroadcastSendData(voicePin, addr);\n`+
            `}`
        );
        Generator.addInclude("includeB", `// 语音播报模块函数-发送数据-2无起始位\n`+
            `void voiceBroadcastSendDataWithStart(int voicePin, int addr) {\n`+
            `  digitalWrite(voicePin, LOW);\n`+
            `  delay(30);           // >2ms\n`+
            `  voiceBroadcastSendData(voicePin, addr);\n`+
            `}`
        );
        Generator.addInclude("includeC", `// 语音播报模块函数-发送数据-2无起始位\n`+
            `void voiceBroadcastSendDataWithStart(int voicePin, int addr) {\n`+
            `  digitalWrite(voicePin, LOW);\n`+
            `  delay(50);           // >2ms\n`+
            `  voiceBroadcastSendData(voicePin, addr);\n`+
            `}`
        );
        Generator.addCode(`voiceBroadcastSendDataWithStart(${trafficLightPin1},${trafficLightState1});`);
    }
    
    //% block="voice Broadcast module  [PIN1] [PIN1STATE]" blockType="command"
    //% PIN1.shadow="dropdown" PIN1.options="PIN_DigitalWrite"
    //% PIN1STATE.shadow="dropdown" PIN1STATE.options="ODMONOFF" PIN1STATE.defl="ODMONOFF.LOW"
    export function voiceBroadcastCPlay(parameter: any, block: any) {
        let trafficLightPin1 = parameter.PIN1.code;
        let trafficLightState1 = parameter.PIN1STATE.code;

        Generator.addInclude("definevoiceBroadcastFunA", `// 语音播报模块函数-发送数据-无起始位\n`+
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
        
        Generator.addInclude("definevoiceBroadcastFunB", `// 语音播报模块函数-发送数据-有起始位\n`+
            `void voiceBroadcastSendDataWithStart(int voicePin, int addr) {\n`+
            `  digitalWrite(voicePin , LOW);\n`+
            `  delay(3);           // >2ms\n`+
            `  voiceBroadcastSendData(addr);\n`+
            `}`
        );
        
        Generator.addInclude("definevoiceBroadcastFunC", `// 语音播报模块函数-连续播报\n`+
            `void voiceBroadcastCPlay(int voicePin, int serial_number[], int sizes) {\n`+
            `  int checksum = 0;\n`+
            `  voiceBroadcastSendData2(voicePin, 0xf1); // 头码\n`+
            `  checksum += 0xf1;\n`+
            `  for (int index = 0; index < sizes; index++) {\n`+
            `    voiceBroadcastSendData(voicePin, serial_number[index]); // 语音列表码\n`+
            `    checksum += serial_number[index];\n`+
            `  }\n`+
            `  voiceBroadcastSendData2(voicePin, 0xf3); // 尾码\n`+
            `  checksum += 0xF3;\n`+
            `  yfOTPSendDataNoStartCode(otppin, checksum && 0xFF); // 校验和\n`+
            `}`
        );
        Generator.addCode(`voiceBroadcastSendData(${trafficLightPin1},${trafficLightState1});`);
    }

    //% block="57 dot matrix initliallize CLK [CLKPIN] DIO [DIOPIN]" blockType="command"
    //% CLKPIN.shadow="dropdown" CLKPIN.options="PIN_DigitalWrite"
    //% DIOPIN.shadow="dropdown" DIOPIN.options="PIN_DigitalWrite"
    export function init(parameter: any, block: any) {
        let clk = parameter.CLKPIN.code;
        let dio = parameter.DIOPIN.code;
        Generator.addInclude("includeMatrix57", `#include \"Matrix57.h\"`);
        Generator.addObject("matrix57Object", `Matrix57`, `matrix57(${clk},${dio});`);
        Generator.addSetup(`initSetup`, `matrix57.init();`);
    }

    //% block="57 dot matrix clean display" blockType="command"
    export function clean(parameter: any, block: any) {
        Generator.addCode(`matrix57.clearDisplay();`);
    }

    //% block="57 dot matrix set brightness [BRIGHTNESS]" blockType="command"
    //% BRIGHTNESS.shadow="range" BRIGHTNESS.params.min=0 BRIGHTNESS.params.max=7  BRIGHTNESS.defl=2
    export function setBrightness(parameter: any, block: any) {
        let bright = parameter.CLKPIN.code;
        Generator.addCode(`matrix57.set(${bright});`);
    }

    //% extenralFunc
    // export function getBuiltinFunc_() {
    //     return [
    //         {matrix: "01010110101011010101101010110101011"},
    //         {matrix: "01010110101011010101101010110101011"},
    //         {matrix: "01010110101011010101101010110101011"},
    //         {matrix: "01010110101011010101101010110101011"},
    //         {matrix: "01010110101011010101101010110101011"}
    //     ]
    // }

    //% block="57 dot matrix display [DMARRAY]" blockType="command"
    //% DMARRAY.shadow="matrix" DMARRAY.params.row=5 DMARRAY.params.column=7
    // DMARRAY.params.builtinFunc="getBuiltinFunc_"
    export function setMatrix(parameter: any, block: any) {
        let dmarray = parameter.DMARRAY.code;
        Generator.addCode(`matrix57.set(${dmarray});`);
    }

    //% block="when press [BUTTON]" blockType="hat"
    //% BUTTON.shadow="dropdown" BUTTON.options="BTN" BUTTON.defl="BTN.A"
    // export function buttonPress(parameter: any, block: any) {
    //     let button = parameter.BUTTON.code;
    //     button = replace(button);
    //     let name = 'button' + button + 'PressCallback';
    //     if(Generator.board === 'arduino'){
    //         Generator.addEvent(name, void", name", true);
    //         Generator.addSetup(block.id, `onEvent(ID_BUTTON_${button}, PRESS, ${name});`, false);
    //     }else{
    //         Generator.addInclude('MPython', '#include <MPython.h>');
    //         Generator.addEvent(name,    void", name", true);
    //         Generator.addSetupMainTop("mPython.begin"  + "mPython.begin();");
    //         Generator.addSetup(`button${button}.setPressedCallback`, `button${button}.setPressedCallback(${name});`);
    //     }
    // }

    //% block="控制[YINJIAO]引脚的LED灯亮度为[LIANGDU]" blockType="command"
    //% YINJIAO.shadow="dropdown" YINJIAO.options="PIN_AnalogWrite" 
    //% LIANGDU.shadow="range"   LIANGDU.params.min=0    LIANGDU.params.max=255    LIANGDU.defl=255
    export function liangdu(parameter: any, block: any) {
        let YINJIAO = parameter.YINJIAO.code;
        let LIANGDU = parameter.LIANGDU.code;

        Generator.addCode(`analogWrite(${YINJIAO},${LIANGDU});`);
    }


    // //% block="show [STR] on the [LINE] line" blockType="command"
    // //% STR.shadow="string" STR.defl=hello
    // //% LINE.shadow="dropdownRound" LINE.options="LINE" LINE.defl="LINE.1"
    // export function println(parameter: any, block: any) {
    //     let str = parameter.STR.code
    //     let line = parameter.LINE.code
    //     Generator.addInclude('oled12864', '#include <oled12864.h>');
    //     Generator.addObject(`myoled`, `OLED_12864`, `myoled;`);
    //     Generator.addSetup(`myoled.begin`, `myoled.begin();`);
    //     Generator.addCode(`myoled.setCursorLine(${line});\n\tmyoled.printLine(${str});`);
    // }

    // //% block="show [STR] at x [X] y [Y]" blockType="command"
    // //% STR.shadow="string" STR.defl=hello
    // //% X.shadow="range" X.params.min=0 X.params.max=127 X.defl=0
    // //% Y.shadow="range" Y.params.min=0 Y.params.max=63 Y.defl=0
    // export function print(parameter: any, block: any) {
    //     let str = parameter.STR.code
    //     let x = parameter.X.code
    //     let y = parameter.Y.code
    //     Generator.addInclude('oled12864', '#include <oled12864.h>');
    //     Generator.addObject(`myoled`, `OLED_12864`, `myoled;`);
    //     Generator.addSetup(`myoled.begin`, `myoled.begin();`);
    //     Generator.addCode(`myoled.setCursor(${x}, ${y});\n\tmyoled.print(${str});`);
    // }

    // //% block="display QR code [STR] at x [X] y [Y] with size [SIZE]" blockType="command"
    // //% STR.shadow="string" STR.defl=http://mindplus.cc
    // //% X.shadow="range" X.params.min=0 X.params.max=127 X.defl=0
    // //% Y.shadow="range" Y.params.min=0 Y.params.max=63 Y.defl=0
    // //% SIZE.shadow="dropdownRound" SIZE.options="SIZE" SIZE.defl="SIZE.2"
    // export function qrcode(parameter: any, block: any) {
    //     let str = parameter.STR.code
    //     let x = parameter.X.code
    //     let y = parameter.Y.code
    //     let size = parameter.SIZE.code
    //     Generator.addInclude('oled12864', '#include <oled12864.h>');
    //     Generator.addObject(`myoled`, `OLED_12864`, `myoled;`);
    //     Generator.addSetup(`myoled.begin`, `myoled.begin();`);
    //     Generator.addCode(`myoled.qrcode(${x}, ${y}, ${str}, ${size});`);
    // }

    // //% block="set the line width to [WIDTH] pixels" blockType="command"
    // //% WIDTH.shadow="range" WIDTH.params.min=1 WIDTH.params.max=128 WIDTH.defl=1
    // export function setLineWidth(parameter: any, block: any) {
    //     let width = parameter.WIDTH.code
    //     Generator.addInclude('oled12864', '#include <oled12864.h>');
    //     Generator.addObject(`myoled`, `OLED_12864`, `myoled;`);
    //     Generator.addSetup(`myoled.begin`, `myoled.begin();`);
    //     Generator.addCode(`myoled.setLineWidth(${width});`);
    // }

    // //% block="get the line width" blockType="reporter"
    // export function getLineWidth(parameter: any, block: any) {
    //     Generator.addInclude('oled12864', '#include <oled12864.h>');
    //     Generator.addObject(`myoled`, `OLED_12864`, `myoled;`);
    //     Generator.addSetup(`myoled.begin`, `myoled.begin();`);
    //     Generator.addCode(`myoled.getLineWidth()`);
    // }

    //% block="button [BUTTON] is pressed?" blockType="boolean"
    //% Flag.shadow="boolean"
    //% BUTTON.shadow="dropdown" BUTTON.options="BTN" BUTTON.defl="BTN.A"
    // export function buttonIsPressed(parameter: any, block: any) {
    //     let button = parameter.BUTTON.code.replace("+"
    // ");
    //     let code;
    //     if(Generator.board === 'microbit'){
    //         if (button === 'A') {
    //             code = `Button_A.isPressed() && !Button_B.isPressed()`;
    //         } else if (button === 'B') {
    //             code = `Button_B.isPressed() && !Button_A.isPressed()`;
    //         } else {
    //             code = `Button_AB.isPressed()`;
    //         }
    //         Generator.addCode([code, Generator.ORDER_UNARY_POSTFIX]);
    //     }else{
    //         code = `button${button}.isPressed()`;
    //         Generator.addInclude('MPython', '#include <MPython.h>');
    //         Generator.addSetupMainTop("mPython.begin"
    // mPython.begin();");
    //         Generator.addCode([code, Generator.ORDER_UNARY_POSTFIX]);
    //     }
    // }

    //% block="not [Flag]" blockType="boolean"
    //% Flag.shadow="boolean"
    // export function notTrue(parameter: any) {
    //     console.log("notTrue==", parameter);
    //     let code: string = '!' + (parameter.Flag.code || 'false') + '';
    //     Generator.addCode([code, Generator.ORDER_UNARY_POSTFIX]);
    // }

    // function replace(str :string) {
    //     return str.replace("+"
    // ");
    // }

    //% block="AnalogWrite:[PIN_AnalogWrite],AnalogRead:[PIN_AnalogRead],DigitalWrite:[PIN_DigitalWrite],DigitalRead:[PIN_DigitalRead]" blockType="command"
    //% PIN_AnalogWrite.shadow="dropdownRound" PIN_AnalogWrite.options="PIN_AnalogWrite"
    //% PIN_AnalogRead.shadow="dropdownRound" PIN_AnalogRead.options="PIN_AnalogRead"
    //% PIN_DigitalWrite.shadow="dropdownRound" PIN_DigitalWrite.options="PIN_DigitalWrite"
    //% PIN_DigitalRead.shadow="dropdownRound" PIN_DigitalRead.options="PIN_DigitalRead"
    export function blocktest(parameter: any)
    {
        let PIN_AnalogWrite=parameter.PIN_AnalogWrite.code;
        let PIN_AnalogRead=parameter.PIN_AnalogRead.code;
        let PIN_DigitalWrite=parameter.PIN_DigitalWrite.code;
        let PIN_DigitalRead=parameter.PIN_DigitalRead.code;

        Generator.addCode([`(${PIN_AnalogWrite},${PIN_AnalogRead},${PIN_DigitalWrite},${PIN_DigitalRead})`, Generator.ORDER_UNARY_POSTFIX]);
    }


}
