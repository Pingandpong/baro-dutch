import { appsInToss } from '@apps-in-toss/framework/plugins';
import { defineConfig } from '@granite-js/react-native/config';

export default defineConfig({
  scheme: 'intoss',
  appName: 'baro-dutch',
  plugins: [
    appsInToss({
      brand: {
        displayName: 'baro-dutch', // 화면에 노출될 앱의 한글 이름으로 바꿔주세요.
        primaryColor: '#3182F6', // 화면에 노출될 앱의 기본 색상으로 바꿔주세요.
        icon: '../document/logo/600x600.png', // 화면에 노출될 앱의 아이콘 이미지 주소로 바꿔주세요.                   
          bridgeColorMode: 'basic',
      },
      permissions: [],
    }),
  ],
});
