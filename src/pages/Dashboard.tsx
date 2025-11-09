// src/pages/Dashboard.tsx
import { useEffect, useState } from "react";
import StatCard from "../components/StatCard";
import ModuleCard from "../components/ModuleCard";


type Module = {
  id: string;
  name: string;
  progress: number; // 0–100
};

const MATH_MODULES: Module[] = [
  { id: "pure", name: "Pure Mathematics", progress: 40 },
  { id: "stats", name: "Statistics", progress: 20 },
  { id: "mech", name: "Mechanics", progress: 10 },
];

export default function Dashboard() {
  // Demo state (replace with API later)
  const [dueCards, setDueCards] = useState(24);
  const [nextQuiz, setNextQuiz] = useState("Pure Mathematics (tomorrow)");
  const [streak, setStreak] = useState(0);

  // Persist streak in localStorage so it survives refreshes
  useEffect(() => {
    const saved = Number(localStorage.getItem("streak") ?? "0");
    setStreak(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("streak", String(streak));
  }, [streak]);

  return (
    <div className="d-grid gap-4">
      {/* Greeting */}
      <section className="card">
        <div className="card-body">
          <h1 className="h3 fw-bold mb-1">Welcome back 👋</h1>
          <p className="text-muted mb-0">Ready to revise some A-level Maths?</p>
        </div>
      </section>

      {/* Key stats */}
      <section className="row g-3">
        <div className="col-12 col-md-4">
          <StatCard title="Streak" value={`${streak} days`} subtitle="Keep it going!">
            <div className="d-flex gap-2">
              <button className="btn btn-sm btn-primary" onClick={() => setStreak(s => s + 1)}>
                Add Day (demo)
              </button>
              <button className="btn btn-sm btn-outline-secondary" onClick={() => setStreak(0)}>
                Reset
              </button>
            </div>
          </StatCard>
        </div>

        <div className="col-12 col-md-4">
          <StatCard title="Cards Due Today" value={String(dueCards)} subtitle="Flashcards in queue">
            <button className="btn btn-sm btn-outline-primary" onClick={() => setDueCards(n => Math.max(0, n - 5))}>
              Review 5 (demo)
            </button>
          </StatCard>
        </div>

        <div className="col-12 col-md-4">
          <StatCard title="Next Quiz" value="Tomorrow" subtitle={nextQuiz}>
            <button className="btn btn-sm btn-outline-primary" onClick={() => setNextQuiz("Statistics (in 2 days)")}>
              Reschedule (demo)
            </button>
          </StatCard>
        </div>
      </section>

      {/* A-level Maths modules */}
      <section className="card">
        <div className="card-body">
          <div className="d-flex align-items-center justify-content-between mb-2">
            <h2 className="h5 fw-semibold mb-0">Maths Modules 📚</h2>
            <a className="btn btn-sm btn-outline-secondary" href="#">Manage</a>
          </div>

          <div className="row g-3">
            {MATH_MODULES.map(m => (
              <div className="col-12 col-sm-6 col-lg-4" key={m.id}>
                <ModuleCard name={m.name} progress={m.progress} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Today’s overview */}
      <section className="card">
        <div className="card-body">
          <h2 className="h5 fw-semibold">Today’s Overview 📈</h2>
          <ul className="list-group list-group-flush mt-2">
            <li className="list-group-item">{dueCards} flashcards due</li>
            <li className="list-group-item">Next quiz: {nextQuiz}</li>
            <li className="list-group-item">Tip: Do 20–30 mins per module</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

//nigger 