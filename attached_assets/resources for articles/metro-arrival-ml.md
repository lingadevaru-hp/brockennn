---
title: Metro Arrival Time Prediction System
type: project
status: completed
tags: [ml, python, internship, streamlit, phase-1]
last_updated: 2026-04-30
---

# Metro Arrival Time Prediction System

## Status
**Completed — CHIAC ASI Internship, Phase 1 Project.**
- Intern: Lingadevaru H P (1SI24MC025), MCA 4th Semester, SIT Tumakuru
- Faculty Guide: Mr Y Venkata Reddy (Asst Professor, MCA Dept, SIT)
- Industry Supervisor: Rakhee Dubey (Technical Head, CHIAC ASI)
- Presentation given and accepted. Internship is fully complete.

## What It Does
Predicts metro arrival and departure times for each station using a custom ML model.
Processes route data → outputs station-by-station schedule with timing predictions.

## Tech Stack
- **Language:** Python 3.9+
- **Frontend/UI:** Streamlit (interactive dashboard — no HTML/CSS/JS needed)
- **Database:** SQLite + MongoDB (Mongoose ODM)
- **Backend:** Node.js (RESTful APIs)
- **Version Control:** Git

## GitHub
- [github.com/lingadevaru-hp/metro-arrival-time-prediction](https://github.com/lingadevaru-hp/metro-arrival-time-prediction) — Python, 1 star, Mar 2026

## ML Model (Built From Scratch)
- **Model:** Custom Perceptron-style Linear Regressor (no scikit-learn).
- **Training:** Iterative gradient descent, minimising Mean Squared Error (MSE).
- **Features (4 inputs):**
  1. Distance from previous station (km)
  2. Average segment speed (kmph)
  3. Dwell time at previous station (minutes)
  4. Derived runtime estimate (distance ÷ speed)
- **Preprocessing:** Feature standardisation (z-score) before gradient descent.
- **Regularisation:** Optional L2 regularisation to prevent overfitting.
- **Early Stopping:** Configurable loss tolerance to avoid unnecessary computation.

## Evaluation Metrics
- **MAE** (Mean Absolute Error) — average prediction deviation.
- **RMSE** (Root Mean Squared Error) — penalises large errors.
- **R²** (Coefficient of determination) — variance explained by model.

## System Architecture
- Modular design: data ingestion → feature engineering → model training → prediction → UI output.
- Streamlit UI allows tuning of learning rate and epochs via sliders — reactive, auto-reruns on change.
- RESTful APIs for data CRUD operations.
- MongoDB collections for primary data + version history.

## Raw Sources (in `wiki/raw/`)
- `devaru (1).pptx` — Metro Arrival Time Prediction project slides (Phase 1 presentation)
- `Phase 2 final report .pdf` — Final internship submission PDF
- `70% over (1).docx` — Earlier draft of the internship report

## Related Pages
- [[projects/chiac-asi-internship]] — Internship context
- [[work-college-internship]] — College and internship overview
- [[profile/projects]] — All projects overview
