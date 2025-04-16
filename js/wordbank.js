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
      "Behavioral Perspective",
      "Humanistic Perspective",
      "Procedures an Experiment Contains",
      "Gestalt Grouping",
    ],
    words: [
      [1, 13, 5, 12],
      [14, 11, 4, 6],
      [2, 3, 9, 10],
      [7, 15, 8, 16],
    ],
    puzzle_words: [
      "Operant Conditioning",
      "Assignment",
      "Placebo",
      "Inner Growth",
      "B.F. Skinner",
      "Self-Actualized",
      "Closure",
      "Continuation",
      "Sample",
      "Hypothesis",
      "Free-Will",
      "Classical Conditioning",
      "Physical Learning",
      "Potential",
      "Similarity",
      "Connectedness",
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
      "Motivational Conflict",
      "Anxiety Disorders",
      "OCD Related Disorders",
      "_______ Motivation",
    ],
    words: [
      [5, 4, 1, 7],
      [15, 3, 14, 8],
      [16, 9, 2, 6],
      [12, 13, 10, 11],
    ],
    puzzle_words: [
      "Approach-Avoidance",
      "Trichotillomania",
      "PTSD",
      "Avoidance-Avoidance",
      "Approach-Approach",
      "Body Dysmorphic Disorder",
      "Multiple Approach Avoidance",
      "Phobia",
      "Excoriation Disorder",
      "Intrinsic",
      "Extrinsic",
      "High Achievement",
      "Low Achievement",
      "Panic Attack",
      "GAD",
      "Hoarding Disorder",
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
  var originalDate = new Date("2025-04-15 00:00:00");
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
