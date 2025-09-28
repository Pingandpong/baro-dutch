# 개발 가이드

이 문서는 **바로더치** 앱의 상세 개발 가이드라인, 문서 목록, 개발 순서 등을 포함하고 있습니다.

## 데이터 분석 및 로깅

*   **이벤트 로깅**: 사용자 행동 및 앱 성능 분석을 위한 이벤트 로깅 시스템 구축 (참고: `document/analyze/Leave a log through an event.pdf`).

## 디자인 가이드라인

*   **UI/UX 원칙**: 토스 미니앱의 일관된 사용자 경험을 위한 UI/UX 가이드라인 준수 (참고: `document/design/UI_UX_guidelines/`).
*   **디자인 시스템**: 토스 디자인 시스템(TDS)을 활용한 컴포넌트 개발 및 적용 (참고: `document/design/Design system application/`).
*   **디자인 준비**: 앱 디자인을 위한 준비 과정 및 리소스 관리 (참고: `document/design/design preparation/`).
*   **UI 표현**: 효율적인 UI 요소 표현 및 관리 (참고: `document/Develop/UI expression.pdf`).

## 개발 가이드라인

*   **앱 권한**: 앱에서 필요한 권한 관리 및 요청 처리 (참고: `document/Develop/App permission functions.pdf`).
*   **화면 이동**: 앱 내 화면 간 이동 및 내비게이션 처리 (참고: `document/Develop/move screen.pdf`).
*   **HTTP 통신**: 서버와의 HTTP 통신 구현 및 관리 (참고: `document/Develop/http communication.pdf`).

## 개발 환경 설정

*   **React Native 시작**: React Native 기반 개발 환경 설정 및 시작 가이드 (참고: `document/development environment/start with react_native.pdf`).
*   **Android/iOS 환경**: Android 및 iOS 개발 환경 설정 및 최적화 (참고: `document/development environment/android preferences.pdf`, `document/development environment/ios preferences.pdf`).
*   **디버깅**: 효율적인 앱 디버깅 방법 및 도구 활용 (참고: `document/development environment/Debugging.pdf`).
*   **개발 서버 연결**: 로컬 및 원격 개발 서버 연결 설정 (참고: `document/development environment/Development server connection.pdf`).
*   **테스트 환경**: 앱 테스트 환경 구축 및 관리 (참고: `document/development environment/test environment.pdf`).
*   **연결된 프로세스**: 개발 중 연결된 프로세스 관리 (참고: `document/development environment/linked process.pdf`).
*   **앱 이름 설정**: `bedrock.config.ts` 파일에 `appName`을 설정하여 앱 스킴 호출 시 앱인토스 연결을 구성합니다.

## 기타 기능 및 고급 활용

*   **화면 캡처 방지**: 앱 내 민감 정보 보호를 위한 화면 캡처 방지 기능 (참고: `document/etc/Block screen capture.pdf`).
*   **앱 환경 확인**: 앱 실행 환경 및 상태 확인 (참고: `document/etc/Check the application environment.pdf`).
*   **앱 진입 완료 이벤트**: 앱 진입 완료 시점 이벤트 감지 및 처리 (참고: `document/etc/Detect app entry completion event.pdf`).
*   **스크롤 뷰 요소 감지**: 스크롤 뷰 내 특정 요소 감지 및 인터랙션 처리 (참고: `document/etc/Detecting elements in scroll view.pdf`).
*   **화면 가시성 확보**: 사용자에게 화면이 항상 보이도록 보장하는 방법 (참고: `document/etc/Ensure the screen is visible to the user.pdf`).
*   **이미지 로딩 실패 처리**: 이미지 로딩 실패 시 예외 처리 및 대체 UI 제공 (참고: `document/etc/Image loading failure.pdf`).
*   **메시지 공유**: 앱 내 콘텐츠를 외부로 공유하는 기능 (참고: `document/etc/share message.pdf`).
*   **레이아웃 활용**: 효율적인 레이아웃 구성 및 관리 (참고: `document/etc/Use layout.pdf`).
*   **쿼리 파라미터 사용**: URL 쿼리 파라미터 활용 방법 (참고: `document/etc/Use query parameters.pdf`).

## 시작하기 전 준비사항

*   **앱 설치 및 외부 링크**: 앱 설치 및 외부 링크 처리 가이드라인 (참고: `document/Get ready/App Installation,External Link Guidelines.pdf`).
*   **미니맵 가이드라인**: 토스 미니맵 연동 및 활용 가이드라인 (참고: `document/Get ready/Minimap Guidelines.pdf`).
*   **콘솔 사용법**: 토스 개발자 콘솔 사용법 (참고: `document/Get ready/console/`).

