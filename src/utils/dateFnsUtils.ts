import {
  format,
  differenceInDays,
  differenceInMonths,
  differenceInYears,
  parseISO,
} from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

export const formatUpdatedDate = (isoDate: string): string => {
  const currentDate = new Date();
  const updatedDate = parseISO(isoDate);

  const daysDifference = differenceInDays(currentDate, updatedDate);
  const monthsDifference = differenceInMonths(currentDate, updatedDate);
  const yearsDifference = differenceInYears(currentDate, updatedDate);

  if (daysDifference <= 1) {
    return "Atualizado há 1 dia";
  } else if (daysDifference < 30) {
    return `Atualizado há ${daysDifference} dias`;
  } else if (monthsDifference < 1) {
    return format(updatedDate, "'Atualizado em' d 'de' MMMM", { locale: ptBR });
  } else if (monthsDifference < 12) {
    return `Atualizado há ${monthsDifference} ${
      monthsDifference === 1 ? "mês" : "meses"
    }`;
  } else {
    return `Atualizado há ${yearsDifference} ${
      yearsDifference === 1 ? "ano" : "anos"
    }`;
  }
};
