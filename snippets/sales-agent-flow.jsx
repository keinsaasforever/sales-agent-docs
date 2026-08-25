const COPY = {
  en: {
    title: "Explore the pipeline",
    intro:
      "Change the controls to see which automated and human steps remain in the flow. This is a guide only; it does not change your dashboard settings.",
    sourceLabel: "Prospect source",
    runLabel: "Run trigger",
    featuresLabel: "Features and handoffs",
    sources: {
      salesNavigator: "Sales Navigator search or list",
      csv: "CSV import",
      companies: "Search existing companies",
    },
    runModes: {
      schedule: "Scheduled",
      manual: "Run Now",
    },
    toggles: {
      linkedin: "LinkedIn",
      email: "Email",
      approval: "Message approval",
      followups: "Follow-ups",
      calls: "Show call handoff",
    },
    on: "On",
    off: "Off",
    reset: "Reset view",
    legend: {
      human: "Human action",
      agent: "Sales Agent",
      decision: "Decision or gate",
      stop: "Stop and handoff",
      optional: "Optional path",
    },
    human: "Human",
    agent: "Agent",
    decision: "Gate",
    stop: "Handoff",
    optional: "Optional",
    icpTitle: "Define or change the ICP",
    icpText:
      "You set the target profile, exclusions, score weights, and pipeline threshold in Settings → Targeting.",
    rescoreTitle: "Refresh scores after an ICP change",
    rescoreText:
      "You choose Recompute for weight-only changes or AI rescore when the meaning of the ICP changed.",
    sourceTitle: "Launch the source",
    sourceText: (source) =>
      `You start a ${source}. Search work can use credits for returned candidates even when some later fail granular filters.`,
    qualifyTitle: "Collect, de-duplicate, blacklist, and score",
    qualifyText:
      "The agent checks source data, removes blocked or duplicate records, and assigns an ICP score.",
    thresholdTitle: "Does the contact pass the pipeline gate?",
    thresholdText:
      "Below-threshold contacts remain in the contact list. Eligible contacts can enter the Next run queue.",
    triggerTitle: "Start the pipeline",
    triggerSchedule:
      "The configured seat schedule starts the run on its selected days and time.",
    triggerManual:
      "You select Run Now. The same eligibility rules and daily limits still apply.",
    researchTitle: "Research and prepare outreach",
    researchText:
      "The agent enriches eligible prospects, gathers usable context, and prepares the enabled channel paths.",
    channelTitle: "Use the available channels",
    channelText: (channels) =>
      channels.length
        ? `The flow can use ${channels.join(" and ")}. LinkedIn can include an invitation before messaging; email can continue when it is eligible.`
        : "No outreach channel is enabled, so the prospect cannot progress to an automated send.",
    noChannelTitle: "No automated outreach path",
    noChannelText:
      "Enable at least one channel in Settings → Schedule before expecting outreach work in the queue.",
    approvalTitle: "Review the generated messages",
    approvalText:
      "You edit, regenerate, reject, or approve pending messages. Approval queues the message; it does not send it immediately.",
    autoTitle: "Use automatic delivery",
    autoText:
      "The agent can send an eligible generated message on the next run without a dashboard approval step. You remain responsible for its content.",
    sendTitle: "Send eligible initial outreach",
    sendText:
      "The agent rechecks stop conditions, channel availability, and daily limits before each send.",
    followupTitle: "Send due follow-ups",
    followupText: (email, linkedin) => {
      const parts = [];
      if (email) parts.push("up to 3 email follow-ups");
      if (linkedin) parts.push("up to 1 LinkedIn follow-up");
      return `Working-day cadence continues with ${parts.join(" and ")} while no reply or outcome exists.`;
    },
    noFollowupTitle: "Skip automated follow-ups",
    noFollowupText:
      "With follow-ups set to 0, the flow moves to human review after the initial outreach window.",
    replyTitle: "A reply is detected on either channel",
    replyText:
      "Automation stops immediately across both channels. You read the full thread, reply personally, and set the appropriate outcome.",
    noReplyTitle: "No reply after the configured sequence",
    callText:
      "When the digital sequence is exhausted, a prospect with a usable phone number appears in To Call. You make the call and record the result.",
    reviewText:
      "You review the prospect and record the appropriate outcome. Mark the prospect Unreachable when no usable path remains.",
    outcomeTitle: "A human outcome ends automation",
    outcomeText:
      "Meeting, Offer Sent, Closed Deal, Not interesting, Lost Deal, or Unreachable stops all automated steps immediately.",
    globalStop:
      "At any point, archiving the prospect, adding its company to the blacklist, or setting an outcome stops future automated work.",
    linkedinLabel: "LinkedIn",
    emailLabel: "email",
  },
  de: {
    title: "Pipeline erkunden",
    intro:
      "Ändere die Auswahl, um zu sehen, welche automatisierten und menschlichen Schritte im Ablauf bleiben. Diese Ansicht erklärt die Logik; sie ändert keine Einstellungen im Dashboard.",
    sourceLabel: "Prospect-Quelle",
    runLabel: "Start des Laufs",
    featuresLabel: "Funktionen und Übergaben",
    sources: {
      salesNavigator: "Sales-Navigator-Suche oder -Liste",
      csv: "CSV-Import",
      companies: "Suche bei bestehenden Unternehmen",
    },
    runModes: {
      schedule: "Zeitplan",
      manual: "Run Now",
    },
    toggles: {
      linkedin: "LinkedIn",
      email: "E-Mail",
      approval: "Nachrichtenfreigabe",
      followups: "Follow-ups",
      calls: "Call-Übergabe anzeigen",
    },
    on: "An",
    off: "Aus",
    reset: "Ansicht zurücksetzen",
    legend: {
      human: "Menschliche Aktion",
      agent: "Sales Agent",
      decision: "Entscheidung oder Gate",
      stop: "Stopp und Übergabe",
      optional: "Optionaler Pfad",
    },
    human: "Mensch",
    agent: "Agent",
    decision: "Gate",
    stop: "Übergabe",
    optional: "Optional",
    icpTitle: "ICP definieren oder ändern",
    icpText:
      "Du legst Zielprofil, Ausschlüsse, Score-Gewichte und Pipeline-Schwellenwert unter Settings → Targeting fest.",
    rescoreTitle: "Scores nach einer ICP-Änderung aktualisieren",
    rescoreText:
      "Du wählst Recompute bei reinen Gewichtsänderungen oder AI rescore, wenn sich die Bedeutung des ICP geändert hat.",
    sourceTitle: "Quelle starten",
    sourceText: (source) =>
      `Du startest ${source}. Sucharbeit kann Credits für gefundene Kandidaten verbrauchen, auch wenn einige später granulare Filter nicht erfüllen.`,
    qualifyTitle: "Sammeln, deduplizieren, Blacklist prüfen und scoren",
    qualifyText:
      "Der Agent prüft Quelldaten, entfernt blockierte oder doppelte Einträge und vergibt einen ICP-Score.",
    thresholdTitle: "Besteht der Kontakt das Pipeline-Gate?",
    thresholdText:
      "Kontakte unter dem Schwellenwert bleiben in der Kontaktliste. Geeignete Kontakte können in die Next run queue gelangen.",
    triggerTitle: "Pipeline starten",
    triggerSchedule:
      "Der konfigurierte Zeitplan des Seats startet den Lauf an den ausgewählten Tagen zur festgelegten Zeit.",
    triggerManual:
      "Du wählst Run Now. Die gleichen Eignungsregeln und Tageslimits gelten weiterhin.",
    researchTitle: "Recherche und Outreach vorbereiten",
    researchText:
      "Der Agent reichert geeignete Prospects an, sammelt nutzbaren Kontext und bereitet die aktivierten Kanalpfade vor.",
    channelTitle: "Verfügbare Kanäle nutzen",
    channelText: (channels) =>
      channels.length
        ? `Der Ablauf kann ${channels.join(" und ")} nutzen. LinkedIn kann vor der Nachricht eine Einladung enthalten; E-Mail kann fortfahren, wenn der Kontakt geeignet ist.`
        : "Es ist kein Outreach-Kanal aktiv. Der Prospect kann deshalb nicht zu einem automatisierten Versand weiterlaufen.",
    noChannelTitle: "Kein automatisierter Outreach-Pfad",
    noChannelText:
      "Aktiviere mindestens einen Kanal unter Settings → Schedule, bevor du Outreach-Arbeit in der Queue erwartest.",
    approvalTitle: "Erstellte Nachrichten prüfen",
    approvalText:
      "Du bearbeitest, regenerierst, verwirfst oder genehmigst ausstehende Nachrichten. Eine Freigabe stellt die Nachricht in die Queue; sie wird nicht sofort gesendet.",
    autoTitle: "Automatischen Versand nutzen",
    autoText:
      "Der Agent kann eine geeignete erstellte Nachricht im nächsten Lauf ohne Freigabeschritt im Dashboard senden. Du bleibst für den Inhalt verantwortlich.",
    sendTitle: "Geeigneten Erstkontakt senden",
    sendText:
      "Der Agent prüft vor jedem Versand erneut Stoppbedingungen, Kanalverfügbarkeit und Tageslimits.",
    followupTitle: "Fällige Follow-ups senden",
    followupText: (email, linkedin) => {
      const parts = [];
      if (email) parts.push("bis zu 3 E-Mail-Follow-ups");
      if (linkedin) parts.push("bis zu 1 LinkedIn-Follow-up");
      return `Die Werktags-Kadenz läuft mit ${parts.join(" und ")} weiter, solange keine Antwort und kein Outcome vorliegt.`;
    },
    noFollowupTitle: "Automatisierte Follow-ups überspringen",
    noFollowupText:
      "Wenn Follow-ups auf 0 stehen, wechselt der Ablauf nach dem Erstkontakt zur menschlichen Prüfung.",
    replyTitle: "Auf einem Kanal wird eine Antwort erkannt",
    replyText:
      "Die Automatisierung stoppt sofort auf beiden Kanälen. Du liest den vollständigen Verlauf, antwortest persönlich und setzt das passende Outcome.",
    noReplyTitle: "Keine Antwort nach der konfigurierten Sequenz",
    callText:
      "Ist die digitale Sequenz ausgeschöpft, erscheint ein Prospect mit nutzbarer Telefonnummer unter To Call. Du führst den Anruf und dokumentierst das Ergebnis.",
    reviewText:
      "Du prüfst den Prospect und setzt das passende Outcome. Markiere ihn als Unreachable, wenn kein nutzbarer Pfad mehr besteht.",
    outcomeTitle: "Ein menschliches Outcome beendet die Automatisierung",
    outcomeText:
      "Meeting, Offer Sent, Closed Deal, Not interesting, Lost Deal oder Unreachable stoppt sofort alle automatisierten Schritte.",
    globalStop:
      "Zu jedem Zeitpunkt stoppen Archivieren, ein neuer Blacklist-Treffer oder ein gesetztes Outcome alle zukünftigen automatisierten Schritte.",
    linkedinLabel: "LinkedIn",
    emailLabel: "E-Mail",
  },
};

