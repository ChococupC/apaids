var categories, words, puzzle_words;

var word_bank = [
  {
    categories: [
      'Parasympathetic Nervous System', 
      'Characteristics and Drugs of Depressants', 
      'Hindbrain Sections', 
      'Reflex Formation'
    ],
    words: [
      [6, 14, 2, 8], 
      [15, 5, 7, 11], 
      [9, 12, 1, 4], 
      [3, 10, 16, 13]
    ],
    puzzle_words: [
      'Pons', 
      'Constricts Pupil',
      'Sensory Neuron',
      'Cerebellum',
      'Slow CNS',
      'Rest and Digest',
      'Drowsiness',
      'Stimulates Salivation',
      'RAS', 
      'Interneurone',
      'Lower Inhibition',
      'Medulla',
      'Muscle',
      'Lower Heart Rate',
      'Alcohol',
      'Motor Neuron'
    ],
  },
  {
    categories: [
      'Neurotransmitters', 
      'Neural Firing', 
      'Psychoactive Drug Characteristics', 
      'Ways to Examine the Brain'
    ],
    words: [
      [11, 14, 7, 2], 
      [3, 1, 9, 10], 
      [5, 13, 16, 12], 
      [8, 4, 15, 6]
    ],
    puzzle_words: [
      'All or None Law',
      'Dopamine',
      'Resting Potential', 
      'Surgery', 
      'Reward System',
      'EEG',
      'Acetylcholine',
      'Case Studies',
      'Active Potential',
      'Refractory Period',
      'GABA',
      'Withdrawal Symptoms',
      'Tolerance',
      'Glutamate',
      'fMRI', 
      'Physical Dependence'
    ],
  },
  {
    categories: [
      'Types of Sensation',
      'Perception _____ Constancy',
      'Benefits of Sleep',
      'Stroboscopic Movement'
    ],
    words: [
      [14, 9, 7, 6],
      [4, 16, 11, 1], 
      [5, 12, 3, 8],
      [2, 15, 10, 13]
    ],
    puzzle_words: [
      'Size',
      'Phi Phenomenon',
      'Protects',
      'Color', 
      'Restores',
      'Olfaction', 
      'Gustation',
      'Performs', 
      'Audition',
      'Flipbook',
      'Shape', 
      'Rejuvenates',
      'LED Signs',
      'Vision',
      'Animation', 
      'Brightness'
    ],
  },
  {
    categories: [
      'Humanistic Perspective',
      'Characteristics of Case Study',
      'Meta-Analysis',
      'Sleep Disorders'
    ], 
    words: [
      [3, 14, 7, 1],
      [11, 8, 13, 16],
      [12, 6, 4, 5],
      [2, 10, 15, 9]],
    puzzle_words: [
      'Inner Growth', 
      'Narcolepsy',
      'Potential',
      'Quantitative',
      'Combined Research',
      'Analytical',
      'Free-Will',
      'In-Depth',
      'Sleep Apnea',
      'Night Terrors',
      'Detailed',
      'Summarize Study',
      'Specific',
      'Self-Actualized',
      'Insomnia',
      'Prolonged'
    ],
  },
  {
    categories: [
      "Characteristics of Case Study",
      "Theories of Motivation",
      "Sensation Seeking Theories",
      "Anxiety Disorders",
    ],
    words: [
      [11, 14, 15, 4],
      [8, 6, 9, 7],
      [12, 3, 2, 5],
      [16, 1, 13, 10],
    ],
    puzzle_words: [
      "Panic Attack",
      "Disinhibition Theory",
      "Thrill & Adventure Seeking Theory",
      "Prolonged",
      "Boredom Susceptibility Theory",
      "Optimum Arousal Theory",
      "Cognitive Dissonance Theory",
      "Evolutionary Theory",
      "Drive Reduction Theory",
      "Phobia",
      "Specific",
      "Experience Seeking Theory",
      "PTSD",
      "Detailed",
      "In-Depth",
      "GAD",
    ],
  },
  {
    categories: [
      'Social-Cultural Perspective', 
      'Nervous System Divisions',
      'Stages of Sleep',
      'Causes of Insomnia'
    ], 
    words: [
      [5, 13, 7, 12],
      [15, 16, 9, 4],
      [1, 3, 2, 10],
      [8, 6, 11, 14]
    ], 
    puzzle_words: [
      'NREM 1',
      'NREM 2',
      'NREM 3',
      'Parasympathetic',
      'Culture',
      'Diet / Medication',
      'Society',
      'Stress',
      'Sympathetic',
      'REM',
      'Irregular Sleep Schedule',
      'Schema',
      'Gender-role',
      'Pain / Illness',
      'Somatic',
      'Central'
    ],
  },
  {
    categories: [
      "Characteristics of the Sympathetic Nervous System",
      "Key Characteristics of Anxiety",
      "Limbic System",
      "Type of Stressors",
    ],
    words: [
      [4, 6, 7, 12],
      [1, 8, 10, 14],
      [15, 13, 3, 16],
      [9, 11, 2, 5],
    ],
    puzzle_words: [
      "Sadness",
      "Chronic Stressors",
      "Amygdala",
      "Physical Arousal",
      "Adverse Childhood Experiences",
      "Inhibits digestion",
      "Releases Epinephrine / Norepinephrine",
      "Tension",
      "Daily Hassles",
      "Irritable",
      "Life Changes/ Strains",
      "Increase Breathing",
      "Cerebellum",
      "Uncontrollable",
      "Hippocampus",
      "Thalamus",
    ],
  },
  {
    categories: [
      "Famous Animals being Experimented",
      "Statistics",
      "Describing a Correlation",
      "Ways to overcome bias",
    ],
    words: [
      [9, 6, 15, 16],
      [3, 12, 11, 4],
      [14, 1, 2, 8],
      [7, 5, 10, 13],
    ],
    puzzle_words: [
      "Coefficient",
      "Strength",
      "Mean",
      "Null Hypothesis",
      "Scientific Attitude",
      "HarLow's Monkeys",
      "Critical Thinking",
      "Context",
      "Pavlov's Dogs",
      "Operational Definition",
      "Normal Distribution",
      "Standard Deviation",
      "Statistical Reasoning",
      "Direction",
      "Skinner's Mice",
      "Skinner's Pigeons",
    ],
  },
  {
    categories: [
      "Ideas of Unconsciousness",
      "Things that Alter an Experiment",
      "Problem Solving Methods",
      "______ Variable",
    ],
    words: [
      [3, 13, 16, 11],
      [14, 5, 1, 4],
      [8, 12, 7, 2],
      [6, 10, 15, 9],
    ],
    puzzle_words: [
      "Psuedosicence",
      "Availability Heuristics",
      "Dreams",
      "Confirmation Bias",
      "Overconfidence",
      "Confound",
      "Insight",
      "Algorithms",
      "Dependent",
      "Controlled",
      "Implicit Memory",
      "Representative Heuristics",
      "Unacceptable Thoughts",
      "Hindsight Bias",
      "Independent",
      "Unaware Motive",
    ],
  },
  {
    categories: [
      "_____ Lobe",
      "Big Five Trait Theory",
      "Types of Neurotransmitters",
      "Foundations of Infant Development",
    ],
    words: [
      [10, 14, 15, 4],
      [8, 6, 12, 16],
      [9, 1, 2, 5],
      [7, 3, 13, 11],
    ],
    puzzle_words: [
      "GABA",
      "Serotonin",
      "Assimilation",
      "Temporal",
      "Endorphins",
      "Conscientiousness",
      "Accommodation",
      "Openness to Experience",
      "Acetylcholine",
      "Frontal",
      "Maturation",
      "Extraversion",
      "Schemas",
      "Parietal",
      "Ocipital",
      "Agreeableness",
    ],
  },
];

function categoryUpdate() {
  var originalDate = new Date("2025-04-16 00:00:00");
  var currentDate = new Date();
  var timeDifference = currentDate - originalDate;
  var daysDifference =
    Math.floor(timeDifference / (1000 * 3600 * 24)) % word_bank.length;
  wordBank(daysDifference);
}

function wordBank(daysDifference) {
  today_group = word_bank[daysDifference];
  categories = today_group.categories;
  words = today_group.words;
  puzzle_words = today_group.puzzle_words;
}

categoryUpdate();