## 앱 검토 및 출시 가이드라인

*   **미니앱 출시 검토**: 토스 미니앱 출시를 위한 검토 가이드라인 (참고: `document/inspect/Mini-App Launch Review Guidelines.pdf`).
*   **앱 정보 검토**: 앱 정보 등록 및 검토 가이드라인 (참고: `document/inspect/App information review guidelines.pdf`).
*   **인앱 구매 상품 등록**: 인앱 구매 상품 등록 및 검토 가이드라인 (참고: `document/inspect/In-App Purchase Product Registration Guidelines.pdf`).
*   **프로모션 검토**: 프로모션 진행을 위한 검토 가이드라인 (참고: `document/inspect/Promotion Review Guidelines.pdf`).
*   **푸시 알림 검토**: 푸시 알림 기능 검토 가이드라인 (참고: `document/inspect/Push_Notification Review Guidelines.pdf`).
*   **토스 로그인 검토**: 토스 로그인 연동 기능 검토 가이드라인 (참고: `document/inspect/Toss Login Review Guidelines.pdf`).
*   **앱 출시 프로세스**: 개발된 미니앱을 토스 플랫폼에 배포하고 출시하는 과정 (참고: `document/Release/Release.pdf`).

## 마케팅 및 프로모션

*   **프로모션 링크**: 앱 홍보를 위한 프로모션 링크 활용 (참고: `document/marketing/Promotion Link.pdf`).
*   **푸시 알림**: 사용자 참여 유도를 위한 푸시 알림 발송 (참고: `document/marketing/Push, notification.pdf`).
*   **보상 등록**: 사용자 보상 프로그램 등록 및 관리 (참고: `document/marketing/Reward registration.pdf`).

## 수익 모델

*   **무료+광고**: 결과 화면 작은 배너(정산 전면 광고는 지양) (참고: `document/monetization/In-app advertising.pdf`).
*   **구독(월 $2.49)**: 광고 제거, **공유 링크 무기한 유지**, 정산 리마인더, 멤버 프리셋.
*   (확장) 결제/송금 파트너 제휴(국가별 노출)로 커미션 (참고: `document/monetization/Toss Pay linked.pdf`).
*   **인앱 결제**: 인앱 결제 시스템 연동을 통한 수익 창출 (참고: `document/monetization/In-app payments.pdf`).

## Apps in Toss 시작하기

*   **플랫폼 소개 및 시작 가이드**: Apps in Toss 플랫폼에 대한 전반적인 소개 및 미니앱 개발 시작 가이드 (참고: `document/start/1.started with Appintos.pdf`).

## 토스 미니앱 특화 기능 (API 연동)

*   **토스 연동**: `@apps-in-toss/framework` (앱 등록 및 토스 기능 연동)
*   **간편 로그인**: 토스 사용자 정보를 활용한 간편 로그인 및 회원가입 (참고: `document/API Reference/login/`, `document/Develop/Easy login.pdf`, `document/Develop/Toss login integration.pdf`).
*   **파트너 로그인**: 파트너사 로그인 연동 (참고: `document/Develop/Partner Login.pdf`).
*   **토스페이 연동**: 토스페이를 통한 간편 결제 및 정산 기능 (참고: `document/API Reference/Easy payment (Toss Pay)/`).
*   **토스 포인트 결제**: 토스 포인트 결제 기능 연동 (참고: `document/API Reference/Toss point payment/`).
*   **인앱 결제**: 토스 인앱 결제 시스템 연동 (참고: `document/API Reference/in_app_payment/`).
*   **메시지 전송**: 토스 앱 내 메시지 전송 기능 활용 (참고: `document/API Reference/Send message.pdf`).
*   **공유 기능**: 토스 친구에게 정산 내역 및 링크 공유.
*   **푸시 알림**: 정산 요청 및 리마인더 푸시 알림 (토스 앱 내).

## 시장성 (왜 지금?)

*   **한국:** 회식·카페·배달 더치페이 일상화, 카톡 정산/엑셀이 번거롭고 오류 많음.
*   **글로벌:** 스플릿 앱은 존재하지만 영수증→자동 분배 중심의 초경량 제품은 드묾.
*   1인 개발로도 가능한 OCR/번역 API 보급, **Google Ads**로 빠른 유입 테스트 가능.

## 주요 경쟁 앱 및 차별점

정보 없음

---

## 개발 순서

