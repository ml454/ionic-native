import { Injectable } from '@angular/core';
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';

export interface ShareMessage {
  message: {
    title: string,
    description?: string,
    mediaTagName?: string,
    thumb: string,
    media: {
      type: ShareMessageMediaType,
      webpageUrl: string
    }
  };
  scene: ShareSceneType;
};

export const enum ShareSceneType {
  /**
   * 聊天界面
   */
  SESSION = 0,
  /**
   * 朋友圈
   */
  TIMELINE = 1,
  /**
   * 收藏
   */
  FAVORITE = 2
};

export const enum ShareMessageMediaType {
  APP = 1,
  EMOTION = 2,
  FILE = 3,
  IMAGE = 4,
  MUSIC = 5,
  VIDEO = 6,
  WEBPAGE = 7
};

export interface PaymentParams {

};

/**
 * @name Wechat
 * @description
 * A cordova plugin, a JS version of Wechat SDK
 *
 * @usage
 * ```
 * import { Wechat } from '@ionic-native/wechat';
 *
 *
 * constructor(private wechat: Wechat) { }
 *
 * ...
 *
 *
 * this.wechat.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
@Plugin({
  pluginName: 'Wechat',
  plugin: 'cordova-plugin-wechat',
  pluginRef: 'plugins.Wechat',
  repo: 'https://github.com/xu-li/cordova-plugin-wechat', // the github repository URL for the plugin
  platforms: ['Android', 'iOS'], // Array of platforms supported, example: ['Android', 'iOS']
  install: 'cordova plugin add cordova-plugin-wechat --variable wechatappid=YOUR_WECHAT_APPID', // OPTIONAL install command, in case the plugin requires variables
})
@Injectable()
export class Wechat extends IonicNativePlugin {

  /**
     * Check if wechat is installed
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
  @Cordova()
  isInstalled(): Promise<any> {
    return;
  }

  /**
     * Authenticate using Wechat
     * @param scope {string} Some param to configure something
     * @param state {number} Another param to configure something
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
  @Cordova()
  auth(scope: any, state: any): Promise<any> {
    return;
  }

  /**
     * Share text, media(e.g. link, photo, music, video etc), and link to wechat moment(朋友圈)
     * @param message {ShareMessage} Some param to configure something
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
  @Cordova()
  share(message: ShareMessage): Promise<any> {
    return;
  }


  /**
       * Send payment request
       * @param params {PaymentParams} Some param to configure something
       * @return {Promise<any>} Returns a promise that resolves when something happens
       */
  @Cordova()
  sendPaymentRequest(params: PaymentParams): Promise<any> {
    return;
  }

}
