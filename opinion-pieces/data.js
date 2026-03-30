/**
 * opinion-pieces/data.js
 * ──────────────────────────────────────────────────────────────────────────
 * This file contains all opinion pieces for the website.
 *
 * HOW TO ADD A NEW PIECE
 * ──────────────────────
 * 1. Copy the block below (from the opening { to the closing },)
 * 2. Paste it BEFORE the existing entry (newest first)
 * 3. Fill in: slug, title, tag, date, and content
 *
 * CONTENT FORMAT
 * ──────────────
 * Write the article as plain text inside the backtick string.
 * • Leave a blank line between paragraphs
 * • Start a line with  ##  (two hashes + space) to make a subheading
 *
 * Example entry:
 *
 *   {
 *     slug:    "my-new-article",
 *     title:   "My New Article Title",
 *     tag:     "Topic · Subtopic",
 *     date:    "March 2025",
 *     content: `
 * Opening paragraph text goes here.
 *
 * Second paragraph.
 *
 * ## A Subheading
 *
 * Paragraph under that subheading.
 *     `,
 *   },
 * ──────────────────────────────────────────────────────────────────────────
 */

window.OPINIONS = [
   {
    slug:  "Precision Diagnostics",
    title: "In Focus This Week",
    tag:   "Opinion · AI Synthesis & Insights",
    date:  "2026",
    content: `
The 'In Focus This Week' pieces are informed by MedAffairs Monitor, an AI-powered weekly literature monitoring agent I built on Claude. It tracks and synthesises new publications and industry developments across neurology, psychiatry, and regulatory affairs every week. It has become a way of staying close to the pulse of the industry, and a reminder that in medical affairs, it is not only important to stay informed, but to know how complex information can be filtered to guide decisions.


Telehealth arrived with a compselling promise: faster consultations, no waiting rooms, no commuting, and perhaps most importantly specialist care finally reaching the people who needed it most. For mental health in particular, where geography and stigma have long kept patients from getting help, it felt like a turning point in digital health.

But is there another side to it?

A new analysis of Medicare claims between 2018 and 2023 raises some uncomfortable questions. Mental health providers who switched fully to virtual care did not end up treating significantly more patients from rural or underserved areas. They mostly just kept seeing their existing patients but remotely. It seems that systemic barriers to access run deeper than a video link can fix. At least, that is what this data suggests.

And while that debate continues, the regulatory reality is catching up with a different part of the telehealth story.

In recent weeks, the FDA sent warning letters to 30 telehealth companies over misleading claims about compounded versions of popular GLP-1 weight-loss drugs. Medications like semaglutide (Wegovy, Ozempic) and tirzepatide (Mounjaro, Zepbound). These compounded versions are legal under the FD&C Act but are not FDA-approved. 

Several companies were apparently branding these drugs in ways that imitated original manufacturers and is something patients should reasonably informed about. The scrutiny extends beyond GLP-1s too, with topical finasteride also under the microscope.

Not only the FDA, but big pharmaceutical companies like Eli Lilly has separately flagged concerns about telehealth firms combining compounded tirzepatide with Vitamin B12, a combination that, as far as known, has never been studied. In the similar vein, this follows the action against a telehealth firm by Novo Nordisk in February this year, where the impurities in the compounded drugs and could bring many pateints more harm than health. 

I find myself wondering whether this is a turning point or just a speed bump. Telehealth expanded fast, perhaps before guardrails could keep up. The recent settlement between a major GLP-1 manufacturer and a leading telehealth firm suggests the regulatory pressure is starting to prick. As compounded drugs get squeezed out, patients are directed back to branded drugs. Whether patients who relied on compounded versions for affordability reasons will genuinely be protected in the process or simply left with fewer options feels like a question still worth asking.

On a more hopeful note, Compass Pathways reported Phase 3 results this week for COMP360 psilocybin therapy in treatment-resistant depression (TRD), and they are worth paying attention to.

TRD is defined as the failure to respond to two or more adequate courses of antidepressant treatment. It affects approximately 20-30% of all major depressive disorder patients — and the burden it places on both patients and healthcare systems is substantial. Studies across multiple countries report that TRD patients incur 1.5 to 2 times higher mean healthcare costs compared to patients whose depression responds to standard treatment (Heerlein et al., 2022; Akram et al., 2022; Pappa et al., 2024; Prasartpornsirichoke et al., 2023), and up to three times higher healthcare resource utilisation compared to non-TRD patients and the general population (Johnston et al., 2019; Jaffe, Rive, and Denee, 2019). To put a number on it: in one European study, mean costs were EUR 1,545 for TRD patients versus EUR 1,008 for non-TRD patients (Heerlein et al., 2022). Multiply that across a population, and the scale becomes hard to ignore.

Against that backdrop, the Phase 3 trial tested two fixed doses of COMP360 against placebo, reporting a mild to moderate adverse event profile.  If the data holds up under scrutiny, this could represent a meaningful shift in how we approach one of psychiatry's most stubborn and costly clinical challenges and a patient population that has been waiting a long time for better options may finally have something genuinely new to look forward to.


     `,
   },
 {
    slug:  "Precision Diagnostics",
    title: "The Most Expensive Medication Is The One That Does Not Work",
    tag:   "Opinion · Healthcare & Pharma",
    date:  "2026",
    content: `
## Why are we talking about this?
Recently, my husband told me that his ageing grandfather was diagnosed and medicated for dementia and psychosis. In his psychotic episodes, his symptoms ranged from delusion of grandeur to paranoia. Soon after taking the medication, his symptoms got better, but he suddenly started developing movement-related problems such as shorter strides and a tell-tale sign of Parkinson’s – the trembling of his hand while picking up a coffee mug. While paranoia and the ability to hold a cup of tea may seem like two unrelated things, they do have one thing in common: Dopamine. Dopamine (DA) is one of many chemical messengers that are part of human physiology, the neurotransmitters. Dopamine plays an integral role in ensuring a smooth, healthy functioning of our brain and our movements. DA is part of a complex tapestry of chemical and electrical communication that takes place between neurons and muscles in our body. Therefore, it is not trivial to understand its exact role. 

A healthy balance of such chemical messengers is essential for the proper functioning of our mind and body. Problems arise when there is an imbalance. Think of a plant that suffers from rotting of the roots when overwatered and from dehydration when underwatered. Similarly, too much DA can manifest as symptoms of psychosis, while too little dopamine can tilt the scale to induce difficulty in movement. Antipsychotic drugs work by blocking the docking sites that DA normally attaches to, therefore, reducing DA’s ability to act across other parts of the brain. This leads to deficiency of DA in the motor system that is responsible for normal strides and picking up a coffee mug. My husband’s grandfather was one of millions of patients worldwide navigating neurological and neuropsychiatric conditions while being medicated without a precise understanding of how their brains will respond.

Neurological and neuropsychiatric conditions are among the most complex in medicine that are shaped by genetics, environment, and everything in between. No two brains are identical. The circuits are shared; the variability between individuals is enormous. Yet the dominant model of treatment remains stubbornly one-size-fits-all. 

We don’t need to wait for science to map every docking site and molecule before we act on this. Precision medicine in neurology is not a futuristic idea. It is, as I will outline below, a cost-effective, evidence-backed approach that governments and pharmaceutical companies should be actively investing in right now.

## What does science tell us?

Today, most neurological and psychiatric medications are prescribed based on clinical symptoms alone. SSRIs and SNRIs, for example, are commonly prescribed for depression and anxiety, conditions identified through symptoms such as apathy toward activities that once felt enjoyable, persistent low mood, or trouble falling and staying asleep. These medications work by inhibiting the reuptake of serotonin and norepinephrine, leaving more of these chemicals available in the brain. The problem arises when they are prescribed without first determining whether low neurotransmitter availability is actually the underlying issue. Similarly, amphetamine and dextroamphetamine (Adderall) treat ADHD by increasing levels of norepinephrine and dopamine. However, the balance between neurotransmitters is delicate, and these broad-acting medications can easily tip the scale, leading to both psychological and physiological side effects. Precision diagnostics changes this. It uses patient’s genetic makeup and biological profile to predict how they will respond to a given medication or dose, before they take it. 

‘Pharmaco-omics’ refers to a comprehensive study of various genomic (PGx), proteomic, metabolomic, and microbiomic factors that affect a drug’s safety and efficacy in an individual. The core idea is that by looking at the complete picture of a person’s internal biology, alongside their environmental and social context, we can match patients to suitable treatments and avoid prescribing to non-responders — reducing adverse effects and unnecessary medication exposure. Importantly, research suggests that environmental and social factors are often as influential as genetics in complex neurological conditions (Naithani et al., 2021). This means precision medicine is not purely about genes, but about the whole person.

How widely is this being applied? A US-based managed care study examining nearly half a million adults with a new depression episode found that less than 1% received pharmacogenetic testing for relevant genetic variants despite strong evidence that these variants directly affect how patients metabolize antidepressants (Andersen et al., 2022). Testing rates nearly tripled between 2013 and 2014, then plateaued. This points to an early momentum without systemic follow-through. 

Among those who were tested, at least 60% did not continue the same antidepressant afterward, suggesting that test results influenced prescribing decisions.

The scale of the gap becomes clearer when you look at the numbers. A German study of psychiatric inpatients found that 4 in 5 patients carried at least one genetic variant that could directly affect how their body processes an antidepressant or antipsychotic. Yet routine genetic testing for these patients remains outside standard care in Germany (Scherf-Clavel et al., 2024¹). A separate French study found that more than a quarter of psychiatric patients were actively being prescribed a medication that was incompatible with their genetic profile at the time of testing (Lorvellec et al., 2024²). 

The science is there. The infrastructure — reimbursement, policy, and clinical integration — has not caught up.

Isn’t precision medicine expensive? A single pharmacogenomic test does carry an upfront price. However, each failed prescription carries its own cost: repeated consultations, additional diagnostics, managing adverse effects, lost productivity, time off work, caregiving cost and, most importantly, prolonged suffering. 

Over an extended period of time, precision diagnostics can actually save money. A landmark Canadian modelling study published in the Canadian Medical Association Journal (CMAJ) followed depression patients over 20 years and found that pharmacogenomic-guided prescribing could save approximately CA$4,926 per patient and generate over 74,000 quality-adjusted life years at the population level for the average price of CA$738 per test in the Canadian market  — meaning in this model people did not just cost the system less, they lived measurably better. A comparable meta study was conducted in the American market for Combinatorial PGx (Hornberger et al., 2015).

The most expensive medication, it turns out, is the one that doesn’t work. 

Precision diagnostics shifts the equation from reactive and repetitive to targeted and efficient, and that is what value-based and cost-effective healthcare actually looks like.

## My take

The evidence speaking in favour of precision, both in diagnostics and medicine, is compelling. Why is it not widespread? 

There are a couple of reasons. 

The first is that health insurers are resistant to adopt. They operate on short annual cycles while the savings from precision medicine accumulate over decades. A system that pays for PGx testing today may not be the same system that benefits from reduced hospitalisation and medication costs 10 years from now. That is a structural problem, not a scientific one — and it will not fix itself.

The money is already in the system. Germany, for example, has an entire national strategy for genomic medicine called genomDE. It covers genetic testing to guide treatment decisions for certain cancers and rare diseases. The very same gene variants that predict how a patient will respond to an antidepressant or antipsychotic are already being tested and reimbursed; just not for psychiatric patients. 

This is not a funding problem. It is a priority problem and priority problems have policy solutions. 

Germany has already proven that genetic testing can be integrated into routine care. It is working for cancer patients, and for rare disease patients, and the infrastructure to do it is already funded and running. The ask is not to build something new from scratch. It is simply to extend what already exists to the millions of patients being prescribed psychiatric and neurological medications every year. That is a much smaller policy step than it might appear. The longer it is delayed, the more patients cycle through treatments that do not work, at a cost that quietly accumulates on everyone's tab.

The second reason is the concern of the pharmaceutical companies, the 'volume' question: if we match drugs to fewer, better-suited patients, don’t we sell less? I understand the logic, but it is the wrong frame. Precision diagnostics does not shrink the market — it redirects it. 

Instead of selling the same broad drug to everyone and hoping it works, the opportunity is to develop better, more targeted treatments for the patients most likely to benefit. That is not less business. That is a more robust business. The trust in pharmaceutical innovation is rebuilt through demonstrated outcomes. 

There is a longer arc here as well, one that goes beyond better prescribing. Unspecific therapies carry side effects — as my husband's grandfather's case illustrates. Over-medication, when it occurs, can cause as much harm as under-treatment. This is where the emerging concept of precision health becomes relevant; a framework that moves beyond treating disease toward preventing it by harnessing genetic data, biomarker monitoring, lifestyle factors, and early intervention to identify neurological risk before decline sets in. 

The goal is not more medicine. It is the right medicine, at the right moment and, where possible, less medicine altogether. Because we caught the problem earlier.

We have the tools to offer that to far more patients today than we currently do. The question is whether governments, insurers, and pharmaceutical companies are willing to think in the time scales that patients actually live in.


     `,
   },

  {
    slug:  "forward-health",
    title: "Forward Health: A Bold Vision That Arrived Too Early",
    tag:   "Opinion · Healthcare & Innovation",
    date:  "2024",
    content: `
In 2016, Forward Health introduced a concept that felt like a glimpse into the future of healthcare. Imagine walking into a sleek, AI-powered Care Pod. No waiting room. No appointment. Within minutes, you could check your vitals, run diagnostics, and get insights into your health. It was efficient, convenient, and promised to shift healthcare from reactive treatment to proactive prevention.

The idea was powerful. And it made people pay attention.

But in 2024, after 8 years, $650 million in funding, and ambitious plans to deploy thousands of these pods, Forward Health shut down.

So what went wrong?

## The Promise of Care Pods

At their best, Care Pods offered a compelling solution to a real problem. Healthcare systems around the world are overstretched, and access to primary care can be slow and inefficient. A one-stop diagnostic system could change that.

Care Pods had the potential to handle minor ailments, monitor health metrics, and reduce unnecessary clinic visits. In doing so, they could free up time for clinicians to focus on more complex cases — making the entire system more efficient. On paper, it was exactly the kind of innovation healthcare needs.

## Where Reality Fell Short

But healthcare isn't just about efficiency. It's about trust. And trust is fragile.

Reports began to surface about inaccurate readings, failed procedures, and even safety issues. While these might be expected in early-stage technology, healthcare leaves no room for error. Even small inconsistencies can quickly erode confidence.

At the same time, the economics were challenging. Each Care Pod reportedly cost around $1 million to manufacture, excluding maintenance and real estate costs. Combined with a membership-based model, scaling this solution became both expensive and complex.

Yet, the biggest challenge wasn't technical or financial. It was human.

## The Missing Piece: Human Connection

Healthcare is deeply personal. Patients don't just seek answers — they seek reassurance, empathy, and trust. Care Pods, however, were positioned as a replacement for traditional care, rather than an extension of it. In doing so, they underestimated how much people value human interaction in moments of uncertainty.

Technology can enhance care. But it cannot replace the human connection at its core.

## A Lesson in Timing

Perhaps Care Pods were not the wrong idea — just the wrong timing. Healthcare systems are inherently conservative, and for good reason. Change is slow because the stakes are high. Adoption requires not just functional technology, but also trust, reliability, and alignment with existing care models.

A more balanced approach might have made a difference. Imagine a system where Care Pods complemented clinics rather than competed with them. Where technology was introduced gradually, building confidence over time. Where clinicians and digital tools worked side by side. That kind of hybrid model might have bridged the gap between innovation and acceptance.

## Looking Ahead

Forward Health's story is not just about failure. It is about the challenges of transforming a system as complex as healthcare. Innovation alone is not enough.

Success in healthcare requires timing, trust, and integration. It requires understanding not just what is possible, but what people are ready to accept. Care Pods may have been ahead of their time. But the need they addressed hasn't gone away.

The future of healthcare will likely belong to those who can strike the right balance — combining technology and human care in a way that feels not just efficient, but trustworthy.

Because in the end, healthcare is not just about better systems. It's about better care.
    `,
  },

];
