"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion, type MotionProps } from "motion/react";

interface LineShadowTextProps extends Omit<React.HTMLAttributes<HTMLElement>, keyof MotionProps>, MotionProps {
  shadowColor?: string;
  as?: keyof React.JSX.IntrinsicElements;
}

export function LineShadowText({
  children,
  shadowColor = "rgba(47, 164, 169, 0.5)",
  className,
  as = "span",
  ...props
}: LineShadowTextProps) {
  const MotionComponent = motion.create(as as any);

  return (
    <MotionComponent
      className={cn("relative inline-block", className)}
      style={{
        textShadow: `0 0 20px ${shadowColor}, 0 0 40px ${shadowColor}`,
      }}
      {...props}
    >
      {children}
    </MotionComponent>
  );
}
