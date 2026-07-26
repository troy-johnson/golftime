# GolfTime positioning relative to Tee-Time.io

**Research date:** 2026-07-26  
**Decision:** What, if anything, should GolfTime do now that Tee-Time.io covers much of the planned Utah tee-time discovery job?

## Recommendation: narrower complementary niche

GolfTime should **not** race Tee-Time.io for statewide course count, alerts, accounts, voting, editorial course content, or generic “every tee time in one search” positioning.

Proceed only as a narrower Wasatch Front decision-support product:

> **Find the best round your group can actually reach, trust, and book—within a real drive-time limit, with no account required.**

The durable difference is the combination of:

1. a ZIP-code Search Origin and genuine, adjustable **Travel-Time Limit**, rather than a fixed straight-line radius;
2. explicit **Verified Availability Source**, freshness, and degraded-state language;
3. weather and playing conditions attached to the decision, not promoted as a standalone differentiator; and
4. an anonymous shareable shortlist and honest **Booking Handoff**, without alerts or voting in the MVP.

This is complementary because Tee-Time.io is already the broader Utah inventory finder. GolfTime would answer the narrower group-planning question: “What can we reasonably drive to, and what evidence says this time is still worth trying to book?”

## Evidence limits

- **Observed** findings below come from Tee-Time.io's current public pages, published client bundle, and limited read-only requests to its public endpoints.
- **Claim** means Tee-Time.io says something about itself; it is not independently validated.
- **Inference** means a product conclusion from the observed evidence.
- **Unknown** means the public evidence did not answer the question.
- The interactive browser runtime was unavailable. No account was created, so tap-by-tap mobile behavior and authenticated flows were **not** exercised. Responsive markup and flow logic were inspected, but visual mobile usability remains unknown.
- Public inventory records and responses show what Tee-Time.io exposes, not that a course authorized the access or that a slot was bookable at handoff.

## What Tee-Time.io already does

