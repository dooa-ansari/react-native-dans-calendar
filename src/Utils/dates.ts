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
    indexInWeek: number 
}

const DATE_FNS_LOCALES : Locales = {
     en: enUS,
     de: de
}

const YEAR = "yyyy"
const MONTH = "MM"
const DAY = "dd"
const WEEKDAY = "EEEE"

export const getMonthDate = (locale: string) : CalanderData[] => {
    const dateFnsLocale = DATE_FNS_LOCALES[locale as keyof Locales]
    const currentDate = new Date()
    const currentYear = currentDate?.getFullYear()
    const currentMonth = currentDate?.getMonth()
    const currentMonthDayCount = new Date(currentYear, currentMonth, 0).getDate();
    const totalDaysInYear = ((currentYear % 4 === 0 && currentYear % 100 > 0) || currentYear % 400 == 0) ? 366 : 365;
    const firstDayOfMonth = new Date()
    firstDayOfMonth.setDate(1)
    firstDayOfMonth.setMonth(9)
    console.log(firstDayOfMonth)

    const daysData : CalanderData[] = []
    for (let i = 0; i < currentMonthDayCount; i++) {
      daysData.push({
         year: format(firstDayOfMonth, YEAR),
         month: format(firstDayOfMonth, MONTH),
         day: format(firstDayOfMonth, DAY),
         weekday: format(firstDayOfMonth, WEEKDAY, { locale: dateFnsLocale }),
         indexInWeek: getFoIndexStartingMonday(firstDayOfMonth.getDay())
      })
      firstDayOfMonth.setDate(firstDayOfMonth.getDate() + 1)
    }
    return convertToFiveBySevenFormat(daysData)
  }

  const getFoIndexStartingMonday = (index: number) => {
    return index === 0 ? 6 : index -1
  }
  const convertToFiveBySevenFormat = (daysData: CalanderData[]) => {
      const startFromIndex = daysData[0].indexInWeek
      const convertedData = []
      console.log("start index"+startFromIndex)
      for(let i =0 ; i< startFromIndex; i++){
        convertedData.push(undefined)
      }
      convertedData.push(...daysData)
      const lastGridItems = (6 * 7) - convertedData.length
      for(let i =0 ; i< lastGridItems; i++){
        convertedData.push(undefined)
      }
      return convertedData || []
  }