const TYPE_STYLES = {
  human: {
    card: "border-amber-300 bg-amber-50 dark:border-amber-500/40 dark:bg-amber-950/30",
    badge: "bg-amber-200 text-amber-950 dark:bg-amber-400/20 dark:text-amber-100",
  },
  agent: {
    card: "border-blue-300 bg-blue-50 dark:border-blue-500/40 dark:bg-blue-950/30",
    badge: "bg-blue-200 text-blue-950 dark:bg-blue-400/20 dark:text-blue-100",
  },
  decision: {
    card: "border-zinc-300 bg-zinc-50 dark:border-zinc-600 dark:bg-zinc-900",
    badge: "bg-zinc-200 text-zinc-900 dark:bg-zinc-700 dark:text-zinc-100",
  },
  stop: {
    card: "border-emerald-300 bg-emerald-50 dark:border-emerald-500/40 dark:bg-emerald-950/30",
    badge: "bg-emerald-200 text-emerald-950 dark:bg-emerald-400/20 dark:text-emerald-100",
  },
  optional: {
    card: "border-violet-300 bg-violet-50 dark:border-violet-500/40 dark:bg-violet-950/30",
    badge: "bg-violet-200 text-violet-950 dark:bg-violet-400/20 dark:text-violet-100",
  },
};

