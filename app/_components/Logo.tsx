export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center ${className}`}>
      <img
        src="/logo.png"
        alt="Aurora Trip"
        className="h-28 w-auto object-contain"
      />
    </div>
  );
}
