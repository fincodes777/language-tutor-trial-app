export const fonts = {
  POPPINS: 'Poppins_400Regular',
  POPPINS_MEDIUM: 'Poppins_500Medium',
  POPPINS_SEMIBOLD: 'Poppins_600SemiBold',
  POPPINS_BOLD: 'Poppins_700Bold',
} as const;

export const typeScale = {
  H1: { size: 32, weight: '700', lineHeight: 38 },
  H2: { size: 24, weight: '600', lineHeight: 30 },
  H3: { size: 20, weight: '600', lineHeight: 24 },
  H4: { size: 16, weight: '500', lineHeight: 20 },
  BODY_LARGE: { size: 16, weight: '400', lineHeight: 24 },
  BODY_MEDIUM: { size: 14, weight: '400', lineHeight: 20 },
  BODY_SMALL: { size: 13, weight: '400', lineHeight: 18 },
  CAPTION: { size: 11, weight: '400', lineHeight: 14 },
} as const;
