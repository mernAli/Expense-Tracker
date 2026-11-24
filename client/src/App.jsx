import { useEffect, useState } from "react";

export default function App() {
  const [status, setStatus] = useState("checking...");

  useEffect(() => {
    fetch("/api/health")
      .then((res) => res.json())
      .then((data) => setStatus(`API ${data.status} · DB ${data.database}`))
      .catch(() => setStatus("API unreachable"));
  }, []);

  return (
    <main className="mx-auto flex min-h-screen max-w-md flex-col items-center justify-center gap-3 p-6 text-center">
      <h1 className="text-2xl font-bold text-teal-700">Expense Tracker</h1>
      <p className="text-sm text-slate-600">{status}</p>
    </main>
  );
}
