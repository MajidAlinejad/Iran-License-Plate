const governmental = () => {
  return {
    type: "governmental",
    letter: "الف",
    bg: "#ee161f",
    text: "#ffffff",
  };
};

const personal = (farsiLetter: string) => {
  return {
    type: "personal",
    letter: farsiLetter,
    bg: "#ffffff",
    text: "#000000",
  };
};
const handicapped = () => {
  return {
    type: "handicapped",
    letter: "ژ",
    bg: "#ffffff",
    text: "#000000",
  };
};
const temporary = () => {
  return {
    type: "temporary",
    letter: "گ",
    bg: "#ffffff",
    text: "#000000",
  };
};

const taxi = () => {
  return {
    type: "taxi",
    letter: "ت",
    bg: "#ffca0b",
    text: "#000000",
  };
};
const publicPlaque = () => {
  return {
    type: "public",
    letter: "ع",
    bg: "#ffca0b",
    text: "#000000",
  };
};
const agriculture = () => {
  return {
    type: "agriculture",
    letter: "ک",
    bg: "#ffca0b",
    text: "#000000",
  };
};

const police = () => {
  return {
    type: "police",
    letter: "پ",
    bg: "#005224",
    text: "#ffffff",
  };
};
const sepah = () => {
  return {
    type: "sepah",
    letter: "ث",
    bg: "#005224",
    text: "#ffffff",
  };
};
const military = () => {
  return {
    type: "military",
    letter: "ش",
    bg: "#cfa260",
    text: "#000000",
  };
};

const headquarter = () => {
  return {
    type: "headquarter",
    letter: "ف",
    bg: "#0079c1",
    text: "#ffffff",
  };
};
const ministry = () => {
  return {
    type: "ministry",
    letter: "ز",
    bg: "#0079c1",
    text: "#ffffff",
  };
};

const diplomatic = () => {
  return {
    type: "diplomatic",
    letter: "D",
    bg: "#00a2e8",
    text: "#000000",
  };
};
const service = () => {
  return {
    type: "service",
    letter: "S",
    bg: "#00a2e8",
    text: "#000000",
  };
};

interface PlaqueInfo {
  type:
    | "governmental"
    | "personal"
    | "handicapped"
    | "taxi"
    | "police"
    | "sepah"
    | "military"
    | "ministry"
    | "headquarter"
    | "agriculture"
    | "temporary"
    | "diplomatic"
    | "service";
  letter: string;
  bg: string;
  text: string;
}

export function getPlaqueInfo(letter?: string): PlaqueInfo {
  const AvailibleLetters = {
    f: () => governmental(), //الف
    b: () => personal("ب"), // ب
    j: () => personal("ج"), // ج
    d: () => personal("د"), // د
    s: () => personal("س"), // س
    c: () => personal("ص"), // ص
    t: () => personal("ط"), // ط
    q: () => personal("ق"), // ق
    l: () => personal("ل"), // ل
    m: () => personal("م"), // م
    n: () => personal("ن"), // ن
    v: () => personal("و"), // و
    h: () => personal("هـ"), // ه
    y: () => personal("ی"), // ی
    //
    H: () => handicapped(), // ژ
    //
    T: () => taxi(), // ت
    A: () => publicPlaque(), // ع
    //
    P: () => police(), // پ
    C: () => sepah(), // ث
    M: () => military(), // ش
    //
    Z: () => ministry(), // ز
    F: () => headquarter(), // ف
    //
    K: () => agriculture(), // ک
    G: () => temporary(), // گ
    //
    D: () => diplomatic(), // D
    S: () => service(), // S
  };
  //@ts-ignore
  return AvailibleLetters[letter || "b"]();
}
