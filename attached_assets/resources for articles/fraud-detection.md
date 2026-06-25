---
title: Online Transaction Fraud Detection System
type: project
tags: [ml, security, web, dotnet, fraud, final-year-project]
status: completed
last_updated: 2026-04-30
---

# Online Transaction Fraud Detection System

> **MCA Final Year Project** — Built and submitted as the final year project for MCA (3rd Semester). Code is public on GitHub.

## Summary

Intelligent fraud detection and intrusion prevention system for online banking. Built with C#, ASP.NET Web Forms, and SQL Server. Implements 4 ML algorithms — Logistic Regression, KNN, SVM, CNN — in an ensemble voting system that classifies transactions in real-time. If 3 or more algorithms vote fraud, the transaction is blocked.

**GitHub:** [github.com/lingadevaru-hp/online-fraud-detection-system](https://github.com/lingadevaru-hp/online-fraud-detection-system) (1 star, HTML/ASP.NET, 6 commits)  
**Context:** MCA Final Year Project — completed and publicly released on GitHub.


## Tech Stack

| Layer | Technology |
|-------|-----------|
| Language | C# |
| Framework | ASP.NET Web Forms 4.7.2 |
| Data Access | ADO.NET |
| Database | SQL Server LocalDB |
| Frontend | HTML5, CSS3, Bootstrap 4, jQuery |
| Charts | Google Charts |
| ML Engine | 4 algorithms implemented in C# |

## ML Ensemble Engine

| Algorithm | Notes |
|-----------|-------|
| Logistic Regression | Binary classifier |
| KNN | K=3 nearest neighbours |
| SVM | Support Vector Machine |
| CNN | Convolutional Neural Network |

**Ensemble decision rule:** If 3+ out of 4 algorithms classify a transaction as fraudulent → block the transaction.

## Input Features

| Feature | Detail |
|---------|--------|
| Transaction amount | Normalized by ₹2000 |
| Transaction count | Frequency of recent transactions |
| Location risk | 0 = safe location, 1 = risky location |
| Time risk | 0 = business hours, 1 = odd hours |

## Key Features

### Fraud Detection
- Real-time ensemble ML voting on every transaction
- Transaction blocked when 3+ algorithms vote fraud

### Intrusion Detection
- Failed logins tracked with IP address, GPS geolocation, and timestamp
- Auto account blocking: 5+ failed transactions within 1 hour → account locked
- Email alerts via SMTP on suspicious activity

### Admin Panel
- User management
- Bank CRUD operations
- Intrusion log viewer
- Transaction analytics charts (Google Charts)
- ML prediction dashboard

### User Side
- Create bank account (SBI, HDFC, Karnataka Bank)
- Add wallet funds
- Transfer money with live fraud detection
- Account statements
- Security key required per account for all transactions

### Security
- Parameterized SQL queries (SQL injection prevention)
- Session management with proper logout

## Database Schema

| Table | Purpose |
|-------|---------|
| Users | User accounts and credentials |
| Bank | Bank entity records |
| UserAccounts | Linked bank accounts per user |
| UserWallets | Wallet balances |
| WalletTransactions | Transaction history with fraud classification flags |
| hacker | Intrusion / failed login log |

## Related Pages

- [[profile/projects]] — All projects overview
- [[profile/about]] — Skills and career context
- [[projects/thoshan-flash]] — Other AI/ML work (QLoRA fine-tuning on Gemma-2-9B)
