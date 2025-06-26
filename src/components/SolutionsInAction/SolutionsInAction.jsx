import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./SolutionInAction.css"; // Assuming you have a CSS file for custom styles

const SolutionsInAction = () => {
  return (
    <div className="my-12">
      <h2 className="text-[2.074rem] font-bold mb-8 text-[#60a5fa] text-center tracking-tight">
        See Our Solutions in Action
      </h2>

      <Tabs forceRenderTabPanel defaultIndex={1} className="w-[80%] mx-auto">
        <TabList>
          <Tab>TranscriptX</Tab>
          <Tab>Chartwright</Tab>
          <Tab>Redactify</Tab>
          <Tab>Validify</Tab>
        </TabList>

        {/* 1st tab */}

        <TabPanel>
          <Tabs forceRenderTabPanel>
            <TabList>
              <Tab>Example 1</Tab>
              <Tab>Example 2</Tab>
              <Tab>Example 3</Tab>
              <Tab>Example 4</Tab>
            </TabList>

            {/* tab 1 example 1 */}
            <TabPanel>
              <div className="flex justify-between items-start gap-2  ">
                <div className="flex-1 flex flex-col bg-[#0A1022] rounded h-[90vh] pb-8 ">
                  <div className="flex justify-between bg-[#14274C] text-[#3B82F6] py-3 px-4 w-full">
                    <h3 className="font-semibold">Doctor's Dictation</h3>
                    <p>Audio input</p>
                  </div>

                  <div className="bg-[#0A1022]  p-4 space-y-4 flex-1 overflow-y-auto z-10">
                    <h3 className="py-2 mb-4 text-center font-bold text-xl border-b-1 border-b-gray-400">
                      Doctor's Dictation (Audio Input Simulation)
                    </h3>
                    <p className="px-4">
                      "Okay, uh, patient is Sarah Chen, DOB 3/22/1978. Seen
                      today, October 26th, 2023. Chief complaint... uh... right
                      knee pain, ongoing for about 3 months, worse with
                      activity, especially stairs. Subjective: Patient describes
                      the pain as a dull ache, located medially. Rates it a 6/10
                      currently, can go up to 8/10 after exercise. Some morning
                      stiffness, lasts maybe 15 minutes. No significant swelling
                      reported, denies locking or giving way. Uh... tried
                      over-the-counter Ibuprofen with some partial relief. No
                      history of trauma. Otherwise healthy. Objective: Gait is
                      non-antalgic. Right knee exam: No effusion visible. Mild
                      tenderness to palpation over the medial joint line.
                      McMurray's test is negative. Lachman and drawer tests
                      stable. Range of motion is full, though terminal flexion
                      elicits some discomfort medially. Assessment: Likely
                      medial compartment osteoarthritis of the right knee.
                      Differential includes medial meniscus tear, although less
                      likely given exam findings. Plan: Uh... Obtain bilateral
                      weight-bearing knee X-rays. Recommend continued NSAID use
                      as needed, consider switching to Naproxen. Discussed
                      physical therapy options for strengthening quadriceps and
                      hamstrings. Also discussed... lifestyle modifications,
                      weight management if applicable... oh, patient's BMI is
                      24, so that's fine. Follow up in 4 weeks with X-ray
                      results to discuss further management, possibly including
                      corticosteroid injection or referral to orthopedics if
                      symptoms persist. End dictation."
                    </p>
                  </div>
                </div>

                <div className="flex-1 flex flex-col bg-[#0A1022] rounded h-[90vh] pb-8">
                  <div className="flex justify-between bg-[#392D1D] text-[#ED990C] py-3 px-4">
                    <h3>TranscriptX Note</h3>
                    <p>AI-Generated Output</p>
                  </div>

                  <div className="bg-[#0A1022]  p-4 space-y-4 flex-1 overflow-y-auto">
                    <h3 className="py-2 mb-4 text-center font-bold text-xl border-b-1 border-b-gray-400">
                      TranscriptX - AI-Generated Note
                    </h3>
                    <div className="max-w-3xl mx-auto p-6 bg-[#0A1022] rounded-lg shadow-md space-y-6 ">
                      <div>
                        <h2 className="text-2xl font-bold mb-2">
                          Patient: Sarah Chen
                        </h2>
                        <p className="text-sm ">DOB: 03/22/1978</p>
                        <p className="text-sm ">
                          Date of Service: October 26, 2023
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold border-b-1 pb-1 border-gray-200 mb-2">
                          Chief Complaint
                        </h3>
                        <p>Right knee pain x 3 months.</p>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold border-b-1 pb-1 border-gray-200 mb-2">
                          Subjective
                        </h3>
                        <p>
                          Patient reports right knee pain ongoing for
                          approximately 3 months, described as a dull ache
                          located medially. Pain worsens with activity,
                          particularly stair climbing. Pain rated 6/10
                          currently, increasing to 8/10 post-exercise. Reports
                          approximately 15 minutes of morning stiffness. Denies
                          significant swelling, locking, or episodes of giving
                          way. Partial relief noted with over-the-counter
                          Ibuprofen. No history of trauma. Patient is otherwise
                          healthy.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold border-b-1 pb-1 border-gray-200 mb-2">
                          Objective
                        </h3>
                        <ul className="list-none list-inside space-y-1">
                          <li>
                            <strong>Gait:</strong> Non-antalgic.
                          </li>
                          <li>
                            <strong>Right Knee Exam:</strong> No visible
                            effusion. Mild tenderness to palpation over the
                            medial joint line. Full range of motion; terminal
                            flexion elicits mild medial discomfort. McMurray's
                            test negative. Lachman test negative.
                            Anterior/Posterior Drawer tests negative (knee
                            stable).
                          </li>
                          <li>
                            <strong>BMI:</strong> 24
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold border-b-1 pb-1 border-gray-200 mb-2">
                          Assessment
                        </h3>
                        <ul className="list-none list-inside space-y-1">
                          <li>
                            Medial compartment osteoarthritis, right knee
                            (probable).
                          </li>
                          <li>Rule out medial meniscus tear (less likely).</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold border-b-1 pb-1 border-gray-200 mb-2">
                          Plan
                        </h3>
                        <ul className="list-none list-inside space-y-1">
                          <li>
                            Order bilateral weight-bearing knee X-rays (AP,
                            lateral, sunrise views).
                          </li>
                          <li>
                            Recommend continued PRN NSAID use (consider trial of
                            Naproxen 500mg BID PRN).
                          </li>
                          <li>
                            Discussed referral for Physical Therapy focusing on
                            quadriceps/hamstring strengthening.
                          </li>
                          <li>Discussed lifestyle modifications.</li>
                          <li>
                            Follow up in 4 weeks to review X-ray results and
                            clinical progress.
                          </li>
                          <li>
                            Consider intra-articular corticosteroid injection or
                            orthopedic referral if symptoms persist or worsen.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>

            {/*tab 1 example 2 */}
            <TabPanel>
              <div className="flex justify-between items-start gap-2  ">
                <div className="flex-1 flex flex-col bg-[#0A1022] rounded h-[90vh] pb-8 ">
                  <div className="flex justify-between bg-[#14274C] text-[#3B82F6] py-3 px-4 w-full">
                    <h3 className="font-semibold">Nurse's Quick Report</h3>
                    <p>Simulated Verbal/Notes</p>
                  </div>

                  <div className="bg-[#0A1022]  p-4 space-y-4 flex-1 overflow-y-auto z-10">
                    <h3 className="py-2 mb-4 text-center font-bold text-xl border-b-1 border-b-gray-400">
                      Nurse's Quick Report (Simulated Verbal Input/Jotted Notes)
                    </h3>
                    <p className="px-4">
                      "Alright, handover for Bed 7, uh, Mrs. Gable, 72F, brought
                      in by EMS, syncopal episode at home. Witnessed by husband,
                      slumped in chair, maybe 30 seconds LOC? GCS 15 on arrival.
                      Hx of HTN, Afib on Eliquis. Vitals: BP 105/60, HR 115
                      irreg, RR 20, SpO2 94% RA, Temp 37.1. Put her on the
                      monitor, she's in Afib RVR. Got an 18g IV L AC, labs drawn
                      - CBC, CMP, Trop, Coags sent stat. EKG done, showed Afib
                      RVR, no acute ST changes noted. Portable chest X-ray
                      ordered. Gave a 500cc NS bolus, BP now 115/65, HR down to
                      105. Still awake, alert, denies CP, SOB. Neuro checks
                      grossly normal. Waiting on lab results and CXR read. Dr.
                      Evans aware, considering diltiazem drip maybe? Keep a
                      close eye on her pressure and rhythm."
                    </p>
                  </div>
                </div>

                <div className="flex-1 flex flex-col bg-[#0A1022] rounded h-[90vh] pb-8">
                  <div className="flex justify-between bg-[#392D1D] text-[#ED990C] py-3 px-4">
                    <h3>TranscriptX Note</h3>
                    <p>AI-Structured Nursing Note/Handover</p>
                  </div>

                  <div className="bg-[#0A1022]  p-4 space-y-4 flex-1 overflow-y-auto">
                    <h3 className="py-2 mb-4 text-center font-bold text-xl border-b-1 border-b-gray-400">
                      TranscriptX - AI-Structured Nursing <br /> Note/Handover
                    </h3>

                    <div className="max-w-3xl mx-auto p-6 bg-[#0A1022] rounded-lg shadow-md space-y-6 ">
                      <div>
                        {/* Patient Info */}
                        <div className="space-y-2">
                          <p>
                            <span className="font-medium">Patient:</span> Gable,
                            [First Name Redacted]
                          </p>
                          <p>
                            <span className="font-medium">Age/Sex:</span>{" "}
                            72-year-old Female (72F)
                          </p>
                          <p>
                            <span className="font-medium">Location:</span> ED
                            Bed 7
                          </p>
                          <p>
                            <span className="font-medium">Arrival:</span> Via
                            EMS
                          </p>
                        </div>

                        {/* Presenting Complaint */}
                        <div>
                          <p>
                            <span className="font-medium">
                              Presenting Complaint:
                            </span>{" "}
                            Syncopal episode at home
                          </p>
                        </div>
                      </div>

                      <hr className="my-4 border-gray-300 dark:border-gray-700" />

                      {/* History */}
                      <div className="mb-4">
                        <h3 className="font-semibold ">History</h3>
                        <p>
                          Witnessed syncopal episode (approx. 30 seconds loss of
                          consciousness) reported by husband. PMH: Hypertension
                          (HTN), Atrial Fibrillation (Afib) on Eliquis.
                        </p>
                      </div>

                      {/* Initial Assessment */}
                      <div className="mb-4">
                        <h3 className="font-semibold ">
                          Initial Assessment (On Arrival)
                        </h3>
                        <ul className=" ml-6">
                          <li>
                            <strong>Neurological:</strong> GCS 15. Awake, alert,
                            oriented. Denies CP or SOB. Grossly normal exam.
                          </li>
                          <li>
                            <strong>Cardiovascular:</strong> Irregularly
                            irregular rhythm noted. Denies chest pain.
                          </li>
                          <li>
                            <strong>Vital Signs:</strong> BP 105/60 mmHg, HR 115
                            bpm (irregular), RR 20/min, SpO2 94% RA, Temp
                            37.1°C.
                          </li>
                        </ul>
                      </div>

                      {/* Interventions & Response */}
                      <div className="mb-4">
                        <h3 className="font-semibold ">
                          Interventions & Response
                        </h3>
                        <ul className=" ml-6">
                          <li>
                            Placed on cardiac monitor: Afib with RVR confirmed.
                          </li>
                          <li>18G IV in Left Antecubital Fossa (L AC).</li>
                          <li>Labs: CBC, CMP, Troponin, Coags sent STAT.</li>
                          <li>
                            EKG: Afib RVR, no ST changes. Portable CXR ordered.
                          </li>
                          <li>500cc NS bolus IV administered.</li>
                          <li>
                            Response: BP ↑ to 115/65 mmHg, HR ↓ to 105 bpm
                            (still irregular), remains alert.
                          </li>
                        </ul>
                      </div>

                      {/* Pending */}
                      <div className="mb-4">
                        <h3 className="font-semibold ">Pending</h3>
                        <p>Lab results and CXR interpretation.</p>
                      </div>

                      {/* Plan / Consults */}
                      <div>
                        <h3 className="font-semibold ">Plan / Consults</h3>
                        <ul className=" ml-6">
                          <li>Dr. Evans updated on patient status.</li>
                          <li>Diltiazem infusion under consideration.</li>
                          <li>
                            Continue monitoring: vitals, rhythm, neuro status.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>

            {/*tab 1 example 3 */}
            <TabPanel>
              <div className="flex justify-between items-start gap-2  ">
                <div className="flex-1 flex flex-col bg-[#0A1022] rounded h-[90vh] pb-8 ">
                  <div className="flex justify-between bg-[#14274C] text-[#3B82F6] py-3 px-4 w-full">
                    <h3 className="font-semibold">Psychiatry Dictation</h3>
                    <p>Your Raw Audio</p>
                  </div>

                  <div className="bg-[#0A1022]  p-4 space-y-4 flex-1 overflow-y-auto z-10">
                    <h3 className="py-2 mb-4 text-center font-bold text-xl border-b-1 border-b-gray-400">
                      Your Raw Audio Dictation
                    </h3>
                    <p className="px-4">
                      "Okay, uh, patient is a 42-year-old male, uhm, follow-up
                      for... Major Depressive Disorder, recurrent, severe, and
                      GAD. He, uh, reports mood is maybe a '3 out of 10'. Still
                      struggling with... significant anhedonia, low energy...
                      hypersomnia noted. Uhm, some passive SI, but denies active
                      intent, plan, or access... denies HI. Appetite is...
                      decreased. Let's see... Current meds are Escitalopram 20mg
                      daily... added Mirtazapine 15mg at bedtime about, uh, 3
                      weeks ago for sleep and appetite. Patient feels the
                      Mirtazapine might be helping sleep slightly? But still
                      feels quite... 'blah', his words. Affect... constricted,
                      mood appears dysthymic. Thought process logical, uh,
                      reality testing intact. No AVH. We discussed, uhm... maybe
                      augmenting with Bupropion for energy and motivation? Or...
                      increasing the Mirtazapine? Patient prefers to wait... see
                      how current regimen settles. Okay... Plan is... continue
                      Escitalopram 20mg daily, continue Mirtazapine 15mg QHS.
                      Reinforce coping skills, uh, safety plan reviewed. Return
                      to clinic... uh... 4 weeks. Okay, done."
                    </p>
                  </div>
                </div>

                <div className="flex-1 flex flex-col bg-[#0A1022] rounded h-[90vh] pb-8">
                  <div className="flex justify-between bg-[#392D1D] text-[#ED990C] py-3 px-4">
                    <h3>TranscriptX Note</h3>
                    <p>Accurate Transcription</p>
                  </div>

                  <div className="bg-[#0A1022]  p-4 space-y-4 flex-1 overflow-y-auto">
                    <h3 className="py-2 mb-4 text-center font-bold text-xl border-b-1 border-b-gray-400">
                      TranscriptX Accurate Transcription
                    </h3>

                    <div className="max-w-3xl mx-auto p-6 bg-[#0A1022] rounded-lg shadow-md space-y-6 ">
                      <div className="mb-2">
                        <p>
                          <span className="font-medium">Patient:</span>{" "}
                          42-year-old male
                        </p>
                        <p>
                          <span className="font-medium">Visit:</span> Follow-up
                          for Major Depressive Disorder (MDD), recurrent,
                          severe, and Generalized Anxiety Disorder (GAD)
                        </p>
                      </div>

                      <hr className="my-4 border-neutral-300 dark:border-neutral-700" />

                      {/* Subjective */}
                      <div className="mb-4">
                        <h3 className="font-semibold">Subjective</h3>
                        <p>
                          Patient reports mood as approximately "3 out of 10".
                          Continues to experience significant anhedonia, low
                          energy, and hypersomnia. Reports some passive suicidal
                          ideation (SI) but denies active intent, plan, or
                          access to means. Denies homicidal ideation (HI).
                          Appetite is decreased.
                        </p>
                        <p className="mt-2">
                          Current medications include Escitalopram 20mg daily
                          and Mirtazapine 15mg at bedtime (QHS), initiated
                          approximately 3 weeks ago for sleep and appetite.
                          Patient states Mirtazapine may be slightly improving
                          sleep but describes overall feeling as "blah".
                        </p>
                      </div>

                      {/* Objective */}
                      <div className="mb-4">
                        <h3 className="font-semibold">Objective</h3>
                        <ul className=" ml-6">
                          <li>Affect appears constricted</li>
                          <li>Mood appears dysthymic</li>
                          <li>
                            Thought process is logical; reality testing intact
                          </li>
                          <li>
                            Denies auditory or visual hallucinations (AVH)
                          </li>
                        </ul>
                      </div>

                      {/* Assessment & Plan */}
                      <div className="mb-2">
                        <h3 className="font-semibold">Assessment & Plan</h3>
                        <ul className=" ml-6">
                          <li>
                            Discussed potential augmentation: Bupropion or
                            Mirtazapine dose increase
                          </li>
                          <li>
                            Patient prefers to continue current regimen to allow
                            more time for effect
                          </li>
                          <li>Continue Escitalopram 20mg PO daily</li>
                          <li>Continue Mirtazapine 15mg PO QHS</li>
                          <li>Reinforced coping skills</li>
                          <li>Safety plan reviewed and remains in place</li>
                          <li>Return to clinic in 4 weeks for reassessment</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>

            {/* tab 1 example 4 */}
            <TabPanel>
              <div className="flex justify-between items-start gap-2  ">
                <div className="flex-1 flex flex-col bg-[#0A1022] rounded h-[90vh] pb-8 ">
                  <div className="flex justify-between bg-[#14274C] text-[#3B82F6] py-3 px-4 w-full">
                    <h3 className="font-semibold">Case Dictation</h3>
                    <p>Raw Audio</p>
                  </div>

                  <div className="bg-[#0A1022]  p-4 space-y-4 flex-1 overflow-y-auto z-10">
                    <h3 className="py-2 mb-4 text-center font-bold text-xl border-b-1 border-b-gray-400">
                      Raw Dictation: Client Follow-Up
                    </h3>
                    <p className="px-4">
                      "Okay, this is for... uh... client file, Jane Doe, DOB
                      05/12/1960. Met with her today, post-discharge from
                      General Hospital. Diagnosis... um... exacerbation of COPD
                      and, uh, new onset Type 2 Diabetes. She's pretty
                      overwhelmed. Lives alone, fixed income, SSI. Her apartment
                      has stairs, making it hard with her breathing. Main
                      concerns: medication management – new insulin, she's
                      scared of needles – and, like, understanding her diet.
                      Also, she mentioned feeling isolated. We talked about, um,
                      connecting her with a senior center and a diabetes
                      education program. Her neighbor, Tom, sometimes helps with
                      groceries, but it's not consistent. Need to follow up on:
                      1) Home health referral for med setup and diabetes
                      teaching. 2) Durable Medical Equipment – get that walker
                      approved. 3) Arrange transport for next clinic visit. 4)
                      Explore, uh, food assistance programs, like Meals on
                      Wheels. She also needs... emotional support, definitely.
                      Seems a bit depressed. Will check in again Friday. Oh, and
                      her pharmacy is ValueCare."
                    </p>
                  </div>
                </div>

                <div className="flex-1 flex flex-col bg-[#0A1022] rounded h-[90vh] pb-8">
                  <div className="flex justify-between bg-[#392D1D] text-[#ED990C] py-3 px-4">
                    <h3>TranscriptX Case Note</h3>
                    <p>Enhanced Case Note</p>
                  </div>

                  <div className="bg-[#0A1022]  p-4 space-y-4 flex-1 overflow-y-auto">
                    <h3 className="py-2 mb-4 text-center font-bold text-xl border-b-1 border-b-gray-400">
                      TranscriptX Enhanced Case Note
                    </h3>

                    <div className="max-w-3xl mx-auto p-6 bg-[#0A1022] rounded-lg shadow-md space-y-6 ">
                      <div className="mb-2">
                        <p>
                          <span className="font-medium">Client:</span> Jane Doe
                        </p>
                        <p>
                          <span className="font-medium">DOB:</span> 05/12/1960
                        </p>
                        <p>
                          <span className="font-medium">
                            Date of Encounter:
                          </span>{" "}
                          October 26, 2023
                        </p>
                      </div>

                      <hr className="my-4 border-neutral-300 dark:border-neutral-700" />

                      {/* Clinical Context */}
                      <div className="mb-4">
                        <h3 className="font-semibold">
                          Clinical Context & Assessment
                        </h3>
                        <p>
                          Client seen post-discharge from General Hospital
                          following an exacerbation of Chronic Obstructive
                          Pulmonary Disease (COPD) and a new diagnosis of Type 2
                          Diabetes Mellitus. Client expresses feeling
                          overwhelmed by new diagnoses and management
                          requirements.
                        </p>
                      </div>

                      {/* Living / Environment / Psychosocial */}
                      <div className="mb-4">
                        <h3 className="font-semibold">Living Situation</h3>
                        <p>Resides alone, fixed income (SSI).</p>

                        <h3 className="font-semibold mt-3">
                          Environmental Barriers
                        </h3>
                        <p>
                          Apartment accessibility is a concern due to stairs,
                          impacting mobility secondary to dyspnea from COPD.
                        </p>

                        <h3 className="font-semibold mt-3">Psychosocial</h3>
                        <p>
                          Client reports feelings of isolation and exhibits
                          potential indicators of depression.
                        </p>
                      </div>

                      {/* Identified Needs */}
                      <div className="mb-4">
                        <h3 className="font-semibold">
                          Identified Needs & Concerns
                        </h3>
                        <ul className=" ml-6">
                          <li>
                            <strong>Medication Management:</strong> Difficulty
                            with new insulin regimen, fear of injections. Needs
                            DSM education.
                          </li>
                          <li>
                            <strong>Dietary Adherence:</strong> Requires
                            education and support for diabetic diet.
                          </li>
                          <li>
                            <strong>Social Support & Engagement:</strong> Needs
                            connection to community resources.
                          </li>
                          <li>
                            <strong>Mobility & Safety:</strong> Requires walker
                            and support navigating stairs.
                          </li>
                          <li>
                            <strong>IADLs:</strong> Inconsistent support for
                            grocery shopping.
                          </li>
                          <li>
                            <strong>Access to Care:</strong> Needs
                            transportation for clinic visits.
                          </li>
                          <li>
                            <strong>Emotional Well-being:</strong> Needs
                            emotional support.
                          </li>
                        </ul>
                      </div>

                      {/* Action Plan */}
                      <div className="mb-2">
                        <h3 className="font-semibold">Action Plan</h3>
                        <ul className=" ml-6">
                          <li>
                            Initiate home health referral for medication
                            reconciliation, insulin training, diabetes
                            education.
                          </li>
                          <li>
                            Request/authorize durable medical equipment
                            (walker).
                          </li>
                          <li>
                            Arrange non-emergency medical transport for clinic
                            visit.
                          </li>
                          <li>
                            Assist with food assistance programs (e.g., Meals on
                            Wheels, SNAP).
                          </li>
                          <li>
                            Refer to local senior center and diabetes support
                            group.
                          </li>
                          <li>
                            Schedule follow-up by Friday to assess progress and
                            provide support.
                          </li>
                          <li>
                            Coordinate with preferred pharmacy (ValueCare) for
                            future needs.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>
          </Tabs>
        </TabPanel>

        {/* 2nd tab */}

        <TabPanel>
          <Tabs forceRenderTabPanel>
            <TabList>
              <Tab>Example 1</Tab>
              <Tab>Example 2</Tab>
              <Tab>Example 3</Tab>
            </TabList>

            {/*tab 2 example 1 */}
            <TabPanel>
              <div className="flex justify-between items-start gap-2  ">
                <div className="flex-1 flex flex-col bg-[#0A1022] rounded h-[90vh] pb-8 ">
                  <div className="flex justify-between bg-[#14274C] text-[#3B82F6] py-3 px-4 w-full">
                    <h3 className="font-semibold">Doctor Note</h3>
                    <p>Messy Original</p>
                  </div>

                  <div className="bg-[#0A1022]  p-4 space-y-4 flex-1 overflow-y-auto z-10">
                    <h3 className="py-2 mb-4 text-center font-bold text-xl border-b-1 border-b-gray-400">
                      Messy Original Doctor Note
                    </h3>
                    <div className="mb-2">
                      <p>
                        <span className="font-medium">Patient Name:</span> Sarah
                        Jones
                      </p>
                      <p>
                        <span className="font-medium">DOB:</span> 03/10/1985
                      </p>
                      <p>
                        <span className="font-medium">Date:</span> 11/03/2023
                      </p>
                    </div>

                    <div className="mb-4">
                      <p>
                        <span className="font-medium">Reason for Visit:</span>{" "}
                        Follow-up for hypertension and recent URI
                      </p>
                    </div>

                    <hr className="my-4 border-neutral-300 dark:border-neutral-700" />

                    {/* Subjective */}
                    <div className="mb-4">
                      <h3 className="font-semibold">Subjective</h3>
                      <p>
                        Patient states blood pressure readings at home have been
                        better since adjusting lisinopril dose. Had a cold last
                        week, mostly over now but still has a lingering
                        non-productive cough. Denies fever, chills, or shortness
                        of breath. Symptoms started about 10 days ago. Used OTC
                        cough drops. No new complaints regarding blood pressure.
                        Is trying to eat better, more vegetables. Exercise has
                        been inconsistent due to the cold. Sleep is okay when
                        not coughing. Non-smoker, social alcohol use.
                      </p>
                    </div>

                    {/* Objective */}
                    <div className="mb-4">
                      <h3 className="font-semibold">Objective</h3>
                      <ul className=" ml-6">
                        <li>BP 135/88 seated, right arm</li>
                        <li>
                          Pulse 72, Respiratory Rate 16, Temperature 36.8°C
                        </li>
                        <li>General: Appears well, mild cough during exam</li>
                        <li>HEENT: Moist mucous membranes, no congestion</li>
                        <li>
                          Lungs: Clear to auscultation bilaterally, no wheezes
                          or crackles
                        </li>
                        <li>Heart: Regular rate and rhythm, no murmurs</li>
                        <li>Abdomen: Soft, non-tender</li>
                        <li>Skin: Warm and dry</li>
                        <li>Exam within normal limits except for cough</li>
                      </ul>
                    </div>

                    {/* Assessment */}
                    <div className="mb-4">
                      <h3 className="font-semibold">Assessment</h3>
                      <ul className=" ml-6">
                        <li>Hypertension, improved control</li>
                        <li>
                          Resolving upper respiratory infection with residual
                          cough
                        </li>
                      </ul>
                    </div>

                    {/* Plan */}
                    <div className="mb-2">
                      <h3 className="font-semibold">Plan</h3>
                      <ul className=" ml-6">
                        <li>Continue Lisinopril 10mg daily</li>
                        <li>
                          Monitor blood pressure at home; follow-up in 3 months
                          or sooner if BP increases
                        </li>
                        <li>
                          Reassure patient that cough should resolve in 1–2
                          weeks
                        </li>
                        <li>
                          OTC cough suppressants are acceptable if symptoms
                          bother sleep
                        </li>
                        <li>
                          Encourage continued healthy diet and exercise after
                          full resolution of URI symptoms
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="flex-1 flex flex-col bg-[#0A1022] rounded h-[90vh] pb-8">
                  <div className="flex justify-between bg-[#392D1D] text-[#ED990C] py-3 px-4">
                    <h3>Chartwright Chart</h3>
                    <p>AI-Enhanced</p>
                  </div>

                  <div className="bg-[#0A1022]  p-4 space-y-4 flex-1 overflow-y-auto">
                    <h3 className="py-2 mb-4 text-center font-bold text-xl border-b-1 border-b-gray-400">
                      Chartwright-Enhanced Chart
                    </h3>

                    <div className="max-w-3xl mx-auto p-6 bg-[#0A1022] rounded-lg shadow-md space-y-6 ">
                      <div className="mb-2">
                        <p>
                          <span className="font-medium">Patient:</span> Sarah
                          Jones
                        </p>
                        <p>
                          <span className="font-medium">DOB:</span> 03/10/1985
                        </p>
                        <p>
                          <span className="font-medium">Visit Date:</span>{" "}
                          2023-11-03
                        </p>
                        <p>
                          <span className="font-medium">Reason:</span> Follow-up
                          (Hypertension, Resolving URI)
                        </p>
                      </div>

                      <hr className="my-4 border-neutral-300 dark:border-neutral-700" />

                      {/* Subjective Report */}
                      <div className="mb-4">
                        <h3 className="font-semibold">Subjective Report</h3>
                        <ul className=" ml-6">
                          <li>
                            <strong>Hypertension:</strong> Improved home BP
                            readings since lisinopril adjustment.
                          </li>
                          <li>
                            <strong>URI:</strong> Symptoms started ~10 days ago,
                            mostly resolved. Persistent non-productive cough.
                            Denies fever, chills, shortness of breath. Used OTC
                            cough drops.
                          </li>
                          <li>
                            <strong>Lifestyle:</strong> Trying to eat better
                            (more vegetables). Exercise inconsistent due to
                            cold. Sleep okay except for coughing. Non-smoker,
                            social alcohol use.
                          </li>
                        </ul>
                      </div>

                      {/* Objective Data */}
                      <div className="mb-4">
                        <h3 className="font-semibold">Objective Data</h3>
                        <ul className=" ml-6">
                          <li>
                            <strong>Vitals (11/03/2023):</strong> BP 135/88,
                            Pulse 72, RR 16, Temp 36.8°C
                          </li>
                          <li>
                            <strong>General:</strong> Appears well. Mild cough
                            observed.
                          </li>
                          <li>
                            <strong>Exam:</strong> HEENT clear. Lungs clear to
                            auscultation. Heart regular rate and rhythm. Abdomen
                            soft and non-tender. Skin warm and dry. Exam within
                            normal limits except for cough.
                          </li>
                        </ul>
                      </div>

                      {/* Assessment */}
                      <div className="mb-4">
                        <h3 className="font-semibold">Assessment</h3>
                        <ul className=" ml-6">
                          <li>Hypertension, improved control</li>
                          <li>
                            Resolving upper respiratory infection with residual
                            cough
                          </li>
                        </ul>
                      </div>

                      {/* Plan */}
                      <div>
                        <h3 className="font-semibold">Plan</h3>
                        <ul className=" ml-6">
                          <li>
                            <strong>Medication:</strong> Continue Lisinopril
                            10mg daily
                          </li>
                          <li>
                            <strong>Hypertension:</strong> Continue home BP
                            monitoring. Follow-up in 3 months or sooner if BP
                            increases
                          </li>
                          <li>
                            <strong>Cough:</strong> Reassure likely resolution
                            in 1–2 weeks. OTC suppressants okay if bothersome at
                            night
                          </li>
                          <li>
                            <strong>Lifestyle:</strong> Encourage healthy diet
                            and exercise once URI resolves
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>

            {/* tab 2 example 2 */}
            <TabPanel>
              <div className="flex justify-between items-start gap-2  ">
                <div className="flex-1 flex flex-col bg-[#0A1022] rounded h-[90vh] pb-8 ">
                  <div className="flex justify-between bg-[#14274C] text-[#3B82F6] py-3 px-4 w-full">
                    <h3 className="font-semibold">Therapy Note</h3>
                    <p>Messy Original</p>
                  </div>

                  <div className="bg-[#0A1022]  p-4 space-y-4 flex-1 overflow-y-auto z-10">
                    <h3 className="py-2 mb-4 text-center font-bold text-xl border-b-1 border-b-gray-400">
                      Messy Original Therapy Note
                    </h3>

                    <div className="mb-2">
                      <p>
                        <span className="font-medium">Patient Name:</span> Emily
                        White
                      </p>
                      <p>
                        <span className="font-medium">Date:</span> 11/04/2023
                      </p>
                      <p>
                        <span className="font-medium">Session #:</span> 8
                      </p>
                      <p>
                        <span className="font-medium">Focus:</span> Social
                        anxiety and assertiveness training
                      </p>
                    </div>

                    <hr className="my-4 border-neutral-300 dark:border-neutral-700" />

                    {/* Subjective */}
                    <div className="mb-4">
                      <h3 className="font-semibold">Subjective</h3>
                      <p>
                        Patient reported attending a social event over the
                        weekend, which was a goal for her. Felt very anxious
                        beforehand and almost didn’t go. Managed to stay for
                        about an hour and spoke with two people, which she views
                        as a small success. Noted heart pounding and sweating
                        while talking. Feels somewhat discouraged that it was
                        still so difficult despite practicing skills. Also
                        described a conflict at work where she felt unable to
                        speak up. Reports poor sleep the past couple nights due
                        to work-related worries. Denies self-harm ideation.
                      </p>
                    </div>

                    {/* Objective */}
                    <div className="mb-4">
                      <h3 className="font-semibold">Objective</h3>
                      <ul className=" ml-6">
                        <li>
                          Presented with somewhat flat affect initially, warmed
                          up over session
                        </li>
                        <li>Speech quiet but clear</li>
                        <li>Maintained eye contact inconsistently</li>
                        <li>
                          Demonstrated insight into anxiety-avoidance cycle
                        </li>
                        <li>
                          Appeared engaged while discussing coping strategies
                        </li>
                        <li>Denied suicidal or homicidal ideation</li>
                      </ul>
                    </div>

                    {/* Interventions */}
                    <div className="mb-4">
                      <h3 className="font-semibold">Interventions</h3>
                      <ul className=" ml-6">
                        <li>
                          Reviewed weekend social event experience; validated
                          anxiety and discouragement
                        </li>
                        <li>
                          Praised effort for attending and engaging socially
                        </li>
                        <li>
                          Used CBT framework to challenge negative automatic
                          thoughts (e.g., “everyone can see I’m nervous”)
                        </li>
                        <li>
                          Practiced assertiveness through role-play involving a
                          workplace scenario
                        </li>
                        <li>
                          Assigned homework: Attend one planned social
                          interaction and practice one assertive statement this
                          week
                        </li>
                      </ul>
                    </div>

                    {/* Assessment */}
                    <div className="mb-4">
                      <h3 className="font-semibold">Assessment</h3>
                      <p>
                        <strong>Diagnosis:</strong> Social Anxiety Disorder
                        (Severe). Patient is showing willingness to engage in
                        exposure-based tasks (e.g., social events), though high
                        anxiety persists. Assertiveness remains a significant
                        challenge. Sleep is affected by generalized anxiety and
                        worry. Gradual progress observed; continued skill
                        reinforcement recommended.
                      </p>
                    </div>

                    {/* Plan */}
                    <div>
                      <h3 className="font-semibold">Plan</h3>
                      <ul className=" ml-6">
                        <li>Continue weekly therapy sessions</li>
                        <li>Advance exposure hierarchy for social anxiety</li>
                        <li>Increase intensity of assertiveness training</li>
                        <li>
                          Address sleep hygiene briefly in next session if
                          issues persist
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="flex-1 flex flex-col bg-[#0A1022] rounded h-[90vh] pb-8">
                  <div className="flex justify-between bg-[#392D1D] text-[#ED990C] py-3 px-4">
                    <h3>Chartwright Chart</h3>
                    <p>AI-Enhanced</p>
                  </div>

                  <div className="bg-[#0A1022]  p-4 space-y-4 flex-1 overflow-y-auto">
                    <h3 className="py-2 mb-4 text-center font-bold text-xl border-b-1 border-b-gray-400">
                      Chartwright-Enhanced Chart
                    </h3>

                    <div className="max-w-3xl mx-auto p-6 bg-[#0A1022] rounded-lg shadow-md space-y-6 ">
                      <div className="mb-2">
                        <p>
                          <span className="font-medium">Patient:</span> Emily
                          White
                        </p>
                        <p>
                          <span className="font-medium">Visit Date:</span>{" "}
                          2023-11-04
                        </p>
                        <p>
                          <span className="font-medium">Session #:</span> 8
                        </p>
                        <p>
                          <span className="font-medium">Primary Focus:</span>{" "}
                          Social Anxiety / Assertiveness Training
                        </p>
                      </div>

                      <hr className="my-4 border-neutral-300 dark:border-neutral-700" />

                      {/* Subjective */}
                      <div className="mb-4">
                        <h3 className="font-semibold">Subjective Report</h3>
                        <ul className=" ml-6">
                          <li>
                            <strong>Social Event:</strong> Attended a weekend
                            event (goal). High anxiety (palpitations, sweating).
                            Stayed 1 hour, spoke to 2 people. Identified as a
                            small success but felt discouraged by difficulty.
                          </li>
                          <li>
                            <strong>Work Conflict:</strong> Felt unable to speak
                            up during a workplace situation.
                          </li>
                          <li>
                            <strong>Sleep:</strong> Poor past couple of nights
                            due to worry about work.
                          </li>
                          <li>
                            <strong>Safety:</strong> Denied self-harm ideation.
                          </li>
                        </ul>
                      </div>

                      {/* Objective */}
                      <div className="mb-4">
                        <h3 className="font-semibold">Objective Observation</h3>
                        <ul className=" ml-6">
                          <li>
                            <strong>Presentation:</strong> Initially flat
                            affect, gradually warmed up. Speech quiet, eye
                            contact inconsistent.
                          </li>
                          <li>
                            <strong>Cognition:</strong> Showed insight into
                            anxiety and avoidance cycle.
                          </li>
                          <li>
                            <strong>Engagement:</strong> Appeared engaged during
                            discussion of strategies.
                          </li>
                          <li>
                            <strong>Safety:</strong> Denied suicidal or
                            homicidal ideation.
                          </li>
                        </ul>
                      </div>

                      {/* Interventions */}
                      <div className="mb-4">
                        <h3 className="font-semibold">
                          Interventions Provided
                        </h3>
                        <ul className=" ml-6">
                          <li>
                            Reviewed recent social event experience. Validated
                            anxiety and praised effort.
                          </li>
                          <li>
                            Applied CBT framework to challenge negative
                            automatic thoughts.
                          </li>
                          <li>
                            Practiced assertiveness skills through role-playing
                            a workplace scenario.
                          </li>
                          <li>
                            <strong>Assigned Homework:</strong> Attend a planned
                            social interaction and practice one assertive
                            statement.
                          </li>
                        </ul>
                      </div>

                      {/* Assessment */}
                      <div className="mb-4">
                        <h3 className="font-semibold">Assessment</h3>
                        <ul className=" ml-6">
                          <li>
                            <strong>Diagnosis:</strong> Social Anxiety Disorder
                            (Severe)
                          </li>
                          <li>
                            <strong>Progress:</strong> Demonstrating willingness
                            to attempt exposure; anxiety remains high.
                          </li>
                          <li>
                            <strong>Barriers:</strong> Difficulty with
                            assertiveness; sleep disrupted by worry.
                          </li>
                          <li>
                            <strong>Overall:</strong> Making gradual progress.
                            Needs continued skill reinforcement.
                          </li>
                        </ul>
                      </div>

                      {/* Plan */}
                      <div>
                        <h3 className="font-semibold">Plan</h3>
                        <ul className=" ml-6">
                          <li>
                            <strong>Frequency:</strong> Continue weekly therapy
                            sessions
                          </li>
                          <li>
                            <strong>Techniques:</strong> Focus on gradual
                            exposure hierarchy and intensify assertiveness
                            training
                          </li>
                          <li>
                            <strong>Future Focus:</strong> Briefly address sleep
                            hygiene if poor sleep persists
                          </li>
                          <li>
                            <strong>Homework:</strong> Follow up on assigned
                            social and assertiveness tasks
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>

            <TabPanel>
              <h2>Chartwright - Example 3</h2>
            </TabPanel>
          </Tabs>
        </TabPanel>

        <TabPanel>
          <Tabs forceRenderTabPanel>
            <TabList>
              <Tab>Example 1</Tab>
              <Tab>Example 2</Tab>
            </TabList>
            <TabPanel>
              <h2>Redactify - Example 1</h2>
            </TabPanel>

            <TabPanel>
              <h2>Redactify - Example 2</h2>
            </TabPanel>
          </Tabs>
        </TabPanel>

        <TabPanel>
          <Tabs forceRenderTabPanel>
            <TabList>
              <Tab>Example 1</Tab>
              <Tab>Example 2</Tab>
              <Tab>Example 3</Tab>
              <Tab>Example 4</Tab>
            </TabList>
            <TabPanel>
              <h2>Validify - Example 1</h2>
            </TabPanel>

            <TabPanel>
              <h2>Validify - Example 2</h2>
            </TabPanel>
            <TabPanel>
              <h2>Validify - Example 3</h2>
            </TabPanel>
            <TabPanel>
              <h2>Validify - Example 4</h2>
            </TabPanel>
          </Tabs>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default SolutionsInAction;
