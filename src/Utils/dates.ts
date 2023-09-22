import { format, parse, startOfMonth } from "date-fns"
import { enUS, de } from "date-fns/locale"

interface Locales {
   en: Locale,
   de: Locale 
}

export interface CalanderData {
    year: string,
    month: string,
    day: string,
    weekday: string,
    indexInWeek: number,
    fullDay: string
}

export interface MarkerData {
    date: string
    style: object
}

const DATE_FNS_LOCALES : Locales = {
     en: enUS,
     de: de
}

const YEAR = "yyyy"
const MONTH = "MM"
const MONTH_FULL = "MMM"
const DAY = "dd"
const WEEKDAY = "EEEE"
const FULL_DATE = "dd-MM-yyyy"

export const getMonthDate = (locale: string, updateMonth: number) : CalanderData[] => {
    const dateFnsLocale = DATE_FNS_LOCALES[locale as keyof Locales]
    const currentDate = new Date()
    const currentYear = currentDate?.getFullYear()
    const currentMonth = updateMonth ?? currentDate?.getMonth()
    const currentMonthDayCount = new Date(currentYear, currentMonth, 0).getDate();
    const totalDaysInYear = ((currentYear % 4 === 0 && currentYear % 100 > 0) || currentYear % 400 == 0) ? 366 : 365;
    const firstDayOfMonth = new Date()
    firstDayOfMonth.setDate(1)
    firstDayOfMonth.setMonth(9)
    
    const daysData : CalanderData[] = []
    for (let i = 0; i < currentMonthDayCount; i++) {
      daysData.push({
         year: format(firstDayOfMonth, YEAR),
         month: format(firstDayOfMonth, MONTH),
         day: format(firstDayOfMonth, DAY),
         weekday: format(firstDayOfMonth, WEEKDAY, { locale: dateFnsLocale }),
         indexInWeek: getFoIndexStartingMonday(firstDayOfMonth.getDay()),
         fullDay: format(firstDayOfMonth, FULL_DATE)
      })
      firstDayOfMonth.setDate(firstDayOfMonth.getDate() + 1)
    }
    return convertToFiveBySevenFormat(daysData)
  }


  export const getMonthAndYear = (locale: string)  => {
    const currentDate = new Date()
    const currentYear = currentDate?.getFullYear()
    const currentMonth = currentDate?.getMonth()
    const month = format(currentDate, MONTH_FULL, {locale: DATE_FNS_LOCALES[locale as keyof Locales]})
    return {
        month: month,
        year: currentYear,
        monthNumber: currentMonth
    } 
    
  }

  const getFoIndexStartingMonday = (index: number) => {
    return index === 0 ? 6 : index -1
  }
  const convertToFiveBySevenFormat = (daysData: CalanderData[]) => {
      const startFromIndex = daysData[0].indexInWeek
      const convertedData = []
      for(let i =0 ; i< startFromIndex; i++){
        convertedData.push(undefined)
      }
      convertedData.push(...daysData)
      const lastGridItems = (5 * 7) - convertedData.length
      
    //   for(let i =0 ; i< lastGridItems; i++){
    //     convertedData.push(undefined)
    //   }
      return convertedData || []
  }

  export const getWeekDays = (locale: string) =>
{
    var baseDate = new Date(Date.UTC(2017, 0, 2));
    var weekDays = [];
    for(let i = 0; i < 7; i++)
    {       
        weekDays.push(baseDate.toLocaleDateString(locale, { weekday: 'long' }));
        baseDate.setDate(baseDate.getDate() + 1);       
    }
    return weekDays;
}