const FlowNode = ({ type, label, title, text }) => {
  const styles = TYPE_STYLES[type];
  return (
    <div className={`rounded-xl border p-4 shadow-sm ${styles.card}`}>
      <div className="mb-2 flex items-center gap-2">
        <span className={`rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide ${styles.badge}`}>
          {label}
        </span>
      </div>
      <div className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">{title}</div>
      <div className="mt-1 text-sm leading-6 text-zinc-700 dark:text-zinc-300">{text}</div>
    </div>
  );
};

const Connector = () => (
  <div aria-hidden="true" className="flex h-8 items-center justify-center text-xl text-zinc-400 dark:text-zinc-500">
    ↓
  </div>
);

const Toggle = ({ active, label, onLabel, offLabel, onClick }) => (
  <button
    type="button"
    aria-pressed={active}
    onClick={onClick}
    className={
      active
        ? "flex min-h-10 items-center justify-between gap-3 rounded-lg border border-[#0c04e4] bg-[#0c04e4] px-3 py-2 text-left text-sm font-medium text-white shadow-sm"
        : "flex min-h-10 items-center justify-between gap-3 rounded-lg border border-zinc-300 bg-white px-3 py-2 text-left text-sm font-medium text-zinc-900 hover:border-[#0c04e4] hover:bg-blue-50 dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:border-[#6B65F2] dark:hover:bg-zinc-800"
    }
  >
    <span>{label}</span>
    <span className={active ? "text-xs text-blue-100" : "text-xs text-zinc-500 dark:text-zinc-400"}>
      {active ? onLabel : offLabel}
    </span>
  </button>
);

