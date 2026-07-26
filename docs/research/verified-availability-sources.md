# Verified Availability Sources for the Wasatch Front MVP

**Research date:** 2026-07-26  
**Decision being made:** Which sources may GolfTime use to show trustworthy, current tee-time availability for publicly bookable courses within a user-selected drive-time radius?

## Launch decision

**No source is qualified for live production use by GolfTime today.**

Lightspeed Golf / Chronogolf is the strongest first integration candidate because its official Partner API documents the availability fields the MVP needs and has substantial Wasatch Front coverage. It is not yet a Verified Availability Source for GolfTime because access is restricted to approved partners and individually connected clubs, GolfTime has neither approval nor club scopes, and no tee-time freshness or cache SLA is published.

GolfNow and Supreme Golf are the best candidates for a broader authorized aggregation relationship. GolfNow publishes a capable affiliate API but gates credentials and inventory channels behind a partnership; Supreme's public materials establish course-authorized distribution but not a downstream GolfTime API contract. foreUP and MemberSports are useful direct-provider candidates for local gaps, subject to provider and course authorization.

The launch approach should therefore be:

1. Build a course catalog from course-owned sources and always provide the course's official booking link.
2. Show live availability only for a provider and course that passes the qualification gate in this document.
3. Label all other courses **“Live availability not verified”** and hand off to the official course booking page.
4. Pursue Lightspeed approval first, while pursuing an authorized GolfNow or Supreme Golf aggregation agreement in parallel.

This supports a trust-but-verify launch without presenting marketplace-directory entries, scraped pages, or stale data as bookable inventory.

## Evidence standard

- **Documented** means supported by a first-party provider, government, or course source linked below.
- **Inference** means a conclusion from documented facts; it must be tested before launch.
- **Unknown** means no public primary source answered the question. An unknown that affects authorization, availability meaning, freshness, or handoff blocks qualification.

A course appearing in a provider's geographic directory proves only that the provider knows about the course. It does **not** prove that the course currently distributes live inventory there, that every displayed course is publicly bookable, or that GolfTime has a right to reuse the data.

## Source assessment

| Candidate | Authorization path | Wasatch evidence | Main qualification blockers | Launch disposition |
| --- | --- | --- | --- | --- |
| Lightspeed Golf / Chronogolf | Become an approved Partner API integrator; Lightspeed connects each authorized club | Chronogolf's Salt Lake City directory currently labels at least 14 area courses “Online booking” | GolfTime approval and club scopes absent; tee-time cache/freshness SLA, timezone, currency, slot-level handoff, and commercial terms unresolved | **Priority 1 integration candidate; do not use consumer endpoints** |
| GolfNow | Negotiate a business/API partnership; receive client credentials and an inventory channel | GolfNow's Salt Lake City directory lists many area courses, but participation and channel inventory are unverified | GolfTime approval, channel coverage, request-rate limit, search freshness/cache SLA, supported external handoff, and commercial terms unresolved | **Priority 1 aggregation candidate; directory is not an inventory source** |
| Supreme Golf | Negotiate a downstream data/API or affiliate agreement | Provider advertises direct, course-authorized tee-sheet distribution; launch-market course coverage not verified | Public terms cover course-to-Supreme distribution, not reuse by GolfTime; downstream API, freshness, limits, fields, and local coverage unknown | **Priority 2 aggregation outreach** |
| foreUP | API license plus permission/activation for each relevant course account | Ogden City links public Mt. Ogden and El Monte booking to foreUP; Thanksgiving Point also links to foreUP | Public API terms omit endpoint/field contract and numeric limits; no freshness SLA; course permissions and fees absent | **Direct gap-fill candidate after documentation and authorization** |
| MemberSports | Written agreement with both MemberSports and each course | Eaglewood and Fox Hollow link their official booking actions to MemberSports | No public API contract, schema, limits, freshness SLA, price semantics, or deep-link contract | **Direct gap-fill candidate only** |
| Club Prophet | Submit an integration request backed by customer demand and a commercial proposal | Glenmoor's official site links to a Club Prophet booking engine | Approval, API schema, limits, cache behavior, and commercial terms unknown | **Single-course gap candidate after higher-coverage sources** |
| TeeQuest | No public programmatic-access path found | The current marketplace selector lists no Utah courses | Authorization and the entire data contract are unknown | **Exclude from launch sourcing** |

