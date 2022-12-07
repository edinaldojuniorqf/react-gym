import styled, { css } from 'styled-components'
import { VARIANT } from '../Button'

interface WrapperProps {
	variant?: VARIANT
}

export const Wrapper = styled.div<WrapperProps>`
	display: flex;

	button {
		flex: 1;
		font-style: normal;
		font-weight: 700;
		font-size: 16px;
		line-height: 150%;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		padding: 16px 24px;
		gap: 10px;
		border-radius: 6px;
		cursor: pointer;
		color: #fff;
		background: ${props => props.theme.colors.primary_700};
		border: 'none';

		&:active {
			background: ${props => props.theme.colors.primary_500};
		}
	}

	${props => {
    if (props.variant === VARIANT.OUTLINE) {
      return css`
				button {
					color: ${props.theme.colors.primary_700};
					background: transparent;
					border: 1px solid ${props.theme.colors.primary_700};

					&:hover, &:active {
						background: ${props.theme.colors.primary_500};
						color: ${props.theme.colors.white};
					}
				}
			`
    }

    if (props.variant === VARIANT.DARK) {
      return css`
				button {
					color: ${props.theme.colors.gray_200};
					border: none;
					background: ${props => props.theme.colors.gray_600};

					&:hover, &:active {
						background: ${props.theme.colors.gray_500};
					}
				}
			`
    }
  }}
`