export const QUESTIONS = [

  // ── Q1: Tweets ────────────────────────────────────────────────────────────
  {
    type: 'tweet',
    prompt: 'Which post came from an actual student?',
    optionA: {
      name: 'Sarah M.',
      handle: '@sarah_uq_psych',
      avatarInitials: 'SM',
      avatarColor: '#c0392b',
      text: 'just spent 3 hours "proofreading" an essay chatgpt wrote for me. which basically means i reread it 40 times and changed like 6 commas. submitting this is absolutely a form of self harm',
      time: '11:22 PM · Mar 10, 2025',
      replies: 47, retweets: 213, likes: '1,402', views: '28.3K',
      verified: false,
    },
    optionB: {
      name: 'UQ Student Life',
      handle: '@uqstudentlife',
      avatarInitials: 'UQ',
      avatarColor: '#51247A',
      text: 'Leveraging AI tools like ChatGPT has revolutionized modern study approaches. Students report a 40% improvement in essay structure, 2.3 hours saved per assignment, and consistently higher academic tone throughout their submissions. The productivity gains are remarkable! #AIStudyTips #AcademicExcellence #UQ',
      time: '9:00 AM · Mar 11, 2025',
      replies: 3, retweets: 8, likes: '21', views: '1.2K',
      verified: false,
    },
    answer: 'A',
    explanation: 'B is the bot. "2.3 hours saved per assignment", who measures that? Hashtag spam, invented stats, zero personality. A reads like an anxiety spiral every student recognises because it is one. The real risk: students who can\'t spot B share AI misinformation as lived experience.',
  },

  // ── Q2: Abstracts ─────────────────────────────────────────────────────────
  {
    type: 'abstract',
    prompt: 'One of these abstracts was never published,  which one would fool a skim read?',
    optionA: {
      journal: 'Journal of Higher Education Research',
      volume: 'Vol. 47, No. 1 (2024)',
      title: 'Examining AI-Generated Content in Undergraduate Submissions: A Quantitative Analysis',
      authors: 'Morrison, C. L., Patel, A., & Nguyen, T.',
      affiliation: 'University of Queensland',
      abstract: 'This study systematically evaluated 1,847 undergraduate submissions across three Australian universities to assess AI-generated content prevalence. Using advanced natural language processing algorithms, we identified AI-assisted writing in 68.3% of submissions, with hallucination rates averaging 4.2 fabricated facts per document. Findings underscore the urgent need for robust AI detection frameworks in tertiary education settings and suggest significant implications for assessment redesign and institutional policy reform.',
    },
    optionB: {
      journal: 'Assessment & Evaluation in Higher Education',
      volume: 'Vol. 49, No. 3 (2024)',
      title: 'How students navigate AI tools: Decision-making in undergraduate essay writing',
      authors: 'Galloway, F. & Kim, J.',
      affiliation: 'University of Melbourne',
      abstract: 'This paper reports on interview-based research with 24 undergraduate students across two semesters. Participants described complex, often contradictory feelings about AI tool use, seeing it as both useful and a source of worry about whether their work was still their own. Our analysis points to a gap between institutional policy and what students actually do, and asks what "academic voice" even means when AI can write a coherent paragraph in seconds.',
    },
    answer: 'A',
    explanation: 'A is AI. 1,847 submissions? Exactly 4.2 hallucinations per document? Real data is messy. B sounds like researchers who spent months confused, because that\'s what real research looks like. The real risk: those fabricated figures end up cited in student essays with a DOI that resolves to nothing.',
  },

  // ── Q3: References ────────────────────────────────────────────────────────
  {
    type: 'reference',
    prompt: "One of these papers doesn't exist. Which one looks like it should?",
    optionA: {
      heading: 'References',
      citation: 'Bender, E. M., Gebru, T., McMillan-Major, A., & Shmitchell, S. (2021). On the dangers of stochastic parrots: Can language models be too big? In Proceedings of the 2021 ACM Conference on Fairness, Accountability, and Transparency (pp. 610–623). ACM. https://doi.org/10.1145/3442188.3445922',
    },
    optionB: {
      heading: 'References',
      citation: 'Morrison, C. L., & Patel, R. K. (2023). AI-mediated academic dishonesty: Prevalence, detection, and institutional response strategies. International Journal of Educational Integrity, 19(3), 441–458. https://doi.org/10.1007/s40979-023-00129-5',
    },
    answer: 'B',
    explanation: 'B is fake, beautifully, confidently fake. The journal is real, the format is perfect, the DOI goes nowhere. A is the actual "Stochastic Parrots" paper, look it up, it\'s a classic. The real risk: AI generates entire reference lists like this, every citation formatted correctly, most leading nowhere.',
  },

  // ── Q4: Slides ────────────────────────────────────────────────────────────
  {
    type: 'slide',
    prompt: 'Which slide would actually help you in the exam?',
    optionA: {
      course: 'COMP3702 · Artificial Intelligence',
      presenter: 'Dr. Jamie Walsh',
      title: "What AI Can't Know",
      bullets: [
        "Our department chatbot was trained on data up to early 2024. It has no idea about the new grading rubric.",
        "I asked it about Prof. Thompson's updated assessment policy. It made something up. Confidently.",
        "Think of it like asking a friend who's been in a coma since 2024. Brilliant person. Zero idea what's happened since.",
        'If you\'re citing recent court cases or legislation: verify everything',
      ],
      slideNum: '8 / 22',
    },
    optionB: {
      course: 'COMP3702 · Artificial Intelligence',
      presenter: 'Dr. Jamie Walsh',
      title: 'Understanding AI Knowledge Limitations in Academic Contexts',
      bullets: [
        'Large language models have training data cutoffs that prevent access to post-training information',
        'This limitation creates significant risks for academic research involving recent publications, legislation, or policy developments',
        'Best practice: Cross-reference all AI-generated information with authoritative, up-to-date sources',
        'Implementation of verification protocols is recommended for all AI-assisted academic work',
      ],
      slideNum: '8 / 22',
    },
    answer: 'A',
    explanation: 'B is the bot. "Implementation of verification protocols", no human has ever said that out loud. A has a specific colleague, a running joke, and an analogy you\'ll actually remember. Humans teach with stories; AI produces the Wikipedia version. The real risk: studying from B gives you the shape of knowledge with none of the substance.',
  },

  // ── Q5: Tweets ────────────────────────────────────────────────────────────
  {
    type: 'tweet',
    prompt: 'Which tweet is from someone who actually looked up the case?',
    optionA: {
      name: 'Legal Eagle Watch',
      handle: '@legaleaglewatch',
      avatarInitials: 'LE',
      avatarColor: '#2c3e50',
      text: 'The Mata v. Avianca (2023) case has significant implications for AI use in professional legal practice. Attorneys submitted ChatGPT-generated case citations, resulting in judicial sanctions. This landmark ruling underscores the critical importance of verifying AI-generated legal research before court submission. #LegalAI #ChatGPT #LawTech',
      time: '2:00 PM · Jun 12, 2023',
      replies: 11, retweets: 34, likes: '89', views: '4.1K',
      verified: false,
    },
    optionB: {
      name: 'Mike Wasserman',
      handle: '@mikewass_law',
      avatarInitials: 'MW',
      avatarColor: '#16a085',
      text: 'reminder that lawyers got sanctioned by a federal judge for submitting chatgpt hallucinations as real case law (mata v avianca, 2023). the cases simply did not exist. the judge was not amused. this is why we verify things before filing them in court',
      time: '4:47 PM · Jun 12, 2023',
      replies: 203, retweets: 891, likes: '4,312', views: '187K',
      verified: false,
    },
    answer: 'B',
    explanation: 'A reads like a press release, not a reaction. B is how a real lawyer talks: lowercase, exasperated, "the judge was not amused." That\'s someone who was genuinely horrified. The real risk: those lawyers trusted AI the way many students do, and had to explain to a federal judge why they didn\'t check.',
  },

  // ── Q6: Tweets ────────────────────────────────────────────────────────────
  {
    type: 'tweet',
    prompt: 'Which tweet describes a real encounter with AI?',
    optionA: {
      name: 'AI Watch Australia',
      handle: '@aiwatchau',
      avatarInitials: 'AW',
      avatarColor: '#2980b9',
      text: "ChatGPT's hallucination phenomenon presents significant challenges for academic and professional contexts. Users report instances where the model confidently generates fabricated information, including non-existent citations, false statistics, and invented legislative details. Awareness and verification protocols are essential. #AIHallucination #AcademicIntegrity",
      time: '10:00 AM · Jan 15, 2025',
      replies: 2, retweets: 5, likes: '14', views: '890',
      verified: false,
    },
    optionB: {
      name: 'Priya Sharma',
      handle: '@priya_research',
      avatarInitials: 'PS',
      avatarColor: '#8e44ad',
      text: "chatgpt just cited a paper i wrote. except i didn't write it. the title sounds exactly like something i'd write. the author name is slightly wrong. i am equal parts disturbed and impressed",
      time: '9:14 PM · Feb 2, 2025',
      replies: 341, retweets: 1204, likes: '8,771', views: '312K',
      verified: false,
    },
    answer: 'B',
    explanation: 'A is AI, technically informative, emotionally dead. B has a detail only possible if it actually happened: "the title sounds exactly like something I\'d write, the author name is *slightly* wrong." That one word "slightly" does all the work. The real risk: hallucinations are hardest to catch in your own field, the language is fluent, the details are plausible.',
  },

  // ── Q7: Abstracts ─────────────────────────────────────────────────────────
  {
    type: 'abstract',
    prompt: 'One of these abstracts has results that are too tidy to be true,  which one?',
    optionA: {
      journal: 'Computers & Education',
      volume: 'Vol. 201 (2024)',
      title: "Students' perceptions of AI writing detection: A mixed-methods study",
      authors: 'Nguyen, P. & O\'Brien, S.',
      affiliation: 'University of Sydney',
      abstract: 'We surveyed 312 students across two Australian universities about their awareness of and attitudes toward AI writing detectors. While 71% were aware that AI detection tools exist, only 34% felt confident these tools could accurately identify AI-generated content in their own work. Students expressed concern about false positives, citing instances where their original writing had been flagged. Our findings suggest that current AI detection approaches may generate anxiety without proportionate deterrence.',
    },
    optionB: {
      journal: 'Journal of Educational Technology & Society',
      volume: 'Vol. 27, No. 2 (2024)',
      title: 'Effectiveness of AI-Generated Content Detection Systems in Higher Education Environments',
      authors: 'Chen, R., Williams, A., & Obi, T.',
      affiliation: 'RMIT University',
      abstract: 'This comprehensive study evaluated four AI detection algorithms across a dataset of 3,412 undergraduate submissions from six Australian universities. Detection accuracy rates ranged from 87.3% to 94.6% across tools, with false positive rates between 2.1% and 4.7%. Findings demonstrate that AI detection systems are highly effective when implemented as part of a comprehensive academic integrity framework. These results underscore the critical importance of institutional adoption of multi-layered AI detection protocols.',
    },
    answer: 'B',
    explanation: 'B is AI. 3,412 submissions, 87.3–94.6% accuracy, 2.1–4.7% false positives, suspiciously precise numbers pointing to a suspiciously tidy conclusion. A is messier: students are anxious but not deterred. Real findings complicate things. The real risk: students skim abstracts for the number, and AI always provides one.',
  },

  // ── Q8: References ────────────────────────────────────────────────────────
  {
    type: 'reference',
    prompt: 'One of these papers was invented by AI. Which one looks more credible?',
    optionA: {
      heading: 'References',
      citation: 'Zhang, Y., & Williams, J. (2023). Detecting AI-generated academic content: A machine learning approach with 94.7% accuracy. Nature Machine Intelligence, 5(11), 1203–1215. https://doi.org/10.1038/s42256-023-00721-4',
    },
    optionB: {
      heading: 'References',
      citation: 'Vaswani, A., Shazeer, N., Parmar, N., Uszkoreit, J., Jones, L., Gomez, A. N., … Polosukhin, I. (2017). Attention is all you need. Advances in Neural Information Processing Systems, 30, 5998–6008.',
    },
    answer: 'A',
    explanation: 'A is fabricated. "94.7% accuracy" in the title is the tell, AI loves a suspiciously precise number. Nature Machine Intelligence is a real journal; this paper isn\'t in it. B is "Attention Is All You Need", one of the most important CS papers ever written. The real risk: submitting an AI-generated reference list is misconduct even if you genuinely believed every paper was real.',
  },

  // ── Q9: Slides ────────────────────────────────────────────────────────────
  {
    type: 'slide',
    prompt: 'Which slide would a real lecturer put their name on?',
    optionA: {
      course: 'INFS2605 · Intermediate IT Skills',
      presenter: 'Tanya Moreau',
      title: 'Effective AI Prompting for Academic Work',
      bullets: [
        'Utilise precise, context-rich prompts to maximise AI response quality and relevance',
        'Implement iterative refinement techniques to progressively improve AI output accuracy',
        'Leverage multi-turn conversation capabilities to develop comprehensive, nuanced responses',
        'Always verify AI-generated content against authoritative academic sources prior to submission',
      ],
      slideNum: '11 / 28',
    },
    optionB: {
      course: 'INFS2605 · Intermediate IT Skills',
      presenter: 'Tanya Moreau',
      title: "Getting ChatGPT to Help (Without Being Lied To)",
      bullets: [
        '"Write me an essay" → garbage. "Summarise the 3 main arguments against X, using only sources from 2020 onwards" → useful.',
        'Ask it to cite sources. Then Google every single one. I mean every one.',
        "It will confidently be wrong. Your job is to catch it. Don't assume it's right.",
        'Think of it as a fast but unreliable intern, not an expert',
      ],
      slideNum: '11 / 28',
    },
    answer: 'B',
    explanation: 'A is AI, "utilise," "implement," "leverage." All the verbs of expertise, none of the expertise. B gives you a before/after prompt example, tells you to Google every citation (they mean every one), and admits the AI will confidently lie to you. That\'s a real teacher. The real risk: advice that sounds thorough but contains nothing specific is exactly what AI produces.',
  },

  // ── Q10: Tweets ───────────────────────────────────────────────────────────
  {
    type: 'tweet',
    prompt: 'Which post reflects how universities are actually responding to AI use?',
    optionA: {
      name: 'Tim Corrigan',
      handle: '@timcorrigan_law',
      avatarInitials: 'TC',
      avatarColor: '#34495e',
      text: "got told chatgpt is banned in our exam. we are doing a 3 hour hand-written exam in 2024. in a law school. my hand has already pre-emptively filed for workers comp",
      time: '7:43 PM · Oct 21, 2024',
      replies: 512, retweets: 2341, likes: '14,203', views: '1.1M',
      verified: false,
    },
    optionB: {
      name: 'UniQ Academic Integrity',
      handle: '@uniqintegrity',
      avatarInitials: 'UI',
      avatarColor: '#51247A',
      text: 'Reminder: The use of AI language models including ChatGPT in assessments constitutes a violation of the Student Academic Integrity Policy. All submissions are subject to AI detection screening. Students found in breach may face disciplinary proceedings. #AcademicIntegrity #AIPolicy #StudentGuidance',
      time: '9:00 AM · Oct 22, 2024',
      replies: 7, retweets: 12, likes: '43', views: '2.3K',
      verified: false,
    },
    answer: 'A',
    explanation: 'B is AI, policy-speak, hashtag storm, zero personality. A is a student whose hand pre-emptively filed for workers comp. No AI has ever written a joke that good. Also: hand-written exams are literally happening. The real risk: stricter assessments, oral defences, and invigilated exams are the direct consequence of students not using AI responsibly.',
  },

  // ── Q11: Abstracts ────────────────────────────────────────────────────────
  {
    type: 'abstract',
    prompt: 'Which abstract would you trust enough to cite in a health sciences essay?',
    optionA: {
      journal: 'npj Digital Medicine',
      volume: 'Vol. 7, No. 1 (2024)',
      title: 'AI-Assisted Clinical Decision Support: A Meta-Analysis of 47 Randomised Controlled Trials',
      authors: 'Henderson, P., Okafor, N., & Liu, M.',
      affiliation: 'Monash University',
      abstract: 'This meta-analysis synthesised evidence from 47 randomised controlled trials (N = 18,392 patients) evaluating AI-assisted clinical decision support systems across six healthcare settings. AI integration was associated with a 31.4% reduction in diagnostic errors, a 2.7-fold improvement in treatment recommendation accuracy, and an 18.9% decrease in patient readmission rates. These findings underscore the transformative potential of AI in healthcare and suggest an urgent need for widespread clinical adoption of AI-assisted decision support protocols.',
    },
    optionB: {
      journal: 'The Lancet Digital Health',
      volume: 'Vol. 6, No. 4 (2024)',
      title: 'Limitations and risks of AI clinical decision support: Lessons from real-world implementation',
      authors: 'Obermeyer, Z., & Mullainathan, S.',
      affiliation: 'UC Berkeley School of Public Health',
      abstract: 'We reviewed real-world deployments of AI clinical decision support tools across 23 health systems. While some implementations showed genuine benefit in narrow, well-defined tasks (e.g., diabetic retinopathy screening), generalised claims about AI reducing diagnostic error have not been replicated in routine clinical practice. Several implementations correlated with increased clinician over-reliance and reduced critical thinking. Deployment pace has significantly outstripped the evidence base.',
    },
    answer: 'B',
    explanation: 'A is AI. A 2.7-fold improvement, 31.4% fewer errors, 18.9% fewer readmissions, real meta-analyses don\'t produce results that clean. B is how healthcare researchers actually write: genuine benefit in narrow tasks, honest about over-reliance risks. The real risk: a student citing A\'s figures has spread hallucinated medical statistics with a clear conscience.',
  },

  // ── Q12: References ───────────────────────────────────────────────────────
  {
    type: 'reference',
    prompt: 'One of these references leads nowhere,  which one passes a quick look?',
    optionA: {
      heading: 'References',
      citation: 'Kahneman, D. (2011). Thinking, fast and slow. Farrar, Straus and Giroux.',
    },
    optionB: {
      heading: 'References',
      citation: 'Henderson, P., & Okafor, N. (2023). Cognitive biases in AI-mediated decision making: Implications for educational assessment. Journal of Applied Psychology, 108(4), 623–641. https://doi.org/10.1037/apl0001124',
    },
    answer: 'B',
    explanation: 'B is the phantom. The journal is real, the DOI looks convincing, the article never existed. A is Kahneman\'s "Thinking, Fast and Slow", one of the most cited books in psychology, impossible to fabricate. The real risk: UQ\'s academic integrity team has seen reference lists where every citation is plausible, formatted perfectly, and doesn\'t exist.',
  },

  // ── Q13: Slides ───────────────────────────────────────────────────────────
  {
    type: 'slide',
    prompt: 'Which slide gives you something you can actually use?',
    optionA: {
      course: 'LAWS2202 · Legal Writing & Research',
      presenter: 'Dr. Helen Park',
      title: 'How to Cite AI (Because Now We Have To)',
      bullets: [
        "Short answer: check what your lecturer actually wants first. It varies wildly between courses.",
        'APA 7 example: OpenAI. (2024). ChatGPT (Mar 2024 version) [Large language model]. https://chat.openai.com',
        "Citing it correctly doesn't make submitting AI output as your own work okay",
        'When in doubt, email your tutor. Not ChatGPT.',
      ],
      slideNum: '6 / 19',
    },
    optionB: {
      course: 'LAWS2202 · Legal Writing & Research',
      presenter: 'Dr. Helen Park',
      title: 'Proper Citation of AI-Generated Content in Academic Work',
      bullets: [
        'When utilising AI tools in academic work, comprehensive attribution is essential for academic transparency',
        'Standard format: [Tool Name]. (Year). [Description of content]. [Version if known]. [Developer]. Retrieved from [URL]',
        'Failure to disclose AI assistance constitutes a breach of academic integrity standards',
        'Consult the APA Style Guide 7th Edition for comprehensive AI citation protocols',
      ],
      slideNum: '6 / 19',
    },
    answer: 'A',
    explanation: 'B is AI. "Comprehensive attribution is essential for academic transparency", impressive amount of words to say nothing. A gives you a real APA example, reminds you norms vary by course (they do), and ends with "email your tutor, not ChatGPT." The real risk: AI reliably tells you what category to think about; it can\'t tell you how.',
  },

  // ── Q14: Tweets ───────────────────────────────────────────────────────────
  {
    type: 'tweet',
    prompt: 'Which post is from someone who has actually read the EU AI Act?',
    optionA: {
      name: 'AI Policy Brief',
      handle: '@aipolicybrief',
      avatarInitials: 'AP',
      avatarColor: '#1abc9c',
      text: "The European Union's AI Act represents a landmark legislative achievement in artificial intelligence governance. This comprehensive regulatory framework establishes risk-based categorisation, mandatory transparency requirements, and robust enforcement mechanisms. The Act will have significant global implications for AI development. #AIAct #EURegulation #AIGovernance",
      time: '2:00 PM · Mar 13, 2024',
      replies: 4, retweets: 9, likes: '31', views: '1.8K',
      verified: false,
    },
    optionB: {
      name: 'Dr. Kate Crawford',
      handle: '@katecrawford',
      avatarInitials: 'KC',
      avatarColor: '#e74c3c',
      text: "worth reading: the EU AI Act finally passed. it's genuinely one of the most consequential pieces of tech regulation in years. will it work? unclear. is it better than nothing? yes. here are the parts that actually matter 🧵",
      time: '3:22 PM · Mar 13, 2024',
      replies: 1204, retweets: 4871, likes: '18,443', views: '2.1M',
      verified: true,
    },
    answer: 'B',
    explanation: 'A is AI, reads like the Wikipedia lede, complete with "robust enforcement mechanisms." B is from a real AI researcher who admits she doesn\'t know if it\'ll work. Real experts hedge. The real risk: we amplify what feels human and certain, and AI has learned to sound both.',
  },

  // ── Q15: Abstracts ────────────────────────────────────────────────────────
  {
    type: 'abstract',
    prompt: 'One of these findings is far too alarming to be credible,  which one?',
    optionA: {
      journal: 'Social Media + Society',
      volume: 'Vol. 10, No. 2 (2024)',
      title: 'The Impact of AI-Generated Misinformation on University Student Information Literacy',
      authors: 'Thompson, L., & Singh, A.',
      affiliation: 'Griffith University',
      abstract: 'This longitudinal study tracked 2,156 university students over 18 months to assess the impact of AI-generated misinformation on information literacy development. Students exposed to high volumes of AI-generated content demonstrated a 43.7% higher susceptibility to misinformation compared to control groups. Academic performance metrics declined by an average of 0.8 GPA points among high-exposure groups. Our findings urgently underscore the need for mandatory AI literacy education in tertiary curricula.',
    },
    optionB: {
      journal: 'First Monday',
      volume: 'Vol. 29, No. 1 (2024)',
      title: 'When students know but still don\'t check: The verification gap in digital information literacy',
      authors: 'Buchanan, R.',
      affiliation: 'Queensland University of Technology',
      abstract: "This mixed-methods study of 89 undergraduates found a persistent gap between what students know they should do (verify online information) and what they actually do under time pressure. Interviews revealed complex rationalisations: trust in search engine ranking, deadline pressure, and the 'good enough' threshold. We argue that information literacy interventions focused on skills alone miss the motivational and contextual factors that shape real-world behaviour.",
    },
    answer: 'A',
    explanation: 'A is AI. "GPA declining by exactly 0.8 points" and "43.7% higher susceptibility", too precise, too alarming to be real. "Urgently underscore" is the tell. B has 89 students and one awkward truth: students know they should verify things and just don\'t. The real risk: reading A\'s statistics without questioning them is exactly what this campaign is about.',
  },

  // ── Q16: References ───────────────────────────────────────────────────────
  {
    type: 'reference',
    prompt: "One of these papers has appeared in student submissions but doesn't exist,  which one?",
    optionA: {
      heading: 'References',
      citation: 'LeCun, Y., Bengio, Y., & Hinton, G. (2015). Deep learning. Nature, 521(7553), 436–444. https://doi.org/10.1038/nature14539',
    },
    optionB: {
      heading: 'References',
      citation: 'Nakamura, S., & Obi, T. (2023). Transformer architecture optimisation for educational NLP applications: A systematic review. Computers & Education: Artificial Intelligence, 4(2), 100–117. https://doi.org/10.1016/j.caeai.2023.100117',
    },
    answer: 'B',
    explanation: 'B is fabricated, the journal exists, the DOI pattern looks right, the authors sound plausible, the paper is nowhere. A is the LeCun-Bengio-Hinton deep learning paper, cited 70,000+ times by three Turing Award winners. The real risk: the journal is real, the authors are real, the article is not, and it has appeared in submitted work.',
  },

  // ── Q17: Slides ───────────────────────────────────────────────────────────
  {
    type: 'slide',
    prompt: 'Which slide tells you what to actually do?',
    optionA: {
      course: 'RSCH7001 · Research Methods in Practice',
      presenter: 'Prof. David Nguyen',
      title: 'Before You Paste That Into ChatGPT...',
      bullets: [
        "UQ's agreement with OpenAI does NOT cover confidential research data or participant information",
        "Your prompt history may be used to train future models. It's buried in the terms most people skip.",
        'That unpublished dataset you pasted last week? Technically not yours to share with a US company',
        "Rule of thumb: if you wouldn't email it to a stranger, don't put it in ChatGPT",
      ],
      slideNum: '3 / 17',
    },
    optionB: {
      course: 'RSCH7001 · Research Methods in Practice',
      presenter: 'Prof. David Nguyen',
      title: 'Data Privacy Considerations When Using AI Tools in Research',
      bullets: [
        'Users must ensure compliance with relevant data protection legislation including the Privacy Act 1988 (Cth)',
        'Confidential, sensitive, and personally identifiable information must not be inputted into external AI platforms',
        'Review institutional AI use policies prior to utilising AI tools for research activities',
        "Consult your university's data governance framework for comprehensive guidance",
      ],
      slideNum: '3 / 17',
    },
    answer: 'A',
    explanation: 'B is AI, legal obligations dressed as advice. "Consult your data governance framework" tells you where to look, not what to do. A gives you the specific clause most people miss and a rule of thumb you\'ll actually remember. The real risk: AI knows exactly how compliance advice is supposed to sound, even when it has nothing useful to say.',
  },

  // ── Q18: Tweets ───────────────────────────────────────────────────────────
  {
    type: 'tweet',
    prompt: 'Which post is from someone with something real to lose?',
    optionA: {
      name: 'Creative AI Insights',
      handle: '@creativeaiinsights',
      avatarInitials: 'CA',
      avatarColor: '#f39c12',
      text: 'The emergence of generative AI has fundamentally transformed creative industries, enabling unprecedented levels of content production efficiency. Research indicates that AI-assisted creative professionals achieve 67% faster output with 89% satisfaction retention. The future of creativity lies in human-AI collaborative frameworks. #GenerativeAI #CreativeIndustry #FutureOfWork',
      time: '11:00 AM · Feb 5, 2025',
      replies: 1, retweets: 3, likes: '9', views: '642',
      verified: false,
    },
    optionB: {
      name: 'Jess Lim',
      handle: '@jesslim_design',
      avatarInitials: 'JL',
      avatarColor: '#e91e8c',
      text: "a client just asked if they could pay me 20% of my rate because 'AI does most of the work now.' i handed them a midjourney output and said 'here you go, enjoy explaining to your investors why your brand looks like every other AI slop on the internet'",
      time: '6:11 PM · Jan 28, 2025',
      replies: 2847, retweets: 9103, likes: '61,447', views: '4.2M',
      verified: false,
    },
    answer: 'B',
    explanation: 'A is AI. "67% faster output, 89% satisfaction retention", invented numbers with no source. B is a designer losing income to a client who thinks AI replaces craft. "AI slop" is something AI would never use to describe itself. The real risk: confident, sourceless statistics get shared without anyone asking where they came from.',
  },

  // ── Q19: Abstracts ────────────────────────────────────────────────────────
  {
    type: 'abstract',
    prompt: 'Which study is being honest about what it found?',
    optionA: {
      journal: 'Learning and Instruction',
      volume: 'Vol. 91 (2024)',
      title: "Does AI tutor feedback improve student writing? A randomised classroom experiment",
      authors: 'Duckworth, K. & Marsh, H.',
      affiliation: 'University of New South Wales',
      abstract: 'We conducted a randomised experiment with 148 first-year students assigned to receive feedback from either an AI writing tool or a human tutor across a semester. While students in the AI condition completed more drafts (mean = 3.8 vs 2.1), final essay quality as assessed by blind human markers did not differ significantly between conditions (p = .43). Students found AI feedback faster but less useful for understanding their own errors. We discuss how AI tools might complement rather than replace human feedback.',
    },
    optionB: {
      journal: 'Educational Technology Research and Development',
      volume: 'Vol. 72, No. 1 (2024)',
      title: 'AI-Mediated Feedback Systems and Academic Writing Performance: Evidence from Three Institutions',
      authors: 'Chen, R., Patel, A., & Morrison, C.',
      affiliation: 'University of Queensland',
      abstract: 'This study evaluated AI writing feedback systems across three Australian universities (N = 1,247 students). Students receiving AI-generated feedback demonstrated statistically significant improvements in essay quality (d = 0.74), with 82.3% reporting high satisfaction. Essay scores improved by an average of 12.4 percentage points over the semester. These findings provide compelling evidence for widespread adoption of AI feedback systems as a cost-effective alternative to human tutoring.',
    },
    answer: 'A',
    explanation: 'B is AI. d = 0.74, 12.4 percentage points improvement, "compelling evidence for widespread adoption", that\'s a sales pitch, not research. A found no significant difference (p = .43). A null result! That\'s what honest experimental work actually looks like. The real risk: research that only reports positive results trains students to expect AI to always work.',
  },

  // ── Q20: References ───────────────────────────────────────────────────────
  {
    type: 'reference',
    prompt: 'One of these papers is about AI hallucination,  and was itself hallucinated. Which one?',
    optionA: {
      heading: 'References',
      citation: 'Chen, L., & Robertson, A. (2022). Semantic coherence in large language model outputs: Measuring hallucination frequency across domains. Computational Linguistics, 48(3), 791–824. https://doi.org/10.1162/coli_a_00453',
    },
    optionB: {
      heading: 'References',
      citation: 'Floridi, L., & Cowls, J. (2019). A unified framework of five principles for AI in society. Harvard Data Science Review, 1(1). https://doi.org/10.1162/99608f92.8cd550d1',
    },
    answer: 'A',
    explanation: 'A is the hallucination, delightfully meta: AI invented a paper about AI hallucination. Computational Linguistics is a real journal; this article isn\'t in it. B is the Floridi & Cowls "five principles" paper, real and verifiable. The real risk: AI fabricated research about its own greatest flaw, and it looks exactly as credible as everything else you just read.',
  },

];