다음은 바로더치 앱 개발을 위한 권장 순서입니다. 각 단계는 이전 단계의 결과물을 기반으로 하며, 효율적인 개발 프로세스를 위해 중요도와 의존성을 고려하여 구성되었습니다.

### 1. Apps in Toss 시작하기 (기반 다지기)

*   **목표**: Toss MiniApp 플랫폼에 대한 이해를 높이고, 개발 환경을 초기 설정합니다.
*   **세부 내용**:
    *   Apps in Toss 플랫폼의 기본 개념, 구조, 제공 기능 등을 숙지합니다.
    *   개발 프로젝트를 생성하고 기본적인 설정 작업을 완료합니다.
*   **참고 문서**: `document/start/1.started with Appintos.pdf`

### 2. 개발 환경 설정 (개발 준비)

*   **목표**: 앱 개발에 필요한 모든 도구와 환경을 구축하고 최적화합니다.
*   **세부 내용**:
    *   React Native 개발 환경을 설정하고, 필요한 라이브러리 및 종속성을 설치합니다.
    *   Android 및 iOS 개발 환경을 플랫폼별로 구성하고 최적화합니다.
    *   효율적인 디버깅을 위한 도구 설정 및 방법을 익힙니다.
    *   개발 서버 연결 및 테스트 환경을 구축합니다.
*   **참고 문서**:
    *   `document/development environment/start with react_native.pdf`
    *   `document/development environment/android preferences.pdf`
    *   `document/development environment/ios preferences.pdf`
    *   `document/development environment/Debugging.pdf`
    *   `document/development environment/Development server connection.pdf`
    *   `document/development environment/test environment.pdf`
    *   `document/development environment/linked process.pdf`

### 3. 기술 스택 및 디자인 가이드라인 적용 (기반 기술 및 UI/UX)

*   **목표**: 핵심 기술 스택을 확정하고, 토스 디자인 시스템을 기반으로 일관된 UI/UX를 설계합니다.
*   **세부 내용**:
    *   React Native, `react-native-bedrock`, TDS, `zustand`, `dayjs`, Firebase 등 핵심 기술 스택을 프로젝트에 적용합니다.
    *   토스 디자인 시스템(TDS)을 이해하고, 앱의 UI 컴포넌트에 적용합니다.
    *   토스 미니앱의 UI/UX 원칙을 준수하여 사용자 친화적인 디자인을 구현합니다.
*   **참고 문서**:
    *   `document/design/Design system application/`
    *   `document/design/UI_UX_guidelines/`
    *   `document/design/design preparation/`
    *   `document/Develop/UI expression.pdf`

### 4. 앱 개요 및 핵심 기능 구현 (MVP 개발)

*   **목표**: 바로더치 의 핵심 기능을 구현하여 최소 기능 제품(MVP)을 완성합니다.
*   **세부 내용**:
    *   **영수증 사진 OCR**: 영수증 이미지에서 항목과 가격을 자동으로 인식하는 기능을 개발합니다. (OpenAI Vision API 또는 Google Cloud Vision API 연동)
    *   **사람 배정 UI**: 인식된 항목을 사용자에게 할당하고 금액을 분배하는 UI를 구현합니다. (균등/비율/개별 모드 지원)
    *   **정산 결과 생성**: 분배된 금액을 기반으로 정산 결과를 생성하고, 송금 메모 복사 및 공유 링크 생성 기능을 개발합니다.
    *   앱 권한 관리 (카메라 접근 등) 및 화면 간 이동 로직을 구현합니다.
    *   서버(Firebase)와의 HTTP 통신을 설정합니다.
*   **참고 문서**:
    *   `document/Develop/App permission functions.pdf`
    *   `document/Develop/move screen.pdf`
    *   `document/Develop/http communication.pdf`

### 5. 토스 미니앱 특화 기능 연동 (플랫폼 통합)

*   **목표**: Toss MiniApp 플랫폼이 제공하는 다양한 기능을 앱에 통합하여 사용자 경험을 향상시킵니다.
*   **세부 내용**:
    *   `@apps-in-toss/framework`를 사용하여 앱을 토스에 등록하고 기본 기능을 연동합니다.
    *   토스 간편 로그인, 파트너 로그인 기능을 구현하여 사용자 인증을 간소화합니다.
    *   토스페이, 토스 포인트 결제, 인앱 결제 시스템을 연동하여 결제 기능을 제공합니다.
    *   토스 앱 내 메시지 전송 및 공유 기능을 활용하여 정산 내역을 공유합니다.
    *   정산 요청 및 리마인더를 위한 푸시 알림 기능을 구현합니다.