export const SalesAgentFlow = ({ language = "en" }) => {
  const c = COPY[language] || COPY.en;
  const [source, setSource] = useState("salesNavigator");
  const [runMode, setRunMode] = useState("schedule");
  const [linkedin, setLinkedin] = useState(true);
  const [email, setEmail] = useState(true);
  const [approval, setApproval] = useState(true);
  const [followups, setFollowups] = useState(true);
  const [calls, setCalls] = useState(true);

  const channels = [];
  if (linkedin) channels.push(c.linkedinLabel);
  if (email) channels.push(c.emailLabel);

  const reset = () => {
    setSource("salesNavigator");
    setRunMode("schedule");
    setLinkedin(true);
    setEmail(true);
    setApproval(true);
    setFollowups(true);
    setCalls(true);
  };

  return (
    <div className="not-prose my-8 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-700 dark:bg-zinc-950">
      <div className="border-b border-zinc-200 bg-zinc-50 px-5 py-5 dark:border-zinc-700 dark:bg-zinc-900">
        <div className="text-lg font-semibold text-zinc-950 dark:text-zinc-50">{c.title}</div>
        <p className="mt-1 max-w-3xl text-sm leading-6 text-zinc-700 dark:text-zinc-300">{c.intro}</p>
      </div>

      <div className="grid gap-5 border-b border-zinc-200 p-5 dark:border-zinc-700 lg:grid-cols-3">
        <fieldset>
          <legend className="mb-2 text-xs font-semibold uppercase tracking-wide text-zinc-600 dark:text-zinc-300">
            {c.sourceLabel}
          </legend>
          <div className="space-y-2">
            {Object.entries(c.sources).map(([key, label]) => (
              <button
                key={key}
                type="button"
                aria-pressed={source === key}
                onClick={() => setSource(key)}
                className={
                  source === key
                    ? "w-full rounded-lg border border-[#0c04e4] bg-blue-50 px-3 py-2 text-left text-sm font-medium text-[#0c04e4] dark:border-[#6B65F2] dark:bg-blue-950/40 dark:text-blue-200"
                    : "w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-left text-sm text-zinc-900 hover:border-[#0c04e4] hover:bg-blue-50 dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:border-[#6B65F2] dark:hover:bg-zinc-800"
                }
              >
                {label}
              </button>
            ))}
          </div>
        </fieldset>

        <fieldset>
          <legend className="mb-2 text-xs font-semibold uppercase tracking-wide text-zinc-600 dark:text-zinc-300">
            {c.runLabel}
          </legend>
          <div className="space-y-2">
            {Object.entries(c.runModes).map(([key, label]) => (
              <button
                key={key}
                type="button"
                aria-pressed={runMode === key}
                onClick={() => setRunMode(key)}
                className={
                  runMode === key
                    ? "w-full rounded-lg border border-[#0c04e4] bg-blue-50 px-3 py-2 text-left text-sm font-medium text-[#0c04e4] dark:border-[#6B65F2] dark:bg-blue-950/40 dark:text-blue-200"
                    : "w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-left text-sm text-zinc-900 hover:border-[#0c04e4] hover:bg-blue-50 dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:border-[#6B65F2] dark:hover:bg-zinc-800"
                }
              >
                {label}
              </button>
            ))}
          </div>
        </fieldset>

        <fieldset>
          <legend className="mb-2 text-xs font-semibold uppercase tracking-wide text-zinc-600 dark:text-zinc-300">
            {c.featuresLabel}
          </legend>
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
            <Toggle active={linkedin} label={c.toggles.linkedin} onLabel={c.on} offLabel={c.off} onClick={() => setLinkedin(!linkedin)} />
            <Toggle active={email} label={c.toggles.email} onLabel={c.on} offLabel={c.off} onClick={() => setEmail(!email)} />
            <Toggle active={approval} label={c.toggles.approval} onLabel={c.on} offLabel={c.off} onClick={() => setApproval(!approval)} />
            <Toggle active={followups} label={c.toggles.followups} onLabel={c.on} offLabel={c.off} onClick={() => setFollowups(!followups)} />
            <Toggle active={calls} label={c.toggles.calls} onLabel={c.on} offLabel={c.off} onClick={() => setCalls(!calls)} />
          </div>
        </fieldset>
      </div>

      <div className="flex flex-wrap items-center gap-3 border-b border-zinc-200 px-5 py-3 text-xs text-zinc-600 dark:border-zinc-700 dark:text-zinc-300">
        {Object.entries(c.legend).map(([key, label]) => (
          <span key={key} className="inline-flex items-center gap-1.5">
            <span className={`h-2.5 w-2.5 rounded-full ${TYPE_STYLES[key].badge.split(" ")[0]}`} />
            {label}
          </span>
        ))}
        <button type="button" onClick={reset} className="ml-auto rounded-md px-2 py-1 font-medium text-[#0c04e4] hover:bg-blue-50 dark:text-blue-300 dark:hover:bg-zinc-800">
          {c.reset}
        </button>
      </div>

      <div className="mx-auto max-w-3xl p-5 sm:p-7">
        <FlowNode type="human" label={c.human} title={c.icpTitle} text={c.icpText} />
        <Connector />
        <FlowNode type="human" label={c.human} title={c.rescoreTitle} text={c.rescoreText} />
        <Connector />
        <FlowNode type="human" label={c.human} title={c.sourceTitle} text={c.sourceText(c.sources[source])} />
        <Connector />
        <FlowNode type="agent" label={c.agent} title={c.qualifyTitle} text={c.qualifyText} />
        <Connector />
        <FlowNode type="decision" label={c.decision} title={c.thresholdTitle} text={c.thresholdText} />
        <Connector />
        <FlowNode
          type="human"
          label={c.human}
          title={c.triggerTitle}
          text={runMode === "schedule" ? c.triggerSchedule : c.triggerManual}
        />
        <Connector />
        <FlowNode type="agent" label={c.agent} title={c.researchTitle} text={c.researchText} />
        <Connector />
        <FlowNode
          type={channels.length ? "decision" : "optional"}
          label={channels.length ? c.decision : c.optional}
          title={channels.length ? c.channelTitle : c.noChannelTitle}
          text={channels.length ? c.channelText(channels) : c.noChannelText}
        />

        {channels.length > 0 && (
          <>
            <Connector />
            <FlowNode
              type={approval ? "human" : "agent"}
              label={approval ? c.human : c.agent}
              title={approval ? c.approvalTitle : c.autoTitle}
              text={approval ? c.approvalText : c.autoText}
            />
            <Connector />
            <FlowNode type="agent" label={c.agent} title={c.sendTitle} text={c.sendText} />
            <Connector />
            <FlowNode
              type={followups ? "agent" : "optional"}
              label={followups ? c.agent : c.optional}
              title={followups ? c.followupTitle : c.noFollowupTitle}
              text={followups ? c.followupText(email, linkedin) : c.noFollowupText}
            />
            <Connector />

            <div className="grid gap-4 md:grid-cols-2">
              <FlowNode type="stop" label={c.stop} title={c.replyTitle} text={c.replyText} />
              <FlowNode
                type="human"
                label={c.human}
                title={c.noReplyTitle}
                text={calls ? c.callText : c.reviewText}
              />
            </div>
            <Connector />
            <FlowNode type="stop" label={c.stop} title={c.outcomeTitle} text={c.outcomeText} />
          </>
        )}

        <div className="mt-5 rounded-xl border border-dashed border-zinc-300 px-4 py-3 text-sm leading-6 text-zinc-700 dark:border-zinc-600 dark:text-zinc-300">
          {c.globalStop}
        </div>
      </div>
    </div>
  );
};
