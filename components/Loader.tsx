type LoaderProps = {
  size?: "sm" | "md" | "lg";
  label?: string;
  className?: string;
};

export default function Loader({ size = "md", label, className = "" }: LoaderProps) {
  const sizeClass = size === "sm" ? "loader--sm" : size === "lg" ? "loader--lg" : "";

  if (label) {
    return (
      <span
        className={`loader-wrap ${className}`}
        role="status"
        aria-label={label}
      >
        <span className={`loader ${sizeClass}`} aria-hidden="true" />
        <span className="loader-label">{label}</span>
      </span>
    );
  }

  return (
    <span className={className} role="status" aria-label="Cargando">
      <span className={`loader ${sizeClass}`} aria-hidden="true" />
    </span>
  );
}
