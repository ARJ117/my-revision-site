// src/components/ModuleCard.tsx
type Props = {
    name: string;
    progress: number; // 0–100
  };
  
  export default function ModuleCard({ name, progress }: Props) {
    return (
      <div className="card h-100">
        <div className="card-body">
          <h3 className="h6 fw-semibold mb-2">{name}</h3>
          <div className="progress" role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100}>
            <div className="progress-bar" style={{ width: `${progress}%` }}>
              {progress}%
            </div>
          </div>
          <button className="btn btn-sm btn-primary mt-3 w-100">
            Continue
          </button>
        </div>
      </div>
    );
  }
  