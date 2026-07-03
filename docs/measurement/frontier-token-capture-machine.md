# Frontier Token Capture Machine Handoff

## Purpose

This document points Hermes/OpenClaw-facing work at the CFC-P021 harvest-first measurement kernel.

Source of truth:

`/Users/chiefofstaff/ClarkFarmingCompany/projects/Frontier Token Capture Machine/`

## Use When

Use CFC-P021 when a frontier-model session, local-model comparison, routing experiment, agent-architecture review, prior transcript, or local operating file may contain reusable evidence that should improve local inference or become a durable artifact.

## Required Before New Frontier Use

Check the latest harvest first:

- `/Users/chiefofstaff/ClarkFarmingCompany/projects/Frontier Token Capture Machine/data/session-harvest/artifact-candidates-latest.json`
- `/Users/chiefofstaff/ClarkFarmingCompany/projects/Frontier Token Capture Machine/data/session-harvest/artifact-candidates.jsonl`
- `/Users/chiefofstaff/ClarkFarmingCompany/projects/Frontier Token Capture Machine/artifacts/reusable/`
- `/Users/chiefofstaff/ClarkFarmingCompany/projects/Frontier Token Capture Machine/reviews/artifact-value-review/artifact-rankings.md`
- `/Users/chiefofstaff/ClarkFarmingCompany/projects/Frontier Token Capture Machine/promotion/automated/auto-promotion-report.md`

Then fill:

`/Users/chiefofstaff/ClarkFarmingCompany/projects/Frontier Token Capture Machine/templates/frontier-session-capture-template.md`

Every new frontier session needs:

- task ID or project link
- provider/model
- reason frontier is justified
- privacy class
- intended output paths
- prior harvest checked
- acceptance test
- fallback if weak

## Harvest Artifacts

Current harvest machinery:

- Harvester: `/Users/chiefofstaff/ClarkFarmingCompany/projects/Frontier Token Capture Machine/scripts/harvest_frontier_sessions.py`
- Adversarial reviewer: `/Users/chiefofstaff/ClarkFarmingCompany/projects/Frontier Token Capture Machine/scripts/review_artifact_cards.py`
- Auto-promoter: `/Users/chiefofstaff/ClarkFarmingCompany/projects/Frontier Token Capture Machine/scripts/auto_promote_artifacts.py`
- Weekly orchestrator: `/Users/chiefofstaff/ClarkFarmingCompany/projects/Frontier Token Capture Machine/scripts/weekly_artifact_review.py`
- Cron wrapper: `/Users/chiefofstaff/.hermes/scripts/frontier-session-artifact-harvest.py`
- Weekly wrapper: `/Users/chiefofstaff/.hermes/scripts/frontier-artifact-weekly-review.py`
- Current validator: `/Users/chiefofstaff/ClarkFarmingCompany/projects/Frontier Token Capture Machine/scripts/validate_measurement_kernel.py`
- Promotion gates: `/Users/chiefofstaff/ClarkFarmingCompany/projects/Frontier Token Capture Machine/promotion/artifact-promotion-plan.md`
- Review contract: `/Users/chiefofstaff/ClarkFarmingCompany/projects/Frontier Token Capture Machine/docs/adversarial-artifact-review.md`

Current allowlisted corpus includes CFC project/artifact/wiki/library text files, Codex pasted-text attachments, Hermes cron reports/preflights/sync reports, and selected GitHub-sync logs.

Artifact cards carry review frontmatter with domain/topic labels, value ranks, target-use labels, source/model metadata, and privacy gates after the weekly pass. Auto-promotion places cards into staging, keep-indexed, archive, or quarantine queues. Any card with gated retrieval, gated/no training, fixture-only/no eval, prompt capture, raw session trace, cron log, family/medical/financial/career/contact risk, credential-adjacent risk, or stale current-state claims must stay inside the queue gates until a later destination-specific extractor creates a sanitized artifact.

The nightly cron wrapper runs collection only. The weekly cron wrapper runs adversarial review and auto-promotion across all collected cards.

Capture formats still available for promoted artifacts:

- Trace schema: `/Users/chiefofstaff/ClarkFarmingCompany/projects/Frontier Token Capture Machine/schemas/trace.schema.json`
- Eval case schema: `/Users/chiefofstaff/ClarkFarmingCompany/projects/Frontier Token Capture Machine/schemas/eval_case.schema.json`
- Judge rubric schema: `/Users/chiefofstaff/ClarkFarmingCompany/projects/Frontier Token Capture Machine/schemas/judge_rubric.schema.json`

## Promotion Boundary

This handoff, nightly harvest, weekly review, and auto-promotion do not mutate runtime routing, RAG corpora, training datasets, eval harnesses, model configuration, or production behavior. They only create local staging queues.

Queue policy is defined in:

`/Users/chiefofstaff/ClarkFarmingCompany/projects/Frontier Token Capture Machine/promotion/artifact-promotion-plan.md`
