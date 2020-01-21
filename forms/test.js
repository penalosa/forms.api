const use = obj => {
  let r = {};
  Object.entries(obj).forEach(([k, v]) => {
    let m = {};
    m.title = v.title;
    m.body = v.body;
    m.type = v.type || "information";
    m.continue = "I understand";
    m.after = v.prev || "";
    m.logic = v.prev
      ? {
          $exists: v.prev
        }
      : "start";
    r[k] = m;
  });
  return {
    ...r,
    signature: {
      logic: {
        $exists: "_hour_CCTV_surveillance_and_random_checks_by_EUSA_staff"
      },
      type: "input",
      title: "Signature",
      after: "_hour_CCTV_surveillance_and_random_checks_by_EUSA_staff",
      body: "By writing my name below I agree to the entirety of this contract",
      inputs: [
        {
          key: "name",
          type: "text",
          placeholder: "Full legal name..."
        }
      ]
    },
    end: {
      after: "signature",
      logic: { $exists: "signature" },
      title: "Great!",
      body: "Now you can fill in the show application form",
      type: "last"
    }
  };
};
console.log(
  JSON.stringify(
    use({
      Preamble: {
        title: "Preamble",
        type: "first",
        body:
          "Fresh Air is a lovely resource, so to keep it available and great, all presenters must carefully read, sign and adhere to these studio rules throughout their presenting time at the station. Give it all a read through and familiarize yourself with the rules, their rationale, and how we enforce them. These rules are crucial for us etiquette-wise and for our relationship with EUSA. Violation of these rules could significantly hurt this relationship and so the station."
      },
      General_Rules: {
        title: "General Rules",
        body:
          "These rules are crucial to the proper operation of Freshair. Any violations will count as a strike.",
        prev: "Preamble"
      },
      Prompt_timing: {
        title: "Prompt timing",
        body:
          "When presenting a show, show up 10 minutes early so you can start promptly and coordinate playing the Top of the Hour with the leaving show.",
        prev: "General_Rules"
      },
      Don_t_overrun_your_timeslot: {
        title: "Don't overrun your timeslot",
        body:
          "Do not go over your time, even if the next show does not appear or you are the last show of the day.",
        prev: "Prompt_timing"
      },
      Don_t_comment_on_Ads: {
        title: "Don't comment on Ads",
        body:
          "Play adverts at their allotted time, if we have an agreement in place with a sponsor – you will be notified if we do. Don't comment on the ads during the rest of your show.",
        prev: "Don_t_overrun_your_timeslot"
      },
      No_food_or_drink_in_the_studio: {
        title: "No food or drink in the studio",
        body:
          "Only covered water is allowed in the studio. If we find e.g. food wrappers in the studio it will be followed up with CCTV.",
        prev: "Don_t_comment_on_Ads"
      },
      Keep_the_studio_tidy: {
        title: "Keep the studio tidy",
        body:
          "Take out with you any papers, USBs, jackets, etc. that you bring in. Keep the studio as tidy as you find it.",
        prev: "No_food_or_drink_in_the_studio"
      },
      Keep_the_studio_secure: {
        title: "Keep the studio secure",
        body:
          "Make sure the studio door is closed upon exiting to keep the equipment safe. Studio codes are for the relevant Fresh Air members only: do not share them with anyone. Committee members will distribute them directly to members with active shows.",
        prev: "Keep_the_studio_tidy"
      },
      Report_accidents_promptly: {
        title: "Report accidents promptly",
        body:
          "If something breaks, or if you notice that something is broken, report it to the tech team immediately. We don’t charge people for accidents, but a significant delay in reporting will result in a strike.",
        prev: "Keep_the_studio_secure"
      },
      Look_after_the_studio_equipment: {
        title: "Look after the studio equipment",
        body:
          "Do not attempt to move, rearrange/rewire, or change the settings of any equipment. Do not turn off the computer, decks or anything you found running.",
        prev: "Report_accidents_promptly"
      },
      Missing_a_show: {
        title: "Missing a show",
        body:
          "There are 3 things to do at least 24 hours before the slot you need to miss (exceptions are made for more sudden circumstances): tell the Head of Production directly that you'll have to miss it, offer the slot up for grabs on the FB group, and if someone can cover it, let the Head of Production know directly who will.",
        prev: "Look_after_the_studio_equipment"
      },
      Community: {
        title: "Community",
        body:
          "We expect everyone to be respectful in interactions and uphold the open & inclusive community we have as a station.",
        prev: "Missing_a_show"
      },
      Disruption: {
        title: "Disruption",
        body:
          "While uncommon, shows are liable to be disrupted for special Fresh Air events such as exciting guests or one-off broadcasts as well as essential repair work. We will endeavour to let you know as well in advance as possible and aim for minimal disruption if one should occur during your slot.",
        prev: "Community"
      },
      Member_Content_Licensing: {
        title: "Member Content Licensing",
        body:
          "Everyone at Fresh Air collaborates to create content for the station.",
        prev: "Disruption"
      },
      What_this_section_means_for_you: {
        title: "What this section means for you",
        body:
          "You grant Freshair the right to use your content for (among other things) promoting and advertising the station, which we will do occasionally. Any content you create using Freshair's support must also be first published through one of our platforms, before publishing on other platforms (e.g. Mixcloud).",
        prev: "Member_Content_Licensing"
      },
      Content_License: {
        title: "Content License",
        body:
          "You hereby grant to Fresh Air a non-exclusive, fully paid and royalty-free, transferable, sub-licensable, worldwide license to use the Content you create by use of the station’s facilities, name, or resources. This means that Freshair reserves the ability to use member-created content to (among other things) promote and advertise the station, which we will do occasionally.",
        prev: "What_this_section_means_for_you"
      },
      Publishing: {
        title: "Publishing",
        body:
          "Members are prohibited from using the station’s name, facilities, or resources solely for personal use, as actors independent from the station, or to make content to publish solely for other media platforms. Content created using the station’s facilities, name, or resources must be credited to the station. Content must broadcast or published on a Freshair platform before being broadcast or published through a personal medium.",
        prev: "Content_License"
      },
      Show_Content_Quality: {
        title: "Show Content Quality",
        body:
          "Sources for music include files brought in on USB, or transferred somehow to the studio computer to be played through the mAirList program. You can never use YouTube, Spotify or similar platforms like Apple Music as a music source for your show.",
        prev: "Publishing"
      },
      Major_Rules: {
        title: "Major Rules",
        body:
          "Violation of many of these rules will cause a member's show to be cancelled and/or recording allowances to be revoked immediately for the entire year.",
        prev: "Show_Content_Quality"
      },
      No_swearing_on_air: {
        title: "No swearing on air",
        body:
          "There is not a complete list of words that cannot be said on air, but you’ll have to use your common sense. No strong or crass expletives are permitted. Do not be offensive to listeners, bearing in mind who could be listening. Think/catch yourself before you speak, and consider the time and style of your show when considering if your word choice is appropriate. For example, at night, it is likely not an issue to say ‘bloody’, but this may sound crass on a morning or afternoon. It is also not okay to use an arguably inoffensive word in the wrong context and doing so will lead to the same consequences as swearing – for example, saying “cock” all the time while maintaining that you were speaking about poultry. Common sense is the key here, and catching yourself before you swear. Swearing makes you and the station sound unprofessional and is never necessary. If you do swear accidently, it can count as a strike. If you swear in an outright/strong or purposeful way or if you use offensive language towards anyone/group (including racist/sexist/targeting language) this will count as a major offence and your show will be cancelled for the year.",
        prev: "Major_Rules"
      },
      Under_the_influence: {
        title: "Under the influence",
        body:
          "Alcohol is prohibited. So is being in the studio while intoxicated under any substance. Your show will be cancelled immediately for the year if either are violated.",
        prev: "No_swearing_on_air"
      },
      Promoting_illicit_activities: {
        title: "Promoting illicit activities",
        body:
          "It is prohibited to speak favourably of or encourage use of substances, alcohol/drinking, or other illicit activities while broadcasting live or recorded. This rule stems from government radio regulations and violating this major rule will result in your show being cancelled for the year.",
        prev: "Under_the_influence"
      },
      No_smoking_or_use_of_e_cigarettes_in_the_studio: {
        title: "No smoking or use of e-cigarettes in the studio",
        body: "Violation will cause your show to be cancelled for the year.",
        prev: "Promoting_illicit_activities"
      },
      Studio_access: {
        title: "Studio access",
        body:
          "Never go into the studio outside of our broadcasting hours. All of Pleasance has CCTV recording 24hrs each day, so we will be able to monitor anyone breaking this rule. If violated, your show will be pulled, without second chances.",
        prev: "No_smoking_or_use_of_e_cigarettes_in_the_studio"
      },
      Studio_equipment: {
        title: "Studio equipment",
        body: "Never remove anything from the studio without permission",
        prev: "Studio_access"
      },
      Contract_Enforcement: {
        title: "Contract Enforcement",
        body: "This section lays out the ways that this contract is enforced.",
        prev: "Studio_equipment"
      },
      The_strike_system_for_minor_offenses: {
        title: "The 3 strike system for minor offenses",
        body:
          "Minor offenses include but aren’t limited to things like swearing accidentally on air, going over your time, forgetting to play ads, etc. If you get three strikes, you’ll have your show and broadcasting rights pulled for the year.",
        prev: "Contract_Enforcement"
      },
      Major_Offenses: {
        title: "Major Offenses",
        body:
          "Your show will be cancelled and recording allowances revoked. These include but aren't limited to drinking, intoxication, taking things from the studio and purposefully saying offensive things to listeners. These will result in your show being immediately cancelled. If major rules are broken at the end of the broadcast period, the penalty will be incurred for the following year as well.",
        prev: "The_strike_system_for_minor_offenses"
      },
      Edge_cases: {
        title: "Edge cases",
        body:
          "Whether an infraction is major or minor is set out in this contract, but in cases of uncertainty, designation will be decided by the committee. Where consequences for breaking the rules aren’t specified or in special circumstances, the decision will go to the committee as well.",
        prev: "Major_Offenses"
      },
      Our_Anonymous_Complaints_Form: {
        title: "Our Anonymous Complaints Form",
        body:
          "You'll find this on Freshair.org.uk, should you need to use it. The anonymous form is for members who want to report violations of the contract, whether they are being affected directly by things like people going over their time or more severe breaches that put the station at risk, like drinking in the studio or theft. This is a way to keep it accessible and non-personal. We will investigate any forms submitted, which is also open to the public.",
        prev: "Edge_cases"
      },
      CCTV: {
        title: "CCTV",
        body:
          "By entering the studios, you consent to being recorded on CCTV. This is for security purposes and will only be used in the case of a breach of our studio rules - in which case it will be viewed by a member of committee and/or EUSA staff. CCTV footage will be stored for a maximum of 6 months, after which it will be erased.",
        prev: "Our_Anonymous_Complaints_Form"
      },
      _hour_CCTV_surveillance_and_random_checks_by_EUSA_staff: {
        title: "24 hour CCTV surveillance and random checks by EUSA staff",
        body:
          "CCTV will be on at all times in Pleasance buildings and used to enforce rules and provide information to look into claims. EUSA staff will also check in the studio randomly during broadcast in a non-disruptive manner (as there are windows from hall to studio). The checks are part of compliance measures for the building’s alcohol license.",
        prev: "CCTV"
      }
    })
  )
);
