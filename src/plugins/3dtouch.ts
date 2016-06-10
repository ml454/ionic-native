import {Plugin, Cordova} from './plugin';
import {Observable} from 'rxjs/Observable';
/**
 * @name 3DTouch
 * @description
 * @usage
 * ```
 * import {ThreeDeeTouch, ThreeDeeTouchQuickAction, ThreeDeeTouchForceTouch} from 'ionic-native';
 *
 * ...
 *
 * ThreeDeeTouch.isAvailable().then(isAvailable => console.log("3D Touch available? " + isAvailable)):
 *
 * ThreeDeeTouch.watchForceTouches()
 *   .subscribe(
 *     (data: ThreeDeeTouchForceTouch) => {
 *       console.log("Force touch %" + data.force);
 *       console.log("Force touch timestamp: " + data.timestamp);
 *       console.log("Force touch x: " + data.x);
 *       console.log("Force touch y: " + data.y);
 *     }
 *   );
 *
 *
 * let actions: Array<ThreeDeeTouchQuickAction> = [
 *   {
 *     type: 'checkin',
 *     title: 'Check in',
 *     subtitle: 'Quickly check in',
 *     iconType: 'Compose'
 *   },
 *   {
 *     type: 'share',
 *     title: 'Share',
 *     subtitle: 'Share like you care',
 *     iconType: 'Share'
 *   },
 *   {
 *     type: 'search',
 *     title: 'Search',
 *     iconType: 'Search'
 *   },
 *   {
 *     title: 'Show favorites',
 *     iconTemplate: 'HeartTemplate'
 *   }
 * ];
 * ThreeDeeTouch.configureQuickActions(actions);
 * ```
 */
@Plugin({
    plugin: 'cordova-plugin-3dtouch',
    pluginRef: 'ThreeDeeTouch',
    repo: 'https://github.com/EddyVerbruggen/cordova-plugin-3dtouch',
    platforms: ['iOS']
})
export class ThreeDeeTouch {

    /**
     * You need an iPhone 6S or some future tech to use the features of this plugin, so you can check at runtime if the user's device is supported.
     */
    @Cordova()
    static isAvailable(): Promise<boolean> {return; }

    /**
     * You can get a notification when the user force touches the webview. The plugin defines a Force Touch when at least 75% of the maximum force is applied to the screen. Your app will receive the x and y coordinates, so you have to figure out which UI element was touched.
     */
    @Cordova({
        observable: true
    })
    static watchForceTouches(): Observable<ThreeDeeTouchForceTouch> {return; }

    @Cordova({
        sync: true
    })
    static configureQuickActions(quickActions: Array<ThreeDeeTouchQuickAction>): void {}

    @Cordova({
        observable: true
    })
    static onHomeIconPressed(): Observable<any> {return; }

    @Cordova({
        sync: true
    })
    static enableLinkPreview(): void {}

    @Cordova({
        sync: true
    })
    static disableLinkPreview(): void {}
}
export interface ThreeDeeTouchQuickAction {
    type?: string;
    title: string;
    subtitle?: string;
    iconType?: string;
}
export interface ThreeDeeTouchForceTouch {
    force: number;
    timestamp: number;
    x: number;
    y: number;
}