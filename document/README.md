# Document Directory Overview

`document` 디렉토리는 토스 앱 내 미니 앱 개발 및 운영에 필요한 모든 종류의 정보를 포괄적으로 제공하는 자료실입니다. 이 문서는 미니 앱의 기획 단계부터 개발, 배포, 운영, 마케팅 및 수익화에 이르는 전 과정을 체계적으로 지원하도록 구성되어 있습니다.

## 폴더별 상세 설명

*   **`analyze`**: 미니 앱 내에서 발생하는 다양한 사용자 행동 및 시스템 이벤트를 추적하고 분석하기 위한 로깅 방법에 대한 가이드라인을 제공합니다. 이를 통해 앱의 성능을 모니터링하고 사용자 경험을 개선하는 데 필요한 데이터를 수집할 수 있습니다.

*   **`API Reference`**: 토스 미니 앱과 연동되는 다양한 API에 대한 상세한 기술 참조 문서입니다. 메시지 전송, 인앱 결제, 토스페이 연동, 토스 포인트 결제, 사용자 로그인 및 인증(AccessToken 관리 포함) 등 핵심 기능 구현에 필요한 API 명세와 사용법을 다룹니다.

*   **`design`**: 토스 미니 앱의 사용자 인터페이스(UI) 및 사용자 경험(UX) 디자인에 대한 포괄적인 가이드라인을 제공합니다. 디자인 시스템 적용 방법, UI/UX 원칙, 디자인 준비 과정 등을 포함하여 일관성 있고 사용자 친화적인 앱을 만들 수 있도록 돕습니다.

*   **`Develop`**: 미니 앱 개발 과정에서 필요한 일반적인 기능 구현 및 기술적인 주제를 다룹니다. 앱 권한 관리, 간편 로그인 구현, HTTP 통신 방법, 화면 간 이동, 파트너 로그인 및 토스 로그인 연동, UI 요소 표현 방법 등 실제 개발에 필요한 실용적인 정보를 제공합니다.

*   **`development environment`**: 토스 미니 앱 개발을 위한 환경 설정 및 관리에 대한 문서입니다. 안드로이드 및 iOS 플랫폼별 개발 환경 설정, 디버깅 방법, 개발 서버 연결, React Native를 사용한 시작 방법, 테스트 환경 구축 등 개발자가 효율적으로 작업할 수 있도록 돕는 정보를 포함합니다.

*   **`etc`**: 미니 앱 개발 중 발생할 수 있는 다양한 특정 시나리오나 일반적인 문제에 대한 해결책 및 추가 기능을 다룹니다. 화면 캡처 방지, 앱 환경 확인, 앱 진입 완료 이벤트 감지, 스크롤 뷰 내 요소 감지, 화면 가시성 확보, 이미지 로딩 실패 처리, 메시지 공유, 레이아웃 및 쿼리 파라미터 사용법 등 유용한 팁과 가이드를 제공합니다.

*   **`Get ready`**: 미니 앱 개발을 시작하기 전 필요한 준비 사항 및 초기 설정에 대한 가이드입니다. 앱 설치 및 외부 링크 처리 지침, 미니맵 연동 가이드라인, 콘솔 사용법 등 개발자가 프로젝트를 원활하게 시작할 수 있도록 돕는 정보를 포함합니다.

*   **`inspect`**: 토스 미니 앱이 출시되기 전 거쳐야 하는 다양한 검토 과정에 대한 상세 가이드라인입니다. 앱 정보, 인앱 구매 상품 등록, 미니 앱 출시, 프로모션, 푸시 알림, 토스 로그인 연동 등 각 항목별 검토 기준과 절차를 명시하여 성공적인 출시를 지원합니다.

*   **`marketing`**: 미니 앱의 사용자 유입 및 활성화를 위한 마케팅 전략 및 도구에 대한 문서입니다. 프로모션 링크 활용, 푸시 알림 발송, 보상 등록 방법 등 마케팅 활동에 필요한 정보를 제공합니다.

*   **`monetization`**: 미니 앱을 통한 수익 창출 모델에 대한 문서입니다. 인앱 광고, 인앱 결제, 토스페이 연동 등 다양한 수익화 방안과 그 구현 방법에 대한 정보를 제공합니다.

*   **`Release`**: 개발된 미니 앱을 토스 플랫폼에 배포하고 출시하는 과정에 대한 가이드라인입니다. 출시 절차, 필요한 준비물, 유의사항 등을 포함하여 안정적인 앱 배포를 돕습니다.

*   **`start`**: Apps in Toss 플랫폼에 대한 전반적인 소개와 미니 앱 개발을 시작하기 위한 첫 단계에 대한 안내를 제공합니다. 플랫폼의 특징, 개발 환경 설정의 개요, 주요 기능 등을 다룹니다.

## Document Structure

```
C:\Users\jeyoung\projects\app_in_toss\document\
├───analyze\
│   └───Leave a log through an event.pdf
├───API Reference\
│   ├───Send message.pdf
│   ├───in_app_payment\
│   │   └───Check payment status.pdf
│   ├───Easy payment (Toss Pay)\
│   │   ├───Check payment status.pdf
│   │   ├───Create payment.pdf
│   │   ├───Payment execution.pdf
│   │   └───refund.pdf
│   ├───login\
│   │   ├───Disconnect login with userKey.pdf
│   │   ├───Disconnect with AccessToken.pdf
│   │   ├───Get AccessToken.pdf
│   │   ├───Get user information (get).pdf
│   │   └───Reissue Access Token.pdf
│   ├───Toss point payment\
│   │   ├───Check promotional Toss Points payment results.pdf
│   │   ├───Create a promotional reward payment key.pdf
│   │   └───Promotional reward payment.pdf
│   └───start.pdf
├───design\
│   ├───design preparation\
│   ├───Design system application\
│   └───UI_UX_guidelines\
├───Develop\
│   ├───App permission functions.pdf
│   ├───Easy login.pdf
│   ├───http communication.pdf
│   ├───move screen.pdf
│   ├───Partner Login.pdf
│   ├───Toss login integration.pdf
│   └───UI expression.pdf
├───development environment\
│   ├───android preferences.pdf
│   ├───Debugging.pdf
│   ├───Development server connection.pdf
│   ├───ios preferences.pdf
│   ├───linked process.pdf
│   ├───start with react_native.pdf
│   └───test environment.pdf
├───etc\
│   ├───Block screen capture.pdf
│   ├───Check the application environment.pdf
│   ├───Detect app entry completion event.pdf
│   ├───Detecting elements in scroll view.pdf
│   ├───Ensure the screen is visible to the user.pdf
│   ├───Image loading failure.pdf
│   ├───share message.pdf
│   ├───Use layout.pdf
│   └───Use query parameters.pdf
├───Get ready\
│   ├───App Installation,External Link Guidelines.pdf
│   ├───Minimap Guidelines.pdf
│   └───console\
├───inspect\
│   ├───App information review guidelines.pdf
│   ├───In-App Purchase Product Registration Guidelines.pdf
│   ├───Mini-App Launch Review Guidelines.pdf
│   ├───Promotion Review Guidelines.pdf
│   ├───Push_Notification Review Guidelines.pdf
│   └───Toss Login Review Guidelines.pdf
├───marketing\
│   ├───Promotion Link.pdf
│   ├───Push, notification.pdf
│   └───Reward registration.pdf
├───monetization\
│   ├───In-app advertising.pdf
│   ├───In-app payments.pdf
│   └───Toss Pay linked.pdf
├───Release\
│   └───Release.pdf
├───start\
│   └───1.started with Appintos.pdf
└───README.md
```
