import { cn } from "@/app/utils/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;

  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn("grid grid-cols-1 md:grid-cols-3 gap-4 mx-auto", className)}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  body,
  footer,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  body?: React.ReactNode;
  footer?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black flex flex-col space-y-4",
        className
      )}
    >
      {header}
      {body}
      {footer}
    </div>
  );
};
