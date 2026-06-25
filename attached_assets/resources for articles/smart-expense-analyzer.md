---
title: Smart Expense Analyzer
type: project
status: completed
tags:
  - ai
  - ml
  - internship
  - nodejs
  - streamlit
  - agentic
  - phase-2
last_updated: 2026-04-30
aliasesaliases:
cssclasses:
---

# Smart Expense Analyzer

## Summary

An intelligent agentic AI platform for smart expense analysis and prediction. Built as the primary Phase 1 project during the CHIAC ASI internship. Combines a Node.js RESTful backend, MongoDB database, and a Streamlit ML frontend. The ML engine uses a custom Perceptron-style Linear Regression model built from scratch — no scikit-learn.

**GitHub:** [github.com/lingadevaru-hp/smart-expense-analyzer](https://github.com/lingadevaru-hp/smart-expense-analyzer) — HTML, 1 star · Updated Apr 24, 2026

## Context

- Built during CHIAC ASI Internship, **Phase 2**
- Submitted as part of MCA 4th Semester academic internship
- Team 8, Research & Publication group
- Industry Supervisor: Rakhee Dubey (Panchasutra Ltd, UK)
- Faculty Guide: Mr Y Venkata Reddy (Asst Professor, MCA Dept, SIT)
- Presentation given and accepted. Internship is fully complete.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| **Backend** | Node.js (RESTful APIs) |
| **Database** | MongoDB + SQLite |
| **ML Frontend** | Streamlit (Python) |
| **ML Engine** | Custom Perceptron-style Linear Regressor (built from scratch) |
| **Version Control** | Git |

## ML Model

- **Model:** Custom Perceptron-style Linear Regressor — no scikit-learn used
- **Training:** Iterative gradient descent, minimizing Mean Squared Error (MSE)
- **Regularization:** Optional L2 regularization to prevent overfitting
- **Early Stopping:** Configurable loss tolerance
- **Preprocessing:** Feature standardization (z-score)
- **Evaluation Metrics:** MAE, RMSE, R²

## Key Features

- Expense categorization and pattern detection
- Agentic AI pipeline for intelligent analysis
- Interactive Streamlit dashboard
- RESTful API for CRUD operations
- MongoDB for primary data; version history tracking
- Document management and version tracking

## Raw Sources (in `wiki/raw/`)

- `Smart Expense Analyzer full report (1).docx` — Full project report (Phase 2)
- `Phase 2 final report .pdf` — Final internship submission PDF
- `Phase_II_Report.docx` — Final internship submission DOCX
- `70% over (1).docx` — Earlier draft of the report

## Related Pages

- [[projects/chiac-asi-internship]] — Internship context and Phase 1 overview
- [[projects/metro-arrival-ml]] — The other Phase 1 project (ML-based metro predictions)
- [[work-college-internship]] — College and internship overview
- [[profile/projects]] — All projects overview
