import { useCallback, useEffect, useRef } from "react";
export async function delay(seconds = 0) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, seconds * 1000);
  });
}
export function clamp(num, min, max) {
  return num <= min ? min : num >= max ? max : num;
}
export function makeClasses(...args) {
  // console.log(args);
  return args.filter(Boolean).join(" ");
}
export const linear = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
export const scrollToRef = (ref) =>
  window.scrollTo({
    top: ref.current.offsetTop - (window.innerWidth < 768 ? 300 : 100),
    behavior: "smooth",
  });
export function useOutsideAlerterRef(onClick, dependencies = []) {
  const ref = useRef(0);
  /**
   * Alert if clicked on outside of element
   */
  const handleClickOutside = useCallback(
    (event) => {
      if (
        ref.current &&
        !ref.current.contains(event.target) &&
        !dependencies.filter((x) => {
          if (!x) {
            return false;
          }
          try {
            return Boolean(x.current.contains(event.target));
          } catch (e) {
            if (x) {
              return Boolean(x.contains(event.target));
            }
            return false;
          }
        }).length
      ) {
        onClick(event);
      }
    },
    [onClick, dependencies]
  );

  useEffect(() => {
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);
  return ref;
}
