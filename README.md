# Toyota Financial Services — Project Overview & File Guide
Table of contents
- Project quick start
- High-level architecture
- Files (detailed) — root `src` files
  - `index.js`
  - `App.js`
- `src/components` (each file)
  - `Home.js`
  - `Navigation.js`
  - `Questionnaire.js`
  - `Results.js`
  - `MyPlans.js`
  - `SignIn.js`
- `src/utils` (each file)
  - `apr.js`
  - `recommendations.js`
  - `toyota_logo.png` and `car_images/` (assets)
- Demo scripts & suggested live-run steps
- Notes, edge cases & Q/A pointers

---

## Project quick start

1. Install dependencies (from project root):

```powershell
npm install
```

2. Run the dev server:

```powershell
npm start
```

3. Create a production build (used in validation during development):

```powershell
npm run build
```

This project uses Create React App (react-scripts). The app serves a small single-page UI that helps customers compare financing and leasing options for Toyota vehicles.

---

## High-level architecture

- UI is React functional components in `src/components`.
- App-level state and navigation live in `src/App.js`.
- Domain logic (APR selection, recommendation engine, payment math) lives in `src/utils` (`apr.js`, `recommendations.js`).
- Images are stored under `src/utils/car_images` (imported and bundled by the build).

Keep this structure in your head when describing the project: components = presentation, utils = business logic.

---

## Root `src` files

### `index.js`
- Responsibility: Top-level React bootstrap. Renders `<App />` into the DOM element with id `root`.
- Key lines: imports app CSS and `App`.
- Inputs/outputs: No inputs; side effect is DOM render.
- Talking points: "Minimal bootstrap file that starts React and loads global CSS; standard CRA setup."

### `App.js`
- Responsibility: Application root — holds global state and page routing between Home / Questionnaire / Results / MyPlans.
- Key state objects:
  - `currentPage` (string): controls which page is shown ('home', 'questionnaire', 'results', 'myplans').
  - `isAuthenticated`, `currentUser` (authentication flow; stored in localStorage).
  - `questionnaireData` (object): holds the form values the user fills in. Keys include: income, creditScore, downPayment, monthlyBudget, vehicleType, financingPreference, loanTerm.
  - `selectedPlans`, `savedPlans`: arrays used for plan selection and persistence.
- Important functions / handlers:
  - `handleQuestionnaireChange(field, value)`: updates `questionnaireData` (keeps values controlled for the form).
  - `handleQuestionnaireSubmit(e)`: called when questionnaire passes validation and should navigate to results.
  - `handleSignIn(e, isSignUp)`: simple client-side sign-up / sign-in storing users in `localStorage` (demo-only authentication).
  - `savePlans` / `togglePlanSelection`: manage selecting and persisting plans in `localStorage`.
- Inputs/outputs: Renders the appropriate component and passes handlers + state as props.
- Edge cases to mention: user/session stored in localStorage — convenient for demos but not secure for production; password validation is minimal (length check) and no server.
- Demo talking points: show how state flows from `Questionnaire` up to `App`, then into `Results` where the recommendation engine runs.

---

## `src/components` (detailed)

Each component is a presentational page or shared UI piece. Props listed are the most important ones you will pass during the demo.

### `Home.js`
- Responsibility: Landing page. Introduces the product and links into the questionnaire.
- Props:
  - `setCurrentPage` (fn): navigates to `questionnaire` when the CTA is clicked.
  - `savedPlans`, `handleLogout` (optional) for the navigation bar.
- Key UI elements: three feature cards, CTA button to start the questionnaire.
- Talking points: use the hero section to explain the product goals before launching the questionnaire.

### `Navigation.js`
- Responsibility: Top navigation bar present on most pages. Shows logo, nav buttons, logout, and saved plans count.
- Props:
  - `setCurrentPage` (fn): navigation callback.
  - `savedPlans` (array) and `showMyPlans` (bool): toggles view and displays saved plans count.
  - `handleLogout` (fn) optional.
- Notable: imports `toyota_logo.png` from `src/utils` and displays it.
- Demo talking points: clicking "View My Plans" shows the saved plans count and navigation flow.

### `Questionnaire.js`
- Responsibility: Collects user inputs that feed the recommendation engine.
- Props:
  - `questionnaireData` (object): controlled values for all fields.
  - `handleQuestionnaireChange(field, value)` (fn): used on each input's onChange.
  - `handleQuestionnaireSubmit(e)` (fn): called when validation passes.
- Form fields and shape:
  - `income` (select): string representing numeric threshold (e.g. '50000').
  - `creditScore` (select): taxonomy values: 'superprime', 'prime', 'nonprime', 'subprime', 'deepsubprime'.
  - `downPayment` (number input): dollar amount.
  - `loanTerm` (select): '36','48','60','72'.
  - `vehicleType` (select): categories like 'cars & minivans', 'crossovers & suv', etc.
  - `financingPreference` (select): 'lease' | 'finance' | 'no preference'.