*   **참고 문서**:
    *   `document/API Reference/login/`
    *   `document/Develop/Easy login.pdf`
    *   `document/Develop/Toss login integration.pdf`
    *   `document/Develop/Partner Login.pdf`
    *   `document/API Reference/Easy payment (Toss Pay)/`
    *   `document/API Reference/Toss point payment/`
    *   `document/API Reference/in_app_payment/`
    *   `document/API Reference/Send message.pdf`

### 6. 데이터 분석 및 로깅 구현 (성능 모니터링)

*   **목표**: 사용자 행동 및 앱 성능을 추적하고 분석하기 위한 로깅 시스템을 구축합니다.
*   **세부 내용**:
    *   주요 사용자 이벤트(예: OCR 사용, 정산 완료, 공유 등)에 대한 로깅 이벤트를 정의하고 구현합니다.
    *   수집된 데이터를 기반으로 앱의 사용성 및 개선점을 파악합니다.
*   **참고 문서**: `document/analyze/Leave a log through an event.pdf`

### 7. 기타 기능 및 고급 활용 (기능 확장 및 최적화)

*   **목표**: 앱의 안정성과 사용자 편의성을 높이는 추가 기능 및 고급 활용 방안을 적용합니다.
*   **세부 내용**:
    *   화면 캡처 방지, 앱 환경 확인, 앱 진입 완료 이벤트 감지 등 보안 및 안정성 기능을 구현합니다.
    *   스크롤 뷰 요소 감지, 화면 가시성 확보, 이미지 로딩 실패 처리 등 UI/UX 개선 기능을 적용합니다.
    *   메시지 공유, 레이아웃 활용, 쿼리 파라미터 사용 등 기타 유용한 기능을 통합합니다.
*   **참고 문서**: `document/etc/` 디렉토리 내 모든 문서

### 8. 수익 모델 구현 (수익화)

*   **목표**: 앱의 수익 창출 모델을 구현하고 관리합니다.
*   **세부 내용**:
    *   결과 화면에 작은 배너 광고를 통합합니다.
    *   광고 제거, 공유 링크 무기한 유지, 정산 리마인더, 멤버 프리셋 등을 포함하는 구독 모델을 구현합니다.
    *   결제/송금 파트너 제휴를 통한 커미션 모델을 고려합니다.
*   **참고 문서**:
    *   `document/monetization/In-app advertising.pdf`
    *   `document/monetization/Toss Pay linked.pdf`
    *   `document/monetization/In-app payments.pdf`

### 9. 마케팅 및 프로모션 준비 (사용자 확보)

*   **목표**: 앱 출시 후 사용자 유입 및 활성화를 위한 마케팅 전략을 수립하고 준비합니다.
*   **세부 내용**:
    *   프로모션 링크를 활용한 앱 홍보 방안을 계획합니다.
    *   푸시 알림을 통한 사용자 참여 유도 전략을 수립합니다.
    *   사용자 보상 프로그램 등록 및 관리 방안을 마련합니다.
*   **참고 문서**: `document/marketing/` 디렉토리 내 모든 문서

### 10. 앱 검토 및 출시 (최종 점검 및 배포)

*   **목표**: 앱 출시 전 모든 검토 과정을 거쳐 토스 플랫폼에 성공적으로 배포합니다.
*   **세부 내용**:
    *   토스 미니앱 출시를 위한 검토 가이드라인을 준수하여 앱 정보를 등록하고 검토를 진행합니다.
    *   인앱 구매 상품, 프로모션, 푸시 알림, 토스 로그인 연동 기능에 대한 검토를 받습니다.
    *   최종 앱 출시 프로세스를 따릅니다.
*   **참고 문서**:
    *   `document/inspect/` 디렉토리 내 모든 문서
    *   `document/Release/Release.pdf`

### 11. 시장성 및 경쟁 앱 분석 (전략적 검토)

*   **목표**: 앱의 시장 경쟁력을 지속적으로 분석하고 차별화 전략을 모색합니다.
*   **세부 내용**:
    *   한국 및 글로벌 시장에서의 더치페이 앱 동향을 지속적으로 파악합니다.
    *   주요 경쟁 앱의 기능과 전략을 분석하여 바로더치의 차별점을 강화합니다.
    *   OCR/번역 API 및 Google Ads 활용을 통한 빠른 시장 유입 테스트를 고려합니다.
*   **참고 문서**: 없음 (전략적 분석 필요)
