interface ButtonProps {
  children: React.ReactNode;
  variant?: 'outline' | 'text';
  className?: string;
}

export default function Button({ children, variant = 'text', className = "" }: ButtonProps) {
  const baseStyle = "uppercase text-xs tracking-widest font-display transition-colors duration-300";
  
  const variants = {
    outline: "border border-white/50 px-6 py-3 hover:bg-white hover:text-black text-white",
    text: "text-white hover:opacity-80 underline underline-offset-4 decoration-1",
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
}