- Validation:
  - Basic client-side checks in the form wrapper: income numeric, credit selected, down payment >= 0, loan term valid, and other selects selected. Uses simple alert() messages when invalid.
- Talking points: this is where we capture constraints that affect both leasing and financing calculations. Explain how downPayment + loanTerm are used by the payment formulas.

### `Results.js`
- Responsibility: Shows the top recommendations (mapped from utils/recommendations.js) and allows selecting/saving plans.
- Props:
  - `questionnaireData` (object) — passed into `getRecommendations`.
  - `selectedPlans`, `togglePlanSelection(plan)`, `savePlans()`, `setCurrentPage`, `handleLogout`.
- Key behavior:
  - Calls `getRecommendations(questionnaireData)` to compute and display the top 3 plans.
  - For each plan renders: image, vehicle name, monthly payment, APR (if financing), term, down payment, principal, total interest, total paid, total cost, mileage limit (if lease).
  - Allows selecting plans (toggles check) and saving them via `savePlans` (persist to `localStorage` in `App`).
- Talking points: results are computed from the recommendation engine. The UI demonstrates clear financial breakdowns (monthly payment, total interest) — point out the amortization math for financing and the custom lease formula.

### `MyPlans.js`
- Responsibility: Lists plans the user saved. Allows removing plans.
- Props: `savedPlans`, `removePlan(id)`, `setCurrentPage`, `handleLogout`.
- Talking points: demonstrates persistence across sessions (saved in localStorage keyed by user email), useful for demoing end-to-end flow from questionnaire -> save -> revisit.

### `SignIn.js`
- Responsibility: Small demo-only authentication screen (sign in / sign up toggle).
- Props: `user`, `setUser`, `handleSignIn`, `handleLogout`.
- Important behavior:
  - Sign up enforces a minimum password length (8 chars) client-side.
  - User data is stored in localStorage under key `registeredUsers` (demo only — not secure).
- Talking points: quick way to demo saving plans per-user. Emphasize this is a front-end-only mock auth for demo purposes.

---

## `src/utils` (detailed)

These files contain the domain logic: APR selection and the recommendation engine.

### `apr.js`
- Responsibility: Centralizes APR lookup logic.
- Export: `getAPRByCreditScore(creditScore, vehicleData)`
- Inputs:
  - `creditScore`: numeric or taxonomy label (e.g. numeric 720 or string 'prime').
  - `vehicleData`: an object representing a vehicle entry (with `financing.aprRanges` and `financing.apr` optionally).
- Behavior (important details):
  - Normalizes `creditScore` to a numeric value when possible (accepts strings, labels or numbers).
  - If the APR ranges include a direct label match (e.g. an object with `range: 'prime'`), it returns that APR.
  - If `aprRanges` contains explicit numeric `min`/`max` buckets, it will choose the APR matching the numeric score.
  - Falls back to the `vehicleData.financing.apr` string or `'N/A'` when no match is found.
- Edge cases:
  - Accepts both new taxonomy labels (`superprime`, `prime`, `nonprime`, `subprime`, `deepsubprime`) and legacy labels (`excellent`, `good`, `fair`, `poor`).
  - Returns a string APR (like '5.27%') in most cases because APR entries in data are stored as strings.
- Talking points: centralizing APR logic means we can change taxonomies and ranges in one place. Great testing target.

### `recommendations.js`
- Responsibility: Core recommendation engine and vehicle data source.
- Export: `getRecommendations(questionnaireData)`
- What it contains:
  - A data array `allVehicles` describing each vehicle (id, vehicle, category, image, description, `financing` and `leasing` objects). `financing` objects include `aprRanges` and `totalCost`. `leasing` objects include `monthlyPayment` (fallback), `term`, `downPayment`, and `mileageLimit`.
  - Helper functions:
    - `getPlanMinIncome(plan)`: returns an explicit `minIncome` or derives one using `Math.round(totalCost * 0.75)` when missing.
    - `computeLeaseMonthly(vehicle, plan)`: implements the lease monthly formula you requested. It:
      - Uses `termFactors` and `creditFactors`:
        - termFactors: {36: 0.025, 48: 0.020, 60: 0.018, 72: 0.016}
        - creditFactors: {superprime:0.85, prime:1.0, nonprime:1.25, subprime:1.6, deepsubprime:2.2}
      - Uses `vehicle.financing.totalCost` as the authoritative vehicle price when `plan.totalCost` is absent.
      - Uses the user's `downPayment` (from `questionnaireData`) as the amount to subtract.
      - Computes monthly = remaining * termFactor * creditFactor and returns `Math.round(monthly)`.
    - `getPlanForVehicle(vehicle)`: determines whether to use finance or lease plan based on `questionnaireData.financingPreference` or compares static plan monthly costs when preference is `no preference`.
  - Filtering & fallback rules:
    - Filters vehicles by vehicle type preference, budget, down payment ability, min income, and credit thresholds (via `meetsMinCreditScore`).
    - If no vehicles match, it relaxes the budget constraint, then ignores vehicle type, and then falls back to showing the most affordable vehicles.
  - Scoring & ranking:
    - Scores vehicles primarily by closeness to the user's monthly budget and gives a boost when the vehicle category matches the user's preference.
  - Output mapping:
    - Returns the top 3 vehicles mapped to UI-ready plan objects containing:
      - `id`, `vehicle`, `type` ('Financing' or 'Leasing'), `image`, `description`, `monthlyPayment` (formatted string), `downPayment`, `term`.
      - For Financing: `apr`, `totalCost`, `principal`, `totalInterest`, `totalPaid` (all formatted strings).
      - For Leasing: `mileageLimit` and `monthlyPayment` computed from `computeLeaseMonthly`.
