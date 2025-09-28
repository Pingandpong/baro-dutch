# Apps in Toss Examples Overview

This repository contains examples and documentation for developing mini-apps within the Toss ecosystem.

## What is Apps in Toss?
*   A mini-app ecosystem within the Toss app, allowing partners to integrate their services as "App in App" experiences.
*   Leverages Toss's 30 million users for new user acquisition and revenue generation.

## Development & Integration

### SDKs
*   Provides two SDKs: React Native and WebView.
*   Partners upload built results after integrating the SDK, which then undergo an internal review process.

### Security
*   **mTLS (mutual TLS) Certificates:** Mandatory for secure, two-way authenticated communication between partner servers and Toss servers.
*   **Network Configuration:** Specific IP addresses and domains must be whitelisted in firewalls for both inbound and outbound API communication.
    *   **Inbound IP List (Apps in Toss -> Merchant):**
        *   117.52.3.11:443
        *   211.115.96.11:443
        *   106.249.5.11:443
        *   117.52.3.80~87:443
    *   **Outbound IP List (Merchant -> Apps in Toss):**
        *   **Simple Login, Message Sending, Toss Point Payment:**
            *   Domain: apps-in-toss-api-toss.im
            *   IP: 117.52.3.192, 211.115.96.192, 106.249.5.192 (Port: 443)
        *   **Simple Payment:**
            *   Domain: pay-apps-in-toss-api-toss.im
            *   IP: 117.52.3.195, 211.115.96.195, 106.249.5.195 (Port: 443)

### API Common Specification
*   **Domain Information:**
    *   https://apps-in-toss-api.toss.im
    *   https://pay-apps-in-toss-api.toss.im
*   **Common Response:**
    *   **Success:**
        ```json
        {
          "resultType":"SUCCESS",
          "success": {
            "sample":"data"
          }
        }
        ```
    *   **Failure:**
        ```json
        {
          "resultType":"FAIL",
          "error":{
            "errorCode":"INVALID_PARAMETER",
            "reason":"요청에 실패했습니다."
          }
        }
        ```

## Monetization & Deployment

### Monetization Options
*   Supports in-app payments (Toss Pay, IAP) and advertising.
*   Specific pre-launch contractual and review procedures are required for these features.

### Deployment
*   Built mini-apps are uploaded to a console and hosted on Toss's CDN.

### Review Process
*   Multi-stage review focusing on functionality, design, security, and personal data protection.
*   Typically takes 2-3 business days per stage.

### Timeline
*   Development and QA estimated at 2-4 weeks.
*   MVP-first approach is possible.

## User Experience
*   Mini-apps are discoverable within the Toss app through various tabs (e.g., Games, Mini-app Home) and keyword searches.
*   **Restrictions:** `iframe` usage is generally prohibited, with an exception for embedding YouTube video content.

## Examples
*   The `apps-in-toss-examples-main` directory contains various example mini-apps demonstrating integration with Toss features and different frontend technologies.