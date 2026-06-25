---
title: Thoshan Flash (LLM Fine-Tuning)
type: project
status: completed
tags: [ai, ml, llm, huggingface]
last_updated: 2026-04-29
---

# Thoshan Flash

## Summary

A fine-tuned version of **Google's Gemma-2-9B** base model. This is **not** a model built from scratch — it is a fine-tuning of an existing pre-trained model using parameter-efficient methods. Published on Hugging Face with a live Gradio inference interface.

## What It Is

Thoshan Flash is a custom LLM produced by fine-tuning Gemma-2-9B on a specific dataset using QLoRA (Quantized Low-Rank Adaptation). The fine-tuning process adapts the model's behaviour without retraining the full 9-billion-parameter network — only a small set of injected adapter weights are trained.

## Technique

| Component | Detail |
|-----------|--------|
| **Base Model** | Gemma-2-9B (Google) |
| **Fine-tuning Method** | QLoRA — Quantized Low-Rank Adaptation |
| **PEFT Framework** | PEFT (Parameter-Efficient Fine-Tuning) |
| **Quantization** | 4-bit → reduced VRAM from ~36 GB to ~12 GB |
| **Training Library** | Unsloth |
| **Deep Learning** | PyTorch |
| **Ecosystem** | Hugging Face Transformers |

### Why QLoRA?

Full fine-tuning of a 9B-parameter model requires ~36 GB of GPU memory — well beyond consumer hardware limits. QLoRA solves this by:
1. Loading the base model in 4-bit quantized form (drastic memory reduction)
2. Injecting small trainable LoRA adapter layers at key weight matrices
3. Training only those adapters (~1-3% of total parameters)
4. Merging the adapters back into the base weights at export

## Results

- **26+ downloads** in the first month after release on Hugging Face
- Public Gradio interface live for real-time inference

## Deployment

- **Hugging Face Hub:** [lingadevaruhp/thoshan_Flash](https://huggingface.co/lingadevaruhp/thoshan_Flash)
- **Short link:** [go.lingadevaru.in/LLM](https://go.lingadevaru.in/LLM)
- **HF username:** `lingadevaruhp`
- Gradio interface deployed for public inference — no local setup required

## Related Pages

- [[profile/about]] — AI/ML listed under technical skills
- [[projects/chiac-asi-internship]] — ML concepts studied during Phase 2
- [[work-college-internship]] — Work, College & Internship
- [[profile/projects]] — All projects overview
