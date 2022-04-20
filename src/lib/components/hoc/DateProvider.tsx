import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { useAppState } from "../../hooks/useAppState";
import { createElement } from "react";

interface AuxProps {
  children: React.ReactChild | React.ReactChildren;
}
const DateProvider = ({ children }: AuxProps) => {
  const { locale } = useAppState();
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} locale={locale}>
      {children}
    </LocalizationProvider>
  );
};

export default DateProvider;
