import React from "react";
import "cally";

export interface DatePickerProps {
  onClick?: () => void;
}

export const DatePicker = ({ onClick, ...props }: DatePickerProps) => {
  return (
    <calendar-date>
      <calendar-month></calendar-month>
    </calendar-date>
  );
};
