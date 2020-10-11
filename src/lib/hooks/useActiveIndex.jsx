import React from "react";

export default function useActiveIndex({
  maxIndex = 0,
  initialIndex = 0,
  autoplay = 0,
  onChange = (index) => {},
  onBeforeChange = async (index) => {},
} = {}) {
  const [state, setState] = React.useState(initialIndex);
  const interval = React.useRef();
  const sanitizedChange = () => {
    if (typeof onChange == "function") {
      return onChange(state);
    }
  };
  const next = async (onLast) => {
    if (typeof onLast == "function" && maxIndex === state) {
      return onLast();
    }
    await onBeforeChange();
    setState((state) => (state <= maxIndex - 1 ? state + 1 : 0));
    sanitizedChange();
  };
  const previous = async () => {
    await onBeforeChange();
    setState((state) => (state !== 0 ? state - 1 : maxIndex));
    sanitizedChange();
  };
  React.useEffect(() => {
    if (interval.current) {
      clearInterval(interval.current);
    }
    interval.current = autoplay ? setInterval(() => next(), autoplay) : 0;
    return () => {
      if (autoplay) {
        clearInterval(interval.current);
      }
    };
  }, [state]);
  return {
    index: state,
    next,
    previous,
    setIndex: setState,
    isLast: maxIndex === state,
    isFirst: 0 === state,
  };
}
