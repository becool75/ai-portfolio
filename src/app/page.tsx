export default function Home() {
  const services = [
    {
      icon: "💬",
      title: "AI Chatbots",
      description: "Intelligente Chatbots, die Kundenanfragen 24/7 beantworten, Leads qualifizieren und Support automatisieren.",
    },
    {
      icon: "🎯",
      title: "Lead-Qualifizierung",
      description: "AI analysiert potenzielle Kunden automatisch und bewertet sie nach Relevanz — damit du nur mit den besten Leads sprichst.",
    },
    {
      icon: "✍️",
      title: "Content-Automatisierung",
      description: "Aus einem Text automatisch LinkedIn-Posts, Tweets, E-Mails und Instagram-Captions generieren.",
    },
    {
      icon: "⚡",
      title: "Individuelle AI-Lösungen",
      description: "Maßgeschneiderte Automatisierungen für deine spezifischen Business-Prozesse — von Datenanalyse bis Workflow-Optimierung.",
    },
  ];

  const projects = [
    {
      title: "AI Chatbot",
      description: "Vollständiges Chat-Widget mit Admin-Dashboard, Session-Management und anpassbarem System-Prompt. Einfach per Embed-Code in jede Website integrierbar.",
      tags: ["Next.js", "OpenAI", "Supabase", "Widget"],
      url: "https://ai-chatbot-topaz-phi-11.vercel.app",
      gradient: "from-blue-600 to-cyan-500",
    },
    {
      title: "AI Lead Qualifier",
      description: "Automatische Website-Analyse mit AI-gestütztem Scoring (1-10), Branchenerkennung und personalisierten Outreach-Nachrichten.",
      tags: ["Next.js", "OpenAI", "Supabase", "Web Scraping"],
      url: "https://ai-lead-tool.vercel.app",
      gradient: "from-violet-600 to-purple-500",
    },
    {
      title: "AI Content Repurposer",
      description: "Ein Text rein — vier Formate raus: LinkedIn-Post, Tweet, E-Mail und Instagram-Caption. Mit Tonalität- und Sprachauswahl.",
      tags: ["Next.js", "OpenAI", "Multi-Format"],
      url: "https://ai-content-tool-zeta.vercel.app",
      gradient: "from-orange-500 to-rose-500",
    },
    {
      title: "AI Text Summarizer",
      description: "Lange Texte automatisch zusammenfassen mit einstellbarer Sprache (DE/EN). Inklusive Wörter-Zähler und Copy-Funktion.",
      tags: ["Next.js", "OpenAI", "NLP"],
      url: "https://ai-text-summarizer-rosy.vercel.app",
      gradient: "from-emerald-500 to-teal-500",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-800/60 bg-slate-950/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="text-xl font-bold text-white">
            Nova<span className="text-blue-500">Flow</span> AI
          </a>
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm text-slate-400 hover:text-white transition-colors">Leistungen</a>
            <a href="#projects" className="text-sm text-slate-400 hover:text-white transition-colors">Projekte</a>
            <a href="#about" className="text-sm text-slate-400 hover:text-white transition-colors">Über uns</a>
            <a href="#contact" className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors">
              Kontakt
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-slate-700 bg-slate-900/50 text-sm text-slate-300">
            AI-Automatisierung für dein Business
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Wir bauen AI-Lösungen,<br />
            <span className="text-blue-500">die wirklich funktionieren.</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10">
            Von intelligenten Chatbots bis zur automatischen Lead-Qualifizierung — wir entwickeln
            maßgeschneiderte AI-Tools, die dein Business auf das nächste Level bringen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="bg-blue-600 hover:bg-blue-500 text-white font-medium px-8 py-3 rounded-lg transition-colors text-center"
            >
              Projekte ansehen
            </a>
            <a
              href="#contact"
              className="border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white font-medium px-8 py-3 rounded-lg transition-colors text-center"
            >
              Kostenloses Erstgespräch
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-6 border-t border-slate-800/60">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Unsere Leistungen</h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Wir automatisieren die Prozesse, die dein Team am meisten Zeit kosten.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="border border-slate-800 rounded-xl p-6 bg-slate-900/30 hover:bg-slate-900/60 transition-colors"
              >
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 px-6 border-t border-slate-800/60">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Live-Projekte</h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Echte AI-Tools, die wir gebaut haben — klick dich durch die Live-Demos.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div
                key={project.title}
                className="border border-slate-800 rounded-xl overflow-hidden bg-slate-900/30 hover:bg-slate-900/60 transition-colors group"
              >
                {/* Gradient Preview */}
                <div className={`h-40 bg-gradient-to-br ${project.gradient} opacity-80 group-hover:opacity-100 transition-opacity flex items-center justify-center`}>
                  <span className="text-white text-2xl font-bold drop-shadow-lg">{project.title}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
                  >
                    Live Demo ansehen
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-6 border-t border-slate-800/60">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Über NovaFlow AI</h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              Wir sind spezialisiert auf die Entwicklung von AI-gestützten Automatisierungslösungen
              für kleine und mittelständische Unternehmen. Unser Fokus liegt auf praktischen Tools,
              die sofort Mehrwert liefern — keine leeren Versprechen, sondern funktionierende Produkte.
            </p>
            <p className="text-slate-400 text-lg leading-relaxed">
              Von der Idee bis zum fertigen Produkt in wenigen Tagen. Wir nutzen modernste AI-Technologie
              (GPT-4, Custom Models) kombiniert mit bewährten Web-Technologien, um skalierbare Lösungen
              zu bauen, die wirklich funktionieren.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-blue-500 mb-2">4+</div>
              <div className="text-slate-400">Live AI-Projekte</div>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-blue-500 mb-2">7 Tage</div>
              <div className="text-slate-400">Von Idee bis Launch</div>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-blue-500 mb-2">24/7</div>
              <div className="text-slate-400">AI arbeitet non-stop</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="py-20 px-6 border-t border-slate-800/60">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mx-auto text-center bg-gradient-to-b from-slate-900 to-slate-900/50 border border-slate-800 rounded-2xl p-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Bereit für AI-Power?
            </h2>
            <p className="text-slate-400 text-lg mb-8">
              Lass uns in einem kostenlosen Erstgespräch herausfinden, wie AI dein Business
              automatisieren kann. Keine Verpflichtung, nur Mehrwert.
            </p>
            <a
              href="mailto:kontakt@novaflow-ai.com"
              className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-medium px-8 py-3 rounded-lg transition-colors"
            >
              Erstgespräch vereinbaren
            </a>
            <p className="text-slate-600 text-sm mt-4">
              Antwort innerhalb von 24 Stunden
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-800/60">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-slate-500 text-sm">
            &copy; 2026 NovaFlow AI. Alle Rechte vorbehalten.
          </div>
          <div className="flex items-center gap-6">
            <a href="#services" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">Leistungen</a>
            <a href="#projects" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">Projekte</a>
            <a href="#contact" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">Kontakt</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
