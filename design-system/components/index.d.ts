import type * as React from 'react';
/** S|NGULAR logotype or S| isotype, rendered from the original SVGs. */
export interface LogoProps { type?: 'logotype' | 'isotype'; variant?: 'positive' | 'negative' | 'solid-navy' | 'solid-white'; /** height in px (logotype: ≥36 color, ≥24 solid) */ height?: number; title?: string; className?: string; style?: React.CSSProperties }
export declare function Logo(props: LogoProps): React.ReactElement;
/** Vertical blue bar: opens a paragraph (text) or sits beside an image (image). */
export interface CursorProps { size?: 'text' | 'image'; height?: number | string; onNavy?: boolean; className?: string; style?: React.CSSProperties }
export declare function Cursor(props: CursorProps): React.ReactElement;
/** Paragraph introduced by the cursor. */
export interface CursorTextProps { big?: boolean; onNavy?: boolean; className?: string; children?: React.ReactNode }
export declare function CursorText(props: CursorTextProps): React.ReactElement;
/** Selected text: blue background, white text. Maximum 1–2 per composition. */
export interface HighlightProps { className?: string; children?: React.ReactNode }
export declare function Highlight(props: HighlightProps): React.ReactElement;
/** Special title: S| + blue box. Once per composition. */
export interface SpecialTitleProps { size?: 'title' | 'label'; as?: 'h1' | 'h2' | 'h3' | 'p'; onNavy?: boolean; className?: string; children?: React.ReactNode }
export declare function SpecialTitle(props: SpecialTitleProps): React.ReactElement;
/** The giant "S" hidden behind the cursor, cut by a panel. Decorative. */
export interface BigSProps { height?: number; onNavy?: boolean; panel?: boolean; className?: string }
export declare function BigS(props: BigSProps): React.ReactElement;
/** Uppercase overline that introduces a title. */
export interface OverlineProps { tone?: 'ink' | 'accent'; onNavy?: boolean; className?: string; children?: React.ReactNode }
export declare function Overline(props: OverlineProps): React.ReactElement;
/** Square button. A single primary per view. */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { variant?: 'primary' | 'secondary' | 'ghost'; size?: 'md' | 'lg'; /** Material Symbol name */ icon?: string; iconPosition?: 'start' | 'end'; href?: string; onNavy?: boolean }
export declare function Button(props: ButtonProps): React.ReactElement;
/** Material Symbols Outlined icon by name. Requires the Google Fonts font on the page. */
export interface IconProps { name: string; size?: number; weight?: 300 | 400; fill?: boolean; /** accessible text; without it the icon is decorative */ label?: string; className?: string; style?: React.CSSProperties }
export declare function Icon(props: IconProps): React.ReactElement;
/** Text field with a visible label, hint, and error. */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> { label: string; hint?: string; error?: string }
export declare function Input(props: InputProps): React.ReactElement;
/** Featured figure (+1300 People). */
export interface StatProps { value: React.ReactNode; label: React.ReactNode; note?: React.ReactNode; onNavy?: boolean; className?: string }
export declare function Stat(props: StatProps): React.ReactElement;
/** Service, success story, or insight card. */
export interface CardProps { title: React.ReactNode; overline?: React.ReactNode; image?: string; imageAlt?: string; href?: string; linkLabel?: string; className?: string; children?: React.ReactNode }
export declare function Card(props: CardProps): React.ReactElement;
declare global { interface Window { Sngular: { Logo: typeof Logo; Cursor: typeof Cursor; CursorText: typeof CursorText; Highlight: typeof Highlight; SpecialTitle: typeof SpecialTitle; BigS: typeof BigS; Overline: typeof Overline; Button: typeof Button; Icon: typeof Icon; Input: typeof Input; Stat: typeof Stat; Card: typeof Card } } }
