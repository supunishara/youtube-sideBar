import { cn } from "../utils/cn";

const HoverDiv = (props) => {
  return (
    <div
      {...props}
      className={cn(
        "py-2 px-2 hover:bg-zinc-800 transition-all cursor-pointer rounded-xl",
        { "bg-zinc-800": props.isActive },
        props.className
      )}
    />
  );
};

export default HoverDiv;