| Dimension | Primary evidence | Implication for GolfTime |
| --- | --- | --- |
| Coverage | **Claim:** the [homepage](https://tee-time.io/) says 67 public Utah courses are live and names ForeUp, Chronogolf, and MemberSports. **Observed:** the current [public course endpoint](https://utah-tee-times.tysontiatia.workers.dev/v1/courses) returned 75 records: 36 ForeUp, 17 Chronogolf, 10 MemberSports, 6 TeeItUp, 4 TruTee, 1 GolfPay, and 1 TenFore. The static claim and endpoint count cannot be reconciled from public evidence. | Do not compete on a statewide course-count headline. Treat every competitor coverage count—and GolfTime's own future count—as a dated claim until course and source status are verified. |
| Relevant regions | **Observed:** the endpoint grouped 17 records under “Salt Lake City Area,” 15 under “Davis and Weber County,” 14 under the broad “Utah County and South” bucket, and 1 under “Tooele and West.” Some bucket names extend beyond GolfTime's intended drive-time market. | Tee-Time.io has material catalog presence in every requested corridor, but these broad buckets do not prove complete or currently bookable coverage. GolfTime needs route-scoped coverage, not a larger raw list. |
| Freshness | **Claim:** the [homepage](https://tee-time.io/) says tee sheets refresh every few minutes and emails arrive within minutes. **Observed:** the [Terms](https://tee-time.io/terms.html) say alerts depend on polling and are not real-time, and availability, pricing, and accuracy are not guaranteed. The [published client](https://tee-time.io/app/assets/index-BswGdxmv.js) displays an “Updated” age, rejects snapshots older than 12 minutes, and attempts a provider-specific fallback. | “Has a timestamp” is no longer differentiation. GolfTime must disclose source-specific checked-at time and fail closed when the source exceeds its validated cutoff. |
| Search controls | **Claim/observed:** course/city/ZIP, one date, 1–4 players, 9/18 holes, Any/Morning/Afternoon/Twilight, list/map, and distance/soonest/price/rating sorting are present in the [homepage](https://tee-time.io/) and [published client](https://tee-time.io/app/assets/index-BswGdxmv.js). | Basic filters, price comparison, maps, and adjacent date selection are table stakes. |
| Geographic scope | **Observed:** the [published client](https://tee-time.io/app/assets/index-BswGdxmv.js) converts ZIPs to embedded centroids and applies a default 60-mile Haversine radius. GPS is used when available; otherwise Salt Lake City is the fallback. “Search all Utah” removes the regional scope. No adjustable drive-time control was found. | Genuine routing time from an entered ZIP, defaulting to 60 minutes and adjustable upward, is the clearest functional gap. Do not label straight-line distance as travel time. |
| Conditions | **Observed:** the [published client](https://tee-time.io/app/assets/index-BswGdxmv.js) includes course-level hourly temperature, wind, and rain chance from Open-Meteo, plus ratings and walkability. | Weather alone is not a differentiator. GolfTime should use tee-time-specific conditions to rank and explain group fit, not build a separate weather destination for the MVP. |
| Booking Handoff | **Claim:** the [homepage](https://tee-time.io/) says booking is direct with no markup. **Observed:** the client generates provider links that preserve date, players, and holes when supported, but tells the golfer to confirm the selected time on the provider site. The [Terms](https://tee-time.io/terms.html) say Tee-Time.io does not process bookings. | Direct handoff is also table stakes. GolfTime must state exactly what the link preserves and whether the displayed time was rechecked before handoff. |
| Sharing | **Claim:** the homepage promotes a shared round with group voting. **Observed in the [published client](https://tee-time.io/app/assets/index-BswGdxmv.js):** search is anonymous, creating a live vote link requires sign-in, and a recipient can add a guest name and vote In/Maybe/Out. Older snapshot links warn that availability must be confirmed and store votes only on the device. | GolfTime should not build voting or invitations. Its useful gap is an anonymous URL that preserves the search and shortlist without requiring the organizer or recipient to create an account. |
| Alerts | **Observed:** alerts require an account and are delivered by email; SMS is paused, per the [Terms](https://tee-time.io/terms.html) and [Privacy Policy](https://tee-time.io/privacy.html). | Cede alerts to Tee-Time.io for the MVP. Alerts would introduce accounts, delivery operations, and monitoring without strengthening GolfTime's niche. |
| Trust language | **Observed:** the homepage calls inventory “live,” while its footer and [Terms](https://tee-time.io/terms.html) say the service is unaffiliated with courses and providers, aggregates publicly available inventory, makes no availability/price/accuracy guarantee, and requires confirmation on the course site. No provider agreement, API entitlement, course permission, or freshness SLA is disclosed. | This does **not** prove Tee-Time.io is unauthorized; it means public evidence does not prove authorization. GolfTime may claim “verified” only after the qualification gate in [Verified Availability Sources](./verified-availability-sources.md) passes. |

## Limited regional checks

At 2026-07-26 18:54 UTC, one read-only availability request was repeated for a representative course in each requested corridor:

| Corridor | Public response | What it proves |
| --- | --- | --- |
| Salt Lake | [Bonneville](https://utah-tee-times.tysontiatia.workers.dev/v1/availability?course_slug=bonneville-slc&date=2026-07-27&holes=18&players=2) returned 39 snapshot times; `last_polled_at` was 15:27 UTC. | The public service had a catalog mapping and stored capacity/price-shaped results. It does not prove the client fallback succeeded or the course would accept a booking. |
| Utah County | [Thanksgiving Point](https://utah-tee-times.tysontiatia.workers.dev/v1/availability?course_slug=thanksgiving-point-lehi&date=2026-07-27&holes=18&players=2) returned 5 snapshot times; `last_polled_at` was 15:32 UTC. | Same limitation. |
| Tooele | [Oquirrh Hills](https://utah-tee-times.tysontiatia.workers.dev/v1/availability?course_slug=oquirrh-hills-tooele&date=2026-07-27&holes=18&players=2) returned 10 snapshot times; `last_polled_at` was 15:32 UTC. | Same limitation. |
| Davis/Weber | [Davis Park](https://utah-tee-times.tysontiatia.workers.dev/v1/availability?course_slug=davis-park-kaysville&date=2026-07-27&holes=18&players=2) returned 12 snapshot times; `last_polled_at` was 15:40 UTC. | Same limitation. |

Those stored snapshots were more than three hours old at observation time. The published client would reject them under its 12-minute rule and attempt its fallback, so it would be inaccurate to say the visible app necessarily presented them as live. Because interactive testing was unavailable, the end-to-end anonymous results and handoffs for these searches remain **unknown**.

## Constrained GolfTime Discovery Flow

The MVP should be one anonymous path:

1. Enter Search Origin ZIP, Search Date, group size, holes, time window, and an adjustable Travel-Time Limit defaulted to 60 minutes.
2. Return only Publicly Bookable Courses inside the computed drive-time boundary.
3. Rank a compact shortlist by group fit, drive time, tee-time-specific conditions, and source state—not by a generic statewide course score.
4. Give every course exactly one truthful state:
   - **Verified time · checked _n_ minutes ago**
   - **Source temporarily unavailable**
   - **Live availability not verified · open official booking page**
5. On handoff, disclose whether course/date/time/players/holes are preserved and require confirmation on the provider site.
6. Share the search or selected shortlist through an anonymous URL. Do not add accounts, voting, alerts, invitations, or favorites.

The prototype should explicitly test degraded mixed-source results; a polished all-live happy path would avoid the product's actual differentiator.

## Beta gates and kill criterion

### Entry gates

- 100% of inventory labelled current or live comes from an authorized provider-course pair that passed GolfTime's qualification gate.
- 100% of catalog courses have a validated official Booking Handoff or are excluded.
- A representative matrix of Salt Lake, Utah County, Tooele, and Davis/Weber ZIP searches proves the configured route-time boundary; no straight-line approximation is shown as drive time.
- Stale data fails closed, provider failures remain isolated, and every result exposes a checked-at or unverified state.
- Shadow validation measures availability agreement at handoff for the initial verified source and meets the final gate set by [Set limited-public-beta reliability and success thresholds](https://github.com/troy-johnson/golftime/issues/9) before limited public display.

### Product success test

Run the prototype against Tee-Time.io with at least 12 local Round Organizers spanning at least three Search Origin corridors. Give each person the same group-planning task.

Proceed to implementation only if:

- at least 60% prefer GolfTime for choosing and sharing the round;
- median time from landing to a shared shortlist or Booking Handoff is two minutes or less; and
- at least half use or explicitly value either the Travel-Time Limit or the source/freshness state when explaining their choice.

**Kill/redirect:** if fewer than 60% prefer GolfTime **and** interviews do not identify the drive-time/trust combination as a must-have advantage, stop the standalone discovery product. Do not respond by adding Tee-Time.io's alerts, voting, or statewide breadth; redirect effort to a partnership or a different golf-group coordination problem.

## Remaining unknowns

- Real mobile usability and the complete signed-in flow, because interactive browser access was unavailable.
- Whether Tee-Time.io has private provider or course permissions not disclosed publicly.
- Actual end-to-end availability match and handoff success by platform and region.
- Whether local golfers value route-time and verification enough to choose a narrower product over Tee-Time.io's broader feature set.
