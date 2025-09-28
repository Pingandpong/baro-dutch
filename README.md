# 바로더치

GEMINI.md 베이스 · RN + Firebase + Gluestack UI

## 앱 개요 및 핵심 기능

*   **핵심 JTBD:** “영수증을 **찍기만** 하면 항목·가격을 자동 추출하고, 사람별 금액을 **몇 초 만에** 나눠 공유하고 싶다.”
*   **최소 기능:**
    1.  **영수증 사진 OCR** → 항목·가격 자동 인식(통화/세금/봉사료 감지).
    2.  **사람 배정 UI**(터치 분배): 균등/비율/개별 모드, 항목을 A/B/C에 드래그.
    3.  **정산 결과 생성**: 사람별 금액·송금 메모 복사, **공유 링크**(영/한 자동).
    4.  수수료/할인/배달비 분배 규칙 토글.
    5.  (옵션) **정산 요청 리마인더**(알림 1회).

## 🚀 시작하기

프로젝트를 로컬 환경에서 실행하려면 다음 단계를 따르세요.

### 1. 의존성 설치

```bash
npm install
```

### 2. 개발 서버 실행

```bash
npm run dev
```

## 기술 스택

*   **코어 프레임워크**: React Native + `react-native-granite` (토스 미니앱 전용 프레임워크)
*   **UI 라이브러리**: **TDS (Toss Design System)** React Native 패키지 (토스 디자인 시스템 적용)
*   **라우팅**: `react-native-granite` 기반의 파일 시스템 라우팅
*   **카메라/갤러리**: `react-native-image-picker` (네이티브 설정 필요)
*   **OCR 및 데이터 추출**: **OpenAI Vision API (GPT-4o)** 또는 **Google Cloud Vision API** (영수증의 텍스트 및 항목/가격 구조화)
*   **상태 관리**: `zustand`
*   **서버/DB**: **Firebase** (Firestore, Functions) - 앱 자체 데이터(정산 내역 등) 저장용
*   **유틸리티**: `dayjs` (날짜 처리)

## 📚 상세 개발 가이드

이 프로젝트의 상세한 개발 가이드라인, 문서 목록, 개발 순서 등은 [DEVELOPMENT_GUIDE.md](DEVELOPMENT_GUIDE.md) 파일에서 확인하실 수 있습니다.
