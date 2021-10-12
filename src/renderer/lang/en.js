export const en = {
  tabs: {
    home: 'Home',
    help: 'Help'
  },
  // Sidebar
  sidebar: {
    regexTool: 'Regex Tool',
    timestampConverter: 'Timestamp Converter',
    colorBox: 'Color Box',
    jsonParser: 'Json Parser',
    base64Converter: 'Base64 Converter',
    cronTool: 'Crontab Tool',
    regex: 'Regex',
    time: 'Time',
    color: 'Color',
    json: 'Json',
    image64: 'Image',
    cron: 'Cron'
  },
  // Regex Tool
  regex: {
    yourRegexExp: 'Your regular expression',
    yourTestStr: 'Your test string',
    clearFields: 'Clear Fields',
    matchResult: 'Match Result',
    noMatches: 'No matches ...',
    matchGroups: 'Match Groups',
    matchGroup: 'Match Group',
    cleanFields: 'Clean Fields',
    heresResult: 'Here\'s result.',
    uHaveAnUnmatchedPats: 'You have an unmatched parenthesis.',
    expError: 'Expression Error',
    invalidOpt: 'Invalid Option'
  },
  regexHelp: {
    title: 'Regex quick reference',
    squareBracket: 'A single character of: a, b, or c',
    squareNot: 'Any single character except: a, b, or c',
    squareAny: 'Any single character in the range a-z',
    squareRange: 'Any single character in the range a-z or A-Z',
    startOfLine: 'Start of line',
    endOfLine: 'End of line',
    startOfStr: 'Start of string',
    endOfStr: 'End of string',
    anyChar: 'Any single character',
    anyWSpace: 'Any whitespace character',
    anyNWSpace: 'Any non-whitespace character',
    anyDigit: 'Any digit',
    stopAtFirstA: 'Not greedy: Stop at first a',
    matchBeforeTom: 'Match char before Tom',

    anyNDigit: 'Any non-digit',
    anyWordChar: 'Any word character (letter, number, underscore)',
    anyNWordChar: 'Any non-word character',
    anyWordB: 'Any word boundary',
    capEnclosed: 'Capture everything enclosed',
    or: 'a or b',
    zeroOne: 'Zero or one of a',
    moreThanZero: 'Zero or more of a',
    moreThanOne: 'One or more of a',
    exactly3: 'Exactly 3 of a',
    moreThan3: '3 or more of a',
    between: 'Between 3 and 6 of a',
    matchTom: 'Only match Tom',
    matchBehindTom: 'Match char behind Tom',

    options: 'Options',
    caseI: 'case insensitive',
    unicode: 'treat pattern as a sequence of Unicode code points',
    newLine: 'allows . to match newlines',
    indexMatch: 'matches only from the index indicated by the lastIndex property of this regular expression in the target string (and does not attempt to match from any later indexes)'
  },
  // Timestamp Converter
  timestamp: {
    unitTimeChosen: 'Choose the unit of time',
    sec: 'Second',
    microSec: 'Micro Second',
    reset: 'Reset',
    inputTimestamp: 'Input timestamp',
    datetimeResult: 'Datetime Result',
    timestampResult: 'Timestamp Result',
    inputDatetime: 'Input Datetime'
  },
  // Color box
  color: {
    currentColor: 'Current Color',
    copied: 'Copied',
    inputHex: 'Input Hex',
    inputRGB: 'Input RGB',
    inputHSL: 'Input HSL'
  },
  // Json Parser
  json: {
    error: 'Error',
    toXML: 'TO XML',
    toJSON: 'TO JSON',
    reset: 'Reset',
    copy: 'Copy',
    ps: 'PS:The Key Value must be enclosed in double quotation marks.',
    seems: 'It seems that ',
    missing: 'missing',
    missingComma: 'missing comma',
    missingKV: 'missing key-value after comma.',
    missingElemInArray: 'missing element in array.',
    missingCommaInArray: 'missing comma in array.',
    undefinedVal: 'the value is undefined.',
    undefinedKey: 'the Key is undefined.',
    near: 'This error occured near',
    notBool: 'Error: It\'s not Boolean',
    notNull: 'Error: It\'s not null',
    notNum: 'it\'s not number...',
    moreBehind: 'More character in the end',
    inputJsonTip: 'Input your Json here.\n\nPS:The Key Value must be enclosed in double quotation marks.'
  },
  // Image Converter
  image64: {
    copy: 'COPY',
    clean: 'CLEAN',
    dragImgHere: 'Drag your 😺 image here. Base64 👉',
    inputBase64Here: 'You can input Base64 code here, and the image will be shown 👈.'
  },
  // crontab
  cron: {
    yourCronExp: 'Your Crontab expression',
    heresResult: 'Here\'s result.',
    expError: 'Expression error.',
    nextExec: 'Execute like as follow next ',
    times: 'times',
    every: 'every',
    at: 'At',
    in: 'In',
    on: 'On',
    from: 'from',
    through: 'through',
    and: 'and',
    of: 'of'
  },
  cronHelp: {
    minute: 'minute',
    hour: 'hour',
    day: 'day',
    month: 'month',
    year: 'year',
    week: 'week',
    optional: 'optional',
    dayOfWeekUnit: 'day-of-month',
    dayOfMonthUnit: 'day-of-month',
    dayOfMonth: 'day-of-month',
    dayOfWeek: 'day-of-week',
    sunday: 'Sunday',
    monday: 'Monday',
    tuesday: 'Tuesday',
    wednesday: 'Wensday',
    thursday: 'Thursday',
    friday: 'Friday',
    saturday: 'Saturday',
    yearly: 'Yearly',
    annually: 'Annually',
    monthly: 'Monthly',
    daily: 'Daily',
    hourly: 'Hourly',
    afterReboot: 'After rebooting',
    anyValue: 'any value',
    valueListSeparator: 'value list separator',
    rangeOfValues: 'range of values',
    stepValues: 'step values',
    allowedValues: 'allowed values',
    alternativeSingleValues: 'alternative single values',
    nonStandard: 'non-standard',
    notWorkEveryCron: 'May not work with every cron',
    expNotComplete: 'The expression is not completed'
  }
}