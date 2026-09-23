#!/usr/bin/env python3
"""Checks WCAG 2.1 contrast between two HEX colors.

Usage: python check_contrast.py 0070F6 F2F3F4 [--large]
Prints the ratio and whether it meets AA (4.5:1 normal text, 3:1 large text/icons).
"""
import sys

def lum(h):
    h = h.lstrip('#')
    if len(h) == 3:
        h = ''.join(c * 2 for c in h)
    c = [int(h[i:i + 2], 16) / 255 for i in (0, 2, 4)]
    c = [x / 12.92 if x <= 0.03928 else ((x + 0.055) / 1.055) ** 2.4 for x in c]
    return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2]

def ratio(a, b):
    x, y = sorted([lum(a), lum(b)], reverse=True)
    return (x + 0.05) / (y + 0.05)

if __name__ == '__main__':
    args = [a for a in sys.argv[1:] if not a.startswith('--')]
    if len(args) != 2:
        sys.exit(__doc__)
    large = '--large' in sys.argv
    r = ratio(*args)
    need = 3.0 if large else 4.5
    print(f"{args[0]} on {args[1]}: {r:.2f}:1 -> {'PASSES' if r >= need else 'FAILS'} AA ({'large text' if large else 'normal text'}, minimum {need}:1)")
