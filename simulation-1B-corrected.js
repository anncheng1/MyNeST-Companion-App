// ── CORRECTED CASE 1B DATA OBJECT ─────────────────────────────────────────
// Replace the entire Case 1B object in the CASES array of simulation.html
// Corrections: Equipment Preparation aspect — CLEAR, VENTILATE, INTUBATE lines
// This is a 38-WEEK TERM baby → term equipment settings apply.

{
  id: '1B', title: 'The Midnight Call — Are You Ready?',
  color: 'c-navy', session: 'Session 1 · Foundations &amp; Pre-Birth',
  tag: 'Pre-birth preparation · Risk factors · Equipment check',
  presentation: [
    '02:30. The midwife calls: "Doctor — gravida 2 para 1, 38 weeks, gestational diabetes on insulin, now in active labour. Membranes ruptured 22 hours ago. CTG showing late decelerations for 20 minutes. Emergency Caesarean section in 15 minutes."',
    'You have 15 minutes. The resuscitation warmer has not been checked since the previous shift.',
  ],
  vitals: [
    { label: 'Gestation', val: '38 weeks' },
    { label: 'GDM', val: 'Insulin-dependent' },
    { label: 'ROM', val: '22 hours' },
    { label: 'CTG', val: 'Late decelerations ×20 min' },
    { label: 'Time to delivery', val: '~15 min' },
  ],
  phases: null,
  think: [
    'What are the 4 pre-birth questions?',
    'What risk factors are present?',
    'How many personnel should attend?',
    'What equipment must be checked before delivery?',
  ],
  discussion: [
    {
      aspect: 'Four Pre-Birth Questions',
      points: [
        '(1) 38 weeks — term; (2) amniotic fluid — 22 hours ROM, colour unknown; (3) multiple risk factors: GDM on insulin, prolonged PROM, late decelerations; (4) Cord Management plan — no contraindication for DCC.',
      ],
    },
    {
      aspect: 'Risk Factors Present',
      points: [
        'GDM on insulin, prolonged ROM (>18 hours), Category III CTG (late decelerations).',
      ],
    },
    {
      aspect: 'Staffing Requirement',
      points: [
        'Minimum 2 personnel including 1 with Advanced certification.',
        'The Advanced provider must arrive BEFORE delivery — call now, not when the baby is born.',
      ],
    },
    {
      aspect: 'Equipment Preparation',
      points: [
        'WARM: Warmer on, pre-heat linen.',
        'CLEAR: Suction 80–100 mmHg, 10F catheter.',         // ← CORRECTED: term = 10F
        'VENTILATE: T-piece PIP 25, PEEP 5, blender 21%, term mask.',  // ← CORRECTED: PIP 25, 21%, term mask
        'INTUBATE: Blade 1, ETT 3.5.',                        // ← CORRECTED: Blade 1, ETT 3.5 for term
        'MEDICATE: Adrenaline drawn up, NS 0.9% ready.',
      ],
    },
    {
      aspect: 'Role Allocation',
      points: [
        'Assign roles before delivery — Team Lead, Airway, Medications, Recorder.',
      ],
    },
  ],
  debrief: [
    { topic: 'Risk Recognition', prompt: 'How do you decide when to activate the full team?' },
    { topic: 'Equipment Familiarity', prompt: 'Walk through the equipment check sequence from memory — which category is most commonly missed?' },
    { topic: 'Team Communication', prompt: 'How would you assign roles with the team available? What if someone is delayed?' },
  ],
  leadsInto: 'Section 1.5 — Four pre-birth questions, risk factors, equipment preparation.',
},

// ── CHANGE SUMMARY ────────────────────────────────────────────────────────
// Equipment Preparation aspect — 3 corrections for a 38-week term baby:
//
// CLEAR:
//   OLD: 'CLEAR: Suction 80–100 mmHg, 8–10F catheter.'
//   NEW: 'CLEAR: Suction 80–100 mmHg, 10F catheter.'
//   WHY: 10F is the term suction catheter; 8F is preterm
//
// VENTILATE:
//   OLD: 'VENTILATE: T-piece PIP 20, PEEP 5, blender 30%, preterm mask.'
//   NEW: 'VENTILATE: T-piece PIP 25, PEEP 5, blender 21%, term mask.'
//   WHY: Term PPV starts at PIP 25 cmH₂O / FiO₂ 21% (air) / size 1 term mask
//        PIP 20 and 30% FiO₂ are preterm defaults; preterm mask is size 0
//
// INTUBATE:
//   OLD: 'INTUBATE: Blade 0, ETT 3.0.'
//   NEW: 'INTUBATE: Blade 1, ETT 3.5.'
//   WHY: Term ~3.2 kg / >34w → Blade 1 (Miller/Macintosh size 1),
//        ETT 3.5 mm ID (>2 kg / >34w per sizing table)
