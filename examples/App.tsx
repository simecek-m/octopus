import { useState, useEffect, FC } from "react";

type StateType = {
  name: string;
  age: number;
};

interface WidgetProps {
  title: string;
  size: "sm" | "md" | "lg" | "xl";
}

const Widget: FC<WidgetProps> = (title, size) => {
  const color: string = "red";
  const count: number = 5;
  const [state, setState] = useState<StateType>(null);
  const calculateWidth = () => size * count;
  useEffect(() => {
    const start = color === "red";
    if (start) {
      console.log("component Widget initialized");
    } else {
      console.warn("component has corrupted state");
    }
  }, []);
  return (
    <div>
      {title && <h1>{title}</h1>}
      <Description color={color} size="medium">
        widget description
      </Description>
      <Widget
        user="Mark Bill"
        icon={<HomeIcon size="xl" />}
        color={color}
        width={calculateWidth()}
        state={state}
        onChange={(data) => setState(data)}
      />
    </div>
  );
};

export default Widget;
