"use client";
import { useState, useEffect, useMemo } from "react";

const SM = 640;
const MD = 768;
const LG = 1024;
const XL = 1280;
const XXL = 1536;

type DeviceTypeLabel = "base" | "sm" | "md" | "lg" | "xl" | "2xl";
const ORDER: DeviceTypeLabel[] = ["base", "sm", "md", "lg", "xl", "2xl"];

export function useDeviceType() {
  const [deviceType, setDeviceType] = useState<DeviceTypeLabel>("lg");

  console.log("deviceType", deviceType);

  useEffect(() => {
    const updateDeviceType = () => {
      const width = window.innerWidth;
      if (width < SM) {
        setDeviceType("base");
      } else if (width < MD) {
        setDeviceType("sm");
      } else if (width < LG) {
        setDeviceType("md");
      } else if (width < XL) {
        setDeviceType("lg");
      } else if (width < XXL) {
        setDeviceType("xl");
      } else {
        setDeviceType("2xl");
      }
    };

    window.addEventListener("resize", updateDeviceType);
    updateDeviceType();

    return () => {
      window.removeEventListener("resize", updateDeviceType);
    };
  }, []);

  const isLargerThan = useMemo(
    () => (bp: DeviceTypeLabel) =>
      ORDER.indexOf(deviceType) > ORDER.indexOf(bp),
    [deviceType]
  );

  const isSmallerThan = useMemo(
    () => (bp: DeviceTypeLabel) =>
      ORDER.indexOf(deviceType) < ORDER.indexOf(bp),
    [deviceType]
  );

  return { deviceType, isLargerThan, isSmallerThan };
}
