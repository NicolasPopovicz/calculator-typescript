import { ReactElement } from "react";

interface IButton {
  text: string,
  styleBtn: "action" | "number",
  colSpan?: boolean
}

export const Button = ({ text, styleBtn, colSpan }: IButton): ReactElement => {
  const styleActions = "h-full outline-none rounded px-4 py-2 border w-24 bg-yellow-400 border-yellow-400 hover:bg-yellow-200 active:bg-yellow-100 active:border-yellow-600 transition-all duration-200";

  const styleNumbers = `outline-none rounded px-4 py-2 border bg-white border-white hover:bg-slate-200 active:bg-slate-100 active:border-slate-400 transition-all duration-200 ${colSpan ? "col-span-3 w-full" : "w-24"}`;

  return (
    <button className={styleBtn === "number" ? styleNumbers : styleActions}>
      {text}
    </button>
  )
}