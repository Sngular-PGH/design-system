import type * as React from 'react';
/** Logotipo S|NGULAR o isotipo S|, dibujado desde los SVG originales. */
export interface LogoProps { type?: 'logotype' | 'isotype'; variant?: 'positive' | 'negative' | 'solid-navy' | 'solid-white'; /** alto en px (logotipo: ≥36 a color, ≥24 sólido) */ height?: number; title?: string; className?: string; style?: React.CSSProperties }
export declare function Logo(props: LogoProps): React.ReactElement;
/** Barra vertical azul: inicio de un párrafo (text) o junto a una imagen (image). */
export interface CursorProps { size?: 'text' | 'image'; height?: number | string; onNavy?: boolean; className?: string; style?: React.CSSProperties }
export declare function Cursor(props: CursorProps): React.ReactElement;
/** Párrafo introducido por el cursor. */
export interface CursorTextProps { big?: boolean; onNavy?: boolean; className?: string; children?: React.ReactNode }
export declare function CursorText(props: CursorTextProps): React.ReactElement;
/** Texto seleccionado: fondo blue, texto white. Máximo 1–2 por composición. */
export interface HighlightProps { className?: string; children?: React.ReactNode }
export declare function Highlight(props: HighlightProps): React.ReactElement;
/** Título especial: S| + caja blue. Una vez por composición. */
export interface SpecialTitleProps { size?: 'title' | 'label'; as?: 'h1' | 'h2' | 'h3' | 'p'; onNavy?: boolean; className?: string; children?: React.ReactNode }
export declare function SpecialTitle(props: SpecialTitleProps): React.ReactElement;
/** La "S" gigante escondida tras el cursor, cortada por un panel. Decorativa. */
export interface BigSProps { height?: number; onNavy?: boolean; panel?: boolean; className?: string }
export declare function BigS(props: BigSProps): React.ReactElement;
/** Overline en mayúsculas que introduce un título. */
export interface OverlineProps { tone?: 'ink' | 'accent'; onNavy?: boolean; className?: string; children?: React.ReactNode }
export declare function Overline(props: OverlineProps): React.ReactElement;
/** Botón recto. Un solo primary por vista. */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { variant?: 'primary' | 'secondary' | 'ghost'; size?: 'md' | 'lg'; /** nombre de Material Symbol */ icon?: string; iconPosition?: 'start' | 'end'; href?: string; onNavy?: boolean }
export declare function Button(props: ButtonProps): React.ReactElement;
/** Icono Material Symbols Outlined por nombre. Requiere la fuente de Google Fonts en la página. */
export interface IconProps { name: string; size?: number; weight?: 300 | 400; fill?: boolean; /** texto accesible; sin él el icono es decorativo */ label?: string; className?: string; style?: React.CSSProperties }
export declare function Icon(props: IconProps): React.ReactElement;
/** Campo de texto con etiqueta visible, ayuda y error. */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> { label: string; hint?: string; error?: string }
export declare function Input(props: InputProps): React.ReactElement;
/** Cifra destacada (+1300 People). */
export interface StatProps { value: React.ReactNode; label: React.ReactNode; note?: React.ReactNode; onNavy?: boolean; className?: string }
export declare function Stat(props: StatProps): React.ReactElement;
/** Tarjeta de servicio, caso de éxito o insight. */
export interface CardProps { title: React.ReactNode; overline?: React.ReactNode; image?: string; imageAlt?: string; href?: string; linkLabel?: string; className?: string; children?: React.ReactNode }
export declare function Card(props: CardProps): React.ReactElement;
declare global { interface Window { Sngular: { Logo: typeof Logo; Cursor: typeof Cursor; CursorText: typeof CursorText; Highlight: typeof Highlight; SpecialTitle: typeof SpecialTitle; BigS: typeof BigS; Overline: typeof Overline; Button: typeof Button; Icon: typeof Icon; Input: typeof Input; Stat: typeof Stat; Card: typeof Card } } }
