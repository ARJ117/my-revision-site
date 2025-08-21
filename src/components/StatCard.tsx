// src/components/StatCard.tsx
import type { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  title: string;
  value: string;
  subtitle?: string;
}>;

export default function StatCard({ title, value, subtitle, children }: Props) {
  return (
    <div className="card h-100">
      <div className="card-body">
        <div className="text-muted small">{title}</div>
        <div className="h4 fw-bold mb-1">{value}</div>
        {subtitle && <div className="text-muted mb-3">{subtitle}</div>}
        {children}
      </div>
    </div>
  );
}
