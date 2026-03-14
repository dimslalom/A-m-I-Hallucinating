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
    explanationRight: 'Spotted it. B is pure bot energy: invented stats, hashtag graveyard, zero chaos. Real students have anxiety spirals, not productivity metrics. Your BS detector is working.',
    explanationWrong: 'B was the bot. "2.3 hours saved per assignment" and hashtag spam are dead giveaways. Real people don\'t narrate their life like a case study. Next time, look for messiness over polish.',
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
    explanationRight: 'A is the fake and you nailed it. "4.2 fabricated facts per document" is absurdly precise. Real research gets weird and inconclusive. B sounds confused because actual fieldwork is confusing.',
    explanationWrong: 'A was the AI. The tell: impossibly tidy numbers. 1,847 submissions, exactly 4.2 hallucinations per doc. Real data never comes out that clean. If the stats look suspiciously precise, treat them as suspect.',
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
    explanationRight: 'B is the phantom and you clocked it. Real journal, convincing DOI, zero actual paper. A is the Stochastic Parrots paper, genuinely famous and genuinely checkable. Good eye.',
    explanationWrong: 'B was the fake. The journal is real, the format is perfect, the paper does not exist. AI nails the packaging and invents the product. Next time, paste the DOI into a browser before you trust it.',
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
    explanationRight: 'B is the bot and you got it. Nobody says "implementation of verification protocols" out loud. A has a specific joke and an analogy you\'ll actually remember. Humans teach with stories; AI teaches with vibes.',
    explanationWrong: 'B was the bot. "Utilise, implement, leverage" are AI\'s favourite verbs. Real lecturers use bad analogies and specific examples. If every bullet sounds like a LinkedIn post, be skeptical.',
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
    explanationRight: 'B is real and you picked it. Lowercase, exasperated, "the judge was not amused." That\'s someone who was actually horrified, not filing a press release. Solid read.',
    explanationWrong: 'A was the bot. It covers the event like a news summary rather than a reaction. B is how real people process genuine horror: lowercase, tired, specific. Look for emotion, not coverage.',
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
    explanationRight: 'B is real and you got it. "The author name is slightly wrong" is the kind of detail only an eyewitness notices. A is technically accurate and completely soulless. Great instinct.',
    explanationWrong: 'A was the bot. It explains hallucination as a concept; B experienced it in real life. That one word "slightly" in B makes it real. AI describes categories. Humans describe moments.',
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
    explanationRight: 'B is the AI and you spotted it. 87.3 to 94.6 percent accuracy, 2.1 to 4.7 false positives, way too tidy. A found anxious students and no clean takeaway. Real findings complicate things.',
    explanationWrong: 'B was the fake. Numbers that precise pointing to a conclusion that convenient is a bot classic. Real studies find that students are stressed and not deterred. If your data tells a perfect story, it probably is not true.',
  },

  // ── Q8: References ────────────────────────────────────────────────────────
  {
    type: 'reference',
    prompt: "One of these papers was invented by AI. Which one is it?",
    optionA: {
      heading: 'References',
      citation: 'Zhang, Y., & Williams, J. (2023). Detecting AI-generated academic content: A machine learning approach with 94.7% accuracy. Nature Machine Intelligence, 5(11), 1203–1215. https://doi.org/10.1038/s42256-023-00721-4',
    },
    optionB: {
      heading: 'References',
      citation: 'Vaswani, A., Shazeer, N., Parmar, N., Uszkoreit, J., Jones, L., Gomez, A. N., … Polosukhin, I. (2017). Attention is all you need. Advances in Neural Information Processing Systems, 30, 5998–6008.',
    },
    answer: 'A',
    explanationRight: 'A is the hallucination and you got it. "94.7% accuracy" in a paper title is the tell. B is "Attention Is All You Need," one of the most cited CS papers ever. You know your classics.',
    explanationWrong: 'A was the fake. AI loves putting suspiciously precise numbers in paper titles. Nature Machine Intelligence is a real journal; this paper is not in it. Look up every reference before you cite it. One search is enough.',
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
    explanationRight: 'A is the bot and you caught it. "Utilise, implement, leverage" with nothing specific behind them. B gives you an actual example and admits the AI will confidently lie. That\'s a real teacher.',
    explanationWrong: 'A was the bot. Every bullet sounds authoritative but tells you nothing you can use. B gives you a before/after prompt and a real warning: it will be wrong with confidence. Substance beats structure every time.',
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
    explanationRight: 'B is the policy bot and you nailed it. "Disciplinary proceedings and AI detection screening" is pure bureaucrat. A\'s hand filing for workers comp is genuinely funny. AI would never write that joke.',
    explanationWrong: 'B was the bot. Policy-speak and hashtag dumps are bot calling cards. A is someone who was specifically and hilariously annoyed. Real people vent; bots issue reminders.',
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
    explanationRight: 'A is the fake and you got it. A 2.7-fold improvement and 31.4% fewer errors is a product pitch, not research. B admitted the evidence is limited and the risks are real. That\'s what honest science looks like.',
    explanationWrong: 'A was the AI. Numbers that dramatic and results that clean do not come from real meta-analyses. Real healthcare research is full of caveats. If an abstract sounds like a press release, it probably was.',
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
    explanationRight: 'B is the phantom and you spotted it. Looks right, DOI and all, but the paper does not exist. A is Kahneman\'s "Thinking, Fast and Slow," impossible to fake. Clean catch.',
    explanationWrong: 'B was the fake. The format was perfect, which is exactly the problem. AI does not mess up the formatting; it makes up the content. Paste the DOI into a browser before you cite anything.',
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
    explanationRight: 'B is the bot and you picked the right one. "Comprehensive attribution is essential for transparency" is a lot of words that say nothing. A gives you an actual APA example and ends with real human sarcasm.',
    explanationWrong: 'B was the bot. It told you what category of thing to think about but gave you nothing specific. A has a real format, a real caveat about course-by-course differences, and an actual joke. Look for specifics over structure.',
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
    explanationRight: 'B is real and you got it. Dr. Kate Crawford is a legit AI researcher. "Will it work? Unclear." Real experts hedge. A reads like the Wikipedia intro to the same story.',
    explanationWrong: 'A was the bot. It summarised the EU AI Act like it is writing an explainer, not reacting to news. B admits she does not know if it will work. Confidence without caveats is usually a red flag.',
  },

  // ── Q15: Instagram ────────────────────────────────────────────────────────
  {
    type: 'instagram',
    prompt: 'Which post is from an actual student?',
    optionA: {
      username: 'studywithai.hub',
      avatarInitials: 'SW',
      avatarColor: '#5851db',
      imageGradient: ['#667eea', '#764ba2'],
      likes: '412',
      caption: 'AI is changing the way students study and we are HERE for it! ✨ Smarter workflows, better essays, and more time for what actually matters. Work smarter, not harder! 🚀📚',
      hashtags: '#StudySmarter #AILearning #AcademicSuccess #StudentLife #ProductivityHacks #FutureOfEducation',
      comments: 6,
      time: '1 DAY AGO',
    },
    optionB: {
      username: 'alex.nguyen.uq',
      avatarInitials: 'AN',
      avatarColor: '#e8956d',
      imageGradient: ['#f8cdda', '#f7971e'],
      likes: '847',
      caption: 'accidentally submitted the ai draft instead of my actual essay. i have never moved so fast in my life to email a tutor. update: she replied within 4 mins. i owe her my whole degree',
      hashtags: '',
      comments: 31,
      time: '5 HOURS AGO',
    },
    answer: 'B',
    explanationRight: 'A is the content bot and you clocked it. "We are HERE for it" followed by six hashtags is pure AI page energy. B has a specific panic and a four-minute reply. That is real life.',
    explanationWrong: 'A was the bot. Hashtag dumps and phrases like "work smarter, not harder" are AI content-farm signatures. B is someone whose hands were shaking while typing. Real people do not caption their anxiety with productivity advice.',
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
    explanationRight: 'B is fabricated and you got it. Real journal, plausible authors, zero actual paper. A is LeCun, Bengio, and Hinton with 70,000+ citations. Hard to fake that energy.',
    explanationWrong: 'B was the fake. The journal exists, the authors sound real, the paper is not there. AI fakes the vibe of credibility without the substance. Check at least one citation next time. Just one.',
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
    explanationRight: 'B is the bot and you picked the right one. "Consult your data governance framework" is the answer that tells you to find the answer somewhere else. A gives you a specific rule you will actually use.',
    explanationWrong: 'B was the bot. It listed legal obligations without telling you anything actionable. A gives you the clause most people miss and a rule of thumb you can remember. AI knows how compliance advice sounds; it does not know what you need.',
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
    explanationRight: 'A is the bot and you caught it. "67% faster, 89% satisfaction retention" with no source because there is no source. B is a real person dealing with a real pay cut. "AI slop" is not something AI would call itself.',
    explanationWrong: 'A was the bot. Those stats were invented on the spot. B is a designer losing income in real time. Sourceless percentages are a bot classic. Ask where the number came from before you share it.',
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
    explanationRight: 'B is the AI and you spotted it. "Compelling evidence for widespread adoption" is a sales pitch. A found no significant difference (p = .43), a null result, which is exactly what honest experimental research actually looks like.',
    explanationWrong: 'B was the fake. Effect sizes that large and conclusions that strong do not come from one study. A found students completed more drafts but did not write better. Null results are real results. Distrust studies that only ever win.',
  },

  // ── Q20: Instagram ────────────────────────────────────────────────────────
  {
    type: 'instagram',
    prompt: 'Which caption was written by a real person?',
    optionA: {
      username: 'bec.writes.things',
      avatarInitials: 'BW',
      avatarColor: '#2d6a4f',
      imageGradient: ['#a8edea', '#fed6e3'],
      likes: '2,103',
      caption: 'day 4 of using chatgpt for my thesis and i think we\'ve reached the stage where it understands my research better than i do. not sure if this is impressive or a personal failure',
      hashtags: '',
      comments: 67,
      time: '2 DAYS AGO',
    },
    optionB: {
      username: 'smartstudent.official',
      avatarInitials: 'SS',
      avatarColor: '#f4a261',
      imageGradient: ['#ffecd2', '#fcb69f'],
      likes: '1,287',
      caption: 'Unlocking your academic potential has never been easier! 💡 Harness the transformative power of AI to elevate your thesis, streamline your research process, and achieve the academic excellence you deserve. The future of learning is here! 🌟',
      hashtags: '#ThesisLife #AIProductivity #StudyMotivation #AcademicSuccess #SmartStudent #Empowered',
      comments: 14,
      time: '3 DAYS AGO',
    },
    answer: 'A',
    explanationRight: 'B is the bot and you got it. "Harness the transformative power" to "achieve the excellence you deserve" is a LinkedIn post wearing a student\'s clothes. A is someone quietly having an existential crisis about their thesis. That\'s real.',
    explanationWrong: 'B was the bot. Six hashtags and phrases like "unlocking your potential" are AI content-page classics. A has no hashtags, no emojis, and one very specific worry. Real people do not caption their problems with empowerment slogans.',
  },

];