- Important behavior & design decisions:
  - The recommendation engine is data-driven; adding vehicles or changing APR ranges in `allVehicles` updates behavior without changing logic.
  - Financing monthly payments are computed using an amortization formula (standard loan formula) when APR and loan term are available.
  - Leasing monthly payments use the simpler termFactor*creditFactor formula you provided and are rounded to whole dollars.
  - Eligibility checks use the computed leasing monthly (not the static `leasing.monthlyPayment` fallback) so results reflect user inputs.
- Edge cases to call out:
  - If pricing data is missing (`totalCost` absent in both financing and leasing), the engine will compute monthly as 0 — we added fallbacks to read the price from `vehicle.financing.totalCost` where possible.
  - If downPayment >= vehicle price, the remaining is 0 and monthly becomes 0 (this is expected behavior; the UI could show a note).
  - APR strings in the data are sometimes stored with `%` and sometimes without; `apr.js` normalizes and `recommendations.js` parses numeric values when needed.
  - The engine uses simple heuristics for credit thresholds and income — suitable for a demo but not production underwriting.
- Talking points / judges-ready notes:
  - "Everything that affects the monthly payment is centralized in `recommendations.js` so you can change policy (APR mapping, term factors) without touching the UI."
  - "We added defensive fallbacks for missing data and multiple relaxation steps so the user always sees proposals rather than an empty list."
  - "Splitting APR logic into `apr.js` makes the domain rules easy to maintain and test."

### `car_images/` and `toyota_logo.png`
- Responsibility: static image assets used across pages. They are imported in JS and bundled by the CRA webpack setup.
- Talking points: local bundling makes the demo self-contained (no network dependencies) and fast.

---

## Demo scripts & suggested live-run steps (2–3 minute flow)

1. Start dev server:

```powershell
npm start
```

2. Demo flow (suggested narration):
  - Show the Home hero: explain product goal and quick architecture (React + utils separation).
  - Click "Start Your Journey" → fill the questionnaire with a sample user:
    - Income: $50,000
    - Credit Score: prime
    - Down Payment: $2,500
    - Loan Term: 36
    - Vehicle Type: No Preference
    - Financing Preference: Lease
  - Submit and land on Results. Explain that `Results` calls `getRecommendations(questionnaireData)` which runs the entire data-driven pipeline.
  - Point out one leasing plan: show the computed monthly payment and explain the termFactor*creditFactor formula used.
  - Select & Save a plan — then open My Plans and show persistence.

3. Optional: show Sign In and Save (explain localStorage mock-auth).

---

## Notes, edge cases & Q/A pointers for judges

- Security: Authentication and stored data are demo-only (localStorage). If judges ask about security, explain it's out-of-scope for the hackathon and show how you'd swap in an API-backed auth flow.
- Data fidelity: The engine uses hard-coded vehicle data in `recommendations.js`. For production you'd move that to a backend service and possibly a database for easier editing and analytics.
- Testing: The `apr.js` and `recommendations.js` are good candidates for unit tests (deterministic logic). If asked, explain that you can write unit tests to cover APR edge cases and the amortization formula.
- Extensibility: To change business rules (APR bands, term factors, or new vehicle entries) you only need to edit `utils/` data or the small mapping tables inside the utils — UI code remains unchanged.

---

If you'd like, I can also:
- Generate a short presenter one-pager you can print.
- Add inline labels on the Results page explaining why a plan was selected (e.g., "Meets your budget" / "Lower down payment required").
- Add unit tests for `computeLeaseMonthly` and `getAPRByCreditScore`.

---

Good luck with the hackathon — tell the judges the system was designed to be simple to adapt and easy to audit, with the finance math centralized in testable util modules.
