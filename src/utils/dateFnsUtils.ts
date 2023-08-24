import {
  differenceInDays,
  differenceInMonths,
  differenceInYears,
  parseISO,
} from "date-fns";

export const formatUpdatedDate = (
  isoDate: string,
  currentDate: Date = new Date()
): string => {
  const updatedDate = parseISO(isoDate);

  const daysDifference = differenceInDays(currentDate, updatedDate);
  const monthsDifference = differenceInMonths(currentDate, updatedDate);
  const yearsDifference = differenceInYears(currentDate, updatedDate);

  if (daysDifference === 0) {
    return "Atualizado hoje";
  } else if (daysDifference === 1) {
    return "Atualizado ontem";
  } else if (yearsDifference === 0 && monthsDifference === 0) {
    return `Atualizado há ${daysDifference} ${
      daysDifference === 1 ? "dia" : "dias"
    }`;
  } else if (yearsDifference === 0) {
    return `Atualizado há ${monthsDifference} ${
      monthsDifference === 1 ? "mês" : "meses"
    }`;
  } else if (yearsDifference === 1) {
    return `Atualizado há 1 ano`;
  } else {
    return `Atualizado há ${yearsDifference} anos`;
  }
};
