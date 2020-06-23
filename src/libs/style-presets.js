import { css } from 'styled-components'

export const Colors = {
  Primary: '#26dafd'
}

export const Animations = {
  stretch: () => {
    return css`
      @keyframes stretch {
        from {
          transform: scale(1, 0);
        }

        to {
          transform: scale(1, 1);
        }
      }
    `
  }
}