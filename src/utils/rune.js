const someRuneAlphabets = [
  'ᚪ',
  'ᚫ',
  'ᛉ',
  'ᚨ',
  'ᛒ',
  'ᛍ',
  'ᛣ',
  'ᛤ',
  'ᚳ',
  'ᛛ',
  'ᛀ',
  'ᚺ',
  'ᛨ',
  'ᛝ',
  'ᛜ',
  'ᛡ',
  'ᛁ',
  'ᛇ',
  'ᛃ',
  'ᚴ',
  'ᚲ',
  'ᛚ',
  'ᛅ',
  'ᚼ',
  'ᛘ',
  'ᚬ'
]

export function getRuneAlpha(charCode) {
  return someRuneAlphabets[charCode]
}

export function getRune(sentence = '') {
  let raw = ''
  for (let i = 0; i < sentence.length; i ++) {
    raw += getRuneAlpha(sentence[i].toUpperCase().charCodeAt() - 65)
  }

  return raw
}