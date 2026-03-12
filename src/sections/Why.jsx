import React from "react";

export default function Why() {
  const rows = [
    ["Approach", "Rigid, one-process-fits-all", "Flexible, client-driven, customized per project"],
    ["Service Range", "General construction or design-build only", "5 comprehensive service types"],
    ["Process Style", "Overly process-heavy, delay-prone", "Practical, adaptive, efficiency-focused"],
    ["Client Relationship", "Formal, distant, multi-department handling", "Direct involvement, open communication"],
    ["Cost Transparency", "Hidden charges, vague costing", "Clear costing with detailed breakdowns"],
    ["Trust Factor", "Completion-driven", "Relationship and commitment-driven"],
  ];

  return (
    <section id="why" className="relative overflow-hidden bg-steel px-[8vw] py-[120px]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_80%_50%,rgba(26,92,80,0.2)_0%,transparent_70%)]" />

      <div className="reveal relative z-10 mb-16 text-center">
        <div className="mx-auto mb-5 inline-flex items-center gap-2 text-[11px] uppercase tracking-[3px] border border-gold px-3.5 py-1.5 text-gold">
          Our Advantage
        </div>
        <h2 className="font-display text-[clamp(42px,5vw,72px)] leading-none tracking-[1px] text-white">
          Why Choose <span className="text-gold">IGRIS?</span>
        </h2>
        <p className="mt-4 text-[16px] text-white/40">Our flexi-systemic approach sets us apart from typical construction companies</p>
      </div>

      <div className="reveal relative z-10 overflow-x-auto">
        <table className="w-full border-separate border-spacing-0">
          <thead>
            <tr>
              <th className="px-6 py-4 text-left text-[11px] font-semibold uppercase tracking-[2px] text-white/40">Category</th>
              <th className="px-6 py-4 text-center text-[11px] font-semibold uppercase tracking-[2px] text-white/25 border-b border-white/10">
                Typical Firms
              </th>
              <th className="px-6 py-4 text-center text-[11px] font-semibold uppercase tracking-[2px] text-gold bg-[rgba(232,160,32,0.1)] border border-[rgba(232,160,32,0.2)] border-b-0">
                ✦ IGRIS Balteus
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={r[0]} className="hover:bg-white/5">
                <td className="px-6 py-5 text-white font-semibold flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center bg-gold text-teal-deep text-[11px] font-bold [clip-path:polygon(0_0,calc(100%_-_6px)_0,100%_6px,100%_100%,6px_100%,0_calc(100%_-_6px))]">
                    {i + 1}
                  </span>
                  {r[0]}
                </td>
                <td className="px-6 py-5 text-center text-white/30 italic border-b border-white/10">{r[1]}</td>
                <td className="px-6 py-5 text-center text-white font-medium bg-[rgba(232,160,32,0.06)] border-b border-[rgba(232,160,32,0.15)] border-x border-[rgba(232,160,32,0.15)]">
                  <span className="text-gold mr-1.5">✦</span>
                  {r[2]}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={3} className="bg-[rgba(232,160,32,0.12)] border border-[rgba(232,160,32,0.2)] px-6 py-4 text-center text-[12px] font-semibold uppercase tracking-[1px] text-gold">
                Choose the firm that builds with you, not just for you.
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </section>
  );
}