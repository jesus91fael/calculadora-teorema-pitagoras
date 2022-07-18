export interface ButtonType {
  value: string;
  type: "button" | "submit" | "reset" | undefined
  onClick?: () => void
}
