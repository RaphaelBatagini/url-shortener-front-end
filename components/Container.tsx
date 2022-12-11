export default function Container ({ className, children }: ContainerType) {
  return (
    <div className={`container mx-auto px-4 ${className}`}>
      { children }
    </div>
  );
}

export type ContainerType = {
  className?: string;
  children?: any;
}