### 1. Lightspeed Golf / Chronogolf

**Documented**

- The official [Lightspeed Golf Partner API V2](https://partner-api.docs.chronogolf.com/) is for approved partners. Credentials and club connections are provisioned by Lightspeed; access is scoped to connected clubs.
- The API exposes tee-sheet date and local start time, starting hole, format, blocked state, and `free_slots`. It supports player-count and 9/18-hole price queries and returns green-fee, cart, subtotal, and restriction information.
- `free_slots` is capped at four and is reduced by booked rounds; a frozen tee time reports zero. A draft reservation does not hold the inventory.
- The documented limit is 200 requests per minute. There is no availability webhook; availability must be read by course and date.
- The API does not return the club timezone or a currency code. Tax detail is limited to an organization-level `tax_inclusive` flag, and already-past times may be included in today's response.
- The public marketplace supports course-level booking, but no supported slot-specific deep-link contract is documented. A stable club page such as [Old Mill](https://www.chronogolf.com/club/old-mill-slco) is suitable as a fallback handoff.
- The [Salt Lake City Chronogolf directory](https://www.chronogolf.com/clubs/Salt-Lake-City--Utah--United-States) currently labels at least 14 area listings “Online booking.” This is coverage evidence, not Partner API authorization.

**Authorization boundary**

Lightspeed's [Acceptable Use Policy](https://www.lightspeedhq.com/legal/acceptable-use-policy/) prohibits collecting or harvesting data from its products and using bots or other unapproved automation. The repository's [current proxy](../../api/chronogolf.js) imitates a browser and calls the consumer marketplace endpoint, rather than authenticating to the Partner API. That implementation must not be used for beta or treated as an authorized source.

**Unknowns blocking qualification**

- Written approval for GolfTime and an initial list of connected Wasatch clubs.
- Tee-time response cache behavior and a freshness expectation or SLA.
- Contractual permission to display availability and prices to unauthenticated GolfTime users.
- Currency, timezone, tax, fee, residency-rate, and eligibility data supplied outside the API.
- Commercial terms, support/escalation path, and production quotas beyond the published per-minute limit.
- A supported handoff that preserves course, date, time, player count, and holes. If unavailable, the UI must use a course-level link and require the golfer to reselect the slot.

**Disposition:** technically the best first source, but **not verified until partner approval, club connection, and live shadow validation are complete**.

### 2. GolfNow

**Documented**

- GolfNow's [business partnership page](https://www.golfnow.com/business-partnership) explicitly offers API integrations that let golfers reserve through a partner site. This is the correct access path.
- The official [GolfNow API documentation](https://api.gnsvc.com/documentation/) says the API is for partners and affiliated courses. Production use requires assigned client credentials and an inventory channel; an [access request](https://api.gnsvc.com/pages/RequestAccess.aspx) and sandbox are available.
- Tee-time searches accept date/time, location or facility, radius, price, holes, player count, and rate filters. Results include facility and rate identifiers, start time, vacancies represented by `PlayerRule`, 9/18-hole values, restrictions, transportation, green fees, currency, amounts due online and at the course, taxes, and transaction fees. The official [search workflow](https://api.gnsvc.com/pages/WorkflowExampleSearch.aspx) documents the sequence.
- Search results have no documented cache lifetime or freshness SLA. The booking workflow can call invoice verification, which re-queries the tee sheet for the requested seats immediately before booking. This supports treating search results as provisional; it does not make an earlier result or external handoff current.
- Results are capped at 1,200 with a truncation signal. No numeric request-per-time-window limit was found.
- GolfNow's [consumer Terms of Service](https://www.golfnow.com/support/about-us/terms) grant only personal, non-commercial use and prohibit exploiting content without written agreement. Consumer pages therefore cannot be scraped or repurposed for GolfTime.
- The consumer terms also state that availability is based on facility information and may change, prices and restrictions can vary, and GolfNow does not warrant that information is current or error-free.
- The [Salt Lake City course directory](https://www.golfnow.com/course-directory/us/ut/9451-salt-lake-city) lists many relevant courses. It does not identify which courses have current inventory or establish GolfTime's reuse rights.

**Unknowns blocking qualification**

- Whether GolfNow will approve GolfTime, issue a launch inventory channel, and include the courses/products needed for useful local coverage.
- Numeric request-rate limits, search cache rules, polling requirements, availability freshness SLA, and production support.
- How GolfTime should normalize rate restrictions and `PlayerRule` for the MVP's requested party size, confirmed against sandbox and production fixtures.
- Whether a supported external booking handoff can preserve the selected slot. The documented API can perform booking and payment, but owning that workflow is outside this MVP and requires additional approval and operational scope.
- Whether an affiliate fee, golfer service fee, or payment/revenue-share obligation applies.
- Commercial model, attribution, data retention, display, sublicensing, and audit restrictions.
- Actual live-inventory coverage for publicly bookable courses inside the launch drive-time area.

**Disposition:** pursue immediately as a broad aggregation partner and validate its sandbox if access is granted, but **do not build against or ingest its consumer site**.

### 3. foreUP

**Documented**

- The [foreUP API Terms of Use](https://foreupgolf.com/wp-content/uploads/2024/03/foreUp-API-TOU.pdf) grant a revocable, non-transferable license to receive, use, and display data only within permissions granted for the relevant account. Explicit end-user consent and foreUP attribution are required, and API/data resale or syndication is restricted.
- foreUP may limit data volume, call rate, and network calls, change those limits without notice, and charge per API call under a separate fee schedule. The published terms give no numeric limit and disclaim timeliness, availability, and accuracy warranties.
- foreUP's [App Store authorization model](https://www.foreupgolf.com/the-foreup-app-store/) says an account administrator must activate an integration before data is shared, and some integrations require a separate agreement.
- Ogden City's official [Mt. Ogden page](https://ogdencity.gov/1687/Mt-Ogden) identifies the public course and links Mt. Ogden and El Monte to course-specific foreUP booking pages. Thanksgiving Point's official [booking action](https://www.thanksgivingpointgolfclub.com/) also hands off to foreUP.

**Unknowns blocking qualification**

- GolfTime's approval, each course's permission, and whether public tee-time inventory is included in the licensed “End User Data.”
- Endpoint and field contract for availability, remaining capacity, holes, price, fees, carts, restrictions, and identifiers.
- Numeric request limits, caching rules, freshness SLA, failure semantics, and change-notification options.
- Supported slot-level handoff and commercial/API-call fees.

**Disposition:** use only after foreUP supplies the private API documentation and both authorization and course activation are confirmed.

### 4. Other candidates

Supreme Golf's [distribution terms](https://courses.supremegolf.com/free-distribution-terms-conditions/) establish that a course can authorize a direct tee-sheet/API connection, retain price control, and have reservations written back to its tee sheet subject to tee-sheet-provider approval. Its [distribution page](https://courses.supremegolf.com/tee-time-distribution/) names integrations with Lightspeed, foreUP, and Club Prophet. Those facts make Supreme a credible partner lead, but they do not authorize GolfTime to consume or redistribute Supreme data. A downstream agreement, API contract, local coverage proof, and freshness validation are still required.

MemberSports' [terms and privacy page](https://www.membersports.com/privacy-policy/) explicitly requires a written agreement with both MemberSports and the applicable course before a third-party application may access availability or booking data, and prohibits bots and scrapers. Official course sites for [Eaglewood](https://eaglewoodgolf.com/) and [Fox Hollow](https://foxhollowutah.com/) link their booking actions to MemberSports. This is a clear but course-by-course authorization path, not a presently usable source.

Club Prophet has an official [integration request](https://www.clubprophet.com/contact/integration-request) process and documents real-time public reservations, capacity, 9/18-hole, pricing, and supported [affiliate links](https://onlinehelp.cps.golf/help/Content/Internal%20Help%20Topics/3rd%20Party/Club%20Prophet%20Affiliate.htm). [Glenmoor's official site](https://golfglenmoor.com/) confirms one public local deployment. Its private API access, fields, numeric rate limit, cache behavior, and commercial terms remain unknown.

No first-party TeeQuest source found a programmatic-access or partner path, and its [current marketplace selector](https://www.teequest.com/TeeTimes) lists no Utah courses. It should not be pursued for launch coverage unless that published inventory changes.

## Qualification gate

A provider-course pair becomes a **Verified Availability Source** only after all of the following are recorded and tested:

1. **Authority:** written provider approval plus course permission/activation where required; approved uses include public display of availability and price.
2. **Identity:** stable provider, facility, course, and tee-time identifiers mapped to the canonical public course.
3. **Availability meaning:** documented capacity, player-count logic, pairing restrictions, starting hole, 9/18-hole behavior, blocked/frozen states, and eligibility rules.
4. **Price meaning:** currency, tax, service and booking fees, cart inclusion, due-now versus due-at-course amounts, residency/membership restrictions, and a truthful “price unavailable” state.
5. **Freshness:** documented cache/polling behavior plus observed age; every result displays `checked at`, and stale data is hidden rather than presented as available.
6. **Failure behavior:** authentication, quota, timeout, partial-response, and upstream-outage states fail closed per provider without hiding valid results from other providers.
7. **Booking handoff:** a provider-supported link is tested for course/date/time/players/holes preservation. If it cannot preserve the slot, the UI says so and uses the official course booking page.
8. **Operations:** production quotas, fees, attribution, data retention, support, revocation handling, and a recurring course/provider audit are documented.

## Verification plan for the first approved source

Before public display, run an authorized shadow test across representative weekday/weekend dates and 1–4 player searches:

- Compare API results with the provider's public booking experience at collection time and again after the intended cache interval.
- Record false availability, missing availability, capacity mismatches, price/fee mismatches, 9/18-hole errors, and failed handoffs.
- Test sell-outs, frozen/blocked times, cancellations, same-day past times, provider throttling, credential expiry, and upstream outages.
- Require zero known unauthorized access, zero stale slots presented after the configured cutoff, and an explicit UI fallback for every unverified or failing course.

The MVP may launch with a mix of verified live results and official-link fallbacks. It must not claim comprehensive live tee times until the measured provider-course coverage supports that claim.

## Concrete follow-ups

1. Email `golf.api@lightspeedhq.com` with the GolfTime use case and requested launch-course list; request partner approval, club connection requirements, private commercial terms, timezone/currency metadata guidance, and a freshness recommendation.
2. Submit the GolfNow partnership request asking for the full data/display license, launch-market inventory manifest, supported API version, limits, freshness/cache SLA, handoff capabilities, fees, and sandbox credentials.
3. Ask Supreme Golf the same downstream-data questions and require proof of authorized launch-market inventory before treating it as a source.
4. Contact foreUP together with one willing local course; request API documentation, explicit authorization scope, course activation, field semantics, numeric limits, fees, and freshness behavior.
5. Approach MemberSports only for identified local gaps and obtain the required provider-plus-course written agreements.
6. Maintain a dated provider/course coverage manifest sourced from official course pages. Recheck it regularly; the current repository catalog already illustrates provider drift because Sandy City's [current River Oaks tee-time page](https://sandy.utah.gov/tee-times-0) links to Chronogolf.
7. Remove or permanently disable the consumer Chronogolf marketplace proxy before any beta deployment. Replace it only with the approved Partner API adapter after the qualification gate passes.
